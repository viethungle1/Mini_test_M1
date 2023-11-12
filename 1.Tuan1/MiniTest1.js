// Bài 1

// let number =parseInt(prompt("Mời bạn nhập một số bất kỳ"));
// let sqrt=number*number;
// if (number*1==number) {
//     alert("Bình phương của chữ số là " +sqrt);
// } else {
//     alert(" Mời bạn nhập lại ");
// }

// Bài 2

// function area() {
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
//     let Result;
//
//     Result = "Diện tích là " + (a*b);
//
//     document.getElementById("Result").innerText = Result;
// }

// Bài 3
// a)
// function tinh() {
//     let a = document.getElementById("a").value;
//     let s;
//     let c;
//     c = "Chu vi hình vuông là " +(a * 4);
//     s = "Diện tích hình vuông là " +(a*a);
//     document.getElementById("chuvi").innerText = c;
//     document.getElementById("dientich").innerText = s;
//     document.getElementById("canh").innerText = a;
// }

// b)
// function tinh() {
//     let a = parseInt(document.getElementById("a").value);
//     let b = parseInt(document.getElementById("b").value);
//     let tinha;
//     let tinhb
//     if (a*1==a && b*1==b) {
//         tinha="Bình phương của a là "+a*a;
//         tinhb="Bình phương của b là "+b*b;
//         document.getElementById("ba").innerText=tinha;
//         document.getElementById("bb").innerText=tinhb;
//     }else
//         alert("Mời bạn nhập lại")
// }

// c)
// function tinh() {
//     let a = parseInt(document.getElementById("a").value);
//     let b = parseInt(document.getElementById("b").value);
//     let subtotal;
//     if (b>a) {
//         subtotal="Tổng giá trị từ a đến b là "+((b+a)*(b-a+1))/2;
//         document.getElementById("subtotal").innerText=subtotal;
//     }else {
//         subtotal="Tổng giá trị từ b đến a là "+((b+a)*(a-b+1))/2;
//         document.getElementById("subtotal").innerText=subtotal;
//     }
// }

// d)
// function tinh() {
//     let nam = document.getElementById("year").value;
//     let theky;
//     if (nam>0) {
//        if (nam%100==0) {
//            theky="Năm thuộc thế kỷ thứ " +nam/100;
//            document.getElementById("cen").innerText = theky;
//        }else {
//            theky="Năm thuộc thế kỷ thứ " +((((nam-nam%100)/100))+1);
//            document.getElementById("cen").innerText = theky;
//        }
//     }else {
//         alert("Mời bạn nhập lại")
//     }
// }

// e)
function ketqua() {
    let a = document.getElementById("canha").value;
    let b = document.getElementById("canhb").value;
    let c = document.getElementById("canhc").value;
    if (a + b > c || b + c > a || a + c > b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            document.getElementById("ketqua").innerText = "Đây là tam giác vuông";
        } else if (a == b && b == c && a == c) {
            document.getElementById("ketqua").innerText = "Đây là tam giác đều"
        } else if (a == b || b == c || a == c) {
            document.getElementById("ketqua").innerText = "Đây là tam giác cân"
        } else {
            document.getElementById("ketqua").innerText = "Đây là hình tam giác"
        }
    } else {
        document.getElementById("ketqua").innerText = "Đây không phải là hình tam gác"
    }
}
