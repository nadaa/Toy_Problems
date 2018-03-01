 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	var closPrev=num-1;
 	var closNext=num+1;


 	while(true){
 		if(closPrev%10===0)
 			return closPrev;

 		else if(closNext%10===0)
 			return closNext;

 		
 			closPrev-=1;
 			closNext+=1;
 		

 	}
 }