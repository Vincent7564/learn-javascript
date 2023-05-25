document.addEventListener('DOMContentLoaded', function() {
    let timer;
  
    const minute = document.getElementById('minutes');
    let minutesInitialValue = minute.textContent
    const second = document.getElementById('seconds');
    let secondsInitialValue = second.textContent
    const startbutton = document.getElementById('start');
    const resetbutton = document.getElementById('reset');
    const add5 = document.getElementById('add5');
    const minus5 = document.getElementById('minus5')
    const shortbreak = document.getElementById('shortbreak');
    const pomodoro = document.getElementById('pomodoro');
    const longbreak = document.getElementById('longbreak')
    const text = document.getElementById('typename');
    let seconds = secondsInitialValue
    let minutes = minutesInitialValue  

    const updateDisplay = () => {
      minute.textContent = formatTime(minutes);
      if (seconds === 0) {
        second.textContent = '0';
      } else{
        second.textContent = formatTime(seconds);
      }
    };
    updateDisplay()

    shortbreak.addEventListener('click',function(){
      clearInterval(timer);
      text.textContent = 'Short Break'
      timer = null;
      minutes=5
      seconds = secondsInitialValue
      startbutton.disabled = false
      minute.textContent = formatTime(minutes)
      seconds.textContent = formatTime(seconds)
      updateDisplay()
    })

    longbreak.addEventListener('click',function(){
      clearInterval(timer);
      text.textContent = 'Long Break'
      timer = null;
      minutes = 15
      seconds = secondsInitialValue
      startbutton.disabled = false
      minute.textContent = formatTime(minutes)
      seconds.textContent = formatTime(seconds)
      updateDisplay()
    })

    pomodoro.addEventListener('click',function(){
      text.textContent = 'Pomodoro'
      minutes = 25
      minute.textContent = formatTime(minutes)
      updateDisplay()
    })

    startbutton.addEventListener('click', function() {
      if (!timer) {
        timer = setInterval(updateTimer, 1000);
        startbutton.disabled = true;
      }
    });
  
    add5.addEventListener('click',function(){
      clearInterval(timer)
      timer = null
      seconds = secondsInitialValue
      if(minutes%5!=0){
        minutes = minutesInitialValue
      }
      minutes = parseInt(minutes)+5
      updateDisplay()
      startbutton.disabled=false
    })

    minus5.addEventListener('click',function(){
      clearInterval(timer)
      timer = null
      seconds = secondsInitialValue
      if(minutes%5!=0){
        minutes = minutesInitialValue
      }
      if(minutes>0){
        minutes = parseInt(minutes)-5

      }else{
        minutes=0
      }
      updateDisplay()
      startbutton.disabled=false
    })

    resetbutton.addEventListener('click', function() {
      clearInterval(timer);
      timer = null;
      minutes = minutesInitialValue
      seconds = secondsInitialValue
      updateDisplay();
      startbutton.disabled = false;
    });
  
    const updateTimer = () => {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          clearInterval(timer);
          timer = null;
          startbutton.disabled = false;
        }
      }
      updateDisplay();
    };
  
    function formatTime(time) {
      return time < 10 && time!=0 ? `0${time}` : time;
    }
  
    updateDisplay();
  });
  