/*:
*
* @plugindesc A simple name generator.
*
*@author Florodude
*
*@help
*
*Help file
* Simply place one or multiple .txt files that contain one name on every line in the /data/ folder.
*Then call the script by using SelectRandomName(fileName) where filename is the string name of the filename.
*Also contains a very basic RandomNumber function where RandonNumber(min,max) can be called to generate a random number.
*/

(function () {

	SelectRandomName = function(file) {
		var namesArray = ReadNamesFromTxt(file);
		var random = Math.floor(Math.random() * (namesArray.length));
		var returnedName = namesArray[random];
		returnedName = returnedName.charAt(0).toUpperCase() + returnedName.slice(1);
		return returnedName;
	}

	ReadNamesFromTxt = function(nameOfFile) {
		//Read Text File
		prefix = "data/";
		suffix = ".txt";
		fileName = nameOfFile;
		fullPath = prefix+fileName+suffix;

		var xhr = new XMLHttpRequest();
		xhr.open("GET",fullPath,false);
		xhr.send(null); 
		var fileContent = xhr.responseText;
		var namesArray = fileContent.split("\n");
		return namesArray;
		
	}
	RandomNumber = function(min,max) {
		var rando = Math.floor(Math.random() * (max) + min)
		return rando;

	}

	GetVarText = function(varid){
		var ret = $gameVariables.value(varid);
		return ret;
	}


})();