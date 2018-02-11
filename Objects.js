// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	

	var classmate=[{fullName:{first:'Belal' ,last:'Forue'},age: 27,favorite_sports: 'football' ,nationality: 'Jordenian' },
	{fullName:{first:'Waed' ,last:'Alshayab'},age: 26,favorite_sports: 'dancing' ,nationality: 'Jordenian' },
	{fullName:{first:'Bayan' ,last:'Saad'},age: 20,favorite_sports: 'football' ,nationality: 'Serian' },
	{fullName:{first:'Ahmed' ,last:'Zoubi'},age: 22,favorite_sports: 'reading' ,nationality: 'Serian' },
	{fullName:{first:'Salsabeel' ,last:'Jaferah'},age: 26,favorite_sports: 'dancing' ,nationality: 'Jordenian' }];



// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

var max=classmate[0].age;
function oldClassMate(){

for (var i=1;i<classmate.length;i++){

 if (classmate[i].age>max){
 	max=classmate[i].age;

}

}

return  max;

}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2


function countKeys(obj){

var count=0;
for (var key in obj){
count++;

}

return count;

}





// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]







function equalLength(arrStr){
// create a new object obj and fill the array element as a keys to it, each key is associated to the length of each key.
var obj={}
var resultArr=[];  // the final array

for (var i=0;i<arrStr.length;i++){
obj[arrStr[i]]=arrStr[i].length;

}


// loop over the keys of the object obj
// and loop over the array of words
for (var key in obj){
for (var i =0;i<arrStr.length;i++){
if (obj[key]===arrStr[i].length && key!==arrStr[i])  // if there is a match 
{
	resultArr.push(key);
}

}

}

return resultArr;
}



