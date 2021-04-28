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


app.post('/createasset', (req, res)=>{
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

app.post('/createstudent', (req, res)=>{
	const sid = req.body.sid;
	const sname = req.body.sname;
	const sphone = req.body.sphone;

	db.query(
		'INSERT INTO student_info (s_id, s_name, s_phone) VALUES (?, ?, ?)', 
		[sid, sname, sphone], 
		(err, result) => {
			if(err){
				console.log(err);
			}else{
				res.send("Values inserted");
			}
		}
	);
});

app.post('/createemployee', (req, res)=>{
	const eid = req.body.eid;
	const ename = req.body.ename;
	const ephone = req.body.ephone;

	db.query(
		'INSERT INTO employee_info (e_id, e_name, e_phone) VALUES (?, ?, ?)', 
		[eid, ename, ephone], 
		(err, result) => {
			if(err){
				console.log(err);
			}else{
				res.send("Values inserted");
			}
		}
	);
});


app.post('/addnewstudentloan', (req, res)=>{
	const sLoanAss = req.body.sLoanAss;
	const sLoanId = req.body.sLoanId;

	db.query(
		'INSERT INTO student_asset(a_tag,s_id) VALUES (?, ?)', 
		[sLoanAss, sLoanId], 
		(err, result) => {
			if(err){
				console.log(err);
			}else{
				res.send("Values inserted");
			}
		}
	);
});


app.post('/addnewemployeeloan', (req, res)=>{
	const eLoanAss = req.body.eLoanAss;
	const eLoanId = req.body.eLoanId;

	db.query(
		'INSERT INTO employee_asset(a_tag,e_id) VALUES (?, ?)', 
		[eLoanAss, eLoanId], 
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
	db.query('SELECT employee_asset.a_tag, employee_asset.e_id, asset_info.use_type FROM employee_asset INNER JOIN asset_info ON employee_asset.a_tag = asset_info.a_tag', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});

app.get('/getloansstudent', (req, res)=>{
	db.query('SELECT student_asset.a_tag, student_asset.s_id, asset_info.use_type FROM student_asset INNER JOIN asset_info ON student_asset.a_tag = asset_info.a_tag', (err, result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
});


app.put('/updatew', (req, res) =>{
	const id = req.body.id;
	const warrentyexpire = req.body.warrentyexpire;
	db.query(
		"UPDATE asset_info SET w_expire = ? WHERE a_tag = ?", 
		[warrentyexpire, id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/updateename', (req, res) =>{
	const id = req.body.id;
	const ename = req.body.ename;
	db.query(
		"UPDATE employee_info SET e_name = ? WHERE e_id = ?", 
		[ename, id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/updateephone', (req, res) =>{
	const id = req.body.id;
	const ephone = req.body.ephone;
	db.query(
		"UPDATE employee_info SET e_phone = ? WHERE e_id = ?", 
		[ephone, id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});


app.put('/updatesname', (req, res) =>{
	const id = req.body.id;
	const sname = req.body.sname;
	db.query(
		"UPDATE student_info SET s_name = ? WHERE s_id = ?", 
		[sname, id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/updatesphone', (req, res) =>{
	const id = req.body.id;
	const sphone = req.body.sphone;
	db.query(
		"UPDATE student_info SET s_phone = ? WHERE s_id = ?", 
		[sphone, id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});


app.put('/updateass', (req, res) =>{
	const id = req.body.id;
	db.query(
		"UPDATE asset_info SET use_type = 'UNUSED' where asset_info.a_tag = (SELECT a_tag FROM student_asset WHERE s_id = ?)", 
		[id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/updateassempl', (req, res) =>{
	const id = req.body.id;
	db.query(
		"UPDATE asset_info SET use_type = 'UNUSED' where asset_info.a_tag = (SELECT a_tag FROM employee_asset WHERE e_id = ?)", 
		[id], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/addnewstudentloanupdateusetype', (req, res) =>{
	const sLoanUse = req.body.sLoanUse;
	const sLoanAss = req.body.sLoanAss;
	db.query(
		"UPDATE asset_info SET use_type = ? WHERE a_tag = ?", 
		[sLoanUse, sLoanAss], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/addnewemployeeloanupdateusetype', (req, res) =>{
	const eLoanUse = req.body.eLoanUse;
	const eLoanAss = req.body.eLoanAss;
	db.query(
		"UPDATE asset_info SET use_type = ? WHERE a_tag = ?", 
		[eLoanUse, eLoanAss], 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.put('/updateSLOANAssetType', (req, res) =>{
	const id = req.body.id;
	const sLoanAss = req.body.sLoanAss;
	db.query(
		"UPDATE asset_info SET use_type = 'UNUSED' where a_tag = ?", sLoanAss, 
		(err, result)=>{
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
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

app.delete('/deletestudent/:id', (req, res) =>{
	const id = req.params.id
	db.query('DELETE FROM student_info WHERE s_id = ?', id, (err, result) =>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});	
});

app.delete('/deleteemployee/:id', (req, res) =>{
	const id = req.params.id
	db.query('DELETE FROM employee_info WHERE e_id = ?', id, (err, result) =>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});	
});


app.delete('/deletestudentassloan/:id', (req, res) =>{
	const id = req.params.id
	db.query('DELETE FROM student_asset WHERE a_tag = ?', id, (err, result) =>{
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