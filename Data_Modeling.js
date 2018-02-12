	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
	//           
	//           
	//      
	//           
	//                
	


function createClassMate(name,age,gender,nationality){
    return {
        name:name,
        age:age,
        gender:gender,
        nationality:nationality
    }
	}


	function dispalyFriend(mate){

    return 'Name: '+mate.name+'Age: '+mate.age+'Gender: '+mate.gender+'Nationality: '+mate.nationality;
	}



	function addFriend(mate){
    mates.push(mate);

	}



	function nbOfMale(){
    var maleCount=0;

    for(var i=0;i<mates.length;i++){
      if (mates[i].gender==='male')
      {
      	maleCount++;}

    }
	
	return maleCount;
}





function searchMate(mates,name){
for (var i=0;i<mates.length;i++){
  if (mates[i].name===name){

  	return true;
  }

}
return false;

}

	mate1=createClassMate('Waed',26,'female','Jordenian'};
	mate2=createClassMate('Bayan',20,'female','Serian'};
	mate3=createClassMate('salsabeel',26,'female','Jordenian'};

    mate4=createClassMate('Belal',25,'male','Jordenian')

	var mates=[mate1,mate2,mate3,mate4];







	
