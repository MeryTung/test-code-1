const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 200)
})

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3)
  }, 300)
})

Promise.all([p1, p3, p2]).then(res => {
  console.log(res) // [ 1, 3, 2 ]
})

Promise.all([p1, p2, p3]).then(res => {
  console.log(res) // [ 1, 2, 3 ]
})
