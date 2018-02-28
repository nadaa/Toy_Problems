	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	// 
	// 
	// 
	

	function swap(input){
		// since string is immutable, we can convert it first to an array
		strArr=input.split('');

       // reduce function with acc='' will return the swapped string
		return strArr.reduce(function(acc,elem){
			
			// ascii range for upper case [65-90]
			if (elem.charCodeAt()>=65 && elem.charCodeAt()<=90)
				
				return acc+elem.toLowerCase();

			// ascii for Lower Case [97-122]
			else if(elem.charCodeAt()>=97 && elem.charCodeAt()<=122)
				return acc+elem.toUpperCase();

			// in case the string contains non-alphabetical charecters
			else 
				return acc+elem;
		},'')
	}