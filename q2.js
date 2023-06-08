//what is a callback?
//it is a function that is passed as an arguement to another function and executed at a later point in time
//occurs when a async operation completes. 
//used in JavaScript to handle results or errors

//what is a callback hell?
//a code where multiple nested call backs are used. 
//maning a code that is hard to read, understand, and maintain.

//why does callback hell occurs and why we should avoid it?
//it occurs because of the async programing and performing task sequentially
//we should avoid it because it is hard to read, debugging is hard. 

//example

operation1((result1, error1)=> { //callback function
    if(error1){ //checks if there is a error
        console.error('error:', error1); //if ther is, logs to the console otherwise proceeds to the operation2
    } else {
        operation2 ((result1, (result2, error2)=>{
            if (error2) {
                console.error('error:', error2);
            }else{
                operation3 (result2, (result3, error3)=> {
                    if (error3) {
                        console.log.error( 'error;', error3)
                    }else{

                    }
                })
            }
        }))
    }
})
//operations increases, the nesting levels grows deeper, leading to callback hell