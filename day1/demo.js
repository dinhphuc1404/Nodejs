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
let soPhut = parseInt(prompt("Nhap so phut da su dung"));
let phi =0;
let tong = parseFloat();
let phiCoDinh = 25000;

document.write("Ban da goi "+ soPhut +"phut"+"<br>");
if(soPhut>200){
    phi = (soPhut-200)*200+150*400+50*600;
} else if(soPhut>50){
    phi = (soPhut-50)*400+50*600;
} else {
    phi = soPhut*600;
}
 tong = 0.01*phi+phiCoDinh;

document.write("So tien phai nop cua ban la: "+tong);