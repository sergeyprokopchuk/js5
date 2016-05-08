var firstQ = document.getElementsByName("q1");
var secondQ = document.getElementsByName("q2");
var thirdQ = document.getElementsByName("q3");
var fourthQ = document.getElementsByName("q4");
var fifthQ = document.getElementsByName("q5");

document.getElementById("testresult").onclick = function() { 
testResult(); 
}
 
var result = 0;
var checkRes = 0;


function testResult() {
	result = 0;
	if (firstQ[0].checked) {
		result += 2;
	};
	
	if (secondQ[2].checked) {
		result += 2;
	};
	
	if (thirdQ[3].checked) {
		result += 2;
	};

    
       if (!fourthQ[0].checked && fourthQ[1].checked && !fourthQ[2].checked && fourthQ[3].checked)   
    {
        result +=2;   
    }    
	  
   
   
   if (fifthQ[0].checked && fifthQ[1].checked && !fifthQ[2].checked && !fifthQ[3].checked)   
    {
        
       result +=2;  
    } 

	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}