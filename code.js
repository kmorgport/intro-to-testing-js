// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    if(name === true||name === false){
        return "Hello World!"
    }else{
    return "Hello "+name+".";
}};

function isFive(num){
    if(parseInt(num) == 5){
        return true;}
    else{
        return false
    }
}

function isEven(num){
    return num%2 === 0;
};

function isVowel(letter){
    if(typeof(letter)!= "string"){
        return false
    }else if(letter.length === 1 && letter.match(/[aeiou]/gi)){
        return true
    }else{
        return false
    }
};

function add(x,y){
    if(parseInt(x)==NaN ||parseInt(y)==NaN) {
        return NaN;
    }
        else{
            return parseFloat(x)+parseFloat(y);
        }
    };