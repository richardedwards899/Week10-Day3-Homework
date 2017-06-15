var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(number){
			return number * number;
		});
	},

	sum: function (arr) {
		return arr.reduce(function(acc,val){
			return acc + val;
		},0);
	},

	findDuplicates: function (arr) {
		var returnArr = [];
		for (var i = 0; i < arr.length; i++) {
				if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])){
					if (!returnArr.includes(arr[i])){
						returnArr.push(arr[i]);
					}
				}
		}
		//remove duplicates
		// var array = [];
		// var num = returnArr[0]; //4
		// array[0] = num;
		//
		// for (var i = 1; i < returnArr.length; i++) {
		// 	if (returnArr[i] > num ){
		// 		array.push(returnArr[i]);
		// 		num = returnArr[i];
		// 	}
		// }
		return returnArr;
	},

	removeAndClone: function (arr, valueToRemove) {
		var returnArray = [];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] != valueToRemove){
				returnArray.push(arr[i]);
			}
		}
		return returnArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var returnArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === itemToFind){
				returnArray.push(i);
			}
		}
		return returnArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var returnArr = arr.filter(function(number){
			return number % 2 === 0;
		});
		return this.sum(this.square(returnArr));
	}
}

module.exports = arrayTasks
