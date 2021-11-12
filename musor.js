const addProcess = document.getElementById('add-process');
const processField = document.getElementById('input-form');
const removeProcess = document.getElementsByClassName('remove-process');
const algorBtns = document.getElementsByClassName('algor-btn');
const outputField = document.getElementById('result-output');
const label = document.getElementsByTagName('label');
const await = document.getElementsByClassName('await');
const duration = document.getElementsByClassName('duration');
const priority = document.getElementsByClassName('priority');
const taktIn = document.getElementById('takt');

const idGenerator = (a, arr) => arr.map(e => +e.id).includes(a) ? idGenerator(++a, arr) : a

const getProcess = (process) => `
<div class="process">
  <label>p${process.id}</label>
  <div class="process-fields">
    <input type="text" maxlength="3" class="process-field await" value="${process.await !== ''?process.await:''}">
    <input type="text" maxlength="3" class="process-field duration" value="${process.duration !== ''?process.duration:''}">
    <input type="text" maxlength="3" class="process-field priority" value="${process.priority !== ''?process.priority:''}">
    <button class="remove-process">-</button>
  </div>
</div>`

const render = () => {
  processField.innerHTML = '';
  for (let i = 0; i < processes.length; i++) {
    processField.innerHTML += getProcess(processes[i]);
  }
  for (let i = 0; i < processes.length; i++) {
    removeProcess[i].addEventListener('click', () => {
      processes.splice(i, 1)
      render()
    })
    await[i].addEventListener('input', () => {
      processes[i].await = +await[i].value
    })
    priority[i].addEventListener('input', () => {
      processes[i].priority = +priority[i].value
    })
    duration[i].addEventListener('input', () => {
      processes[i].duration = +duration[i].value
    })
  }
  
}

const output = (arr) => {
  outputField.innerHTML = '';
  let rows = '';
  let coloumns = '';
  for (let i = 0; i < arr.length; i++) {
    rows += 'auto ';
  }
  outputField.style.gridTemplateRows = rows;
  for (let i = 0; i < arr[0].length; i++) {
    coloumns += 'auto ';
  }
  outputField.style.gridTemplateColumns = coloumns;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      outputField.innerHTML += `<p class="${arr[i][j].value}">${arr[i][j].value != 0?arr[i][j].value:''}</p>`;
    }
  }
}

function transposeArray(array, arrayLength){
  let newArray = [];
  for(let i = 0; i < arrayLength; i++){
      newArray.push([]);
  };
  for(let i = 0; i < array.length; i++){
      for(let j = 0; j < arrayLength; j++){
          newArray[j].push(array[i][j]);
      };
  };
  return newArray;
}

const readData = () => {
  try {
    const arr = []
    for (let i = 0; i < processes.length; i++) {
      if (await[i].value === '' || duration[i].value === '')
        throw('Cringe, vvedi normalno');
      else {
        arr.push({
          id: processes[i].id,
          await: +await[i].value,
          duration: +duration[i].value,
          priority: +priority[i].value
        })
      }
    }
    return arr
  }
  catch (e) {
    alert(e)
  }
}

const sortById = (arr) => {
  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1])
        if (arr[j][0].id > arr[j + 1][0].id) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
		}
	}
  return arr;
}

const sortByAwait = (arr) => {
  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1])
        if (arr[j].await > arr[j + 1].await) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
		}
	}
  return arr;
}

const sortByDuration = (arr) => {
  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1])
        if (arr[j].duration > arr[j + 1].duration) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
		}
	}
  return arr;
}

const sortByPrior = (arr) => {
  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1])
        if (arr[j].priority > arr[j + 1].priority) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
		}
	}
  return arr;
}