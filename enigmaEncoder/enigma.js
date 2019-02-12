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

		if (letter at start of blueprint list == letter at end of alpha list) {
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


alphabet = "abcdefghijklmnopqrstuvwxyz"
enigmaBlueprint =  ["JGDQOXUSCAMIFRVTPNEWKBLZYH", //These are Rotors 1-3/5 of the German Railway (Rocket) introduced on Feb 7 1941
					"NTZPSFBOKMWRCJDIVLAEYUXHGQ", //The other 2 are the UKW and ETW rotors
					"JVIUBHTCDYAKEQZPOSGXNRMWFL"
				]
enigmaAlpha = []

start = true

initializeRotors = function(r1, r2, r3, r1v, r2v, r3v) {
	enigmaAlpha.push(enigmaBlueprint[r1-1], enigmaBlueprint[r2-1], enigmaBlueprint[r3-1])

}

shiftFnc = function(rotor, rVal) {
	var firstLetter = ""
	var enigmaList = enigmaAlpha[rotor-1]

	for (var i = 0; i < rVal; i++) {
		lastLetter = enigmaList[0]
		
		enigmaList.pop()

		enigmaList.push(firstLetter)
	}
}