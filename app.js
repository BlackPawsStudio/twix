let processes = [
  {
    id: 0,
    await: '',
    duration: '',
    priority: ''
  }
]
// let processes = [
//   {
//     id: 0,
//     await: 4,
//     duration: 3,
//     priority: 3
//   },
//   {
//     id: 1,
//     await: 2,
//     duration: 5,
//     priority: 5
//   },
//   {
//     id: 2,
//     await: 1,
//     duration: 7,
//     priority: 4
//   },
//   {
//     id: 3,
//     await: 3,
//     duration: 2,
//     priority: 2
//   },
//   {
//     id: 4,
//     await: 5,
//     duration: 5,
//     priority: 1
//   },
// ]
// let processes = [
//   {
//     id: 0,
//     await: 1,
//     duration: 7,
//     priority: 4
//   },
//   {
//     id: 1,
//     await: 2,
//     duration: 5,
//     priority: 2
//   },
//   {
//     id: 2,
//     await: 3,
//     duration: 3,
//     priority: 1
//   },
//   {
//     id: 3,
//     await: 4,
//     duration: 2,
//     priority: 3
//   },
//   {
//     id: 4,
//     await: 5,
//     duration: 5,
//     priority: 5
//   },
// ]

addProcess.addEventListener('click', () => {
  processes.push(
    {
      id: idGenerator(0, processes),
      await: '',
      duration: '',
      priority: ''
    }
  )
  render();
})

algorBtns[0].addEventListener('click', () => {
  output(fsfc(readData()));
})

algorBtns[1].addEventListener('click', () => {
  output(rr(readData()));
})

algorBtns[2].addEventListener('click', () => {
  if (ex) {
    console.log(ex);
    output(sjf(readData()));
  }
  else {
    output(esjf(readData()))
  }
})

algorBtns[3].addEventListener('click', () => {
  if (ex) {
    output(prior(readData()));
  }
  else {
    output(eprior(readData()));
  }
})

render();
