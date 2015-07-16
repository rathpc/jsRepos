//Compare two arrays containing alphanumerical values - Order is IMPT
//For example
//arr1 = [1,2,3,4]
//arr2 = [1,2,3,4]
//This returns true because the arrays are exactly the same, even the order of the contents
var arrayOrderCompare = function (arr1,arr2) {
	var a1,a2;
	a1 = arr1.toString();
	a1 = a1.toLowerCase();
	a2 = arr2.toString();
	a2 = a2.toLowerCase();
	var result = (a1 == a2) ? true : false;
	return result;
};



//Compare the alphanumerical contents of two arrays - Order is not IMPT and ignored
//For example
//arr1 = [1,3,2,4]
//arr2 = [1,2,3,4]
//This returns true because all 4 values exist ignoring the order inside of the array
var arrayNoOrderCompare = function (arr1,arr2) {
	a1 = new Array();
	a2 = new Array();
	a1 = arr1.sort();
	a1 = a1.toString();
	a1 = a1.toLowerCase();
	a2 = arr2.sort();
	a2 = a2.toString();
	a2 = a2.toLowerCase();
	var result = (a1 == a2) ? true : false;
	return result;
};



//Compare two arrays of multiple words each to check if the pairs are anagrams of one another
//For example
//arr1 = ["cinema","add","bab"]
//arr2 = ["iceman","dad","aba"]
//The first two pairs are anagrams but not the last
var arrayAnagramCompare = function (arr1,arr2) {
	a1 = new Array();
	a2 = new Array();
	tmpArr1 = new Array();
	tmpArr2 = new Array();
	var j,a1Str,a2Str,tA1,tA2;
	if(arr1.length == arr2.length){
		for(i=0;i<arr1.length;i++){
			tmpArr1[i] = '1';
			
			a1[i] = arr1[i].split('');
			a2[i] = arr2[i].split('');
			
			a1[i] = a1[i].sort();
			a2[i] = a2[i].sort();
			
			a1Str = a1[i].toString();
			a2Str = a2[i].toString();
			
			a1Str = a1Str.toLowerCase();
			a2Str = a2Str.toLowerCase();
			
			tmpArr2[i] = (a1Str == a2Str) ? '1' : '0';
			j = i+1;
			if(tmpArr2[i] == '1'){
				console.log('Pair '+j+': "' + arr1[i] +'" and "'+ arr2[i] + '" are anagrams!')
			} else {
				console.log('Pair '+j+': "' + arr1[i] +'" and "'+ arr2[i] + '" are NOT anagrams!')
			}
		}
		tA1 = tmpArr1.toString();
		tA2 = tmpArr2.toString();
		
		var result = (tA1 == tA2) ? 'All of the pairs are anagrams of one another' : 'One or more pairs are not anagrams of one another';
		return result;
	} else {
		return "The array lengths do not match!";
	}
};
