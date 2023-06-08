//Explain how the “this” keyword works differently in arrow functions vs normal functions. 
//Regular functions refers to a object that the function invokes on when executed. 
//examples : call() , apply() , bind()
//how they are called. 

//arrow functions refers to the this value of the parent scope where arrow function is defined.
//parent scoped

function regFunc(){
    console.log('reg Func:', this.name);
};
const arrFunc = () => {
    console.log('arrow func:', this.name);
};

const obj1 = {
    name: 'Object1',
    regMethod: regFunc,
    arrMethod: arrFunc
};

regFunc();
arrFunc();

obj1.regMethod();
obj1.arrMethod()