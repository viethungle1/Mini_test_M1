// Bài 1:
// Nhập số nguyên dương x bất kỳ.
    // Viết hàm tính giai thừa của x, hàm có 1 tham số

// let number = +prompt("Nhập một số bất kỳ");
// let result =1;
// function factorial (x) {
//     for (let i = 1; i <= x; i++) {
//         result *=i;
//     }
//     return result
// }
// alert("Giá trị giai thừa của "+ number+" là " +factorial(number))

// Bài 2:
// Viết hàm in ra 15 số chia hết cho 3 đầu tiên bắt đầu từ số n.
// let start = +prompt("Nhập số bắt đầu")
// function print (x) {
//     let count = 0;
//     let result=""
//     while (count<15) {
//         if (x%3==0) {
//             result += x + '<br>'
//             count++
//         }
//         x++
//     }
//     return result
// }
// document.write(print(start))

// B3:
//     Cho 1 mảng số có sẵn.
//     Viết hàm trả về 1 mảng các số >0 của mảng đã cho

let arr=[2,3,4,8,9,-5,1]
function newArr (x) {
    let arr1=[]
    for (let i = 0; i < x.length; i++) {
        if (x[i]>0) {
            arr1.push(x[i])
        }
    }
    return arr1;
}
console.log(newArr(arr))