function  hasnain(){
    let bhai1 = document.getElementById("bhai1").value
    let bhai = document.getElementById("bhai").value
let per = (bhai/bhai1*100) 
 document.getElementById("persant").innerHTML = per 

if( per >= 80 && per <= 100 ){
document.getElementById("result").innerHTML= "<h1> ممتاز مع الشرف </h1>"}
else if( per >= 70 &&  per < 80  ){
document.getElementById("result").innerHTML= "<h1> ممتاز </h1>"}
else if (per >= 60 &&  per < 70  ){
document.getElementById("result").innerHTML= "<h1> جييد </h1>"}
else if ( per >= 50 && per < 60){
document.getElementById("result").innerHTML= "<h1> كامياب </h1>"}
else{ document.getElementById("result").innerHTML= "<h1> fail </h1>"}

}