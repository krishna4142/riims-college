let name=document.getElementById("name");
let nam=document.getElementById("nam");
let telefone =document.getElementById("tel");
let tel=document.getElementById("phone");
let eamail=document.getElementById("email");
let mail=document.getElementById("mail");
let qualification1=document.getElementById("qualification1");
let qul=document.getElementById("qualification11");
let UNIVERSITY1=document.getElementById("UNIVERSITY1");
let university=document.getElementById("UNIVERSITY11")
let year1=document.getElementById("year1");
let year=document.getElementById("year11");
let marks1=document.getElementById("marks1");
let marks=document.getElementById("marks11");
let qualification12=document.getElementById("qualification12");
let qul2=document.getElementById("qualification21");
let year2=document.getElementById("year2");
let year21=document.getElementById("year21");
let UNIVERSITY2=document.getElementById("UNIVERSITY2");
let university2=document.getElementById("UNIVERSITY21");
let marks2=document.getElementById("marks2");
let mark2=document.getElementById("marks21");
let qualification3=document.getElementById("qualification3");
let qul3=document.getElementById("qualification31");
let year3=document.getElementById("year3");
let year31=document.getElementById("year31");
let UNIVERSITY3=document.getElementById("UNIVERSITY3");
let university3=document.getElementById("UNIVERSITY31");
let marks3=document.getElementById("marks3");
let mark3=document.getElementById("marks31");
let b=document.querySelector(".header");
function sai(){
    nam.innerText=name.value;
    tel.innerText=telefone.value;
    mail.innerText=eamail.value;
    qul.innerText=qualification1.value;
    university.innerText=UNIVERSITY1.value;
    year.innerText=year1.value
    marks.innerText=marks1.value;
    qul2.innerText=qualification12.value;
    year21.innerText=year2.value;
    university2.innerText=UNIVERSITY2.value;
    mark2.innerText=marks2.value;
    qul3.innerText=qualification3.value;
    year31.innerText=year3.value;
    university3.innerText=UNIVERSITY3.value;
    mark3.innerText=marks3.value;
    b.classList.add("open");
    b.classList.remove("close")

}