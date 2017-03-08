var buttonBlue = document.getElementById('blueButton');
var buttonPink = document.getElementById('pinkButton');
var buttonOrange = document.getElementById('orangeButton');
var beforeTaxes = document.getElementById('beforeTax');
var afterTaxes = document.getElementById('afterTax');
var taxButton = document.getElementById('taxButton');
var bluePressed = false;
var pinkPressed = false;
var orangePressed = false;
var subtotal = 0;

taxButton.addEventListener('click',function(){
  var taxes = ((subtotal * .0625) + subtotal);
  afterTaxes.innerHTML = taxes;
})

buttonBlue.addEventListener('click',function(){
  if(bluePressed===false){
      bluePressed = true;
      subtotal += 29;
      beforeTaxes.innerHTML = subtotal;
  }
  else{
    bluePressed = false;
    subtotal -= 29;
    beforeTaxes.innerHTML = subtotal;
  }
})

buttonPink.addEventListener('click',function(){
  if(pinkPressed===false){
      pinkPressed = true;
      subtotal += 19;
      beforeTaxes.innerHTML = subtotal;
  }
  else{
    pinkPressed = false;
    subtotal -= 19;
    beforeTaxes.innerHTML = subtotal;
  }
})

buttonOrange.addEventListener('click',function(){
  if(orangePressed===false){
      orangePressed = true;
      subtotal += 38;
      beforeTaxes.innerHTML = subtotal;
  }
  else{
    orangePressed = false;
    subtotal -= 38;
    beforeTaxes.innerHTML = subtotal;
  }
})
