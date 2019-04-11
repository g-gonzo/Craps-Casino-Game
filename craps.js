//  DOM - Variables
// Buttons
let startGame_Btn = document.getElementById("Button_1");
let comeOutRoll_Btn = document.getElementById("Button_2");
let gameRoll_Btn = document.getElementById("Button_3");
let resetRoll_Btn = document.getElementById("Button_4");
let quitGame_Btn = document.getElementById("Button_5");
let Bet5_Btn = document.getElementById("Bet_5");
let Bet10_Btn = document.getElementById("Bet_10");
let Bet20_Btn = document.getElementById("Bet_20");
let instructionText = document.getElementById("TPA-1");
let gameModeText = document.getElementById("TPA-2");
let playersRollText = document.getElementById("TPA-3");
let pointNumberText = document.getElementById("TPA-4");
let winLossText = document.getElementById("BB-5");
let dieOneImage = document.getElementById("Die_1");
let dieOneText = document.getElementById("DieText_1");
let dieTwoImage = document.getElementById("Die_2");
let dieTwoText = document.getElementById("DieText_2");

//Betting Module Stuff!
let PlyrWalletText = document.getElementById("BB-1");
let PlyrBetText = document.getElementById("BB-2");
let CasinoBankText = document.getElementById("BB-3");
let Texter = document.getElementById("BB-4");  

// Game - Variables
let dieOne = 0;
let dieTwo = 0;
let diceTotal = 0;
let pointNumber = 0;
let statsWinLoss = 0;
let playersWallet = 100;
let playersBet = 0;
let casinoBank = 0;
let casinoPurse = 0;

// Button Events

startGame_Btn.addEventListener("click", function() {
	let x = welcome();

	offCOR();
	offGame();
});

comeOutRoll_Btn.addEventListener("click", function() {
  rollTheDice();
	firstRoll();

	offCOR();
	onGame();
});

gameRoll_Btn.addEventListener("click", function() {
	rollTheDice();
		gameRoll();

		offStart();
		offCOR();
});

resetRoll_Btn.addEventListener("click", function() {
	pointNumber = 0;
	diceTotal = 0;
	dieOne = 0;
	d1Modulator();
	dieTwo = 0;
	d2Modulator();
	comeOutRoll();

	onCOR();
	offStart();
	useBettingButtonText();
});

quitGame_Btn.addEventListener("click", function() {
	window.location.reload();
});

Bet5_Btn.addEventListener("click", function() {
	playersBet = 5;
	cage();
	comeOutRoll();
	
	onCOR();
	useCORButtonText();
});

Bet10_Btn.addEventListener("click", function() {
	playersBet = 10;
	cage();
	comeOutRoll();

	onCOR();
	useCORButtonText();
});

Bet20_Btn.addEventListener("click", function() {
	playersBet = 20;
	cage();
	comeOutRoll();
	
	onCOR();
	useCORButtonText();
});

// Functions

//  Function - Random Number Generator

function rollTheDice() {
	dieOne = Math.floor((Math.random() * 6) + 1);
	d1Modulator(dieOne);
	dieTwo = Math.floor((Math.random() * 6) + 1);
	d2Modulator(dieTwo);
  	rollMonitor();
}

function rollMonitor() {   //Roll Monitor function is being called by "RollTheDice" function!!
	diceTotal = dieOne + dieTwo;
	playersRollText.innerText = "Player's Roll: " + "---  " + diceTotal;
}

function welcome() {
	instructionText.innerText = introText[0].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " Welcome!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 0;
	cardGirl();
	useBettingButtonText();
}

function comeOutRoll() {
	instructionText.innerText = introText[1].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " Come-Out Roll!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 0;
	cardGirl();
	statsWinLoss = 0;
	pitBoss();
	useCORButtonText();
}

function naturalRoll() {
	instructionText.innerText = introText[2].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " NATURAL!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 1;
	cardGirl();
	statsWinLoss = 1;
	pitBoss();
	useResetRollButtonText();
}

