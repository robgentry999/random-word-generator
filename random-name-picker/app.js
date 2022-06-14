button = document.getElementById('add-name')
button2 = document.getElementById('start')
count = 1
var words =

//Add Name Function
button.addEventListener('click', addName);

    function addName(){
        var newInput = 
            newone = document.createElement('input')
            newone.className = 'user-input'
            newone.type = 'input'
            newone.placeholder = 'Name'
            count++
            newone.id = count 

        var container = 
        document.getElementById('base')
        container.appendChild(newInput)
    }
//Random Number Function

function generateRandomIntegerInRange(min, count) {
    return Math.floor(Math.random() * (count - min + 1)) + min;
}


//Start Button
button2.addEventListener('click' , chooseRandom);

     function chooseRandom(){
       windiv = document.getElementById('winners-div');
        const value5 = generateRandomIntegerInRange(1, count);
        console.log(value5)
       words = document.getElementById(value5).value
       console.log(words)
       windiv.innerHTML =+ `words`
       console.log(words)


    //    console.log(words)
    //     displayWinner(words)
    //     return words
    }


    // function displayWinner(words) {
    //    windiv = document.getElementById('winner-div');
    //     windiv.innerHTML =+ words
    //     console.log(words)
    // }


