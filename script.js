
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('') // generate alphabet array


function findMissing(s) {
  var s = s.replace(/\s/g, ""); // remove whitespace
  s = s.toLowerCase(); // make it take any input
  var missingArr  =[];
  for (var i = 0; i < alphabet.length; i++) {
      if(s.indexOf(alphabet[i]) == -1) {
        missingArr.push(alphabet[i]);
      }
    }
    missingArr = missingArr.join('');
    console.log(missingArr);
  }