function crapsRoll() {
	instructionText.innerText = introText[3].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " CRAPS!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 2;
	cardGirl();
	statsWinLoss = 2;
	pitBoss();
	useResetRollButtonText();
}

function pointMadeRoll() {
	instructionText.innerText = introText[4].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " Point Made!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 0;
	cardGirl();
	statsWinLoss = 0;
	pitBoss();
	useGameRollButtonText();
}

function safeRoll() {
	instructionText.innerText = introText[5].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " Safe Roll!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 0;
	cardGirl();
	statsWinLoss = 0;
	pitBoss();
	useGameRollButtonText();
}

function pointMatchRoll() {
	instructionText.innerText = introText[6].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " Point Match!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 1;
	cardGirl();
	statsWinLoss = 1;
	pitBoss();
	useResetRollButtonText();
}

function sevenOutRoll() {
	instructionText.innerText = introText[7].textString;
	gameModeText.innerText = "Game Mode: " + "--- " + " SEVEN-OUT!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 2;
	cardGirl();
	statsWinLoss = 2;
	pitBoss();
	useResetRollButtonText();
}

function errorMessage() {
	instructionText.innerText = "Oops something went wrong Error!";
	gameModeText.innerText = "Game Mode: " + "--- " + " Error!";
	pointNumberText.innerText = "Point Number: " +"--- " + pointNumber;
	playersRollText.innerText = "Player's Roll: " + "--- " + diceTotal;
	statsWinLoss = 0;
	cardGirl();
}

function cardGirl() {
	if (statsWinLoss === 0) {
		winLossText.innerText = "Win/Loss:" + "--- " + "Meh!";
		PlyrWalletText.innerText = "Player's Wallet: " + " --- " + playersWallet;
		PlyrBetText.innerText = "Player's Bet: " + " --- " + playersBet;
		CasinoBankText.innerText = "Casino's Bank: " + " --- " + casinoBank;
		//Texter.innerText = "Casino's Purse: " + " --- " + casinoPurse;
	}else
	if (statsWinLoss === 1) {
		winLossText.innerText = "Win/Loss:" + "--- " + "Winner!";
		PlyrWalletText.innerText = "Player's Wallet: " + " --- " + playersWallet;
		PlyrBetText.innerText = "Player's Bet: " + " --- " + playersBet;
		CasinoBankText.innerText = "Casino's Bank: " + " --- " + casinoBank;
		//Texter.innerText = "Casino's Purse: " + " --- " + casinoPurse;
	}else
	if (statsWinLoss === 2) {
		winLossText.innerText = "Win/Loss:" + "--- " + "Loser!";
		PlyrWalletText.innerText = "Player's Wallet: " + " --- " + playersWallet;
		PlyrBetText.innerText = "Player's Bet: " + " --- " + playersBet;
		CasinoBankText.innerText = "Casino's Bank: " + " --- " + casinoBank;
		//Texter.innerText = "Casino's Purse: " + " --- " + casinoPurse;
	}
}

function cage() {
	if (playersBet < playersWallet) {
		playersBet = playersBet;
		playersWallet = playersWallet - playersBet;
		cardGirl();
	}else
	if (playersBet > playersWallet) {
		alert("You may need to see our cashier for some more credit.");
		playersBet = 0;
	}
}

function dealer() {
	let newBallance = 0;
	if (statsWinLoss === 1) {
		casinoPurse = (playersBet * 2);
		newBallance = (casinoPurse + playersWallet);
		playersWallet = newBallance;
		playersBet = 0;
		casinoPurse = 0;
		cardGirl();
	}
}

function stickMan() {
	let newBallance = 0;
	if (statsWinLoss === 2) {
		casinoPurse = playersBet;
		newBallance = casinoBank + casinoPurse;
		casinoBank = newBallance;
		playersBet = 0;
		casinoPurse = 0;
		cardGirl();
	}
}

function pitBoss() {
	if (statsWinLoss === 0) {
		cardGirl();
	}else
	if (statsWinLoss === 1) {
		dealer();
	}else
	if (statsWinLoss === 2) {
		stickMan();
	}
}

