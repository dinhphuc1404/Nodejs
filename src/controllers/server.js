var http = require("http");
var fs = require("fs");
var qs = require("qs");

const students = [
      {
            id: 1,
            name: "haiTT",
            address: "Quảng Nam",
            point: 8
      },
      {
            id: 2,
            name: "TrungDP",
            address: "Quảng Nam",
            point: 8
      },
      {
            id: 3,
            name: "TrungDC",
            address: "Quảng Nam",
            point: 8
      }
]

var server = http.createServer(function (req, res) {
      // const data = fs.readFileSync("../views/home.html",'utf-8')
      // res.write(data);
      // return res.end();
      const url = req.url;
      let data;
      switch(url) {       
            case "/students":
                  displayList(req, res);
                   break; 
            case "/create": 
                  data = fs.readFileSync("../views/create.html");
                  res.write(data);
                  return res.end();
                
            case "/createStudent": 
                  let dataStudent = '';
                  req.on('data', function(chunk) {
                        dataStudent += chunk;
                  });
                  req.on('end', () => {
                       let student = qs.parse(dataStudent) 
                       student.id = parseInt(student.id);
                       student.point = parseFloat(student.point);
                       students.push(student);
                       displayList(req, res);
                      
                  })
                  break;
             default: 
                   data = fs.readFileSync("../views/home.html",'utf-8')    
                   res.write(data);
                   return res.end();
      }
    
})

server.listen(3000, () => {
    console.log("server đang chạy");
})

let displayList = function(req, res) {
      data = fs.readFileSync("../views/list.html",'utf-8') 
      let temp = "";
      students.forEach(function(element) {
      temp += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.address}</td>
            <td>${element.point}</td>
            </tr>`
      })     
      data = data.replace("{students}", temp);
      res.write(data);
      return res.end();

}