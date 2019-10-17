let reverseText = [];
let btn = document.querySelector('#btn');
let text = document.querySelector('.message');
let reversedText = document.querySelector('.result');



function reverse(){
    let result = text.value.split('').reverse().join('');
    reverseText.push(result);
    reversedText.value = reverseText;
    reverseText.pop();
    
}





btn.addEventListener('click', reverse);
