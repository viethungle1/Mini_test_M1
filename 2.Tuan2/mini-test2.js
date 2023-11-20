// Bài 1 Cho trước 1 mảng n phần tử
// Viết chương trình đếm in ra số lượng các số chẵn trong mảng
// let number=+prompt("Nhập n phần tử")
// let arr=[]
// for (let i = 0; i < number; i++) {
//     arr[i]=+prompt("Nhập phần tử cho mảng")
// }
// for (let i = 0; i <arr.length ; i++) {
//     if (arr[i] % 2 == 0) {
//         document.write(arr[i] + '<br>')
//     }
// }

// Bài 2 Cho trước 1 mảng n phần tử
// Viết chương trình cho phép đếm xem có bao nhiêu phần tử a ( a được nhập vào tử bàn phím)
// let number=+prompt("Nhập n phần tử")
// let arr=[]
// let count=0;
// for (let i = 0; i < number; i++) {
//     arr[i]=prompt("Nhập phần tử cho mảng")
// }
// for (let i = 0; i <= arr.length ; i++) {
//     if (arr[i] == "a"){
//         count++;
//     }
// }
// document.write("có " + count + " phần tử a")

// Bài 3 Cho trước 1 mảng bao gồm n phần tử
// Viết chương trình tính tổng các số nguyên tố trong mảng
// let count =0;
// let start = +prompt("moi ban nhap so bat dau");
// let number = + prompt("moi ban nhap so luong phan tu");
// let sumPrime=0
// while (count<number){
//     if (checkPrime(start)){
//         sumPrime +=start;
//         count++
//     }
//     start++;
// }
// document.write('tổng các nguyên tố là ' +sumPrime)
// function checkPrime(n) {
//     let isPrime = true;
//     if (n<2){
//         isPrime=false;
//     }
//     else {
//         if (n>3){
//             for (let i = 2; i < n; i++) {
//                 if (n%i==0){
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
//     }
//     return isPrime;
// }
// Bài 4 Viết chương trình tính tổng các số nguyên tố nhỏ hơn 500
// let total =0;
// if (checkPrime(n)){
//      total+=n
//     }
// document.write(total)
// function checkPrime(n) {
//     let isPrime = true;
//     if (n<2){
//         isPrime=false;
//     }
//     else {
//         if (n>3){
//             for (let i = 2; i < n; i++) {
//                 if (n%i==0 && n<500){
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
//     }
//     return isPrime;
// }
var x = [1,3,5];
var y = x[0]+x[1];
x.push(y);
console.log(x);
