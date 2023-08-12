// // 1) javascript For in loop

let person ={
    // name: "Shihab",
    // age: 28,
    // gender: "male",
    // occupation:"Job holder",
}

const printObjectProperties = (properties)=>{
    if(properties.keys === 0){
        console.log("Object is empty")
    }
    
    for (const property in properties) {
        
         console.log(`${property } : ${properties[property]}`)

        
    }

}

printObjectProperties(person)

// function printObjectProperties(obj){

//     if(Object.keys(obj).length===0){
//         console.log('Object is empty');
//         return
//     }
    
//       for(property in obj){
//         console.log(`${property}:${obj[property]}`);
    
//     }
    
//     }
    
//     const person={
//         name: "Leo Messi",
//         age:36,
//         prof: "Footballer"
//     }
//     const pp={
    
//     }
    
//     printObjectProperties(person);
    
    