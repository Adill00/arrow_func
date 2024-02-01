//Part 1

let greet = (name , greeting = 'Hello') => {
    return greeting + ' '+ name;

}

console.log('I am greeting you: ' , greet('Adil') );
console.log('I am greeting you with feeling' , greet('Adil' , 'welcome!!'));


//Part 2

let fact;
let factorial = (n) => {
    
    if (n==0) {
        fact = 1;
    }else{
        fact = n * factorial(n-1);
    }

    return fact;
}

console.log('this is factorial of the given number: ' , factorial(4));


//Part 3

let sumAll = (num1,num2,num3,...args) => {
    let sum = num1 + num2 +num3;

    for (let i=0; i<args.length; i++){
        sum +=args[i];
    }

    return sum;
}

console.log('the sum of collection is:' , sumAll(3,5,7,13,15,17));


//Part 4

let first = () =>{
    console.log('First function reporting: Now,I am first to get pushed to Js engine call stack');
    second();
    console.log('First function reporting: After I called second function, execution context of func2 is loaded to call stack. Then it pushed context of func3 to call stack. I am the last message');
}

let second = () =>{
    console.log('Second function reporting: My context pushed to call stack by previous function, func1');
    third();
    console.log('Second function reporting:In my context,I pulled func3 to call stack ,and it already popped out from stack');
}

let third = () => {
    console.log('Third function is reporting: I was brought to call stack by func 2');
    console.log('Third function is reporting: I am the last numbered function, stack now can recurse back');
    console.log('Third function is reporting: I will exit the call stack first, before than others ');
}

first();