document.getElementById("one").onclick = function(){ butVal(1); }
document.getElementById("two").onclick = function(){ butVal(2); }
document.getElementById("three").onclick = function(){ butVal(3); }
document.getElementById("four").onclick = function(){ butVal(4); }
document.getElementById("five").onclick = function(){ butVal(5); }
document.getElementById("six").onclick = function(){ butVal(6); }
document.getElementById("seven").onclick = function(){ butVal(7); }
document.getElementById("eight").onclick = function(){ butVal(8); }
document.getElementById("nine").onclick = function(){ butVal(9); }
document.getElementById("zero").onclick = function(){ butVal(0); }
document.getElementById("butequals").onclick = function(){ equals("="); }
document.getElementById("butclear").onclick = function(){ clear(); }
document.getElementById("dot").onclick = function(){ dot(); }
document.getElementById("butneg").onclick = function(){ plusMinus(); }
document.getElementById("plus").onclick = function(){ operator("+"); }
document.getElementById("multiply").onclick = function(){ operator("*"); }
document.getElementById("divide").onclick = function(){ operator("/"); }
document.getElementById("minus").onclick = function(){ operator("-"); }

var calc = document.getElementById('disp');
var oper = "";
var num = "";

function butVal(z){
  calc.value = calc.value + z;
}

function operator(op){
	oper = op;
	num = calc.value;
	calc.value = "";
}

 
function equals(){
	rez(eval(num), eval(calc.value), oper);
}
 
 
function rez(n1, n2, op){
	if(op == "+"){
		calc.value = n1 + n2;
	}
	else if(op == "-"){
		calc.value = n1 - n2;
	}
	else if(op == "*"){
		calc.value = n1 * n2;
	}
	else if(op == "/"){
		if(calc.value == 0){
            calc.value = "Нельзя делить на 0!";
             return
        }
		calc.value = n1 / n2;
	}
}
 
function plusMinus(){
	calc.value = calc.value * -1;
}

function clear(){
	calc.value = "";
	num = "";
}
	 
function dot() {
		calc.value = calc.value + "."
}	
