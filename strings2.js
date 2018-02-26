//  Given a sequence of items and a specific item in that sequence, return the item
// 	immediately following the item specified. If the item occurs more than once in a sequence,
// 	return the item after the first occurence. This should work for a sequence of any type.
// 	When the item isn't present or nothing follows it, the function should return null
//  nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
//  nextItem("testing", "t") # "e"

	function nextItem(items, elem){
		
		for (var i=0;i<items.length;i++){

			if(elem===items[i])
			{ 
				return items[i+1];
			}
			
		}
		return null;
	}

//  We need a function that can transform a number into a string.
// 	What ways of achieving this do you know?
// 	numberToString(123); // returns '123';`   
// 	numberToString(999); // returns '999';`

	function numberToString(num) {
	  
		//method 1
		var rem;
		var result='';

		while(num/10>0){
			rem=num%10;
			result=rem+result;
			num=parseInt(num/10);
		}

		return result;
		

	// method 2
	//return num.toString();



	}