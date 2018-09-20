const myAge = 1;

let word = "";

if ((myAge % 10 == 1) && (myAge !== 11)){
	word = "год"
}else if ((myAge % 10 >= 2) && (myAge % 10 <= 4)){
	word = "года"
}else if ((myAge % 100 >= 11) && (myAge % 100 <= 14)){
	word = "лет"
}else{
	word = "лет"
}

console.log(`Мой возраст ${myAge} ${word}`);

