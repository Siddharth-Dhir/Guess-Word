p1 = localStorage.getItem("User1")
p2 = localStorage.getItem("User2")
P1S = 0;
P2S =0;
document.getElementById('P1').innerHTML=p1 + " : ";
document.getElementById('P2').innerHTML=p2 + " : ";
document.getElementById('P1S').innerHTML=P1S;
document.getElementById('P2S').innerHTML=P2S;
document.getElementById('PQ').innerHTML="Question Turn:- " + p1;
document.getElementById('PA').innerHTML="Answer Turn:- " + p2;
 function Send(){
     Gword= document.getElementById("Word").value;
     word = Gword.toLowerCase()
;
console.log(word);
C1= word.charAt(1);
console.log(C1);
Length=Math.floor(word.length / 2);
C2= word.charAt(Length);
console.log(C2);
C3= word.charAt((word.length) - 2);
console.log(C3);
R1= word.replace(C1, "_");
R2= R1.replace(C2, "_");
R3= R2.replace(C3, "_");
console.log(R3);
QWord='<h4 id="Word_Display"> Q. ' +R3 + '</h4>';
IBox = '<br> Answer: <input type="text" id="input_check_box">';
checkbutton ='<br><br> <button class="btn btn-info" onclick="Chect()"> Check</button>';
Row = QWord + IBox + checkbutton;
document.getElementById("Output").innerHTML=Row;
document.getElementById("Word").value=""; 
 }
 var QT = "1";
 var AT = "2";
function Chect(){
var Get_Answer = document.getElementById("input_check_box").value;
answer = Get_Answer.toLowerCase();

if (answer == word){
 if (AT == "2")   {
     P2S++;
     document.getElementById('P2S').innerHTML=P2S;
 }else{
    P1S++;
    document.getElementById('P1S').innerHTML=P1S;
 }
if (QT == "1"){
    QT = "2";
    document.getElementById('PQ').innerHTML="Question Turn:- " + p2;
}else{
    QT = "1";
    document.getElementById('PQ').innerHTML="Question Turn:- " + p1;
    
}
if (AT == "1"){
    AT = "2";
    document.getElementById('PA').innerHTML="Answer Turn:- " + p2;
}else{
    AT = "1";
    document.getElementById('PA').innerHTML="Answer Turn:- " + p1;
}
document.getElementById("Output").innerHTML="";
}
}
