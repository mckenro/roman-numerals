//Backend

var numeralCalc = function(number) {
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundreds = ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = ["","M", "MM", "MMM"];
  var number = number.split("");
  var numberArray = [];
  var resultField = [];


  number.forEach(function(singularNumber) {
    numberArray.push(parseInt(singularNumber));
  });
  console.log(numberArray);
  if (numberArray.length === 1) {
    resultField.push(ones[numberArray[0]]);
  }else if (numberArray.length === 2) {
    resultField.push(tens[numberArray[0]] + ones[numberArray[1]]);
  }else if (numberArray.length === 3) {
    resultField.push(hundreds[numberArray[0]] + tens[numberArray[1]] + ones[numberArray[2]]);
  }else if (numberArray.length === 4) {
    resultField.push(thousands[numberArray[0]] + hundreds[numberArray[1]] + tens[numberArray[2]] + ones[numberArray[3]]);
  }

  return resultField;

}



//Frontend
$(document).ready(function() {
    $("form#numberSubmit").submit(function(event){
      event.preventDefault();
      var userInput = $("input#submitField").val();
      var result = numeralCalc(userInput);     //this holds the return statement of numeralCalc
      $("h2#romanNumeral").text(result);
    });
});
