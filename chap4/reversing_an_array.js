let reverseArray = (arr) => {
	let arrReverse = []
	for (let i = arr.length - 1; i > -1; i--) {
		arrReverse.push(arr[i])
	}
	return arrReverse
}

let reverseArrayInPlace = (arr) => {
	let arrReverse = []
	for (let i = arr.length - 1; i > -1; i--) {
		arrReverse.push(arr[i])
	}
	arr = arrReverse
	return arr
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];

/* Resultat faux */ reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]