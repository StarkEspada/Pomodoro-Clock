var work = document.querySelector(".work");
var _break = document.querySelector("._break");
var save = document.querySelector(".save");
var containerTimerWork = document.querySelector(".container-timer-work");
var minutesWork = document.querySelector(".minutes-work");
var secundesWork = document.querySelector(".secundes-work");
var containerTimerBreak = document.querySelector(".container-timer-break");
var minutesBreak = document.querySelector(".minutes-break");
var secundesBreak = document.querySelector(".secundes-break");
var play = document.querySelector(".play");
var stop = document.querySelector(".stop")


var player = document.querySelector(".player")

containerTimerBreak.style.display = "none";

save.addEventListener("click", function(){
	player.volume = 0.0;
	player.play()
	
	var paramWork = +work.value 
	var paramBreak = +_break.value 

	var testParamWork = +work.value 
	var testParamBreak = +_break.value 


	var secondsWork = 60
	var secondsBreak = 60
	var number = 10
	var numberTwo = 10

	minutesWork.innerHTML = paramWork - 1
	secundesWork.innerHTML = secondsWork
	minutesBreak.innerHTML = paramBreak - 1
	secundesBreak.innerHTML = secondsBreak

play.addEventListener("click", function(){
		player.volume = 0.8
function test(){
		player.volume = 0.8
		number--
		if(number <= 0){
			player.volume = 0.0
		}
		secondsWork--
		if(secondsWork === 0){
			secondsWork = 60
			paramWork--
		}
		if(paramWork <= 0){
			containerTimerBreak.style.display = "inline-block";
			containerTimerWork.style.display = "none";
			player.volume = 0.8
			numberTwo--
			if(numberTwo <= 0){
				player.volume = 0.0
			}
			secondsBreak--
			if(secondsBreak === 0){
				secondsBreak = 60
				paramBreak--
			}

		if(paramWork < 0 && paramBreak === 0){
			containerTimerBreak.style.display = "none";
			containerTimerWork.style.display = "inline-block";
			secondsBreak = 60
			secondsWork = 60
			paramWork = testParamWork
			paramBreak = testParamBreak
			number = 10
			numberTwo = 10
		}
	}


		minutesWork.innerHTML = paramWork - 1
		secundesWork.innerHTML = secondsWork
		minutesBreak.innerHTML = paramBreak - 1
		secundesBreak.innerHTML = secondsBreak	
	}
var timerId = setInterval(test, 1000);

	stop.addEventListener("click", function(){
				clearInterval(timerId)
				player.volume = 0.0;
		})
	})
})
