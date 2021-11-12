const rr = (arr) => {
  let result = [];
  let length = 0;
  //  sort array by await
  arr = sortByAwait(arr)

  //  set output length
  arr.forEach(element => {
    length += element.duration;
  });
  length += +arr[0].await;

  //  fill array with iterations
  let isBusy = {place: null, takt: +taktIn.value};
  let stoppu = [];
  for (let i = 0; i < length; i++) {
    const iteration = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].await === 0) {
        if (arr[j].duration > 0) {
          if (isBusy.place == null || isBusy.place == j) {
            if (isBusy.takt ==  0 && j != arr.length - 1) {
              isBusy = {place: null, takt: +taktIn.value};
              iteration[j] = {id: arr[j].id, value: 'J'};  
            }
            else {
              isBusy.place = j;
              arr[j].duration--;
              iteration[j] = {id: arr[j].id, value: 'И'};
              isBusy.takt--;
              if (j == arr.length - 1) {
                if (isBusy.takt ==  0) {
                  isBusy = {place: null, takt: +taktIn.value};
                }
                if (arr[j].duration == 0) {
                  isBusy = {place: null, takt: +taktIn.value};
                }
              }
            }
          }
          else {
            iteration[j] = {id: arr[j].id, value: 'Г'};
          }
        }
        else {
          iteration[j] = {id: arr[j].id, value: '0'};
          if (!stoppu.includes(arr[j])) {
            isBusy = {place: null, takt: +taktIn.value};
            stoppu.push(arr[j]);
          }
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