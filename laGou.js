var express = require("express");
var expressStatic = require("express-static")
var server = express();
var fs = require("fs")
var mysql = require("mysql");
var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "@1997714@gB",
	port : "3307",
	database : "lagou"
})
connection.connect()
//获取数据放入数据库
// var data = fs.readFileSync("./laGou/data/data.json");
// var data = JSON.parse(data);
// for(var i in data){
// 	for(var n = 0; n < data[i].length;n++){
// 		city = data[i][n].city
// 		companyFullName = data[i][n].companyFullName
// 		createtime = data[i][n].createTime
// 		positionName = data[i][n].positionName
// 		salary = data[i][n].salary
// 		companyLogo = data[i][n].companyLogo
		
// 		connection.query("INSERT INTO lagoudata(name,city,ceartetime,positionname,salary,companylogo) VALUES(?,?,?,?,?,?)",[companyFullName,city,createtime,positionName,salary,companyLogo],(error,data) =>{
// 			if(error){
// 				console.log(error)
// 			}
// 			else{
// 				console.log(data)
// 			}
// 		})
// 	}
// }
server.get("/",(am,bm) =>{
	connection.query("SELECT * FROM lagoudata",function(error,data){
		if(error){
			console.log(error)
		}
		else{
			return bm.send(data)
		}
	})
})
server.get("/POST",(am,bm) =>{
	var city = fs.readFileSync("./laGou/data/city.json");
	// var city = JSON.parse(city);
	return bm.send(city)
})

server.use(expressStatic("./laGou")) 
server.listen(82)