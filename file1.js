///area of triangle
var a = 4;
var b = 4;
var c = 5;

var s = (a+b+c)/2;

var area = parseInt(Math.sqrt(s*((s-a)*(s-b)*(s-c))));

document.getElementById("triangle").innerHTML = area;



//////getfilename extension
function getFileExtension(filename){

    const extension = filename.split('.').pop();
    return extension;
}
const result = getFileExtension('file1.js');

document.getElementById("file-extension").innerHTML = result;


////// sum of integers


var a = 5;
var b = 6;
// var result;
if(a==b){
    // result = (a+b)*3;
    document.getElementById("sum").innerHTML = (a+b)*3;
    
    console.log((a+b)*3);
}else{
    // result = a+b;
    document.getElementById("sum").innerHTML = a+b;
    console.log(a+b);
}
