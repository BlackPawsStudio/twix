const esjf = (arr) => {
  let result = [];
  let length = 0;
  
  arr = sortByDuration(arr);
  //  set output length
  arr.forEach(element => {
    length += element.duration;
  });
  length += +arr[0].await;

  //  fill array with iterations
  let isBusy = null;
  for (let i = 0; i < length; i++) {
    const iteration = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].await == 0) {
        if (arr[j].duration > 0) {
          if (isBusy == null || isBusy == arr[j].id) {
            isBusy = arr[j].id;
            iteration[j] = {id: arr[j].id, value: 'И'};
            arr[j].duration--;
            if (arr[j].duration == 0 && j == arr.length - 1) {
              isBusy = null;
            }
          }
          else {
            iteration[j] = {id: arr[j].id, value: 'Г'};
          }
        }
        else {
          iteration[j] = {id: arr[j].id, value: '0'};
          isBusy = null;
        }
      }
      else {
        arr[j].await--;
        iteration[j] = {id: arr[j].id, value: '0'};
      }
    }
    result.push(iteration);
  }

  //  get ready for output
  result = transposeArray(result, result[0].length)
  result = sortById(result);
  return result;
}