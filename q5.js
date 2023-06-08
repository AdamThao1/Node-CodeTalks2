//what is a async/await?
//a Javascript feature that provides a way write async and sync code. built on promises.
//async keywords returns a promise
//await pauses the execution until a promise is solved or rejected.

//why is async/await useful?
//used to write asuncronus code in a strightforward maner
//used for error handling, control flow and syntax

// What are pro/cons to using async/await?  
//pros writing code in a synchronous manner, error handling and compatibility
//cons browser support, complex error handling, and debugging

// example
function delay(ms) { //function called delay
    return new Promise(resolve => setTimeout(resolve, ms)); //returns a promise
  } //uses setTimeout and resolve the promise after the delay
  
  async function performTask() { //
    console.log('Task started...');//log this first
    await delay(2000); //wait 2 seconds
    console.log('Task completed!'); //then logs the message
  }
  
  performTask();
  