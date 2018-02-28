// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
       // repeat each char in a given string number of times equal to its index, convert only the first charector to capital.
       

       //1. start by iterating over charecters
       //2. user "repeat" function to repeat each charecter number of its index
       // define variable 'result' to store the result
       

      
        //var inputArr=input.split('');
       //var result=input[0].toUpperCase()+'-';
       var result=''
       for (var i=0;i<input.length;i++){

	       	  var strIn=input[i].repeat(i+1).toLowerCase();
	       	  //console.log(strIn)
	       	  strIn=strIn[0].toUpperCase()+strIn.slice(1);
	       	  result+=strIn+'-';
	          strIn='';
      }
      result=result.slice(0,result.length-1);  
      return result;
       
       }





    // optimized sol using higher order fun
    

    // // convert the string into an array
    // // apply reduce function
    
    // var inputArr=input.split('');
    // inputArr.reduce(function(acc,elem){
    // 	elem=elem.toLowerCase();
    // 	return acc+elem[0].toUpperCase()+elem.slice(1).repeat()+'-';

    // },'')




