var createArray = (lengthOfArray, maxValue) => [...new Array(lengthOfArray)]
    .map(() => Math.round(Math.random() * maxValue));

var newArr = createArray(10, 30);

function bubble(arr) {
  var len = arr.length;

  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(newArr);
console.log(bubble(newArr));
