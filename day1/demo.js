//version 1
//bai 1
// let a ;
// let b;
// a = +prompt("Nhập số thứ nhất: ");
// b = +prompt("Nhập số thứ hai");
// if(a%b==0) {
//     alert(a + " chia hết cho "+ b );
// } else {
//     alert(a + "không chia hết cho "+ b );
// }

// bai 2
// let age ;
// a = +prompt("Nhập tuổi");
// if(age<15) {
//     alert("Không đủ điều kiện học lớp 10");
// } else {
//     alert("Đủ điều kiện");
// }

// bai 3
// let a = +prompt("Nhập số nguyên n");
// if(a>0) {
//     alert("Lơn hơn 0");
// } else {
//     alert("Nhỏ hơn 0");
// }

// bai 4
// let a = +prompt("Nhập số thứ nhất");
// let b = +prompt("Nhập số thứ hai");
// let c = +prompt("Nhập số thứ ba");
// if(b>a && b>c) {
//     alert(b + " là số lớn nhất");
// } else if(c>a && c>b) {
//     alert(c+ " là số lớn nhất");
// } else if(a===b && b===c) {
//     alert("Bằng nhau");
// } else {
//     alert(a + " là số lớn nhất");
// }

// bai 5
// let hs1 = +prompt("Nhập điểm bài kiểm tra");
// let hs2 = +prompt("Nhập điểm thi giữa kì");
// let hs3 = +prompt("Nhập điểm thi cuối kì");
// let avr = (hs1 + hs2*2 + hs3*3)/6;
// if(avr>=8) {
//     alert("Học lực giỏi");
// } else if(avr<8 && avr>=6.5) {
//     alert("Học lực khá");
// } else if(avr<6.5 && avr >5 ) {
//     alert("Học lực trung bình");
// } else {
//     alert("Học lực yếu");
// }

//bai 6
// let doanhso = parseInt(prompt("Nhap vao doanh so: "));
//   let hoahong = parseFloat();
//   if(doanhso<=100){
//        hoahong = doanhso*5/100;
//        document.write("Voi tong doanh so la: "+doanhso+"</br>");
//        document.write("Thi hoa hong nhan duoc la: "+hoahong);
//    } else if(doanhso<=300){
//        hoahong = doanhso*10/100;
//        document.write("Voi tong doanh so la: "+doanhso+"<br>");
//        document.write("Thi hoa hong nhan duoc la: "+hoahong);
//    } else if(doanhso>300){
//        hoahong = doanhso*15/100;
//        document.write("Voi tong doanh so la: "+doanhso+"<br>");
//        document.write("Thi hoa hong nhan duoc la: "+hoahong);
//          }
//bai 7
// let soPhut = parseInt(prompt("Nhap so phut da su dung"));
// let phi =0;
// let tong = parseFloat();
// let phiCoDinh = 25000;

// document.write("Ban da goi "+ soPhut +"phut"+"<br>");
// if(soPhut>200){
//     phi = (soPhut-200)*200+150*400+50*600;
// } else if(soPhut>50){
//     phi = (soPhut-50)*400+50*600;
// } else {
//     phi = soPhut*600;
// }
//  tong = 0.01*phi+phiCoDinh;

// document.write("So tien phai nop cua ban la: "+tong);

//version 2
// bai 1
//  let C = parseFloat(prompt("Nhap vao C"));
//     let F = C  *  9/5 + 32;
//     document.write(C+"C= "+F+"F");

//bai 2
// let m = parseInt(prompt("Nhập vào mét"));
// let ft =m * 3.2808;
// document.write(m+" mét = "+ft +"feet ");

//bai 3
// let a = parseInt(prompt("Nhap canh a: "));
//   let s = a*a;
//   document.write("Dien tich hinh vuong la: "+s);

//bai 4
// let a = parseInt(prompt("Nhap chieu dai"));
//      let b = parseInt(prompt("Nhap chieu rong"));
//      let s = a*b;
//      document.write("Dien tich hinh chu nhat la: "+s);

//bai 5
// let chieucao = parseInt(prompt("Nhap chieu cao"));
//      let day = parseInt(prompt("Nhap chieu dai day"));
//      let s = 1/2*chieucao*day;
//      document.write("Dien tich tam giac vuong la: "+s);

//bai 6
// let a = parseInt(prompt("Nhap vao a"));
//       let b = parseInt(prompt("Nhap vao b"));
//           if(a==0){
//               if(b==0){
//                   alert("Phuong trinh vo so nghiem");
//               } else {
//                   alert("Phuong trinh vo nghiem");
//               }
//           } else {
//               alert("Phuong trinh co nghiem: "+-b+"/"+a);
//           }

