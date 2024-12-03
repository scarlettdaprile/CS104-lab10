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

 function updateTitle() {
    const newTitle = document.getElementById('newTitle').value;
    document.getElementById('title').innerText = newTitle;
}

//Question 5

function concatenateText() {
    const text1 = document.getElementById('input1').value;
    const text2 = document.getElementById('input2').value;

    const combined = text1 + " " + text2;

    document.getElementById('combinedText').innerText = combined;
}


//question 6
        const button = document.getElementById('changeBgButton');
        const colorBox = document.getElementById('colorBox');

        button.addEventListener('click', function() {
            
            colorBox.style.backgroundColor = 'blue';
        });