function firstRoll() {
	switch(diceTotal) {
		case 2 :
		pointNumber = 0;
		crapsRoll();
		break;
		case 3 :
		pointNumber = 0;
		crapsRoll();
		break;
		case 4 :
		pointNumber = 4;
		pointMadeRoll();
		break;
		case 5 :
		pointNumber = 5;
		pointMadeRoll();
		break;
		case 6 :
		pointNumber = 6;
		pointMadeRoll();
		break;
		case 7 :
		pointNumber = 0;
		naturalRoll();
		break;
		case 8 :
		pointNumber = 8;
		pointMadeRoll();
		break;
		case 9 :
		pointNumber = 9;
		pointMadeRoll();
		break;
		case 10 :
		pointNumber = 10;
		pointMadeRoll();
		break;
		case 11 :
		pointNumber = 0;
		naturalRoll();
		break;
		case 12 :
		pointNumber = 0;
		crapsRoll();
		break;
		default :
		pointNumber = 0;
		statsWinLoss = 0;
		errorMessage();
		break;
	}
}

function gameRoll() {
	switch(diceTotal) {
		case 2 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 3 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 4 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 5 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 6 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 7 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			sevenOutRoll();
		}
		break;
		case 8 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 9 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 10 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 11 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		case 12 :
		if (diceTotal === pointNumber) {
			pointMatchRoll();
		}else {
			safeRoll();
		}
		break;
		default :
		pointNumber = 0;
		statsWinLoss = 0;
		errorMessage();
		break;
	}
}

// Objects??

// Array of OBJECTs - (Text Strings for Introductions)
let introText = [
	{
	textString: "Welcome to the casino game of ‘Craps’!  To start just place a bet, the minimum bet is $5.00 to play."  // Welcome!
	},
	{
	textString: "Okay, this is the ‘Come-Out’ roll! Try to roll a 7 or 11 to win! Don’t roll a 2, 3 or 12; that’s ‘Craps’ and you lose the bet." // ComeOut Roll!
	},
	{
	textString: "Great job! You rolled a ‘Natural’ and that wins the bet!"   //Natural!
	},
	{
	textString: "Ahhhh, bummer deal! You just rolled ‘Craps’ you loss the bet."  //Craps!
	},
	{
	textString: "Good job! You rolled your ‘Point Number’; now roll again and try to match that number “?” but don’t roll a 7 or you will lose the bet."  //Point Number Made!
	},
	{
	textString: "Good roll! You rolled a safe number, it’s not a 7 or your ‘Point Number’; roll again and try to match that point number."  // Safe Roll!
	},
	{
	textString: "Awesome roll! You rolled your point number a ‘Point Match’, you won the bet."   // Point Match!
	},
	{
	textString: "Ahhhh, that sucks! You rolled a 7, you ‘Seven-Out’ and that means you loss the bet."   // Seven-Out!
	}
];

// Array of OBJECTs - (Dice Values Text Strings)
let diceValuesText = [
    {
		textString: "Zero"
	  },
	  {
		textString: "One"
	  },
	  {
		textString: "Two"
	  },
	  {
		textString: "Three"
	  },
	  {
		textString: "Four"
	  },
	  {
		textString: "Five"
	  },
	  {
		textString: "Six"
	  },
	  {
		textString: "Seven"
    },
    {
		textString: "Eight"
    },
    {
		textString: "Nine"
    },
    {
		textString: "Ten"
    },
    {
		textString: "Eleven"
    },
    {
		textString: "Twelve"
	  }
];

