const buttonLm = document.getElementById('convert-btn');
const inputLm = document.getElementById('number');
const resultLm = document.getElementById('output');

const romanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};


function convertToRomanNumeral(number) {
  let result = '';

  while (number > 0) {
    const objArrVals = Object.values(romanNumerals);
    const objArrKeys = Object.keys(romanNumerals);
    const goal = number;

    const objArrValsReversed = objArrVals.slice().reverse()
    const closestVal = objArrValsReversed.find(number => number <= goal);
    const closestRomanNumeral = objArrKeys[objArrVals.indexOf(closestVal)]
    
    result += closestRomanNumeral;
    number -= closestVal;
  }

  resultLm.innerHTML = `<p>${result}</p>`;
}

function convertNumeral() {
  const typedNumber = Number(inputLm.value);

  inputLm.value = '';

  if (!typedNumber) {
    resultLm.innerHTML = `<p class="invalid-input">Please enter a valid number</p>`;
    return;

  } else if (typedNumber < 0) {
    resultLm.innerHTML = `<p class="invalid-input">Please enter a number greater than or equal to 1</p>`;
    return;

  } else if (typedNumber >= 4000) {
    resultLm.innerHTML = `<p class="invalid-input">Please enter a number less than or equal to 3999</p>`;
    return;
  }

  convertToRomanNumeral(typedNumber);
}


buttonLm.addEventListener('click', convertNumeral);

inputLm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    convertNumeral();
  }
});




