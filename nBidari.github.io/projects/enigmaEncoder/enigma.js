/*
Created by Nima Bidari February 12th 2019

Actions that need to take place:
1. Take input
2. Seperate input into list
3. Individually encrypt letters
4. Letter goes into 1st rotor
5. Rotor shifts (For the purpose of this, they will all shift)
6. New letter goes into second rotor
7. Rotor shifts
8. New letter goes into third rotor
9. Rotor shifts
10.Letter goes into plug board
11.Output


Functions required:
1. Shift function
2. Encrypt function
3. Plugboard function
4. Rotor functions
5. Init function

Pseudo:

	ABC's alphabet list
	enigma alphabet blueprint lists
	enigma alphabet lists (empty for now)

	Init function (rotor 1, rotor 2, rotor 3, rotor 1 val, rotor 2 val, rotor 3 val):
		Set alpha lists to correct rotors

		Run shift function on each rotor depending on its val
	
	Shift Function (shift number, rotor):
		Shift all alphabets by one

		if (letter at start of blueprint list == letter at end of alpha list) { ***UPDATE: Doesnt matter because of how the shift function was made***
			reset alpha list
		}else {
			Shift alpha by one
		}

		For the sake of reusability, it needs to be able to retain previous alphabets (blueprint lists)

	Encrypt function (input letter, rotor number):
		for loop that finds the index of the input letter

		output letter is the index of the input letter, of the rotor number

		return output letter

	Plugboard function(List of pairs, input letter):
		for loop that runs through list of pairs {
			if the input letter is any of the two list letters {
				return the other letter
			}
		}

		return input letter

*/

//For now there are only 3 rotors

alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
enigmaBlueprint =  [['J','G','D','Q','O','X','U','S','C','A','M','I','F','R','V','T','P','N','E','W','K','B','L','Z','Y','H'], //These are Rotors 1-3/5 of the German Railway (Rocket) introduced on Feb 7 1941
					['N','T','Z','P','S','F','B','O','K','M','W','R','C','J','D','I','V','L','A','E','Y','U','X','H','G','Q'], //The other 2 are the UKW and ETW rotors
					['J','V','I','U','B','H','T','C','D','Y','A','K','E','Q','Z','P','O','S','G','X','N','R','M','W','F','L']
				]
enigmaAlpha = []
plugBoard = [["",""],
			 ["",""],
			 ["",""],
			 ["",""],
			 ["",""],
			 ["",""],
			 ["",""],
			 ["",""],
			 ["",""],
			 ["",""]
			]
/*plugBoard = [["A","B"],
			 ["C","D"],
			 ["E","F"],
			 ["G","H"],
			 ["I","J"],
			 ["K","L"],
			 ["M","N"],
			 ["O","P"],
			 ["Q","R"],
			 ["S","T"]
			]
*/ 

initializeRotors = function(r1, r2, r3, r1v, r2v, r3v) {
	enigmaAlpha.push(enigmaBlueprint[r1-1], enigmaBlueprint[r2-1], enigmaBlueprint[r3-1])


	shiftFnc(1,r1v)
	shiftFnc(2,r2v)
	shiftFnc(3,r3v)
}

shiftFnc = function(rotor, rVal) {
	var firstLetter = ""
	var enigmaList = enigmaAlpha[rotor-1]

	for (var i = 0; i < rVal; i++) {
		firstLetter = enigmaList[0]
		
		enigmaList.shift()

		enigmaList.push(firstLetter)
	}
}

encryptFnc = function(inputChar, rotor) {
	var indexChar = ''

	for (var j = 0; j < 26; j++) {
		if (alphabet[j] == inputChar) {
			indexChar = j
		}
	}


	return enigmaAlpha[rotor-1][indexChar]
}

plugBoardFnc = function(inputChar, plugList) {

	for (var k = 0; k < 10; k++) {
		if (inputChar == plugList[k][0]) {
			return plugList[k][1]
		}else if (inputChar == plugList[k][1]) {
			return plugList[k][0]
		}
	}

	return inputChar
}

enigmaEncode = function(inputStr, r1, r2, r3, r1v, r2v, r3v, plugList) {
	/* PSEUDO CODE
		Input -> rotor 1 -> shift -> rotor 2 -> shift -> rotor 3 -> shift -> plugboard -> output
	*/

	var outputStr = ""
	var outputChar = ''

	initializeRotors(r1,r2,r3,r1v,r2v,r3v)

	for (var l = 0; l < inputStr.length; l++) {
		outputChar = encryptFnc(inputStr[l],1)
		shiftFnc(1,1)

		outputChar = encryptFnc(outputChar,2)
		shiftFnc(2,1)

		outputChar = encryptFnc(outputChar,3)
		shiftFnc(3,1)
		
		///

		outputChar = encryptFnc(outputChar,1)
		shiftFnc(1,1)

		outputChar = encryptFnc(outputChar,2)
		shiftFnc(2,1)

		outputChar = encryptFnc(outputChar,3)
		shiftFnc(3,1)

		plugBoardFnc(outputChar, plugList)

		outputStr += outputChar
	}

	return outputStr
	resetFnc()
}

resetFnc = function() {
	enigmaAlpha = []
	plugBoard = []
}