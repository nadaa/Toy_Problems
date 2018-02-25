// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		// convert the char to lowercase
		// get the ascii code of it
		//subtract the ascii code of 'a' from it and add 1
		character=character.toLowerCase()
		var ascii=character.charCodeAt();
		var position=ascii-'a'.charCodeAt()+1;

		return position;

	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		// var result='';
		// for(var i=0;i<n;i++){
		// 	result+=s;
		// }
		// return result;
		return s.repeat(n)
	}


