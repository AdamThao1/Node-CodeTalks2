//what is a promise
// a Promise is a construct used in async JavaScript to handle results of an async operation.

//what are promises used for
// It is used to fetch data from a server, read files, make API calls. 

//pros and cons
//pros: Readablility and maintaining, Error handleing, and the control flow
//cons: browser compability, promise chaining complexity

//example

function delay(seconds){ //define a function that returns a promise
    return new Promise(resolve => {
        setTimeout(()=>{ //use a delay
            resolve('delay resolve!') //resolved with a message
        }, seconds) //in seconds
    })
}

delay(1000) //call the function to intiate the delay
.then(message => { //then chain the message
    console.log(message);
})
.catch(error => { //if a error, then logs  a error
    console.error(error);
})