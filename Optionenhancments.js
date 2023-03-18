//same key and values

function createInstructor (firstName,lastName){
    return {
        firstName,//first name first
        lastName//last name second
    }
}

//Computer Property Names

let favoriteNumber = 42;

const instructor = {//construct for instructor

    firstName: "Colt",//setting his first name

    [favoriteNumber]: "That is my favorite!"//show favorite number then follow up with "That is my favorite"
}

// Object method
    const instructor2 = {

        firstName: "Colt", //setting up first name

        sayHi(){ //setting up say hi

            return "Hi!";
            
        },

        saybye(){ //setting up say bye

            return this.firstName + "says bye!"; //return firstname and "says bye"
        }
    }

    //Animal function

    const a = Animal ("dog","bark","Wooof!") //Const a will be animal filled with dog bark and woof

    a.bark() //a.bark will do something

    const sheep = Animal ("sheep","bleet","baaa") //setting up const sheep to be filled with sheep bleet and baa

    sheep.bleet() //sheep bleet will do something


    function Animal(species,verb,noise){ //in function the first field will be species,second field will be verb, third field will be the noise

        return{

            species,[verb](){ //returning species and verb

                return noise; //returning noise
            }
        }
    }