function d1Modulator() {
	switch(dieOne) {
		case dieOne = 0 :
		document.getElementById("Die_1").src = "Images/d0.png";
		dieOneText.innerText = diceValuesText[0].textString + "  :  (0)";
		break;
		case dieOne = 1 :
		document.getElementById("Die_1").src = "Images/d1.png";
		dieOneText.innerText = diceValuesText[1].textString + "  :  (1)";
		break;
		case dieOne = 2 :
		document.getElementById("Die_1").src = "Images/d2.png";
		dieOneText.innerText = diceValuesText[2].textString + "  :  (2)";
		break;
		case dieOne = 3 :
		document.getElementById("Die_1").src = "Images/d3.png";
		dieOneText.innerText = diceValuesText[3].textString + "  :  (3)";
		break;
		case dieOne = 4 :
		document.getElementById("Die_1").src = "Images/d4.png";
		dieOneText.innerText = diceValuesText[4].textString + "  :  (4)";
		break;
		case dieOne = 5 :
		document.getElementById("Die_1").src = "Images/d5.png";
		dieOneText.innerText = diceValuesText[5].textString + "  :  (5)";
		break;
		case dieOne = 6 :
		document.getElementById("Die_1").src = "Images/d6.png";
		dieOneText.innerText = diceValuesText[6].textString + "  :  (6)";
		break;
		default :
		document.getElementById("Die_1").src = "Images/FooterDie.jpg";
		dieOneText.innerText = "Oops! - Die #1";
		break;
	}
}

function d2Modulator() {
	switch(dieTwo) {
		case dieTwo = 0 :
		document.getElementById("Die_2").src = "Images/d0.png";
		dieTwoText.innerText = diceValuesText[0].textString + "  :  (0)";
		break;
		case dieTwo = 1 :
		document.getElementById("Die_2").src = "Images/d1.png";
		dieTwoText.innerText = diceValuesText[1].textString + "  :  (1)";
		break;
		case dieTwo = 2 :
		document.getElementById("Die_2").src = "Images/d2.png";
		dieTwoText.innerText = diceValuesText[2].textString + "  :  (2)";
		break;
		case dieTwo = 3 :
		document.getElementById("Die_2").src = "Images/d3.png";
		dieTwoText.innerText = diceValuesText[3].textString + "  :  (3)";
		break;
		case dieTwo = 4 :
		document.getElementById("Die_2").src = "Images/d4.png";
		dieTwoText.innerText = diceValuesText[4].textString + "  :  (4)";
		break;
		case dieTwo = 5 :
		document.getElementById("Die_2").src = "Images/d5.png";
		dieTwoText.innerText = diceValuesText[5].textString + "  :  (5)";
		break;
		case dieTwo = 6 :
		document.getElementById("Die_2").src = "Images/d6.png";
		dieTwoText.innerText = diceValuesText[6].textString + "  :  (6)";
		break;
		default :
		document.getElementById("Die_2").src = "Images/FooterDie.jpg";
		dieTwoText.innerText = "Oops! - Die #2";
		break;
	}
}

function betsOn() {
	document.getElementById("Bet_5").disabled = false;
  document.getElementById("Bet_10").disabled = false;
	document.getElementById("Bet_20").disabled = false;
}

function betsOff() {
	document.getElementById("Bet_5").disabled = true;
  document.getElementById("Bet_10").disabled = true;
	document.getElementById("Bet_20").disabled = true;
}

function offStart() {
	document.getElementById("Button_1").disabled = true;
}

function onStart() {
	document.getElementById("Button_1").disabled = false;
}

function offCOR() {
	document.getElementById("Button_2").disabled = true;
}

function onCOR() {
	document.getElementById("Button_2").disabled = false;
}

function offGame() {
	document.getElementById("Button_3").disabled = true;
}

function onGame() {
	document.getElementById("Button_3").disabled = false;
}

function useStartButtonText() {
	Texter.innerText = "'Click on Start Game button.'";
}

function useCORButtonText() {
	Texter.innerText = "'Click on Come-Out Roll button.'";
}

function useGameRollButtonText() {
	Texter.innerText = "'Click on Game Roll button.'";
}

function useResetRollButtonText() {
	Texter.innerText = "'Click on Reset Roll button.'";
}

function useBettingButtonText() {
	Texter.innerText = "'Click on Dollars button.'";
}