const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if(number > 10) {
		  resolve(number + ' is greater than 10, success!');
  	}
  	else {
  		reject(number + ' is less than 10, error!');
  	}
  });
};

testNum(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

testNum(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
