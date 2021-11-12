const prior = (arr) => {
  let result = [];
  let length = 0;
  
  //  sort array by await
  arr = sortByPrior(arr);


  //  set output length
  arr.forEach(element => {
    length += element.duration;
  });
  length += +arr[0].await;

  //  fill array with iterations
  for (let i = 0; i < length; i++) {
    let isBusy = false;
    const iteration = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].await == 0) {
        if (!isBusy) {
          if (arr[j].duration > 0) {
            isBusy = true;
            iteration[j] = {id: arr[j].id, value: 'И'};
            arr[j].duration--;
          }
          else {
            iteration[j] = {id: arr[j].id, value: '0'};
            isBusy = false;
          }
        }
        else {
          iteration[j] = {id: arr[j].id, value: 'Г'};
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