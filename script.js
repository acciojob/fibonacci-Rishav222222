function fibonacci(num) {
// your code here
	let num1 = 0;
	let num2 = 1;
	let sum;
	if(num1 === 1){
		return num1;
	}
	else if(num2 === 1){
		return num2;
	}else{
		for(let i=3; i <= num; i++){
			sum = num1 + num2;
			num1 = num2;
			num2 = sum;
		}
		return num2;
	}	
}

module.exports = fibonacci;
