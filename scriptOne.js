//Question 1
function greetUser() {
    let fName = document.getElementbyID('input').value

    document.getElementById('output').innerText = "Hello, " +
    fName;
}

//Question 2
function changeText() {
    document.getElementById('message').innerText = 'Hello, World!';
}

//Question 3
function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

  
    const result = num1 + num2;
    document.getElementById('result').innerText = 'Result: ' + result;
}

//Question 4

//Question 5

//Question 6