button = document.getElementById('add-name')
button2 = document.getElementById('start')
count = 1

//Add Name Function
button.addEventListener('click', addName);

    function addName(){
        var newInput = 
            newone = document.createElement('input')
            newone.className = 'user-input'
            newone.type = 'input'
            newone.placeholder = 'Name'
            count++

        var container = 
        document.getElementById('base')
        container.appendChild(newInput)
    }
//Random Number Function

function generateRandomInteger(count) {
    return Math.floor(Math.random() * count) + 1;
}

//Start Button
button2.addEventListener('click' , chooseRandom);

    function chooseRandom(){

        generateRandomInteger()
        console.log(generateRandomInteger(count))
    }