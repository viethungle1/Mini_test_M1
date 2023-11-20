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

// let arr = [7,4,5,8,5,6,8,5,7,10]
//     function prime(n) {
//         if (n < 2) {
//             return  false;
//         } else if (n > 3) {
//             for (let j = 2; j < n; j++) {
//                 if (n % j == 0) {
//                     return false;
//                 }
//             }
//         }
//             return true;
//         }
// let total = 0
// for (let i = 0; i < arr.length; i++) {
//     if (prime(arr[i])) {
//     total += Number(arr[i])
//     }
// }
// document.write(total)
// Bài 4 Viết chương trình tính tổng các số nguyên tố nhỏ hơn 500
function prime(n) {
    if (n < 2) {
        return  false;
    } else if (n > 3) {
        for (let j = 2; j < n; j++) {
            if (n % j == 0) {
                return false;
            }
        }
    }
    return true;
}
let total = 0;
for (let i = 0; i < 500; i++) {
    if (prime(i)) {
        total += i;
    }
}
document.write(total)