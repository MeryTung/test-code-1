const path = require('path')

const a = '/a/b/c.controller.ts'
const b = '/a/b/c.dto.ts'
const c = 'src/packages/a/b/c.d.ts'

console.log(a.endsWith('.controller.ts'))
console.log(b.endsWith('.dto.ts'))



const arr = []

arr.push(...[1, 2, 3, 4])
arr.push(...[1, 2, 3, 5])
console.log(arr)