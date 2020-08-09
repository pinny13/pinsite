/*
Write a javascript function that takes in one character then prints it to the console after waiting for a random amount of time between 0 to 5 seconds. Follow up with immediately print out “Finished” as soon as printAsync(‘a’), printAsync(‘b’), printAsync(‘c’) are done. The solution cannot use polling or use the Promise library.

*/

/*
var count = 0;

function printAsync1(s){
  count++;
  
  setTimeout(()=>{
    console.log(s);
    count--;
    
    if (!count){
      console.log('Finished');
    }  
  }, Math.floor(Math.random() * 5) * 1000);
}
*/
let printAsync = (()=>{
    let  count = 0;
    //map => (id, randVal)
    return (s) =>{
      count++;
    
      setTimeout(()=>{
        //check map.has(s)
        //  exists wait
        //  else add the value
        /*
        while (flag) {
        id = setInterval(()=>
           check if it is not there : flag is false
        }
        
        clearInterval(id)
        */
        console.log(s);
        count--;
        //removed from map.delete(s)
      
        if (!count){
          console.log('Finished');
        }  
      }, Math.floor(Math.random() * 5) * 1000);
    };
  })();
  
  printAsync('c')
  printAsync('b')
  printAsync('x')
  printAsync('c')
  printAsync('c')
  
  // strings are ids
  
  