//bai 7
// let a = parseInt(prompt("Nhap a"));
// document.write("a = "+a+"<br>");
// let b = parseInt(prompt("Nhap b"));
// document.write("b = "+b+"<br>");
// let c = parseInt(prompt("Nhap c"));
// document.write("c ="+c+"<br>");
// let delta = b*b-4*a*c;
// let deta =  Math.sqrt(delta);
// if(delta<0){
//     document.write("Phuong trinh vo nghiem");
// } else if(delta == 0){
//     document.write('Phương trình có nghiệm kép ' + (-b/(2*a)));
// } else{
//     document.write('Phương trình có là nghiệm : ' + ((-b+deta)/(2*a)) + ' và ' + ((-b-deta)/(2*a)) );
// }

//bai 8
// let age = parseInt(prompt("Nhập tuổi"));
//   if(age<120 && age>0){
//      alert("So tuoi cua ban la: "+age);
//   } else {
//       alert("Tuoi khong ton tai.");
//   }

//bai 9
// let a = parseFloat(prompt("Nhap a"));
//     let b = parseFloat(prompt("Nhap b"));
//     let c = parseFloat(prompt("Nhap c"));
//         if(a>0 && b>0 && c>0){
//             if(a+b>c && b+c>a && a+c>b){
//                 alert("Day la tam giac");

//             } else {
//                 alert("Day khong phai tam giac");
//             }
//         } else {
//             alert("Day khong phai tam giac");
//         }

//bai 10
// let sodien = parseFloat(prompt("Nhap vao so dien"));
//         document.write("So dien cua ban la: "+sodien+"<br>");
//         let bac1 = 1678;
//         let bac2 = 1734;
//         let bac3 = 2014;
//         let bac4 = 2536;
//         let bac5 = 2834;
//         let bac6 = 2927;
//         if(sodien<0){
//             document.write("Vui long nhap lai so dien");
//         } else if(sodien<=50){
//             tiendien = sodien*bac1;
//             document.write("Ban da dung dien trong khoang 0 - 50 kWh so tien ban phai tra la: "+tiendien);
//         } else if(sodien<=100){
//             tiendien=50*bac1+((sodien-50)*bac2);
//             document.write("Ban da dung dien trong khoang 51 - 100 kWh so tien ban phai tra la: "+tiendien);
//         } else if(sodien<=200){
//             tiendien=50*bac1+(50*bac2)+((sodien-100)*bac3);
//             document.write("Ban da dung dien trong khoang 101 - 200 kWh so tien ban phai tra la: "+tiendien);
//         } else if (sodien<=300) {
//             tiendien = 50 * bac1 + (50 * bac2) + (100 * bac3) + ((sodien - 200) * bac4);
//             document.write("Ban da dung dien trong khoang 201 - 300 kWh so tien ban phai tra la: " + tiendien);
//         } else if(sodien<=400){
//             tiendien=50*bac1+(50*bac2)+(100*bac3)+(100*bac4)+((sodien-300)*bac5);
//             document.write("Ban da dung dien trong khoang 301 - 400 kWh so tien ban phai tra la: "+tiendien);
//         } else if(sodien>400){
//             tiendien=50*bac1+(50*bac2)+(100*bac3)+(100*bac4)+(100*bac5)+((sodien-400)*bac6);
//             document.write("Ban da dung dien tren 400 kWh so tien ban phai tra la: "+tiendien);

//         }

//bai 11
// let thue = parseInt();
//     let luong = parseFloat(prompt("Nhap so tien luong"));
//     document.write("Tien luong cua ban la: "+luong+"<br>");
//     let sothue = parseFloat();
//     let luongrong = 0;
//     if(luong>15){
//         sothue = luong*30/100;
//         thue = 30;
//     } else if(luong>=7){
//         sothue = luong*20/100;
//         thue = 20;
//     } else if(luong<7){
//         sothue = luong*10/100;
//         thue =10;
//     }
//     luongrong = luong - sothue;
//     document.write("Thue thu nhap: "+thue+"% = "+sothue+"<br>");
//     document.write("So tien ban nhan duoc la: "+luongrong);

//bai 12
var soTienBanDau = parseFloat(prompt("Nhập số tiền ban đầu:"));
var soThangChoVay = parseInt(prompt("Nhập số tháng cho vay:"));
var laiXuatHangThang = parseFloat(prompt("Nhập lãi xuất hàng tháng (%):"));
laiXuatHangThang = laiXuatHangThang / 100;
var tongTienLai = 0;
var tongTienThuVe = soTienBanDau;
for (var thang = 1; thang <= soThangChoVay; thang++) {
  var tienLaiThang = tongTienThuVe * laiXuatHangThang;
  tongTienLai += tienLaiThang;
  tongTienThuVe += tienLaiThang;
}
var tongSoTien = soTienBanDau + tongTienLai;
document.writeln("Số tiền ban đầu: " + soTienBanDau.toFixed(2) +"<br>");
document.writeln("Số tháng cho vay: " + soThangChoVay +"<br>");
document.writeln("Lãi xuất hàng tháng: " + (laiXuatHangThang * 100) + "%" +"<br>");
document.writeln("Tổng số tiền lãi: " + tongTienLai.toFixed(2) +"<br>");
document.writeln("Tổng số tiền sau kỳ hạn: " + tongSoTien.toFixed(2) +"<br>");