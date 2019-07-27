// lucky sevens js file
var dice1 = 0;
var dice2 = 0;
var endingRolls = 0;
var rollsForHighAmount=0;
var maxMoney = 0;
var bettingAmount =0;
var initialAmount=0;
var currentRoll = 0;

function clearErrors() {
	var formElements = document.forms["bettingAmount"].elements;
	for (var loopCounter=0; loopCounter < formElements.length; loopCounter++){
		if(formElements[loopCounter].parentElement.className.indexOf("has-") != -1){
			formElements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function startBets(){
	//bettingAmount = document.forms["bettingAmount"]["initialBet"].value;
	
	//betting amount must always be above 0
	while(bettingAmount>0){
		dice1=Math.floor(Math.random()*6)+1;
		dice2=Math.floor(Math.random()*6)+1;
		
		currentRoll = dice1+dice2;
		if(currentRoll == 7){
			bettingAmount+=4;
		}else{
			bettingAmount-=1;
		}
		//Advance the rolls for recording rolling stats
		endingRolls++;
		
		if(maxMoney<bettingAmount){
			maxMoney=bettingAmount;
			rollsForHighAmount=endingRolls;
		}
	}
	
}
function resetForm(){
	document.forms["bettingAmount"]["initialBet"].value = 0;
	document.forms["bettingAmount"]["initialBet"].focus();
}

function validate(){
	clearErrors();
	initialAmount = document.forms["bettingAmount"]["initialBet"].value;
	if (initialAmount == "" || isNaN(initialAmount) || initialAmount < 0){
		alert("betting amount must be filled in with a number and it must be greater than 0");
		document.forms["bettingAmount"]["initialBet"].parentElement.className = "form-group has-error";
		document.forms["bettingAmount"]["initialBet"].focus();
		return false;
	}
	
	//cast to number for betting amount, was runninginto issues where it would add
	//string literal of 4 to the end of the initial amount
	bettingAmount=Number(initialAmount);
	startBets();
	
	//display the final block
	document.getElementById("results").style.display = "block"
	document.getElementById("submitButton").innerText = "Play Again";
	
	document.getElementById("startingBet").innerText = "$" + initialAmount + ".00";
	document.getElementById("endingRolls").innerText = endingRolls;
	document.getElementById("maxMoney").innerText = "$" + maxMoney + ".00";
	document.getElementById("rollsForHighAmount").innerText = rollsForHighAmount;
	
	maxMoney =0;
	rollsForHighAmount=0;
	endingRolls=0;
	bettingAmount=0;
	initialAmount=0;
	return false;
	
}