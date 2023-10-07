var http = require("http");
var fs = require("fs");
var qs = require("qs");
var mongoose = require('mongoose');
const { log } = require("console");
var mongoUrl = "mongodb://localhost:27017/nodejs_free"
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl).then(() => console.log("Kết nối DB thành công"));

const schema = new mongoose.Schema({ name: String, age: Number });
const Student = mongoose.model('student', schema);


// const students = [
//       {
//             id: 1,
//             name: "Phúc",
//             age: 22
//       },
//       {
//             id: 2,
//             name: "Khánh",
//             age: 22
//       },
//       {
//             id: 3,
//             name: "Hoài Anh",
//             age: 21
//       },
//       {
//             id: 4,
//             name: "Phúc",
//             age: 22
//       },
//       {
//             id: 5,
//             name: "Phúc",
//             age: 22
//       }
// ]

var server = http.createServer(function (req, res) {
      // const data = fs.readFileSync("../views/home.html",'utf-8')
      // res.write(data);
      // return res.end();
      const url = req.url.split("/")[1];
      let data;
      let dataStudent = '';
      switch (url) {

            case "create":
                  data = fs.readFileSync("../view/create.html", 'utf-8')
                  res.write(data);
                  return res.end();
            case "createStudent":
                  req.on('data', function (chunk) {
                        dataStudent += chunk;
                  });
                  req.on('end', () => {
                        let student = qs.parse(dataStudent)
                        student.age = parseInt(student.age);
                        Student.create(student).then(() => {
                              displayList(req, res);

                        })
                  })
                  break;
            case "delete":
                  deleteStudent(req, res);
                  break;
            case "edit":
                  editStudent(req, res);
                  break;
            case "editStudent":
                  req.on('data', function (chunk) {
                        dataStudent += chunk;
                  });
                  req.on('end', () => {
                        let student = qs.parse(dataStudent)
                        student.age = parseInt(student.age);
                        Student.findOneAndUpdate({_id: student.id},student).then(() => {
                              displayList(req, res);

                        })
                  })
                  break;
            default:
                  displayList(req, res);
      }
})
server.listen(3000, () => {
      console.log("server đang chạy");
})

let deleteStudent = function (req, res) {
      const idStudent = req.url.split("/")[2];
      Student.deleteOne({ _id: idStudent }).then(() => {
            displayList(req, res);
      })
}

let editStudent = function (req, res) {
      const idStudent = req.url.split("/")[2];
      Student.findOne({ _id: idStudent }).then((infoStudent) => {
            data = fs.readFileSync("../view/edit.html", 'utf-8')
            data = data.replace("{id}", infoStudent._id);
            data = data.replace("{name}", infoStudent.name);
            data = data.replace("{age}", infoStudent.age);
            res.write(data);
            return res.end();
      })
}

let displayList = function (req, res) {
      Student.find().then((dataStudent) => {
            let students = dataStudent;
            data = fs.readFileSync("../view/home.html", 'utf-8');
            let temp = " ";
            students.forEach(function (element) {
                  temp += `<tr>
                      <td>${element._id}</td>
                      <td>${element.name}</td>
                      <td>${element.age}</td>
                      <td> <button type="button" class="btn btn-warning" onclick = "location.href = '/edit/${element._id}'">
                      Edit
                    </button></td>
                    <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#view${element._id}">
                      View
                    </button>
                    <div class="modal fade" id="view${element._id}" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="modalTitleId">View</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <h6>ID: ${element.id}</h6>
                          <h6>Name: ${element.name}</h6>
                          <h6>Age: ${element.age}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                      <td>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete${element._id}">
                          Delete
                        </button>
                        <div class="modal fade" id="delete${element._id}" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="modalTitleId">Confirm deletion ?</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                Do you want to delete student ${element.name} ?
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onclick='location.href="/delete/${element._id}"'>Save</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                   </tr>`;
            });
            data = data.replace("{students}", temp);
            res.write(data);
            return res.end();
      });
}