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
        startCountdown(5)
       windiv = document.getElementById('winners-div');
        const value5 = generateRandomIntegerInRange(1, count);
        console.log(value5)
       words = document.getElementById(value5).value
       document.getElementById('base').innerHTML = "";
       document.getElementById('buttons').innerHTML = "";
       var winner = 
        newtext = document.createElement('h1');
        newtext.className = "winner"
        newtext.textContent = words
        // console.log(winner)
        var restart = 
            newbutton = document.createElement('button')
            newbutton.className = "button button-17 new-button"
            newbutton.id = "new-button"
            newbutton.textContent = "Restart"
            buttondiv = document.getElementById('buttons')
        setTimeout(function(){
        const insert = document.getElementById('winners-div')

           insert.appendChild(winner); 

            //document.getElementsByTagName('body')[0].appendChild(winner); 
        }, 6000)
        setTimeout(function(){
            buttondiv.appendChild(restart);
            restartButton = document.getElementById('new-button')
            restartButton.addEventListener('click', refreshPage)
        },8000)

    }
    // Countdown Timer
    function startCountdown(seconds) {
        let counter = seconds;
        const insert = document.getElementById('winners-div')
        var countdown = 
            countdownnum = document.createElement('h2')
            countdownnum.className = "countdown"


        const interval = setInterval(() => {
            countdownnum.textContent = counter
            insert.appendChild(countdown)
            //insert.innerHTML = countdown
          console.log(counter);
          counter--;
          if (counter < 0 ) {
            clearInterval(interval);
            insert.textContent = "";
            console.log('Ding!');
          }
        }, 1000);
      }


function refreshPage() {
    console.log('1')
    window.location.reload()
}
