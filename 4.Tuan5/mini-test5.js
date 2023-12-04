// Bài 1

// let arr1 = [2,3,4,5,6,2,5];
// let delNum=+prompt("Nhập số cần xóa");
// console.log(newArr(arr1,delNum))
// function newArr (arr,num) {
//     for (let i = arr.length-1; i>=0; i--) {
//         if (num==arr[i]) {
//             arr.splice(i,1)
//             // i--;
//         }
//     }
//     return arr;
// }
//     let arr2=[]
//     for (let i = 0; i < arr.length; i++) {
//         if (num != arr[i]) {
//             arr2.push(arr[i])
//         }
//     }
//     return arr2;
// }

// Bài 2

// let english = +prompt("Nhập điểm môn Anh");
// let leterature = +prompt("Nhập điểm môn Văn");
// let math = +prompt("Nhập điểm môn Toán")
//
// function average (t,v,a) {
//     if ((t + v + a)/3 < 5 ) {
//         alert("Không đạt");
//     } else if ((t + v + a)/3 < 8) {
//         alert("Đạt");
//     } else if ((t + v + a)/3 > 8) {
//         alert("Tốt");
//     }
// }
// average(english,leterature,math)

// Bài 3

// class Customer {
//     constructor(name, age, point) {
//         this.name = name;
//         this.age = age;
//         this.point = point;
//     }
//     promotion () {
//         if (this.point >100) {
//             alert("giảm 5%")
//         } else {
//             alert("không được giảm")
//         }
//     }
// }
//
// let person1 = new Customer("Hưng", 26, 105)
// let person2 = new Customer("Thắng", 23, 90)

// Bài 4

// class Rectangle {
//     constructor(heigh, width) {
//         this.heigh = heigh;
//         this.width = width;
//     }
//     getPremeter () {
//         return (this.heigh + this.width)*2;
//     }
//     getArea () {
//         return this.width*this.heigh;
//
//     }
//     drawRec () {
//         let c=document.getElementById("myCanvas");
//         let ctx = c.getContext("2d");
//         ctx.fillStyle="#00000"
//         ctx.fillRect(200,200,this.width, this.heigh)
//     }
// }
// let rectangle1 = new Rectangle(200,100)
// let rectangle2=new Rectangle(300,200)

// Bài 5

let array = [3,2,5,6,8,7,11]
function isPrime(n) {
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
function countPrime (arr) {
    let count =0
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            count ++
        }
    }
    return count
}
alert(countPrime(array))


// LINH TINH
// function checkPrime (arr) {
//     let count=0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 2) {
//             continue
//         } else if (arr[i]==2) {
//             count++
//         } else {
//             for (let j = 2; j < arr[i]; j++) {
//                 if (arr[i] % j ==0 ) {
//                    continue
//                 }
//             }
//         }
//     }
//     return count;
// }
// alert(checkPrime(array))