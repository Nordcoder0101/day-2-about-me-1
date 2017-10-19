'use strict';

var seattle = prompt('Is Ken from Seattle?');
console.log('ken is not from seattle:', seattle);

if (seattle.toLowerCase() === 'y' || seattle.toLowerCase() === 'yes') {
  alert('Incorrect. He is not. He is from Montana.');
} else if (seattle.toLowerCase() === 'n' || seattle.toLowerCase() === 'no') {
  alert('You are correct! He is from Montana.');
} else {
  alert('Huh?? Where is that? He is from Montana.');
}

var coding = prompt('Does Ken come from a background in coding?');
console.log('ken does not have coding background', coding);

if (coding.toLowerCase() === 'n' || coding.toLowerCase() === 'no') {
  alert('You are right. He is in fitness.');
}
else if (coding.toLowerCase() === 'y' || coding.toLowerCase() === 'yes') {
  alert('Nope. He is in fitness.');
}
else {
  alert('Ummmm... He is in fitness.');
}

var food = prompt('Does Ken love food?');
console.log('ken loves food', food);

if (food.toLowerCase() === 'y' || food.toLowerCase() === 'yes') {
  alert('You are right. He LOVES food!.');
}
else if (food.toLowerCase() === 'n' || food.toLowerCase() === 'no') {
  alert('You could not be more wrong. He LOVES food!');
}
else {
  alert('Ummmm... He LOVES food.');
}

var seasons = prompt('Are Ken\'s favorite seasons spring and summer?');
console.log('ken\'s favorite seasons', seasons);

if (seasons.toLowerCase() === 'n' || seasons.toLowerCase() === 'no') {
  alert('You are correct. Fall and winter are.');
}
else if (seasons.toLowerCase() === 'y' || seasons.toLowerCase() === 'yes') {
  alert('Nope. He love fall and winter.');
}
else {
  alert('Ummmm... What is that? Fall and winter are the best.');
}

var animals = prompt('Does Ken like animals?');
console.log('Does ken like animals', animals);

if (animals.toLowerCase() === 'y' || animals.toLowerCase() === 'yes') {
  alert('You are correct. Animals are awesome!');
}
else if (animals.toLowerCase() === 'n' || animals.toLowerCase() === 'no') {
  alert('You are incorrect. He loves animals.');
}
else {
  alert('Ummmm... What is that? He loves amimals.');
}

var kids = prompt('How many kids, if any, does Ken have?');
console.log('How many kids', kids);

var counter = 1;

while (kids !== 1) {
  kids = parseInt(prompt('How many kids, if any, does Ken have?'));

  if (kids < 1) {
    alert('Nope. He has at least one kiddo.');
  } else if (kids > 1) {
    alert('Sorry. You think too many.');
  } else if (kids === NaN || kids === num) {
    alert('Please enter a number.');
    counter++;
  }
}
console.log('counter:', counter);
