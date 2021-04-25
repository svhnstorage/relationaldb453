const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: 'admin',
	host: 'database-1.cras78dsqc40.us-east-1.rds.amazonaws.com',
	password: 'adminfucker',
	database: '435Project'
});


app.post('/create', (req, res)=>{
	const assettag = req.body.assettag;
	const assettype = req.body.assettype;
	const serialno = req.body.serialno;
	const brand = req.body.brand;
	const model = req.body.model;
	const warrentyexpire = req.body.warrentyexpire;

	db.query(
		'INSERT INTO asset_info (a_tag, a_type, serial_no, brand, model, w_expire) VALUES (?, ?, ?, ?, ?, ?)', 
		[assettag, assettype, serialno, brand, model, warrentyexpire], 
		(err, result) => {
			if(err){
				console.log(err);
			}else{
				res.send("Values inserted");
			}
		}
	);
});


//standard gets per table
app.get('/getassets', (req, res)=>{
	db.query('SELECT a_tag, a_type, serial_no, brand, model, w_expire FROM asset_info', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.get('/getstudents', (req, res)=>{
	db.query('SELECT * FROM student_info', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.get('/getemployees', (req, res)=>{
	db.query('SELECT * FROM employee_info', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.get('/getloansemployee', (req, res)=>{
	db.query('SELECT employee_asset.a_tag, employee_asset.e_id, (SELECT use_type FROM asset_info WHERE employee_asset.a_tag = asset_info.a_tag) FROM employee_asset', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.get('/getloansstudent', (req, res)=>{
	db.query('SELECT student_asset.a_tag, student_asset.s_id, (SELECT use_type FROM asset_info WHERE student_asset.a_tag = asset_info.a_tag) FROM student_asset', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

/*
app.put('/update', (req, res) =>{
	const id = req.body.id;
	const wage = req.body.wage;
	db.query(
		"UPDATE employees SET wage = ? WHERE id = ?", 
		[wage, id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});
*/
app.delete('/deleteasset/:id', (req, res) =>{
	const id = req.params.id
	db.query('DELETE FROM asset_info WHERE a_tag = ?', id, (err, result) =>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});	
});

app.listen(3001, ()=>{
	console.log("Yay, your server is running on port 3001");
});