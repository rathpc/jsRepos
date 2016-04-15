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

//Combine two arrays and return a single sorted array
//Case 1
//Result = [1, 2, 3, 4, 5, 6]
//var a1 = [1, 3, 5];
//var a2 = [2, 4, 6];

//Case 2
//Result = [1, 1, 2, 2, 3, 3]
//var a1 = [1, 2, 3];
//var a2 = [1, 2, 3];

//Case 3
//Result = [1, 2, 3];
//var a1 = [1, 2, 3];
//var a2 = [];

//Case 4
//Result = [1, 2, 3, 4, 5, 6];
//var a1 = [1, 5];
//var a2 = [2, 3, 4, 6];

var arrayFn = function(arg1, arg2) {
	var tmp1 = arg1.length + arg2.length;
	var tmp2 = [];
	var sortedArray = [];
	var counter1 = 0;
	var counter2 = 0;
	for(var i = 0; i < tmp1; i++) {
		console.log(i+'|'+counter1+'|'+counter2);
		if(arg1.length == 0 && arg2.length == 0) {
			break;
		} else if(arg1.length == 0 && arg2.length != 0) {
			sortedArray = sortedArray.concat(arg2);
			break;
		} else if(arg2.length == 0 && arg1.length != 0) {
			sortedArray = sortedArray.concat(arg1);
			break;
		} else if(arg1[counter1] < arg2[counter2]) {
			sortedArray.push(arg1[counter1]);
			counter1++;
			if(counter1 == arg1.length) {
				tmp2 = arg2.slice(counter2, arg2.length);
				sortedArray = sortedArray.concat(tmp2);
				break;
			}
		} else if(arg2[counter2] < arg1[counter1]) {
			sortedArray.push(arg2[counter2]);
			counter2++;
			if(counter2 == arg2.length) {
				tmp2 = arg1.slice(counter1, arg1.length);
				sortedArray = sortedArray.concat(tmp2);
				break;
			}
		} else if(arg1[counter1] == arg2[counter2]){
			sortedArray.push(arg1[counter1]);
			sortedArray.push(arg2[counter2]);
			counter1++;
			counter2++;
			if(counter1 == arg1.length && counter1 < arg1.length) {
				tmp2 = arg2.slice(counter2, arg2.length);
				sortedArray = sortedArray.concat(tmp2);
				break;
			} else if(counter2 == arg2.length && counter2 < arg2.length) {
				tmp2 = arg1.slice(counter1, arg1.length);
				sortedArray = sortedArray.concat(tmp2);
				break;
			} else if(counter1 == arg1.length && counter2 == arg2.length) {
				break;
			}
		}
	}
	return sortedArray;
};
