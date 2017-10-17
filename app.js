'use strict';

var kids = prompt('how many kids does brian have?');
console.log('brians num of kids:', kids);

var hats = prompt('how many hats does brian own?');
console.log('brian has this many hats', hats);

if (kids === '3' || kids === '4') {
  alert('you are right.');
}

if (kids === '3' && hats === '2') {
  alert('you are right again.');
}
