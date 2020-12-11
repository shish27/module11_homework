function isPrime(num) {
  switch(num){
    case 0:
      return ('Число равно 0');
      
    case 1:
      return ('Число равно 1');
      
    default:
      if(num > 1000) {
        return ('Число больше 1000');
        
      } else {
        for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return ('Число не является простым');
      }}
  }
	
	}
	
	return ('Число простое');
}
console.log(isPrime());