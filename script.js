function fnamei(){
var fname = document.forms["myForm"]["fname"].value;
var lname = document.forms["myForm"]["lname"].value;
var mobile = document.forms["myForm"]["mobile"].value;
var pet = document.forms["myForm"]["pet"].value;
var fav = document.forms["myForm"]["movie"].value;
var day = document.forms["myForm"]["day"].value;
var month = document.forms["myForm"]["month"].value;
var year = document.forms["myForm"]["year"].value;
/*const lnameLength = lnmae.length;
const fnamelength = fnmae.length;
const mobilelength = mobile.length;
const daylength = day.length;
const monthlength = month.length;
const yearlength = year.length;*/





var password = "  ";
var password2 = " ";

    for(i=0;i<500;i++){
        password+=fname.substring(0,6)+lname.substring(Math.floor(Math.random() * lname.length),
        Math.floor(Math.random() * mobile.length),
        Math.floor(Math.random() * day.length)+
        Math.floor(Math.random()  * month.length))+
        mobile.substring(Math.floor(Math.random() * year.length),2)+"<br>";    

    }

    for(let x=0;x>100;x++){
        password2 += fname.substring(0,6)+lname.substring(Math.floor(Math.random() * lname.length),
        Math.floor(Math.random() * day.length))+
        mobile.substring(Math.floor(Math.random() * year.length),11)+"<br>";
    }
    document.getElementById("pass").innerHTML=password;
    document.getElementById("pass2").innerHTML=password2;
    return false;
}
