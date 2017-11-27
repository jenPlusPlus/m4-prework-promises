const makeAllCaps = (wordArray) => {
  return new Promise((resolve, reject) => {
    if(wordArray.every(word => typeof(word) === 'string')) {
		  resolve(wordArray.map(word => word.toUpperCase()));
  	}
  	else {
  		reject('No, the array you passed in contained an element that was not a string!');
  	}
  })
}

const sortWords = (wordArray) => {
  return new Promise((resolve, reject) => {
    if(wordArray.every(word => typeof(word) === 'string')) {
		  resolve(wordArray.sort());
  	}
  	else {
  		reject('No, the array you passed in contained an element that was not a string!');
  	}
  })
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

makeAllCaps(['wowow', 5, 'bird'])
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
