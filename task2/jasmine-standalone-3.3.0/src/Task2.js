var a = [1, 3, 9, 5, 2, 10]

function sort(arr) {
	for (var i = 0, endI = arr.length - 1; i < endI; i++) {
		for (var j = 0, endJ = endI - i; j < endJ; j++) {
			if (arr[j] > arr[j + 1]) {
				var swap = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
			}
		}
	}
	return arr;
}

function first() {
	sort(a);
	return a;
}


function binarySearch(searchNumber, a) {
	var i = 0,
		j = a.length,
		k;
	while (i < j) {
		k = Math.floor((i + j) / 2);
		if (searchNumber <= a[k]) j = k;
		else i = k + 1;
	}

	if (a[i] === searchNumber) return 1;
	else return -1;
}


function find(array, number) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 1; j < array.length; j++) {
			if (array[i] + array[j] == number && array[j] != array[i]) {
				console.log(array[i] + ' and ' + array[j]);
				return true;
			}
		}
	}
	return false;
}

