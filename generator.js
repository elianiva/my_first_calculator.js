const fs = require("fs")

// limit of the calculator
let limit = 50

// write firs part of the file
fs.writeFileSync(
  "my_first_calculator.js",
  `
// create new input with utf-8 encoding
const input = process.stdin
input.setEncoding("utf-8")

// get user input
process.stdout.write("Insert operation (ex. 2 + 2): ")
input.on("readable", () => {
  let data = input.read().split(' ')
  let a = parseInt(data[0])
  let sign = data[1]
  let b = parseInt(data[2])
  check(a, sign, b)
})

// checks for conditions
function check(a, sign, b){
`
)

// signs for equation
let signs = ["+", "-", "*", "/"]

// generate if statement
for (let x = 0; x < 4; x++) {
  let sign = signs[x]
  for (let i = 1; i <= limit; i++) {
    // print with different a variable
    for (let j = 1; j <= limit; j++) {
      let command = `
if (a === ${i} && sign === "${sign}" && b === ${j} ) {
  console.log('${i} ${sign} ${j} = ${eval(i + sign + j)}')
} else `
      // append to file
      fs.appendFileSync("my_first_calculator.js", command)
    }
  }
}

// EOF
fs.appendFileSync(
  "my_first_calculator.js",
  `
{
  console.log("Something's wrong")
}
  console.log("Thanks for using this calculator. :)")
}`
)
