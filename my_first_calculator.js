
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

if (a === 1 && sign === "+" && b === 1 ) {
  console.log('1 + 1 = 2')
} else
if (a === 1 && sign === "+" && b === 2 ) {
  console.log('1 + 2 = 3')
} else
if (a === 1 && sign === "+" && b === 3 ) {
  console.log('1 + 3 = 4')
} else
if (a === 1 && sign === "+" && b === 4 ) {
  console.log('1 + 4 = 5')
} else
if (a === 1 && sign === "+" && b === 5 ) {
  console.log('1 + 5 = 6')
} else
if (a === 1 && sign === "+" && b === 6 ) {
  console.log('1 + 6 = 7')
} else
if (a === 1 && sign === "+" && b === 7 ) {
  console.log('1 + 7 = 8')
} else
if (a === 1 && sign === "+" && b === 8 ) {
  console.log('1 + 8 = 9')
} else
if (a === 1 && sign === "+" && b === 9 ) {
  console.log('1 + 9 = 10')
} else
if (a === 1 && sign === "+" && b === 10 ) {
  console.log('1 + 10 = 11')
} else
if (a === 1 && sign === "+" && b === 11 ) {
  console.log('1 + 11 = 12')
} else
if (a === 1 && sign === "+" && b === 12 ) {
  console.log('1 + 12 = 13')
} else
if (a === 1 && sign === "+" && b === 13 ) {
  console.log('1 + 13 = 14')
} else
if (a === 1 && sign === "+" && b === 14 ) {
  console.log('1 + 14 = 15')
} else
if (a === 1 && sign === "+" && b === 15 ) {
  console.log('1 + 15 = 16')
} else
if (a === 1 && sign === "+" && b === 16 ) {
  console.log('1 + 16 = 17')
} else
if (a === 1 && sign === "+" && b === 17 ) {
  console.log('1 + 17 = 18')
} else
if (a === 1 && sign === "+" && b === 18 ) {
  console.log('1 + 18 = 19')
} else
if (a === 1 && sign === "+" && b === 19 ) {
  console.log('1 + 19 = 20')
} else
if (a === 1 && sign === "+" && b === 20 ) {
  console.log('1 + 20 = 21')
} else
if (a === 1 && sign === "+" && b === 21 ) {
  console.log('1 + 21 = 22')
} else
if (a === 1 && sign === "+" && b === 22 ) {
  console.log('1 + 22 = 23')
} else
if (a === 1 && sign === "+" && b === 23 ) {
  console.log('1 + 23 = 24')
} else
if (a === 1 && sign === "+" && b === 24 ) {
  console.log('1 + 24 = 25')
} else
if (a === 1 && sign === "+" && b === 25 ) {
  console.log('1 + 25 = 26')
} else
if (a === 1 && sign === "+" && b === 26 ) {
  console.log('1 + 26 = 27')
} else
if (a === 1 && sign === "+" && b === 27 ) {
  console.log('1 + 27 = 28')
} else
if (a === 1 && sign === "+" && b === 28 ) {
  console.log('1 + 28 = 29')
} else
if (a === 1 && sign === "+" && b === 29 ) {
  console.log('1 + 29 = 30')
} else
if (a === 1 && sign === "+" && b === 30 ) {
  console.log('1 + 30 = 31')
} else
if (a === 1 && sign === "+" && b === 31 ) {
  console.log('1 + 31 = 32')
} else
if (a === 1 && sign === "+" && b === 32 ) {
  console.log('1 + 32 = 33')
} else
if (a === 1 && sign === "+" && b === 33 ) {
  console.log('1 + 33 = 34')
} else
if (a === 1 && sign === "+" && b === 34 ) {
  console.log('1 + 34 = 35')
} else
if (a === 1 && sign === "+" && b === 35 ) {
  console.log('1 + 35 = 36')
} else
if (a === 1 && sign === "+" && b === 36 ) {
  console.log('1 + 36 = 37')
} else
if (a === 1 && sign === "+" && b === 37 ) {
  console.log('1 + 37 = 38')
} else
if (a === 1 && sign === "+" && b === 38 ) {
  console.log('1 + 38 = 39')
} else
if (a === 1 && sign === "+" && b === 39 ) {
  console.log('1 + 39 = 40')
} else
if (a === 1 && sign === "+" && b === 40 ) {
  console.log('1 + 40 = 41')
} else
if (a === 1 && sign === "+" && b === 41 ) {
  console.log('1 + 41 = 42')
} else
if (a === 1 && sign === "+" && b === 42 ) {
  console.log('1 + 42 = 43')
} else
if (a === 1 && sign === "+" && b === 43 ) {
  console.log('1 + 43 = 44')
} else
if (a === 1 && sign === "+" && b === 44 ) {
  console.log('1 + 44 = 45')
} else
if (a === 1 && sign === "+" && b === 45 ) {
  console.log('1 + 45 = 46')
} else
if (a === 1 && sign === "+" && b === 46 ) {
  console.log('1 + 46 = 47')
} else
if (a === 1 && sign === "+" && b === 47 ) {
  console.log('1 + 47 = 48')
} else
if (a === 1 && sign === "+" && b === 48 ) {
  console.log('1 + 48 = 49')
} else
if (a === 1 && sign === "+" && b === 49 ) {
  console.log('1 + 49 = 50')
} else
if (a === 1 && sign === "+" && b === 50 ) {
  console.log('1 + 50 = 51')
} else
if (a === 2 && sign === "+" && b === 1 ) {
  console.log('2 + 1 = 3')
} else
if (a === 2 && sign === "+" && b === 2 ) {
  console.log('2 + 2 = 4')
} else
if (a === 2 && sign === "+" && b === 3 ) {
  console.log('2 + 3 = 5')
} else
if (a === 2 && sign === "+" && b === 4 ) {
  console.log('2 + 4 = 6')
} else
if (a === 2 && sign === "+" && b === 5 ) {
  console.log('2 + 5 = 7')
} else
if (a === 2 && sign === "+" && b === 6 ) {
  console.log('2 + 6 = 8')
} else
if (a === 2 && sign === "+" && b === 7 ) {
  console.log('2 + 7 = 9')
} else
if (a === 2 && sign === "+" && b === 8 ) {
  console.log('2 + 8 = 10')
} else
if (a === 2 && sign === "+" && b === 9 ) {
  console.log('2 + 9 = 11')
} else
if (a === 2 && sign === "+" && b === 10 ) {
  console.log('2 + 10 = 12')
} else
if (a === 2 && sign === "+" && b === 11 ) {
  console.log('2 + 11 = 13')
} else
if (a === 2 && sign === "+" && b === 12 ) {
  console.log('2 + 12 = 14')
} else
if (a === 2 && sign === "+" && b === 13 ) {
  console.log('2 + 13 = 15')
} else
if (a === 2 && sign === "+" && b === 14 ) {
  console.log('2 + 14 = 16')
} else
if (a === 2 && sign === "+" && b === 15 ) {
  console.log('2 + 15 = 17')
} else
if (a === 2 && sign === "+" && b === 16 ) {
  console.log('2 + 16 = 18')
} else
if (a === 2 && sign === "+" && b === 17 ) {
  console.log('2 + 17 = 19')
} else
if (a === 2 && sign === "+" && b === 18 ) {
  console.log('2 + 18 = 20')
} else
if (a === 2 && sign === "+" && b === 19 ) {
  console.log('2 + 19 = 21')
} else
if (a === 2 && sign === "+" && b === 20 ) {
  console.log('2 + 20 = 22')
} else
if (a === 2 && sign === "+" && b === 21 ) {
  console.log('2 + 21 = 23')
} else
if (a === 2 && sign === "+" && b === 22 ) {
  console.log('2 + 22 = 24')
} else
if (a === 2 && sign === "+" && b === 23 ) {
  console.log('2 + 23 = 25')
} else
if (a === 2 && sign === "+" && b === 24 ) {
  console.log('2 + 24 = 26')
} else
if (a === 2 && sign === "+" && b === 25 ) {
  console.log('2 + 25 = 27')
} else
if (a === 2 && sign === "+" && b === 26 ) {
  console.log('2 + 26 = 28')
} else
if (a === 2 && sign === "+" && b === 27 ) {
  console.log('2 + 27 = 29')
} else
if (a === 2 && sign === "+" && b === 28 ) {
  console.log('2 + 28 = 30')
} else
if (a === 2 && sign === "+" && b === 29 ) {
  console.log('2 + 29 = 31')
} else
if (a === 2 && sign === "+" && b === 30 ) {
  console.log('2 + 30 = 32')
} else
if (a === 2 && sign === "+" && b === 31 ) {
  console.log('2 + 31 = 33')
} else
if (a === 2 && sign === "+" && b === 32 ) {
  console.log('2 + 32 = 34')
} else
if (a === 2 && sign === "+" && b === 33 ) {
  console.log('2 + 33 = 35')
} else
if (a === 2 && sign === "+" && b === 34 ) {
  console.log('2 + 34 = 36')
} else
if (a === 2 && sign === "+" && b === 35 ) {
  console.log('2 + 35 = 37')
} else
if (a === 2 && sign === "+" && b === 36 ) {
  console.log('2 + 36 = 38')
} else
if (a === 2 && sign === "+" && b === 37 ) {
  console.log('2 + 37 = 39')
} else
if (a === 2 && sign === "+" && b === 38 ) {
  console.log('2 + 38 = 40')
} else
if (a === 2 && sign === "+" && b === 39 ) {
  console.log('2 + 39 = 41')
} else
if (a === 2 && sign === "+" && b === 40 ) {
  console.log('2 + 40 = 42')
} else
if (a === 2 && sign === "+" && b === 41 ) {
  console.log('2 + 41 = 43')
} else
if (a === 2 && sign === "+" && b === 42 ) {
  console.log('2 + 42 = 44')
} else
if (a === 2 && sign === "+" && b === 43 ) {
  console.log('2 + 43 = 45')
} else
if (a === 2 && sign === "+" && b === 44 ) {
  console.log('2 + 44 = 46')
} else
if (a === 2 && sign === "+" && b === 45 ) {
  console.log('2 + 45 = 47')
} else
if (a === 2 && sign === "+" && b === 46 ) {
  console.log('2 + 46 = 48')
} else
if (a === 2 && sign === "+" && b === 47 ) {
  console.log('2 + 47 = 49')
} else
if (a === 2 && sign === "+" && b === 48 ) {
  console.log('2 + 48 = 50')
} else
if (a === 2 && sign === "+" && b === 49 ) {
  console.log('2 + 49 = 51')
} else
if (a === 2 && sign === "+" && b === 50 ) {
  console.log('2 + 50 = 52')
} else
if (a === 3 && sign === "+" && b === 1 ) {
  console.log('3 + 1 = 4')
} else
if (a === 3 && sign === "+" && b === 2 ) {
  console.log('3 + 2 = 5')
} else
if (a === 3 && sign === "+" && b === 3 ) {
  console.log('3 + 3 = 6')
} else
if (a === 3 && sign === "+" && b === 4 ) {
  console.log('3 + 4 = 7')
} else
if (a === 3 && sign === "+" && b === 5 ) {
  console.log('3 + 5 = 8')
} else
if (a === 3 && sign === "+" && b === 6 ) {
  console.log('3 + 6 = 9')
} else
if (a === 3 && sign === "+" && b === 7 ) {
  console.log('3 + 7 = 10')
} else
if (a === 3 && sign === "+" && b === 8 ) {
  console.log('3 + 8 = 11')
} else
if (a === 3 && sign === "+" && b === 9 ) {
  console.log('3 + 9 = 12')
} else
if (a === 3 && sign === "+" && b === 10 ) {
  console.log('3 + 10 = 13')
} else
if (a === 3 && sign === "+" && b === 11 ) {
  console.log('3 + 11 = 14')
} else
if (a === 3 && sign === "+" && b === 12 ) {
  console.log('3 + 12 = 15')
} else
if (a === 3 && sign === "+" && b === 13 ) {
  console.log('3 + 13 = 16')
} else
if (a === 3 && sign === "+" && b === 14 ) {
  console.log('3 + 14 = 17')
} else
if (a === 3 && sign === "+" && b === 15 ) {
  console.log('3 + 15 = 18')
} else
if (a === 3 && sign === "+" && b === 16 ) {
  console.log('3 + 16 = 19')
} else
if (a === 3 && sign === "+" && b === 17 ) {
  console.log('3 + 17 = 20')
} else
if (a === 3 && sign === "+" && b === 18 ) {
  console.log('3 + 18 = 21')
} else
if (a === 3 && sign === "+" && b === 19 ) {
  console.log('3 + 19 = 22')
} else
if (a === 3 && sign === "+" && b === 20 ) {
  console.log('3 + 20 = 23')
} else
if (a === 3 && sign === "+" && b === 21 ) {
  console.log('3 + 21 = 24')
} else
if (a === 3 && sign === "+" && b === 22 ) {
  console.log('3 + 22 = 25')
} else
if (a === 3 && sign === "+" && b === 23 ) {
  console.log('3 + 23 = 26')
} else
if (a === 3 && sign === "+" && b === 24 ) {
  console.log('3 + 24 = 27')
} else
if (a === 3 && sign === "+" && b === 25 ) {
  console.log('3 + 25 = 28')
} else
if (a === 3 && sign === "+" && b === 26 ) {
  console.log('3 + 26 = 29')
} else
if (a === 3 && sign === "+" && b === 27 ) {
  console.log('3 + 27 = 30')
} else
if (a === 3 && sign === "+" && b === 28 ) {
  console.log('3 + 28 = 31')
} else
if (a === 3 && sign === "+" && b === 29 ) {
  console.log('3 + 29 = 32')
} else
if (a === 3 && sign === "+" && b === 30 ) {
  console.log('3 + 30 = 33')
} else
if (a === 3 && sign === "+" && b === 31 ) {
  console.log('3 + 31 = 34')
} else
if (a === 3 && sign === "+" && b === 32 ) {
  console.log('3 + 32 = 35')
} else
if (a === 3 && sign === "+" && b === 33 ) {
  console.log('3 + 33 = 36')
} else
if (a === 3 && sign === "+" && b === 34 ) {
  console.log('3 + 34 = 37')
} else
if (a === 3 && sign === "+" && b === 35 ) {
  console.log('3 + 35 = 38')
} else
if (a === 3 && sign === "+" && b === 36 ) {
  console.log('3 + 36 = 39')
} else
if (a === 3 && sign === "+" && b === 37 ) {
  console.log('3 + 37 = 40')
} else
if (a === 3 && sign === "+" && b === 38 ) {
  console.log('3 + 38 = 41')
} else
if (a === 3 && sign === "+" && b === 39 ) {
  console.log('3 + 39 = 42')
} else
if (a === 3 && sign === "+" && b === 40 ) {
  console.log('3 + 40 = 43')
} else
if (a === 3 && sign === "+" && b === 41 ) {
  console.log('3 + 41 = 44')
} else
if (a === 3 && sign === "+" && b === 42 ) {
  console.log('3 + 42 = 45')
} else
if (a === 3 && sign === "+" && b === 43 ) {
  console.log('3 + 43 = 46')
} else
if (a === 3 && sign === "+" && b === 44 ) {
  console.log('3 + 44 = 47')
} else
if (a === 3 && sign === "+" && b === 45 ) {
  console.log('3 + 45 = 48')
} else
if (a === 3 && sign === "+" && b === 46 ) {
  console.log('3 + 46 = 49')
} else
if (a === 3 && sign === "+" && b === 47 ) {
  console.log('3 + 47 = 50')
} else
if (a === 3 && sign === "+" && b === 48 ) {
  console.log('3 + 48 = 51')
} else
if (a === 3 && sign === "+" && b === 49 ) {
  console.log('3 + 49 = 52')
} else
if (a === 3 && sign === "+" && b === 50 ) {
  console.log('3 + 50 = 53')
} else
if (a === 4 && sign === "+" && b === 1 ) {
  console.log('4 + 1 = 5')
} else
if (a === 4 && sign === "+" && b === 2 ) {
  console.log('4 + 2 = 6')
} else
if (a === 4 && sign === "+" && b === 3 ) {
  console.log('4 + 3 = 7')
} else
if (a === 4 && sign === "+" && b === 4 ) {
  console.log('4 + 4 = 8')
} else
if (a === 4 && sign === "+" && b === 5 ) {
  console.log('4 + 5 = 9')
} else
if (a === 4 && sign === "+" && b === 6 ) {
  console.log('4 + 6 = 10')
} else
if (a === 4 && sign === "+" && b === 7 ) {
  console.log('4 + 7 = 11')
} else
if (a === 4 && sign === "+" && b === 8 ) {
  console.log('4 + 8 = 12')
} else
if (a === 4 && sign === "+" && b === 9 ) {
  console.log('4 + 9 = 13')
} else
if (a === 4 && sign === "+" && b === 10 ) {
  console.log('4 + 10 = 14')
} else
if (a === 4 && sign === "+" && b === 11 ) {
  console.log('4 + 11 = 15')
} else
if (a === 4 && sign === "+" && b === 12 ) {
  console.log('4 + 12 = 16')
} else
if (a === 4 && sign === "+" && b === 13 ) {
  console.log('4 + 13 = 17')
} else
if (a === 4 && sign === "+" && b === 14 ) {
  console.log('4 + 14 = 18')
} else
if (a === 4 && sign === "+" && b === 15 ) {
  console.log('4 + 15 = 19')
} else
if (a === 4 && sign === "+" && b === 16 ) {
  console.log('4 + 16 = 20')
} else
if (a === 4 && sign === "+" && b === 17 ) {
  console.log('4 + 17 = 21')
} else
if (a === 4 && sign === "+" && b === 18 ) {
  console.log('4 + 18 = 22')
} else
if (a === 4 && sign === "+" && b === 19 ) {
  console.log('4 + 19 = 23')
} else
if (a === 4 && sign === "+" && b === 20 ) {
  console.log('4 + 20 = 24')
} else
if (a === 4 && sign === "+" && b === 21 ) {
  console.log('4 + 21 = 25')
} else
if (a === 4 && sign === "+" && b === 22 ) {
  console.log('4 + 22 = 26')
} else
if (a === 4 && sign === "+" && b === 23 ) {
  console.log('4 + 23 = 27')
} else
if (a === 4 && sign === "+" && b === 24 ) {
  console.log('4 + 24 = 28')
} else
if (a === 4 && sign === "+" && b === 25 ) {
  console.log('4 + 25 = 29')
} else
if (a === 4 && sign === "+" && b === 26 ) {
  console.log('4 + 26 = 30')
} else
if (a === 4 && sign === "+" && b === 27 ) {
  console.log('4 + 27 = 31')
} else
if (a === 4 && sign === "+" && b === 28 ) {
  console.log('4 + 28 = 32')
} else
if (a === 4 && sign === "+" && b === 29 ) {
  console.log('4 + 29 = 33')
} else
if (a === 4 && sign === "+" && b === 30 ) {
  console.log('4 + 30 = 34')
} else
if (a === 4 && sign === "+" && b === 31 ) {
  console.log('4 + 31 = 35')
} else
if (a === 4 && sign === "+" && b === 32 ) {
  console.log('4 + 32 = 36')
} else
if (a === 4 && sign === "+" && b === 33 ) {
  console.log('4 + 33 = 37')
} else
if (a === 4 && sign === "+" && b === 34 ) {
  console.log('4 + 34 = 38')
} else
if (a === 4 && sign === "+" && b === 35 ) {
  console.log('4 + 35 = 39')
} else
if (a === 4 && sign === "+" && b === 36 ) {
  console.log('4 + 36 = 40')
} else
if (a === 4 && sign === "+" && b === 37 ) {
  console.log('4 + 37 = 41')
} else
if (a === 4 && sign === "+" && b === 38 ) {
  console.log('4 + 38 = 42')
} else
if (a === 4 && sign === "+" && b === 39 ) {
  console.log('4 + 39 = 43')
} else
if (a === 4 && sign === "+" && b === 40 ) {
  console.log('4 + 40 = 44')
} else
if (a === 4 && sign === "+" && b === 41 ) {
  console.log('4 + 41 = 45')
} else
if (a === 4 && sign === "+" && b === 42 ) {
  console.log('4 + 42 = 46')
} else
if (a === 4 && sign === "+" && b === 43 ) {
  console.log('4 + 43 = 47')
} else
if (a === 4 && sign === "+" && b === 44 ) {
  console.log('4 + 44 = 48')
} else
if (a === 4 && sign === "+" && b === 45 ) {
  console.log('4 + 45 = 49')
} else
if (a === 4 && sign === "+" && b === 46 ) {
  console.log('4 + 46 = 50')
} else
if (a === 4 && sign === "+" && b === 47 ) {
  console.log('4 + 47 = 51')
} else
if (a === 4 && sign === "+" && b === 48 ) {
  console.log('4 + 48 = 52')
} else
if (a === 4 && sign === "+" && b === 49 ) {
  console.log('4 + 49 = 53')
} else
if (a === 4 && sign === "+" && b === 50 ) {
  console.log('4 + 50 = 54')
} else
if (a === 5 && sign === "+" && b === 1 ) {
  console.log('5 + 1 = 6')
} else
if (a === 5 && sign === "+" && b === 2 ) {
  console.log('5 + 2 = 7')
} else
if (a === 5 && sign === "+" && b === 3 ) {
  console.log('5 + 3 = 8')
} else
if (a === 5 && sign === "+" && b === 4 ) {
  console.log('5 + 4 = 9')
} else
if (a === 5 && sign === "+" && b === 5 ) {
  console.log('5 + 5 = 10')
} else
if (a === 5 && sign === "+" && b === 6 ) {
  console.log('5 + 6 = 11')
} else
if (a === 5 && sign === "+" && b === 7 ) {
  console.log('5 + 7 = 12')
} else
if (a === 5 && sign === "+" && b === 8 ) {
  console.log('5 + 8 = 13')
} else
if (a === 5 && sign === "+" && b === 9 ) {
  console.log('5 + 9 = 14')
} else
if (a === 5 && sign === "+" && b === 10 ) {
  console.log('5 + 10 = 15')
} else
if (a === 5 && sign === "+" && b === 11 ) {
  console.log('5 + 11 = 16')
} else
if (a === 5 && sign === "+" && b === 12 ) {
  console.log('5 + 12 = 17')
} else
if (a === 5 && sign === "+" && b === 13 ) {
  console.log('5 + 13 = 18')
} else
if (a === 5 && sign === "+" && b === 14 ) {
  console.log('5 + 14 = 19')
} else
if (a === 5 && sign === "+" && b === 15 ) {
  console.log('5 + 15 = 20')
} else
if (a === 5 && sign === "+" && b === 16 ) {
  console.log('5 + 16 = 21')
} else
if (a === 5 && sign === "+" && b === 17 ) {
  console.log('5 + 17 = 22')
} else
if (a === 5 && sign === "+" && b === 18 ) {
  console.log('5 + 18 = 23')
} else
if (a === 5 && sign === "+" && b === 19 ) {
  console.log('5 + 19 = 24')
} else
if (a === 5 && sign === "+" && b === 20 ) {
  console.log('5 + 20 = 25')
} else
if (a === 5 && sign === "+" && b === 21 ) {
  console.log('5 + 21 = 26')
} else
if (a === 5 && sign === "+" && b === 22 ) {
  console.log('5 + 22 = 27')
} else
if (a === 5 && sign === "+" && b === 23 ) {
  console.log('5 + 23 = 28')
} else
if (a === 5 && sign === "+" && b === 24 ) {
  console.log('5 + 24 = 29')
} else
if (a === 5 && sign === "+" && b === 25 ) {
  console.log('5 + 25 = 30')
} else
if (a === 5 && sign === "+" && b === 26 ) {
  console.log('5 + 26 = 31')
} else
if (a === 5 && sign === "+" && b === 27 ) {
  console.log('5 + 27 = 32')
} else
if (a === 5 && sign === "+" && b === 28 ) {
  console.log('5 + 28 = 33')
} else
if (a === 5 && sign === "+" && b === 29 ) {
  console.log('5 + 29 = 34')
} else
if (a === 5 && sign === "+" && b === 30 ) {
  console.log('5 + 30 = 35')
} else
if (a === 5 && sign === "+" && b === 31 ) {
  console.log('5 + 31 = 36')
} else
if (a === 5 && sign === "+" && b === 32 ) {
  console.log('5 + 32 = 37')
} else
if (a === 5 && sign === "+" && b === 33 ) {
  console.log('5 + 33 = 38')
} else
if (a === 5 && sign === "+" && b === 34 ) {
  console.log('5 + 34 = 39')
} else
if (a === 5 && sign === "+" && b === 35 ) {
  console.log('5 + 35 = 40')
} else
if (a === 5 && sign === "+" && b === 36 ) {
  console.log('5 + 36 = 41')
} else
if (a === 5 && sign === "+" && b === 37 ) {
  console.log('5 + 37 = 42')
} else
if (a === 5 && sign === "+" && b === 38 ) {
  console.log('5 + 38 = 43')
} else
if (a === 5 && sign === "+" && b === 39 ) {
  console.log('5 + 39 = 44')
} else
if (a === 5 && sign === "+" && b === 40 ) {
  console.log('5 + 40 = 45')
} else
if (a === 5 && sign === "+" && b === 41 ) {
  console.log('5 + 41 = 46')
} else
if (a === 5 && sign === "+" && b === 42 ) {
  console.log('5 + 42 = 47')
} else
if (a === 5 && sign === "+" && b === 43 ) {
  console.log('5 + 43 = 48')
} else
if (a === 5 && sign === "+" && b === 44 ) {
  console.log('5 + 44 = 49')
} else
if (a === 5 && sign === "+" && b === 45 ) {
  console.log('5 + 45 = 50')
} else
if (a === 5 && sign === "+" && b === 46 ) {
  console.log('5 + 46 = 51')
} else
if (a === 5 && sign === "+" && b === 47 ) {
  console.log('5 + 47 = 52')
} else
if (a === 5 && sign === "+" && b === 48 ) {
  console.log('5 + 48 = 53')
} else
if (a === 5 && sign === "+" && b === 49 ) {
  console.log('5 + 49 = 54')
} else
if (a === 5 && sign === "+" && b === 50 ) {
  console.log('5 + 50 = 55')
} else
if (a === 6 && sign === "+" && b === 1 ) {
  console.log('6 + 1 = 7')
} else
if (a === 6 && sign === "+" && b === 2 ) {
  console.log('6 + 2 = 8')
} else
if (a === 6 && sign === "+" && b === 3 ) {
  console.log('6 + 3 = 9')
} else
if (a === 6 && sign === "+" && b === 4 ) {
  console.log('6 + 4 = 10')
} else
if (a === 6 && sign === "+" && b === 5 ) {
  console.log('6 + 5 = 11')
} else
if (a === 6 && sign === "+" && b === 6 ) {
  console.log('6 + 6 = 12')
} else
if (a === 6 && sign === "+" && b === 7 ) {
  console.log('6 + 7 = 13')
} else
if (a === 6 && sign === "+" && b === 8 ) {
  console.log('6 + 8 = 14')
} else
if (a === 6 && sign === "+" && b === 9 ) {
  console.log('6 + 9 = 15')
} else
if (a === 6 && sign === "+" && b === 10 ) {
  console.log('6 + 10 = 16')
} else
if (a === 6 && sign === "+" && b === 11 ) {
  console.log('6 + 11 = 17')
} else
if (a === 6 && sign === "+" && b === 12 ) {
  console.log('6 + 12 = 18')
} else
if (a === 6 && sign === "+" && b === 13 ) {
  console.log('6 + 13 = 19')
} else
if (a === 6 && sign === "+" && b === 14 ) {
  console.log('6 + 14 = 20')
} else
if (a === 6 && sign === "+" && b === 15 ) {
  console.log('6 + 15 = 21')
} else
if (a === 6 && sign === "+" && b === 16 ) {
  console.log('6 + 16 = 22')
} else
if (a === 6 && sign === "+" && b === 17 ) {
  console.log('6 + 17 = 23')
} else
if (a === 6 && sign === "+" && b === 18 ) {
  console.log('6 + 18 = 24')
} else
if (a === 6 && sign === "+" && b === 19 ) {
  console.log('6 + 19 = 25')
} else
if (a === 6 && sign === "+" && b === 20 ) {
  console.log('6 + 20 = 26')
} else
if (a === 6 && sign === "+" && b === 21 ) {
  console.log('6 + 21 = 27')
} else
if (a === 6 && sign === "+" && b === 22 ) {
  console.log('6 + 22 = 28')
} else
if (a === 6 && sign === "+" && b === 23 ) {
  console.log('6 + 23 = 29')
} else
if (a === 6 && sign === "+" && b === 24 ) {
  console.log('6 + 24 = 30')
} else
if (a === 6 && sign === "+" && b === 25 ) {
  console.log('6 + 25 = 31')
} else
if (a === 6 && sign === "+" && b === 26 ) {
  console.log('6 + 26 = 32')
} else
if (a === 6 && sign === "+" && b === 27 ) {
  console.log('6 + 27 = 33')
} else
if (a === 6 && sign === "+" && b === 28 ) {
  console.log('6 + 28 = 34')
} else
if (a === 6 && sign === "+" && b === 29 ) {
  console.log('6 + 29 = 35')
} else
if (a === 6 && sign === "+" && b === 30 ) {
  console.log('6 + 30 = 36')
} else
if (a === 6 && sign === "+" && b === 31 ) {
  console.log('6 + 31 = 37')
} else
if (a === 6 && sign === "+" && b === 32 ) {
  console.log('6 + 32 = 38')
} else
if (a === 6 && sign === "+" && b === 33 ) {
  console.log('6 + 33 = 39')
} else
if (a === 6 && sign === "+" && b === 34 ) {
  console.log('6 + 34 = 40')
} else
if (a === 6 && sign === "+" && b === 35 ) {
  console.log('6 + 35 = 41')
} else
if (a === 6 && sign === "+" && b === 36 ) {
  console.log('6 + 36 = 42')
} else
if (a === 6 && sign === "+" && b === 37 ) {
  console.log('6 + 37 = 43')
} else
if (a === 6 && sign === "+" && b === 38 ) {
  console.log('6 + 38 = 44')
} else
if (a === 6 && sign === "+" && b === 39 ) {
  console.log('6 + 39 = 45')
} else
if (a === 6 && sign === "+" && b === 40 ) {
  console.log('6 + 40 = 46')
} else
if (a === 6 && sign === "+" && b === 41 ) {
  console.log('6 + 41 = 47')
} else
if (a === 6 && sign === "+" && b === 42 ) {
  console.log('6 + 42 = 48')
} else
if (a === 6 && sign === "+" && b === 43 ) {
  console.log('6 + 43 = 49')
} else
if (a === 6 && sign === "+" && b === 44 ) {
  console.log('6 + 44 = 50')
} else
if (a === 6 && sign === "+" && b === 45 ) {
  console.log('6 + 45 = 51')
} else
if (a === 6 && sign === "+" && b === 46 ) {
  console.log('6 + 46 = 52')
} else
if (a === 6 && sign === "+" && b === 47 ) {
  console.log('6 + 47 = 53')
} else
if (a === 6 && sign === "+" && b === 48 ) {
  console.log('6 + 48 = 54')
} else
if (a === 6 && sign === "+" && b === 49 ) {
  console.log('6 + 49 = 55')
} else
if (a === 6 && sign === "+" && b === 50 ) {
  console.log('6 + 50 = 56')
} else
if (a === 7 && sign === "+" && b === 1 ) {
  console.log('7 + 1 = 8')
} else
if (a === 7 && sign === "+" && b === 2 ) {
  console.log('7 + 2 = 9')
} else
if (a === 7 && sign === "+" && b === 3 ) {
  console.log('7 + 3 = 10')
} else
if (a === 7 && sign === "+" && b === 4 ) {
  console.log('7 + 4 = 11')
} else
if (a === 7 && sign === "+" && b === 5 ) {
  console.log('7 + 5 = 12')
} else
if (a === 7 && sign === "+" && b === 6 ) {
  console.log('7 + 6 = 13')
} else
if (a === 7 && sign === "+" && b === 7 ) {
  console.log('7 + 7 = 14')
} else
if (a === 7 && sign === "+" && b === 8 ) {
  console.log('7 + 8 = 15')
} else
if (a === 7 && sign === "+" && b === 9 ) {
  console.log('7 + 9 = 16')
} else
if (a === 7 && sign === "+" && b === 10 ) {
  console.log('7 + 10 = 17')
} else
if (a === 7 && sign === "+" && b === 11 ) {
  console.log('7 + 11 = 18')
} else
if (a === 7 && sign === "+" && b === 12 ) {
  console.log('7 + 12 = 19')
} else
if (a === 7 && sign === "+" && b === 13 ) {
  console.log('7 + 13 = 20')
} else
if (a === 7 && sign === "+" && b === 14 ) {
  console.log('7 + 14 = 21')
} else
if (a === 7 && sign === "+" && b === 15 ) {
  console.log('7 + 15 = 22')
} else
if (a === 7 && sign === "+" && b === 16 ) {
  console.log('7 + 16 = 23')
} else
if (a === 7 && sign === "+" && b === 17 ) {
  console.log('7 + 17 = 24')
} else
if (a === 7 && sign === "+" && b === 18 ) {
  console.log('7 + 18 = 25')
} else
if (a === 7 && sign === "+" && b === 19 ) {
  console.log('7 + 19 = 26')
} else
if (a === 7 && sign === "+" && b === 20 ) {
  console.log('7 + 20 = 27')
} else
if (a === 7 && sign === "+" && b === 21 ) {
  console.log('7 + 21 = 28')
} else
if (a === 7 && sign === "+" && b === 22 ) {
  console.log('7 + 22 = 29')
} else
if (a === 7 && sign === "+" && b === 23 ) {
  console.log('7 + 23 = 30')
} else
if (a === 7 && sign === "+" && b === 24 ) {
  console.log('7 + 24 = 31')
} else
if (a === 7 && sign === "+" && b === 25 ) {
  console.log('7 + 25 = 32')
} else
if (a === 7 && sign === "+" && b === 26 ) {
  console.log('7 + 26 = 33')
} else
if (a === 7 && sign === "+" && b === 27 ) {
  console.log('7 + 27 = 34')
} else
if (a === 7 && sign === "+" && b === 28 ) {
  console.log('7 + 28 = 35')
} else
if (a === 7 && sign === "+" && b === 29 ) {
  console.log('7 + 29 = 36')
} else
if (a === 7 && sign === "+" && b === 30 ) {
  console.log('7 + 30 = 37')
} else
if (a === 7 && sign === "+" && b === 31 ) {
  console.log('7 + 31 = 38')
} else
if (a === 7 && sign === "+" && b === 32 ) {
  console.log('7 + 32 = 39')
} else
if (a === 7 && sign === "+" && b === 33 ) {
  console.log('7 + 33 = 40')
} else
if (a === 7 && sign === "+" && b === 34 ) {
  console.log('7 + 34 = 41')
} else
if (a === 7 && sign === "+" && b === 35 ) {
  console.log('7 + 35 = 42')
} else
if (a === 7 && sign === "+" && b === 36 ) {
  console.log('7 + 36 = 43')
} else
if (a === 7 && sign === "+" && b === 37 ) {
  console.log('7 + 37 = 44')
} else
if (a === 7 && sign === "+" && b === 38 ) {
  console.log('7 + 38 = 45')
} else
if (a === 7 && sign === "+" && b === 39 ) {
  console.log('7 + 39 = 46')
} else
if (a === 7 && sign === "+" && b === 40 ) {
  console.log('7 + 40 = 47')
} else
if (a === 7 && sign === "+" && b === 41 ) {
  console.log('7 + 41 = 48')
} else
if (a === 7 && sign === "+" && b === 42 ) {
  console.log('7 + 42 = 49')
} else
if (a === 7 && sign === "+" && b === 43 ) {
  console.log('7 + 43 = 50')
} else
if (a === 7 && sign === "+" && b === 44 ) {
  console.log('7 + 44 = 51')
} else
if (a === 7 && sign === "+" && b === 45 ) {
  console.log('7 + 45 = 52')
} else
if (a === 7 && sign === "+" && b === 46 ) {
  console.log('7 + 46 = 53')
} else
if (a === 7 && sign === "+" && b === 47 ) {
  console.log('7 + 47 = 54')
} else
if (a === 7 && sign === "+" && b === 48 ) {
  console.log('7 + 48 = 55')
} else
if (a === 7 && sign === "+" && b === 49 ) {
  console.log('7 + 49 = 56')
} else
if (a === 7 && sign === "+" && b === 50 ) {
  console.log('7 + 50 = 57')
} else
if (a === 8 && sign === "+" && b === 1 ) {
  console.log('8 + 1 = 9')
} else
if (a === 8 && sign === "+" && b === 2 ) {
  console.log('8 + 2 = 10')
} else
if (a === 8 && sign === "+" && b === 3 ) {
  console.log('8 + 3 = 11')
} else
if (a === 8 && sign === "+" && b === 4 ) {
  console.log('8 + 4 = 12')
} else
if (a === 8 && sign === "+" && b === 5 ) {
  console.log('8 + 5 = 13')
} else
if (a === 8 && sign === "+" && b === 6 ) {
  console.log('8 + 6 = 14')
} else
if (a === 8 && sign === "+" && b === 7 ) {
  console.log('8 + 7 = 15')
} else
if (a === 8 && sign === "+" && b === 8 ) {
  console.log('8 + 8 = 16')
} else
if (a === 8 && sign === "+" && b === 9 ) {
  console.log('8 + 9 = 17')
} else
if (a === 8 && sign === "+" && b === 10 ) {
  console.log('8 + 10 = 18')
} else
if (a === 8 && sign === "+" && b === 11 ) {
  console.log('8 + 11 = 19')
} else
if (a === 8 && sign === "+" && b === 12 ) {
  console.log('8 + 12 = 20')
} else
if (a === 8 && sign === "+" && b === 13 ) {
  console.log('8 + 13 = 21')
} else
if (a === 8 && sign === "+" && b === 14 ) {
  console.log('8 + 14 = 22')
} else
if (a === 8 && sign === "+" && b === 15 ) {
  console.log('8 + 15 = 23')
} else
if (a === 8 && sign === "+" && b === 16 ) {
  console.log('8 + 16 = 24')
} else
if (a === 8 && sign === "+" && b === 17 ) {
  console.log('8 + 17 = 25')
} else
if (a === 8 && sign === "+" && b === 18 ) {
  console.log('8 + 18 = 26')
} else
if (a === 8 && sign === "+" && b === 19 ) {
  console.log('8 + 19 = 27')
} else
if (a === 8 && sign === "+" && b === 20 ) {
  console.log('8 + 20 = 28')
} else
if (a === 8 && sign === "+" && b === 21 ) {
  console.log('8 + 21 = 29')
} else
if (a === 8 && sign === "+" && b === 22 ) {
  console.log('8 + 22 = 30')
} else
if (a === 8 && sign === "+" && b === 23 ) {
  console.log('8 + 23 = 31')
} else
if (a === 8 && sign === "+" && b === 24 ) {
  console.log('8 + 24 = 32')
} else
if (a === 8 && sign === "+" && b === 25 ) {
  console.log('8 + 25 = 33')
} else
if (a === 8 && sign === "+" && b === 26 ) {
  console.log('8 + 26 = 34')
} else
if (a === 8 && sign === "+" && b === 27 ) {
  console.log('8 + 27 = 35')
} else
if (a === 8 && sign === "+" && b === 28 ) {
  console.log('8 + 28 = 36')
} else
if (a === 8 && sign === "+" && b === 29 ) {
  console.log('8 + 29 = 37')
} else
if (a === 8 && sign === "+" && b === 30 ) {
  console.log('8 + 30 = 38')
} else
if (a === 8 && sign === "+" && b === 31 ) {
  console.log('8 + 31 = 39')
} else
if (a === 8 && sign === "+" && b === 32 ) {
  console.log('8 + 32 = 40')
} else
if (a === 8 && sign === "+" && b === 33 ) {
  console.log('8 + 33 = 41')
} else
if (a === 8 && sign === "+" && b === 34 ) {
  console.log('8 + 34 = 42')
} else
if (a === 8 && sign === "+" && b === 35 ) {
  console.log('8 + 35 = 43')
} else
if (a === 8 && sign === "+" && b === 36 ) {
  console.log('8 + 36 = 44')
} else
if (a === 8 && sign === "+" && b === 37 ) {
  console.log('8 + 37 = 45')
} else
if (a === 8 && sign === "+" && b === 38 ) {
  console.log('8 + 38 = 46')
} else
if (a === 8 && sign === "+" && b === 39 ) {
  console.log('8 + 39 = 47')
} else
if (a === 8 && sign === "+" && b === 40 ) {
  console.log('8 + 40 = 48')
} else
if (a === 8 && sign === "+" && b === 41 ) {
  console.log('8 + 41 = 49')
} else
if (a === 8 && sign === "+" && b === 42 ) {
  console.log('8 + 42 = 50')
} else
if (a === 8 && sign === "+" && b === 43 ) {
  console.log('8 + 43 = 51')
} else
if (a === 8 && sign === "+" && b === 44 ) {
  console.log('8 + 44 = 52')
} else
if (a === 8 && sign === "+" && b === 45 ) {
  console.log('8 + 45 = 53')
} else
if (a === 8 && sign === "+" && b === 46 ) {
  console.log('8 + 46 = 54')
} else
if (a === 8 && sign === "+" && b === 47 ) {
  console.log('8 + 47 = 55')
} else
if (a === 8 && sign === "+" && b === 48 ) {
  console.log('8 + 48 = 56')
} else
if (a === 8 && sign === "+" && b === 49 ) {
  console.log('8 + 49 = 57')
} else
if (a === 8 && sign === "+" && b === 50 ) {
  console.log('8 + 50 = 58')
} else
if (a === 9 && sign === "+" && b === 1 ) {
  console.log('9 + 1 = 10')
} else
if (a === 9 && sign === "+" && b === 2 ) {
  console.log('9 + 2 = 11')
} else
if (a === 9 && sign === "+" && b === 3 ) {
  console.log('9 + 3 = 12')
} else
if (a === 9 && sign === "+" && b === 4 ) {
  console.log('9 + 4 = 13')
} else
if (a === 9 && sign === "+" && b === 5 ) {
  console.log('9 + 5 = 14')
} else
if (a === 9 && sign === "+" && b === 6 ) {
  console.log('9 + 6 = 15')
} else
if (a === 9 && sign === "+" && b === 7 ) {
  console.log('9 + 7 = 16')
} else
if (a === 9 && sign === "+" && b === 8 ) {
  console.log('9 + 8 = 17')
} else
if (a === 9 && sign === "+" && b === 9 ) {
  console.log('9 + 9 = 18')
} else
if (a === 9 && sign === "+" && b === 10 ) {
  console.log('9 + 10 = 19')
} else
if (a === 9 && sign === "+" && b === 11 ) {
  console.log('9 + 11 = 20')
} else
if (a === 9 && sign === "+" && b === 12 ) {
  console.log('9 + 12 = 21')
} else
if (a === 9 && sign === "+" && b === 13 ) {
  console.log('9 + 13 = 22')
} else
if (a === 9 && sign === "+" && b === 14 ) {
  console.log('9 + 14 = 23')
} else
if (a === 9 && sign === "+" && b === 15 ) {
  console.log('9 + 15 = 24')
} else
if (a === 9 && sign === "+" && b === 16 ) {
  console.log('9 + 16 = 25')
} else
if (a === 9 && sign === "+" && b === 17 ) {
  console.log('9 + 17 = 26')
} else
if (a === 9 && sign === "+" && b === 18 ) {
  console.log('9 + 18 = 27')
} else
if (a === 9 && sign === "+" && b === 19 ) {
  console.log('9 + 19 = 28')
} else
if (a === 9 && sign === "+" && b === 20 ) {
  console.log('9 + 20 = 29')
} else
if (a === 9 && sign === "+" && b === 21 ) {
  console.log('9 + 21 = 30')
} else
if (a === 9 && sign === "+" && b === 22 ) {
  console.log('9 + 22 = 31')
} else
if (a === 9 && sign === "+" && b === 23 ) {
  console.log('9 + 23 = 32')
} else
if (a === 9 && sign === "+" && b === 24 ) {
  console.log('9 + 24 = 33')
} else
if (a === 9 && sign === "+" && b === 25 ) {
  console.log('9 + 25 = 34')
} else
if (a === 9 && sign === "+" && b === 26 ) {
  console.log('9 + 26 = 35')
} else
if (a === 9 && sign === "+" && b === 27 ) {
  console.log('9 + 27 = 36')
} else
if (a === 9 && sign === "+" && b === 28 ) {
  console.log('9 + 28 = 37')
} else
if (a === 9 && sign === "+" && b === 29 ) {
  console.log('9 + 29 = 38')
} else
if (a === 9 && sign === "+" && b === 30 ) {
  console.log('9 + 30 = 39')
} else
if (a === 9 && sign === "+" && b === 31 ) {
  console.log('9 + 31 = 40')
} else
if (a === 9 && sign === "+" && b === 32 ) {
  console.log('9 + 32 = 41')
} else
if (a === 9 && sign === "+" && b === 33 ) {
  console.log('9 + 33 = 42')
} else
if (a === 9 && sign === "+" && b === 34 ) {
  console.log('9 + 34 = 43')
} else
if (a === 9 && sign === "+" && b === 35 ) {
  console.log('9 + 35 = 44')
} else
if (a === 9 && sign === "+" && b === 36 ) {
  console.log('9 + 36 = 45')
} else
if (a === 9 && sign === "+" && b === 37 ) {
  console.log('9 + 37 = 46')
} else
if (a === 9 && sign === "+" && b === 38 ) {
  console.log('9 + 38 = 47')
} else
if (a === 9 && sign === "+" && b === 39 ) {
  console.log('9 + 39 = 48')
} else
if (a === 9 && sign === "+" && b === 40 ) {
  console.log('9 + 40 = 49')
} else
if (a === 9 && sign === "+" && b === 41 ) {
  console.log('9 + 41 = 50')
} else
if (a === 9 && sign === "+" && b === 42 ) {
  console.log('9 + 42 = 51')
} else
if (a === 9 && sign === "+" && b === 43 ) {
  console.log('9 + 43 = 52')
} else
if (a === 9 && sign === "+" && b === 44 ) {
  console.log('9 + 44 = 53')
} else
if (a === 9 && sign === "+" && b === 45 ) {
  console.log('9 + 45 = 54')
} else
if (a === 9 && sign === "+" && b === 46 ) {
  console.log('9 + 46 = 55')
} else
if (a === 9 && sign === "+" && b === 47 ) {
  console.log('9 + 47 = 56')
} else
if (a === 9 && sign === "+" && b === 48 ) {
  console.log('9 + 48 = 57')
} else
if (a === 9 && sign === "+" && b === 49 ) {
  console.log('9 + 49 = 58')
} else
if (a === 9 && sign === "+" && b === 50 ) {
  console.log('9 + 50 = 59')
} else
if (a === 10 && sign === "+" && b === 1 ) {
  console.log('10 + 1 = 11')
} else
if (a === 10 && sign === "+" && b === 2 ) {
  console.log('10 + 2 = 12')
} else
if (a === 10 && sign === "+" && b === 3 ) {
  console.log('10 + 3 = 13')
} else
if (a === 10 && sign === "+" && b === 4 ) {
  console.log('10 + 4 = 14')
} else
if (a === 10 && sign === "+" && b === 5 ) {
  console.log('10 + 5 = 15')
} else
if (a === 10 && sign === "+" && b === 6 ) {
  console.log('10 + 6 = 16')
} else
if (a === 10 && sign === "+" && b === 7 ) {
  console.log('10 + 7 = 17')
} else
if (a === 10 && sign === "+" && b === 8 ) {
  console.log('10 + 8 = 18')
} else
if (a === 10 && sign === "+" && b === 9 ) {
  console.log('10 + 9 = 19')
} else
if (a === 10 && sign === "+" && b === 10 ) {
  console.log('10 + 10 = 20')
} else
if (a === 10 && sign === "+" && b === 11 ) {
  console.log('10 + 11 = 21')
} else
if (a === 10 && sign === "+" && b === 12 ) {
  console.log('10 + 12 = 22')
} else
if (a === 10 && sign === "+" && b === 13 ) {
  console.log('10 + 13 = 23')
} else
if (a === 10 && sign === "+" && b === 14 ) {
  console.log('10 + 14 = 24')
} else
if (a === 10 && sign === "+" && b === 15 ) {
  console.log('10 + 15 = 25')
} else
if (a === 10 && sign === "+" && b === 16 ) {
  console.log('10 + 16 = 26')
} else
if (a === 10 && sign === "+" && b === 17 ) {
  console.log('10 + 17 = 27')
} else
if (a === 10 && sign === "+" && b === 18 ) {
  console.log('10 + 18 = 28')
} else
if (a === 10 && sign === "+" && b === 19 ) {
  console.log('10 + 19 = 29')
} else
if (a === 10 && sign === "+" && b === 20 ) {
  console.log('10 + 20 = 30')
} else
if (a === 10 && sign === "+" && b === 21 ) {
  console.log('10 + 21 = 31')
} else
if (a === 10 && sign === "+" && b === 22 ) {
  console.log('10 + 22 = 32')
} else
if (a === 10 && sign === "+" && b === 23 ) {
  console.log('10 + 23 = 33')
} else
if (a === 10 && sign === "+" && b === 24 ) {
  console.log('10 + 24 = 34')
} else
if (a === 10 && sign === "+" && b === 25 ) {
  console.log('10 + 25 = 35')
} else
if (a === 10 && sign === "+" && b === 26 ) {
  console.log('10 + 26 = 36')
} else
if (a === 10 && sign === "+" && b === 27 ) {
  console.log('10 + 27 = 37')
} else
if (a === 10 && sign === "+" && b === 28 ) {
  console.log('10 + 28 = 38')
} else
if (a === 10 && sign === "+" && b === 29 ) {
  console.log('10 + 29 = 39')
} else
if (a === 10 && sign === "+" && b === 30 ) {
  console.log('10 + 30 = 40')
} else
if (a === 10 && sign === "+" && b === 31 ) {
  console.log('10 + 31 = 41')
} else
if (a === 10 && sign === "+" && b === 32 ) {
  console.log('10 + 32 = 42')
} else
if (a === 10 && sign === "+" && b === 33 ) {
  console.log('10 + 33 = 43')
} else
if (a === 10 && sign === "+" && b === 34 ) {
  console.log('10 + 34 = 44')
} else
if (a === 10 && sign === "+" && b === 35 ) {
  console.log('10 + 35 = 45')
} else
if (a === 10 && sign === "+" && b === 36 ) {
  console.log('10 + 36 = 46')
} else
if (a === 10 && sign === "+" && b === 37 ) {
  console.log('10 + 37 = 47')
} else
if (a === 10 && sign === "+" && b === 38 ) {
  console.log('10 + 38 = 48')
} else
if (a === 10 && sign === "+" && b === 39 ) {
  console.log('10 + 39 = 49')
} else
if (a === 10 && sign === "+" && b === 40 ) {
  console.log('10 + 40 = 50')
} else
if (a === 10 && sign === "+" && b === 41 ) {
  console.log('10 + 41 = 51')
} else
if (a === 10 && sign === "+" && b === 42 ) {
  console.log('10 + 42 = 52')
} else
if (a === 10 && sign === "+" && b === 43 ) {
  console.log('10 + 43 = 53')
} else
if (a === 10 && sign === "+" && b === 44 ) {
  console.log('10 + 44 = 54')
} else
if (a === 10 && sign === "+" && b === 45 ) {
  console.log('10 + 45 = 55')
} else
if (a === 10 && sign === "+" && b === 46 ) {
  console.log('10 + 46 = 56')
} else
if (a === 10 && sign === "+" && b === 47 ) {
  console.log('10 + 47 = 57')
} else
if (a === 10 && sign === "+" && b === 48 ) {
  console.log('10 + 48 = 58')
} else
if (a === 10 && sign === "+" && b === 49 ) {
  console.log('10 + 49 = 59')
} else
if (a === 10 && sign === "+" && b === 50 ) {
  console.log('10 + 50 = 60')
} else
if (a === 11 && sign === "+" && b === 1 ) {
  console.log('11 + 1 = 12')
} else
if (a === 11 && sign === "+" && b === 2 ) {
  console.log('11 + 2 = 13')
} else
if (a === 11 && sign === "+" && b === 3 ) {
  console.log('11 + 3 = 14')
} else
if (a === 11 && sign === "+" && b === 4 ) {
  console.log('11 + 4 = 15')
} else
if (a === 11 && sign === "+" && b === 5 ) {
  console.log('11 + 5 = 16')
} else
if (a === 11 && sign === "+" && b === 6 ) {
  console.log('11 + 6 = 17')
} else
if (a === 11 && sign === "+" && b === 7 ) {
  console.log('11 + 7 = 18')
} else
if (a === 11 && sign === "+" && b === 8 ) {
  console.log('11 + 8 = 19')
} else
if (a === 11 && sign === "+" && b === 9 ) {
  console.log('11 + 9 = 20')
} else
if (a === 11 && sign === "+" && b === 10 ) {
  console.log('11 + 10 = 21')
} else
if (a === 11 && sign === "+" && b === 11 ) {
  console.log('11 + 11 = 22')
} else
if (a === 11 && sign === "+" && b === 12 ) {
  console.log('11 + 12 = 23')
} else
if (a === 11 && sign === "+" && b === 13 ) {
  console.log('11 + 13 = 24')
} else
if (a === 11 && sign === "+" && b === 14 ) {
  console.log('11 + 14 = 25')
} else
if (a === 11 && sign === "+" && b === 15 ) {
  console.log('11 + 15 = 26')
} else
if (a === 11 && sign === "+" && b === 16 ) {
  console.log('11 + 16 = 27')
} else
if (a === 11 && sign === "+" && b === 17 ) {
  console.log('11 + 17 = 28')
} else
if (a === 11 && sign === "+" && b === 18 ) {
  console.log('11 + 18 = 29')
} else
if (a === 11 && sign === "+" && b === 19 ) {
  console.log('11 + 19 = 30')
} else
if (a === 11 && sign === "+" && b === 20 ) {
  console.log('11 + 20 = 31')
} else
if (a === 11 && sign === "+" && b === 21 ) {
  console.log('11 + 21 = 32')
} else
if (a === 11 && sign === "+" && b === 22 ) {
  console.log('11 + 22 = 33')
} else
if (a === 11 && sign === "+" && b === 23 ) {
  console.log('11 + 23 = 34')
} else
if (a === 11 && sign === "+" && b === 24 ) {
  console.log('11 + 24 = 35')
} else
if (a === 11 && sign === "+" && b === 25 ) {
  console.log('11 + 25 = 36')
} else
if (a === 11 && sign === "+" && b === 26 ) {
  console.log('11 + 26 = 37')
} else
if (a === 11 && sign === "+" && b === 27 ) {
  console.log('11 + 27 = 38')
} else
if (a === 11 && sign === "+" && b === 28 ) {
  console.log('11 + 28 = 39')
} else
if (a === 11 && sign === "+" && b === 29 ) {
  console.log('11 + 29 = 40')
} else
if (a === 11 && sign === "+" && b === 30 ) {
  console.log('11 + 30 = 41')
} else
if (a === 11 && sign === "+" && b === 31 ) {
  console.log('11 + 31 = 42')
} else
if (a === 11 && sign === "+" && b === 32 ) {
  console.log('11 + 32 = 43')
} else
if (a === 11 && sign === "+" && b === 33 ) {
  console.log('11 + 33 = 44')
} else
if (a === 11 && sign === "+" && b === 34 ) {
  console.log('11 + 34 = 45')
} else
if (a === 11 && sign === "+" && b === 35 ) {
  console.log('11 + 35 = 46')
} else
if (a === 11 && sign === "+" && b === 36 ) {
  console.log('11 + 36 = 47')
} else
if (a === 11 && sign === "+" && b === 37 ) {
  console.log('11 + 37 = 48')
} else
if (a === 11 && sign === "+" && b === 38 ) {
  console.log('11 + 38 = 49')
} else
if (a === 11 && sign === "+" && b === 39 ) {
  console.log('11 + 39 = 50')
} else
if (a === 11 && sign === "+" && b === 40 ) {
  console.log('11 + 40 = 51')
} else
if (a === 11 && sign === "+" && b === 41 ) {
  console.log('11 + 41 = 52')
} else
if (a === 11 && sign === "+" && b === 42 ) {
  console.log('11 + 42 = 53')
} else
if (a === 11 && sign === "+" && b === 43 ) {
  console.log('11 + 43 = 54')
} else
if (a === 11 && sign === "+" && b === 44 ) {
  console.log('11 + 44 = 55')
} else
if (a === 11 && sign === "+" && b === 45 ) {
  console.log('11 + 45 = 56')
} else
if (a === 11 && sign === "+" && b === 46 ) {
  console.log('11 + 46 = 57')
} else
if (a === 11 && sign === "+" && b === 47 ) {
  console.log('11 + 47 = 58')
} else
if (a === 11 && sign === "+" && b === 48 ) {
  console.log('11 + 48 = 59')
} else
if (a === 11 && sign === "+" && b === 49 ) {
  console.log('11 + 49 = 60')
} else
if (a === 11 && sign === "+" && b === 50 ) {
  console.log('11 + 50 = 61')
} else
if (a === 12 && sign === "+" && b === 1 ) {
  console.log('12 + 1 = 13')
} else
if (a === 12 && sign === "+" && b === 2 ) {
  console.log('12 + 2 = 14')
} else
if (a === 12 && sign === "+" && b === 3 ) {
  console.log('12 + 3 = 15')
} else
if (a === 12 && sign === "+" && b === 4 ) {
  console.log('12 + 4 = 16')
} else
if (a === 12 && sign === "+" && b === 5 ) {
  console.log('12 + 5 = 17')
} else
if (a === 12 && sign === "+" && b === 6 ) {
  console.log('12 + 6 = 18')
} else
if (a === 12 && sign === "+" && b === 7 ) {
  console.log('12 + 7 = 19')
} else
if (a === 12 && sign === "+" && b === 8 ) {
  console.log('12 + 8 = 20')
} else
if (a === 12 && sign === "+" && b === 9 ) {
  console.log('12 + 9 = 21')
} else
if (a === 12 && sign === "+" && b === 10 ) {
  console.log('12 + 10 = 22')
} else
if (a === 12 && sign === "+" && b === 11 ) {
  console.log('12 + 11 = 23')
} else
if (a === 12 && sign === "+" && b === 12 ) {
  console.log('12 + 12 = 24')
} else
if (a === 12 && sign === "+" && b === 13 ) {
  console.log('12 + 13 = 25')
} else
if (a === 12 && sign === "+" && b === 14 ) {
  console.log('12 + 14 = 26')
} else
if (a === 12 && sign === "+" && b === 15 ) {
  console.log('12 + 15 = 27')
} else
if (a === 12 && sign === "+" && b === 16 ) {
  console.log('12 + 16 = 28')
} else
if (a === 12 && sign === "+" && b === 17 ) {
  console.log('12 + 17 = 29')
} else
if (a === 12 && sign === "+" && b === 18 ) {
  console.log('12 + 18 = 30')
} else
if (a === 12 && sign === "+" && b === 19 ) {
  console.log('12 + 19 = 31')
} else
if (a === 12 && sign === "+" && b === 20 ) {
  console.log('12 + 20 = 32')
} else
if (a === 12 && sign === "+" && b === 21 ) {
  console.log('12 + 21 = 33')
} else
if (a === 12 && sign === "+" && b === 22 ) {
  console.log('12 + 22 = 34')
} else
if (a === 12 && sign === "+" && b === 23 ) {
  console.log('12 + 23 = 35')
} else
if (a === 12 && sign === "+" && b === 24 ) {
  console.log('12 + 24 = 36')
} else
if (a === 12 && sign === "+" && b === 25 ) {
  console.log('12 + 25 = 37')
} else
if (a === 12 && sign === "+" && b === 26 ) {
  console.log('12 + 26 = 38')
} else
if (a === 12 && sign === "+" && b === 27 ) {
  console.log('12 + 27 = 39')
} else
if (a === 12 && sign === "+" && b === 28 ) {
  console.log('12 + 28 = 40')
} else
if (a === 12 && sign === "+" && b === 29 ) {
  console.log('12 + 29 = 41')
} else
if (a === 12 && sign === "+" && b === 30 ) {
  console.log('12 + 30 = 42')
} else
if (a === 12 && sign === "+" && b === 31 ) {
  console.log('12 + 31 = 43')
} else
if (a === 12 && sign === "+" && b === 32 ) {
  console.log('12 + 32 = 44')
} else
if (a === 12 && sign === "+" && b === 33 ) {
  console.log('12 + 33 = 45')
} else
if (a === 12 && sign === "+" && b === 34 ) {
  console.log('12 + 34 = 46')
} else
if (a === 12 && sign === "+" && b === 35 ) {
  console.log('12 + 35 = 47')
} else
if (a === 12 && sign === "+" && b === 36 ) {
  console.log('12 + 36 = 48')
} else
if (a === 12 && sign === "+" && b === 37 ) {
  console.log('12 + 37 = 49')
} else
if (a === 12 && sign === "+" && b === 38 ) {
  console.log('12 + 38 = 50')
} else
if (a === 12 && sign === "+" && b === 39 ) {
  console.log('12 + 39 = 51')
} else
if (a === 12 && sign === "+" && b === 40 ) {
  console.log('12 + 40 = 52')
} else
if (a === 12 && sign === "+" && b === 41 ) {
  console.log('12 + 41 = 53')
} else
if (a === 12 && sign === "+" && b === 42 ) {
  console.log('12 + 42 = 54')
} else
if (a === 12 && sign === "+" && b === 43 ) {
  console.log('12 + 43 = 55')
} else
if (a === 12 && sign === "+" && b === 44 ) {
  console.log('12 + 44 = 56')
} else
if (a === 12 && sign === "+" && b === 45 ) {
  console.log('12 + 45 = 57')
} else
if (a === 12 && sign === "+" && b === 46 ) {
  console.log('12 + 46 = 58')
} else
if (a === 12 && sign === "+" && b === 47 ) {
  console.log('12 + 47 = 59')
} else
if (a === 12 && sign === "+" && b === 48 ) {
  console.log('12 + 48 = 60')
} else
if (a === 12 && sign === "+" && b === 49 ) {
  console.log('12 + 49 = 61')
} else
if (a === 12 && sign === "+" && b === 50 ) {
  console.log('12 + 50 = 62')
} else
if (a === 13 && sign === "+" && b === 1 ) {
  console.log('13 + 1 = 14')
} else
if (a === 13 && sign === "+" && b === 2 ) {
  console.log('13 + 2 = 15')
} else
if (a === 13 && sign === "+" && b === 3 ) {
  console.log('13 + 3 = 16')
} else
if (a === 13 && sign === "+" && b === 4 ) {
  console.log('13 + 4 = 17')
} else
if (a === 13 && sign === "+" && b === 5 ) {
  console.log('13 + 5 = 18')
} else
if (a === 13 && sign === "+" && b === 6 ) {
  console.log('13 + 6 = 19')
} else
if (a === 13 && sign === "+" && b === 7 ) {
  console.log('13 + 7 = 20')
} else
if (a === 13 && sign === "+" && b === 8 ) {
  console.log('13 + 8 = 21')
} else
if (a === 13 && sign === "+" && b === 9 ) {
  console.log('13 + 9 = 22')
} else
if (a === 13 && sign === "+" && b === 10 ) {
  console.log('13 + 10 = 23')
} else
if (a === 13 && sign === "+" && b === 11 ) {
  console.log('13 + 11 = 24')
} else
if (a === 13 && sign === "+" && b === 12 ) {
  console.log('13 + 12 = 25')
} else
if (a === 13 && sign === "+" && b === 13 ) {
  console.log('13 + 13 = 26')
} else
if (a === 13 && sign === "+" && b === 14 ) {
  console.log('13 + 14 = 27')
} else
if (a === 13 && sign === "+" && b === 15 ) {
  console.log('13 + 15 = 28')
} else
if (a === 13 && sign === "+" && b === 16 ) {
  console.log('13 + 16 = 29')
} else
if (a === 13 && sign === "+" && b === 17 ) {
  console.log('13 + 17 = 30')
} else
if (a === 13 && sign === "+" && b === 18 ) {
  console.log('13 + 18 = 31')
} else
if (a === 13 && sign === "+" && b === 19 ) {
  console.log('13 + 19 = 32')
} else
if (a === 13 && sign === "+" && b === 20 ) {
  console.log('13 + 20 = 33')
} else
if (a === 13 && sign === "+" && b === 21 ) {
  console.log('13 + 21 = 34')
} else
if (a === 13 && sign === "+" && b === 22 ) {
  console.log('13 + 22 = 35')
} else
if (a === 13 && sign === "+" && b === 23 ) {
  console.log('13 + 23 = 36')
} else
if (a === 13 && sign === "+" && b === 24 ) {
  console.log('13 + 24 = 37')
} else
if (a === 13 && sign === "+" && b === 25 ) {
  console.log('13 + 25 = 38')
} else
if (a === 13 && sign === "+" && b === 26 ) {
  console.log('13 + 26 = 39')
} else
if (a === 13 && sign === "+" && b === 27 ) {
  console.log('13 + 27 = 40')
} else
if (a === 13 && sign === "+" && b === 28 ) {
  console.log('13 + 28 = 41')
} else
if (a === 13 && sign === "+" && b === 29 ) {
  console.log('13 + 29 = 42')
} else
if (a === 13 && sign === "+" && b === 30 ) {
  console.log('13 + 30 = 43')
} else
if (a === 13 && sign === "+" && b === 31 ) {
  console.log('13 + 31 = 44')
} else
if (a === 13 && sign === "+" && b === 32 ) {
  console.log('13 + 32 = 45')
} else
if (a === 13 && sign === "+" && b === 33 ) {
  console.log('13 + 33 = 46')
} else
if (a === 13 && sign === "+" && b === 34 ) {
  console.log('13 + 34 = 47')
} else
if (a === 13 && sign === "+" && b === 35 ) {
  console.log('13 + 35 = 48')
} else
if (a === 13 && sign === "+" && b === 36 ) {
  console.log('13 + 36 = 49')
} else
if (a === 13 && sign === "+" && b === 37 ) {
  console.log('13 + 37 = 50')
} else
if (a === 13 && sign === "+" && b === 38 ) {
  console.log('13 + 38 = 51')
} else
if (a === 13 && sign === "+" && b === 39 ) {
  console.log('13 + 39 = 52')
} else
if (a === 13 && sign === "+" && b === 40 ) {
  console.log('13 + 40 = 53')
} else
if (a === 13 && sign === "+" && b === 41 ) {
  console.log('13 + 41 = 54')
} else
if (a === 13 && sign === "+" && b === 42 ) {
  console.log('13 + 42 = 55')
} else
if (a === 13 && sign === "+" && b === 43 ) {
  console.log('13 + 43 = 56')
} else
if (a === 13 && sign === "+" && b === 44 ) {
  console.log('13 + 44 = 57')
} else
if (a === 13 && sign === "+" && b === 45 ) {
  console.log('13 + 45 = 58')
} else
if (a === 13 && sign === "+" && b === 46 ) {
  console.log('13 + 46 = 59')
} else
if (a === 13 && sign === "+" && b === 47 ) {
  console.log('13 + 47 = 60')
} else
if (a === 13 && sign === "+" && b === 48 ) {
  console.log('13 + 48 = 61')
} else
if (a === 13 && sign === "+" && b === 49 ) {
  console.log('13 + 49 = 62')
} else
if (a === 13 && sign === "+" && b === 50 ) {
  console.log('13 + 50 = 63')
} else
if (a === 14 && sign === "+" && b === 1 ) {
  console.log('14 + 1 = 15')
} else
if (a === 14 && sign === "+" && b === 2 ) {
  console.log('14 + 2 = 16')
} else
if (a === 14 && sign === "+" && b === 3 ) {
  console.log('14 + 3 = 17')
} else
if (a === 14 && sign === "+" && b === 4 ) {
  console.log('14 + 4 = 18')
} else
if (a === 14 && sign === "+" && b === 5 ) {
  console.log('14 + 5 = 19')
} else
if (a === 14 && sign === "+" && b === 6 ) {
  console.log('14 + 6 = 20')
} else
if (a === 14 && sign === "+" && b === 7 ) {
  console.log('14 + 7 = 21')
} else
if (a === 14 && sign === "+" && b === 8 ) {
  console.log('14 + 8 = 22')
} else
if (a === 14 && sign === "+" && b === 9 ) {
  console.log('14 + 9 = 23')
} else
if (a === 14 && sign === "+" && b === 10 ) {
  console.log('14 + 10 = 24')
} else
if (a === 14 && sign === "+" && b === 11 ) {
  console.log('14 + 11 = 25')
} else
if (a === 14 && sign === "+" && b === 12 ) {
  console.log('14 + 12 = 26')
} else
if (a === 14 && sign === "+" && b === 13 ) {
  console.log('14 + 13 = 27')
} else
if (a === 14 && sign === "+" && b === 14 ) {
  console.log('14 + 14 = 28')
} else
if (a === 14 && sign === "+" && b === 15 ) {
  console.log('14 + 15 = 29')
} else
if (a === 14 && sign === "+" && b === 16 ) {
  console.log('14 + 16 = 30')
} else
if (a === 14 && sign === "+" && b === 17 ) {
  console.log('14 + 17 = 31')
} else
if (a === 14 && sign === "+" && b === 18 ) {
  console.log('14 + 18 = 32')
} else
if (a === 14 && sign === "+" && b === 19 ) {
  console.log('14 + 19 = 33')
} else
if (a === 14 && sign === "+" && b === 20 ) {
  console.log('14 + 20 = 34')
} else
if (a === 14 && sign === "+" && b === 21 ) {
  console.log('14 + 21 = 35')
} else
if (a === 14 && sign === "+" && b === 22 ) {
  console.log('14 + 22 = 36')
} else
if (a === 14 && sign === "+" && b === 23 ) {
  console.log('14 + 23 = 37')
} else
if (a === 14 && sign === "+" && b === 24 ) {
  console.log('14 + 24 = 38')
} else
if (a === 14 && sign === "+" && b === 25 ) {
  console.log('14 + 25 = 39')
} else
if (a === 14 && sign === "+" && b === 26 ) {
  console.log('14 + 26 = 40')
} else
if (a === 14 && sign === "+" && b === 27 ) {
  console.log('14 + 27 = 41')
} else
if (a === 14 && sign === "+" && b === 28 ) {
  console.log('14 + 28 = 42')
} else
if (a === 14 && sign === "+" && b === 29 ) {
  console.log('14 + 29 = 43')
} else
if (a === 14 && sign === "+" && b === 30 ) {
  console.log('14 + 30 = 44')
} else
if (a === 14 && sign === "+" && b === 31 ) {
  console.log('14 + 31 = 45')
} else
if (a === 14 && sign === "+" && b === 32 ) {
  console.log('14 + 32 = 46')
} else
if (a === 14 && sign === "+" && b === 33 ) {
  console.log('14 + 33 = 47')
} else
if (a === 14 && sign === "+" && b === 34 ) {
  console.log('14 + 34 = 48')
} else
if (a === 14 && sign === "+" && b === 35 ) {
  console.log('14 + 35 = 49')
} else
if (a === 14 && sign === "+" && b === 36 ) {
  console.log('14 + 36 = 50')
} else
if (a === 14 && sign === "+" && b === 37 ) {
  console.log('14 + 37 = 51')
} else
if (a === 14 && sign === "+" && b === 38 ) {
  console.log('14 + 38 = 52')
} else
if (a === 14 && sign === "+" && b === 39 ) {
  console.log('14 + 39 = 53')
} else
if (a === 14 && sign === "+" && b === 40 ) {
  console.log('14 + 40 = 54')
} else
if (a === 14 && sign === "+" && b === 41 ) {
  console.log('14 + 41 = 55')
} else
if (a === 14 && sign === "+" && b === 42 ) {
  console.log('14 + 42 = 56')
} else
if (a === 14 && sign === "+" && b === 43 ) {
  console.log('14 + 43 = 57')
} else
if (a === 14 && sign === "+" && b === 44 ) {
  console.log('14 + 44 = 58')
} else
if (a === 14 && sign === "+" && b === 45 ) {
  console.log('14 + 45 = 59')
} else
if (a === 14 && sign === "+" && b === 46 ) {
  console.log('14 + 46 = 60')
} else
if (a === 14 && sign === "+" && b === 47 ) {
  console.log('14 + 47 = 61')
} else
if (a === 14 && sign === "+" && b === 48 ) {
  console.log('14 + 48 = 62')
} else
if (a === 14 && sign === "+" && b === 49 ) {
  console.log('14 + 49 = 63')
} else
if (a === 14 && sign === "+" && b === 50 ) {
  console.log('14 + 50 = 64')
} else
if (a === 15 && sign === "+" && b === 1 ) {
  console.log('15 + 1 = 16')
} else
if (a === 15 && sign === "+" && b === 2 ) {
  console.log('15 + 2 = 17')
} else
if (a === 15 && sign === "+" && b === 3 ) {
  console.log('15 + 3 = 18')
} else
if (a === 15 && sign === "+" && b === 4 ) {
  console.log('15 + 4 = 19')
} else
if (a === 15 && sign === "+" && b === 5 ) {
  console.log('15 + 5 = 20')
} else
if (a === 15 && sign === "+" && b === 6 ) {
  console.log('15 + 6 = 21')
} else
if (a === 15 && sign === "+" && b === 7 ) {
  console.log('15 + 7 = 22')
} else
if (a === 15 && sign === "+" && b === 8 ) {
  console.log('15 + 8 = 23')
} else
if (a === 15 && sign === "+" && b === 9 ) {
  console.log('15 + 9 = 24')
} else
if (a === 15 && sign === "+" && b === 10 ) {
  console.log('15 + 10 = 25')
} else
if (a === 15 && sign === "+" && b === 11 ) {
  console.log('15 + 11 = 26')
} else
if (a === 15 && sign === "+" && b === 12 ) {
  console.log('15 + 12 = 27')
} else
if (a === 15 && sign === "+" && b === 13 ) {
  console.log('15 + 13 = 28')
} else
if (a === 15 && sign === "+" && b === 14 ) {
  console.log('15 + 14 = 29')
} else
if (a === 15 && sign === "+" && b === 15 ) {
  console.log('15 + 15 = 30')
} else
if (a === 15 && sign === "+" && b === 16 ) {
  console.log('15 + 16 = 31')
} else
if (a === 15 && sign === "+" && b === 17 ) {
  console.log('15 + 17 = 32')
} else
if (a === 15 && sign === "+" && b === 18 ) {
  console.log('15 + 18 = 33')
} else
if (a === 15 && sign === "+" && b === 19 ) {
  console.log('15 + 19 = 34')
} else
if (a === 15 && sign === "+" && b === 20 ) {
  console.log('15 + 20 = 35')
} else
if (a === 15 && sign === "+" && b === 21 ) {
  console.log('15 + 21 = 36')
} else
if (a === 15 && sign === "+" && b === 22 ) {
  console.log('15 + 22 = 37')
} else
if (a === 15 && sign === "+" && b === 23 ) {
  console.log('15 + 23 = 38')
} else
if (a === 15 && sign === "+" && b === 24 ) {
  console.log('15 + 24 = 39')
} else
if (a === 15 && sign === "+" && b === 25 ) {
  console.log('15 + 25 = 40')
} else
if (a === 15 && sign === "+" && b === 26 ) {
  console.log('15 + 26 = 41')
} else
if (a === 15 && sign === "+" && b === 27 ) {
  console.log('15 + 27 = 42')
} else
if (a === 15 && sign === "+" && b === 28 ) {
  console.log('15 + 28 = 43')
} else
if (a === 15 && sign === "+" && b === 29 ) {
  console.log('15 + 29 = 44')
} else
if (a === 15 && sign === "+" && b === 30 ) {
  console.log('15 + 30 = 45')
} else
if (a === 15 && sign === "+" && b === 31 ) {
  console.log('15 + 31 = 46')
} else
if (a === 15 && sign === "+" && b === 32 ) {
  console.log('15 + 32 = 47')
} else
if (a === 15 && sign === "+" && b === 33 ) {
  console.log('15 + 33 = 48')
} else
if (a === 15 && sign === "+" && b === 34 ) {
  console.log('15 + 34 = 49')
} else
if (a === 15 && sign === "+" && b === 35 ) {
  console.log('15 + 35 = 50')
} else
if (a === 15 && sign === "+" && b === 36 ) {
  console.log('15 + 36 = 51')
} else
if (a === 15 && sign === "+" && b === 37 ) {
  console.log('15 + 37 = 52')
} else
if (a === 15 && sign === "+" && b === 38 ) {
  console.log('15 + 38 = 53')
} else
if (a === 15 && sign === "+" && b === 39 ) {
  console.log('15 + 39 = 54')
} else
if (a === 15 && sign === "+" && b === 40 ) {
  console.log('15 + 40 = 55')
} else
if (a === 15 && sign === "+" && b === 41 ) {
  console.log('15 + 41 = 56')
} else
if (a === 15 && sign === "+" && b === 42 ) {
  console.log('15 + 42 = 57')
} else
if (a === 15 && sign === "+" && b === 43 ) {
  console.log('15 + 43 = 58')
} else
if (a === 15 && sign === "+" && b === 44 ) {
  console.log('15 + 44 = 59')
} else
if (a === 15 && sign === "+" && b === 45 ) {
  console.log('15 + 45 = 60')
} else
if (a === 15 && sign === "+" && b === 46 ) {
  console.log('15 + 46 = 61')
} else
if (a === 15 && sign === "+" && b === 47 ) {
  console.log('15 + 47 = 62')
} else
if (a === 15 && sign === "+" && b === 48 ) {
  console.log('15 + 48 = 63')
} else
if (a === 15 && sign === "+" && b === 49 ) {
  console.log('15 + 49 = 64')
} else
if (a === 15 && sign === "+" && b === 50 ) {
  console.log('15 + 50 = 65')
} else
if (a === 16 && sign === "+" && b === 1 ) {
  console.log('16 + 1 = 17')
} else
if (a === 16 && sign === "+" && b === 2 ) {
  console.log('16 + 2 = 18')
} else
if (a === 16 && sign === "+" && b === 3 ) {
  console.log('16 + 3 = 19')
} else
if (a === 16 && sign === "+" && b === 4 ) {
  console.log('16 + 4 = 20')
} else
if (a === 16 && sign === "+" && b === 5 ) {
  console.log('16 + 5 = 21')
} else
if (a === 16 && sign === "+" && b === 6 ) {
  console.log('16 + 6 = 22')
} else
if (a === 16 && sign === "+" && b === 7 ) {
  console.log('16 + 7 = 23')
} else
if (a === 16 && sign === "+" && b === 8 ) {
  console.log('16 + 8 = 24')
} else
if (a === 16 && sign === "+" && b === 9 ) {
  console.log('16 + 9 = 25')
} else
if (a === 16 && sign === "+" && b === 10 ) {
  console.log('16 + 10 = 26')
} else
if (a === 16 && sign === "+" && b === 11 ) {
  console.log('16 + 11 = 27')
} else
if (a === 16 && sign === "+" && b === 12 ) {
  console.log('16 + 12 = 28')
} else
if (a === 16 && sign === "+" && b === 13 ) {
  console.log('16 + 13 = 29')
} else
if (a === 16 && sign === "+" && b === 14 ) {
  console.log('16 + 14 = 30')
} else
if (a === 16 && sign === "+" && b === 15 ) {
  console.log('16 + 15 = 31')
} else
if (a === 16 && sign === "+" && b === 16 ) {
  console.log('16 + 16 = 32')
} else
if (a === 16 && sign === "+" && b === 17 ) {
  console.log('16 + 17 = 33')
} else
if (a === 16 && sign === "+" && b === 18 ) {
  console.log('16 + 18 = 34')
} else
if (a === 16 && sign === "+" && b === 19 ) {
  console.log('16 + 19 = 35')
} else
if (a === 16 && sign === "+" && b === 20 ) {
  console.log('16 + 20 = 36')
} else
if (a === 16 && sign === "+" && b === 21 ) {
  console.log('16 + 21 = 37')
} else
if (a === 16 && sign === "+" && b === 22 ) {
  console.log('16 + 22 = 38')
} else
if (a === 16 && sign === "+" && b === 23 ) {
  console.log('16 + 23 = 39')
} else
if (a === 16 && sign === "+" && b === 24 ) {
  console.log('16 + 24 = 40')
} else
if (a === 16 && sign === "+" && b === 25 ) {
  console.log('16 + 25 = 41')
} else
if (a === 16 && sign === "+" && b === 26 ) {
  console.log('16 + 26 = 42')
} else
if (a === 16 && sign === "+" && b === 27 ) {
  console.log('16 + 27 = 43')
} else
if (a === 16 && sign === "+" && b === 28 ) {
  console.log('16 + 28 = 44')
} else
if (a === 16 && sign === "+" && b === 29 ) {
  console.log('16 + 29 = 45')
} else
if (a === 16 && sign === "+" && b === 30 ) {
  console.log('16 + 30 = 46')
} else
if (a === 16 && sign === "+" && b === 31 ) {
  console.log('16 + 31 = 47')
} else
if (a === 16 && sign === "+" && b === 32 ) {
  console.log('16 + 32 = 48')
} else
if (a === 16 && sign === "+" && b === 33 ) {
  console.log('16 + 33 = 49')
} else
if (a === 16 && sign === "+" && b === 34 ) {
  console.log('16 + 34 = 50')
} else
if (a === 16 && sign === "+" && b === 35 ) {
  console.log('16 + 35 = 51')
} else
if (a === 16 && sign === "+" && b === 36 ) {
  console.log('16 + 36 = 52')
} else
if (a === 16 && sign === "+" && b === 37 ) {
  console.log('16 + 37 = 53')
} else
if (a === 16 && sign === "+" && b === 38 ) {
  console.log('16 + 38 = 54')
} else
if (a === 16 && sign === "+" && b === 39 ) {
  console.log('16 + 39 = 55')
} else
if (a === 16 && sign === "+" && b === 40 ) {
  console.log('16 + 40 = 56')
} else
if (a === 16 && sign === "+" && b === 41 ) {
  console.log('16 + 41 = 57')
} else
if (a === 16 && sign === "+" && b === 42 ) {
  console.log('16 + 42 = 58')
} else
if (a === 16 && sign === "+" && b === 43 ) {
  console.log('16 + 43 = 59')
} else
if (a === 16 && sign === "+" && b === 44 ) {
  console.log('16 + 44 = 60')
} else
if (a === 16 && sign === "+" && b === 45 ) {
  console.log('16 + 45 = 61')
} else
if (a === 16 && sign === "+" && b === 46 ) {
  console.log('16 + 46 = 62')
} else
if (a === 16 && sign === "+" && b === 47 ) {
  console.log('16 + 47 = 63')
} else
if (a === 16 && sign === "+" && b === 48 ) {
  console.log('16 + 48 = 64')
} else
if (a === 16 && sign === "+" && b === 49 ) {
  console.log('16 + 49 = 65')
} else
if (a === 16 && sign === "+" && b === 50 ) {
  console.log('16 + 50 = 66')
} else
if (a === 17 && sign === "+" && b === 1 ) {
  console.log('17 + 1 = 18')
} else
if (a === 17 && sign === "+" && b === 2 ) {
  console.log('17 + 2 = 19')
} else
if (a === 17 && sign === "+" && b === 3 ) {
  console.log('17 + 3 = 20')
} else
if (a === 17 && sign === "+" && b === 4 ) {
  console.log('17 + 4 = 21')
} else
if (a === 17 && sign === "+" && b === 5 ) {
  console.log('17 + 5 = 22')
} else
if (a === 17 && sign === "+" && b === 6 ) {
  console.log('17 + 6 = 23')
} else
if (a === 17 && sign === "+" && b === 7 ) {
  console.log('17 + 7 = 24')
} else
if (a === 17 && sign === "+" && b === 8 ) {
  console.log('17 + 8 = 25')
} else
if (a === 17 && sign === "+" && b === 9 ) {
  console.log('17 + 9 = 26')
} else
if (a === 17 && sign === "+" && b === 10 ) {
  console.log('17 + 10 = 27')
} else
if (a === 17 && sign === "+" && b === 11 ) {
  console.log('17 + 11 = 28')
} else
if (a === 17 && sign === "+" && b === 12 ) {
  console.log('17 + 12 = 29')
} else
if (a === 17 && sign === "+" && b === 13 ) {
  console.log('17 + 13 = 30')
} else
if (a === 17 && sign === "+" && b === 14 ) {
  console.log('17 + 14 = 31')
} else
if (a === 17 && sign === "+" && b === 15 ) {
  console.log('17 + 15 = 32')
} else
if (a === 17 && sign === "+" && b === 16 ) {
  console.log('17 + 16 = 33')
} else
if (a === 17 && sign === "+" && b === 17 ) {
  console.log('17 + 17 = 34')
} else
if (a === 17 && sign === "+" && b === 18 ) {
  console.log('17 + 18 = 35')
} else
if (a === 17 && sign === "+" && b === 19 ) {
  console.log('17 + 19 = 36')
} else
if (a === 17 && sign === "+" && b === 20 ) {
  console.log('17 + 20 = 37')
} else
if (a === 17 && sign === "+" && b === 21 ) {
  console.log('17 + 21 = 38')
} else
if (a === 17 && sign === "+" && b === 22 ) {
  console.log('17 + 22 = 39')
} else
if (a === 17 && sign === "+" && b === 23 ) {
  console.log('17 + 23 = 40')
} else
if (a === 17 && sign === "+" && b === 24 ) {
  console.log('17 + 24 = 41')
} else
if (a === 17 && sign === "+" && b === 25 ) {
  console.log('17 + 25 = 42')
} else
if (a === 17 && sign === "+" && b === 26 ) {
  console.log('17 + 26 = 43')
} else
if (a === 17 && sign === "+" && b === 27 ) {
  console.log('17 + 27 = 44')
} else
if (a === 17 && sign === "+" && b === 28 ) {
  console.log('17 + 28 = 45')
} else
if (a === 17 && sign === "+" && b === 29 ) {
  console.log('17 + 29 = 46')
} else
if (a === 17 && sign === "+" && b === 30 ) {
  console.log('17 + 30 = 47')
} else
if (a === 17 && sign === "+" && b === 31 ) {
  console.log('17 + 31 = 48')
} else
if (a === 17 && sign === "+" && b === 32 ) {
  console.log('17 + 32 = 49')
} else
if (a === 17 && sign === "+" && b === 33 ) {
  console.log('17 + 33 = 50')
} else
if (a === 17 && sign === "+" && b === 34 ) {
  console.log('17 + 34 = 51')
} else
if (a === 17 && sign === "+" && b === 35 ) {
  console.log('17 + 35 = 52')
} else
if (a === 17 && sign === "+" && b === 36 ) {
  console.log('17 + 36 = 53')
} else
if (a === 17 && sign === "+" && b === 37 ) {
  console.log('17 + 37 = 54')
} else
if (a === 17 && sign === "+" && b === 38 ) {
  console.log('17 + 38 = 55')
} else
if (a === 17 && sign === "+" && b === 39 ) {
  console.log('17 + 39 = 56')
} else
if (a === 17 && sign === "+" && b === 40 ) {
  console.log('17 + 40 = 57')
} else
if (a === 17 && sign === "+" && b === 41 ) {
  console.log('17 + 41 = 58')
} else
if (a === 17 && sign === "+" && b === 42 ) {
  console.log('17 + 42 = 59')
} else
if (a === 17 && sign === "+" && b === 43 ) {
  console.log('17 + 43 = 60')
} else
if (a === 17 && sign === "+" && b === 44 ) {
  console.log('17 + 44 = 61')
} else
if (a === 17 && sign === "+" && b === 45 ) {
  console.log('17 + 45 = 62')
} else
if (a === 17 && sign === "+" && b === 46 ) {
  console.log('17 + 46 = 63')
} else
if (a === 17 && sign === "+" && b === 47 ) {
  console.log('17 + 47 = 64')
} else
if (a === 17 && sign === "+" && b === 48 ) {
  console.log('17 + 48 = 65')
} else
if (a === 17 && sign === "+" && b === 49 ) {
  console.log('17 + 49 = 66')
} else
if (a === 17 && sign === "+" && b === 50 ) {
  console.log('17 + 50 = 67')
} else
if (a === 18 && sign === "+" && b === 1 ) {
  console.log('18 + 1 = 19')
} else
if (a === 18 && sign === "+" && b === 2 ) {
  console.log('18 + 2 = 20')
} else
if (a === 18 && sign === "+" && b === 3 ) {
  console.log('18 + 3 = 21')
} else
if (a === 18 && sign === "+" && b === 4 ) {
  console.log('18 + 4 = 22')
} else
if (a === 18 && sign === "+" && b === 5 ) {
  console.log('18 + 5 = 23')
} else
if (a === 18 && sign === "+" && b === 6 ) {
  console.log('18 + 6 = 24')
} else
if (a === 18 && sign === "+" && b === 7 ) {
  console.log('18 + 7 = 25')
} else
if (a === 18 && sign === "+" && b === 8 ) {
  console.log('18 + 8 = 26')
} else
if (a === 18 && sign === "+" && b === 9 ) {
  console.log('18 + 9 = 27')
} else
if (a === 18 && sign === "+" && b === 10 ) {
  console.log('18 + 10 = 28')
} else
if (a === 18 && sign === "+" && b === 11 ) {
  console.log('18 + 11 = 29')
} else
if (a === 18 && sign === "+" && b === 12 ) {
  console.log('18 + 12 = 30')
} else
if (a === 18 && sign === "+" && b === 13 ) {
  console.log('18 + 13 = 31')
} else
if (a === 18 && sign === "+" && b === 14 ) {
  console.log('18 + 14 = 32')
} else
if (a === 18 && sign === "+" && b === 15 ) {
  console.log('18 + 15 = 33')
} else
if (a === 18 && sign === "+" && b === 16 ) {
  console.log('18 + 16 = 34')
} else
if (a === 18 && sign === "+" && b === 17 ) {
  console.log('18 + 17 = 35')
} else
if (a === 18 && sign === "+" && b === 18 ) {
  console.log('18 + 18 = 36')
} else
if (a === 18 && sign === "+" && b === 19 ) {
  console.log('18 + 19 = 37')
} else
if (a === 18 && sign === "+" && b === 20 ) {
  console.log('18 + 20 = 38')
} else
if (a === 18 && sign === "+" && b === 21 ) {
  console.log('18 + 21 = 39')
} else
if (a === 18 && sign === "+" && b === 22 ) {
  console.log('18 + 22 = 40')
} else
if (a === 18 && sign === "+" && b === 23 ) {
  console.log('18 + 23 = 41')
} else
if (a === 18 && sign === "+" && b === 24 ) {
  console.log('18 + 24 = 42')
} else
if (a === 18 && sign === "+" && b === 25 ) {
  console.log('18 + 25 = 43')
} else
if (a === 18 && sign === "+" && b === 26 ) {
  console.log('18 + 26 = 44')
} else
if (a === 18 && sign === "+" && b === 27 ) {
  console.log('18 + 27 = 45')
} else
if (a === 18 && sign === "+" && b === 28 ) {
  console.log('18 + 28 = 46')
} else
if (a === 18 && sign === "+" && b === 29 ) {
  console.log('18 + 29 = 47')
} else
if (a === 18 && sign === "+" && b === 30 ) {
  console.log('18 + 30 = 48')
} else
if (a === 18 && sign === "+" && b === 31 ) {
  console.log('18 + 31 = 49')
} else
if (a === 18 && sign === "+" && b === 32 ) {
  console.log('18 + 32 = 50')
} else
if (a === 18 && sign === "+" && b === 33 ) {
  console.log('18 + 33 = 51')
} else
if (a === 18 && sign === "+" && b === 34 ) {
  console.log('18 + 34 = 52')
} else
if (a === 18 && sign === "+" && b === 35 ) {
  console.log('18 + 35 = 53')
} else
if (a === 18 && sign === "+" && b === 36 ) {
  console.log('18 + 36 = 54')
} else
if (a === 18 && sign === "+" && b === 37 ) {
  console.log('18 + 37 = 55')
} else
if (a === 18 && sign === "+" && b === 38 ) {
  console.log('18 + 38 = 56')
} else
if (a === 18 && sign === "+" && b === 39 ) {
  console.log('18 + 39 = 57')
} else
if (a === 18 && sign === "+" && b === 40 ) {
  console.log('18 + 40 = 58')
} else
if (a === 18 && sign === "+" && b === 41 ) {
  console.log('18 + 41 = 59')
} else
if (a === 18 && sign === "+" && b === 42 ) {
  console.log('18 + 42 = 60')
} else
if (a === 18 && sign === "+" && b === 43 ) {
  console.log('18 + 43 = 61')
} else
if (a === 18 && sign === "+" && b === 44 ) {
  console.log('18 + 44 = 62')
} else
if (a === 18 && sign === "+" && b === 45 ) {
  console.log('18 + 45 = 63')
} else
if (a === 18 && sign === "+" && b === 46 ) {
  console.log('18 + 46 = 64')
} else
if (a === 18 && sign === "+" && b === 47 ) {
  console.log('18 + 47 = 65')
} else
if (a === 18 && sign === "+" && b === 48 ) {
  console.log('18 + 48 = 66')
} else
if (a === 18 && sign === "+" && b === 49 ) {
  console.log('18 + 49 = 67')
} else
if (a === 18 && sign === "+" && b === 50 ) {
  console.log('18 + 50 = 68')
} else
if (a === 19 && sign === "+" && b === 1 ) {
  console.log('19 + 1 = 20')
} else
if (a === 19 && sign === "+" && b === 2 ) {
  console.log('19 + 2 = 21')
} else
if (a === 19 && sign === "+" && b === 3 ) {
  console.log('19 + 3 = 22')
} else
if (a === 19 && sign === "+" && b === 4 ) {
  console.log('19 + 4 = 23')
} else
if (a === 19 && sign === "+" && b === 5 ) {
  console.log('19 + 5 = 24')
} else
if (a === 19 && sign === "+" && b === 6 ) {
  console.log('19 + 6 = 25')
} else
if (a === 19 && sign === "+" && b === 7 ) {
  console.log('19 + 7 = 26')
} else
if (a === 19 && sign === "+" && b === 8 ) {
  console.log('19 + 8 = 27')
} else
if (a === 19 && sign === "+" && b === 9 ) {
  console.log('19 + 9 = 28')
} else
if (a === 19 && sign === "+" && b === 10 ) {
  console.log('19 + 10 = 29')
} else
if (a === 19 && sign === "+" && b === 11 ) {
  console.log('19 + 11 = 30')
} else
if (a === 19 && sign === "+" && b === 12 ) {
  console.log('19 + 12 = 31')
} else
if (a === 19 && sign === "+" && b === 13 ) {
  console.log('19 + 13 = 32')
} else
if (a === 19 && sign === "+" && b === 14 ) {
  console.log('19 + 14 = 33')
} else
if (a === 19 && sign === "+" && b === 15 ) {
  console.log('19 + 15 = 34')
} else
if (a === 19 && sign === "+" && b === 16 ) {
  console.log('19 + 16 = 35')
} else
if (a === 19 && sign === "+" && b === 17 ) {
  console.log('19 + 17 = 36')
} else
if (a === 19 && sign === "+" && b === 18 ) {
  console.log('19 + 18 = 37')
} else
if (a === 19 && sign === "+" && b === 19 ) {
  console.log('19 + 19 = 38')
} else
if (a === 19 && sign === "+" && b === 20 ) {
  console.log('19 + 20 = 39')
} else
if (a === 19 && sign === "+" && b === 21 ) {
  console.log('19 + 21 = 40')
} else
if (a === 19 && sign === "+" && b === 22 ) {
  console.log('19 + 22 = 41')
} else
if (a === 19 && sign === "+" && b === 23 ) {
  console.log('19 + 23 = 42')
} else
if (a === 19 && sign === "+" && b === 24 ) {
  console.log('19 + 24 = 43')
} else
if (a === 19 && sign === "+" && b === 25 ) {
  console.log('19 + 25 = 44')
} else
if (a === 19 && sign === "+" && b === 26 ) {
  console.log('19 + 26 = 45')
} else
if (a === 19 && sign === "+" && b === 27 ) {
  console.log('19 + 27 = 46')
} else
if (a === 19 && sign === "+" && b === 28 ) {
  console.log('19 + 28 = 47')
} else
if (a === 19 && sign === "+" && b === 29 ) {
  console.log('19 + 29 = 48')
} else
if (a === 19 && sign === "+" && b === 30 ) {
  console.log('19 + 30 = 49')
} else
if (a === 19 && sign === "+" && b === 31 ) {
  console.log('19 + 31 = 50')
} else
if (a === 19 && sign === "+" && b === 32 ) {
  console.log('19 + 32 = 51')
} else
if (a === 19 && sign === "+" && b === 33 ) {
  console.log('19 + 33 = 52')
} else
if (a === 19 && sign === "+" && b === 34 ) {
  console.log('19 + 34 = 53')
} else
if (a === 19 && sign === "+" && b === 35 ) {
  console.log('19 + 35 = 54')
} else
if (a === 19 && sign === "+" && b === 36 ) {
  console.log('19 + 36 = 55')
} else
if (a === 19 && sign === "+" && b === 37 ) {
  console.log('19 + 37 = 56')
} else
if (a === 19 && sign === "+" && b === 38 ) {
  console.log('19 + 38 = 57')
} else
if (a === 19 && sign === "+" && b === 39 ) {
  console.log('19 + 39 = 58')
} else
if (a === 19 && sign === "+" && b === 40 ) {
  console.log('19 + 40 = 59')
} else
if (a === 19 && sign === "+" && b === 41 ) {
  console.log('19 + 41 = 60')
} else
if (a === 19 && sign === "+" && b === 42 ) {
  console.log('19 + 42 = 61')
} else
if (a === 19 && sign === "+" && b === 43 ) {
  console.log('19 + 43 = 62')
} else
if (a === 19 && sign === "+" && b === 44 ) {
  console.log('19 + 44 = 63')
} else
if (a === 19 && sign === "+" && b === 45 ) {
  console.log('19 + 45 = 64')
} else
if (a === 19 && sign === "+" && b === 46 ) {
  console.log('19 + 46 = 65')
} else
if (a === 19 && sign === "+" && b === 47 ) {
  console.log('19 + 47 = 66')
} else
if (a === 19 && sign === "+" && b === 48 ) {
  console.log('19 + 48 = 67')
} else
if (a === 19 && sign === "+" && b === 49 ) {
  console.log('19 + 49 = 68')
} else
if (a === 19 && sign === "+" && b === 50 ) {
  console.log('19 + 50 = 69')
} else
if (a === 20 && sign === "+" && b === 1 ) {
  console.log('20 + 1 = 21')
} else
if (a === 20 && sign === "+" && b === 2 ) {
  console.log('20 + 2 = 22')
} else
if (a === 20 && sign === "+" && b === 3 ) {
  console.log('20 + 3 = 23')
} else
if (a === 20 && sign === "+" && b === 4 ) {
  console.log('20 + 4 = 24')
} else
if (a === 20 && sign === "+" && b === 5 ) {
  console.log('20 + 5 = 25')
} else
if (a === 20 && sign === "+" && b === 6 ) {
  console.log('20 + 6 = 26')
} else
if (a === 20 && sign === "+" && b === 7 ) {
  console.log('20 + 7 = 27')
} else
if (a === 20 && sign === "+" && b === 8 ) {
  console.log('20 + 8 = 28')
} else
if (a === 20 && sign === "+" && b === 9 ) {
  console.log('20 + 9 = 29')
} else
if (a === 20 && sign === "+" && b === 10 ) {
  console.log('20 + 10 = 30')
} else
if (a === 20 && sign === "+" && b === 11 ) {
  console.log('20 + 11 = 31')
} else
if (a === 20 && sign === "+" && b === 12 ) {
  console.log('20 + 12 = 32')
} else
if (a === 20 && sign === "+" && b === 13 ) {
  console.log('20 + 13 = 33')
} else
if (a === 20 && sign === "+" && b === 14 ) {
  console.log('20 + 14 = 34')
} else
if (a === 20 && sign === "+" && b === 15 ) {
  console.log('20 + 15 = 35')
} else
if (a === 20 && sign === "+" && b === 16 ) {
  console.log('20 + 16 = 36')
} else
if (a === 20 && sign === "+" && b === 17 ) {
  console.log('20 + 17 = 37')
} else
if (a === 20 && sign === "+" && b === 18 ) {
  console.log('20 + 18 = 38')
} else
if (a === 20 && sign === "+" && b === 19 ) {
  console.log('20 + 19 = 39')
} else
if (a === 20 && sign === "+" && b === 20 ) {
  console.log('20 + 20 = 40')
} else
if (a === 20 && sign === "+" && b === 21 ) {
  console.log('20 + 21 = 41')
} else
if (a === 20 && sign === "+" && b === 22 ) {
  console.log('20 + 22 = 42')
} else
if (a === 20 && sign === "+" && b === 23 ) {
  console.log('20 + 23 = 43')
} else
if (a === 20 && sign === "+" && b === 24 ) {
  console.log('20 + 24 = 44')
} else
if (a === 20 && sign === "+" && b === 25 ) {
  console.log('20 + 25 = 45')
} else
if (a === 20 && sign === "+" && b === 26 ) {
  console.log('20 + 26 = 46')
} else
if (a === 20 && sign === "+" && b === 27 ) {
  console.log('20 + 27 = 47')
} else
if (a === 20 && sign === "+" && b === 28 ) {
  console.log('20 + 28 = 48')
} else
if (a === 20 && sign === "+" && b === 29 ) {
  console.log('20 + 29 = 49')
} else
if (a === 20 && sign === "+" && b === 30 ) {
  console.log('20 + 30 = 50')
} else
if (a === 20 && sign === "+" && b === 31 ) {
  console.log('20 + 31 = 51')
} else
if (a === 20 && sign === "+" && b === 32 ) {
  console.log('20 + 32 = 52')
} else
if (a === 20 && sign === "+" && b === 33 ) {
  console.log('20 + 33 = 53')
} else
if (a === 20 && sign === "+" && b === 34 ) {
  console.log('20 + 34 = 54')
} else
if (a === 20 && sign === "+" && b === 35 ) {
  console.log('20 + 35 = 55')
} else
if (a === 20 && sign === "+" && b === 36 ) {
  console.log('20 + 36 = 56')
} else
if (a === 20 && sign === "+" && b === 37 ) {
  console.log('20 + 37 = 57')
} else
if (a === 20 && sign === "+" && b === 38 ) {
  console.log('20 + 38 = 58')
} else
if (a === 20 && sign === "+" && b === 39 ) {
  console.log('20 + 39 = 59')
} else
if (a === 20 && sign === "+" && b === 40 ) {
  console.log('20 + 40 = 60')
} else
if (a === 20 && sign === "+" && b === 41 ) {
  console.log('20 + 41 = 61')
} else
if (a === 20 && sign === "+" && b === 42 ) {
  console.log('20 + 42 = 62')
} else
if (a === 20 && sign === "+" && b === 43 ) {
  console.log('20 + 43 = 63')
} else
if (a === 20 && sign === "+" && b === 44 ) {
  console.log('20 + 44 = 64')
} else
if (a === 20 && sign === "+" && b === 45 ) {
  console.log('20 + 45 = 65')
} else
if (a === 20 && sign === "+" && b === 46 ) {
  console.log('20 + 46 = 66')
} else
if (a === 20 && sign === "+" && b === 47 ) {
  console.log('20 + 47 = 67')
} else
if (a === 20 && sign === "+" && b === 48 ) {
  console.log('20 + 48 = 68')
} else
if (a === 20 && sign === "+" && b === 49 ) {
  console.log('20 + 49 = 69')
} else
if (a === 20 && sign === "+" && b === 50 ) {
  console.log('20 + 50 = 70')
} else
if (a === 21 && sign === "+" && b === 1 ) {
  console.log('21 + 1 = 22')
} else
if (a === 21 && sign === "+" && b === 2 ) {
  console.log('21 + 2 = 23')
} else
if (a === 21 && sign === "+" && b === 3 ) {
  console.log('21 + 3 = 24')
} else
if (a === 21 && sign === "+" && b === 4 ) {
  console.log('21 + 4 = 25')
} else
if (a === 21 && sign === "+" && b === 5 ) {
  console.log('21 + 5 = 26')
} else
if (a === 21 && sign === "+" && b === 6 ) {
  console.log('21 + 6 = 27')
} else
if (a === 21 && sign === "+" && b === 7 ) {
  console.log('21 + 7 = 28')
} else
if (a === 21 && sign === "+" && b === 8 ) {
  console.log('21 + 8 = 29')
} else
if (a === 21 && sign === "+" && b === 9 ) {
  console.log('21 + 9 = 30')
} else
if (a === 21 && sign === "+" && b === 10 ) {
  console.log('21 + 10 = 31')
} else
if (a === 21 && sign === "+" && b === 11 ) {
  console.log('21 + 11 = 32')
} else
if (a === 21 && sign === "+" && b === 12 ) {
  console.log('21 + 12 = 33')
} else
if (a === 21 && sign === "+" && b === 13 ) {
  console.log('21 + 13 = 34')
} else
if (a === 21 && sign === "+" && b === 14 ) {
  console.log('21 + 14 = 35')
} else
if (a === 21 && sign === "+" && b === 15 ) {
  console.log('21 + 15 = 36')
} else
if (a === 21 && sign === "+" && b === 16 ) {
  console.log('21 + 16 = 37')
} else
if (a === 21 && sign === "+" && b === 17 ) {
  console.log('21 + 17 = 38')
} else
if (a === 21 && sign === "+" && b === 18 ) {
  console.log('21 + 18 = 39')
} else
if (a === 21 && sign === "+" && b === 19 ) {
  console.log('21 + 19 = 40')
} else
if (a === 21 && sign === "+" && b === 20 ) {
  console.log('21 + 20 = 41')
} else
if (a === 21 && sign === "+" && b === 21 ) {
  console.log('21 + 21 = 42')
} else
if (a === 21 && sign === "+" && b === 22 ) {
  console.log('21 + 22 = 43')
} else
if (a === 21 && sign === "+" && b === 23 ) {
  console.log('21 + 23 = 44')
} else
if (a === 21 && sign === "+" && b === 24 ) {
  console.log('21 + 24 = 45')
} else
if (a === 21 && sign === "+" && b === 25 ) {
  console.log('21 + 25 = 46')
} else
if (a === 21 && sign === "+" && b === 26 ) {
  console.log('21 + 26 = 47')
} else
if (a === 21 && sign === "+" && b === 27 ) {
  console.log('21 + 27 = 48')
} else
if (a === 21 && sign === "+" && b === 28 ) {
  console.log('21 + 28 = 49')
} else
if (a === 21 && sign === "+" && b === 29 ) {
  console.log('21 + 29 = 50')
} else
if (a === 21 && sign === "+" && b === 30 ) {
  console.log('21 + 30 = 51')
} else
if (a === 21 && sign === "+" && b === 31 ) {
  console.log('21 + 31 = 52')
} else
if (a === 21 && sign === "+" && b === 32 ) {
  console.log('21 + 32 = 53')
} else
if (a === 21 && sign === "+" && b === 33 ) {
  console.log('21 + 33 = 54')
} else
if (a === 21 && sign === "+" && b === 34 ) {
  console.log('21 + 34 = 55')
} else
if (a === 21 && sign === "+" && b === 35 ) {
  console.log('21 + 35 = 56')
} else
if (a === 21 && sign === "+" && b === 36 ) {
  console.log('21 + 36 = 57')
} else
if (a === 21 && sign === "+" && b === 37 ) {
  console.log('21 + 37 = 58')
} else
if (a === 21 && sign === "+" && b === 38 ) {
  console.log('21 + 38 = 59')
} else
if (a === 21 && sign === "+" && b === 39 ) {
  console.log('21 + 39 = 60')
} else
if (a === 21 && sign === "+" && b === 40 ) {
  console.log('21 + 40 = 61')
} else
if (a === 21 && sign === "+" && b === 41 ) {
  console.log('21 + 41 = 62')
} else
if (a === 21 && sign === "+" && b === 42 ) {
  console.log('21 + 42 = 63')
} else
if (a === 21 && sign === "+" && b === 43 ) {
  console.log('21 + 43 = 64')
} else
if (a === 21 && sign === "+" && b === 44 ) {
  console.log('21 + 44 = 65')
} else
if (a === 21 && sign === "+" && b === 45 ) {
  console.log('21 + 45 = 66')
} else
if (a === 21 && sign === "+" && b === 46 ) {
  console.log('21 + 46 = 67')
} else
if (a === 21 && sign === "+" && b === 47 ) {
  console.log('21 + 47 = 68')
} else
if (a === 21 && sign === "+" && b === 48 ) {
  console.log('21 + 48 = 69')
} else
if (a === 21 && sign === "+" && b === 49 ) {
  console.log('21 + 49 = 70')
} else
if (a === 21 && sign === "+" && b === 50 ) {
  console.log('21 + 50 = 71')
} else
if (a === 22 && sign === "+" && b === 1 ) {
  console.log('22 + 1 = 23')
} else
if (a === 22 && sign === "+" && b === 2 ) {
  console.log('22 + 2 = 24')
} else
if (a === 22 && sign === "+" && b === 3 ) {
  console.log('22 + 3 = 25')
} else
if (a === 22 && sign === "+" && b === 4 ) {
  console.log('22 + 4 = 26')
} else
if (a === 22 && sign === "+" && b === 5 ) {
  console.log('22 + 5 = 27')
} else
if (a === 22 && sign === "+" && b === 6 ) {
  console.log('22 + 6 = 28')
} else
if (a === 22 && sign === "+" && b === 7 ) {
  console.log('22 + 7 = 29')
} else
if (a === 22 && sign === "+" && b === 8 ) {
  console.log('22 + 8 = 30')
} else
if (a === 22 && sign === "+" && b === 9 ) {
  console.log('22 + 9 = 31')
} else
if (a === 22 && sign === "+" && b === 10 ) {
  console.log('22 + 10 = 32')
} else
if (a === 22 && sign === "+" && b === 11 ) {
  console.log('22 + 11 = 33')
} else
if (a === 22 && sign === "+" && b === 12 ) {
  console.log('22 + 12 = 34')
} else
if (a === 22 && sign === "+" && b === 13 ) {
  console.log('22 + 13 = 35')
} else
if (a === 22 && sign === "+" && b === 14 ) {
  console.log('22 + 14 = 36')
} else
if (a === 22 && sign === "+" && b === 15 ) {
  console.log('22 + 15 = 37')
} else
if (a === 22 && sign === "+" && b === 16 ) {
  console.log('22 + 16 = 38')
} else
if (a === 22 && sign === "+" && b === 17 ) {
  console.log('22 + 17 = 39')
} else
if (a === 22 && sign === "+" && b === 18 ) {
  console.log('22 + 18 = 40')
} else
if (a === 22 && sign === "+" && b === 19 ) {
  console.log('22 + 19 = 41')
} else
if (a === 22 && sign === "+" && b === 20 ) {
  console.log('22 + 20 = 42')
} else
if (a === 22 && sign === "+" && b === 21 ) {
  console.log('22 + 21 = 43')
} else
if (a === 22 && sign === "+" && b === 22 ) {
  console.log('22 + 22 = 44')
} else
if (a === 22 && sign === "+" && b === 23 ) {
  console.log('22 + 23 = 45')
} else
if (a === 22 && sign === "+" && b === 24 ) {
  console.log('22 + 24 = 46')
} else
if (a === 22 && sign === "+" && b === 25 ) {
  console.log('22 + 25 = 47')
} else
if (a === 22 && sign === "+" && b === 26 ) {
  console.log('22 + 26 = 48')
} else
if (a === 22 && sign === "+" && b === 27 ) {
  console.log('22 + 27 = 49')
} else
if (a === 22 && sign === "+" && b === 28 ) {
  console.log('22 + 28 = 50')
} else
if (a === 22 && sign === "+" && b === 29 ) {
  console.log('22 + 29 = 51')
} else
if (a === 22 && sign === "+" && b === 30 ) {
  console.log('22 + 30 = 52')
} else
if (a === 22 && sign === "+" && b === 31 ) {
  console.log('22 + 31 = 53')
} else
if (a === 22 && sign === "+" && b === 32 ) {
  console.log('22 + 32 = 54')
} else
if (a === 22 && sign === "+" && b === 33 ) {
  console.log('22 + 33 = 55')
} else
if (a === 22 && sign === "+" && b === 34 ) {
  console.log('22 + 34 = 56')
} else
if (a === 22 && sign === "+" && b === 35 ) {
  console.log('22 + 35 = 57')
} else
if (a === 22 && sign === "+" && b === 36 ) {
  console.log('22 + 36 = 58')
} else
if (a === 22 && sign === "+" && b === 37 ) {
  console.log('22 + 37 = 59')
} else
if (a === 22 && sign === "+" && b === 38 ) {
  console.log('22 + 38 = 60')
} else
if (a === 22 && sign === "+" && b === 39 ) {
  console.log('22 + 39 = 61')
} else
if (a === 22 && sign === "+" && b === 40 ) {
  console.log('22 + 40 = 62')
} else
if (a === 22 && sign === "+" && b === 41 ) {
  console.log('22 + 41 = 63')
} else
if (a === 22 && sign === "+" && b === 42 ) {
  console.log('22 + 42 = 64')
} else
if (a === 22 && sign === "+" && b === 43 ) {
  console.log('22 + 43 = 65')
} else
if (a === 22 && sign === "+" && b === 44 ) {
  console.log('22 + 44 = 66')
} else
if (a === 22 && sign === "+" && b === 45 ) {
  console.log('22 + 45 = 67')
} else
if (a === 22 && sign === "+" && b === 46 ) {
  console.log('22 + 46 = 68')
} else
if (a === 22 && sign === "+" && b === 47 ) {
  console.log('22 + 47 = 69')
} else
if (a === 22 && sign === "+" && b === 48 ) {
  console.log('22 + 48 = 70')
} else
if (a === 22 && sign === "+" && b === 49 ) {
  console.log('22 + 49 = 71')
} else
if (a === 22 && sign === "+" && b === 50 ) {
  console.log('22 + 50 = 72')
} else
if (a === 23 && sign === "+" && b === 1 ) {
  console.log('23 + 1 = 24')
} else
if (a === 23 && sign === "+" && b === 2 ) {
  console.log('23 + 2 = 25')
} else
if (a === 23 && sign === "+" && b === 3 ) {
  console.log('23 + 3 = 26')
} else
if (a === 23 && sign === "+" && b === 4 ) {
  console.log('23 + 4 = 27')
} else
if (a === 23 && sign === "+" && b === 5 ) {
  console.log('23 + 5 = 28')
} else
if (a === 23 && sign === "+" && b === 6 ) {
  console.log('23 + 6 = 29')
} else
if (a === 23 && sign === "+" && b === 7 ) {
  console.log('23 + 7 = 30')
} else
if (a === 23 && sign === "+" && b === 8 ) {
  console.log('23 + 8 = 31')
} else
if (a === 23 && sign === "+" && b === 9 ) {
  console.log('23 + 9 = 32')
} else
if (a === 23 && sign === "+" && b === 10 ) {
  console.log('23 + 10 = 33')
} else
if (a === 23 && sign === "+" && b === 11 ) {
  console.log('23 + 11 = 34')
} else
if (a === 23 && sign === "+" && b === 12 ) {
  console.log('23 + 12 = 35')
} else
if (a === 23 && sign === "+" && b === 13 ) {
  console.log('23 + 13 = 36')
} else
if (a === 23 && sign === "+" && b === 14 ) {
  console.log('23 + 14 = 37')
} else
if (a === 23 && sign === "+" && b === 15 ) {
  console.log('23 + 15 = 38')
} else
if (a === 23 && sign === "+" && b === 16 ) {
  console.log('23 + 16 = 39')
} else
if (a === 23 && sign === "+" && b === 17 ) {
  console.log('23 + 17 = 40')
} else
if (a === 23 && sign === "+" && b === 18 ) {
  console.log('23 + 18 = 41')
} else
if (a === 23 && sign === "+" && b === 19 ) {
  console.log('23 + 19 = 42')
} else
if (a === 23 && sign === "+" && b === 20 ) {
  console.log('23 + 20 = 43')
} else
if (a === 23 && sign === "+" && b === 21 ) {
  console.log('23 + 21 = 44')
} else
if (a === 23 && sign === "+" && b === 22 ) {
  console.log('23 + 22 = 45')
} else
if (a === 23 && sign === "+" && b === 23 ) {
  console.log('23 + 23 = 46')
} else
if (a === 23 && sign === "+" && b === 24 ) {
  console.log('23 + 24 = 47')
} else
if (a === 23 && sign === "+" && b === 25 ) {
  console.log('23 + 25 = 48')
} else
if (a === 23 && sign === "+" && b === 26 ) {
  console.log('23 + 26 = 49')
} else
if (a === 23 && sign === "+" && b === 27 ) {
  console.log('23 + 27 = 50')
} else
if (a === 23 && sign === "+" && b === 28 ) {
  console.log('23 + 28 = 51')
} else
if (a === 23 && sign === "+" && b === 29 ) {
  console.log('23 + 29 = 52')
} else
if (a === 23 && sign === "+" && b === 30 ) {
  console.log('23 + 30 = 53')
} else
if (a === 23 && sign === "+" && b === 31 ) {
  console.log('23 + 31 = 54')
} else
if (a === 23 && sign === "+" && b === 32 ) {
  console.log('23 + 32 = 55')
} else
if (a === 23 && sign === "+" && b === 33 ) {
  console.log('23 + 33 = 56')
} else
if (a === 23 && sign === "+" && b === 34 ) {
  console.log('23 + 34 = 57')
} else
if (a === 23 && sign === "+" && b === 35 ) {
  console.log('23 + 35 = 58')
} else
if (a === 23 && sign === "+" && b === 36 ) {
  console.log('23 + 36 = 59')
} else
if (a === 23 && sign === "+" && b === 37 ) {
  console.log('23 + 37 = 60')
} else
if (a === 23 && sign === "+" && b === 38 ) {
  console.log('23 + 38 = 61')
} else
if (a === 23 && sign === "+" && b === 39 ) {
  console.log('23 + 39 = 62')
} else
if (a === 23 && sign === "+" && b === 40 ) {
  console.log('23 + 40 = 63')
} else
if (a === 23 && sign === "+" && b === 41 ) {
  console.log('23 + 41 = 64')
} else
if (a === 23 && sign === "+" && b === 42 ) {
  console.log('23 + 42 = 65')
} else
if (a === 23 && sign === "+" && b === 43 ) {
  console.log('23 + 43 = 66')
} else
if (a === 23 && sign === "+" && b === 44 ) {
  console.log('23 + 44 = 67')
} else
if (a === 23 && sign === "+" && b === 45 ) {
  console.log('23 + 45 = 68')
} else
if (a === 23 && sign === "+" && b === 46 ) {
  console.log('23 + 46 = 69')
} else
if (a === 23 && sign === "+" && b === 47 ) {
  console.log('23 + 47 = 70')
} else
if (a === 23 && sign === "+" && b === 48 ) {
  console.log('23 + 48 = 71')
} else
if (a === 23 && sign === "+" && b === 49 ) {
  console.log('23 + 49 = 72')
} else
if (a === 23 && sign === "+" && b === 50 ) {
  console.log('23 + 50 = 73')
} else
if (a === 24 && sign === "+" && b === 1 ) {
  console.log('24 + 1 = 25')
} else
if (a === 24 && sign === "+" && b === 2 ) {
  console.log('24 + 2 = 26')
} else
if (a === 24 && sign === "+" && b === 3 ) {
  console.log('24 + 3 = 27')
} else
if (a === 24 && sign === "+" && b === 4 ) {
  console.log('24 + 4 = 28')
} else
if (a === 24 && sign === "+" && b === 5 ) {
  console.log('24 + 5 = 29')
} else
if (a === 24 && sign === "+" && b === 6 ) {
  console.log('24 + 6 = 30')
} else
if (a === 24 && sign === "+" && b === 7 ) {
  console.log('24 + 7 = 31')
} else
if (a === 24 && sign === "+" && b === 8 ) {
  console.log('24 + 8 = 32')
} else
if (a === 24 && sign === "+" && b === 9 ) {
  console.log('24 + 9 = 33')
} else
if (a === 24 && sign === "+" && b === 10 ) {
  console.log('24 + 10 = 34')
} else
if (a === 24 && sign === "+" && b === 11 ) {
  console.log('24 + 11 = 35')
} else
if (a === 24 && sign === "+" && b === 12 ) {
  console.log('24 + 12 = 36')
} else
if (a === 24 && sign === "+" && b === 13 ) {
  console.log('24 + 13 = 37')
} else
if (a === 24 && sign === "+" && b === 14 ) {
  console.log('24 + 14 = 38')
} else
if (a === 24 && sign === "+" && b === 15 ) {
  console.log('24 + 15 = 39')
} else
if (a === 24 && sign === "+" && b === 16 ) {
  console.log('24 + 16 = 40')
} else
if (a === 24 && sign === "+" && b === 17 ) {
  console.log('24 + 17 = 41')
} else
if (a === 24 && sign === "+" && b === 18 ) {
  console.log('24 + 18 = 42')
} else
if (a === 24 && sign === "+" && b === 19 ) {
  console.log('24 + 19 = 43')
} else
if (a === 24 && sign === "+" && b === 20 ) {
  console.log('24 + 20 = 44')
} else
if (a === 24 && sign === "+" && b === 21 ) {
  console.log('24 + 21 = 45')
} else
if (a === 24 && sign === "+" && b === 22 ) {
  console.log('24 + 22 = 46')
} else
if (a === 24 && sign === "+" && b === 23 ) {
  console.log('24 + 23 = 47')
} else
if (a === 24 && sign === "+" && b === 24 ) {
  console.log('24 + 24 = 48')
} else
if (a === 24 && sign === "+" && b === 25 ) {
  console.log('24 + 25 = 49')
} else
if (a === 24 && sign === "+" && b === 26 ) {
  console.log('24 + 26 = 50')
} else
if (a === 24 && sign === "+" && b === 27 ) {
  console.log('24 + 27 = 51')
} else
if (a === 24 && sign === "+" && b === 28 ) {
  console.log('24 + 28 = 52')
} else
if (a === 24 && sign === "+" && b === 29 ) {
  console.log('24 + 29 = 53')
} else
if (a === 24 && sign === "+" && b === 30 ) {
  console.log('24 + 30 = 54')
} else
if (a === 24 && sign === "+" && b === 31 ) {
  console.log('24 + 31 = 55')
} else
if (a === 24 && sign === "+" && b === 32 ) {
  console.log('24 + 32 = 56')
} else
if (a === 24 && sign === "+" && b === 33 ) {
  console.log('24 + 33 = 57')
} else
if (a === 24 && sign === "+" && b === 34 ) {
  console.log('24 + 34 = 58')
} else
if (a === 24 && sign === "+" && b === 35 ) {
  console.log('24 + 35 = 59')
} else
if (a === 24 && sign === "+" && b === 36 ) {
  console.log('24 + 36 = 60')
} else
if (a === 24 && sign === "+" && b === 37 ) {
  console.log('24 + 37 = 61')
} else
if (a === 24 && sign === "+" && b === 38 ) {
  console.log('24 + 38 = 62')
} else
if (a === 24 && sign === "+" && b === 39 ) {
  console.log('24 + 39 = 63')
} else
if (a === 24 && sign === "+" && b === 40 ) {
  console.log('24 + 40 = 64')
} else
if (a === 24 && sign === "+" && b === 41 ) {
  console.log('24 + 41 = 65')
} else
if (a === 24 && sign === "+" && b === 42 ) {
  console.log('24 + 42 = 66')
} else
if (a === 24 && sign === "+" && b === 43 ) {
  console.log('24 + 43 = 67')
} else
if (a === 24 && sign === "+" && b === 44 ) {
  console.log('24 + 44 = 68')
} else
if (a === 24 && sign === "+" && b === 45 ) {
  console.log('24 + 45 = 69')
} else
if (a === 24 && sign === "+" && b === 46 ) {
  console.log('24 + 46 = 70')
} else
if (a === 24 && sign === "+" && b === 47 ) {
  console.log('24 + 47 = 71')
} else
if (a === 24 && sign === "+" && b === 48 ) {
  console.log('24 + 48 = 72')
} else
if (a === 24 && sign === "+" && b === 49 ) {
  console.log('24 + 49 = 73')
} else
if (a === 24 && sign === "+" && b === 50 ) {
  console.log('24 + 50 = 74')
} else
if (a === 25 && sign === "+" && b === 1 ) {
  console.log('25 + 1 = 26')
} else
if (a === 25 && sign === "+" && b === 2 ) {
  console.log('25 + 2 = 27')
} else
if (a === 25 && sign === "+" && b === 3 ) {
  console.log('25 + 3 = 28')
} else
if (a === 25 && sign === "+" && b === 4 ) {
  console.log('25 + 4 = 29')
} else
if (a === 25 && sign === "+" && b === 5 ) {
  console.log('25 + 5 = 30')
} else
if (a === 25 && sign === "+" && b === 6 ) {
  console.log('25 + 6 = 31')
} else
if (a === 25 && sign === "+" && b === 7 ) {
  console.log('25 + 7 = 32')
} else
if (a === 25 && sign === "+" && b === 8 ) {
  console.log('25 + 8 = 33')
} else
if (a === 25 && sign === "+" && b === 9 ) {
  console.log('25 + 9 = 34')
} else
if (a === 25 && sign === "+" && b === 10 ) {
  console.log('25 + 10 = 35')
} else
if (a === 25 && sign === "+" && b === 11 ) {
  console.log('25 + 11 = 36')
} else
if (a === 25 && sign === "+" && b === 12 ) {
  console.log('25 + 12 = 37')
} else
if (a === 25 && sign === "+" && b === 13 ) {
  console.log('25 + 13 = 38')
} else
if (a === 25 && sign === "+" && b === 14 ) {
  console.log('25 + 14 = 39')
} else
if (a === 25 && sign === "+" && b === 15 ) {
  console.log('25 + 15 = 40')
} else
if (a === 25 && sign === "+" && b === 16 ) {
  console.log('25 + 16 = 41')
} else
if (a === 25 && sign === "+" && b === 17 ) {
  console.log('25 + 17 = 42')
} else
if (a === 25 && sign === "+" && b === 18 ) {
  console.log('25 + 18 = 43')
} else
if (a === 25 && sign === "+" && b === 19 ) {
  console.log('25 + 19 = 44')
} else
if (a === 25 && sign === "+" && b === 20 ) {
  console.log('25 + 20 = 45')
} else
if (a === 25 && sign === "+" && b === 21 ) {
  console.log('25 + 21 = 46')
} else
if (a === 25 && sign === "+" && b === 22 ) {
  console.log('25 + 22 = 47')
} else
if (a === 25 && sign === "+" && b === 23 ) {
  console.log('25 + 23 = 48')
} else
if (a === 25 && sign === "+" && b === 24 ) {
  console.log('25 + 24 = 49')
} else
if (a === 25 && sign === "+" && b === 25 ) {
  console.log('25 + 25 = 50')
} else
if (a === 25 && sign === "+" && b === 26 ) {
  console.log('25 + 26 = 51')
} else
if (a === 25 && sign === "+" && b === 27 ) {
  console.log('25 + 27 = 52')
} else
if (a === 25 && sign === "+" && b === 28 ) {
  console.log('25 + 28 = 53')
} else
if (a === 25 && sign === "+" && b === 29 ) {
  console.log('25 + 29 = 54')
} else
if (a === 25 && sign === "+" && b === 30 ) {
  console.log('25 + 30 = 55')
} else
if (a === 25 && sign === "+" && b === 31 ) {
  console.log('25 + 31 = 56')
} else
if (a === 25 && sign === "+" && b === 32 ) {
  console.log('25 + 32 = 57')
} else
if (a === 25 && sign === "+" && b === 33 ) {
  console.log('25 + 33 = 58')
} else
if (a === 25 && sign === "+" && b === 34 ) {
  console.log('25 + 34 = 59')
} else
if (a === 25 && sign === "+" && b === 35 ) {
  console.log('25 + 35 = 60')
} else
if (a === 25 && sign === "+" && b === 36 ) {
  console.log('25 + 36 = 61')
} else
if (a === 25 && sign === "+" && b === 37 ) {
  console.log('25 + 37 = 62')
} else
if (a === 25 && sign === "+" && b === 38 ) {
  console.log('25 + 38 = 63')
} else
if (a === 25 && sign === "+" && b === 39 ) {
  console.log('25 + 39 = 64')
} else
if (a === 25 && sign === "+" && b === 40 ) {
  console.log('25 + 40 = 65')
} else
if (a === 25 && sign === "+" && b === 41 ) {
  console.log('25 + 41 = 66')
} else
if (a === 25 && sign === "+" && b === 42 ) {
  console.log('25 + 42 = 67')
} else
if (a === 25 && sign === "+" && b === 43 ) {
  console.log('25 + 43 = 68')
} else
if (a === 25 && sign === "+" && b === 44 ) {
  console.log('25 + 44 = 69')
} else
if (a === 25 && sign === "+" && b === 45 ) {
  console.log('25 + 45 = 70')
} else
if (a === 25 && sign === "+" && b === 46 ) {
  console.log('25 + 46 = 71')
} else
if (a === 25 && sign === "+" && b === 47 ) {
  console.log('25 + 47 = 72')
} else
if (a === 25 && sign === "+" && b === 48 ) {
  console.log('25 + 48 = 73')
} else
if (a === 25 && sign === "+" && b === 49 ) {
  console.log('25 + 49 = 74')
} else
if (a === 25 && sign === "+" && b === 50 ) {
  console.log('25 + 50 = 75')
} else
if (a === 26 && sign === "+" && b === 1 ) {
  console.log('26 + 1 = 27')
} else
if (a === 26 && sign === "+" && b === 2 ) {
  console.log('26 + 2 = 28')
} else
if (a === 26 && sign === "+" && b === 3 ) {
  console.log('26 + 3 = 29')
} else
if (a === 26 && sign === "+" && b === 4 ) {
  console.log('26 + 4 = 30')
} else
if (a === 26 && sign === "+" && b === 5 ) {
  console.log('26 + 5 = 31')
} else
if (a === 26 && sign === "+" && b === 6 ) {
  console.log('26 + 6 = 32')
} else
if (a === 26 && sign === "+" && b === 7 ) {
  console.log('26 + 7 = 33')
} else
if (a === 26 && sign === "+" && b === 8 ) {
  console.log('26 + 8 = 34')
} else
if (a === 26 && sign === "+" && b === 9 ) {
  console.log('26 + 9 = 35')
} else
if (a === 26 && sign === "+" && b === 10 ) {
  console.log('26 + 10 = 36')
} else
if (a === 26 && sign === "+" && b === 11 ) {
  console.log('26 + 11 = 37')
} else
if (a === 26 && sign === "+" && b === 12 ) {
  console.log('26 + 12 = 38')
} else
if (a === 26 && sign === "+" && b === 13 ) {
  console.log('26 + 13 = 39')
} else
if (a === 26 && sign === "+" && b === 14 ) {
  console.log('26 + 14 = 40')
} else
if (a === 26 && sign === "+" && b === 15 ) {
  console.log('26 + 15 = 41')
} else
if (a === 26 && sign === "+" && b === 16 ) {
  console.log('26 + 16 = 42')
} else
if (a === 26 && sign === "+" && b === 17 ) {
  console.log('26 + 17 = 43')
} else
if (a === 26 && sign === "+" && b === 18 ) {
  console.log('26 + 18 = 44')
} else
if (a === 26 && sign === "+" && b === 19 ) {
  console.log('26 + 19 = 45')
} else
if (a === 26 && sign === "+" && b === 20 ) {
  console.log('26 + 20 = 46')
} else
if (a === 26 && sign === "+" && b === 21 ) {
  console.log('26 + 21 = 47')
} else
if (a === 26 && sign === "+" && b === 22 ) {
  console.log('26 + 22 = 48')
} else
if (a === 26 && sign === "+" && b === 23 ) {
  console.log('26 + 23 = 49')
} else
if (a === 26 && sign === "+" && b === 24 ) {
  console.log('26 + 24 = 50')
} else
if (a === 26 && sign === "+" && b === 25 ) {
  console.log('26 + 25 = 51')
} else
if (a === 26 && sign === "+" && b === 26 ) {
  console.log('26 + 26 = 52')
} else
if (a === 26 && sign === "+" && b === 27 ) {
  console.log('26 + 27 = 53')
} else
if (a === 26 && sign === "+" && b === 28 ) {
  console.log('26 + 28 = 54')
} else
if (a === 26 && sign === "+" && b === 29 ) {
  console.log('26 + 29 = 55')
} else
if (a === 26 && sign === "+" && b === 30 ) {
  console.log('26 + 30 = 56')
} else
if (a === 26 && sign === "+" && b === 31 ) {
  console.log('26 + 31 = 57')
} else
if (a === 26 && sign === "+" && b === 32 ) {
  console.log('26 + 32 = 58')
} else
if (a === 26 && sign === "+" && b === 33 ) {
  console.log('26 + 33 = 59')
} else
if (a === 26 && sign === "+" && b === 34 ) {
  console.log('26 + 34 = 60')
} else
if (a === 26 && sign === "+" && b === 35 ) {
  console.log('26 + 35 = 61')
} else
if (a === 26 && sign === "+" && b === 36 ) {
  console.log('26 + 36 = 62')
} else
if (a === 26 && sign === "+" && b === 37 ) {
  console.log('26 + 37 = 63')
} else
if (a === 26 && sign === "+" && b === 38 ) {
  console.log('26 + 38 = 64')
} else
if (a === 26 && sign === "+" && b === 39 ) {
  console.log('26 + 39 = 65')
} else
if (a === 26 && sign === "+" && b === 40 ) {
  console.log('26 + 40 = 66')
} else
if (a === 26 && sign === "+" && b === 41 ) {
  console.log('26 + 41 = 67')
} else
if (a === 26 && sign === "+" && b === 42 ) {
  console.log('26 + 42 = 68')
} else
if (a === 26 && sign === "+" && b === 43 ) {
  console.log('26 + 43 = 69')
} else
if (a === 26 && sign === "+" && b === 44 ) {
  console.log('26 + 44 = 70')
} else
if (a === 26 && sign === "+" && b === 45 ) {
  console.log('26 + 45 = 71')
} else
if (a === 26 && sign === "+" && b === 46 ) {
  console.log('26 + 46 = 72')
} else
if (a === 26 && sign === "+" && b === 47 ) {
  console.log('26 + 47 = 73')
} else
if (a === 26 && sign === "+" && b === 48 ) {
  console.log('26 + 48 = 74')
} else
if (a === 26 && sign === "+" && b === 49 ) {
  console.log('26 + 49 = 75')
} else
if (a === 26 && sign === "+" && b === 50 ) {
  console.log('26 + 50 = 76')
} else
if (a === 27 && sign === "+" && b === 1 ) {
  console.log('27 + 1 = 28')
} else
if (a === 27 && sign === "+" && b === 2 ) {
  console.log('27 + 2 = 29')
} else
if (a === 27 && sign === "+" && b === 3 ) {
  console.log('27 + 3 = 30')
} else
if (a === 27 && sign === "+" && b === 4 ) {
  console.log('27 + 4 = 31')
} else
if (a === 27 && sign === "+" && b === 5 ) {
  console.log('27 + 5 = 32')
} else
if (a === 27 && sign === "+" && b === 6 ) {
  console.log('27 + 6 = 33')
} else
if (a === 27 && sign === "+" && b === 7 ) {
  console.log('27 + 7 = 34')
} else
if (a === 27 && sign === "+" && b === 8 ) {
  console.log('27 + 8 = 35')
} else
if (a === 27 && sign === "+" && b === 9 ) {
  console.log('27 + 9 = 36')
} else
if (a === 27 && sign === "+" && b === 10 ) {
  console.log('27 + 10 = 37')
} else
if (a === 27 && sign === "+" && b === 11 ) {
  console.log('27 + 11 = 38')
} else
if (a === 27 && sign === "+" && b === 12 ) {
  console.log('27 + 12 = 39')
} else
if (a === 27 && sign === "+" && b === 13 ) {
  console.log('27 + 13 = 40')
} else
if (a === 27 && sign === "+" && b === 14 ) {
  console.log('27 + 14 = 41')
} else
if (a === 27 && sign === "+" && b === 15 ) {
  console.log('27 + 15 = 42')
} else
if (a === 27 && sign === "+" && b === 16 ) {
  console.log('27 + 16 = 43')
} else
if (a === 27 && sign === "+" && b === 17 ) {
  console.log('27 + 17 = 44')
} else
if (a === 27 && sign === "+" && b === 18 ) {
  console.log('27 + 18 = 45')
} else
if (a === 27 && sign === "+" && b === 19 ) {
  console.log('27 + 19 = 46')
} else
if (a === 27 && sign === "+" && b === 20 ) {
  console.log('27 + 20 = 47')
} else
if (a === 27 && sign === "+" && b === 21 ) {
  console.log('27 + 21 = 48')
} else
if (a === 27 && sign === "+" && b === 22 ) {
  console.log('27 + 22 = 49')
} else
if (a === 27 && sign === "+" && b === 23 ) {
  console.log('27 + 23 = 50')
} else
if (a === 27 && sign === "+" && b === 24 ) {
  console.log('27 + 24 = 51')
} else
if (a === 27 && sign === "+" && b === 25 ) {
  console.log('27 + 25 = 52')
} else
if (a === 27 && sign === "+" && b === 26 ) {
  console.log('27 + 26 = 53')
} else
if (a === 27 && sign === "+" && b === 27 ) {
  console.log('27 + 27 = 54')
} else
if (a === 27 && sign === "+" && b === 28 ) {
  console.log('27 + 28 = 55')
} else
if (a === 27 && sign === "+" && b === 29 ) {
  console.log('27 + 29 = 56')
} else
if (a === 27 && sign === "+" && b === 30 ) {
  console.log('27 + 30 = 57')
} else
if (a === 27 && sign === "+" && b === 31 ) {
  console.log('27 + 31 = 58')
} else
if (a === 27 && sign === "+" && b === 32 ) {
  console.log('27 + 32 = 59')
} else
if (a === 27 && sign === "+" && b === 33 ) {
  console.log('27 + 33 = 60')
} else
if (a === 27 && sign === "+" && b === 34 ) {
  console.log('27 + 34 = 61')
} else
if (a === 27 && sign === "+" && b === 35 ) {
  console.log('27 + 35 = 62')
} else
if (a === 27 && sign === "+" && b === 36 ) {
  console.log('27 + 36 = 63')
} else
if (a === 27 && sign === "+" && b === 37 ) {
  console.log('27 + 37 = 64')
} else
if (a === 27 && sign === "+" && b === 38 ) {
  console.log('27 + 38 = 65')
} else
if (a === 27 && sign === "+" && b === 39 ) {
  console.log('27 + 39 = 66')
} else
if (a === 27 && sign === "+" && b === 40 ) {
  console.log('27 + 40 = 67')
} else
if (a === 27 && sign === "+" && b === 41 ) {
  console.log('27 + 41 = 68')
} else
if (a === 27 && sign === "+" && b === 42 ) {
  console.log('27 + 42 = 69')
} else
if (a === 27 && sign === "+" && b === 43 ) {
  console.log('27 + 43 = 70')
} else
if (a === 27 && sign === "+" && b === 44 ) {
  console.log('27 + 44 = 71')
} else
if (a === 27 && sign === "+" && b === 45 ) {
  console.log('27 + 45 = 72')
} else
if (a === 27 && sign === "+" && b === 46 ) {
  console.log('27 + 46 = 73')
} else
if (a === 27 && sign === "+" && b === 47 ) {
  console.log('27 + 47 = 74')
} else
if (a === 27 && sign === "+" && b === 48 ) {
  console.log('27 + 48 = 75')
} else
if (a === 27 && sign === "+" && b === 49 ) {
  console.log('27 + 49 = 76')
} else
if (a === 27 && sign === "+" && b === 50 ) {
  console.log('27 + 50 = 77')
} else
if (a === 28 && sign === "+" && b === 1 ) {
  console.log('28 + 1 = 29')
} else
if (a === 28 && sign === "+" && b === 2 ) {
  console.log('28 + 2 = 30')
} else
if (a === 28 && sign === "+" && b === 3 ) {
  console.log('28 + 3 = 31')
} else
if (a === 28 && sign === "+" && b === 4 ) {
  console.log('28 + 4 = 32')
} else
if (a === 28 && sign === "+" && b === 5 ) {
  console.log('28 + 5 = 33')
} else
if (a === 28 && sign === "+" && b === 6 ) {
  console.log('28 + 6 = 34')
} else
if (a === 28 && sign === "+" && b === 7 ) {
  console.log('28 + 7 = 35')
} else
if (a === 28 && sign === "+" && b === 8 ) {
  console.log('28 + 8 = 36')
} else
if (a === 28 && sign === "+" && b === 9 ) {
  console.log('28 + 9 = 37')
} else
if (a === 28 && sign === "+" && b === 10 ) {
  console.log('28 + 10 = 38')
} else
if (a === 28 && sign === "+" && b === 11 ) {
  console.log('28 + 11 = 39')
} else
if (a === 28 && sign === "+" && b === 12 ) {
  console.log('28 + 12 = 40')
} else
if (a === 28 && sign === "+" && b === 13 ) {
  console.log('28 + 13 = 41')
} else
if (a === 28 && sign === "+" && b === 14 ) {
  console.log('28 + 14 = 42')
} else
if (a === 28 && sign === "+" && b === 15 ) {
  console.log('28 + 15 = 43')
} else
if (a === 28 && sign === "+" && b === 16 ) {
  console.log('28 + 16 = 44')
} else
if (a === 28 && sign === "+" && b === 17 ) {
  console.log('28 + 17 = 45')
} else
if (a === 28 && sign === "+" && b === 18 ) {
  console.log('28 + 18 = 46')
} else
if (a === 28 && sign === "+" && b === 19 ) {
  console.log('28 + 19 = 47')
} else
if (a === 28 && sign === "+" && b === 20 ) {
  console.log('28 + 20 = 48')
} else
if (a === 28 && sign === "+" && b === 21 ) {
  console.log('28 + 21 = 49')
} else
if (a === 28 && sign === "+" && b === 22 ) {
  console.log('28 + 22 = 50')
} else
if (a === 28 && sign === "+" && b === 23 ) {
  console.log('28 + 23 = 51')
} else
if (a === 28 && sign === "+" && b === 24 ) {
  console.log('28 + 24 = 52')
} else
if (a === 28 && sign === "+" && b === 25 ) {
  console.log('28 + 25 = 53')
} else
if (a === 28 && sign === "+" && b === 26 ) {
  console.log('28 + 26 = 54')
} else
if (a === 28 && sign === "+" && b === 27 ) {
  console.log('28 + 27 = 55')
} else
if (a === 28 && sign === "+" && b === 28 ) {
  console.log('28 + 28 = 56')
} else
if (a === 28 && sign === "+" && b === 29 ) {
  console.log('28 + 29 = 57')
} else
if (a === 28 && sign === "+" && b === 30 ) {
  console.log('28 + 30 = 58')
} else
if (a === 28 && sign === "+" && b === 31 ) {
  console.log('28 + 31 = 59')
} else
if (a === 28 && sign === "+" && b === 32 ) {
  console.log('28 + 32 = 60')
} else
if (a === 28 && sign === "+" && b === 33 ) {
  console.log('28 + 33 = 61')
} else
if (a === 28 && sign === "+" && b === 34 ) {
  console.log('28 + 34 = 62')
} else
if (a === 28 && sign === "+" && b === 35 ) {
  console.log('28 + 35 = 63')
} else
if (a === 28 && sign === "+" && b === 36 ) {
  console.log('28 + 36 = 64')
} else
if (a === 28 && sign === "+" && b === 37 ) {
  console.log('28 + 37 = 65')
} else
if (a === 28 && sign === "+" && b === 38 ) {
  console.log('28 + 38 = 66')
} else
if (a === 28 && sign === "+" && b === 39 ) {
  console.log('28 + 39 = 67')
} else
if (a === 28 && sign === "+" && b === 40 ) {
  console.log('28 + 40 = 68')
} else
if (a === 28 && sign === "+" && b === 41 ) {
  console.log('28 + 41 = 69')
} else
if (a === 28 && sign === "+" && b === 42 ) {
  console.log('28 + 42 = 70')
} else
if (a === 28 && sign === "+" && b === 43 ) {
  console.log('28 + 43 = 71')
} else
if (a === 28 && sign === "+" && b === 44 ) {
  console.log('28 + 44 = 72')
} else
if (a === 28 && sign === "+" && b === 45 ) {
  console.log('28 + 45 = 73')
} else
if (a === 28 && sign === "+" && b === 46 ) {
  console.log('28 + 46 = 74')
} else
if (a === 28 && sign === "+" && b === 47 ) {
  console.log('28 + 47 = 75')
} else
if (a === 28 && sign === "+" && b === 48 ) {
  console.log('28 + 48 = 76')
} else
if (a === 28 && sign === "+" && b === 49 ) {
  console.log('28 + 49 = 77')
} else
if (a === 28 && sign === "+" && b === 50 ) {
  console.log('28 + 50 = 78')
} else
if (a === 29 && sign === "+" && b === 1 ) {
  console.log('29 + 1 = 30')
} else
if (a === 29 && sign === "+" && b === 2 ) {
  console.log('29 + 2 = 31')
} else
if (a === 29 && sign === "+" && b === 3 ) {
  console.log('29 + 3 = 32')
} else
if (a === 29 && sign === "+" && b === 4 ) {
  console.log('29 + 4 = 33')
} else
if (a === 29 && sign === "+" && b === 5 ) {
  console.log('29 + 5 = 34')
} else
if (a === 29 && sign === "+" && b === 6 ) {
  console.log('29 + 6 = 35')
} else
if (a === 29 && sign === "+" && b === 7 ) {
  console.log('29 + 7 = 36')
} else
if (a === 29 && sign === "+" && b === 8 ) {
  console.log('29 + 8 = 37')
} else
if (a === 29 && sign === "+" && b === 9 ) {
  console.log('29 + 9 = 38')
} else
if (a === 29 && sign === "+" && b === 10 ) {
  console.log('29 + 10 = 39')
} else
if (a === 29 && sign === "+" && b === 11 ) {
  console.log('29 + 11 = 40')
} else
if (a === 29 && sign === "+" && b === 12 ) {
  console.log('29 + 12 = 41')
} else
if (a === 29 && sign === "+" && b === 13 ) {
  console.log('29 + 13 = 42')
} else
if (a === 29 && sign === "+" && b === 14 ) {
  console.log('29 + 14 = 43')
} else
if (a === 29 && sign === "+" && b === 15 ) {
  console.log('29 + 15 = 44')
} else
if (a === 29 && sign === "+" && b === 16 ) {
  console.log('29 + 16 = 45')
} else
if (a === 29 && sign === "+" && b === 17 ) {
  console.log('29 + 17 = 46')
} else
if (a === 29 && sign === "+" && b === 18 ) {
  console.log('29 + 18 = 47')
} else
if (a === 29 && sign === "+" && b === 19 ) {
  console.log('29 + 19 = 48')
} else
if (a === 29 && sign === "+" && b === 20 ) {
  console.log('29 + 20 = 49')
} else
if (a === 29 && sign === "+" && b === 21 ) {
  console.log('29 + 21 = 50')
} else
if (a === 29 && sign === "+" && b === 22 ) {
  console.log('29 + 22 = 51')
} else
if (a === 29 && sign === "+" && b === 23 ) {
  console.log('29 + 23 = 52')
} else
if (a === 29 && sign === "+" && b === 24 ) {
  console.log('29 + 24 = 53')
} else
if (a === 29 && sign === "+" && b === 25 ) {
  console.log('29 + 25 = 54')
} else
if (a === 29 && sign === "+" && b === 26 ) {
  console.log('29 + 26 = 55')
} else
if (a === 29 && sign === "+" && b === 27 ) {
  console.log('29 + 27 = 56')
} else
if (a === 29 && sign === "+" && b === 28 ) {
  console.log('29 + 28 = 57')
} else
if (a === 29 && sign === "+" && b === 29 ) {
  console.log('29 + 29 = 58')
} else
if (a === 29 && sign === "+" && b === 30 ) {
  console.log('29 + 30 = 59')
} else
if (a === 29 && sign === "+" && b === 31 ) {
  console.log('29 + 31 = 60')
} else
if (a === 29 && sign === "+" && b === 32 ) {
  console.log('29 + 32 = 61')
} else
if (a === 29 && sign === "+" && b === 33 ) {
  console.log('29 + 33 = 62')
} else
if (a === 29 && sign === "+" && b === 34 ) {
  console.log('29 + 34 = 63')
} else
if (a === 29 && sign === "+" && b === 35 ) {
  console.log('29 + 35 = 64')
} else
if (a === 29 && sign === "+" && b === 36 ) {
  console.log('29 + 36 = 65')
} else
if (a === 29 && sign === "+" && b === 37 ) {
  console.log('29 + 37 = 66')
} else
if (a === 29 && sign === "+" && b === 38 ) {
  console.log('29 + 38 = 67')
} else
if (a === 29 && sign === "+" && b === 39 ) {
  console.log('29 + 39 = 68')
} else
if (a === 29 && sign === "+" && b === 40 ) {
  console.log('29 + 40 = 69')
} else
if (a === 29 && sign === "+" && b === 41 ) {
  console.log('29 + 41 = 70')
} else
if (a === 29 && sign === "+" && b === 42 ) {
  console.log('29 + 42 = 71')
} else
if (a === 29 && sign === "+" && b === 43 ) {
  console.log('29 + 43 = 72')
} else
if (a === 29 && sign === "+" && b === 44 ) {
  console.log('29 + 44 = 73')
} else
if (a === 29 && sign === "+" && b === 45 ) {
  console.log('29 + 45 = 74')
} else
if (a === 29 && sign === "+" && b === 46 ) {
  console.log('29 + 46 = 75')
} else
if (a === 29 && sign === "+" && b === 47 ) {
  console.log('29 + 47 = 76')
} else
if (a === 29 && sign === "+" && b === 48 ) {
  console.log('29 + 48 = 77')
} else
if (a === 29 && sign === "+" && b === 49 ) {
  console.log('29 + 49 = 78')
} else
if (a === 29 && sign === "+" && b === 50 ) {
  console.log('29 + 50 = 79')
} else
if (a === 30 && sign === "+" && b === 1 ) {
  console.log('30 + 1 = 31')
} else
if (a === 30 && sign === "+" && b === 2 ) {
  console.log('30 + 2 = 32')
} else
if (a === 30 && sign === "+" && b === 3 ) {
  console.log('30 + 3 = 33')
} else
if (a === 30 && sign === "+" && b === 4 ) {
  console.log('30 + 4 = 34')
} else
if (a === 30 && sign === "+" && b === 5 ) {
  console.log('30 + 5 = 35')
} else
if (a === 30 && sign === "+" && b === 6 ) {
  console.log('30 + 6 = 36')
} else
if (a === 30 && sign === "+" && b === 7 ) {
  console.log('30 + 7 = 37')
} else
if (a === 30 && sign === "+" && b === 8 ) {
  console.log('30 + 8 = 38')
} else
if (a === 30 && sign === "+" && b === 9 ) {
  console.log('30 + 9 = 39')
} else
if (a === 30 && sign === "+" && b === 10 ) {
  console.log('30 + 10 = 40')
} else
if (a === 30 && sign === "+" && b === 11 ) {
  console.log('30 + 11 = 41')
} else
if (a === 30 && sign === "+" && b === 12 ) {
  console.log('30 + 12 = 42')
} else
if (a === 30 && sign === "+" && b === 13 ) {
  console.log('30 + 13 = 43')
} else
if (a === 30 && sign === "+" && b === 14 ) {
  console.log('30 + 14 = 44')
} else
if (a === 30 && sign === "+" && b === 15 ) {
  console.log('30 + 15 = 45')
} else
if (a === 30 && sign === "+" && b === 16 ) {
  console.log('30 + 16 = 46')
} else
if (a === 30 && sign === "+" && b === 17 ) {
  console.log('30 + 17 = 47')
} else
if (a === 30 && sign === "+" && b === 18 ) {
  console.log('30 + 18 = 48')
} else
if (a === 30 && sign === "+" && b === 19 ) {
  console.log('30 + 19 = 49')
} else
if (a === 30 && sign === "+" && b === 20 ) {
  console.log('30 + 20 = 50')
} else
if (a === 30 && sign === "+" && b === 21 ) {
  console.log('30 + 21 = 51')
} else
if (a === 30 && sign === "+" && b === 22 ) {
  console.log('30 + 22 = 52')
} else
if (a === 30 && sign === "+" && b === 23 ) {
  console.log('30 + 23 = 53')
} else
if (a === 30 && sign === "+" && b === 24 ) {
  console.log('30 + 24 = 54')
} else
if (a === 30 && sign === "+" && b === 25 ) {
  console.log('30 + 25 = 55')
} else
if (a === 30 && sign === "+" && b === 26 ) {
  console.log('30 + 26 = 56')
} else
if (a === 30 && sign === "+" && b === 27 ) {
  console.log('30 + 27 = 57')
} else
if (a === 30 && sign === "+" && b === 28 ) {
  console.log('30 + 28 = 58')
} else
if (a === 30 && sign === "+" && b === 29 ) {
  console.log('30 + 29 = 59')
} else
if (a === 30 && sign === "+" && b === 30 ) {
  console.log('30 + 30 = 60')
} else
if (a === 30 && sign === "+" && b === 31 ) {
  console.log('30 + 31 = 61')
} else
if (a === 30 && sign === "+" && b === 32 ) {
  console.log('30 + 32 = 62')
} else
if (a === 30 && sign === "+" && b === 33 ) {
  console.log('30 + 33 = 63')
} else
if (a === 30 && sign === "+" && b === 34 ) {
  console.log('30 + 34 = 64')
} else
if (a === 30 && sign === "+" && b === 35 ) {
  console.log('30 + 35 = 65')
} else
if (a === 30 && sign === "+" && b === 36 ) {
  console.log('30 + 36 = 66')
} else
if (a === 30 && sign === "+" && b === 37 ) {
  console.log('30 + 37 = 67')
} else
if (a === 30 && sign === "+" && b === 38 ) {
  console.log('30 + 38 = 68')
} else
if (a === 30 && sign === "+" && b === 39 ) {
  console.log('30 + 39 = 69')
} else
if (a === 30 && sign === "+" && b === 40 ) {
  console.log('30 + 40 = 70')
} else
if (a === 30 && sign === "+" && b === 41 ) {
  console.log('30 + 41 = 71')
} else
if (a === 30 && sign === "+" && b === 42 ) {
  console.log('30 + 42 = 72')
} else
if (a === 30 && sign === "+" && b === 43 ) {
  console.log('30 + 43 = 73')
} else
if (a === 30 && sign === "+" && b === 44 ) {
  console.log('30 + 44 = 74')
} else
if (a === 30 && sign === "+" && b === 45 ) {
  console.log('30 + 45 = 75')
} else
if (a === 30 && sign === "+" && b === 46 ) {
  console.log('30 + 46 = 76')
} else
if (a === 30 && sign === "+" && b === 47 ) {
  console.log('30 + 47 = 77')
} else
if (a === 30 && sign === "+" && b === 48 ) {
  console.log('30 + 48 = 78')
} else
if (a === 30 && sign === "+" && b === 49 ) {
  console.log('30 + 49 = 79')
} else
if (a === 30 && sign === "+" && b === 50 ) {
  console.log('30 + 50 = 80')
} else
if (a === 31 && sign === "+" && b === 1 ) {
  console.log('31 + 1 = 32')
} else
if (a === 31 && sign === "+" && b === 2 ) {
  console.log('31 + 2 = 33')
} else
if (a === 31 && sign === "+" && b === 3 ) {
  console.log('31 + 3 = 34')
} else
if (a === 31 && sign === "+" && b === 4 ) {
  console.log('31 + 4 = 35')
} else
if (a === 31 && sign === "+" && b === 5 ) {
  console.log('31 + 5 = 36')
} else
if (a === 31 && sign === "+" && b === 6 ) {
  console.log('31 + 6 = 37')
} else
if (a === 31 && sign === "+" && b === 7 ) {
  console.log('31 + 7 = 38')
} else
if (a === 31 && sign === "+" && b === 8 ) {
  console.log('31 + 8 = 39')
} else
if (a === 31 && sign === "+" && b === 9 ) {
  console.log('31 + 9 = 40')
} else
if (a === 31 && sign === "+" && b === 10 ) {
  console.log('31 + 10 = 41')
} else
if (a === 31 && sign === "+" && b === 11 ) {
  console.log('31 + 11 = 42')
} else
if (a === 31 && sign === "+" && b === 12 ) {
  console.log('31 + 12 = 43')
} else
if (a === 31 && sign === "+" && b === 13 ) {
  console.log('31 + 13 = 44')
} else
if (a === 31 && sign === "+" && b === 14 ) {
  console.log('31 + 14 = 45')
} else
if (a === 31 && sign === "+" && b === 15 ) {
  console.log('31 + 15 = 46')
} else
if (a === 31 && sign === "+" && b === 16 ) {
  console.log('31 + 16 = 47')
} else
if (a === 31 && sign === "+" && b === 17 ) {
  console.log('31 + 17 = 48')
} else
if (a === 31 && sign === "+" && b === 18 ) {
  console.log('31 + 18 = 49')
} else
if (a === 31 && sign === "+" && b === 19 ) {
  console.log('31 + 19 = 50')
} else
if (a === 31 && sign === "+" && b === 20 ) {
  console.log('31 + 20 = 51')
} else
if (a === 31 && sign === "+" && b === 21 ) {
  console.log('31 + 21 = 52')
} else
if (a === 31 && sign === "+" && b === 22 ) {
  console.log('31 + 22 = 53')
} else
if (a === 31 && sign === "+" && b === 23 ) {
  console.log('31 + 23 = 54')
} else
if (a === 31 && sign === "+" && b === 24 ) {
  console.log('31 + 24 = 55')
} else
if (a === 31 && sign === "+" && b === 25 ) {
  console.log('31 + 25 = 56')
} else
if (a === 31 && sign === "+" && b === 26 ) {
  console.log('31 + 26 = 57')
} else
if (a === 31 && sign === "+" && b === 27 ) {
  console.log('31 + 27 = 58')
} else
if (a === 31 && sign === "+" && b === 28 ) {
  console.log('31 + 28 = 59')
} else
if (a === 31 && sign === "+" && b === 29 ) {
  console.log('31 + 29 = 60')
} else
if (a === 31 && sign === "+" && b === 30 ) {
  console.log('31 + 30 = 61')
} else
if (a === 31 && sign === "+" && b === 31 ) {
  console.log('31 + 31 = 62')
} else
if (a === 31 && sign === "+" && b === 32 ) {
  console.log('31 + 32 = 63')
} else
if (a === 31 && sign === "+" && b === 33 ) {
  console.log('31 + 33 = 64')
} else
if (a === 31 && sign === "+" && b === 34 ) {
  console.log('31 + 34 = 65')
} else
if (a === 31 && sign === "+" && b === 35 ) {
  console.log('31 + 35 = 66')
} else
if (a === 31 && sign === "+" && b === 36 ) {
  console.log('31 + 36 = 67')
} else
if (a === 31 && sign === "+" && b === 37 ) {
  console.log('31 + 37 = 68')
} else
if (a === 31 && sign === "+" && b === 38 ) {
  console.log('31 + 38 = 69')
} else
if (a === 31 && sign === "+" && b === 39 ) {
  console.log('31 + 39 = 70')
} else
if (a === 31 && sign === "+" && b === 40 ) {
  console.log('31 + 40 = 71')
} else
if (a === 31 && sign === "+" && b === 41 ) {
  console.log('31 + 41 = 72')
} else
if (a === 31 && sign === "+" && b === 42 ) {
  console.log('31 + 42 = 73')
} else
if (a === 31 && sign === "+" && b === 43 ) {
  console.log('31 + 43 = 74')
} else
if (a === 31 && sign === "+" && b === 44 ) {
  console.log('31 + 44 = 75')
} else
if (a === 31 && sign === "+" && b === 45 ) {
  console.log('31 + 45 = 76')
} else
if (a === 31 && sign === "+" && b === 46 ) {
  console.log('31 + 46 = 77')
} else
if (a === 31 && sign === "+" && b === 47 ) {
  console.log('31 + 47 = 78')
} else
if (a === 31 && sign === "+" && b === 48 ) {
  console.log('31 + 48 = 79')
} else
if (a === 31 && sign === "+" && b === 49 ) {
  console.log('31 + 49 = 80')
} else
if (a === 31 && sign === "+" && b === 50 ) {
  console.log('31 + 50 = 81')
} else
if (a === 32 && sign === "+" && b === 1 ) {
  console.log('32 + 1 = 33')
} else
if (a === 32 && sign === "+" && b === 2 ) {
  console.log('32 + 2 = 34')
} else
if (a === 32 && sign === "+" && b === 3 ) {
  console.log('32 + 3 = 35')
} else
if (a === 32 && sign === "+" && b === 4 ) {
  console.log('32 + 4 = 36')
} else
if (a === 32 && sign === "+" && b === 5 ) {
  console.log('32 + 5 = 37')
} else
if (a === 32 && sign === "+" && b === 6 ) {
  console.log('32 + 6 = 38')
} else
if (a === 32 && sign === "+" && b === 7 ) {
  console.log('32 + 7 = 39')
} else
if (a === 32 && sign === "+" && b === 8 ) {
  console.log('32 + 8 = 40')
} else
if (a === 32 && sign === "+" && b === 9 ) {
  console.log('32 + 9 = 41')
} else
if (a === 32 && sign === "+" && b === 10 ) {
  console.log('32 + 10 = 42')
} else
if (a === 32 && sign === "+" && b === 11 ) {
  console.log('32 + 11 = 43')
} else
if (a === 32 && sign === "+" && b === 12 ) {
  console.log('32 + 12 = 44')
} else
if (a === 32 && sign === "+" && b === 13 ) {
  console.log('32 + 13 = 45')
} else
if (a === 32 && sign === "+" && b === 14 ) {
  console.log('32 + 14 = 46')
} else
if (a === 32 && sign === "+" && b === 15 ) {
  console.log('32 + 15 = 47')
} else
if (a === 32 && sign === "+" && b === 16 ) {
  console.log('32 + 16 = 48')
} else
if (a === 32 && sign === "+" && b === 17 ) {
  console.log('32 + 17 = 49')
} else
if (a === 32 && sign === "+" && b === 18 ) {
  console.log('32 + 18 = 50')
} else
if (a === 32 && sign === "+" && b === 19 ) {
  console.log('32 + 19 = 51')
} else
if (a === 32 && sign === "+" && b === 20 ) {
  console.log('32 + 20 = 52')
} else
if (a === 32 && sign === "+" && b === 21 ) {
  console.log('32 + 21 = 53')
} else
if (a === 32 && sign === "+" && b === 22 ) {
  console.log('32 + 22 = 54')
} else
if (a === 32 && sign === "+" && b === 23 ) {
  console.log('32 + 23 = 55')
} else
if (a === 32 && sign === "+" && b === 24 ) {
  console.log('32 + 24 = 56')
} else
if (a === 32 && sign === "+" && b === 25 ) {
  console.log('32 + 25 = 57')
} else
if (a === 32 && sign === "+" && b === 26 ) {
  console.log('32 + 26 = 58')
} else
if (a === 32 && sign === "+" && b === 27 ) {
  console.log('32 + 27 = 59')
} else
if (a === 32 && sign === "+" && b === 28 ) {
  console.log('32 + 28 = 60')
} else
if (a === 32 && sign === "+" && b === 29 ) {
  console.log('32 + 29 = 61')
} else
if (a === 32 && sign === "+" && b === 30 ) {
  console.log('32 + 30 = 62')
} else
if (a === 32 && sign === "+" && b === 31 ) {
  console.log('32 + 31 = 63')
} else
if (a === 32 && sign === "+" && b === 32 ) {
  console.log('32 + 32 = 64')
} else
if (a === 32 && sign === "+" && b === 33 ) {
  console.log('32 + 33 = 65')
} else
if (a === 32 && sign === "+" && b === 34 ) {
  console.log('32 + 34 = 66')
} else
if (a === 32 && sign === "+" && b === 35 ) {
  console.log('32 + 35 = 67')
} else
if (a === 32 && sign === "+" && b === 36 ) {
  console.log('32 + 36 = 68')
} else
if (a === 32 && sign === "+" && b === 37 ) {
  console.log('32 + 37 = 69')
} else
if (a === 32 && sign === "+" && b === 38 ) {
  console.log('32 + 38 = 70')
} else
if (a === 32 && sign === "+" && b === 39 ) {
  console.log('32 + 39 = 71')
} else
if (a === 32 && sign === "+" && b === 40 ) {
  console.log('32 + 40 = 72')
} else
if (a === 32 && sign === "+" && b === 41 ) {
  console.log('32 + 41 = 73')
} else
if (a === 32 && sign === "+" && b === 42 ) {
  console.log('32 + 42 = 74')
} else
if (a === 32 && sign === "+" && b === 43 ) {
  console.log('32 + 43 = 75')
} else
if (a === 32 && sign === "+" && b === 44 ) {
  console.log('32 + 44 = 76')
} else
if (a === 32 && sign === "+" && b === 45 ) {
  console.log('32 + 45 = 77')
} else
if (a === 32 && sign === "+" && b === 46 ) {
  console.log('32 + 46 = 78')
} else
if (a === 32 && sign === "+" && b === 47 ) {
  console.log('32 + 47 = 79')
} else
if (a === 32 && sign === "+" && b === 48 ) {
  console.log('32 + 48 = 80')
} else
if (a === 32 && sign === "+" && b === 49 ) {
  console.log('32 + 49 = 81')
} else
if (a === 32 && sign === "+" && b === 50 ) {
  console.log('32 + 50 = 82')
} else
if (a === 33 && sign === "+" && b === 1 ) {
  console.log('33 + 1 = 34')
} else
if (a === 33 && sign === "+" && b === 2 ) {
  console.log('33 + 2 = 35')
} else
if (a === 33 && sign === "+" && b === 3 ) {
  console.log('33 + 3 = 36')
} else
if (a === 33 && sign === "+" && b === 4 ) {
  console.log('33 + 4 = 37')
} else
if (a === 33 && sign === "+" && b === 5 ) {
  console.log('33 + 5 = 38')
} else
if (a === 33 && sign === "+" && b === 6 ) {
  console.log('33 + 6 = 39')
} else
if (a === 33 && sign === "+" && b === 7 ) {
  console.log('33 + 7 = 40')
} else
if (a === 33 && sign === "+" && b === 8 ) {
  console.log('33 + 8 = 41')
} else
if (a === 33 && sign === "+" && b === 9 ) {
  console.log('33 + 9 = 42')
} else
if (a === 33 && sign === "+" && b === 10 ) {
  console.log('33 + 10 = 43')
} else
if (a === 33 && sign === "+" && b === 11 ) {
  console.log('33 + 11 = 44')
} else
if (a === 33 && sign === "+" && b === 12 ) {
  console.log('33 + 12 = 45')
} else
if (a === 33 && sign === "+" && b === 13 ) {
  console.log('33 + 13 = 46')
} else
if (a === 33 && sign === "+" && b === 14 ) {
  console.log('33 + 14 = 47')
} else
if (a === 33 && sign === "+" && b === 15 ) {
  console.log('33 + 15 = 48')
} else
if (a === 33 && sign === "+" && b === 16 ) {
  console.log('33 + 16 = 49')
} else
if (a === 33 && sign === "+" && b === 17 ) {
  console.log('33 + 17 = 50')
} else
if (a === 33 && sign === "+" && b === 18 ) {
  console.log('33 + 18 = 51')
} else
if (a === 33 && sign === "+" && b === 19 ) {
  console.log('33 + 19 = 52')
} else
if (a === 33 && sign === "+" && b === 20 ) {
  console.log('33 + 20 = 53')
} else
if (a === 33 && sign === "+" && b === 21 ) {
  console.log('33 + 21 = 54')
} else
if (a === 33 && sign === "+" && b === 22 ) {
  console.log('33 + 22 = 55')
} else
if (a === 33 && sign === "+" && b === 23 ) {
  console.log('33 + 23 = 56')
} else
if (a === 33 && sign === "+" && b === 24 ) {
  console.log('33 + 24 = 57')
} else
if (a === 33 && sign === "+" && b === 25 ) {
  console.log('33 + 25 = 58')
} else
if (a === 33 && sign === "+" && b === 26 ) {
  console.log('33 + 26 = 59')
} else
if (a === 33 && sign === "+" && b === 27 ) {
  console.log('33 + 27 = 60')
} else
if (a === 33 && sign === "+" && b === 28 ) {
  console.log('33 + 28 = 61')
} else
if (a === 33 && sign === "+" && b === 29 ) {
  console.log('33 + 29 = 62')
} else
if (a === 33 && sign === "+" && b === 30 ) {
  console.log('33 + 30 = 63')
} else
if (a === 33 && sign === "+" && b === 31 ) {
  console.log('33 + 31 = 64')
} else
if (a === 33 && sign === "+" && b === 32 ) {
  console.log('33 + 32 = 65')
} else
if (a === 33 && sign === "+" && b === 33 ) {
  console.log('33 + 33 = 66')
} else
if (a === 33 && sign === "+" && b === 34 ) {
  console.log('33 + 34 = 67')
} else
if (a === 33 && sign === "+" && b === 35 ) {
  console.log('33 + 35 = 68')
} else
if (a === 33 && sign === "+" && b === 36 ) {
  console.log('33 + 36 = 69')
} else
if (a === 33 && sign === "+" && b === 37 ) {
  console.log('33 + 37 = 70')
} else
if (a === 33 && sign === "+" && b === 38 ) {
  console.log('33 + 38 = 71')
} else
if (a === 33 && sign === "+" && b === 39 ) {
  console.log('33 + 39 = 72')
} else
if (a === 33 && sign === "+" && b === 40 ) {
  console.log('33 + 40 = 73')
} else
if (a === 33 && sign === "+" && b === 41 ) {
  console.log('33 + 41 = 74')
} else
if (a === 33 && sign === "+" && b === 42 ) {
  console.log('33 + 42 = 75')
} else
if (a === 33 && sign === "+" && b === 43 ) {
  console.log('33 + 43 = 76')
} else
if (a === 33 && sign === "+" && b === 44 ) {
  console.log('33 + 44 = 77')
} else
if (a === 33 && sign === "+" && b === 45 ) {
  console.log('33 + 45 = 78')
} else
if (a === 33 && sign === "+" && b === 46 ) {
  console.log('33 + 46 = 79')
} else
if (a === 33 && sign === "+" && b === 47 ) {
  console.log('33 + 47 = 80')
} else
if (a === 33 && sign === "+" && b === 48 ) {
  console.log('33 + 48 = 81')
} else
if (a === 33 && sign === "+" && b === 49 ) {
  console.log('33 + 49 = 82')
} else
if (a === 33 && sign === "+" && b === 50 ) {
  console.log('33 + 50 = 83')
} else
if (a === 34 && sign === "+" && b === 1 ) {
  console.log('34 + 1 = 35')
} else
if (a === 34 && sign === "+" && b === 2 ) {
  console.log('34 + 2 = 36')
} else
if (a === 34 && sign === "+" && b === 3 ) {
  console.log('34 + 3 = 37')
} else
if (a === 34 && sign === "+" && b === 4 ) {
  console.log('34 + 4 = 38')
} else
if (a === 34 && sign === "+" && b === 5 ) {
  console.log('34 + 5 = 39')
} else
if (a === 34 && sign === "+" && b === 6 ) {
  console.log('34 + 6 = 40')
} else
if (a === 34 && sign === "+" && b === 7 ) {
  console.log('34 + 7 = 41')
} else
if (a === 34 && sign === "+" && b === 8 ) {
  console.log('34 + 8 = 42')
} else
if (a === 34 && sign === "+" && b === 9 ) {
  console.log('34 + 9 = 43')
} else
if (a === 34 && sign === "+" && b === 10 ) {
  console.log('34 + 10 = 44')
} else
if (a === 34 && sign === "+" && b === 11 ) {
  console.log('34 + 11 = 45')
} else
if (a === 34 && sign === "+" && b === 12 ) {
  console.log('34 + 12 = 46')
} else
if (a === 34 && sign === "+" && b === 13 ) {
  console.log('34 + 13 = 47')
} else
if (a === 34 && sign === "+" && b === 14 ) {
  console.log('34 + 14 = 48')
} else
if (a === 34 && sign === "+" && b === 15 ) {
  console.log('34 + 15 = 49')
} else
if (a === 34 && sign === "+" && b === 16 ) {
  console.log('34 + 16 = 50')
} else
if (a === 34 && sign === "+" && b === 17 ) {
  console.log('34 + 17 = 51')
} else
if (a === 34 && sign === "+" && b === 18 ) {
  console.log('34 + 18 = 52')
} else
if (a === 34 && sign === "+" && b === 19 ) {
  console.log('34 + 19 = 53')
} else
if (a === 34 && sign === "+" && b === 20 ) {
  console.log('34 + 20 = 54')
} else
if (a === 34 && sign === "+" && b === 21 ) {
  console.log('34 + 21 = 55')
} else
if (a === 34 && sign === "+" && b === 22 ) {
  console.log('34 + 22 = 56')
} else
if (a === 34 && sign === "+" && b === 23 ) {
  console.log('34 + 23 = 57')
} else
if (a === 34 && sign === "+" && b === 24 ) {
  console.log('34 + 24 = 58')
} else
if (a === 34 && sign === "+" && b === 25 ) {
  console.log('34 + 25 = 59')
} else
if (a === 34 && sign === "+" && b === 26 ) {
  console.log('34 + 26 = 60')
} else
if (a === 34 && sign === "+" && b === 27 ) {
  console.log('34 + 27 = 61')
} else
if (a === 34 && sign === "+" && b === 28 ) {
  console.log('34 + 28 = 62')
} else
if (a === 34 && sign === "+" && b === 29 ) {
  console.log('34 + 29 = 63')
} else
if (a === 34 && sign === "+" && b === 30 ) {
  console.log('34 + 30 = 64')
} else
if (a === 34 && sign === "+" && b === 31 ) {
  console.log('34 + 31 = 65')
} else
if (a === 34 && sign === "+" && b === 32 ) {
  console.log('34 + 32 = 66')
} else
if (a === 34 && sign === "+" && b === 33 ) {
  console.log('34 + 33 = 67')
} else
if (a === 34 && sign === "+" && b === 34 ) {
  console.log('34 + 34 = 68')
} else
if (a === 34 && sign === "+" && b === 35 ) {
  console.log('34 + 35 = 69')
} else
if (a === 34 && sign === "+" && b === 36 ) {
  console.log('34 + 36 = 70')
} else
if (a === 34 && sign === "+" && b === 37 ) {
  console.log('34 + 37 = 71')
} else
if (a === 34 && sign === "+" && b === 38 ) {
  console.log('34 + 38 = 72')
} else
if (a === 34 && sign === "+" && b === 39 ) {
  console.log('34 + 39 = 73')
} else
if (a === 34 && sign === "+" && b === 40 ) {
  console.log('34 + 40 = 74')
} else
if (a === 34 && sign === "+" && b === 41 ) {
  console.log('34 + 41 = 75')
} else
if (a === 34 && sign === "+" && b === 42 ) {
  console.log('34 + 42 = 76')
} else
if (a === 34 && sign === "+" && b === 43 ) {
  console.log('34 + 43 = 77')
} else
if (a === 34 && sign === "+" && b === 44 ) {
  console.log('34 + 44 = 78')
} else
if (a === 34 && sign === "+" && b === 45 ) {
  console.log('34 + 45 = 79')
} else
if (a === 34 && sign === "+" && b === 46 ) {
  console.log('34 + 46 = 80')
} else
if (a === 34 && sign === "+" && b === 47 ) {
  console.log('34 + 47 = 81')
} else
if (a === 34 && sign === "+" && b === 48 ) {
  console.log('34 + 48 = 82')
} else
if (a === 34 && sign === "+" && b === 49 ) {
  console.log('34 + 49 = 83')
} else
if (a === 34 && sign === "+" && b === 50 ) {
  console.log('34 + 50 = 84')
} else
if (a === 35 && sign === "+" && b === 1 ) {
  console.log('35 + 1 = 36')
} else
if (a === 35 && sign === "+" && b === 2 ) {
  console.log('35 + 2 = 37')
} else
if (a === 35 && sign === "+" && b === 3 ) {
  console.log('35 + 3 = 38')
} else
if (a === 35 && sign === "+" && b === 4 ) {
  console.log('35 + 4 = 39')
} else
if (a === 35 && sign === "+" && b === 5 ) {
  console.log('35 + 5 = 40')
} else
if (a === 35 && sign === "+" && b === 6 ) {
  console.log('35 + 6 = 41')
} else
if (a === 35 && sign === "+" && b === 7 ) {
  console.log('35 + 7 = 42')
} else
if (a === 35 && sign === "+" && b === 8 ) {
  console.log('35 + 8 = 43')
} else
if (a === 35 && sign === "+" && b === 9 ) {
  console.log('35 + 9 = 44')
} else
if (a === 35 && sign === "+" && b === 10 ) {
  console.log('35 + 10 = 45')
} else
if (a === 35 && sign === "+" && b === 11 ) {
  console.log('35 + 11 = 46')
} else
if (a === 35 && sign === "+" && b === 12 ) {
  console.log('35 + 12 = 47')
} else
if (a === 35 && sign === "+" && b === 13 ) {
  console.log('35 + 13 = 48')
} else
if (a === 35 && sign === "+" && b === 14 ) {
  console.log('35 + 14 = 49')
} else
if (a === 35 && sign === "+" && b === 15 ) {
  console.log('35 + 15 = 50')
} else
if (a === 35 && sign === "+" && b === 16 ) {
  console.log('35 + 16 = 51')
} else
if (a === 35 && sign === "+" && b === 17 ) {
  console.log('35 + 17 = 52')
} else
if (a === 35 && sign === "+" && b === 18 ) {
  console.log('35 + 18 = 53')
} else
if (a === 35 && sign === "+" && b === 19 ) {
  console.log('35 + 19 = 54')
} else
if (a === 35 && sign === "+" && b === 20 ) {
  console.log('35 + 20 = 55')
} else
if (a === 35 && sign === "+" && b === 21 ) {
  console.log('35 + 21 = 56')
} else
if (a === 35 && sign === "+" && b === 22 ) {
  console.log('35 + 22 = 57')
} else
if (a === 35 && sign === "+" && b === 23 ) {
  console.log('35 + 23 = 58')
} else
if (a === 35 && sign === "+" && b === 24 ) {
  console.log('35 + 24 = 59')
} else
if (a === 35 && sign === "+" && b === 25 ) {
  console.log('35 + 25 = 60')
} else
if (a === 35 && sign === "+" && b === 26 ) {
  console.log('35 + 26 = 61')
} else
if (a === 35 && sign === "+" && b === 27 ) {
  console.log('35 + 27 = 62')
} else
if (a === 35 && sign === "+" && b === 28 ) {
  console.log('35 + 28 = 63')
} else
if (a === 35 && sign === "+" && b === 29 ) {
  console.log('35 + 29 = 64')
} else
if (a === 35 && sign === "+" && b === 30 ) {
  console.log('35 + 30 = 65')
} else
if (a === 35 && sign === "+" && b === 31 ) {
  console.log('35 + 31 = 66')
} else
if (a === 35 && sign === "+" && b === 32 ) {
  console.log('35 + 32 = 67')
} else
if (a === 35 && sign === "+" && b === 33 ) {
  console.log('35 + 33 = 68')
} else
if (a === 35 && sign === "+" && b === 34 ) {
  console.log('35 + 34 = 69')
} else
if (a === 35 && sign === "+" && b === 35 ) {
  console.log('35 + 35 = 70')
} else
if (a === 35 && sign === "+" && b === 36 ) {
  console.log('35 + 36 = 71')
} else
if (a === 35 && sign === "+" && b === 37 ) {
  console.log('35 + 37 = 72')
} else
if (a === 35 && sign === "+" && b === 38 ) {
  console.log('35 + 38 = 73')
} else
if (a === 35 && sign === "+" && b === 39 ) {
  console.log('35 + 39 = 74')
} else
if (a === 35 && sign === "+" && b === 40 ) {
  console.log('35 + 40 = 75')
} else
if (a === 35 && sign === "+" && b === 41 ) {
  console.log('35 + 41 = 76')
} else
if (a === 35 && sign === "+" && b === 42 ) {
  console.log('35 + 42 = 77')
} else
if (a === 35 && sign === "+" && b === 43 ) {
  console.log('35 + 43 = 78')
} else
if (a === 35 && sign === "+" && b === 44 ) {
  console.log('35 + 44 = 79')
} else
if (a === 35 && sign === "+" && b === 45 ) {
  console.log('35 + 45 = 80')
} else
if (a === 35 && sign === "+" && b === 46 ) {
  console.log('35 + 46 = 81')
} else
if (a === 35 && sign === "+" && b === 47 ) {
  console.log('35 + 47 = 82')
} else
if (a === 35 && sign === "+" && b === 48 ) {
  console.log('35 + 48 = 83')
} else
if (a === 35 && sign === "+" && b === 49 ) {
  console.log('35 + 49 = 84')
} else
if (a === 35 && sign === "+" && b === 50 ) {
  console.log('35 + 50 = 85')
} else
if (a === 36 && sign === "+" && b === 1 ) {
  console.log('36 + 1 = 37')
} else
if (a === 36 && sign === "+" && b === 2 ) {
  console.log('36 + 2 = 38')
} else
if (a === 36 && sign === "+" && b === 3 ) {
  console.log('36 + 3 = 39')
} else
if (a === 36 && sign === "+" && b === 4 ) {
  console.log('36 + 4 = 40')
} else
if (a === 36 && sign === "+" && b === 5 ) {
  console.log('36 + 5 = 41')
} else
if (a === 36 && sign === "+" && b === 6 ) {
  console.log('36 + 6 = 42')
} else
if (a === 36 && sign === "+" && b === 7 ) {
  console.log('36 + 7 = 43')
} else
if (a === 36 && sign === "+" && b === 8 ) {
  console.log('36 + 8 = 44')
} else
if (a === 36 && sign === "+" && b === 9 ) {
  console.log('36 + 9 = 45')
} else
if (a === 36 && sign === "+" && b === 10 ) {
  console.log('36 + 10 = 46')
} else
if (a === 36 && sign === "+" && b === 11 ) {
  console.log('36 + 11 = 47')
} else
if (a === 36 && sign === "+" && b === 12 ) {
  console.log('36 + 12 = 48')
} else
if (a === 36 && sign === "+" && b === 13 ) {
  console.log('36 + 13 = 49')
} else
if (a === 36 && sign === "+" && b === 14 ) {
  console.log('36 + 14 = 50')
} else
if (a === 36 && sign === "+" && b === 15 ) {
  console.log('36 + 15 = 51')
} else
if (a === 36 && sign === "+" && b === 16 ) {
  console.log('36 + 16 = 52')
} else
if (a === 36 && sign === "+" && b === 17 ) {
  console.log('36 + 17 = 53')
} else
if (a === 36 && sign === "+" && b === 18 ) {
  console.log('36 + 18 = 54')
} else
if (a === 36 && sign === "+" && b === 19 ) {
  console.log('36 + 19 = 55')
} else
if (a === 36 && sign === "+" && b === 20 ) {
  console.log('36 + 20 = 56')
} else
if (a === 36 && sign === "+" && b === 21 ) {
  console.log('36 + 21 = 57')
} else
if (a === 36 && sign === "+" && b === 22 ) {
  console.log('36 + 22 = 58')
} else
if (a === 36 && sign === "+" && b === 23 ) {
  console.log('36 + 23 = 59')
} else
if (a === 36 && sign === "+" && b === 24 ) {
  console.log('36 + 24 = 60')
} else
if (a === 36 && sign === "+" && b === 25 ) {
  console.log('36 + 25 = 61')
} else
if (a === 36 && sign === "+" && b === 26 ) {
  console.log('36 + 26 = 62')
} else
if (a === 36 && sign === "+" && b === 27 ) {
  console.log('36 + 27 = 63')
} else
if (a === 36 && sign === "+" && b === 28 ) {
  console.log('36 + 28 = 64')
} else
if (a === 36 && sign === "+" && b === 29 ) {
  console.log('36 + 29 = 65')
} else
if (a === 36 && sign === "+" && b === 30 ) {
  console.log('36 + 30 = 66')
} else
if (a === 36 && sign === "+" && b === 31 ) {
  console.log('36 + 31 = 67')
} else
if (a === 36 && sign === "+" && b === 32 ) {
  console.log('36 + 32 = 68')
} else
if (a === 36 && sign === "+" && b === 33 ) {
  console.log('36 + 33 = 69')
} else
if (a === 36 && sign === "+" && b === 34 ) {
  console.log('36 + 34 = 70')
} else
if (a === 36 && sign === "+" && b === 35 ) {
  console.log('36 + 35 = 71')
} else
if (a === 36 && sign === "+" && b === 36 ) {
  console.log('36 + 36 = 72')
} else
if (a === 36 && sign === "+" && b === 37 ) {
  console.log('36 + 37 = 73')
} else
if (a === 36 && sign === "+" && b === 38 ) {
  console.log('36 + 38 = 74')
} else
if (a === 36 && sign === "+" && b === 39 ) {
  console.log('36 + 39 = 75')
} else
if (a === 36 && sign === "+" && b === 40 ) {
  console.log('36 + 40 = 76')
} else
if (a === 36 && sign === "+" && b === 41 ) {
  console.log('36 + 41 = 77')
} else
if (a === 36 && sign === "+" && b === 42 ) {
  console.log('36 + 42 = 78')
} else
if (a === 36 && sign === "+" && b === 43 ) {
  console.log('36 + 43 = 79')
} else
if (a === 36 && sign === "+" && b === 44 ) {
  console.log('36 + 44 = 80')
} else
if (a === 36 && sign === "+" && b === 45 ) {
  console.log('36 + 45 = 81')
} else
if (a === 36 && sign === "+" && b === 46 ) {
  console.log('36 + 46 = 82')
} else
if (a === 36 && sign === "+" && b === 47 ) {
  console.log('36 + 47 = 83')
} else
if (a === 36 && sign === "+" && b === 48 ) {
  console.log('36 + 48 = 84')
} else
if (a === 36 && sign === "+" && b === 49 ) {
  console.log('36 + 49 = 85')
} else
if (a === 36 && sign === "+" && b === 50 ) {
  console.log('36 + 50 = 86')
} else
if (a === 37 && sign === "+" && b === 1 ) {
  console.log('37 + 1 = 38')
} else
if (a === 37 && sign === "+" && b === 2 ) {
  console.log('37 + 2 = 39')
} else
if (a === 37 && sign === "+" && b === 3 ) {
  console.log('37 + 3 = 40')
} else
if (a === 37 && sign === "+" && b === 4 ) {
  console.log('37 + 4 = 41')
} else
if (a === 37 && sign === "+" && b === 5 ) {
  console.log('37 + 5 = 42')
} else
if (a === 37 && sign === "+" && b === 6 ) {
  console.log('37 + 6 = 43')
} else
if (a === 37 && sign === "+" && b === 7 ) {
  console.log('37 + 7 = 44')
} else
if (a === 37 && sign === "+" && b === 8 ) {
  console.log('37 + 8 = 45')
} else
if (a === 37 && sign === "+" && b === 9 ) {
  console.log('37 + 9 = 46')
} else
if (a === 37 && sign === "+" && b === 10 ) {
  console.log('37 + 10 = 47')
} else
if (a === 37 && sign === "+" && b === 11 ) {
  console.log('37 + 11 = 48')
} else
if (a === 37 && sign === "+" && b === 12 ) {
  console.log('37 + 12 = 49')
} else
if (a === 37 && sign === "+" && b === 13 ) {
  console.log('37 + 13 = 50')
} else
if (a === 37 && sign === "+" && b === 14 ) {
  console.log('37 + 14 = 51')
} else
if (a === 37 && sign === "+" && b === 15 ) {
  console.log('37 + 15 = 52')
} else
if (a === 37 && sign === "+" && b === 16 ) {
  console.log('37 + 16 = 53')
} else
if (a === 37 && sign === "+" && b === 17 ) {
  console.log('37 + 17 = 54')
} else
if (a === 37 && sign === "+" && b === 18 ) {
  console.log('37 + 18 = 55')
} else
if (a === 37 && sign === "+" && b === 19 ) {
  console.log('37 + 19 = 56')
} else
if (a === 37 && sign === "+" && b === 20 ) {
  console.log('37 + 20 = 57')
} else
if (a === 37 && sign === "+" && b === 21 ) {
  console.log('37 + 21 = 58')
} else
if (a === 37 && sign === "+" && b === 22 ) {
  console.log('37 + 22 = 59')
} else
if (a === 37 && sign === "+" && b === 23 ) {
  console.log('37 + 23 = 60')
} else
if (a === 37 && sign === "+" && b === 24 ) {
  console.log('37 + 24 = 61')
} else
if (a === 37 && sign === "+" && b === 25 ) {
  console.log('37 + 25 = 62')
} else
if (a === 37 && sign === "+" && b === 26 ) {
  console.log('37 + 26 = 63')
} else
if (a === 37 && sign === "+" && b === 27 ) {
  console.log('37 + 27 = 64')
} else
if (a === 37 && sign === "+" && b === 28 ) {
  console.log('37 + 28 = 65')
} else
if (a === 37 && sign === "+" && b === 29 ) {
  console.log('37 + 29 = 66')
} else
if (a === 37 && sign === "+" && b === 30 ) {
  console.log('37 + 30 = 67')
} else
if (a === 37 && sign === "+" && b === 31 ) {
  console.log('37 + 31 = 68')
} else
if (a === 37 && sign === "+" && b === 32 ) {
  console.log('37 + 32 = 69')
} else
if (a === 37 && sign === "+" && b === 33 ) {
  console.log('37 + 33 = 70')
} else
if (a === 37 && sign === "+" && b === 34 ) {
  console.log('37 + 34 = 71')
} else
if (a === 37 && sign === "+" && b === 35 ) {
  console.log('37 + 35 = 72')
} else
if (a === 37 && sign === "+" && b === 36 ) {
  console.log('37 + 36 = 73')
} else
if (a === 37 && sign === "+" && b === 37 ) {
  console.log('37 + 37 = 74')
} else
if (a === 37 && sign === "+" && b === 38 ) {
  console.log('37 + 38 = 75')
} else
if (a === 37 && sign === "+" && b === 39 ) {
  console.log('37 + 39 = 76')
} else
if (a === 37 && sign === "+" && b === 40 ) {
  console.log('37 + 40 = 77')
} else
if (a === 37 && sign === "+" && b === 41 ) {
  console.log('37 + 41 = 78')
} else
if (a === 37 && sign === "+" && b === 42 ) {
  console.log('37 + 42 = 79')
} else
if (a === 37 && sign === "+" && b === 43 ) {
  console.log('37 + 43 = 80')
} else
if (a === 37 && sign === "+" && b === 44 ) {
  console.log('37 + 44 = 81')
} else
if (a === 37 && sign === "+" && b === 45 ) {
  console.log('37 + 45 = 82')
} else
if (a === 37 && sign === "+" && b === 46 ) {
  console.log('37 + 46 = 83')
} else
if (a === 37 && sign === "+" && b === 47 ) {
  console.log('37 + 47 = 84')
} else
if (a === 37 && sign === "+" && b === 48 ) {
  console.log('37 + 48 = 85')
} else
if (a === 37 && sign === "+" && b === 49 ) {
  console.log('37 + 49 = 86')
} else
if (a === 37 && sign === "+" && b === 50 ) {
  console.log('37 + 50 = 87')
} else
if (a === 38 && sign === "+" && b === 1 ) {
  console.log('38 + 1 = 39')
} else
if (a === 38 && sign === "+" && b === 2 ) {
  console.log('38 + 2 = 40')
} else
if (a === 38 && sign === "+" && b === 3 ) {
  console.log('38 + 3 = 41')
} else
if (a === 38 && sign === "+" && b === 4 ) {
  console.log('38 + 4 = 42')
} else
if (a === 38 && sign === "+" && b === 5 ) {
  console.log('38 + 5 = 43')
} else
if (a === 38 && sign === "+" && b === 6 ) {
  console.log('38 + 6 = 44')
} else
if (a === 38 && sign === "+" && b === 7 ) {
  console.log('38 + 7 = 45')
} else
if (a === 38 && sign === "+" && b === 8 ) {
  console.log('38 + 8 = 46')
} else
if (a === 38 && sign === "+" && b === 9 ) {
  console.log('38 + 9 = 47')
} else
if (a === 38 && sign === "+" && b === 10 ) {
  console.log('38 + 10 = 48')
} else
if (a === 38 && sign === "+" && b === 11 ) {
  console.log('38 + 11 = 49')
} else
if (a === 38 && sign === "+" && b === 12 ) {
  console.log('38 + 12 = 50')
} else
if (a === 38 && sign === "+" && b === 13 ) {
  console.log('38 + 13 = 51')
} else
if (a === 38 && sign === "+" && b === 14 ) {
  console.log('38 + 14 = 52')
} else
if (a === 38 && sign === "+" && b === 15 ) {
  console.log('38 + 15 = 53')
} else
if (a === 38 && sign === "+" && b === 16 ) {
  console.log('38 + 16 = 54')
} else
if (a === 38 && sign === "+" && b === 17 ) {
  console.log('38 + 17 = 55')
} else
if (a === 38 && sign === "+" && b === 18 ) {
  console.log('38 + 18 = 56')
} else
if (a === 38 && sign === "+" && b === 19 ) {
  console.log('38 + 19 = 57')
} else
if (a === 38 && sign === "+" && b === 20 ) {
  console.log('38 + 20 = 58')
} else
if (a === 38 && sign === "+" && b === 21 ) {
  console.log('38 + 21 = 59')
} else
if (a === 38 && sign === "+" && b === 22 ) {
  console.log('38 + 22 = 60')
} else
if (a === 38 && sign === "+" && b === 23 ) {
  console.log('38 + 23 = 61')
} else
if (a === 38 && sign === "+" && b === 24 ) {
  console.log('38 + 24 = 62')
} else
if (a === 38 && sign === "+" && b === 25 ) {
  console.log('38 + 25 = 63')
} else
if (a === 38 && sign === "+" && b === 26 ) {
  console.log('38 + 26 = 64')
} else
if (a === 38 && sign === "+" && b === 27 ) {
  console.log('38 + 27 = 65')
} else
if (a === 38 && sign === "+" && b === 28 ) {
  console.log('38 + 28 = 66')
} else
if (a === 38 && sign === "+" && b === 29 ) {
  console.log('38 + 29 = 67')
} else
if (a === 38 && sign === "+" && b === 30 ) {
  console.log('38 + 30 = 68')
} else
if (a === 38 && sign === "+" && b === 31 ) {
  console.log('38 + 31 = 69')
} else
if (a === 38 && sign === "+" && b === 32 ) {
  console.log('38 + 32 = 70')
} else
if (a === 38 && sign === "+" && b === 33 ) {
  console.log('38 + 33 = 71')
} else
if (a === 38 && sign === "+" && b === 34 ) {
  console.log('38 + 34 = 72')
} else
if (a === 38 && sign === "+" && b === 35 ) {
  console.log('38 + 35 = 73')
} else
if (a === 38 && sign === "+" && b === 36 ) {
  console.log('38 + 36 = 74')
} else
if (a === 38 && sign === "+" && b === 37 ) {
  console.log('38 + 37 = 75')
} else
if (a === 38 && sign === "+" && b === 38 ) {
  console.log('38 + 38 = 76')
} else
if (a === 38 && sign === "+" && b === 39 ) {
  console.log('38 + 39 = 77')
} else
if (a === 38 && sign === "+" && b === 40 ) {
  console.log('38 + 40 = 78')
} else
if (a === 38 && sign === "+" && b === 41 ) {
  console.log('38 + 41 = 79')
} else
if (a === 38 && sign === "+" && b === 42 ) {
  console.log('38 + 42 = 80')
} else
if (a === 38 && sign === "+" && b === 43 ) {
  console.log('38 + 43 = 81')
} else
if (a === 38 && sign === "+" && b === 44 ) {
  console.log('38 + 44 = 82')
} else
if (a === 38 && sign === "+" && b === 45 ) {
  console.log('38 + 45 = 83')
} else
if (a === 38 && sign === "+" && b === 46 ) {
  console.log('38 + 46 = 84')
} else
if (a === 38 && sign === "+" && b === 47 ) {
  console.log('38 + 47 = 85')
} else
if (a === 38 && sign === "+" && b === 48 ) {
  console.log('38 + 48 = 86')
} else
if (a === 38 && sign === "+" && b === 49 ) {
  console.log('38 + 49 = 87')
} else
if (a === 38 && sign === "+" && b === 50 ) {
  console.log('38 + 50 = 88')
} else
if (a === 39 && sign === "+" && b === 1 ) {
  console.log('39 + 1 = 40')
} else
if (a === 39 && sign === "+" && b === 2 ) {
  console.log('39 + 2 = 41')
} else
if (a === 39 && sign === "+" && b === 3 ) {
  console.log('39 + 3 = 42')
} else
if (a === 39 && sign === "+" && b === 4 ) {
  console.log('39 + 4 = 43')
} else
if (a === 39 && sign === "+" && b === 5 ) {
  console.log('39 + 5 = 44')
} else
if (a === 39 && sign === "+" && b === 6 ) {
  console.log('39 + 6 = 45')
} else
if (a === 39 && sign === "+" && b === 7 ) {
  console.log('39 + 7 = 46')
} else
if (a === 39 && sign === "+" && b === 8 ) {
  console.log('39 + 8 = 47')
} else
if (a === 39 && sign === "+" && b === 9 ) {
  console.log('39 + 9 = 48')
} else
if (a === 39 && sign === "+" && b === 10 ) {
  console.log('39 + 10 = 49')
} else
if (a === 39 && sign === "+" && b === 11 ) {
  console.log('39 + 11 = 50')
} else
if (a === 39 && sign === "+" && b === 12 ) {
  console.log('39 + 12 = 51')
} else
if (a === 39 && sign === "+" && b === 13 ) {
  console.log('39 + 13 = 52')
} else
if (a === 39 && sign === "+" && b === 14 ) {
  console.log('39 + 14 = 53')
} else
if (a === 39 && sign === "+" && b === 15 ) {
  console.log('39 + 15 = 54')
} else
if (a === 39 && sign === "+" && b === 16 ) {
  console.log('39 + 16 = 55')
} else
if (a === 39 && sign === "+" && b === 17 ) {
  console.log('39 + 17 = 56')
} else
if (a === 39 && sign === "+" && b === 18 ) {
  console.log('39 + 18 = 57')
} else
if (a === 39 && sign === "+" && b === 19 ) {
  console.log('39 + 19 = 58')
} else
if (a === 39 && sign === "+" && b === 20 ) {
  console.log('39 + 20 = 59')
} else
if (a === 39 && sign === "+" && b === 21 ) {
  console.log('39 + 21 = 60')
} else
if (a === 39 && sign === "+" && b === 22 ) {
  console.log('39 + 22 = 61')
} else
if (a === 39 && sign === "+" && b === 23 ) {
  console.log('39 + 23 = 62')
} else
if (a === 39 && sign === "+" && b === 24 ) {
  console.log('39 + 24 = 63')
} else
if (a === 39 && sign === "+" && b === 25 ) {
  console.log('39 + 25 = 64')
} else
if (a === 39 && sign === "+" && b === 26 ) {
  console.log('39 + 26 = 65')
} else
if (a === 39 && sign === "+" && b === 27 ) {
  console.log('39 + 27 = 66')
} else
if (a === 39 && sign === "+" && b === 28 ) {
  console.log('39 + 28 = 67')
} else
if (a === 39 && sign === "+" && b === 29 ) {
  console.log('39 + 29 = 68')
} else
if (a === 39 && sign === "+" && b === 30 ) {
  console.log('39 + 30 = 69')
} else
if (a === 39 && sign === "+" && b === 31 ) {
  console.log('39 + 31 = 70')
} else
if (a === 39 && sign === "+" && b === 32 ) {
  console.log('39 + 32 = 71')
} else
if (a === 39 && sign === "+" && b === 33 ) {
  console.log('39 + 33 = 72')
} else
if (a === 39 && sign === "+" && b === 34 ) {
  console.log('39 + 34 = 73')
} else
if (a === 39 && sign === "+" && b === 35 ) {
  console.log('39 + 35 = 74')
} else
if (a === 39 && sign === "+" && b === 36 ) {
  console.log('39 + 36 = 75')
} else
if (a === 39 && sign === "+" && b === 37 ) {
  console.log('39 + 37 = 76')
} else
if (a === 39 && sign === "+" && b === 38 ) {
  console.log('39 + 38 = 77')
} else
if (a === 39 && sign === "+" && b === 39 ) {
  console.log('39 + 39 = 78')
} else
if (a === 39 && sign === "+" && b === 40 ) {
  console.log('39 + 40 = 79')
} else
if (a === 39 && sign === "+" && b === 41 ) {
  console.log('39 + 41 = 80')
} else
if (a === 39 && sign === "+" && b === 42 ) {
  console.log('39 + 42 = 81')
} else
if (a === 39 && sign === "+" && b === 43 ) {
  console.log('39 + 43 = 82')
} else
if (a === 39 && sign === "+" && b === 44 ) {
  console.log('39 + 44 = 83')
} else
if (a === 39 && sign === "+" && b === 45 ) {
  console.log('39 + 45 = 84')
} else
if (a === 39 && sign === "+" && b === 46 ) {
  console.log('39 + 46 = 85')
} else
if (a === 39 && sign === "+" && b === 47 ) {
  console.log('39 + 47 = 86')
} else
if (a === 39 && sign === "+" && b === 48 ) {
  console.log('39 + 48 = 87')
} else
if (a === 39 && sign === "+" && b === 49 ) {
  console.log('39 + 49 = 88')
} else
if (a === 39 && sign === "+" && b === 50 ) {
  console.log('39 + 50 = 89')
} else
if (a === 40 && sign === "+" && b === 1 ) {
  console.log('40 + 1 = 41')
} else
if (a === 40 && sign === "+" && b === 2 ) {
  console.log('40 + 2 = 42')
} else
if (a === 40 && sign === "+" && b === 3 ) {
  console.log('40 + 3 = 43')
} else
if (a === 40 && sign === "+" && b === 4 ) {
  console.log('40 + 4 = 44')
} else
if (a === 40 && sign === "+" && b === 5 ) {
  console.log('40 + 5 = 45')
} else
if (a === 40 && sign === "+" && b === 6 ) {
  console.log('40 + 6 = 46')
} else
if (a === 40 && sign === "+" && b === 7 ) {
  console.log('40 + 7 = 47')
} else
if (a === 40 && sign === "+" && b === 8 ) {
  console.log('40 + 8 = 48')
} else
if (a === 40 && sign === "+" && b === 9 ) {
  console.log('40 + 9 = 49')
} else
if (a === 40 && sign === "+" && b === 10 ) {
  console.log('40 + 10 = 50')
} else
if (a === 40 && sign === "+" && b === 11 ) {
  console.log('40 + 11 = 51')
} else
if (a === 40 && sign === "+" && b === 12 ) {
  console.log('40 + 12 = 52')
} else
if (a === 40 && sign === "+" && b === 13 ) {
  console.log('40 + 13 = 53')
} else
if (a === 40 && sign === "+" && b === 14 ) {
  console.log('40 + 14 = 54')
} else
if (a === 40 && sign === "+" && b === 15 ) {
  console.log('40 + 15 = 55')
} else
if (a === 40 && sign === "+" && b === 16 ) {
  console.log('40 + 16 = 56')
} else
if (a === 40 && sign === "+" && b === 17 ) {
  console.log('40 + 17 = 57')
} else
if (a === 40 && sign === "+" && b === 18 ) {
  console.log('40 + 18 = 58')
} else
if (a === 40 && sign === "+" && b === 19 ) {
  console.log('40 + 19 = 59')
} else
if (a === 40 && sign === "+" && b === 20 ) {
  console.log('40 + 20 = 60')
} else
if (a === 40 && sign === "+" && b === 21 ) {
  console.log('40 + 21 = 61')
} else
if (a === 40 && sign === "+" && b === 22 ) {
  console.log('40 + 22 = 62')
} else
if (a === 40 && sign === "+" && b === 23 ) {
  console.log('40 + 23 = 63')
} else
if (a === 40 && sign === "+" && b === 24 ) {
  console.log('40 + 24 = 64')
} else
if (a === 40 && sign === "+" && b === 25 ) {
  console.log('40 + 25 = 65')
} else
if (a === 40 && sign === "+" && b === 26 ) {
  console.log('40 + 26 = 66')
} else
if (a === 40 && sign === "+" && b === 27 ) {
  console.log('40 + 27 = 67')
} else
if (a === 40 && sign === "+" && b === 28 ) {
  console.log('40 + 28 = 68')
} else
if (a === 40 && sign === "+" && b === 29 ) {
  console.log('40 + 29 = 69')
} else
if (a === 40 && sign === "+" && b === 30 ) {
  console.log('40 + 30 = 70')
} else
if (a === 40 && sign === "+" && b === 31 ) {
  console.log('40 + 31 = 71')
} else
if (a === 40 && sign === "+" && b === 32 ) {
  console.log('40 + 32 = 72')
} else
if (a === 40 && sign === "+" && b === 33 ) {
  console.log('40 + 33 = 73')
} else
if (a === 40 && sign === "+" && b === 34 ) {
  console.log('40 + 34 = 74')
} else
if (a === 40 && sign === "+" && b === 35 ) {
  console.log('40 + 35 = 75')
} else
if (a === 40 && sign === "+" && b === 36 ) {
  console.log('40 + 36 = 76')
} else
if (a === 40 && sign === "+" && b === 37 ) {
  console.log('40 + 37 = 77')
} else
if (a === 40 && sign === "+" && b === 38 ) {
  console.log('40 + 38 = 78')
} else
if (a === 40 && sign === "+" && b === 39 ) {
  console.log('40 + 39 = 79')
} else
if (a === 40 && sign === "+" && b === 40 ) {
  console.log('40 + 40 = 80')
} else
if (a === 40 && sign === "+" && b === 41 ) {
  console.log('40 + 41 = 81')
} else
if (a === 40 && sign === "+" && b === 42 ) {
  console.log('40 + 42 = 82')
} else
if (a === 40 && sign === "+" && b === 43 ) {
  console.log('40 + 43 = 83')
} else
if (a === 40 && sign === "+" && b === 44 ) {
  console.log('40 + 44 = 84')
} else
if (a === 40 && sign === "+" && b === 45 ) {
  console.log('40 + 45 = 85')
} else
if (a === 40 && sign === "+" && b === 46 ) {
  console.log('40 + 46 = 86')
} else
if (a === 40 && sign === "+" && b === 47 ) {
  console.log('40 + 47 = 87')
} else
if (a === 40 && sign === "+" && b === 48 ) {
  console.log('40 + 48 = 88')
} else
if (a === 40 && sign === "+" && b === 49 ) {
  console.log('40 + 49 = 89')
} else
if (a === 40 && sign === "+" && b === 50 ) {
  console.log('40 + 50 = 90')
} else
if (a === 41 && sign === "+" && b === 1 ) {
  console.log('41 + 1 = 42')
} else
if (a === 41 && sign === "+" && b === 2 ) {
  console.log('41 + 2 = 43')
} else
if (a === 41 && sign === "+" && b === 3 ) {
  console.log('41 + 3 = 44')
} else
if (a === 41 && sign === "+" && b === 4 ) {
  console.log('41 + 4 = 45')
} else
if (a === 41 && sign === "+" && b === 5 ) {
  console.log('41 + 5 = 46')
} else
if (a === 41 && sign === "+" && b === 6 ) {
  console.log('41 + 6 = 47')
} else
if (a === 41 && sign === "+" && b === 7 ) {
  console.log('41 + 7 = 48')
} else
if (a === 41 && sign === "+" && b === 8 ) {
  console.log('41 + 8 = 49')
} else
if (a === 41 && sign === "+" && b === 9 ) {
  console.log('41 + 9 = 50')
} else
if (a === 41 && sign === "+" && b === 10 ) {
  console.log('41 + 10 = 51')
} else
if (a === 41 && sign === "+" && b === 11 ) {
  console.log('41 + 11 = 52')
} else
if (a === 41 && sign === "+" && b === 12 ) {
  console.log('41 + 12 = 53')
} else
if (a === 41 && sign === "+" && b === 13 ) {
  console.log('41 + 13 = 54')
} else
if (a === 41 && sign === "+" && b === 14 ) {
  console.log('41 + 14 = 55')
} else
if (a === 41 && sign === "+" && b === 15 ) {
  console.log('41 + 15 = 56')
} else
if (a === 41 && sign === "+" && b === 16 ) {
  console.log('41 + 16 = 57')
} else
if (a === 41 && sign === "+" && b === 17 ) {
  console.log('41 + 17 = 58')
} else
if (a === 41 && sign === "+" && b === 18 ) {
  console.log('41 + 18 = 59')
} else
if (a === 41 && sign === "+" && b === 19 ) {
  console.log('41 + 19 = 60')
} else
if (a === 41 && sign === "+" && b === 20 ) {
  console.log('41 + 20 = 61')
} else
if (a === 41 && sign === "+" && b === 21 ) {
  console.log('41 + 21 = 62')
} else
if (a === 41 && sign === "+" && b === 22 ) {
  console.log('41 + 22 = 63')
} else
if (a === 41 && sign === "+" && b === 23 ) {
  console.log('41 + 23 = 64')
} else
if (a === 41 && sign === "+" && b === 24 ) {
  console.log('41 + 24 = 65')
} else
if (a === 41 && sign === "+" && b === 25 ) {
  console.log('41 + 25 = 66')
} else
if (a === 41 && sign === "+" && b === 26 ) {
  console.log('41 + 26 = 67')
} else
if (a === 41 && sign === "+" && b === 27 ) {
  console.log('41 + 27 = 68')
} else
if (a === 41 && sign === "+" && b === 28 ) {
  console.log('41 + 28 = 69')
} else
if (a === 41 && sign === "+" && b === 29 ) {
  console.log('41 + 29 = 70')
} else
if (a === 41 && sign === "+" && b === 30 ) {
  console.log('41 + 30 = 71')
} else
if (a === 41 && sign === "+" && b === 31 ) {
  console.log('41 + 31 = 72')
} else
if (a === 41 && sign === "+" && b === 32 ) {
  console.log('41 + 32 = 73')
} else
if (a === 41 && sign === "+" && b === 33 ) {
  console.log('41 + 33 = 74')
} else
if (a === 41 && sign === "+" && b === 34 ) {
  console.log('41 + 34 = 75')
} else
if (a === 41 && sign === "+" && b === 35 ) {
  console.log('41 + 35 = 76')
} else
if (a === 41 && sign === "+" && b === 36 ) {
  console.log('41 + 36 = 77')
} else
if (a === 41 && sign === "+" && b === 37 ) {
  console.log('41 + 37 = 78')
} else
if (a === 41 && sign === "+" && b === 38 ) {
  console.log('41 + 38 = 79')
} else
if (a === 41 && sign === "+" && b === 39 ) {
  console.log('41 + 39 = 80')
} else
if (a === 41 && sign === "+" && b === 40 ) {
  console.log('41 + 40 = 81')
} else
if (a === 41 && sign === "+" && b === 41 ) {
  console.log('41 + 41 = 82')
} else
if (a === 41 && sign === "+" && b === 42 ) {
  console.log('41 + 42 = 83')
} else
if (a === 41 && sign === "+" && b === 43 ) {
  console.log('41 + 43 = 84')
} else
if (a === 41 && sign === "+" && b === 44 ) {
  console.log('41 + 44 = 85')
} else
if (a === 41 && sign === "+" && b === 45 ) {
  console.log('41 + 45 = 86')
} else
if (a === 41 && sign === "+" && b === 46 ) {
  console.log('41 + 46 = 87')
} else
if (a === 41 && sign === "+" && b === 47 ) {
  console.log('41 + 47 = 88')
} else
if (a === 41 && sign === "+" && b === 48 ) {
  console.log('41 + 48 = 89')
} else
if (a === 41 && sign === "+" && b === 49 ) {
  console.log('41 + 49 = 90')
} else
if (a === 41 && sign === "+" && b === 50 ) {
  console.log('41 + 50 = 91')
} else
if (a === 42 && sign === "+" && b === 1 ) {
  console.log('42 + 1 = 43')
} else
if (a === 42 && sign === "+" && b === 2 ) {
  console.log('42 + 2 = 44')
} else
if (a === 42 && sign === "+" && b === 3 ) {
  console.log('42 + 3 = 45')
} else
if (a === 42 && sign === "+" && b === 4 ) {
  console.log('42 + 4 = 46')
} else
if (a === 42 && sign === "+" && b === 5 ) {
  console.log('42 + 5 = 47')
} else
if (a === 42 && sign === "+" && b === 6 ) {
  console.log('42 + 6 = 48')
} else
if (a === 42 && sign === "+" && b === 7 ) {
  console.log('42 + 7 = 49')
} else
if (a === 42 && sign === "+" && b === 8 ) {
  console.log('42 + 8 = 50')
} else
if (a === 42 && sign === "+" && b === 9 ) {
  console.log('42 + 9 = 51')
} else
if (a === 42 && sign === "+" && b === 10 ) {
  console.log('42 + 10 = 52')
} else
if (a === 42 && sign === "+" && b === 11 ) {
  console.log('42 + 11 = 53')
} else
if (a === 42 && sign === "+" && b === 12 ) {
  console.log('42 + 12 = 54')
} else
if (a === 42 && sign === "+" && b === 13 ) {
  console.log('42 + 13 = 55')
} else
if (a === 42 && sign === "+" && b === 14 ) {
  console.log('42 + 14 = 56')
} else
if (a === 42 && sign === "+" && b === 15 ) {
  console.log('42 + 15 = 57')
} else
if (a === 42 && sign === "+" && b === 16 ) {
  console.log('42 + 16 = 58')
} else
if (a === 42 && sign === "+" && b === 17 ) {
  console.log('42 + 17 = 59')
} else
if (a === 42 && sign === "+" && b === 18 ) {
  console.log('42 + 18 = 60')
} else
if (a === 42 && sign === "+" && b === 19 ) {
  console.log('42 + 19 = 61')
} else
if (a === 42 && sign === "+" && b === 20 ) {
  console.log('42 + 20 = 62')
} else
if (a === 42 && sign === "+" && b === 21 ) {
  console.log('42 + 21 = 63')
} else
if (a === 42 && sign === "+" && b === 22 ) {
  console.log('42 + 22 = 64')
} else
if (a === 42 && sign === "+" && b === 23 ) {
  console.log('42 + 23 = 65')
} else
if (a === 42 && sign === "+" && b === 24 ) {
  console.log('42 + 24 = 66')
} else
if (a === 42 && sign === "+" && b === 25 ) {
  console.log('42 + 25 = 67')
} else
if (a === 42 && sign === "+" && b === 26 ) {
  console.log('42 + 26 = 68')
} else
if (a === 42 && sign === "+" && b === 27 ) {
  console.log('42 + 27 = 69')
} else
if (a === 42 && sign === "+" && b === 28 ) {
  console.log('42 + 28 = 70')
} else
if (a === 42 && sign === "+" && b === 29 ) {
  console.log('42 + 29 = 71')
} else
if (a === 42 && sign === "+" && b === 30 ) {
  console.log('42 + 30 = 72')
} else
if (a === 42 && sign === "+" && b === 31 ) {
  console.log('42 + 31 = 73')
} else
if (a === 42 && sign === "+" && b === 32 ) {
  console.log('42 + 32 = 74')
} else
if (a === 42 && sign === "+" && b === 33 ) {
  console.log('42 + 33 = 75')
} else
if (a === 42 && sign === "+" && b === 34 ) {
  console.log('42 + 34 = 76')
} else
if (a === 42 && sign === "+" && b === 35 ) {
  console.log('42 + 35 = 77')
} else
if (a === 42 && sign === "+" && b === 36 ) {
  console.log('42 + 36 = 78')
} else
if (a === 42 && sign === "+" && b === 37 ) {
  console.log('42 + 37 = 79')
} else
if (a === 42 && sign === "+" && b === 38 ) {
  console.log('42 + 38 = 80')
} else
if (a === 42 && sign === "+" && b === 39 ) {
  console.log('42 + 39 = 81')
} else
if (a === 42 && sign === "+" && b === 40 ) {
  console.log('42 + 40 = 82')
} else
if (a === 42 && sign === "+" && b === 41 ) {
  console.log('42 + 41 = 83')
} else
if (a === 42 && sign === "+" && b === 42 ) {
  console.log('42 + 42 = 84')
} else
if (a === 42 && sign === "+" && b === 43 ) {
  console.log('42 + 43 = 85')
} else
if (a === 42 && sign === "+" && b === 44 ) {
  console.log('42 + 44 = 86')
} else
if (a === 42 && sign === "+" && b === 45 ) {
  console.log('42 + 45 = 87')
} else
if (a === 42 && sign === "+" && b === 46 ) {
  console.log('42 + 46 = 88')
} else
if (a === 42 && sign === "+" && b === 47 ) {
  console.log('42 + 47 = 89')
} else
if (a === 42 && sign === "+" && b === 48 ) {
  console.log('42 + 48 = 90')
} else
if (a === 42 && sign === "+" && b === 49 ) {
  console.log('42 + 49 = 91')
} else
if (a === 42 && sign === "+" && b === 50 ) {
  console.log('42 + 50 = 92')
} else
if (a === 43 && sign === "+" && b === 1 ) {
  console.log('43 + 1 = 44')
} else
if (a === 43 && sign === "+" && b === 2 ) {
  console.log('43 + 2 = 45')
} else
if (a === 43 && sign === "+" && b === 3 ) {
  console.log('43 + 3 = 46')
} else
if (a === 43 && sign === "+" && b === 4 ) {
  console.log('43 + 4 = 47')
} else
if (a === 43 && sign === "+" && b === 5 ) {
  console.log('43 + 5 = 48')
} else
if (a === 43 && sign === "+" && b === 6 ) {
  console.log('43 + 6 = 49')
} else
if (a === 43 && sign === "+" && b === 7 ) {
  console.log('43 + 7 = 50')
} else
if (a === 43 && sign === "+" && b === 8 ) {
  console.log('43 + 8 = 51')
} else
if (a === 43 && sign === "+" && b === 9 ) {
  console.log('43 + 9 = 52')
} else
if (a === 43 && sign === "+" && b === 10 ) {
  console.log('43 + 10 = 53')
} else
if (a === 43 && sign === "+" && b === 11 ) {
  console.log('43 + 11 = 54')
} else
if (a === 43 && sign === "+" && b === 12 ) {
  console.log('43 + 12 = 55')
} else
if (a === 43 && sign === "+" && b === 13 ) {
  console.log('43 + 13 = 56')
} else
if (a === 43 && sign === "+" && b === 14 ) {
  console.log('43 + 14 = 57')
} else
if (a === 43 && sign === "+" && b === 15 ) {
  console.log('43 + 15 = 58')
} else
if (a === 43 && sign === "+" && b === 16 ) {
  console.log('43 + 16 = 59')
} else
if (a === 43 && sign === "+" && b === 17 ) {
  console.log('43 + 17 = 60')
} else
if (a === 43 && sign === "+" && b === 18 ) {
  console.log('43 + 18 = 61')
} else
if (a === 43 && sign === "+" && b === 19 ) {
  console.log('43 + 19 = 62')
} else
if (a === 43 && sign === "+" && b === 20 ) {
  console.log('43 + 20 = 63')
} else
if (a === 43 && sign === "+" && b === 21 ) {
  console.log('43 + 21 = 64')
} else
if (a === 43 && sign === "+" && b === 22 ) {
  console.log('43 + 22 = 65')
} else
if (a === 43 && sign === "+" && b === 23 ) {
  console.log('43 + 23 = 66')
} else
if (a === 43 && sign === "+" && b === 24 ) {
  console.log('43 + 24 = 67')
} else
if (a === 43 && sign === "+" && b === 25 ) {
  console.log('43 + 25 = 68')
} else
if (a === 43 && sign === "+" && b === 26 ) {
  console.log('43 + 26 = 69')
} else
if (a === 43 && sign === "+" && b === 27 ) {
  console.log('43 + 27 = 70')
} else
if (a === 43 && sign === "+" && b === 28 ) {
  console.log('43 + 28 = 71')
} else
if (a === 43 && sign === "+" && b === 29 ) {
  console.log('43 + 29 = 72')
} else
if (a === 43 && sign === "+" && b === 30 ) {
  console.log('43 + 30 = 73')
} else
if (a === 43 && sign === "+" && b === 31 ) {
  console.log('43 + 31 = 74')
} else
if (a === 43 && sign === "+" && b === 32 ) {
  console.log('43 + 32 = 75')
} else
if (a === 43 && sign === "+" && b === 33 ) {
  console.log('43 + 33 = 76')
} else
if (a === 43 && sign === "+" && b === 34 ) {
  console.log('43 + 34 = 77')
} else
if (a === 43 && sign === "+" && b === 35 ) {
  console.log('43 + 35 = 78')
} else
if (a === 43 && sign === "+" && b === 36 ) {
  console.log('43 + 36 = 79')
} else
if (a === 43 && sign === "+" && b === 37 ) {
  console.log('43 + 37 = 80')
} else
if (a === 43 && sign === "+" && b === 38 ) {
  console.log('43 + 38 = 81')
} else
if (a === 43 && sign === "+" && b === 39 ) {
  console.log('43 + 39 = 82')
} else
if (a === 43 && sign === "+" && b === 40 ) {
  console.log('43 + 40 = 83')
} else
if (a === 43 && sign === "+" && b === 41 ) {
  console.log('43 + 41 = 84')
} else
if (a === 43 && sign === "+" && b === 42 ) {
  console.log('43 + 42 = 85')
} else
if (a === 43 && sign === "+" && b === 43 ) {
  console.log('43 + 43 = 86')
} else
if (a === 43 && sign === "+" && b === 44 ) {
  console.log('43 + 44 = 87')
} else
if (a === 43 && sign === "+" && b === 45 ) {
  console.log('43 + 45 = 88')
} else
if (a === 43 && sign === "+" && b === 46 ) {
  console.log('43 + 46 = 89')
} else
if (a === 43 && sign === "+" && b === 47 ) {
  console.log('43 + 47 = 90')
} else
if (a === 43 && sign === "+" && b === 48 ) {
  console.log('43 + 48 = 91')
} else
if (a === 43 && sign === "+" && b === 49 ) {
  console.log('43 + 49 = 92')
} else
if (a === 43 && sign === "+" && b === 50 ) {
  console.log('43 + 50 = 93')
} else
if (a === 44 && sign === "+" && b === 1 ) {
  console.log('44 + 1 = 45')
} else
if (a === 44 && sign === "+" && b === 2 ) {
  console.log('44 + 2 = 46')
} else
if (a === 44 && sign === "+" && b === 3 ) {
  console.log('44 + 3 = 47')
} else
if (a === 44 && sign === "+" && b === 4 ) {
  console.log('44 + 4 = 48')
} else
if (a === 44 && sign === "+" && b === 5 ) {
  console.log('44 + 5 = 49')
} else
if (a === 44 && sign === "+" && b === 6 ) {
  console.log('44 + 6 = 50')
} else
if (a === 44 && sign === "+" && b === 7 ) {
  console.log('44 + 7 = 51')
} else
if (a === 44 && sign === "+" && b === 8 ) {
  console.log('44 + 8 = 52')
} else
if (a === 44 && sign === "+" && b === 9 ) {
  console.log('44 + 9 = 53')
} else
if (a === 44 && sign === "+" && b === 10 ) {
  console.log('44 + 10 = 54')
} else
if (a === 44 && sign === "+" && b === 11 ) {
  console.log('44 + 11 = 55')
} else
if (a === 44 && sign === "+" && b === 12 ) {
  console.log('44 + 12 = 56')
} else
if (a === 44 && sign === "+" && b === 13 ) {
  console.log('44 + 13 = 57')
} else
if (a === 44 && sign === "+" && b === 14 ) {
  console.log('44 + 14 = 58')
} else
if (a === 44 && sign === "+" && b === 15 ) {
  console.log('44 + 15 = 59')
} else
if (a === 44 && sign === "+" && b === 16 ) {
  console.log('44 + 16 = 60')
} else
if (a === 44 && sign === "+" && b === 17 ) {
  console.log('44 + 17 = 61')
} else
if (a === 44 && sign === "+" && b === 18 ) {
  console.log('44 + 18 = 62')
} else
if (a === 44 && sign === "+" && b === 19 ) {
  console.log('44 + 19 = 63')
} else
if (a === 44 && sign === "+" && b === 20 ) {
  console.log('44 + 20 = 64')
} else
if (a === 44 && sign === "+" && b === 21 ) {
  console.log('44 + 21 = 65')
} else
if (a === 44 && sign === "+" && b === 22 ) {
  console.log('44 + 22 = 66')
} else
if (a === 44 && sign === "+" && b === 23 ) {
  console.log('44 + 23 = 67')
} else
if (a === 44 && sign === "+" && b === 24 ) {
  console.log('44 + 24 = 68')
} else
if (a === 44 && sign === "+" && b === 25 ) {
  console.log('44 + 25 = 69')
} else
if (a === 44 && sign === "+" && b === 26 ) {
  console.log('44 + 26 = 70')
} else
if (a === 44 && sign === "+" && b === 27 ) {
  console.log('44 + 27 = 71')
} else
if (a === 44 && sign === "+" && b === 28 ) {
  console.log('44 + 28 = 72')
} else
if (a === 44 && sign === "+" && b === 29 ) {
  console.log('44 + 29 = 73')
} else
if (a === 44 && sign === "+" && b === 30 ) {
  console.log('44 + 30 = 74')
} else
if (a === 44 && sign === "+" && b === 31 ) {
  console.log('44 + 31 = 75')
} else
if (a === 44 && sign === "+" && b === 32 ) {
  console.log('44 + 32 = 76')
} else
if (a === 44 && sign === "+" && b === 33 ) {
  console.log('44 + 33 = 77')
} else
if (a === 44 && sign === "+" && b === 34 ) {
  console.log('44 + 34 = 78')
} else
if (a === 44 && sign === "+" && b === 35 ) {
  console.log('44 + 35 = 79')
} else
if (a === 44 && sign === "+" && b === 36 ) {
  console.log('44 + 36 = 80')
} else
if (a === 44 && sign === "+" && b === 37 ) {
  console.log('44 + 37 = 81')
} else
if (a === 44 && sign === "+" && b === 38 ) {
  console.log('44 + 38 = 82')
} else
if (a === 44 && sign === "+" && b === 39 ) {
  console.log('44 + 39 = 83')
} else
if (a === 44 && sign === "+" && b === 40 ) {
  console.log('44 + 40 = 84')
} else
if (a === 44 && sign === "+" && b === 41 ) {
  console.log('44 + 41 = 85')
} else
if (a === 44 && sign === "+" && b === 42 ) {
  console.log('44 + 42 = 86')
} else
if (a === 44 && sign === "+" && b === 43 ) {
  console.log('44 + 43 = 87')
} else
if (a === 44 && sign === "+" && b === 44 ) {
  console.log('44 + 44 = 88')
} else
if (a === 44 && sign === "+" && b === 45 ) {
  console.log('44 + 45 = 89')
} else
if (a === 44 && sign === "+" && b === 46 ) {
  console.log('44 + 46 = 90')
} else
if (a === 44 && sign === "+" && b === 47 ) {
  console.log('44 + 47 = 91')
} else
if (a === 44 && sign === "+" && b === 48 ) {
  console.log('44 + 48 = 92')
} else
if (a === 44 && sign === "+" && b === 49 ) {
  console.log('44 + 49 = 93')
} else
if (a === 44 && sign === "+" && b === 50 ) {
  console.log('44 + 50 = 94')
} else
if (a === 45 && sign === "+" && b === 1 ) {
  console.log('45 + 1 = 46')
} else
if (a === 45 && sign === "+" && b === 2 ) {
  console.log('45 + 2 = 47')
} else
if (a === 45 && sign === "+" && b === 3 ) {
  console.log('45 + 3 = 48')
} else
if (a === 45 && sign === "+" && b === 4 ) {
  console.log('45 + 4 = 49')
} else
if (a === 45 && sign === "+" && b === 5 ) {
  console.log('45 + 5 = 50')
} else
if (a === 45 && sign === "+" && b === 6 ) {
  console.log('45 + 6 = 51')
} else
if (a === 45 && sign === "+" && b === 7 ) {
  console.log('45 + 7 = 52')
} else
if (a === 45 && sign === "+" && b === 8 ) {
  console.log('45 + 8 = 53')
} else
if (a === 45 && sign === "+" && b === 9 ) {
  console.log('45 + 9 = 54')
} else
if (a === 45 && sign === "+" && b === 10 ) {
  console.log('45 + 10 = 55')
} else
if (a === 45 && sign === "+" && b === 11 ) {
  console.log('45 + 11 = 56')
} else
if (a === 45 && sign === "+" && b === 12 ) {
  console.log('45 + 12 = 57')
} else
if (a === 45 && sign === "+" && b === 13 ) {
  console.log('45 + 13 = 58')
} else
if (a === 45 && sign === "+" && b === 14 ) {
  console.log('45 + 14 = 59')
} else
if (a === 45 && sign === "+" && b === 15 ) {
  console.log('45 + 15 = 60')
} else
if (a === 45 && sign === "+" && b === 16 ) {
  console.log('45 + 16 = 61')
} else
if (a === 45 && sign === "+" && b === 17 ) {
  console.log('45 + 17 = 62')
} else
if (a === 45 && sign === "+" && b === 18 ) {
  console.log('45 + 18 = 63')
} else
if (a === 45 && sign === "+" && b === 19 ) {
  console.log('45 + 19 = 64')
} else
if (a === 45 && sign === "+" && b === 20 ) {
  console.log('45 + 20 = 65')
} else
if (a === 45 && sign === "+" && b === 21 ) {
  console.log('45 + 21 = 66')
} else
if (a === 45 && sign === "+" && b === 22 ) {
  console.log('45 + 22 = 67')
} else
if (a === 45 && sign === "+" && b === 23 ) {
  console.log('45 + 23 = 68')
} else
if (a === 45 && sign === "+" && b === 24 ) {
  console.log('45 + 24 = 69')
} else
if (a === 45 && sign === "+" && b === 25 ) {
  console.log('45 + 25 = 70')
} else
if (a === 45 && sign === "+" && b === 26 ) {
  console.log('45 + 26 = 71')
} else
if (a === 45 && sign === "+" && b === 27 ) {
  console.log('45 + 27 = 72')
} else
if (a === 45 && sign === "+" && b === 28 ) {
  console.log('45 + 28 = 73')
} else
if (a === 45 && sign === "+" && b === 29 ) {
  console.log('45 + 29 = 74')
} else
if (a === 45 && sign === "+" && b === 30 ) {
  console.log('45 + 30 = 75')
} else
if (a === 45 && sign === "+" && b === 31 ) {
  console.log('45 + 31 = 76')
} else
if (a === 45 && sign === "+" && b === 32 ) {
  console.log('45 + 32 = 77')
} else
if (a === 45 && sign === "+" && b === 33 ) {
  console.log('45 + 33 = 78')
} else
if (a === 45 && sign === "+" && b === 34 ) {
  console.log('45 + 34 = 79')
} else
if (a === 45 && sign === "+" && b === 35 ) {
  console.log('45 + 35 = 80')
} else
if (a === 45 && sign === "+" && b === 36 ) {
  console.log('45 + 36 = 81')
} else
if (a === 45 && sign === "+" && b === 37 ) {
  console.log('45 + 37 = 82')
} else
if (a === 45 && sign === "+" && b === 38 ) {
  console.log('45 + 38 = 83')
} else
if (a === 45 && sign === "+" && b === 39 ) {
  console.log('45 + 39 = 84')
} else
if (a === 45 && sign === "+" && b === 40 ) {
  console.log('45 + 40 = 85')
} else
if (a === 45 && sign === "+" && b === 41 ) {
  console.log('45 + 41 = 86')
} else
if (a === 45 && sign === "+" && b === 42 ) {
  console.log('45 + 42 = 87')
} else
if (a === 45 && sign === "+" && b === 43 ) {
  console.log('45 + 43 = 88')
} else
if (a === 45 && sign === "+" && b === 44 ) {
  console.log('45 + 44 = 89')
} else
if (a === 45 && sign === "+" && b === 45 ) {
  console.log('45 + 45 = 90')
} else
if (a === 45 && sign === "+" && b === 46 ) {
  console.log('45 + 46 = 91')
} else
if (a === 45 && sign === "+" && b === 47 ) {
  console.log('45 + 47 = 92')
} else
if (a === 45 && sign === "+" && b === 48 ) {
  console.log('45 + 48 = 93')
} else
if (a === 45 && sign === "+" && b === 49 ) {
  console.log('45 + 49 = 94')
} else
if (a === 45 && sign === "+" && b === 50 ) {
  console.log('45 + 50 = 95')
} else
if (a === 46 && sign === "+" && b === 1 ) {
  console.log('46 + 1 = 47')
} else
if (a === 46 && sign === "+" && b === 2 ) {
  console.log('46 + 2 = 48')
} else
if (a === 46 && sign === "+" && b === 3 ) {
  console.log('46 + 3 = 49')
} else
if (a === 46 && sign === "+" && b === 4 ) {
  console.log('46 + 4 = 50')
} else
if (a === 46 && sign === "+" && b === 5 ) {
  console.log('46 + 5 = 51')
} else
if (a === 46 && sign === "+" && b === 6 ) {
  console.log('46 + 6 = 52')
} else
if (a === 46 && sign === "+" && b === 7 ) {
  console.log('46 + 7 = 53')
} else
if (a === 46 && sign === "+" && b === 8 ) {
  console.log('46 + 8 = 54')
} else
if (a === 46 && sign === "+" && b === 9 ) {
  console.log('46 + 9 = 55')
} else
if (a === 46 && sign === "+" && b === 10 ) {
  console.log('46 + 10 = 56')
} else
if (a === 46 && sign === "+" && b === 11 ) {
  console.log('46 + 11 = 57')
} else
if (a === 46 && sign === "+" && b === 12 ) {
  console.log('46 + 12 = 58')
} else
if (a === 46 && sign === "+" && b === 13 ) {
  console.log('46 + 13 = 59')
} else
if (a === 46 && sign === "+" && b === 14 ) {
  console.log('46 + 14 = 60')
} else
if (a === 46 && sign === "+" && b === 15 ) {
  console.log('46 + 15 = 61')
} else
if (a === 46 && sign === "+" && b === 16 ) {
  console.log('46 + 16 = 62')
} else
if (a === 46 && sign === "+" && b === 17 ) {
  console.log('46 + 17 = 63')
} else
if (a === 46 && sign === "+" && b === 18 ) {
  console.log('46 + 18 = 64')
} else
if (a === 46 && sign === "+" && b === 19 ) {
  console.log('46 + 19 = 65')
} else
if (a === 46 && sign === "+" && b === 20 ) {
  console.log('46 + 20 = 66')
} else
if (a === 46 && sign === "+" && b === 21 ) {
  console.log('46 + 21 = 67')
} else
if (a === 46 && sign === "+" && b === 22 ) {
  console.log('46 + 22 = 68')
} else
if (a === 46 && sign === "+" && b === 23 ) {
  console.log('46 + 23 = 69')
} else
if (a === 46 && sign === "+" && b === 24 ) {
  console.log('46 + 24 = 70')
} else
if (a === 46 && sign === "+" && b === 25 ) {
  console.log('46 + 25 = 71')
} else
if (a === 46 && sign === "+" && b === 26 ) {
  console.log('46 + 26 = 72')
} else
if (a === 46 && sign === "+" && b === 27 ) {
  console.log('46 + 27 = 73')
} else
if (a === 46 && sign === "+" && b === 28 ) {
  console.log('46 + 28 = 74')
} else
if (a === 46 && sign === "+" && b === 29 ) {
  console.log('46 + 29 = 75')
} else
if (a === 46 && sign === "+" && b === 30 ) {
  console.log('46 + 30 = 76')
} else
if (a === 46 && sign === "+" && b === 31 ) {
  console.log('46 + 31 = 77')
} else
if (a === 46 && sign === "+" && b === 32 ) {
  console.log('46 + 32 = 78')
} else
if (a === 46 && sign === "+" && b === 33 ) {
  console.log('46 + 33 = 79')
} else
if (a === 46 && sign === "+" && b === 34 ) {
  console.log('46 + 34 = 80')
} else
if (a === 46 && sign === "+" && b === 35 ) {
  console.log('46 + 35 = 81')
} else
if (a === 46 && sign === "+" && b === 36 ) {
  console.log('46 + 36 = 82')
} else
if (a === 46 && sign === "+" && b === 37 ) {
  console.log('46 + 37 = 83')
} else
if (a === 46 && sign === "+" && b === 38 ) {
  console.log('46 + 38 = 84')
} else
if (a === 46 && sign === "+" && b === 39 ) {
  console.log('46 + 39 = 85')
} else
if (a === 46 && sign === "+" && b === 40 ) {
  console.log('46 + 40 = 86')
} else
if (a === 46 && sign === "+" && b === 41 ) {
  console.log('46 + 41 = 87')
} else
if (a === 46 && sign === "+" && b === 42 ) {
  console.log('46 + 42 = 88')
} else
if (a === 46 && sign === "+" && b === 43 ) {
  console.log('46 + 43 = 89')
} else
if (a === 46 && sign === "+" && b === 44 ) {
  console.log('46 + 44 = 90')
} else
if (a === 46 && sign === "+" && b === 45 ) {
  console.log('46 + 45 = 91')
} else
if (a === 46 && sign === "+" && b === 46 ) {
  console.log('46 + 46 = 92')
} else
if (a === 46 && sign === "+" && b === 47 ) {
  console.log('46 + 47 = 93')
} else
if (a === 46 && sign === "+" && b === 48 ) {
  console.log('46 + 48 = 94')
} else
if (a === 46 && sign === "+" && b === 49 ) {
  console.log('46 + 49 = 95')
} else
if (a === 46 && sign === "+" && b === 50 ) {
  console.log('46 + 50 = 96')
} else
if (a === 47 && sign === "+" && b === 1 ) {
  console.log('47 + 1 = 48')
} else
if (a === 47 && sign === "+" && b === 2 ) {
  console.log('47 + 2 = 49')
} else
if (a === 47 && sign === "+" && b === 3 ) {
  console.log('47 + 3 = 50')
} else
if (a === 47 && sign === "+" && b === 4 ) {
  console.log('47 + 4 = 51')
} else
if (a === 47 && sign === "+" && b === 5 ) {
  console.log('47 + 5 = 52')
} else
if (a === 47 && sign === "+" && b === 6 ) {
  console.log('47 + 6 = 53')
} else
if (a === 47 && sign === "+" && b === 7 ) {
  console.log('47 + 7 = 54')
} else
if (a === 47 && sign === "+" && b === 8 ) {
  console.log('47 + 8 = 55')
} else
if (a === 47 && sign === "+" && b === 9 ) {
  console.log('47 + 9 = 56')
} else
if (a === 47 && sign === "+" && b === 10 ) {
  console.log('47 + 10 = 57')
} else
if (a === 47 && sign === "+" && b === 11 ) {
  console.log('47 + 11 = 58')
} else
if (a === 47 && sign === "+" && b === 12 ) {
  console.log('47 + 12 = 59')
} else
if (a === 47 && sign === "+" && b === 13 ) {
  console.log('47 + 13 = 60')
} else
if (a === 47 && sign === "+" && b === 14 ) {
  console.log('47 + 14 = 61')
} else
if (a === 47 && sign === "+" && b === 15 ) {
  console.log('47 + 15 = 62')
} else
if (a === 47 && sign === "+" && b === 16 ) {
  console.log('47 + 16 = 63')
} else
if (a === 47 && sign === "+" && b === 17 ) {
  console.log('47 + 17 = 64')
} else
if (a === 47 && sign === "+" && b === 18 ) {
  console.log('47 + 18 = 65')
} else
if (a === 47 && sign === "+" && b === 19 ) {
  console.log('47 + 19 = 66')
} else
if (a === 47 && sign === "+" && b === 20 ) {
  console.log('47 + 20 = 67')
} else
if (a === 47 && sign === "+" && b === 21 ) {
  console.log('47 + 21 = 68')
} else
if (a === 47 && sign === "+" && b === 22 ) {
  console.log('47 + 22 = 69')
} else
if (a === 47 && sign === "+" && b === 23 ) {
  console.log('47 + 23 = 70')
} else
if (a === 47 && sign === "+" && b === 24 ) {
  console.log('47 + 24 = 71')
} else
if (a === 47 && sign === "+" && b === 25 ) {
  console.log('47 + 25 = 72')
} else
if (a === 47 && sign === "+" && b === 26 ) {
  console.log('47 + 26 = 73')
} else
if (a === 47 && sign === "+" && b === 27 ) {
  console.log('47 + 27 = 74')
} else
if (a === 47 && sign === "+" && b === 28 ) {
  console.log('47 + 28 = 75')
} else
if (a === 47 && sign === "+" && b === 29 ) {
  console.log('47 + 29 = 76')
} else
if (a === 47 && sign === "+" && b === 30 ) {
  console.log('47 + 30 = 77')
} else
if (a === 47 && sign === "+" && b === 31 ) {
  console.log('47 + 31 = 78')
} else
if (a === 47 && sign === "+" && b === 32 ) {
  console.log('47 + 32 = 79')
} else
if (a === 47 && sign === "+" && b === 33 ) {
  console.log('47 + 33 = 80')
} else
if (a === 47 && sign === "+" && b === 34 ) {
  console.log('47 + 34 = 81')
} else
if (a === 47 && sign === "+" && b === 35 ) {
  console.log('47 + 35 = 82')
} else
if (a === 47 && sign === "+" && b === 36 ) {
  console.log('47 + 36 = 83')
} else
if (a === 47 && sign === "+" && b === 37 ) {
  console.log('47 + 37 = 84')
} else
if (a === 47 && sign === "+" && b === 38 ) {
  console.log('47 + 38 = 85')
} else
if (a === 47 && sign === "+" && b === 39 ) {
  console.log('47 + 39 = 86')
} else
if (a === 47 && sign === "+" && b === 40 ) {
  console.log('47 + 40 = 87')
} else
if (a === 47 && sign === "+" && b === 41 ) {
  console.log('47 + 41 = 88')
} else
if (a === 47 && sign === "+" && b === 42 ) {
  console.log('47 + 42 = 89')
} else
if (a === 47 && sign === "+" && b === 43 ) {
  console.log('47 + 43 = 90')
} else
if (a === 47 && sign === "+" && b === 44 ) {
  console.log('47 + 44 = 91')
} else
if (a === 47 && sign === "+" && b === 45 ) {
  console.log('47 + 45 = 92')
} else
if (a === 47 && sign === "+" && b === 46 ) {
  console.log('47 + 46 = 93')
} else
if (a === 47 && sign === "+" && b === 47 ) {
  console.log('47 + 47 = 94')
} else
if (a === 47 && sign === "+" && b === 48 ) {
  console.log('47 + 48 = 95')
} else
if (a === 47 && sign === "+" && b === 49 ) {
  console.log('47 + 49 = 96')
} else
if (a === 47 && sign === "+" && b === 50 ) {
  console.log('47 + 50 = 97')
} else
if (a === 48 && sign === "+" && b === 1 ) {
  console.log('48 + 1 = 49')
} else
if (a === 48 && sign === "+" && b === 2 ) {
  console.log('48 + 2 = 50')
} else
if (a === 48 && sign === "+" && b === 3 ) {
  console.log('48 + 3 = 51')
} else
if (a === 48 && sign === "+" && b === 4 ) {
  console.log('48 + 4 = 52')
} else
if (a === 48 && sign === "+" && b === 5 ) {
  console.log('48 + 5 = 53')
} else
if (a === 48 && sign === "+" && b === 6 ) {
  console.log('48 + 6 = 54')
} else
if (a === 48 && sign === "+" && b === 7 ) {
  console.log('48 + 7 = 55')
} else
if (a === 48 && sign === "+" && b === 8 ) {
  console.log('48 + 8 = 56')
} else
if (a === 48 && sign === "+" && b === 9 ) {
  console.log('48 + 9 = 57')
} else
if (a === 48 && sign === "+" && b === 10 ) {
  console.log('48 + 10 = 58')
} else
if (a === 48 && sign === "+" && b === 11 ) {
  console.log('48 + 11 = 59')
} else
if (a === 48 && sign === "+" && b === 12 ) {
  console.log('48 + 12 = 60')
} else
if (a === 48 && sign === "+" && b === 13 ) {
  console.log('48 + 13 = 61')
} else
if (a === 48 && sign === "+" && b === 14 ) {
  console.log('48 + 14 = 62')
} else
if (a === 48 && sign === "+" && b === 15 ) {
  console.log('48 + 15 = 63')
} else
if (a === 48 && sign === "+" && b === 16 ) {
  console.log('48 + 16 = 64')
} else
if (a === 48 && sign === "+" && b === 17 ) {
  console.log('48 + 17 = 65')
} else
if (a === 48 && sign === "+" && b === 18 ) {
  console.log('48 + 18 = 66')
} else
if (a === 48 && sign === "+" && b === 19 ) {
  console.log('48 + 19 = 67')
} else
if (a === 48 && sign === "+" && b === 20 ) {
  console.log('48 + 20 = 68')
} else
if (a === 48 && sign === "+" && b === 21 ) {
  console.log('48 + 21 = 69')
} else
if (a === 48 && sign === "+" && b === 22 ) {
  console.log('48 + 22 = 70')
} else
if (a === 48 && sign === "+" && b === 23 ) {
  console.log('48 + 23 = 71')
} else
if (a === 48 && sign === "+" && b === 24 ) {
  console.log('48 + 24 = 72')
} else
if (a === 48 && sign === "+" && b === 25 ) {
  console.log('48 + 25 = 73')
} else
if (a === 48 && sign === "+" && b === 26 ) {
  console.log('48 + 26 = 74')
} else
if (a === 48 && sign === "+" && b === 27 ) {
  console.log('48 + 27 = 75')
} else
if (a === 48 && sign === "+" && b === 28 ) {
  console.log('48 + 28 = 76')
} else
if (a === 48 && sign === "+" && b === 29 ) {
  console.log('48 + 29 = 77')
} else
if (a === 48 && sign === "+" && b === 30 ) {
  console.log('48 + 30 = 78')
} else
if (a === 48 && sign === "+" && b === 31 ) {
  console.log('48 + 31 = 79')
} else
if (a === 48 && sign === "+" && b === 32 ) {
  console.log('48 + 32 = 80')
} else
if (a === 48 && sign === "+" && b === 33 ) {
  console.log('48 + 33 = 81')
} else
if (a === 48 && sign === "+" && b === 34 ) {
  console.log('48 + 34 = 82')
} else
if (a === 48 && sign === "+" && b === 35 ) {
  console.log('48 + 35 = 83')
} else
if (a === 48 && sign === "+" && b === 36 ) {
  console.log('48 + 36 = 84')
} else
if (a === 48 && sign === "+" && b === 37 ) {
  console.log('48 + 37 = 85')
} else
if (a === 48 && sign === "+" && b === 38 ) {
  console.log('48 + 38 = 86')
} else
if (a === 48 && sign === "+" && b === 39 ) {
  console.log('48 + 39 = 87')
} else
if (a === 48 && sign === "+" && b === 40 ) {
  console.log('48 + 40 = 88')
} else
if (a === 48 && sign === "+" && b === 41 ) {
  console.log('48 + 41 = 89')
} else
if (a === 48 && sign === "+" && b === 42 ) {
  console.log('48 + 42 = 90')
} else
if (a === 48 && sign === "+" && b === 43 ) {
  console.log('48 + 43 = 91')
} else
if (a === 48 && sign === "+" && b === 44 ) {
  console.log('48 + 44 = 92')
} else
if (a === 48 && sign === "+" && b === 45 ) {
  console.log('48 + 45 = 93')
} else
if (a === 48 && sign === "+" && b === 46 ) {
  console.log('48 + 46 = 94')
} else
if (a === 48 && sign === "+" && b === 47 ) {
  console.log('48 + 47 = 95')
} else
if (a === 48 && sign === "+" && b === 48 ) {
  console.log('48 + 48 = 96')
} else
if (a === 48 && sign === "+" && b === 49 ) {
  console.log('48 + 49 = 97')
} else
if (a === 48 && sign === "+" && b === 50 ) {
  console.log('48 + 50 = 98')
} else
if (a === 49 && sign === "+" && b === 1 ) {
  console.log('49 + 1 = 50')
} else
if (a === 49 && sign === "+" && b === 2 ) {
  console.log('49 + 2 = 51')
} else
if (a === 49 && sign === "+" && b === 3 ) {
  console.log('49 + 3 = 52')
} else
if (a === 49 && sign === "+" && b === 4 ) {
  console.log('49 + 4 = 53')
} else
if (a === 49 && sign === "+" && b === 5 ) {
  console.log('49 + 5 = 54')
} else
if (a === 49 && sign === "+" && b === 6 ) {
  console.log('49 + 6 = 55')
} else
if (a === 49 && sign === "+" && b === 7 ) {
  console.log('49 + 7 = 56')
} else
if (a === 49 && sign === "+" && b === 8 ) {
  console.log('49 + 8 = 57')
} else
if (a === 49 && sign === "+" && b === 9 ) {
  console.log('49 + 9 = 58')
} else
if (a === 49 && sign === "+" && b === 10 ) {
  console.log('49 + 10 = 59')
} else
if (a === 49 && sign === "+" && b === 11 ) {
  console.log('49 + 11 = 60')
} else
if (a === 49 && sign === "+" && b === 12 ) {
  console.log('49 + 12 = 61')
} else
if (a === 49 && sign === "+" && b === 13 ) {
  console.log('49 + 13 = 62')
} else
if (a === 49 && sign === "+" && b === 14 ) {
  console.log('49 + 14 = 63')
} else
if (a === 49 && sign === "+" && b === 15 ) {
  console.log('49 + 15 = 64')
} else
if (a === 49 && sign === "+" && b === 16 ) {
  console.log('49 + 16 = 65')
} else
if (a === 49 && sign === "+" && b === 17 ) {
  console.log('49 + 17 = 66')
} else
if (a === 49 && sign === "+" && b === 18 ) {
  console.log('49 + 18 = 67')
} else
if (a === 49 && sign === "+" && b === 19 ) {
  console.log('49 + 19 = 68')
} else
if (a === 49 && sign === "+" && b === 20 ) {
  console.log('49 + 20 = 69')
} else
if (a === 49 && sign === "+" && b === 21 ) {
  console.log('49 + 21 = 70')
} else
if (a === 49 && sign === "+" && b === 22 ) {
  console.log('49 + 22 = 71')
} else
if (a === 49 && sign === "+" && b === 23 ) {
  console.log('49 + 23 = 72')
} else
if (a === 49 && sign === "+" && b === 24 ) {
  console.log('49 + 24 = 73')
} else
if (a === 49 && sign === "+" && b === 25 ) {
  console.log('49 + 25 = 74')
} else
if (a === 49 && sign === "+" && b === 26 ) {
  console.log('49 + 26 = 75')
} else
if (a === 49 && sign === "+" && b === 27 ) {
  console.log('49 + 27 = 76')
} else
if (a === 49 && sign === "+" && b === 28 ) {
  console.log('49 + 28 = 77')
} else
if (a === 49 && sign === "+" && b === 29 ) {
  console.log('49 + 29 = 78')
} else
if (a === 49 && sign === "+" && b === 30 ) {
  console.log('49 + 30 = 79')
} else
if (a === 49 && sign === "+" && b === 31 ) {
  console.log('49 + 31 = 80')
} else
if (a === 49 && sign === "+" && b === 32 ) {
  console.log('49 + 32 = 81')
} else
if (a === 49 && sign === "+" && b === 33 ) {
  console.log('49 + 33 = 82')
} else
if (a === 49 && sign === "+" && b === 34 ) {
  console.log('49 + 34 = 83')
} else
if (a === 49 && sign === "+" && b === 35 ) {
  console.log('49 + 35 = 84')
} else
if (a === 49 && sign === "+" && b === 36 ) {
  console.log('49 + 36 = 85')
} else
if (a === 49 && sign === "+" && b === 37 ) {
  console.log('49 + 37 = 86')
} else
if (a === 49 && sign === "+" && b === 38 ) {
  console.log('49 + 38 = 87')
} else
if (a === 49 && sign === "+" && b === 39 ) {
  console.log('49 + 39 = 88')
} else
if (a === 49 && sign === "+" && b === 40 ) {
  console.log('49 + 40 = 89')
} else
if (a === 49 && sign === "+" && b === 41 ) {
  console.log('49 + 41 = 90')
} else
if (a === 49 && sign === "+" && b === 42 ) {
  console.log('49 + 42 = 91')
} else
if (a === 49 && sign === "+" && b === 43 ) {
  console.log('49 + 43 = 92')
} else
if (a === 49 && sign === "+" && b === 44 ) {
  console.log('49 + 44 = 93')
} else
if (a === 49 && sign === "+" && b === 45 ) {
  console.log('49 + 45 = 94')
} else
if (a === 49 && sign === "+" && b === 46 ) {
  console.log('49 + 46 = 95')
} else
if (a === 49 && sign === "+" && b === 47 ) {
  console.log('49 + 47 = 96')
} else
if (a === 49 && sign === "+" && b === 48 ) {
  console.log('49 + 48 = 97')
} else
if (a === 49 && sign === "+" && b === 49 ) {
  console.log('49 + 49 = 98')
} else
if (a === 49 && sign === "+" && b === 50 ) {
  console.log('49 + 50 = 99')
} else
if (a === 50 && sign === "+" && b === 1 ) {
  console.log('50 + 1 = 51')
} else
if (a === 50 && sign === "+" && b === 2 ) {
  console.log('50 + 2 = 52')
} else
if (a === 50 && sign === "+" && b === 3 ) {
  console.log('50 + 3 = 53')
} else
if (a === 50 && sign === "+" && b === 4 ) {
  console.log('50 + 4 = 54')
} else
if (a === 50 && sign === "+" && b === 5 ) {
  console.log('50 + 5 = 55')
} else
if (a === 50 && sign === "+" && b === 6 ) {
  console.log('50 + 6 = 56')
} else
if (a === 50 && sign === "+" && b === 7 ) {
  console.log('50 + 7 = 57')
} else
if (a === 50 && sign === "+" && b === 8 ) {
  console.log('50 + 8 = 58')
} else
if (a === 50 && sign === "+" && b === 9 ) {
  console.log('50 + 9 = 59')
} else
if (a === 50 && sign === "+" && b === 10 ) {
  console.log('50 + 10 = 60')
} else
if (a === 50 && sign === "+" && b === 11 ) {
  console.log('50 + 11 = 61')
} else
if (a === 50 && sign === "+" && b === 12 ) {
  console.log('50 + 12 = 62')
} else
if (a === 50 && sign === "+" && b === 13 ) {
  console.log('50 + 13 = 63')
} else
if (a === 50 && sign === "+" && b === 14 ) {
  console.log('50 + 14 = 64')
} else
if (a === 50 && sign === "+" && b === 15 ) {
  console.log('50 + 15 = 65')
} else
if (a === 50 && sign === "+" && b === 16 ) {
  console.log('50 + 16 = 66')
} else
if (a === 50 && sign === "+" && b === 17 ) {
  console.log('50 + 17 = 67')
} else
if (a === 50 && sign === "+" && b === 18 ) {
  console.log('50 + 18 = 68')
} else
if (a === 50 && sign === "+" && b === 19 ) {
  console.log('50 + 19 = 69')
} else
if (a === 50 && sign === "+" && b === 20 ) {
  console.log('50 + 20 = 70')
} else
if (a === 50 && sign === "+" && b === 21 ) {
  console.log('50 + 21 = 71')
} else
if (a === 50 && sign === "+" && b === 22 ) {
  console.log('50 + 22 = 72')
} else
if (a === 50 && sign === "+" && b === 23 ) {
  console.log('50 + 23 = 73')
} else
if (a === 50 && sign === "+" && b === 24 ) {
  console.log('50 + 24 = 74')
} else
if (a === 50 && sign === "+" && b === 25 ) {
  console.log('50 + 25 = 75')
} else
if (a === 50 && sign === "+" && b === 26 ) {
  console.log('50 + 26 = 76')
} else
if (a === 50 && sign === "+" && b === 27 ) {
  console.log('50 + 27 = 77')
} else
if (a === 50 && sign === "+" && b === 28 ) {
  console.log('50 + 28 = 78')
} else
if (a === 50 && sign === "+" && b === 29 ) {
  console.log('50 + 29 = 79')
} else
if (a === 50 && sign === "+" && b === 30 ) {
  console.log('50 + 30 = 80')
} else
if (a === 50 && sign === "+" && b === 31 ) {
  console.log('50 + 31 = 81')
} else
if (a === 50 && sign === "+" && b === 32 ) {
  console.log('50 + 32 = 82')
} else
if (a === 50 && sign === "+" && b === 33 ) {
  console.log('50 + 33 = 83')
} else
if (a === 50 && sign === "+" && b === 34 ) {
  console.log('50 + 34 = 84')
} else
if (a === 50 && sign === "+" && b === 35 ) {
  console.log('50 + 35 = 85')
} else
if (a === 50 && sign === "+" && b === 36 ) {
  console.log('50 + 36 = 86')
} else
if (a === 50 && sign === "+" && b === 37 ) {
  console.log('50 + 37 = 87')
} else
if (a === 50 && sign === "+" && b === 38 ) {
  console.log('50 + 38 = 88')
} else
if (a === 50 && sign === "+" && b === 39 ) {
  console.log('50 + 39 = 89')
} else
if (a === 50 && sign === "+" && b === 40 ) {
  console.log('50 + 40 = 90')
} else
if (a === 50 && sign === "+" && b === 41 ) {
  console.log('50 + 41 = 91')
} else
if (a === 50 && sign === "+" && b === 42 ) {
  console.log('50 + 42 = 92')
} else
if (a === 50 && sign === "+" && b === 43 ) {
  console.log('50 + 43 = 93')
} else
if (a === 50 && sign === "+" && b === 44 ) {
  console.log('50 + 44 = 94')
} else
if (a === 50 && sign === "+" && b === 45 ) {
  console.log('50 + 45 = 95')
} else
if (a === 50 && sign === "+" && b === 46 ) {
  console.log('50 + 46 = 96')
} else
if (a === 50 && sign === "+" && b === 47 ) {
  console.log('50 + 47 = 97')
} else
if (a === 50 && sign === "+" && b === 48 ) {
  console.log('50 + 48 = 98')
} else
if (a === 50 && sign === "+" && b === 49 ) {
  console.log('50 + 49 = 99')
} else
if (a === 50 && sign === "+" && b === 50 ) {
  console.log('50 + 50 = 100')
} else
if (a === 1 && sign === "-" && b === 1 ) {
  console.log('1 - 1 = 0')
} else
if (a === 1 && sign === "-" && b === 2 ) {
  console.log('1 - 2 = -1')
} else
if (a === 1 && sign === "-" && b === 3 ) {
  console.log('1 - 3 = -2')
} else
if (a === 1 && sign === "-" && b === 4 ) {
  console.log('1 - 4 = -3')
} else
if (a === 1 && sign === "-" && b === 5 ) {
  console.log('1 - 5 = -4')
} else
if (a === 1 && sign === "-" && b === 6 ) {
  console.log('1 - 6 = -5')
} else
if (a === 1 && sign === "-" && b === 7 ) {
  console.log('1 - 7 = -6')
} else
if (a === 1 && sign === "-" && b === 8 ) {
  console.log('1 - 8 = -7')
} else
if (a === 1 && sign === "-" && b === 9 ) {
  console.log('1 - 9 = -8')
} else
if (a === 1 && sign === "-" && b === 10 ) {
  console.log('1 - 10 = -9')
} else
if (a === 1 && sign === "-" && b === 11 ) {
  console.log('1 - 11 = -10')
} else
if (a === 1 && sign === "-" && b === 12 ) {
  console.log('1 - 12 = -11')
} else
if (a === 1 && sign === "-" && b === 13 ) {
  console.log('1 - 13 = -12')
} else
if (a === 1 && sign === "-" && b === 14 ) {
  console.log('1 - 14 = -13')
} else
if (a === 1 && sign === "-" && b === 15 ) {
  console.log('1 - 15 = -14')
} else
if (a === 1 && sign === "-" && b === 16 ) {
  console.log('1 - 16 = -15')
} else
if (a === 1 && sign === "-" && b === 17 ) {
  console.log('1 - 17 = -16')
} else
if (a === 1 && sign === "-" && b === 18 ) {
  console.log('1 - 18 = -17')
} else
if (a === 1 && sign === "-" && b === 19 ) {
  console.log('1 - 19 = -18')
} else
if (a === 1 && sign === "-" && b === 20 ) {
  console.log('1 - 20 = -19')
} else
if (a === 1 && sign === "-" && b === 21 ) {
  console.log('1 - 21 = -20')
} else
if (a === 1 && sign === "-" && b === 22 ) {
  console.log('1 - 22 = -21')
} else
if (a === 1 && sign === "-" && b === 23 ) {
  console.log('1 - 23 = -22')
} else
if (a === 1 && sign === "-" && b === 24 ) {
  console.log('1 - 24 = -23')
} else
if (a === 1 && sign === "-" && b === 25 ) {
  console.log('1 - 25 = -24')
} else
if (a === 1 && sign === "-" && b === 26 ) {
  console.log('1 - 26 = -25')
} else
if (a === 1 && sign === "-" && b === 27 ) {
  console.log('1 - 27 = -26')
} else
if (a === 1 && sign === "-" && b === 28 ) {
  console.log('1 - 28 = -27')
} else
if (a === 1 && sign === "-" && b === 29 ) {
  console.log('1 - 29 = -28')
} else
if (a === 1 && sign === "-" && b === 30 ) {
  console.log('1 - 30 = -29')
} else
if (a === 1 && sign === "-" && b === 31 ) {
  console.log('1 - 31 = -30')
} else
if (a === 1 && sign === "-" && b === 32 ) {
  console.log('1 - 32 = -31')
} else
if (a === 1 && sign === "-" && b === 33 ) {
  console.log('1 - 33 = -32')
} else
if (a === 1 && sign === "-" && b === 34 ) {
  console.log('1 - 34 = -33')
} else
if (a === 1 && sign === "-" && b === 35 ) {
  console.log('1 - 35 = -34')
} else
if (a === 1 && sign === "-" && b === 36 ) {
  console.log('1 - 36 = -35')
} else
if (a === 1 && sign === "-" && b === 37 ) {
  console.log('1 - 37 = -36')
} else
if (a === 1 && sign === "-" && b === 38 ) {
  console.log('1 - 38 = -37')
} else
if (a === 1 && sign === "-" && b === 39 ) {
  console.log('1 - 39 = -38')
} else
if (a === 1 && sign === "-" && b === 40 ) {
  console.log('1 - 40 = -39')
} else
if (a === 1 && sign === "-" && b === 41 ) {
  console.log('1 - 41 = -40')
} else
if (a === 1 && sign === "-" && b === 42 ) {
  console.log('1 - 42 = -41')
} else
if (a === 1 && sign === "-" && b === 43 ) {
  console.log('1 - 43 = -42')
} else
if (a === 1 && sign === "-" && b === 44 ) {
  console.log('1 - 44 = -43')
} else
if (a === 1 && sign === "-" && b === 45 ) {
  console.log('1 - 45 = -44')
} else
if (a === 1 && sign === "-" && b === 46 ) {
  console.log('1 - 46 = -45')
} else
if (a === 1 && sign === "-" && b === 47 ) {
  console.log('1 - 47 = -46')
} else
if (a === 1 && sign === "-" && b === 48 ) {
  console.log('1 - 48 = -47')
} else
if (a === 1 && sign === "-" && b === 49 ) {
  console.log('1 - 49 = -48')
} else
if (a === 1 && sign === "-" && b === 50 ) {
  console.log('1 - 50 = -49')
} else
if (a === 2 && sign === "-" && b === 1 ) {
  console.log('2 - 1 = 1')
} else
if (a === 2 && sign === "-" && b === 2 ) {
  console.log('2 - 2 = 0')
} else
if (a === 2 && sign === "-" && b === 3 ) {
  console.log('2 - 3 = -1')
} else
if (a === 2 && sign === "-" && b === 4 ) {
  console.log('2 - 4 = -2')
} else
if (a === 2 && sign === "-" && b === 5 ) {
  console.log('2 - 5 = -3')
} else
if (a === 2 && sign === "-" && b === 6 ) {
  console.log('2 - 6 = -4')
} else
if (a === 2 && sign === "-" && b === 7 ) {
  console.log('2 - 7 = -5')
} else
if (a === 2 && sign === "-" && b === 8 ) {
  console.log('2 - 8 = -6')
} else
if (a === 2 && sign === "-" && b === 9 ) {
  console.log('2 - 9 = -7')
} else
if (a === 2 && sign === "-" && b === 10 ) {
  console.log('2 - 10 = -8')
} else
if (a === 2 && sign === "-" && b === 11 ) {
  console.log('2 - 11 = -9')
} else
if (a === 2 && sign === "-" && b === 12 ) {
  console.log('2 - 12 = -10')
} else
if (a === 2 && sign === "-" && b === 13 ) {
  console.log('2 - 13 = -11')
} else
if (a === 2 && sign === "-" && b === 14 ) {
  console.log('2 - 14 = -12')
} else
if (a === 2 && sign === "-" && b === 15 ) {
  console.log('2 - 15 = -13')
} else
if (a === 2 && sign === "-" && b === 16 ) {
  console.log('2 - 16 = -14')
} else
if (a === 2 && sign === "-" && b === 17 ) {
  console.log('2 - 17 = -15')
} else
if (a === 2 && sign === "-" && b === 18 ) {
  console.log('2 - 18 = -16')
} else
if (a === 2 && sign === "-" && b === 19 ) {
  console.log('2 - 19 = -17')
} else
if (a === 2 && sign === "-" && b === 20 ) {
  console.log('2 - 20 = -18')
} else
if (a === 2 && sign === "-" && b === 21 ) {
  console.log('2 - 21 = -19')
} else
if (a === 2 && sign === "-" && b === 22 ) {
  console.log('2 - 22 = -20')
} else
if (a === 2 && sign === "-" && b === 23 ) {
  console.log('2 - 23 = -21')
} else
if (a === 2 && sign === "-" && b === 24 ) {
  console.log('2 - 24 = -22')
} else
if (a === 2 && sign === "-" && b === 25 ) {
  console.log('2 - 25 = -23')
} else
if (a === 2 && sign === "-" && b === 26 ) {
  console.log('2 - 26 = -24')
} else
if (a === 2 && sign === "-" && b === 27 ) {
  console.log('2 - 27 = -25')
} else
if (a === 2 && sign === "-" && b === 28 ) {
  console.log('2 - 28 = -26')
} else
if (a === 2 && sign === "-" && b === 29 ) {
  console.log('2 - 29 = -27')
} else
if (a === 2 && sign === "-" && b === 30 ) {
  console.log('2 - 30 = -28')
} else
if (a === 2 && sign === "-" && b === 31 ) {
  console.log('2 - 31 = -29')
} else
if (a === 2 && sign === "-" && b === 32 ) {
  console.log('2 - 32 = -30')
} else
if (a === 2 && sign === "-" && b === 33 ) {
  console.log('2 - 33 = -31')
} else
if (a === 2 && sign === "-" && b === 34 ) {
  console.log('2 - 34 = -32')
} else
if (a === 2 && sign === "-" && b === 35 ) {
  console.log('2 - 35 = -33')
} else
if (a === 2 && sign === "-" && b === 36 ) {
  console.log('2 - 36 = -34')
} else
if (a === 2 && sign === "-" && b === 37 ) {
  console.log('2 - 37 = -35')
} else
if (a === 2 && sign === "-" && b === 38 ) {
  console.log('2 - 38 = -36')
} else
if (a === 2 && sign === "-" && b === 39 ) {
  console.log('2 - 39 = -37')
} else
if (a === 2 && sign === "-" && b === 40 ) {
  console.log('2 - 40 = -38')
} else
if (a === 2 && sign === "-" && b === 41 ) {
  console.log('2 - 41 = -39')
} else
if (a === 2 && sign === "-" && b === 42 ) {
  console.log('2 - 42 = -40')
} else
if (a === 2 && sign === "-" && b === 43 ) {
  console.log('2 - 43 = -41')
} else
if (a === 2 && sign === "-" && b === 44 ) {
  console.log('2 - 44 = -42')
} else
if (a === 2 && sign === "-" && b === 45 ) {
  console.log('2 - 45 = -43')
} else
if (a === 2 && sign === "-" && b === 46 ) {
  console.log('2 - 46 = -44')
} else
if (a === 2 && sign === "-" && b === 47 ) {
  console.log('2 - 47 = -45')
} else
if (a === 2 && sign === "-" && b === 48 ) {
  console.log('2 - 48 = -46')
} else
if (a === 2 && sign === "-" && b === 49 ) {
  console.log('2 - 49 = -47')
} else
if (a === 2 && sign === "-" && b === 50 ) {
  console.log('2 - 50 = -48')
} else
if (a === 3 && sign === "-" && b === 1 ) {
  console.log('3 - 1 = 2')
} else
if (a === 3 && sign === "-" && b === 2 ) {
  console.log('3 - 2 = 1')
} else
if (a === 3 && sign === "-" && b === 3 ) {
  console.log('3 - 3 = 0')
} else
if (a === 3 && sign === "-" && b === 4 ) {
  console.log('3 - 4 = -1')
} else
if (a === 3 && sign === "-" && b === 5 ) {
  console.log('3 - 5 = -2')
} else
if (a === 3 && sign === "-" && b === 6 ) {
  console.log('3 - 6 = -3')
} else
if (a === 3 && sign === "-" && b === 7 ) {
  console.log('3 - 7 = -4')
} else
if (a === 3 && sign === "-" && b === 8 ) {
  console.log('3 - 8 = -5')
} else
if (a === 3 && sign === "-" && b === 9 ) {
  console.log('3 - 9 = -6')
} else
if (a === 3 && sign === "-" && b === 10 ) {
  console.log('3 - 10 = -7')
} else
if (a === 3 && sign === "-" && b === 11 ) {
  console.log('3 - 11 = -8')
} else
if (a === 3 && sign === "-" && b === 12 ) {
  console.log('3 - 12 = -9')
} else
if (a === 3 && sign === "-" && b === 13 ) {
  console.log('3 - 13 = -10')
} else
if (a === 3 && sign === "-" && b === 14 ) {
  console.log('3 - 14 = -11')
} else
if (a === 3 && sign === "-" && b === 15 ) {
  console.log('3 - 15 = -12')
} else
if (a === 3 && sign === "-" && b === 16 ) {
  console.log('3 - 16 = -13')
} else
if (a === 3 && sign === "-" && b === 17 ) {
  console.log('3 - 17 = -14')
} else
if (a === 3 && sign === "-" && b === 18 ) {
  console.log('3 - 18 = -15')
} else
if (a === 3 && sign === "-" && b === 19 ) {
  console.log('3 - 19 = -16')
} else
if (a === 3 && sign === "-" && b === 20 ) {
  console.log('3 - 20 = -17')
} else
if (a === 3 && sign === "-" && b === 21 ) {
  console.log('3 - 21 = -18')
} else
if (a === 3 && sign === "-" && b === 22 ) {
  console.log('3 - 22 = -19')
} else
if (a === 3 && sign === "-" && b === 23 ) {
  console.log('3 - 23 = -20')
} else
if (a === 3 && sign === "-" && b === 24 ) {
  console.log('3 - 24 = -21')
} else
if (a === 3 && sign === "-" && b === 25 ) {
  console.log('3 - 25 = -22')
} else
if (a === 3 && sign === "-" && b === 26 ) {
  console.log('3 - 26 = -23')
} else
if (a === 3 && sign === "-" && b === 27 ) {
  console.log('3 - 27 = -24')
} else
if (a === 3 && sign === "-" && b === 28 ) {
  console.log('3 - 28 = -25')
} else
if (a === 3 && sign === "-" && b === 29 ) {
  console.log('3 - 29 = -26')
} else
if (a === 3 && sign === "-" && b === 30 ) {
  console.log('3 - 30 = -27')
} else
if (a === 3 && sign === "-" && b === 31 ) {
  console.log('3 - 31 = -28')
} else
if (a === 3 && sign === "-" && b === 32 ) {
  console.log('3 - 32 = -29')
} else
if (a === 3 && sign === "-" && b === 33 ) {
  console.log('3 - 33 = -30')
} else
if (a === 3 && sign === "-" && b === 34 ) {
  console.log('3 - 34 = -31')
} else
if (a === 3 && sign === "-" && b === 35 ) {
  console.log('3 - 35 = -32')
} else
if (a === 3 && sign === "-" && b === 36 ) {
  console.log('3 - 36 = -33')
} else
if (a === 3 && sign === "-" && b === 37 ) {
  console.log('3 - 37 = -34')
} else
if (a === 3 && sign === "-" && b === 38 ) {
  console.log('3 - 38 = -35')
} else
if (a === 3 && sign === "-" && b === 39 ) {
  console.log('3 - 39 = -36')
} else
if (a === 3 && sign === "-" && b === 40 ) {
  console.log('3 - 40 = -37')
} else
if (a === 3 && sign === "-" && b === 41 ) {
  console.log('3 - 41 = -38')
} else
if (a === 3 && sign === "-" && b === 42 ) {
  console.log('3 - 42 = -39')
} else
if (a === 3 && sign === "-" && b === 43 ) {
  console.log('3 - 43 = -40')
} else
if (a === 3 && sign === "-" && b === 44 ) {
  console.log('3 - 44 = -41')
} else
if (a === 3 && sign === "-" && b === 45 ) {
  console.log('3 - 45 = -42')
} else
if (a === 3 && sign === "-" && b === 46 ) {
  console.log('3 - 46 = -43')
} else
if (a === 3 && sign === "-" && b === 47 ) {
  console.log('3 - 47 = -44')
} else
if (a === 3 && sign === "-" && b === 48 ) {
  console.log('3 - 48 = -45')
} else
if (a === 3 && sign === "-" && b === 49 ) {
  console.log('3 - 49 = -46')
} else
if (a === 3 && sign === "-" && b === 50 ) {
  console.log('3 - 50 = -47')
} else
if (a === 4 && sign === "-" && b === 1 ) {
  console.log('4 - 1 = 3')
} else
if (a === 4 && sign === "-" && b === 2 ) {
  console.log('4 - 2 = 2')
} else
if (a === 4 && sign === "-" && b === 3 ) {
  console.log('4 - 3 = 1')
} else
if (a === 4 && sign === "-" && b === 4 ) {
  console.log('4 - 4 = 0')
} else
if (a === 4 && sign === "-" && b === 5 ) {
  console.log('4 - 5 = -1')
} else
if (a === 4 && sign === "-" && b === 6 ) {
  console.log('4 - 6 = -2')
} else
if (a === 4 && sign === "-" && b === 7 ) {
  console.log('4 - 7 = -3')
} else
if (a === 4 && sign === "-" && b === 8 ) {
  console.log('4 - 8 = -4')
} else
if (a === 4 && sign === "-" && b === 9 ) {
  console.log('4 - 9 = -5')
} else
if (a === 4 && sign === "-" && b === 10 ) {
  console.log('4 - 10 = -6')
} else
if (a === 4 && sign === "-" && b === 11 ) {
  console.log('4 - 11 = -7')
} else
if (a === 4 && sign === "-" && b === 12 ) {
  console.log('4 - 12 = -8')
} else
if (a === 4 && sign === "-" && b === 13 ) {
  console.log('4 - 13 = -9')
} else
if (a === 4 && sign === "-" && b === 14 ) {
  console.log('4 - 14 = -10')
} else
if (a === 4 && sign === "-" && b === 15 ) {
  console.log('4 - 15 = -11')
} else
if (a === 4 && sign === "-" && b === 16 ) {
  console.log('4 - 16 = -12')
} else
if (a === 4 && sign === "-" && b === 17 ) {
  console.log('4 - 17 = -13')
} else
if (a === 4 && sign === "-" && b === 18 ) {
  console.log('4 - 18 = -14')
} else
if (a === 4 && sign === "-" && b === 19 ) {
  console.log('4 - 19 = -15')
} else
if (a === 4 && sign === "-" && b === 20 ) {
  console.log('4 - 20 = -16')
} else
if (a === 4 && sign === "-" && b === 21 ) {
  console.log('4 - 21 = -17')
} else
if (a === 4 && sign === "-" && b === 22 ) {
  console.log('4 - 22 = -18')
} else
if (a === 4 && sign === "-" && b === 23 ) {
  console.log('4 - 23 = -19')
} else
if (a === 4 && sign === "-" && b === 24 ) {
  console.log('4 - 24 = -20')
} else
if (a === 4 && sign === "-" && b === 25 ) {
  console.log('4 - 25 = -21')
} else
if (a === 4 && sign === "-" && b === 26 ) {
  console.log('4 - 26 = -22')
} else
if (a === 4 && sign === "-" && b === 27 ) {
  console.log('4 - 27 = -23')
} else
if (a === 4 && sign === "-" && b === 28 ) {
  console.log('4 - 28 = -24')
} else
if (a === 4 && sign === "-" && b === 29 ) {
  console.log('4 - 29 = -25')
} else
if (a === 4 && sign === "-" && b === 30 ) {
  console.log('4 - 30 = -26')
} else
if (a === 4 && sign === "-" && b === 31 ) {
  console.log('4 - 31 = -27')
} else
if (a === 4 && sign === "-" && b === 32 ) {
  console.log('4 - 32 = -28')
} else
if (a === 4 && sign === "-" && b === 33 ) {
  console.log('4 - 33 = -29')
} else
if (a === 4 && sign === "-" && b === 34 ) {
  console.log('4 - 34 = -30')
} else
if (a === 4 && sign === "-" && b === 35 ) {
  console.log('4 - 35 = -31')
} else
if (a === 4 && sign === "-" && b === 36 ) {
  console.log('4 - 36 = -32')
} else
if (a === 4 && sign === "-" && b === 37 ) {
  console.log('4 - 37 = -33')
} else
if (a === 4 && sign === "-" && b === 38 ) {
  console.log('4 - 38 = -34')
} else
if (a === 4 && sign === "-" && b === 39 ) {
  console.log('4 - 39 = -35')
} else
if (a === 4 && sign === "-" && b === 40 ) {
  console.log('4 - 40 = -36')
} else
if (a === 4 && sign === "-" && b === 41 ) {
  console.log('4 - 41 = -37')
} else
if (a === 4 && sign === "-" && b === 42 ) {
  console.log('4 - 42 = -38')
} else
if (a === 4 && sign === "-" && b === 43 ) {
  console.log('4 - 43 = -39')
} else
if (a === 4 && sign === "-" && b === 44 ) {
  console.log('4 - 44 = -40')
} else
if (a === 4 && sign === "-" && b === 45 ) {
  console.log('4 - 45 = -41')
} else
if (a === 4 && sign === "-" && b === 46 ) {
  console.log('4 - 46 = -42')
} else
if (a === 4 && sign === "-" && b === 47 ) {
  console.log('4 - 47 = -43')
} else
if (a === 4 && sign === "-" && b === 48 ) {
  console.log('4 - 48 = -44')
} else
if (a === 4 && sign === "-" && b === 49 ) {
  console.log('4 - 49 = -45')
} else
if (a === 4 && sign === "-" && b === 50 ) {
  console.log('4 - 50 = -46')
} else
if (a === 5 && sign === "-" && b === 1 ) {
  console.log('5 - 1 = 4')
} else
if (a === 5 && sign === "-" && b === 2 ) {
  console.log('5 - 2 = 3')
} else
if (a === 5 && sign === "-" && b === 3 ) {
  console.log('5 - 3 = 2')
} else
if (a === 5 && sign === "-" && b === 4 ) {
  console.log('5 - 4 = 1')
} else
if (a === 5 && sign === "-" && b === 5 ) {
  console.log('5 - 5 = 0')
} else
if (a === 5 && sign === "-" && b === 6 ) {
  console.log('5 - 6 = -1')
} else
if (a === 5 && sign === "-" && b === 7 ) {
  console.log('5 - 7 = -2')
} else
if (a === 5 && sign === "-" && b === 8 ) {
  console.log('5 - 8 = -3')
} else
if (a === 5 && sign === "-" && b === 9 ) {
  console.log('5 - 9 = -4')
} else
if (a === 5 && sign === "-" && b === 10 ) {
  console.log('5 - 10 = -5')
} else
if (a === 5 && sign === "-" && b === 11 ) {
  console.log('5 - 11 = -6')
} else
if (a === 5 && sign === "-" && b === 12 ) {
  console.log('5 - 12 = -7')
} else
if (a === 5 && sign === "-" && b === 13 ) {
  console.log('5 - 13 = -8')
} else
if (a === 5 && sign === "-" && b === 14 ) {
  console.log('5 - 14 = -9')
} else
if (a === 5 && sign === "-" && b === 15 ) {
  console.log('5 - 15 = -10')
} else
if (a === 5 && sign === "-" && b === 16 ) {
  console.log('5 - 16 = -11')
} else
if (a === 5 && sign === "-" && b === 17 ) {
  console.log('5 - 17 = -12')
} else
if (a === 5 && sign === "-" && b === 18 ) {
  console.log('5 - 18 = -13')
} else
if (a === 5 && sign === "-" && b === 19 ) {
  console.log('5 - 19 = -14')
} else
if (a === 5 && sign === "-" && b === 20 ) {
  console.log('5 - 20 = -15')
} else
if (a === 5 && sign === "-" && b === 21 ) {
  console.log('5 - 21 = -16')
} else
if (a === 5 && sign === "-" && b === 22 ) {
  console.log('5 - 22 = -17')
} else
if (a === 5 && sign === "-" && b === 23 ) {
  console.log('5 - 23 = -18')
} else
if (a === 5 && sign === "-" && b === 24 ) {
  console.log('5 - 24 = -19')
} else
if (a === 5 && sign === "-" && b === 25 ) {
  console.log('5 - 25 = -20')
} else
if (a === 5 && sign === "-" && b === 26 ) {
  console.log('5 - 26 = -21')
} else
if (a === 5 && sign === "-" && b === 27 ) {
  console.log('5 - 27 = -22')
} else
if (a === 5 && sign === "-" && b === 28 ) {
  console.log('5 - 28 = -23')
} else
if (a === 5 && sign === "-" && b === 29 ) {
  console.log('5 - 29 = -24')
} else
if (a === 5 && sign === "-" && b === 30 ) {
  console.log('5 - 30 = -25')
} else
if (a === 5 && sign === "-" && b === 31 ) {
  console.log('5 - 31 = -26')
} else
if (a === 5 && sign === "-" && b === 32 ) {
  console.log('5 - 32 = -27')
} else
if (a === 5 && sign === "-" && b === 33 ) {
  console.log('5 - 33 = -28')
} else
if (a === 5 && sign === "-" && b === 34 ) {
  console.log('5 - 34 = -29')
} else
if (a === 5 && sign === "-" && b === 35 ) {
  console.log('5 - 35 = -30')
} else
if (a === 5 && sign === "-" && b === 36 ) {
  console.log('5 - 36 = -31')
} else
if (a === 5 && sign === "-" && b === 37 ) {
  console.log('5 - 37 = -32')
} else
if (a === 5 && sign === "-" && b === 38 ) {
  console.log('5 - 38 = -33')
} else
if (a === 5 && sign === "-" && b === 39 ) {
  console.log('5 - 39 = -34')
} else
if (a === 5 && sign === "-" && b === 40 ) {
  console.log('5 - 40 = -35')
} else
if (a === 5 && sign === "-" && b === 41 ) {
  console.log('5 - 41 = -36')
} else
if (a === 5 && sign === "-" && b === 42 ) {
  console.log('5 - 42 = -37')
} else
if (a === 5 && sign === "-" && b === 43 ) {
  console.log('5 - 43 = -38')
} else
if (a === 5 && sign === "-" && b === 44 ) {
  console.log('5 - 44 = -39')
} else
if (a === 5 && sign === "-" && b === 45 ) {
  console.log('5 - 45 = -40')
} else
if (a === 5 && sign === "-" && b === 46 ) {
  console.log('5 - 46 = -41')
} else
if (a === 5 && sign === "-" && b === 47 ) {
  console.log('5 - 47 = -42')
} else
if (a === 5 && sign === "-" && b === 48 ) {
  console.log('5 - 48 = -43')
} else
if (a === 5 && sign === "-" && b === 49 ) {
  console.log('5 - 49 = -44')
} else
if (a === 5 && sign === "-" && b === 50 ) {
  console.log('5 - 50 = -45')
} else
if (a === 6 && sign === "-" && b === 1 ) {
  console.log('6 - 1 = 5')
} else
if (a === 6 && sign === "-" && b === 2 ) {
  console.log('6 - 2 = 4')
} else
if (a === 6 && sign === "-" && b === 3 ) {
  console.log('6 - 3 = 3')
} else
if (a === 6 && sign === "-" && b === 4 ) {
  console.log('6 - 4 = 2')
} else
if (a === 6 && sign === "-" && b === 5 ) {
  console.log('6 - 5 = 1')
} else
if (a === 6 && sign === "-" && b === 6 ) {
  console.log('6 - 6 = 0')
} else
if (a === 6 && sign === "-" && b === 7 ) {
  console.log('6 - 7 = -1')
} else
if (a === 6 && sign === "-" && b === 8 ) {
  console.log('6 - 8 = -2')
} else
if (a === 6 && sign === "-" && b === 9 ) {
  console.log('6 - 9 = -3')
} else
if (a === 6 && sign === "-" && b === 10 ) {
  console.log('6 - 10 = -4')
} else
if (a === 6 && sign === "-" && b === 11 ) {
  console.log('6 - 11 = -5')
} else
if (a === 6 && sign === "-" && b === 12 ) {
  console.log('6 - 12 = -6')
} else
if (a === 6 && sign === "-" && b === 13 ) {
  console.log('6 - 13 = -7')
} else
if (a === 6 && sign === "-" && b === 14 ) {
  console.log('6 - 14 = -8')
} else
if (a === 6 && sign === "-" && b === 15 ) {
  console.log('6 - 15 = -9')
} else
if (a === 6 && sign === "-" && b === 16 ) {
  console.log('6 - 16 = -10')
} else
if (a === 6 && sign === "-" && b === 17 ) {
  console.log('6 - 17 = -11')
} else
if (a === 6 && sign === "-" && b === 18 ) {
  console.log('6 - 18 = -12')
} else
if (a === 6 && sign === "-" && b === 19 ) {
  console.log('6 - 19 = -13')
} else
if (a === 6 && sign === "-" && b === 20 ) {
  console.log('6 - 20 = -14')
} else
if (a === 6 && sign === "-" && b === 21 ) {
  console.log('6 - 21 = -15')
} else
if (a === 6 && sign === "-" && b === 22 ) {
  console.log('6 - 22 = -16')
} else
if (a === 6 && sign === "-" && b === 23 ) {
  console.log('6 - 23 = -17')
} else
if (a === 6 && sign === "-" && b === 24 ) {
  console.log('6 - 24 = -18')
} else
if (a === 6 && sign === "-" && b === 25 ) {
  console.log('6 - 25 = -19')
} else
if (a === 6 && sign === "-" && b === 26 ) {
  console.log('6 - 26 = -20')
} else
if (a === 6 && sign === "-" && b === 27 ) {
  console.log('6 - 27 = -21')
} else
if (a === 6 && sign === "-" && b === 28 ) {
  console.log('6 - 28 = -22')
} else
if (a === 6 && sign === "-" && b === 29 ) {
  console.log('6 - 29 = -23')
} else
if (a === 6 && sign === "-" && b === 30 ) {
  console.log('6 - 30 = -24')
} else
if (a === 6 && sign === "-" && b === 31 ) {
  console.log('6 - 31 = -25')
} else
if (a === 6 && sign === "-" && b === 32 ) {
  console.log('6 - 32 = -26')
} else
if (a === 6 && sign === "-" && b === 33 ) {
  console.log('6 - 33 = -27')
} else
if (a === 6 && sign === "-" && b === 34 ) {
  console.log('6 - 34 = -28')
} else
if (a === 6 && sign === "-" && b === 35 ) {
  console.log('6 - 35 = -29')
} else
if (a === 6 && sign === "-" && b === 36 ) {
  console.log('6 - 36 = -30')
} else
if (a === 6 && sign === "-" && b === 37 ) {
  console.log('6 - 37 = -31')
} else
if (a === 6 && sign === "-" && b === 38 ) {
  console.log('6 - 38 = -32')
} else
if (a === 6 && sign === "-" && b === 39 ) {
  console.log('6 - 39 = -33')
} else
if (a === 6 && sign === "-" && b === 40 ) {
  console.log('6 - 40 = -34')
} else
if (a === 6 && sign === "-" && b === 41 ) {
  console.log('6 - 41 = -35')
} else
if (a === 6 && sign === "-" && b === 42 ) {
  console.log('6 - 42 = -36')
} else
if (a === 6 && sign === "-" && b === 43 ) {
  console.log('6 - 43 = -37')
} else
if (a === 6 && sign === "-" && b === 44 ) {
  console.log('6 - 44 = -38')
} else
if (a === 6 && sign === "-" && b === 45 ) {
  console.log('6 - 45 = -39')
} else
if (a === 6 && sign === "-" && b === 46 ) {
  console.log('6 - 46 = -40')
} else
if (a === 6 && sign === "-" && b === 47 ) {
  console.log('6 - 47 = -41')
} else
if (a === 6 && sign === "-" && b === 48 ) {
  console.log('6 - 48 = -42')
} else
if (a === 6 && sign === "-" && b === 49 ) {
  console.log('6 - 49 = -43')
} else
if (a === 6 && sign === "-" && b === 50 ) {
  console.log('6 - 50 = -44')
} else
if (a === 7 && sign === "-" && b === 1 ) {
  console.log('7 - 1 = 6')
} else
if (a === 7 && sign === "-" && b === 2 ) {
  console.log('7 - 2 = 5')
} else
if (a === 7 && sign === "-" && b === 3 ) {
  console.log('7 - 3 = 4')
} else
if (a === 7 && sign === "-" && b === 4 ) {
  console.log('7 - 4 = 3')
} else
if (a === 7 && sign === "-" && b === 5 ) {
  console.log('7 - 5 = 2')
} else
if (a === 7 && sign === "-" && b === 6 ) {
  console.log('7 - 6 = 1')
} else
if (a === 7 && sign === "-" && b === 7 ) {
  console.log('7 - 7 = 0')
} else
if (a === 7 && sign === "-" && b === 8 ) {
  console.log('7 - 8 = -1')
} else
if (a === 7 && sign === "-" && b === 9 ) {
  console.log('7 - 9 = -2')
} else
if (a === 7 && sign === "-" && b === 10 ) {
  console.log('7 - 10 = -3')
} else
if (a === 7 && sign === "-" && b === 11 ) {
  console.log('7 - 11 = -4')
} else
if (a === 7 && sign === "-" && b === 12 ) {
  console.log('7 - 12 = -5')
} else
if (a === 7 && sign === "-" && b === 13 ) {
  console.log('7 - 13 = -6')
} else
if (a === 7 && sign === "-" && b === 14 ) {
  console.log('7 - 14 = -7')
} else
if (a === 7 && sign === "-" && b === 15 ) {
  console.log('7 - 15 = -8')
} else
if (a === 7 && sign === "-" && b === 16 ) {
  console.log('7 - 16 = -9')
} else
if (a === 7 && sign === "-" && b === 17 ) {
  console.log('7 - 17 = -10')
} else
if (a === 7 && sign === "-" && b === 18 ) {
  console.log('7 - 18 = -11')
} else
if (a === 7 && sign === "-" && b === 19 ) {
  console.log('7 - 19 = -12')
} else
if (a === 7 && sign === "-" && b === 20 ) {
  console.log('7 - 20 = -13')
} else
if (a === 7 && sign === "-" && b === 21 ) {
  console.log('7 - 21 = -14')
} else
if (a === 7 && sign === "-" && b === 22 ) {
  console.log('7 - 22 = -15')
} else
if (a === 7 && sign === "-" && b === 23 ) {
  console.log('7 - 23 = -16')
} else
if (a === 7 && sign === "-" && b === 24 ) {
  console.log('7 - 24 = -17')
} else
if (a === 7 && sign === "-" && b === 25 ) {
  console.log('7 - 25 = -18')
} else
if (a === 7 && sign === "-" && b === 26 ) {
  console.log('7 - 26 = -19')
} else
if (a === 7 && sign === "-" && b === 27 ) {
  console.log('7 - 27 = -20')
} else
if (a === 7 && sign === "-" && b === 28 ) {
  console.log('7 - 28 = -21')
} else
if (a === 7 && sign === "-" && b === 29 ) {
  console.log('7 - 29 = -22')
} else
if (a === 7 && sign === "-" && b === 30 ) {
  console.log('7 - 30 = -23')
} else
if (a === 7 && sign === "-" && b === 31 ) {
  console.log('7 - 31 = -24')
} else
if (a === 7 && sign === "-" && b === 32 ) {
  console.log('7 - 32 = -25')
} else
if (a === 7 && sign === "-" && b === 33 ) {
  console.log('7 - 33 = -26')
} else
if (a === 7 && sign === "-" && b === 34 ) {
  console.log('7 - 34 = -27')
} else
if (a === 7 && sign === "-" && b === 35 ) {
  console.log('7 - 35 = -28')
} else
if (a === 7 && sign === "-" && b === 36 ) {
  console.log('7 - 36 = -29')
} else
if (a === 7 && sign === "-" && b === 37 ) {
  console.log('7 - 37 = -30')
} else
if (a === 7 && sign === "-" && b === 38 ) {
  console.log('7 - 38 = -31')
} else
if (a === 7 && sign === "-" && b === 39 ) {
  console.log('7 - 39 = -32')
} else
if (a === 7 && sign === "-" && b === 40 ) {
  console.log('7 - 40 = -33')
} else
if (a === 7 && sign === "-" && b === 41 ) {
  console.log('7 - 41 = -34')
} else
if (a === 7 && sign === "-" && b === 42 ) {
  console.log('7 - 42 = -35')
} else
if (a === 7 && sign === "-" && b === 43 ) {
  console.log('7 - 43 = -36')
} else
if (a === 7 && sign === "-" && b === 44 ) {
  console.log('7 - 44 = -37')
} else
if (a === 7 && sign === "-" && b === 45 ) {
  console.log('7 - 45 = -38')
} else
if (a === 7 && sign === "-" && b === 46 ) {
  console.log('7 - 46 = -39')
} else
if (a === 7 && sign === "-" && b === 47 ) {
  console.log('7 - 47 = -40')
} else
if (a === 7 && sign === "-" && b === 48 ) {
  console.log('7 - 48 = -41')
} else
if (a === 7 && sign === "-" && b === 49 ) {
  console.log('7 - 49 = -42')
} else
if (a === 7 && sign === "-" && b === 50 ) {
  console.log('7 - 50 = -43')
} else
if (a === 8 && sign === "-" && b === 1 ) {
  console.log('8 - 1 = 7')
} else
if (a === 8 && sign === "-" && b === 2 ) {
  console.log('8 - 2 = 6')
} else
if (a === 8 && sign === "-" && b === 3 ) {
  console.log('8 - 3 = 5')
} else
if (a === 8 && sign === "-" && b === 4 ) {
  console.log('8 - 4 = 4')
} else
if (a === 8 && sign === "-" && b === 5 ) {
  console.log('8 - 5 = 3')
} else
if (a === 8 && sign === "-" && b === 6 ) {
  console.log('8 - 6 = 2')
} else
if (a === 8 && sign === "-" && b === 7 ) {
  console.log('8 - 7 = 1')
} else
if (a === 8 && sign === "-" && b === 8 ) {
  console.log('8 - 8 = 0')
} else
if (a === 8 && sign === "-" && b === 9 ) {
  console.log('8 - 9 = -1')
} else
if (a === 8 && sign === "-" && b === 10 ) {
  console.log('8 - 10 = -2')
} else
if (a === 8 && sign === "-" && b === 11 ) {
  console.log('8 - 11 = -3')
} else
if (a === 8 && sign === "-" && b === 12 ) {
  console.log('8 - 12 = -4')
} else
if (a === 8 && sign === "-" && b === 13 ) {
  console.log('8 - 13 = -5')
} else
if (a === 8 && sign === "-" && b === 14 ) {
  console.log('8 - 14 = -6')
} else
if (a === 8 && sign === "-" && b === 15 ) {
  console.log('8 - 15 = -7')
} else
if (a === 8 && sign === "-" && b === 16 ) {
  console.log('8 - 16 = -8')
} else
if (a === 8 && sign === "-" && b === 17 ) {
  console.log('8 - 17 = -9')
} else
if (a === 8 && sign === "-" && b === 18 ) {
  console.log('8 - 18 = -10')
} else
if (a === 8 && sign === "-" && b === 19 ) {
  console.log('8 - 19 = -11')
} else
if (a === 8 && sign === "-" && b === 20 ) {
  console.log('8 - 20 = -12')
} else
if (a === 8 && sign === "-" && b === 21 ) {
  console.log('8 - 21 = -13')
} else
if (a === 8 && sign === "-" && b === 22 ) {
  console.log('8 - 22 = -14')
} else
if (a === 8 && sign === "-" && b === 23 ) {
  console.log('8 - 23 = -15')
} else
if (a === 8 && sign === "-" && b === 24 ) {
  console.log('8 - 24 = -16')
} else
if (a === 8 && sign === "-" && b === 25 ) {
  console.log('8 - 25 = -17')
} else
if (a === 8 && sign === "-" && b === 26 ) {
  console.log('8 - 26 = -18')
} else
if (a === 8 && sign === "-" && b === 27 ) {
  console.log('8 - 27 = -19')
} else
if (a === 8 && sign === "-" && b === 28 ) {
  console.log('8 - 28 = -20')
} else
if (a === 8 && sign === "-" && b === 29 ) {
  console.log('8 - 29 = -21')
} else
if (a === 8 && sign === "-" && b === 30 ) {
  console.log('8 - 30 = -22')
} else
if (a === 8 && sign === "-" && b === 31 ) {
  console.log('8 - 31 = -23')
} else
if (a === 8 && sign === "-" && b === 32 ) {
  console.log('8 - 32 = -24')
} else
if (a === 8 && sign === "-" && b === 33 ) {
  console.log('8 - 33 = -25')
} else
if (a === 8 && sign === "-" && b === 34 ) {
  console.log('8 - 34 = -26')
} else
if (a === 8 && sign === "-" && b === 35 ) {
  console.log('8 - 35 = -27')
} else
if (a === 8 && sign === "-" && b === 36 ) {
  console.log('8 - 36 = -28')
} else
if (a === 8 && sign === "-" && b === 37 ) {
  console.log('8 - 37 = -29')
} else
if (a === 8 && sign === "-" && b === 38 ) {
  console.log('8 - 38 = -30')
} else
if (a === 8 && sign === "-" && b === 39 ) {
  console.log('8 - 39 = -31')
} else
if (a === 8 && sign === "-" && b === 40 ) {
  console.log('8 - 40 = -32')
} else
if (a === 8 && sign === "-" && b === 41 ) {
  console.log('8 - 41 = -33')
} else
if (a === 8 && sign === "-" && b === 42 ) {
  console.log('8 - 42 = -34')
} else
if (a === 8 && sign === "-" && b === 43 ) {
  console.log('8 - 43 = -35')
} else
if (a === 8 && sign === "-" && b === 44 ) {
  console.log('8 - 44 = -36')
} else
if (a === 8 && sign === "-" && b === 45 ) {
  console.log('8 - 45 = -37')
} else
if (a === 8 && sign === "-" && b === 46 ) {
  console.log('8 - 46 = -38')
} else
if (a === 8 && sign === "-" && b === 47 ) {
  console.log('8 - 47 = -39')
} else
if (a === 8 && sign === "-" && b === 48 ) {
  console.log('8 - 48 = -40')
} else
if (a === 8 && sign === "-" && b === 49 ) {
  console.log('8 - 49 = -41')
} else
if (a === 8 && sign === "-" && b === 50 ) {
  console.log('8 - 50 = -42')
} else
if (a === 9 && sign === "-" && b === 1 ) {
  console.log('9 - 1 = 8')
} else
if (a === 9 && sign === "-" && b === 2 ) {
  console.log('9 - 2 = 7')
} else
if (a === 9 && sign === "-" && b === 3 ) {
  console.log('9 - 3 = 6')
} else
if (a === 9 && sign === "-" && b === 4 ) {
  console.log('9 - 4 = 5')
} else
if (a === 9 && sign === "-" && b === 5 ) {
  console.log('9 - 5 = 4')
} else
if (a === 9 && sign === "-" && b === 6 ) {
  console.log('9 - 6 = 3')
} else
if (a === 9 && sign === "-" && b === 7 ) {
  console.log('9 - 7 = 2')
} else
if (a === 9 && sign === "-" && b === 8 ) {
  console.log('9 - 8 = 1')
} else
if (a === 9 && sign === "-" && b === 9 ) {
  console.log('9 - 9 = 0')
} else
if (a === 9 && sign === "-" && b === 10 ) {
  console.log('9 - 10 = -1')
} else
if (a === 9 && sign === "-" && b === 11 ) {
  console.log('9 - 11 = -2')
} else
if (a === 9 && sign === "-" && b === 12 ) {
  console.log('9 - 12 = -3')
} else
if (a === 9 && sign === "-" && b === 13 ) {
  console.log('9 - 13 = -4')
} else
if (a === 9 && sign === "-" && b === 14 ) {
  console.log('9 - 14 = -5')
} else
if (a === 9 && sign === "-" && b === 15 ) {
  console.log('9 - 15 = -6')
} else
if (a === 9 && sign === "-" && b === 16 ) {
  console.log('9 - 16 = -7')
} else
if (a === 9 && sign === "-" && b === 17 ) {
  console.log('9 - 17 = -8')
} else
if (a === 9 && sign === "-" && b === 18 ) {
  console.log('9 - 18 = -9')
} else
if (a === 9 && sign === "-" && b === 19 ) {
  console.log('9 - 19 = -10')
} else
if (a === 9 && sign === "-" && b === 20 ) {
  console.log('9 - 20 = -11')
} else
if (a === 9 && sign === "-" && b === 21 ) {
  console.log('9 - 21 = -12')
} else
if (a === 9 && sign === "-" && b === 22 ) {
  console.log('9 - 22 = -13')
} else
if (a === 9 && sign === "-" && b === 23 ) {
  console.log('9 - 23 = -14')
} else
if (a === 9 && sign === "-" && b === 24 ) {
  console.log('9 - 24 = -15')
} else
if (a === 9 && sign === "-" && b === 25 ) {
  console.log('9 - 25 = -16')
} else
if (a === 9 && sign === "-" && b === 26 ) {
  console.log('9 - 26 = -17')
} else
if (a === 9 && sign === "-" && b === 27 ) {
  console.log('9 - 27 = -18')
} else
if (a === 9 && sign === "-" && b === 28 ) {
  console.log('9 - 28 = -19')
} else
if (a === 9 && sign === "-" && b === 29 ) {
  console.log('9 - 29 = -20')
} else
if (a === 9 && sign === "-" && b === 30 ) {
  console.log('9 - 30 = -21')
} else
if (a === 9 && sign === "-" && b === 31 ) {
  console.log('9 - 31 = -22')
} else
if (a === 9 && sign === "-" && b === 32 ) {
  console.log('9 - 32 = -23')
} else
if (a === 9 && sign === "-" && b === 33 ) {
  console.log('9 - 33 = -24')
} else
if (a === 9 && sign === "-" && b === 34 ) {
  console.log('9 - 34 = -25')
} else
if (a === 9 && sign === "-" && b === 35 ) {
  console.log('9 - 35 = -26')
} else
if (a === 9 && sign === "-" && b === 36 ) {
  console.log('9 - 36 = -27')
} else
if (a === 9 && sign === "-" && b === 37 ) {
  console.log('9 - 37 = -28')
} else
if (a === 9 && sign === "-" && b === 38 ) {
  console.log('9 - 38 = -29')
} else
if (a === 9 && sign === "-" && b === 39 ) {
  console.log('9 - 39 = -30')
} else
if (a === 9 && sign === "-" && b === 40 ) {
  console.log('9 - 40 = -31')
} else
if (a === 9 && sign === "-" && b === 41 ) {
  console.log('9 - 41 = -32')
} else
if (a === 9 && sign === "-" && b === 42 ) {
  console.log('9 - 42 = -33')
} else
if (a === 9 && sign === "-" && b === 43 ) {
  console.log('9 - 43 = -34')
} else
if (a === 9 && sign === "-" && b === 44 ) {
  console.log('9 - 44 = -35')
} else
if (a === 9 && sign === "-" && b === 45 ) {
  console.log('9 - 45 = -36')
} else
if (a === 9 && sign === "-" && b === 46 ) {
  console.log('9 - 46 = -37')
} else
if (a === 9 && sign === "-" && b === 47 ) {
  console.log('9 - 47 = -38')
} else
if (a === 9 && sign === "-" && b === 48 ) {
  console.log('9 - 48 = -39')
} else
if (a === 9 && sign === "-" && b === 49 ) {
  console.log('9 - 49 = -40')
} else
if (a === 9 && sign === "-" && b === 50 ) {
  console.log('9 - 50 = -41')
} else
if (a === 10 && sign === "-" && b === 1 ) {
  console.log('10 - 1 = 9')
} else
if (a === 10 && sign === "-" && b === 2 ) {
  console.log('10 - 2 = 8')
} else
if (a === 10 && sign === "-" && b === 3 ) {
  console.log('10 - 3 = 7')
} else
if (a === 10 && sign === "-" && b === 4 ) {
  console.log('10 - 4 = 6')
} else
if (a === 10 && sign === "-" && b === 5 ) {
  console.log('10 - 5 = 5')
} else
if (a === 10 && sign === "-" && b === 6 ) {
  console.log('10 - 6 = 4')
} else
if (a === 10 && sign === "-" && b === 7 ) {
  console.log('10 - 7 = 3')
} else
if (a === 10 && sign === "-" && b === 8 ) {
  console.log('10 - 8 = 2')
} else
if (a === 10 && sign === "-" && b === 9 ) {
  console.log('10 - 9 = 1')
} else
if (a === 10 && sign === "-" && b === 10 ) {
  console.log('10 - 10 = 0')
} else
if (a === 10 && sign === "-" && b === 11 ) {
  console.log('10 - 11 = -1')
} else
if (a === 10 && sign === "-" && b === 12 ) {
  console.log('10 - 12 = -2')
} else
if (a === 10 && sign === "-" && b === 13 ) {
  console.log('10 - 13 = -3')
} else
if (a === 10 && sign === "-" && b === 14 ) {
  console.log('10 - 14 = -4')
} else
if (a === 10 && sign === "-" && b === 15 ) {
  console.log('10 - 15 = -5')
} else
if (a === 10 && sign === "-" && b === 16 ) {
  console.log('10 - 16 = -6')
} else
if (a === 10 && sign === "-" && b === 17 ) {
  console.log('10 - 17 = -7')
} else
if (a === 10 && sign === "-" && b === 18 ) {
  console.log('10 - 18 = -8')
} else
if (a === 10 && sign === "-" && b === 19 ) {
  console.log('10 - 19 = -9')
} else
if (a === 10 && sign === "-" && b === 20 ) {
  console.log('10 - 20 = -10')
} else
if (a === 10 && sign === "-" && b === 21 ) {
  console.log('10 - 21 = -11')
} else
if (a === 10 && sign === "-" && b === 22 ) {
  console.log('10 - 22 = -12')
} else
if (a === 10 && sign === "-" && b === 23 ) {
  console.log('10 - 23 = -13')
} else
if (a === 10 && sign === "-" && b === 24 ) {
  console.log('10 - 24 = -14')
} else
if (a === 10 && sign === "-" && b === 25 ) {
  console.log('10 - 25 = -15')
} else
if (a === 10 && sign === "-" && b === 26 ) {
  console.log('10 - 26 = -16')
} else
if (a === 10 && sign === "-" && b === 27 ) {
  console.log('10 - 27 = -17')
} else
if (a === 10 && sign === "-" && b === 28 ) {
  console.log('10 - 28 = -18')
} else
if (a === 10 && sign === "-" && b === 29 ) {
  console.log('10 - 29 = -19')
} else
if (a === 10 && sign === "-" && b === 30 ) {
  console.log('10 - 30 = -20')
} else
if (a === 10 && sign === "-" && b === 31 ) {
  console.log('10 - 31 = -21')
} else
if (a === 10 && sign === "-" && b === 32 ) {
  console.log('10 - 32 = -22')
} else
if (a === 10 && sign === "-" && b === 33 ) {
  console.log('10 - 33 = -23')
} else
if (a === 10 && sign === "-" && b === 34 ) {
  console.log('10 - 34 = -24')
} else
if (a === 10 && sign === "-" && b === 35 ) {
  console.log('10 - 35 = -25')
} else
if (a === 10 && sign === "-" && b === 36 ) {
  console.log('10 - 36 = -26')
} else
if (a === 10 && sign === "-" && b === 37 ) {
  console.log('10 - 37 = -27')
} else
if (a === 10 && sign === "-" && b === 38 ) {
  console.log('10 - 38 = -28')
} else
if (a === 10 && sign === "-" && b === 39 ) {
  console.log('10 - 39 = -29')
} else
if (a === 10 && sign === "-" && b === 40 ) {
  console.log('10 - 40 = -30')
} else
if (a === 10 && sign === "-" && b === 41 ) {
  console.log('10 - 41 = -31')
} else
if (a === 10 && sign === "-" && b === 42 ) {
  console.log('10 - 42 = -32')
} else
if (a === 10 && sign === "-" && b === 43 ) {
  console.log('10 - 43 = -33')
} else
if (a === 10 && sign === "-" && b === 44 ) {
  console.log('10 - 44 = -34')
} else
if (a === 10 && sign === "-" && b === 45 ) {
  console.log('10 - 45 = -35')
} else
if (a === 10 && sign === "-" && b === 46 ) {
  console.log('10 - 46 = -36')
} else
if (a === 10 && sign === "-" && b === 47 ) {
  console.log('10 - 47 = -37')
} else
if (a === 10 && sign === "-" && b === 48 ) {
  console.log('10 - 48 = -38')
} else
if (a === 10 && sign === "-" && b === 49 ) {
  console.log('10 - 49 = -39')
} else
if (a === 10 && sign === "-" && b === 50 ) {
  console.log('10 - 50 = -40')
} else
if (a === 11 && sign === "-" && b === 1 ) {
  console.log('11 - 1 = 10')
} else
if (a === 11 && sign === "-" && b === 2 ) {
  console.log('11 - 2 = 9')
} else
if (a === 11 && sign === "-" && b === 3 ) {
  console.log('11 - 3 = 8')
} else
if (a === 11 && sign === "-" && b === 4 ) {
  console.log('11 - 4 = 7')
} else
if (a === 11 && sign === "-" && b === 5 ) {
  console.log('11 - 5 = 6')
} else
if (a === 11 && sign === "-" && b === 6 ) {
  console.log('11 - 6 = 5')
} else
if (a === 11 && sign === "-" && b === 7 ) {
  console.log('11 - 7 = 4')
} else
if (a === 11 && sign === "-" && b === 8 ) {
  console.log('11 - 8 = 3')
} else
if (a === 11 && sign === "-" && b === 9 ) {
  console.log('11 - 9 = 2')
} else
if (a === 11 && sign === "-" && b === 10 ) {
  console.log('11 - 10 = 1')
} else
if (a === 11 && sign === "-" && b === 11 ) {
  console.log('11 - 11 = 0')
} else
if (a === 11 && sign === "-" && b === 12 ) {
  console.log('11 - 12 = -1')
} else
if (a === 11 && sign === "-" && b === 13 ) {
  console.log('11 - 13 = -2')
} else
if (a === 11 && sign === "-" && b === 14 ) {
  console.log('11 - 14 = -3')
} else
if (a === 11 && sign === "-" && b === 15 ) {
  console.log('11 - 15 = -4')
} else
if (a === 11 && sign === "-" && b === 16 ) {
  console.log('11 - 16 = -5')
} else
if (a === 11 && sign === "-" && b === 17 ) {
  console.log('11 - 17 = -6')
} else
if (a === 11 && sign === "-" && b === 18 ) {
  console.log('11 - 18 = -7')
} else
if (a === 11 && sign === "-" && b === 19 ) {
  console.log('11 - 19 = -8')
} else
if (a === 11 && sign === "-" && b === 20 ) {
  console.log('11 - 20 = -9')
} else
if (a === 11 && sign === "-" && b === 21 ) {
  console.log('11 - 21 = -10')
} else
if (a === 11 && sign === "-" && b === 22 ) {
  console.log('11 - 22 = -11')
} else
if (a === 11 && sign === "-" && b === 23 ) {
  console.log('11 - 23 = -12')
} else
if (a === 11 && sign === "-" && b === 24 ) {
  console.log('11 - 24 = -13')
} else
if (a === 11 && sign === "-" && b === 25 ) {
  console.log('11 - 25 = -14')
} else
if (a === 11 && sign === "-" && b === 26 ) {
  console.log('11 - 26 = -15')
} else
if (a === 11 && sign === "-" && b === 27 ) {
  console.log('11 - 27 = -16')
} else
if (a === 11 && sign === "-" && b === 28 ) {
  console.log('11 - 28 = -17')
} else
if (a === 11 && sign === "-" && b === 29 ) {
  console.log('11 - 29 = -18')
} else
if (a === 11 && sign === "-" && b === 30 ) {
  console.log('11 - 30 = -19')
} else
if (a === 11 && sign === "-" && b === 31 ) {
  console.log('11 - 31 = -20')
} else
if (a === 11 && sign === "-" && b === 32 ) {
  console.log('11 - 32 = -21')
} else
if (a === 11 && sign === "-" && b === 33 ) {
  console.log('11 - 33 = -22')
} else
if (a === 11 && sign === "-" && b === 34 ) {
  console.log('11 - 34 = -23')
} else
if (a === 11 && sign === "-" && b === 35 ) {
  console.log('11 - 35 = -24')
} else
if (a === 11 && sign === "-" && b === 36 ) {
  console.log('11 - 36 = -25')
} else
if (a === 11 && sign === "-" && b === 37 ) {
  console.log('11 - 37 = -26')
} else
if (a === 11 && sign === "-" && b === 38 ) {
  console.log('11 - 38 = -27')
} else
if (a === 11 && sign === "-" && b === 39 ) {
  console.log('11 - 39 = -28')
} else
if (a === 11 && sign === "-" && b === 40 ) {
  console.log('11 - 40 = -29')
} else
if (a === 11 && sign === "-" && b === 41 ) {
  console.log('11 - 41 = -30')
} else
if (a === 11 && sign === "-" && b === 42 ) {
  console.log('11 - 42 = -31')
} else
if (a === 11 && sign === "-" && b === 43 ) {
  console.log('11 - 43 = -32')
} else
if (a === 11 && sign === "-" && b === 44 ) {
  console.log('11 - 44 = -33')
} else
if (a === 11 && sign === "-" && b === 45 ) {
  console.log('11 - 45 = -34')
} else
if (a === 11 && sign === "-" && b === 46 ) {
  console.log('11 - 46 = -35')
} else
if (a === 11 && sign === "-" && b === 47 ) {
  console.log('11 - 47 = -36')
} else
if (a === 11 && sign === "-" && b === 48 ) {
  console.log('11 - 48 = -37')
} else
if (a === 11 && sign === "-" && b === 49 ) {
  console.log('11 - 49 = -38')
} else
if (a === 11 && sign === "-" && b === 50 ) {
  console.log('11 - 50 = -39')
} else
if (a === 12 && sign === "-" && b === 1 ) {
  console.log('12 - 1 = 11')
} else
if (a === 12 && sign === "-" && b === 2 ) {
  console.log('12 - 2 = 10')
} else
if (a === 12 && sign === "-" && b === 3 ) {
  console.log('12 - 3 = 9')
} else
if (a === 12 && sign === "-" && b === 4 ) {
  console.log('12 - 4 = 8')
} else
if (a === 12 && sign === "-" && b === 5 ) {
  console.log('12 - 5 = 7')
} else
if (a === 12 && sign === "-" && b === 6 ) {
  console.log('12 - 6 = 6')
} else
if (a === 12 && sign === "-" && b === 7 ) {
  console.log('12 - 7 = 5')
} else
if (a === 12 && sign === "-" && b === 8 ) {
  console.log('12 - 8 = 4')
} else
if (a === 12 && sign === "-" && b === 9 ) {
  console.log('12 - 9 = 3')
} else
if (a === 12 && sign === "-" && b === 10 ) {
  console.log('12 - 10 = 2')
} else
if (a === 12 && sign === "-" && b === 11 ) {
  console.log('12 - 11 = 1')
} else
if (a === 12 && sign === "-" && b === 12 ) {
  console.log('12 - 12 = 0')
} else
if (a === 12 && sign === "-" && b === 13 ) {
  console.log('12 - 13 = -1')
} else
if (a === 12 && sign === "-" && b === 14 ) {
  console.log('12 - 14 = -2')
} else
if (a === 12 && sign === "-" && b === 15 ) {
  console.log('12 - 15 = -3')
} else
if (a === 12 && sign === "-" && b === 16 ) {
  console.log('12 - 16 = -4')
} else
if (a === 12 && sign === "-" && b === 17 ) {
  console.log('12 - 17 = -5')
} else
if (a === 12 && sign === "-" && b === 18 ) {
  console.log('12 - 18 = -6')
} else
if (a === 12 && sign === "-" && b === 19 ) {
  console.log('12 - 19 = -7')
} else
if (a === 12 && sign === "-" && b === 20 ) {
  console.log('12 - 20 = -8')
} else
if (a === 12 && sign === "-" && b === 21 ) {
  console.log('12 - 21 = -9')
} else
if (a === 12 && sign === "-" && b === 22 ) {
  console.log('12 - 22 = -10')
} else
if (a === 12 && sign === "-" && b === 23 ) {
  console.log('12 - 23 = -11')
} else
if (a === 12 && sign === "-" && b === 24 ) {
  console.log('12 - 24 = -12')
} else
if (a === 12 && sign === "-" && b === 25 ) {
  console.log('12 - 25 = -13')
} else
if (a === 12 && sign === "-" && b === 26 ) {
  console.log('12 - 26 = -14')
} else
if (a === 12 && sign === "-" && b === 27 ) {
  console.log('12 - 27 = -15')
} else
if (a === 12 && sign === "-" && b === 28 ) {
  console.log('12 - 28 = -16')
} else
if (a === 12 && sign === "-" && b === 29 ) {
  console.log('12 - 29 = -17')
} else
if (a === 12 && sign === "-" && b === 30 ) {
  console.log('12 - 30 = -18')
} else
if (a === 12 && sign === "-" && b === 31 ) {
  console.log('12 - 31 = -19')
} else
if (a === 12 && sign === "-" && b === 32 ) {
  console.log('12 - 32 = -20')
} else
if (a === 12 && sign === "-" && b === 33 ) {
  console.log('12 - 33 = -21')
} else
if (a === 12 && sign === "-" && b === 34 ) {
  console.log('12 - 34 = -22')
} else
if (a === 12 && sign === "-" && b === 35 ) {
  console.log('12 - 35 = -23')
} else
if (a === 12 && sign === "-" && b === 36 ) {
  console.log('12 - 36 = -24')
} else
if (a === 12 && sign === "-" && b === 37 ) {
  console.log('12 - 37 = -25')
} else
if (a === 12 && sign === "-" && b === 38 ) {
  console.log('12 - 38 = -26')
} else
if (a === 12 && sign === "-" && b === 39 ) {
  console.log('12 - 39 = -27')
} else
if (a === 12 && sign === "-" && b === 40 ) {
  console.log('12 - 40 = -28')
} else
if (a === 12 && sign === "-" && b === 41 ) {
  console.log('12 - 41 = -29')
} else
if (a === 12 && sign === "-" && b === 42 ) {
  console.log('12 - 42 = -30')
} else
if (a === 12 && sign === "-" && b === 43 ) {
  console.log('12 - 43 = -31')
} else
if (a === 12 && sign === "-" && b === 44 ) {
  console.log('12 - 44 = -32')
} else
if (a === 12 && sign === "-" && b === 45 ) {
  console.log('12 - 45 = -33')
} else
if (a === 12 && sign === "-" && b === 46 ) {
  console.log('12 - 46 = -34')
} else
if (a === 12 && sign === "-" && b === 47 ) {
  console.log('12 - 47 = -35')
} else
if (a === 12 && sign === "-" && b === 48 ) {
  console.log('12 - 48 = -36')
} else
if (a === 12 && sign === "-" && b === 49 ) {
  console.log('12 - 49 = -37')
} else
if (a === 12 && sign === "-" && b === 50 ) {
  console.log('12 - 50 = -38')
} else
if (a === 13 && sign === "-" && b === 1 ) {
  console.log('13 - 1 = 12')
} else
if (a === 13 && sign === "-" && b === 2 ) {
  console.log('13 - 2 = 11')
} else
if (a === 13 && sign === "-" && b === 3 ) {
  console.log('13 - 3 = 10')
} else
if (a === 13 && sign === "-" && b === 4 ) {
  console.log('13 - 4 = 9')
} else
if (a === 13 && sign === "-" && b === 5 ) {
  console.log('13 - 5 = 8')
} else
if (a === 13 && sign === "-" && b === 6 ) {
  console.log('13 - 6 = 7')
} else
if (a === 13 && sign === "-" && b === 7 ) {
  console.log('13 - 7 = 6')
} else
if (a === 13 && sign === "-" && b === 8 ) {
  console.log('13 - 8 = 5')
} else
if (a === 13 && sign === "-" && b === 9 ) {
  console.log('13 - 9 = 4')
} else
if (a === 13 && sign === "-" && b === 10 ) {
  console.log('13 - 10 = 3')
} else
if (a === 13 && sign === "-" && b === 11 ) {
  console.log('13 - 11 = 2')
} else
if (a === 13 && sign === "-" && b === 12 ) {
  console.log('13 - 12 = 1')
} else
if (a === 13 && sign === "-" && b === 13 ) {
  console.log('13 - 13 = 0')
} else
if (a === 13 && sign === "-" && b === 14 ) {
  console.log('13 - 14 = -1')
} else
if (a === 13 && sign === "-" && b === 15 ) {
  console.log('13 - 15 = -2')
} else
if (a === 13 && sign === "-" && b === 16 ) {
  console.log('13 - 16 = -3')
} else
if (a === 13 && sign === "-" && b === 17 ) {
  console.log('13 - 17 = -4')
} else
if (a === 13 && sign === "-" && b === 18 ) {
  console.log('13 - 18 = -5')
} else
if (a === 13 && sign === "-" && b === 19 ) {
  console.log('13 - 19 = -6')
} else
if (a === 13 && sign === "-" && b === 20 ) {
  console.log('13 - 20 = -7')
} else
if (a === 13 && sign === "-" && b === 21 ) {
  console.log('13 - 21 = -8')
} else
if (a === 13 && sign === "-" && b === 22 ) {
  console.log('13 - 22 = -9')
} else
if (a === 13 && sign === "-" && b === 23 ) {
  console.log('13 - 23 = -10')
} else
if (a === 13 && sign === "-" && b === 24 ) {
  console.log('13 - 24 = -11')
} else
if (a === 13 && sign === "-" && b === 25 ) {
  console.log('13 - 25 = -12')
} else
if (a === 13 && sign === "-" && b === 26 ) {
  console.log('13 - 26 = -13')
} else
if (a === 13 && sign === "-" && b === 27 ) {
  console.log('13 - 27 = -14')
} else
if (a === 13 && sign === "-" && b === 28 ) {
  console.log('13 - 28 = -15')
} else
if (a === 13 && sign === "-" && b === 29 ) {
  console.log('13 - 29 = -16')
} else
if (a === 13 && sign === "-" && b === 30 ) {
  console.log('13 - 30 = -17')
} else
if (a === 13 && sign === "-" && b === 31 ) {
  console.log('13 - 31 = -18')
} else
if (a === 13 && sign === "-" && b === 32 ) {
  console.log('13 - 32 = -19')
} else
if (a === 13 && sign === "-" && b === 33 ) {
  console.log('13 - 33 = -20')
} else
if (a === 13 && sign === "-" && b === 34 ) {
  console.log('13 - 34 = -21')
} else
if (a === 13 && sign === "-" && b === 35 ) {
  console.log('13 - 35 = -22')
} else
if (a === 13 && sign === "-" && b === 36 ) {
  console.log('13 - 36 = -23')
} else
if (a === 13 && sign === "-" && b === 37 ) {
  console.log('13 - 37 = -24')
} else
if (a === 13 && sign === "-" && b === 38 ) {
  console.log('13 - 38 = -25')
} else
if (a === 13 && sign === "-" && b === 39 ) {
  console.log('13 - 39 = -26')
} else
if (a === 13 && sign === "-" && b === 40 ) {
  console.log('13 - 40 = -27')
} else
if (a === 13 && sign === "-" && b === 41 ) {
  console.log('13 - 41 = -28')
} else
if (a === 13 && sign === "-" && b === 42 ) {
  console.log('13 - 42 = -29')
} else
if (a === 13 && sign === "-" && b === 43 ) {
  console.log('13 - 43 = -30')
} else
if (a === 13 && sign === "-" && b === 44 ) {
  console.log('13 - 44 = -31')
} else
if (a === 13 && sign === "-" && b === 45 ) {
  console.log('13 - 45 = -32')
} else
if (a === 13 && sign === "-" && b === 46 ) {
  console.log('13 - 46 = -33')
} else
if (a === 13 && sign === "-" && b === 47 ) {
  console.log('13 - 47 = -34')
} else
if (a === 13 && sign === "-" && b === 48 ) {
  console.log('13 - 48 = -35')
} else
if (a === 13 && sign === "-" && b === 49 ) {
  console.log('13 - 49 = -36')
} else
if (a === 13 && sign === "-" && b === 50 ) {
  console.log('13 - 50 = -37')
} else
if (a === 14 && sign === "-" && b === 1 ) {
  console.log('14 - 1 = 13')
} else
if (a === 14 && sign === "-" && b === 2 ) {
  console.log('14 - 2 = 12')
} else
if (a === 14 && sign === "-" && b === 3 ) {
  console.log('14 - 3 = 11')
} else
if (a === 14 && sign === "-" && b === 4 ) {
  console.log('14 - 4 = 10')
} else
if (a === 14 && sign === "-" && b === 5 ) {
  console.log('14 - 5 = 9')
} else
if (a === 14 && sign === "-" && b === 6 ) {
  console.log('14 - 6 = 8')
} else
if (a === 14 && sign === "-" && b === 7 ) {
  console.log('14 - 7 = 7')
} else
if (a === 14 && sign === "-" && b === 8 ) {
  console.log('14 - 8 = 6')
} else
if (a === 14 && sign === "-" && b === 9 ) {
  console.log('14 - 9 = 5')
} else
if (a === 14 && sign === "-" && b === 10 ) {
  console.log('14 - 10 = 4')
} else
if (a === 14 && sign === "-" && b === 11 ) {
  console.log('14 - 11 = 3')
} else
if (a === 14 && sign === "-" && b === 12 ) {
  console.log('14 - 12 = 2')
} else
if (a === 14 && sign === "-" && b === 13 ) {
  console.log('14 - 13 = 1')
} else
if (a === 14 && sign === "-" && b === 14 ) {
  console.log('14 - 14 = 0')
} else
if (a === 14 && sign === "-" && b === 15 ) {
  console.log('14 - 15 = -1')
} else
if (a === 14 && sign === "-" && b === 16 ) {
  console.log('14 - 16 = -2')
} else
if (a === 14 && sign === "-" && b === 17 ) {
  console.log('14 - 17 = -3')
} else
if (a === 14 && sign === "-" && b === 18 ) {
  console.log('14 - 18 = -4')
} else
if (a === 14 && sign === "-" && b === 19 ) {
  console.log('14 - 19 = -5')
} else
if (a === 14 && sign === "-" && b === 20 ) {
  console.log('14 - 20 = -6')
} else
if (a === 14 && sign === "-" && b === 21 ) {
  console.log('14 - 21 = -7')
} else
if (a === 14 && sign === "-" && b === 22 ) {
  console.log('14 - 22 = -8')
} else
if (a === 14 && sign === "-" && b === 23 ) {
  console.log('14 - 23 = -9')
} else
if (a === 14 && sign === "-" && b === 24 ) {
  console.log('14 - 24 = -10')
} else
if (a === 14 && sign === "-" && b === 25 ) {
  console.log('14 - 25 = -11')
} else
if (a === 14 && sign === "-" && b === 26 ) {
  console.log('14 - 26 = -12')
} else
if (a === 14 && sign === "-" && b === 27 ) {
  console.log('14 - 27 = -13')
} else
if (a === 14 && sign === "-" && b === 28 ) {
  console.log('14 - 28 = -14')
} else
if (a === 14 && sign === "-" && b === 29 ) {
  console.log('14 - 29 = -15')
} else
if (a === 14 && sign === "-" && b === 30 ) {
  console.log('14 - 30 = -16')
} else
if (a === 14 && sign === "-" && b === 31 ) {
  console.log('14 - 31 = -17')
} else
if (a === 14 && sign === "-" && b === 32 ) {
  console.log('14 - 32 = -18')
} else
if (a === 14 && sign === "-" && b === 33 ) {
  console.log('14 - 33 = -19')
} else
if (a === 14 && sign === "-" && b === 34 ) {
  console.log('14 - 34 = -20')
} else
if (a === 14 && sign === "-" && b === 35 ) {
  console.log('14 - 35 = -21')
} else
if (a === 14 && sign === "-" && b === 36 ) {
  console.log('14 - 36 = -22')
} else
if (a === 14 && sign === "-" && b === 37 ) {
  console.log('14 - 37 = -23')
} else
if (a === 14 && sign === "-" && b === 38 ) {
  console.log('14 - 38 = -24')
} else
if (a === 14 && sign === "-" && b === 39 ) {
  console.log('14 - 39 = -25')
} else
if (a === 14 && sign === "-" && b === 40 ) {
  console.log('14 - 40 = -26')
} else
if (a === 14 && sign === "-" && b === 41 ) {
  console.log('14 - 41 = -27')
} else
if (a === 14 && sign === "-" && b === 42 ) {
  console.log('14 - 42 = -28')
} else
if (a === 14 && sign === "-" && b === 43 ) {
  console.log('14 - 43 = -29')
} else
if (a === 14 && sign === "-" && b === 44 ) {
  console.log('14 - 44 = -30')
} else
if (a === 14 && sign === "-" && b === 45 ) {
  console.log('14 - 45 = -31')
} else
if (a === 14 && sign === "-" && b === 46 ) {
  console.log('14 - 46 = -32')
} else
if (a === 14 && sign === "-" && b === 47 ) {
  console.log('14 - 47 = -33')
} else
if (a === 14 && sign === "-" && b === 48 ) {
  console.log('14 - 48 = -34')
} else
if (a === 14 && sign === "-" && b === 49 ) {
  console.log('14 - 49 = -35')
} else
if (a === 14 && sign === "-" && b === 50 ) {
  console.log('14 - 50 = -36')
} else
if (a === 15 && sign === "-" && b === 1 ) {
  console.log('15 - 1 = 14')
} else
if (a === 15 && sign === "-" && b === 2 ) {
  console.log('15 - 2 = 13')
} else
if (a === 15 && sign === "-" && b === 3 ) {
  console.log('15 - 3 = 12')
} else
if (a === 15 && sign === "-" && b === 4 ) {
  console.log('15 - 4 = 11')
} else
if (a === 15 && sign === "-" && b === 5 ) {
  console.log('15 - 5 = 10')
} else
if (a === 15 && sign === "-" && b === 6 ) {
  console.log('15 - 6 = 9')
} else
if (a === 15 && sign === "-" && b === 7 ) {
  console.log('15 - 7 = 8')
} else
if (a === 15 && sign === "-" && b === 8 ) {
  console.log('15 - 8 = 7')
} else
if (a === 15 && sign === "-" && b === 9 ) {
  console.log('15 - 9 = 6')
} else
if (a === 15 && sign === "-" && b === 10 ) {
  console.log('15 - 10 = 5')
} else
if (a === 15 && sign === "-" && b === 11 ) {
  console.log('15 - 11 = 4')
} else
if (a === 15 && sign === "-" && b === 12 ) {
  console.log('15 - 12 = 3')
} else
if (a === 15 && sign === "-" && b === 13 ) {
  console.log('15 - 13 = 2')
} else
if (a === 15 && sign === "-" && b === 14 ) {
  console.log('15 - 14 = 1')
} else
if (a === 15 && sign === "-" && b === 15 ) {
  console.log('15 - 15 = 0')
} else
if (a === 15 && sign === "-" && b === 16 ) {
  console.log('15 - 16 = -1')
} else
if (a === 15 && sign === "-" && b === 17 ) {
  console.log('15 - 17 = -2')
} else
if (a === 15 && sign === "-" && b === 18 ) {
  console.log('15 - 18 = -3')
} else
if (a === 15 && sign === "-" && b === 19 ) {
  console.log('15 - 19 = -4')
} else
if (a === 15 && sign === "-" && b === 20 ) {
  console.log('15 - 20 = -5')
} else
if (a === 15 && sign === "-" && b === 21 ) {
  console.log('15 - 21 = -6')
} else
if (a === 15 && sign === "-" && b === 22 ) {
  console.log('15 - 22 = -7')
} else
if (a === 15 && sign === "-" && b === 23 ) {
  console.log('15 - 23 = -8')
} else
if (a === 15 && sign === "-" && b === 24 ) {
  console.log('15 - 24 = -9')
} else
if (a === 15 && sign === "-" && b === 25 ) {
  console.log('15 - 25 = -10')
} else
if (a === 15 && sign === "-" && b === 26 ) {
  console.log('15 - 26 = -11')
} else
if (a === 15 && sign === "-" && b === 27 ) {
  console.log('15 - 27 = -12')
} else
if (a === 15 && sign === "-" && b === 28 ) {
  console.log('15 - 28 = -13')
} else
if (a === 15 && sign === "-" && b === 29 ) {
  console.log('15 - 29 = -14')
} else
if (a === 15 && sign === "-" && b === 30 ) {
  console.log('15 - 30 = -15')
} else
if (a === 15 && sign === "-" && b === 31 ) {
  console.log('15 - 31 = -16')
} else
if (a === 15 && sign === "-" && b === 32 ) {
  console.log('15 - 32 = -17')
} else
if (a === 15 && sign === "-" && b === 33 ) {
  console.log('15 - 33 = -18')
} else
if (a === 15 && sign === "-" && b === 34 ) {
  console.log('15 - 34 = -19')
} else
if (a === 15 && sign === "-" && b === 35 ) {
  console.log('15 - 35 = -20')
} else
if (a === 15 && sign === "-" && b === 36 ) {
  console.log('15 - 36 = -21')
} else
if (a === 15 && sign === "-" && b === 37 ) {
  console.log('15 - 37 = -22')
} else
if (a === 15 && sign === "-" && b === 38 ) {
  console.log('15 - 38 = -23')
} else
if (a === 15 && sign === "-" && b === 39 ) {
  console.log('15 - 39 = -24')
} else
if (a === 15 && sign === "-" && b === 40 ) {
  console.log('15 - 40 = -25')
} else
if (a === 15 && sign === "-" && b === 41 ) {
  console.log('15 - 41 = -26')
} else
if (a === 15 && sign === "-" && b === 42 ) {
  console.log('15 - 42 = -27')
} else
if (a === 15 && sign === "-" && b === 43 ) {
  console.log('15 - 43 = -28')
} else
if (a === 15 && sign === "-" && b === 44 ) {
  console.log('15 - 44 = -29')
} else
if (a === 15 && sign === "-" && b === 45 ) {
  console.log('15 - 45 = -30')
} else
if (a === 15 && sign === "-" && b === 46 ) {
  console.log('15 - 46 = -31')
} else
if (a === 15 && sign === "-" && b === 47 ) {
  console.log('15 - 47 = -32')
} else
if (a === 15 && sign === "-" && b === 48 ) {
  console.log('15 - 48 = -33')
} else
if (a === 15 && sign === "-" && b === 49 ) {
  console.log('15 - 49 = -34')
} else
if (a === 15 && sign === "-" && b === 50 ) {
  console.log('15 - 50 = -35')
} else
if (a === 16 && sign === "-" && b === 1 ) {
  console.log('16 - 1 = 15')
} else
if (a === 16 && sign === "-" && b === 2 ) {
  console.log('16 - 2 = 14')
} else
if (a === 16 && sign === "-" && b === 3 ) {
  console.log('16 - 3 = 13')
} else
if (a === 16 && sign === "-" && b === 4 ) {
  console.log('16 - 4 = 12')
} else
if (a === 16 && sign === "-" && b === 5 ) {
  console.log('16 - 5 = 11')
} else
if (a === 16 && sign === "-" && b === 6 ) {
  console.log('16 - 6 = 10')
} else
if (a === 16 && sign === "-" && b === 7 ) {
  console.log('16 - 7 = 9')
} else
if (a === 16 && sign === "-" && b === 8 ) {
  console.log('16 - 8 = 8')
} else
if (a === 16 && sign === "-" && b === 9 ) {
  console.log('16 - 9 = 7')
} else
if (a === 16 && sign === "-" && b === 10 ) {
  console.log('16 - 10 = 6')
} else
if (a === 16 && sign === "-" && b === 11 ) {
  console.log('16 - 11 = 5')
} else
if (a === 16 && sign === "-" && b === 12 ) {
  console.log('16 - 12 = 4')
} else
if (a === 16 && sign === "-" && b === 13 ) {
  console.log('16 - 13 = 3')
} else
if (a === 16 && sign === "-" && b === 14 ) {
  console.log('16 - 14 = 2')
} else
if (a === 16 && sign === "-" && b === 15 ) {
  console.log('16 - 15 = 1')
} else
if (a === 16 && sign === "-" && b === 16 ) {
  console.log('16 - 16 = 0')
} else
if (a === 16 && sign === "-" && b === 17 ) {
  console.log('16 - 17 = -1')
} else
if (a === 16 && sign === "-" && b === 18 ) {
  console.log('16 - 18 = -2')
} else
if (a === 16 && sign === "-" && b === 19 ) {
  console.log('16 - 19 = -3')
} else
if (a === 16 && sign === "-" && b === 20 ) {
  console.log('16 - 20 = -4')
} else
if (a === 16 && sign === "-" && b === 21 ) {
  console.log('16 - 21 = -5')
} else
if (a === 16 && sign === "-" && b === 22 ) {
  console.log('16 - 22 = -6')
} else
if (a === 16 && sign === "-" && b === 23 ) {
  console.log('16 - 23 = -7')
} else
if (a === 16 && sign === "-" && b === 24 ) {
  console.log('16 - 24 = -8')
} else
if (a === 16 && sign === "-" && b === 25 ) {
  console.log('16 - 25 = -9')
} else
if (a === 16 && sign === "-" && b === 26 ) {
  console.log('16 - 26 = -10')
} else
if (a === 16 && sign === "-" && b === 27 ) {
  console.log('16 - 27 = -11')
} else
if (a === 16 && sign === "-" && b === 28 ) {
  console.log('16 - 28 = -12')
} else
if (a === 16 && sign === "-" && b === 29 ) {
  console.log('16 - 29 = -13')
} else
if (a === 16 && sign === "-" && b === 30 ) {
  console.log('16 - 30 = -14')
} else
if (a === 16 && sign === "-" && b === 31 ) {
  console.log('16 - 31 = -15')
} else
if (a === 16 && sign === "-" && b === 32 ) {
  console.log('16 - 32 = -16')
} else
if (a === 16 && sign === "-" && b === 33 ) {
  console.log('16 - 33 = -17')
} else
if (a === 16 && sign === "-" && b === 34 ) {
  console.log('16 - 34 = -18')
} else
if (a === 16 && sign === "-" && b === 35 ) {
  console.log('16 - 35 = -19')
} else
if (a === 16 && sign === "-" && b === 36 ) {
  console.log('16 - 36 = -20')
} else
if (a === 16 && sign === "-" && b === 37 ) {
  console.log('16 - 37 = -21')
} else
if (a === 16 && sign === "-" && b === 38 ) {
  console.log('16 - 38 = -22')
} else
if (a === 16 && sign === "-" && b === 39 ) {
  console.log('16 - 39 = -23')
} else
if (a === 16 && sign === "-" && b === 40 ) {
  console.log('16 - 40 = -24')
} else
if (a === 16 && sign === "-" && b === 41 ) {
  console.log('16 - 41 = -25')
} else
if (a === 16 && sign === "-" && b === 42 ) {
  console.log('16 - 42 = -26')
} else
if (a === 16 && sign === "-" && b === 43 ) {
  console.log('16 - 43 = -27')
} else
if (a === 16 && sign === "-" && b === 44 ) {
  console.log('16 - 44 = -28')
} else
if (a === 16 && sign === "-" && b === 45 ) {
  console.log('16 - 45 = -29')
} else
if (a === 16 && sign === "-" && b === 46 ) {
  console.log('16 - 46 = -30')
} else
if (a === 16 && sign === "-" && b === 47 ) {
  console.log('16 - 47 = -31')
} else
if (a === 16 && sign === "-" && b === 48 ) {
  console.log('16 - 48 = -32')
} else
if (a === 16 && sign === "-" && b === 49 ) {
  console.log('16 - 49 = -33')
} else
if (a === 16 && sign === "-" && b === 50 ) {
  console.log('16 - 50 = -34')
} else
if (a === 17 && sign === "-" && b === 1 ) {
  console.log('17 - 1 = 16')
} else
if (a === 17 && sign === "-" && b === 2 ) {
  console.log('17 - 2 = 15')
} else
if (a === 17 && sign === "-" && b === 3 ) {
  console.log('17 - 3 = 14')
} else
if (a === 17 && sign === "-" && b === 4 ) {
  console.log('17 - 4 = 13')
} else
if (a === 17 && sign === "-" && b === 5 ) {
  console.log('17 - 5 = 12')
} else
if (a === 17 && sign === "-" && b === 6 ) {
  console.log('17 - 6 = 11')
} else
if (a === 17 && sign === "-" && b === 7 ) {
  console.log('17 - 7 = 10')
} else
if (a === 17 && sign === "-" && b === 8 ) {
  console.log('17 - 8 = 9')
} else
if (a === 17 && sign === "-" && b === 9 ) {
  console.log('17 - 9 = 8')
} else
if (a === 17 && sign === "-" && b === 10 ) {
  console.log('17 - 10 = 7')
} else
if (a === 17 && sign === "-" && b === 11 ) {
  console.log('17 - 11 = 6')
} else
if (a === 17 && sign === "-" && b === 12 ) {
  console.log('17 - 12 = 5')
} else
if (a === 17 && sign === "-" && b === 13 ) {
  console.log('17 - 13 = 4')
} else
if (a === 17 && sign === "-" && b === 14 ) {
  console.log('17 - 14 = 3')
} else
if (a === 17 && sign === "-" && b === 15 ) {
  console.log('17 - 15 = 2')
} else
if (a === 17 && sign === "-" && b === 16 ) {
  console.log('17 - 16 = 1')
} else
if (a === 17 && sign === "-" && b === 17 ) {
  console.log('17 - 17 = 0')
} else
if (a === 17 && sign === "-" && b === 18 ) {
  console.log('17 - 18 = -1')
} else
if (a === 17 && sign === "-" && b === 19 ) {
  console.log('17 - 19 = -2')
} else
if (a === 17 && sign === "-" && b === 20 ) {
  console.log('17 - 20 = -3')
} else
if (a === 17 && sign === "-" && b === 21 ) {
  console.log('17 - 21 = -4')
} else
if (a === 17 && sign === "-" && b === 22 ) {
  console.log('17 - 22 = -5')
} else
if (a === 17 && sign === "-" && b === 23 ) {
  console.log('17 - 23 = -6')
} else
if (a === 17 && sign === "-" && b === 24 ) {
  console.log('17 - 24 = -7')
} else
if (a === 17 && sign === "-" && b === 25 ) {
  console.log('17 - 25 = -8')
} else
if (a === 17 && sign === "-" && b === 26 ) {
  console.log('17 - 26 = -9')
} else
if (a === 17 && sign === "-" && b === 27 ) {
  console.log('17 - 27 = -10')
} else
if (a === 17 && sign === "-" && b === 28 ) {
  console.log('17 - 28 = -11')
} else
if (a === 17 && sign === "-" && b === 29 ) {
  console.log('17 - 29 = -12')
} else
if (a === 17 && sign === "-" && b === 30 ) {
  console.log('17 - 30 = -13')
} else
if (a === 17 && sign === "-" && b === 31 ) {
  console.log('17 - 31 = -14')
} else
if (a === 17 && sign === "-" && b === 32 ) {
  console.log('17 - 32 = -15')
} else
if (a === 17 && sign === "-" && b === 33 ) {
  console.log('17 - 33 = -16')
} else
if (a === 17 && sign === "-" && b === 34 ) {
  console.log('17 - 34 = -17')
} else
if (a === 17 && sign === "-" && b === 35 ) {
  console.log('17 - 35 = -18')
} else
if (a === 17 && sign === "-" && b === 36 ) {
  console.log('17 - 36 = -19')
} else
if (a === 17 && sign === "-" && b === 37 ) {
  console.log('17 - 37 = -20')
} else
if (a === 17 && sign === "-" && b === 38 ) {
  console.log('17 - 38 = -21')
} else
if (a === 17 && sign === "-" && b === 39 ) {
  console.log('17 - 39 = -22')
} else
if (a === 17 && sign === "-" && b === 40 ) {
  console.log('17 - 40 = -23')
} else
if (a === 17 && sign === "-" && b === 41 ) {
  console.log('17 - 41 = -24')
} else
if (a === 17 && sign === "-" && b === 42 ) {
  console.log('17 - 42 = -25')
} else
if (a === 17 && sign === "-" && b === 43 ) {
  console.log('17 - 43 = -26')
} else
if (a === 17 && sign === "-" && b === 44 ) {
  console.log('17 - 44 = -27')
} else
if (a === 17 && sign === "-" && b === 45 ) {
  console.log('17 - 45 = -28')
} else
if (a === 17 && sign === "-" && b === 46 ) {
  console.log('17 - 46 = -29')
} else
if (a === 17 && sign === "-" && b === 47 ) {
  console.log('17 - 47 = -30')
} else
if (a === 17 && sign === "-" && b === 48 ) {
  console.log('17 - 48 = -31')
} else
if (a === 17 && sign === "-" && b === 49 ) {
  console.log('17 - 49 = -32')
} else
if (a === 17 && sign === "-" && b === 50 ) {
  console.log('17 - 50 = -33')
} else
if (a === 18 && sign === "-" && b === 1 ) {
  console.log('18 - 1 = 17')
} else
if (a === 18 && sign === "-" && b === 2 ) {
  console.log('18 - 2 = 16')
} else
if (a === 18 && sign === "-" && b === 3 ) {
  console.log('18 - 3 = 15')
} else
if (a === 18 && sign === "-" && b === 4 ) {
  console.log('18 - 4 = 14')
} else
if (a === 18 && sign === "-" && b === 5 ) {
  console.log('18 - 5 = 13')
} else
if (a === 18 && sign === "-" && b === 6 ) {
  console.log('18 - 6 = 12')
} else
if (a === 18 && sign === "-" && b === 7 ) {
  console.log('18 - 7 = 11')
} else
if (a === 18 && sign === "-" && b === 8 ) {
  console.log('18 - 8 = 10')
} else
if (a === 18 && sign === "-" && b === 9 ) {
  console.log('18 - 9 = 9')
} else
if (a === 18 && sign === "-" && b === 10 ) {
  console.log('18 - 10 = 8')
} else
if (a === 18 && sign === "-" && b === 11 ) {
  console.log('18 - 11 = 7')
} else
if (a === 18 && sign === "-" && b === 12 ) {
  console.log('18 - 12 = 6')
} else
if (a === 18 && sign === "-" && b === 13 ) {
  console.log('18 - 13 = 5')
} else
if (a === 18 && sign === "-" && b === 14 ) {
  console.log('18 - 14 = 4')
} else
if (a === 18 && sign === "-" && b === 15 ) {
  console.log('18 - 15 = 3')
} else
if (a === 18 && sign === "-" && b === 16 ) {
  console.log('18 - 16 = 2')
} else
if (a === 18 && sign === "-" && b === 17 ) {
  console.log('18 - 17 = 1')
} else
if (a === 18 && sign === "-" && b === 18 ) {
  console.log('18 - 18 = 0')
} else
if (a === 18 && sign === "-" && b === 19 ) {
  console.log('18 - 19 = -1')
} else
if (a === 18 && sign === "-" && b === 20 ) {
  console.log('18 - 20 = -2')
} else
if (a === 18 && sign === "-" && b === 21 ) {
  console.log('18 - 21 = -3')
} else
if (a === 18 && sign === "-" && b === 22 ) {
  console.log('18 - 22 = -4')
} else
if (a === 18 && sign === "-" && b === 23 ) {
  console.log('18 - 23 = -5')
} else
if (a === 18 && sign === "-" && b === 24 ) {
  console.log('18 - 24 = -6')
} else
if (a === 18 && sign === "-" && b === 25 ) {
  console.log('18 - 25 = -7')
} else
if (a === 18 && sign === "-" && b === 26 ) {
  console.log('18 - 26 = -8')
} else
if (a === 18 && sign === "-" && b === 27 ) {
  console.log('18 - 27 = -9')
} else
if (a === 18 && sign === "-" && b === 28 ) {
  console.log('18 - 28 = -10')
} else
if (a === 18 && sign === "-" && b === 29 ) {
  console.log('18 - 29 = -11')
} else
if (a === 18 && sign === "-" && b === 30 ) {
  console.log('18 - 30 = -12')
} else
if (a === 18 && sign === "-" && b === 31 ) {
  console.log('18 - 31 = -13')
} else
if (a === 18 && sign === "-" && b === 32 ) {
  console.log('18 - 32 = -14')
} else
if (a === 18 && sign === "-" && b === 33 ) {
  console.log('18 - 33 = -15')
} else
if (a === 18 && sign === "-" && b === 34 ) {
  console.log('18 - 34 = -16')
} else
if (a === 18 && sign === "-" && b === 35 ) {
  console.log('18 - 35 = -17')
} else
if (a === 18 && sign === "-" && b === 36 ) {
  console.log('18 - 36 = -18')
} else
if (a === 18 && sign === "-" && b === 37 ) {
  console.log('18 - 37 = -19')
} else
if (a === 18 && sign === "-" && b === 38 ) {
  console.log('18 - 38 = -20')
} else
if (a === 18 && sign === "-" && b === 39 ) {
  console.log('18 - 39 = -21')
} else
if (a === 18 && sign === "-" && b === 40 ) {
  console.log('18 - 40 = -22')
} else
if (a === 18 && sign === "-" && b === 41 ) {
  console.log('18 - 41 = -23')
} else
if (a === 18 && sign === "-" && b === 42 ) {
  console.log('18 - 42 = -24')
} else
if (a === 18 && sign === "-" && b === 43 ) {
  console.log('18 - 43 = -25')
} else
if (a === 18 && sign === "-" && b === 44 ) {
  console.log('18 - 44 = -26')
} else
if (a === 18 && sign === "-" && b === 45 ) {
  console.log('18 - 45 = -27')
} else
if (a === 18 && sign === "-" && b === 46 ) {
  console.log('18 - 46 = -28')
} else
if (a === 18 && sign === "-" && b === 47 ) {
  console.log('18 - 47 = -29')
} else
if (a === 18 && sign === "-" && b === 48 ) {
  console.log('18 - 48 = -30')
} else
if (a === 18 && sign === "-" && b === 49 ) {
  console.log('18 - 49 = -31')
} else
if (a === 18 && sign === "-" && b === 50 ) {
  console.log('18 - 50 = -32')
} else
if (a === 19 && sign === "-" && b === 1 ) {
  console.log('19 - 1 = 18')
} else
if (a === 19 && sign === "-" && b === 2 ) {
  console.log('19 - 2 = 17')
} else
if (a === 19 && sign === "-" && b === 3 ) {
  console.log('19 - 3 = 16')
} else
if (a === 19 && sign === "-" && b === 4 ) {
  console.log('19 - 4 = 15')
} else
if (a === 19 && sign === "-" && b === 5 ) {
  console.log('19 - 5 = 14')
} else
if (a === 19 && sign === "-" && b === 6 ) {
  console.log('19 - 6 = 13')
} else
if (a === 19 && sign === "-" && b === 7 ) {
  console.log('19 - 7 = 12')
} else
if (a === 19 && sign === "-" && b === 8 ) {
  console.log('19 - 8 = 11')
} else
if (a === 19 && sign === "-" && b === 9 ) {
  console.log('19 - 9 = 10')
} else
if (a === 19 && sign === "-" && b === 10 ) {
  console.log('19 - 10 = 9')
} else
if (a === 19 && sign === "-" && b === 11 ) {
  console.log('19 - 11 = 8')
} else
if (a === 19 && sign === "-" && b === 12 ) {
  console.log('19 - 12 = 7')
} else
if (a === 19 && sign === "-" && b === 13 ) {
  console.log('19 - 13 = 6')
} else
if (a === 19 && sign === "-" && b === 14 ) {
  console.log('19 - 14 = 5')
} else
if (a === 19 && sign === "-" && b === 15 ) {
  console.log('19 - 15 = 4')
} else
if (a === 19 && sign === "-" && b === 16 ) {
  console.log('19 - 16 = 3')
} else
if (a === 19 && sign === "-" && b === 17 ) {
  console.log('19 - 17 = 2')
} else
if (a === 19 && sign === "-" && b === 18 ) {
  console.log('19 - 18 = 1')
} else
if (a === 19 && sign === "-" && b === 19 ) {
  console.log('19 - 19 = 0')
} else
if (a === 19 && sign === "-" && b === 20 ) {
  console.log('19 - 20 = -1')
} else
if (a === 19 && sign === "-" && b === 21 ) {
  console.log('19 - 21 = -2')
} else
if (a === 19 && sign === "-" && b === 22 ) {
  console.log('19 - 22 = -3')
} else
if (a === 19 && sign === "-" && b === 23 ) {
  console.log('19 - 23 = -4')
} else
if (a === 19 && sign === "-" && b === 24 ) {
  console.log('19 - 24 = -5')
} else
if (a === 19 && sign === "-" && b === 25 ) {
  console.log('19 - 25 = -6')
} else
if (a === 19 && sign === "-" && b === 26 ) {
  console.log('19 - 26 = -7')
} else
if (a === 19 && sign === "-" && b === 27 ) {
  console.log('19 - 27 = -8')
} else
if (a === 19 && sign === "-" && b === 28 ) {
  console.log('19 - 28 = -9')
} else
if (a === 19 && sign === "-" && b === 29 ) {
  console.log('19 - 29 = -10')
} else
if (a === 19 && sign === "-" && b === 30 ) {
  console.log('19 - 30 = -11')
} else
if (a === 19 && sign === "-" && b === 31 ) {
  console.log('19 - 31 = -12')
} else
if (a === 19 && sign === "-" && b === 32 ) {
  console.log('19 - 32 = -13')
} else
if (a === 19 && sign === "-" && b === 33 ) {
  console.log('19 - 33 = -14')
} else
if (a === 19 && sign === "-" && b === 34 ) {
  console.log('19 - 34 = -15')
} else
if (a === 19 && sign === "-" && b === 35 ) {
  console.log('19 - 35 = -16')
} else
if (a === 19 && sign === "-" && b === 36 ) {
  console.log('19 - 36 = -17')
} else
if (a === 19 && sign === "-" && b === 37 ) {
  console.log('19 - 37 = -18')
} else
if (a === 19 && sign === "-" && b === 38 ) {
  console.log('19 - 38 = -19')
} else
if (a === 19 && sign === "-" && b === 39 ) {
  console.log('19 - 39 = -20')
} else
if (a === 19 && sign === "-" && b === 40 ) {
  console.log('19 - 40 = -21')
} else
if (a === 19 && sign === "-" && b === 41 ) {
  console.log('19 - 41 = -22')
} else
if (a === 19 && sign === "-" && b === 42 ) {
  console.log('19 - 42 = -23')
} else
if (a === 19 && sign === "-" && b === 43 ) {
  console.log('19 - 43 = -24')
} else
if (a === 19 && sign === "-" && b === 44 ) {
  console.log('19 - 44 = -25')
} else
if (a === 19 && sign === "-" && b === 45 ) {
  console.log('19 - 45 = -26')
} else
if (a === 19 && sign === "-" && b === 46 ) {
  console.log('19 - 46 = -27')
} else
if (a === 19 && sign === "-" && b === 47 ) {
  console.log('19 - 47 = -28')
} else
if (a === 19 && sign === "-" && b === 48 ) {
  console.log('19 - 48 = -29')
} else
if (a === 19 && sign === "-" && b === 49 ) {
  console.log('19 - 49 = -30')
} else
if (a === 19 && sign === "-" && b === 50 ) {
  console.log('19 - 50 = -31')
} else
if (a === 20 && sign === "-" && b === 1 ) {
  console.log('20 - 1 = 19')
} else
if (a === 20 && sign === "-" && b === 2 ) {
  console.log('20 - 2 = 18')
} else
if (a === 20 && sign === "-" && b === 3 ) {
  console.log('20 - 3 = 17')
} else
if (a === 20 && sign === "-" && b === 4 ) {
  console.log('20 - 4 = 16')
} else
if (a === 20 && sign === "-" && b === 5 ) {
  console.log('20 - 5 = 15')
} else
if (a === 20 && sign === "-" && b === 6 ) {
  console.log('20 - 6 = 14')
} else
if (a === 20 && sign === "-" && b === 7 ) {
  console.log('20 - 7 = 13')
} else
if (a === 20 && sign === "-" && b === 8 ) {
  console.log('20 - 8 = 12')
} else
if (a === 20 && sign === "-" && b === 9 ) {
  console.log('20 - 9 = 11')
} else
if (a === 20 && sign === "-" && b === 10 ) {
  console.log('20 - 10 = 10')
} else
if (a === 20 && sign === "-" && b === 11 ) {
  console.log('20 - 11 = 9')
} else
if (a === 20 && sign === "-" && b === 12 ) {
  console.log('20 - 12 = 8')
} else
if (a === 20 && sign === "-" && b === 13 ) {
  console.log('20 - 13 = 7')
} else
if (a === 20 && sign === "-" && b === 14 ) {
  console.log('20 - 14 = 6')
} else
if (a === 20 && sign === "-" && b === 15 ) {
  console.log('20 - 15 = 5')
} else
if (a === 20 && sign === "-" && b === 16 ) {
  console.log('20 - 16 = 4')
} else
if (a === 20 && sign === "-" && b === 17 ) {
  console.log('20 - 17 = 3')
} else
if (a === 20 && sign === "-" && b === 18 ) {
  console.log('20 - 18 = 2')
} else
if (a === 20 && sign === "-" && b === 19 ) {
  console.log('20 - 19 = 1')
} else
if (a === 20 && sign === "-" && b === 20 ) {
  console.log('20 - 20 = 0')
} else
if (a === 20 && sign === "-" && b === 21 ) {
  console.log('20 - 21 = -1')
} else
if (a === 20 && sign === "-" && b === 22 ) {
  console.log('20 - 22 = -2')
} else
if (a === 20 && sign === "-" && b === 23 ) {
  console.log('20 - 23 = -3')
} else
if (a === 20 && sign === "-" && b === 24 ) {
  console.log('20 - 24 = -4')
} else
if (a === 20 && sign === "-" && b === 25 ) {
  console.log('20 - 25 = -5')
} else
if (a === 20 && sign === "-" && b === 26 ) {
  console.log('20 - 26 = -6')
} else
if (a === 20 && sign === "-" && b === 27 ) {
  console.log('20 - 27 = -7')
} else
if (a === 20 && sign === "-" && b === 28 ) {
  console.log('20 - 28 = -8')
} else
if (a === 20 && sign === "-" && b === 29 ) {
  console.log('20 - 29 = -9')
} else
if (a === 20 && sign === "-" && b === 30 ) {
  console.log('20 - 30 = -10')
} else
if (a === 20 && sign === "-" && b === 31 ) {
  console.log('20 - 31 = -11')
} else
if (a === 20 && sign === "-" && b === 32 ) {
  console.log('20 - 32 = -12')
} else
if (a === 20 && sign === "-" && b === 33 ) {
  console.log('20 - 33 = -13')
} else
if (a === 20 && sign === "-" && b === 34 ) {
  console.log('20 - 34 = -14')
} else
if (a === 20 && sign === "-" && b === 35 ) {
  console.log('20 - 35 = -15')
} else
if (a === 20 && sign === "-" && b === 36 ) {
  console.log('20 - 36 = -16')
} else
if (a === 20 && sign === "-" && b === 37 ) {
  console.log('20 - 37 = -17')
} else
if (a === 20 && sign === "-" && b === 38 ) {
  console.log('20 - 38 = -18')
} else
if (a === 20 && sign === "-" && b === 39 ) {
  console.log('20 - 39 = -19')
} else
if (a === 20 && sign === "-" && b === 40 ) {
  console.log('20 - 40 = -20')
} else
if (a === 20 && sign === "-" && b === 41 ) {
  console.log('20 - 41 = -21')
} else
if (a === 20 && sign === "-" && b === 42 ) {
  console.log('20 - 42 = -22')
} else
if (a === 20 && sign === "-" && b === 43 ) {
  console.log('20 - 43 = -23')
} else
if (a === 20 && sign === "-" && b === 44 ) {
  console.log('20 - 44 = -24')
} else
if (a === 20 && sign === "-" && b === 45 ) {
  console.log('20 - 45 = -25')
} else
if (a === 20 && sign === "-" && b === 46 ) {
  console.log('20 - 46 = -26')
} else
if (a === 20 && sign === "-" && b === 47 ) {
  console.log('20 - 47 = -27')
} else
if (a === 20 && sign === "-" && b === 48 ) {
  console.log('20 - 48 = -28')
} else
if (a === 20 && sign === "-" && b === 49 ) {
  console.log('20 - 49 = -29')
} else
if (a === 20 && sign === "-" && b === 50 ) {
  console.log('20 - 50 = -30')
} else
if (a === 21 && sign === "-" && b === 1 ) {
  console.log('21 - 1 = 20')
} else
if (a === 21 && sign === "-" && b === 2 ) {
  console.log('21 - 2 = 19')
} else
if (a === 21 && sign === "-" && b === 3 ) {
  console.log('21 - 3 = 18')
} else
if (a === 21 && sign === "-" && b === 4 ) {
  console.log('21 - 4 = 17')
} else
if (a === 21 && sign === "-" && b === 5 ) {
  console.log('21 - 5 = 16')
} else
if (a === 21 && sign === "-" && b === 6 ) {
  console.log('21 - 6 = 15')
} else
if (a === 21 && sign === "-" && b === 7 ) {
  console.log('21 - 7 = 14')
} else
if (a === 21 && sign === "-" && b === 8 ) {
  console.log('21 - 8 = 13')
} else
if (a === 21 && sign === "-" && b === 9 ) {
  console.log('21 - 9 = 12')
} else
if (a === 21 && sign === "-" && b === 10 ) {
  console.log('21 - 10 = 11')
} else
if (a === 21 && sign === "-" && b === 11 ) {
  console.log('21 - 11 = 10')
} else
if (a === 21 && sign === "-" && b === 12 ) {
  console.log('21 - 12 = 9')
} else
if (a === 21 && sign === "-" && b === 13 ) {
  console.log('21 - 13 = 8')
} else
if (a === 21 && sign === "-" && b === 14 ) {
  console.log('21 - 14 = 7')
} else
if (a === 21 && sign === "-" && b === 15 ) {
  console.log('21 - 15 = 6')
} else
if (a === 21 && sign === "-" && b === 16 ) {
  console.log('21 - 16 = 5')
} else
if (a === 21 && sign === "-" && b === 17 ) {
  console.log('21 - 17 = 4')
} else
if (a === 21 && sign === "-" && b === 18 ) {
  console.log('21 - 18 = 3')
} else
if (a === 21 && sign === "-" && b === 19 ) {
  console.log('21 - 19 = 2')
} else
if (a === 21 && sign === "-" && b === 20 ) {
  console.log('21 - 20 = 1')
} else
if (a === 21 && sign === "-" && b === 21 ) {
  console.log('21 - 21 = 0')
} else
if (a === 21 && sign === "-" && b === 22 ) {
  console.log('21 - 22 = -1')
} else
if (a === 21 && sign === "-" && b === 23 ) {
  console.log('21 - 23 = -2')
} else
if (a === 21 && sign === "-" && b === 24 ) {
  console.log('21 - 24 = -3')
} else
if (a === 21 && sign === "-" && b === 25 ) {
  console.log('21 - 25 = -4')
} else
if (a === 21 && sign === "-" && b === 26 ) {
  console.log('21 - 26 = -5')
} else
if (a === 21 && sign === "-" && b === 27 ) {
  console.log('21 - 27 = -6')
} else
if (a === 21 && sign === "-" && b === 28 ) {
  console.log('21 - 28 = -7')
} else
if (a === 21 && sign === "-" && b === 29 ) {
  console.log('21 - 29 = -8')
} else
if (a === 21 && sign === "-" && b === 30 ) {
  console.log('21 - 30 = -9')
} else
if (a === 21 && sign === "-" && b === 31 ) {
  console.log('21 - 31 = -10')
} else
if (a === 21 && sign === "-" && b === 32 ) {
  console.log('21 - 32 = -11')
} else
if (a === 21 && sign === "-" && b === 33 ) {
  console.log('21 - 33 = -12')
} else
if (a === 21 && sign === "-" && b === 34 ) {
  console.log('21 - 34 = -13')
} else
if (a === 21 && sign === "-" && b === 35 ) {
  console.log('21 - 35 = -14')
} else
if (a === 21 && sign === "-" && b === 36 ) {
  console.log('21 - 36 = -15')
} else
if (a === 21 && sign === "-" && b === 37 ) {
  console.log('21 - 37 = -16')
} else
if (a === 21 && sign === "-" && b === 38 ) {
  console.log('21 - 38 = -17')
} else
if (a === 21 && sign === "-" && b === 39 ) {
  console.log('21 - 39 = -18')
} else
if (a === 21 && sign === "-" && b === 40 ) {
  console.log('21 - 40 = -19')
} else
if (a === 21 && sign === "-" && b === 41 ) {
  console.log('21 - 41 = -20')
} else
if (a === 21 && sign === "-" && b === 42 ) {
  console.log('21 - 42 = -21')
} else
if (a === 21 && sign === "-" && b === 43 ) {
  console.log('21 - 43 = -22')
} else
if (a === 21 && sign === "-" && b === 44 ) {
  console.log('21 - 44 = -23')
} else
if (a === 21 && sign === "-" && b === 45 ) {
  console.log('21 - 45 = -24')
} else
if (a === 21 && sign === "-" && b === 46 ) {
  console.log('21 - 46 = -25')
} else
if (a === 21 && sign === "-" && b === 47 ) {
  console.log('21 - 47 = -26')
} else
if (a === 21 && sign === "-" && b === 48 ) {
  console.log('21 - 48 = -27')
} else
if (a === 21 && sign === "-" && b === 49 ) {
  console.log('21 - 49 = -28')
} else
if (a === 21 && sign === "-" && b === 50 ) {
  console.log('21 - 50 = -29')
} else
if (a === 22 && sign === "-" && b === 1 ) {
  console.log('22 - 1 = 21')
} else
if (a === 22 && sign === "-" && b === 2 ) {
  console.log('22 - 2 = 20')
} else
if (a === 22 && sign === "-" && b === 3 ) {
  console.log('22 - 3 = 19')
} else
if (a === 22 && sign === "-" && b === 4 ) {
  console.log('22 - 4 = 18')
} else
if (a === 22 && sign === "-" && b === 5 ) {
  console.log('22 - 5 = 17')
} else
if (a === 22 && sign === "-" && b === 6 ) {
  console.log('22 - 6 = 16')
} else
if (a === 22 && sign === "-" && b === 7 ) {
  console.log('22 - 7 = 15')
} else
if (a === 22 && sign === "-" && b === 8 ) {
  console.log('22 - 8 = 14')
} else
if (a === 22 && sign === "-" && b === 9 ) {
  console.log('22 - 9 = 13')
} else
if (a === 22 && sign === "-" && b === 10 ) {
  console.log('22 - 10 = 12')
} else
if (a === 22 && sign === "-" && b === 11 ) {
  console.log('22 - 11 = 11')
} else
if (a === 22 && sign === "-" && b === 12 ) {
  console.log('22 - 12 = 10')
} else
if (a === 22 && sign === "-" && b === 13 ) {
  console.log('22 - 13 = 9')
} else
if (a === 22 && sign === "-" && b === 14 ) {
  console.log('22 - 14 = 8')
} else
if (a === 22 && sign === "-" && b === 15 ) {
  console.log('22 - 15 = 7')
} else
if (a === 22 && sign === "-" && b === 16 ) {
  console.log('22 - 16 = 6')
} else
if (a === 22 && sign === "-" && b === 17 ) {
  console.log('22 - 17 = 5')
} else
if (a === 22 && sign === "-" && b === 18 ) {
  console.log('22 - 18 = 4')
} else
if (a === 22 && sign === "-" && b === 19 ) {
  console.log('22 - 19 = 3')
} else
if (a === 22 && sign === "-" && b === 20 ) {
  console.log('22 - 20 = 2')
} else
if (a === 22 && sign === "-" && b === 21 ) {
  console.log('22 - 21 = 1')
} else
if (a === 22 && sign === "-" && b === 22 ) {
  console.log('22 - 22 = 0')
} else
if (a === 22 && sign === "-" && b === 23 ) {
  console.log('22 - 23 = -1')
} else
if (a === 22 && sign === "-" && b === 24 ) {
  console.log('22 - 24 = -2')
} else
if (a === 22 && sign === "-" && b === 25 ) {
  console.log('22 - 25 = -3')
} else
if (a === 22 && sign === "-" && b === 26 ) {
  console.log('22 - 26 = -4')
} else
if (a === 22 && sign === "-" && b === 27 ) {
  console.log('22 - 27 = -5')
} else
if (a === 22 && sign === "-" && b === 28 ) {
  console.log('22 - 28 = -6')
} else
if (a === 22 && sign === "-" && b === 29 ) {
  console.log('22 - 29 = -7')
} else
if (a === 22 && sign === "-" && b === 30 ) {
  console.log('22 - 30 = -8')
} else
if (a === 22 && sign === "-" && b === 31 ) {
  console.log('22 - 31 = -9')
} else
if (a === 22 && sign === "-" && b === 32 ) {
  console.log('22 - 32 = -10')
} else
if (a === 22 && sign === "-" && b === 33 ) {
  console.log('22 - 33 = -11')
} else
if (a === 22 && sign === "-" && b === 34 ) {
  console.log('22 - 34 = -12')
} else
if (a === 22 && sign === "-" && b === 35 ) {
  console.log('22 - 35 = -13')
} else
if (a === 22 && sign === "-" && b === 36 ) {
  console.log('22 - 36 = -14')
} else
if (a === 22 && sign === "-" && b === 37 ) {
  console.log('22 - 37 = -15')
} else
if (a === 22 && sign === "-" && b === 38 ) {
  console.log('22 - 38 = -16')
} else
if (a === 22 && sign === "-" && b === 39 ) {
  console.log('22 - 39 = -17')
} else
if (a === 22 && sign === "-" && b === 40 ) {
  console.log('22 - 40 = -18')
} else
if (a === 22 && sign === "-" && b === 41 ) {
  console.log('22 - 41 = -19')
} else
if (a === 22 && sign === "-" && b === 42 ) {
  console.log('22 - 42 = -20')
} else
if (a === 22 && sign === "-" && b === 43 ) {
  console.log('22 - 43 = -21')
} else
if (a === 22 && sign === "-" && b === 44 ) {
  console.log('22 - 44 = -22')
} else
if (a === 22 && sign === "-" && b === 45 ) {
  console.log('22 - 45 = -23')
} else
if (a === 22 && sign === "-" && b === 46 ) {
  console.log('22 - 46 = -24')
} else
if (a === 22 && sign === "-" && b === 47 ) {
  console.log('22 - 47 = -25')
} else
if (a === 22 && sign === "-" && b === 48 ) {
  console.log('22 - 48 = -26')
} else
if (a === 22 && sign === "-" && b === 49 ) {
  console.log('22 - 49 = -27')
} else
if (a === 22 && sign === "-" && b === 50 ) {
  console.log('22 - 50 = -28')
} else
if (a === 23 && sign === "-" && b === 1 ) {
  console.log('23 - 1 = 22')
} else
if (a === 23 && sign === "-" && b === 2 ) {
  console.log('23 - 2 = 21')
} else
if (a === 23 && sign === "-" && b === 3 ) {
  console.log('23 - 3 = 20')
} else
if (a === 23 && sign === "-" && b === 4 ) {
  console.log('23 - 4 = 19')
} else
if (a === 23 && sign === "-" && b === 5 ) {
  console.log('23 - 5 = 18')
} else
if (a === 23 && sign === "-" && b === 6 ) {
  console.log('23 - 6 = 17')
} else
if (a === 23 && sign === "-" && b === 7 ) {
  console.log('23 - 7 = 16')
} else
if (a === 23 && sign === "-" && b === 8 ) {
  console.log('23 - 8 = 15')
} else
if (a === 23 && sign === "-" && b === 9 ) {
  console.log('23 - 9 = 14')
} else
if (a === 23 && sign === "-" && b === 10 ) {
  console.log('23 - 10 = 13')
} else
if (a === 23 && sign === "-" && b === 11 ) {
  console.log('23 - 11 = 12')
} else
if (a === 23 && sign === "-" && b === 12 ) {
  console.log('23 - 12 = 11')
} else
if (a === 23 && sign === "-" && b === 13 ) {
  console.log('23 - 13 = 10')
} else
if (a === 23 && sign === "-" && b === 14 ) {
  console.log('23 - 14 = 9')
} else
if (a === 23 && sign === "-" && b === 15 ) {
  console.log('23 - 15 = 8')
} else
if (a === 23 && sign === "-" && b === 16 ) {
  console.log('23 - 16 = 7')
} else
if (a === 23 && sign === "-" && b === 17 ) {
  console.log('23 - 17 = 6')
} else
if (a === 23 && sign === "-" && b === 18 ) {
  console.log('23 - 18 = 5')
} else
if (a === 23 && sign === "-" && b === 19 ) {
  console.log('23 - 19 = 4')
} else
if (a === 23 && sign === "-" && b === 20 ) {
  console.log('23 - 20 = 3')
} else
if (a === 23 && sign === "-" && b === 21 ) {
  console.log('23 - 21 = 2')
} else
if (a === 23 && sign === "-" && b === 22 ) {
  console.log('23 - 22 = 1')
} else
if (a === 23 && sign === "-" && b === 23 ) {
  console.log('23 - 23 = 0')
} else
if (a === 23 && sign === "-" && b === 24 ) {
  console.log('23 - 24 = -1')
} else
if (a === 23 && sign === "-" && b === 25 ) {
  console.log('23 - 25 = -2')
} else
if (a === 23 && sign === "-" && b === 26 ) {
  console.log('23 - 26 = -3')
} else
if (a === 23 && sign === "-" && b === 27 ) {
  console.log('23 - 27 = -4')
} else
if (a === 23 && sign === "-" && b === 28 ) {
  console.log('23 - 28 = -5')
} else
if (a === 23 && sign === "-" && b === 29 ) {
  console.log('23 - 29 = -6')
} else
if (a === 23 && sign === "-" && b === 30 ) {
  console.log('23 - 30 = -7')
} else
if (a === 23 && sign === "-" && b === 31 ) {
  console.log('23 - 31 = -8')
} else
if (a === 23 && sign === "-" && b === 32 ) {
  console.log('23 - 32 = -9')
} else
if (a === 23 && sign === "-" && b === 33 ) {
  console.log('23 - 33 = -10')
} else
if (a === 23 && sign === "-" && b === 34 ) {
  console.log('23 - 34 = -11')
} else
if (a === 23 && sign === "-" && b === 35 ) {
  console.log('23 - 35 = -12')
} else
if (a === 23 && sign === "-" && b === 36 ) {
  console.log('23 - 36 = -13')
} else
if (a === 23 && sign === "-" && b === 37 ) {
  console.log('23 - 37 = -14')
} else
if (a === 23 && sign === "-" && b === 38 ) {
  console.log('23 - 38 = -15')
} else
if (a === 23 && sign === "-" && b === 39 ) {
  console.log('23 - 39 = -16')
} else
if (a === 23 && sign === "-" && b === 40 ) {
  console.log('23 - 40 = -17')
} else
if (a === 23 && sign === "-" && b === 41 ) {
  console.log('23 - 41 = -18')
} else
if (a === 23 && sign === "-" && b === 42 ) {
  console.log('23 - 42 = -19')
} else
if (a === 23 && sign === "-" && b === 43 ) {
  console.log('23 - 43 = -20')
} else
if (a === 23 && sign === "-" && b === 44 ) {
  console.log('23 - 44 = -21')
} else
if (a === 23 && sign === "-" && b === 45 ) {
  console.log('23 - 45 = -22')
} else
if (a === 23 && sign === "-" && b === 46 ) {
  console.log('23 - 46 = -23')
} else
if (a === 23 && sign === "-" && b === 47 ) {
  console.log('23 - 47 = -24')
} else
if (a === 23 && sign === "-" && b === 48 ) {
  console.log('23 - 48 = -25')
} else
if (a === 23 && sign === "-" && b === 49 ) {
  console.log('23 - 49 = -26')
} else
if (a === 23 && sign === "-" && b === 50 ) {
  console.log('23 - 50 = -27')
} else
if (a === 24 && sign === "-" && b === 1 ) {
  console.log('24 - 1 = 23')
} else
if (a === 24 && sign === "-" && b === 2 ) {
  console.log('24 - 2 = 22')
} else
if (a === 24 && sign === "-" && b === 3 ) {
  console.log('24 - 3 = 21')
} else
if (a === 24 && sign === "-" && b === 4 ) {
  console.log('24 - 4 = 20')
} else
if (a === 24 && sign === "-" && b === 5 ) {
  console.log('24 - 5 = 19')
} else
if (a === 24 && sign === "-" && b === 6 ) {
  console.log('24 - 6 = 18')
} else
if (a === 24 && sign === "-" && b === 7 ) {
  console.log('24 - 7 = 17')
} else
if (a === 24 && sign === "-" && b === 8 ) {
  console.log('24 - 8 = 16')
} else
if (a === 24 && sign === "-" && b === 9 ) {
  console.log('24 - 9 = 15')
} else
if (a === 24 && sign === "-" && b === 10 ) {
  console.log('24 - 10 = 14')
} else
if (a === 24 && sign === "-" && b === 11 ) {
  console.log('24 - 11 = 13')
} else
if (a === 24 && sign === "-" && b === 12 ) {
  console.log('24 - 12 = 12')
} else
if (a === 24 && sign === "-" && b === 13 ) {
  console.log('24 - 13 = 11')
} else
if (a === 24 && sign === "-" && b === 14 ) {
  console.log('24 - 14 = 10')
} else
if (a === 24 && sign === "-" && b === 15 ) {
  console.log('24 - 15 = 9')
} else
if (a === 24 && sign === "-" && b === 16 ) {
  console.log('24 - 16 = 8')
} else
if (a === 24 && sign === "-" && b === 17 ) {
  console.log('24 - 17 = 7')
} else
if (a === 24 && sign === "-" && b === 18 ) {
  console.log('24 - 18 = 6')
} else
if (a === 24 && sign === "-" && b === 19 ) {
  console.log('24 - 19 = 5')
} else
if (a === 24 && sign === "-" && b === 20 ) {
  console.log('24 - 20 = 4')
} else
if (a === 24 && sign === "-" && b === 21 ) {
  console.log('24 - 21 = 3')
} else
if (a === 24 && sign === "-" && b === 22 ) {
  console.log('24 - 22 = 2')
} else
if (a === 24 && sign === "-" && b === 23 ) {
  console.log('24 - 23 = 1')
} else
if (a === 24 && sign === "-" && b === 24 ) {
  console.log('24 - 24 = 0')
} else
if (a === 24 && sign === "-" && b === 25 ) {
  console.log('24 - 25 = -1')
} else
if (a === 24 && sign === "-" && b === 26 ) {
  console.log('24 - 26 = -2')
} else
if (a === 24 && sign === "-" && b === 27 ) {
  console.log('24 - 27 = -3')
} else
if (a === 24 && sign === "-" && b === 28 ) {
  console.log('24 - 28 = -4')
} else
if (a === 24 && sign === "-" && b === 29 ) {
  console.log('24 - 29 = -5')
} else
if (a === 24 && sign === "-" && b === 30 ) {
  console.log('24 - 30 = -6')
} else
if (a === 24 && sign === "-" && b === 31 ) {
  console.log('24 - 31 = -7')
} else
if (a === 24 && sign === "-" && b === 32 ) {
  console.log('24 - 32 = -8')
} else
if (a === 24 && sign === "-" && b === 33 ) {
  console.log('24 - 33 = -9')
} else
if (a === 24 && sign === "-" && b === 34 ) {
  console.log('24 - 34 = -10')
} else
if (a === 24 && sign === "-" && b === 35 ) {
  console.log('24 - 35 = -11')
} else
if (a === 24 && sign === "-" && b === 36 ) {
  console.log('24 - 36 = -12')
} else
if (a === 24 && sign === "-" && b === 37 ) {
  console.log('24 - 37 = -13')
} else
if (a === 24 && sign === "-" && b === 38 ) {
  console.log('24 - 38 = -14')
} else
if (a === 24 && sign === "-" && b === 39 ) {
  console.log('24 - 39 = -15')
} else
if (a === 24 && sign === "-" && b === 40 ) {
  console.log('24 - 40 = -16')
} else
if (a === 24 && sign === "-" && b === 41 ) {
  console.log('24 - 41 = -17')
} else
if (a === 24 && sign === "-" && b === 42 ) {
  console.log('24 - 42 = -18')
} else
if (a === 24 && sign === "-" && b === 43 ) {
  console.log('24 - 43 = -19')
} else
if (a === 24 && sign === "-" && b === 44 ) {
  console.log('24 - 44 = -20')
} else
if (a === 24 && sign === "-" && b === 45 ) {
  console.log('24 - 45 = -21')
} else
if (a === 24 && sign === "-" && b === 46 ) {
  console.log('24 - 46 = -22')
} else
if (a === 24 && sign === "-" && b === 47 ) {
  console.log('24 - 47 = -23')
} else
if (a === 24 && sign === "-" && b === 48 ) {
  console.log('24 - 48 = -24')
} else
if (a === 24 && sign === "-" && b === 49 ) {
  console.log('24 - 49 = -25')
} else
if (a === 24 && sign === "-" && b === 50 ) {
  console.log('24 - 50 = -26')
} else
if (a === 25 && sign === "-" && b === 1 ) {
  console.log('25 - 1 = 24')
} else
if (a === 25 && sign === "-" && b === 2 ) {
  console.log('25 - 2 = 23')
} else
if (a === 25 && sign === "-" && b === 3 ) {
  console.log('25 - 3 = 22')
} else
if (a === 25 && sign === "-" && b === 4 ) {
  console.log('25 - 4 = 21')
} else
if (a === 25 && sign === "-" && b === 5 ) {
  console.log('25 - 5 = 20')
} else
if (a === 25 && sign === "-" && b === 6 ) {
  console.log('25 - 6 = 19')
} else
if (a === 25 && sign === "-" && b === 7 ) {
  console.log('25 - 7 = 18')
} else
if (a === 25 && sign === "-" && b === 8 ) {
  console.log('25 - 8 = 17')
} else
if (a === 25 && sign === "-" && b === 9 ) {
  console.log('25 - 9 = 16')
} else
if (a === 25 && sign === "-" && b === 10 ) {
  console.log('25 - 10 = 15')
} else
if (a === 25 && sign === "-" && b === 11 ) {
  console.log('25 - 11 = 14')
} else
if (a === 25 && sign === "-" && b === 12 ) {
  console.log('25 - 12 = 13')
} else
if (a === 25 && sign === "-" && b === 13 ) {
  console.log('25 - 13 = 12')
} else
if (a === 25 && sign === "-" && b === 14 ) {
  console.log('25 - 14 = 11')
} else
if (a === 25 && sign === "-" && b === 15 ) {
  console.log('25 - 15 = 10')
} else
if (a === 25 && sign === "-" && b === 16 ) {
  console.log('25 - 16 = 9')
} else
if (a === 25 && sign === "-" && b === 17 ) {
  console.log('25 - 17 = 8')
} else
if (a === 25 && sign === "-" && b === 18 ) {
  console.log('25 - 18 = 7')
} else
if (a === 25 && sign === "-" && b === 19 ) {
  console.log('25 - 19 = 6')
} else
if (a === 25 && sign === "-" && b === 20 ) {
  console.log('25 - 20 = 5')
} else
if (a === 25 && sign === "-" && b === 21 ) {
  console.log('25 - 21 = 4')
} else
if (a === 25 && sign === "-" && b === 22 ) {
  console.log('25 - 22 = 3')
} else
if (a === 25 && sign === "-" && b === 23 ) {
  console.log('25 - 23 = 2')
} else
if (a === 25 && sign === "-" && b === 24 ) {
  console.log('25 - 24 = 1')
} else
if (a === 25 && sign === "-" && b === 25 ) {
  console.log('25 - 25 = 0')
} else
if (a === 25 && sign === "-" && b === 26 ) {
  console.log('25 - 26 = -1')
} else
if (a === 25 && sign === "-" && b === 27 ) {
  console.log('25 - 27 = -2')
} else
if (a === 25 && sign === "-" && b === 28 ) {
  console.log('25 - 28 = -3')
} else
if (a === 25 && sign === "-" && b === 29 ) {
  console.log('25 - 29 = -4')
} else
if (a === 25 && sign === "-" && b === 30 ) {
  console.log('25 - 30 = -5')
} else
if (a === 25 && sign === "-" && b === 31 ) {
  console.log('25 - 31 = -6')
} else
if (a === 25 && sign === "-" && b === 32 ) {
  console.log('25 - 32 = -7')
} else
if (a === 25 && sign === "-" && b === 33 ) {
  console.log('25 - 33 = -8')
} else
if (a === 25 && sign === "-" && b === 34 ) {
  console.log('25 - 34 = -9')
} else
if (a === 25 && sign === "-" && b === 35 ) {
  console.log('25 - 35 = -10')
} else
if (a === 25 && sign === "-" && b === 36 ) {
  console.log('25 - 36 = -11')
} else
if (a === 25 && sign === "-" && b === 37 ) {
  console.log('25 - 37 = -12')
} else
if (a === 25 && sign === "-" && b === 38 ) {
  console.log('25 - 38 = -13')
} else
if (a === 25 && sign === "-" && b === 39 ) {
  console.log('25 - 39 = -14')
} else
if (a === 25 && sign === "-" && b === 40 ) {
  console.log('25 - 40 = -15')
} else
if (a === 25 && sign === "-" && b === 41 ) {
  console.log('25 - 41 = -16')
} else
if (a === 25 && sign === "-" && b === 42 ) {
  console.log('25 - 42 = -17')
} else
if (a === 25 && sign === "-" && b === 43 ) {
  console.log('25 - 43 = -18')
} else
if (a === 25 && sign === "-" && b === 44 ) {
  console.log('25 - 44 = -19')
} else
if (a === 25 && sign === "-" && b === 45 ) {
  console.log('25 - 45 = -20')
} else
if (a === 25 && sign === "-" && b === 46 ) {
  console.log('25 - 46 = -21')
} else
if (a === 25 && sign === "-" && b === 47 ) {
  console.log('25 - 47 = -22')
} else
if (a === 25 && sign === "-" && b === 48 ) {
  console.log('25 - 48 = -23')
} else
if (a === 25 && sign === "-" && b === 49 ) {
  console.log('25 - 49 = -24')
} else
if (a === 25 && sign === "-" && b === 50 ) {
  console.log('25 - 50 = -25')
} else
if (a === 26 && sign === "-" && b === 1 ) {
  console.log('26 - 1 = 25')
} else
if (a === 26 && sign === "-" && b === 2 ) {
  console.log('26 - 2 = 24')
} else
if (a === 26 && sign === "-" && b === 3 ) {
  console.log('26 - 3 = 23')
} else
if (a === 26 && sign === "-" && b === 4 ) {
  console.log('26 - 4 = 22')
} else
if (a === 26 && sign === "-" && b === 5 ) {
  console.log('26 - 5 = 21')
} else
if (a === 26 && sign === "-" && b === 6 ) {
  console.log('26 - 6 = 20')
} else
if (a === 26 && sign === "-" && b === 7 ) {
  console.log('26 - 7 = 19')
} else
if (a === 26 && sign === "-" && b === 8 ) {
  console.log('26 - 8 = 18')
} else
if (a === 26 && sign === "-" && b === 9 ) {
  console.log('26 - 9 = 17')
} else
if (a === 26 && sign === "-" && b === 10 ) {
  console.log('26 - 10 = 16')
} else
if (a === 26 && sign === "-" && b === 11 ) {
  console.log('26 - 11 = 15')
} else
if (a === 26 && sign === "-" && b === 12 ) {
  console.log('26 - 12 = 14')
} else
if (a === 26 && sign === "-" && b === 13 ) {
  console.log('26 - 13 = 13')
} else
if (a === 26 && sign === "-" && b === 14 ) {
  console.log('26 - 14 = 12')
} else
if (a === 26 && sign === "-" && b === 15 ) {
  console.log('26 - 15 = 11')
} else
if (a === 26 && sign === "-" && b === 16 ) {
  console.log('26 - 16 = 10')
} else
if (a === 26 && sign === "-" && b === 17 ) {
  console.log('26 - 17 = 9')
} else
if (a === 26 && sign === "-" && b === 18 ) {
  console.log('26 - 18 = 8')
} else
if (a === 26 && sign === "-" && b === 19 ) {
  console.log('26 - 19 = 7')
} else
if (a === 26 && sign === "-" && b === 20 ) {
  console.log('26 - 20 = 6')
} else
if (a === 26 && sign === "-" && b === 21 ) {
  console.log('26 - 21 = 5')
} else
if (a === 26 && sign === "-" && b === 22 ) {
  console.log('26 - 22 = 4')
} else
if (a === 26 && sign === "-" && b === 23 ) {
  console.log('26 - 23 = 3')
} else
if (a === 26 && sign === "-" && b === 24 ) {
  console.log('26 - 24 = 2')
} else
if (a === 26 && sign === "-" && b === 25 ) {
  console.log('26 - 25 = 1')
} else
if (a === 26 && sign === "-" && b === 26 ) {
  console.log('26 - 26 = 0')
} else
if (a === 26 && sign === "-" && b === 27 ) {
  console.log('26 - 27 = -1')
} else
if (a === 26 && sign === "-" && b === 28 ) {
  console.log('26 - 28 = -2')
} else
if (a === 26 && sign === "-" && b === 29 ) {
  console.log('26 - 29 = -3')
} else
if (a === 26 && sign === "-" && b === 30 ) {
  console.log('26 - 30 = -4')
} else
if (a === 26 && sign === "-" && b === 31 ) {
  console.log('26 - 31 = -5')
} else
if (a === 26 && sign === "-" && b === 32 ) {
  console.log('26 - 32 = -6')
} else
if (a === 26 && sign === "-" && b === 33 ) {
  console.log('26 - 33 = -7')
} else
if (a === 26 && sign === "-" && b === 34 ) {
  console.log('26 - 34 = -8')
} else
if (a === 26 && sign === "-" && b === 35 ) {
  console.log('26 - 35 = -9')
} else
if (a === 26 && sign === "-" && b === 36 ) {
  console.log('26 - 36 = -10')
} else
if (a === 26 && sign === "-" && b === 37 ) {
  console.log('26 - 37 = -11')
} else
if (a === 26 && sign === "-" && b === 38 ) {
  console.log('26 - 38 = -12')
} else
if (a === 26 && sign === "-" && b === 39 ) {
  console.log('26 - 39 = -13')
} else
if (a === 26 && sign === "-" && b === 40 ) {
  console.log('26 - 40 = -14')
} else
if (a === 26 && sign === "-" && b === 41 ) {
  console.log('26 - 41 = -15')
} else
if (a === 26 && sign === "-" && b === 42 ) {
  console.log('26 - 42 = -16')
} else
if (a === 26 && sign === "-" && b === 43 ) {
  console.log('26 - 43 = -17')
} else
if (a === 26 && sign === "-" && b === 44 ) {
  console.log('26 - 44 = -18')
} else
if (a === 26 && sign === "-" && b === 45 ) {
  console.log('26 - 45 = -19')
} else
if (a === 26 && sign === "-" && b === 46 ) {
  console.log('26 - 46 = -20')
} else
if (a === 26 && sign === "-" && b === 47 ) {
  console.log('26 - 47 = -21')
} else
if (a === 26 && sign === "-" && b === 48 ) {
  console.log('26 - 48 = -22')
} else
if (a === 26 && sign === "-" && b === 49 ) {
  console.log('26 - 49 = -23')
} else
if (a === 26 && sign === "-" && b === 50 ) {
  console.log('26 - 50 = -24')
} else
if (a === 27 && sign === "-" && b === 1 ) {
  console.log('27 - 1 = 26')
} else
if (a === 27 && sign === "-" && b === 2 ) {
  console.log('27 - 2 = 25')
} else
if (a === 27 && sign === "-" && b === 3 ) {
  console.log('27 - 3 = 24')
} else
if (a === 27 && sign === "-" && b === 4 ) {
  console.log('27 - 4 = 23')
} else
if (a === 27 && sign === "-" && b === 5 ) {
  console.log('27 - 5 = 22')
} else
if (a === 27 && sign === "-" && b === 6 ) {
  console.log('27 - 6 = 21')
} else
if (a === 27 && sign === "-" && b === 7 ) {
  console.log('27 - 7 = 20')
} else
if (a === 27 && sign === "-" && b === 8 ) {
  console.log('27 - 8 = 19')
} else
if (a === 27 && sign === "-" && b === 9 ) {
  console.log('27 - 9 = 18')
} else
if (a === 27 && sign === "-" && b === 10 ) {
  console.log('27 - 10 = 17')
} else
if (a === 27 && sign === "-" && b === 11 ) {
  console.log('27 - 11 = 16')
} else
if (a === 27 && sign === "-" && b === 12 ) {
  console.log('27 - 12 = 15')
} else
if (a === 27 && sign === "-" && b === 13 ) {
  console.log('27 - 13 = 14')
} else
if (a === 27 && sign === "-" && b === 14 ) {
  console.log('27 - 14 = 13')
} else
if (a === 27 && sign === "-" && b === 15 ) {
  console.log('27 - 15 = 12')
} else
if (a === 27 && sign === "-" && b === 16 ) {
  console.log('27 - 16 = 11')
} else
if (a === 27 && sign === "-" && b === 17 ) {
  console.log('27 - 17 = 10')
} else
if (a === 27 && sign === "-" && b === 18 ) {
  console.log('27 - 18 = 9')
} else
if (a === 27 && sign === "-" && b === 19 ) {
  console.log('27 - 19 = 8')
} else
if (a === 27 && sign === "-" && b === 20 ) {
  console.log('27 - 20 = 7')
} else
if (a === 27 && sign === "-" && b === 21 ) {
  console.log('27 - 21 = 6')
} else
if (a === 27 && sign === "-" && b === 22 ) {
  console.log('27 - 22 = 5')
} else
if (a === 27 && sign === "-" && b === 23 ) {
  console.log('27 - 23 = 4')
} else
if (a === 27 && sign === "-" && b === 24 ) {
  console.log('27 - 24 = 3')
} else
if (a === 27 && sign === "-" && b === 25 ) {
  console.log('27 - 25 = 2')
} else
if (a === 27 && sign === "-" && b === 26 ) {
  console.log('27 - 26 = 1')
} else
if (a === 27 && sign === "-" && b === 27 ) {
  console.log('27 - 27 = 0')
} else
if (a === 27 && sign === "-" && b === 28 ) {
  console.log('27 - 28 = -1')
} else
if (a === 27 && sign === "-" && b === 29 ) {
  console.log('27 - 29 = -2')
} else
if (a === 27 && sign === "-" && b === 30 ) {
  console.log('27 - 30 = -3')
} else
if (a === 27 && sign === "-" && b === 31 ) {
  console.log('27 - 31 = -4')
} else
if (a === 27 && sign === "-" && b === 32 ) {
  console.log('27 - 32 = -5')
} else
if (a === 27 && sign === "-" && b === 33 ) {
  console.log('27 - 33 = -6')
} else
if (a === 27 && sign === "-" && b === 34 ) {
  console.log('27 - 34 = -7')
} else
if (a === 27 && sign === "-" && b === 35 ) {
  console.log('27 - 35 = -8')
} else
if (a === 27 && sign === "-" && b === 36 ) {
  console.log('27 - 36 = -9')
} else
if (a === 27 && sign === "-" && b === 37 ) {
  console.log('27 - 37 = -10')
} else
if (a === 27 && sign === "-" && b === 38 ) {
  console.log('27 - 38 = -11')
} else
if (a === 27 && sign === "-" && b === 39 ) {
  console.log('27 - 39 = -12')
} else
if (a === 27 && sign === "-" && b === 40 ) {
  console.log('27 - 40 = -13')
} else
if (a === 27 && sign === "-" && b === 41 ) {
  console.log('27 - 41 = -14')
} else
if (a === 27 && sign === "-" && b === 42 ) {
  console.log('27 - 42 = -15')
} else
if (a === 27 && sign === "-" && b === 43 ) {
  console.log('27 - 43 = -16')
} else
if (a === 27 && sign === "-" && b === 44 ) {
  console.log('27 - 44 = -17')
} else
if (a === 27 && sign === "-" && b === 45 ) {
  console.log('27 - 45 = -18')
} else
if (a === 27 && sign === "-" && b === 46 ) {
  console.log('27 - 46 = -19')
} else
if (a === 27 && sign === "-" && b === 47 ) {
  console.log('27 - 47 = -20')
} else
if (a === 27 && sign === "-" && b === 48 ) {
  console.log('27 - 48 = -21')
} else
if (a === 27 && sign === "-" && b === 49 ) {
  console.log('27 - 49 = -22')
} else
if (a === 27 && sign === "-" && b === 50 ) {
  console.log('27 - 50 = -23')
} else
if (a === 28 && sign === "-" && b === 1 ) {
  console.log('28 - 1 = 27')
} else
if (a === 28 && sign === "-" && b === 2 ) {
  console.log('28 - 2 = 26')
} else
if (a === 28 && sign === "-" && b === 3 ) {
  console.log('28 - 3 = 25')
} else
if (a === 28 && sign === "-" && b === 4 ) {
  console.log('28 - 4 = 24')
} else
if (a === 28 && sign === "-" && b === 5 ) {
  console.log('28 - 5 = 23')
} else
if (a === 28 && sign === "-" && b === 6 ) {
  console.log('28 - 6 = 22')
} else
if (a === 28 && sign === "-" && b === 7 ) {
  console.log('28 - 7 = 21')
} else
if (a === 28 && sign === "-" && b === 8 ) {
  console.log('28 - 8 = 20')
} else
if (a === 28 && sign === "-" && b === 9 ) {
  console.log('28 - 9 = 19')
} else
if (a === 28 && sign === "-" && b === 10 ) {
  console.log('28 - 10 = 18')
} else
if (a === 28 && sign === "-" && b === 11 ) {
  console.log('28 - 11 = 17')
} else
if (a === 28 && sign === "-" && b === 12 ) {
  console.log('28 - 12 = 16')
} else
if (a === 28 && sign === "-" && b === 13 ) {
  console.log('28 - 13 = 15')
} else
if (a === 28 && sign === "-" && b === 14 ) {
  console.log('28 - 14 = 14')
} else
if (a === 28 && sign === "-" && b === 15 ) {
  console.log('28 - 15 = 13')
} else
if (a === 28 && sign === "-" && b === 16 ) {
  console.log('28 - 16 = 12')
} else
if (a === 28 && sign === "-" && b === 17 ) {
  console.log('28 - 17 = 11')
} else
if (a === 28 && sign === "-" && b === 18 ) {
  console.log('28 - 18 = 10')
} else
if (a === 28 && sign === "-" && b === 19 ) {
  console.log('28 - 19 = 9')
} else
if (a === 28 && sign === "-" && b === 20 ) {
  console.log('28 - 20 = 8')
} else
if (a === 28 && sign === "-" && b === 21 ) {
  console.log('28 - 21 = 7')
} else
if (a === 28 && sign === "-" && b === 22 ) {
  console.log('28 - 22 = 6')
} else
if (a === 28 && sign === "-" && b === 23 ) {
  console.log('28 - 23 = 5')
} else
if (a === 28 && sign === "-" && b === 24 ) {
  console.log('28 - 24 = 4')
} else
if (a === 28 && sign === "-" && b === 25 ) {
  console.log('28 - 25 = 3')
} else
if (a === 28 && sign === "-" && b === 26 ) {
  console.log('28 - 26 = 2')
} else
if (a === 28 && sign === "-" && b === 27 ) {
  console.log('28 - 27 = 1')
} else
if (a === 28 && sign === "-" && b === 28 ) {
  console.log('28 - 28 = 0')
} else
if (a === 28 && sign === "-" && b === 29 ) {
  console.log('28 - 29 = -1')
} else
if (a === 28 && sign === "-" && b === 30 ) {
  console.log('28 - 30 = -2')
} else
if (a === 28 && sign === "-" && b === 31 ) {
  console.log('28 - 31 = -3')
} else
if (a === 28 && sign === "-" && b === 32 ) {
  console.log('28 - 32 = -4')
} else
if (a === 28 && sign === "-" && b === 33 ) {
  console.log('28 - 33 = -5')
} else
if (a === 28 && sign === "-" && b === 34 ) {
  console.log('28 - 34 = -6')
} else
if (a === 28 && sign === "-" && b === 35 ) {
  console.log('28 - 35 = -7')
} else
if (a === 28 && sign === "-" && b === 36 ) {
  console.log('28 - 36 = -8')
} else
if (a === 28 && sign === "-" && b === 37 ) {
  console.log('28 - 37 = -9')
} else
if (a === 28 && sign === "-" && b === 38 ) {
  console.log('28 - 38 = -10')
} else
if (a === 28 && sign === "-" && b === 39 ) {
  console.log('28 - 39 = -11')
} else
if (a === 28 && sign === "-" && b === 40 ) {
  console.log('28 - 40 = -12')
} else
if (a === 28 && sign === "-" && b === 41 ) {
  console.log('28 - 41 = -13')
} else
if (a === 28 && sign === "-" && b === 42 ) {
  console.log('28 - 42 = -14')
} else
if (a === 28 && sign === "-" && b === 43 ) {
  console.log('28 - 43 = -15')
} else
if (a === 28 && sign === "-" && b === 44 ) {
  console.log('28 - 44 = -16')
} else
if (a === 28 && sign === "-" && b === 45 ) {
  console.log('28 - 45 = -17')
} else
if (a === 28 && sign === "-" && b === 46 ) {
  console.log('28 - 46 = -18')
} else
if (a === 28 && sign === "-" && b === 47 ) {
  console.log('28 - 47 = -19')
} else
if (a === 28 && sign === "-" && b === 48 ) {
  console.log('28 - 48 = -20')
} else
if (a === 28 && sign === "-" && b === 49 ) {
  console.log('28 - 49 = -21')
} else
if (a === 28 && sign === "-" && b === 50 ) {
  console.log('28 - 50 = -22')
} else
if (a === 29 && sign === "-" && b === 1 ) {
  console.log('29 - 1 = 28')
} else
if (a === 29 && sign === "-" && b === 2 ) {
  console.log('29 - 2 = 27')
} else
if (a === 29 && sign === "-" && b === 3 ) {
  console.log('29 - 3 = 26')
} else
if (a === 29 && sign === "-" && b === 4 ) {
  console.log('29 - 4 = 25')
} else
if (a === 29 && sign === "-" && b === 5 ) {
  console.log('29 - 5 = 24')
} else
if (a === 29 && sign === "-" && b === 6 ) {
  console.log('29 - 6 = 23')
} else
if (a === 29 && sign === "-" && b === 7 ) {
  console.log('29 - 7 = 22')
} else
if (a === 29 && sign === "-" && b === 8 ) {
  console.log('29 - 8 = 21')
} else
if (a === 29 && sign === "-" && b === 9 ) {
  console.log('29 - 9 = 20')
} else
if (a === 29 && sign === "-" && b === 10 ) {
  console.log('29 - 10 = 19')
} else
if (a === 29 && sign === "-" && b === 11 ) {
  console.log('29 - 11 = 18')
} else
if (a === 29 && sign === "-" && b === 12 ) {
  console.log('29 - 12 = 17')
} else
if (a === 29 && sign === "-" && b === 13 ) {
  console.log('29 - 13 = 16')
} else
if (a === 29 && sign === "-" && b === 14 ) {
  console.log('29 - 14 = 15')
} else
if (a === 29 && sign === "-" && b === 15 ) {
  console.log('29 - 15 = 14')
} else
if (a === 29 && sign === "-" && b === 16 ) {
  console.log('29 - 16 = 13')
} else
if (a === 29 && sign === "-" && b === 17 ) {
  console.log('29 - 17 = 12')
} else
if (a === 29 && sign === "-" && b === 18 ) {
  console.log('29 - 18 = 11')
} else
if (a === 29 && sign === "-" && b === 19 ) {
  console.log('29 - 19 = 10')
} else
if (a === 29 && sign === "-" && b === 20 ) {
  console.log('29 - 20 = 9')
} else
if (a === 29 && sign === "-" && b === 21 ) {
  console.log('29 - 21 = 8')
} else
if (a === 29 && sign === "-" && b === 22 ) {
  console.log('29 - 22 = 7')
} else
if (a === 29 && sign === "-" && b === 23 ) {
  console.log('29 - 23 = 6')
} else
if (a === 29 && sign === "-" && b === 24 ) {
  console.log('29 - 24 = 5')
} else
if (a === 29 && sign === "-" && b === 25 ) {
  console.log('29 - 25 = 4')
} else
if (a === 29 && sign === "-" && b === 26 ) {
  console.log('29 - 26 = 3')
} else
if (a === 29 && sign === "-" && b === 27 ) {
  console.log('29 - 27 = 2')
} else
if (a === 29 && sign === "-" && b === 28 ) {
  console.log('29 - 28 = 1')
} else
if (a === 29 && sign === "-" && b === 29 ) {
  console.log('29 - 29 = 0')
} else
if (a === 29 && sign === "-" && b === 30 ) {
  console.log('29 - 30 = -1')
} else
if (a === 29 && sign === "-" && b === 31 ) {
  console.log('29 - 31 = -2')
} else
if (a === 29 && sign === "-" && b === 32 ) {
  console.log('29 - 32 = -3')
} else
if (a === 29 && sign === "-" && b === 33 ) {
  console.log('29 - 33 = -4')
} else
if (a === 29 && sign === "-" && b === 34 ) {
  console.log('29 - 34 = -5')
} else
if (a === 29 && sign === "-" && b === 35 ) {
  console.log('29 - 35 = -6')
} else
if (a === 29 && sign === "-" && b === 36 ) {
  console.log('29 - 36 = -7')
} else
if (a === 29 && sign === "-" && b === 37 ) {
  console.log('29 - 37 = -8')
} else
if (a === 29 && sign === "-" && b === 38 ) {
  console.log('29 - 38 = -9')
} else
if (a === 29 && sign === "-" && b === 39 ) {
  console.log('29 - 39 = -10')
} else
if (a === 29 && sign === "-" && b === 40 ) {
  console.log('29 - 40 = -11')
} else
if (a === 29 && sign === "-" && b === 41 ) {
  console.log('29 - 41 = -12')
} else
if (a === 29 && sign === "-" && b === 42 ) {
  console.log('29 - 42 = -13')
} else
if (a === 29 && sign === "-" && b === 43 ) {
  console.log('29 - 43 = -14')
} else
if (a === 29 && sign === "-" && b === 44 ) {
  console.log('29 - 44 = -15')
} else
if (a === 29 && sign === "-" && b === 45 ) {
  console.log('29 - 45 = -16')
} else
if (a === 29 && sign === "-" && b === 46 ) {
  console.log('29 - 46 = -17')
} else
if (a === 29 && sign === "-" && b === 47 ) {
  console.log('29 - 47 = -18')
} else
if (a === 29 && sign === "-" && b === 48 ) {
  console.log('29 - 48 = -19')
} else
if (a === 29 && sign === "-" && b === 49 ) {
  console.log('29 - 49 = -20')
} else
if (a === 29 && sign === "-" && b === 50 ) {
  console.log('29 - 50 = -21')
} else
if (a === 30 && sign === "-" && b === 1 ) {
  console.log('30 - 1 = 29')
} else
if (a === 30 && sign === "-" && b === 2 ) {
  console.log('30 - 2 = 28')
} else
if (a === 30 && sign === "-" && b === 3 ) {
  console.log('30 - 3 = 27')
} else
if (a === 30 && sign === "-" && b === 4 ) {
  console.log('30 - 4 = 26')
} else
if (a === 30 && sign === "-" && b === 5 ) {
  console.log('30 - 5 = 25')
} else
if (a === 30 && sign === "-" && b === 6 ) {
  console.log('30 - 6 = 24')
} else
if (a === 30 && sign === "-" && b === 7 ) {
  console.log('30 - 7 = 23')
} else
if (a === 30 && sign === "-" && b === 8 ) {
  console.log('30 - 8 = 22')
} else
if (a === 30 && sign === "-" && b === 9 ) {
  console.log('30 - 9 = 21')
} else
if (a === 30 && sign === "-" && b === 10 ) {
  console.log('30 - 10 = 20')
} else
if (a === 30 && sign === "-" && b === 11 ) {
  console.log('30 - 11 = 19')
} else
if (a === 30 && sign === "-" && b === 12 ) {
  console.log('30 - 12 = 18')
} else
if (a === 30 && sign === "-" && b === 13 ) {
  console.log('30 - 13 = 17')
} else
if (a === 30 && sign === "-" && b === 14 ) {
  console.log('30 - 14 = 16')
} else
if (a === 30 && sign === "-" && b === 15 ) {
  console.log('30 - 15 = 15')
} else
if (a === 30 && sign === "-" && b === 16 ) {
  console.log('30 - 16 = 14')
} else
if (a === 30 && sign === "-" && b === 17 ) {
  console.log('30 - 17 = 13')
} else
if (a === 30 && sign === "-" && b === 18 ) {
  console.log('30 - 18 = 12')
} else
if (a === 30 && sign === "-" && b === 19 ) {
  console.log('30 - 19 = 11')
} else
if (a === 30 && sign === "-" && b === 20 ) {
  console.log('30 - 20 = 10')
} else
if (a === 30 && sign === "-" && b === 21 ) {
  console.log('30 - 21 = 9')
} else
if (a === 30 && sign === "-" && b === 22 ) {
  console.log('30 - 22 = 8')
} else
if (a === 30 && sign === "-" && b === 23 ) {
  console.log('30 - 23 = 7')
} else
if (a === 30 && sign === "-" && b === 24 ) {
  console.log('30 - 24 = 6')
} else
if (a === 30 && sign === "-" && b === 25 ) {
  console.log('30 - 25 = 5')
} else
if (a === 30 && sign === "-" && b === 26 ) {
  console.log('30 - 26 = 4')
} else
if (a === 30 && sign === "-" && b === 27 ) {
  console.log('30 - 27 = 3')
} else
if (a === 30 && sign === "-" && b === 28 ) {
  console.log('30 - 28 = 2')
} else
if (a === 30 && sign === "-" && b === 29 ) {
  console.log('30 - 29 = 1')
} else
if (a === 30 && sign === "-" && b === 30 ) {
  console.log('30 - 30 = 0')
} else
if (a === 30 && sign === "-" && b === 31 ) {
  console.log('30 - 31 = -1')
} else
if (a === 30 && sign === "-" && b === 32 ) {
  console.log('30 - 32 = -2')
} else
if (a === 30 && sign === "-" && b === 33 ) {
  console.log('30 - 33 = -3')
} else
if (a === 30 && sign === "-" && b === 34 ) {
  console.log('30 - 34 = -4')
} else
if (a === 30 && sign === "-" && b === 35 ) {
  console.log('30 - 35 = -5')
} else
if (a === 30 && sign === "-" && b === 36 ) {
  console.log('30 - 36 = -6')
} else
if (a === 30 && sign === "-" && b === 37 ) {
  console.log('30 - 37 = -7')
} else
if (a === 30 && sign === "-" && b === 38 ) {
  console.log('30 - 38 = -8')
} else
if (a === 30 && sign === "-" && b === 39 ) {
  console.log('30 - 39 = -9')
} else
if (a === 30 && sign === "-" && b === 40 ) {
  console.log('30 - 40 = -10')
} else
if (a === 30 && sign === "-" && b === 41 ) {
  console.log('30 - 41 = -11')
} else
if (a === 30 && sign === "-" && b === 42 ) {
  console.log('30 - 42 = -12')
} else
if (a === 30 && sign === "-" && b === 43 ) {
  console.log('30 - 43 = -13')
} else
if (a === 30 && sign === "-" && b === 44 ) {
  console.log('30 - 44 = -14')
} else
if (a === 30 && sign === "-" && b === 45 ) {
  console.log('30 - 45 = -15')
} else
if (a === 30 && sign === "-" && b === 46 ) {
  console.log('30 - 46 = -16')
} else
if (a === 30 && sign === "-" && b === 47 ) {
  console.log('30 - 47 = -17')
} else
if (a === 30 && sign === "-" && b === 48 ) {
  console.log('30 - 48 = -18')
} else
if (a === 30 && sign === "-" && b === 49 ) {
  console.log('30 - 49 = -19')
} else
if (a === 30 && sign === "-" && b === 50 ) {
  console.log('30 - 50 = -20')
} else
if (a === 31 && sign === "-" && b === 1 ) {
  console.log('31 - 1 = 30')
} else
if (a === 31 && sign === "-" && b === 2 ) {
  console.log('31 - 2 = 29')
} else
if (a === 31 && sign === "-" && b === 3 ) {
  console.log('31 - 3 = 28')
} else
if (a === 31 && sign === "-" && b === 4 ) {
  console.log('31 - 4 = 27')
} else
if (a === 31 && sign === "-" && b === 5 ) {
  console.log('31 - 5 = 26')
} else
if (a === 31 && sign === "-" && b === 6 ) {
  console.log('31 - 6 = 25')
} else
if (a === 31 && sign === "-" && b === 7 ) {
  console.log('31 - 7 = 24')
} else
if (a === 31 && sign === "-" && b === 8 ) {
  console.log('31 - 8 = 23')
} else
if (a === 31 && sign === "-" && b === 9 ) {
  console.log('31 - 9 = 22')
} else
if (a === 31 && sign === "-" && b === 10 ) {
  console.log('31 - 10 = 21')
} else
if (a === 31 && sign === "-" && b === 11 ) {
  console.log('31 - 11 = 20')
} else
if (a === 31 && sign === "-" && b === 12 ) {
  console.log('31 - 12 = 19')
} else
if (a === 31 && sign === "-" && b === 13 ) {
  console.log('31 - 13 = 18')
} else
if (a === 31 && sign === "-" && b === 14 ) {
  console.log('31 - 14 = 17')
} else
if (a === 31 && sign === "-" && b === 15 ) {
  console.log('31 - 15 = 16')
} else
if (a === 31 && sign === "-" && b === 16 ) {
  console.log('31 - 16 = 15')
} else
if (a === 31 && sign === "-" && b === 17 ) {
  console.log('31 - 17 = 14')
} else
if (a === 31 && sign === "-" && b === 18 ) {
  console.log('31 - 18 = 13')
} else
if (a === 31 && sign === "-" && b === 19 ) {
  console.log('31 - 19 = 12')
} else
if (a === 31 && sign === "-" && b === 20 ) {
  console.log('31 - 20 = 11')
} else
if (a === 31 && sign === "-" && b === 21 ) {
  console.log('31 - 21 = 10')
} else
if (a === 31 && sign === "-" && b === 22 ) {
  console.log('31 - 22 = 9')
} else
if (a === 31 && sign === "-" && b === 23 ) {
  console.log('31 - 23 = 8')
} else
if (a === 31 && sign === "-" && b === 24 ) {
  console.log('31 - 24 = 7')
} else
if (a === 31 && sign === "-" && b === 25 ) {
  console.log('31 - 25 = 6')
} else
if (a === 31 && sign === "-" && b === 26 ) {
  console.log('31 - 26 = 5')
} else
if (a === 31 && sign === "-" && b === 27 ) {
  console.log('31 - 27 = 4')
} else
if (a === 31 && sign === "-" && b === 28 ) {
  console.log('31 - 28 = 3')
} else
if (a === 31 && sign === "-" && b === 29 ) {
  console.log('31 - 29 = 2')
} else
if (a === 31 && sign === "-" && b === 30 ) {
  console.log('31 - 30 = 1')
} else
if (a === 31 && sign === "-" && b === 31 ) {
  console.log('31 - 31 = 0')
} else
if (a === 31 && sign === "-" && b === 32 ) {
  console.log('31 - 32 = -1')
} else
if (a === 31 && sign === "-" && b === 33 ) {
  console.log('31 - 33 = -2')
} else
if (a === 31 && sign === "-" && b === 34 ) {
  console.log('31 - 34 = -3')
} else
if (a === 31 && sign === "-" && b === 35 ) {
  console.log('31 - 35 = -4')
} else
if (a === 31 && sign === "-" && b === 36 ) {
  console.log('31 - 36 = -5')
} else
if (a === 31 && sign === "-" && b === 37 ) {
  console.log('31 - 37 = -6')
} else
if (a === 31 && sign === "-" && b === 38 ) {
  console.log('31 - 38 = -7')
} else
if (a === 31 && sign === "-" && b === 39 ) {
  console.log('31 - 39 = -8')
} else
if (a === 31 && sign === "-" && b === 40 ) {
  console.log('31 - 40 = -9')
} else
if (a === 31 && sign === "-" && b === 41 ) {
  console.log('31 - 41 = -10')
} else
if (a === 31 && sign === "-" && b === 42 ) {
  console.log('31 - 42 = -11')
} else
if (a === 31 && sign === "-" && b === 43 ) {
  console.log('31 - 43 = -12')
} else
if (a === 31 && sign === "-" && b === 44 ) {
  console.log('31 - 44 = -13')
} else
if (a === 31 && sign === "-" && b === 45 ) {
  console.log('31 - 45 = -14')
} else
if (a === 31 && sign === "-" && b === 46 ) {
  console.log('31 - 46 = -15')
} else
if (a === 31 && sign === "-" && b === 47 ) {
  console.log('31 - 47 = -16')
} else
if (a === 31 && sign === "-" && b === 48 ) {
  console.log('31 - 48 = -17')
} else
if (a === 31 && sign === "-" && b === 49 ) {
  console.log('31 - 49 = -18')
} else
if (a === 31 && sign === "-" && b === 50 ) {
  console.log('31 - 50 = -19')
} else
if (a === 32 && sign === "-" && b === 1 ) {
  console.log('32 - 1 = 31')
} else
if (a === 32 && sign === "-" && b === 2 ) {
  console.log('32 - 2 = 30')
} else
if (a === 32 && sign === "-" && b === 3 ) {
  console.log('32 - 3 = 29')
} else
if (a === 32 && sign === "-" && b === 4 ) {
  console.log('32 - 4 = 28')
} else
if (a === 32 && sign === "-" && b === 5 ) {
  console.log('32 - 5 = 27')
} else
if (a === 32 && sign === "-" && b === 6 ) {
  console.log('32 - 6 = 26')
} else
if (a === 32 && sign === "-" && b === 7 ) {
  console.log('32 - 7 = 25')
} else
if (a === 32 && sign === "-" && b === 8 ) {
  console.log('32 - 8 = 24')
} else
if (a === 32 && sign === "-" && b === 9 ) {
  console.log('32 - 9 = 23')
} else
if (a === 32 && sign === "-" && b === 10 ) {
  console.log('32 - 10 = 22')
} else
if (a === 32 && sign === "-" && b === 11 ) {
  console.log('32 - 11 = 21')
} else
if (a === 32 && sign === "-" && b === 12 ) {
  console.log('32 - 12 = 20')
} else
if (a === 32 && sign === "-" && b === 13 ) {
  console.log('32 - 13 = 19')
} else
if (a === 32 && sign === "-" && b === 14 ) {
  console.log('32 - 14 = 18')
} else
if (a === 32 && sign === "-" && b === 15 ) {
  console.log('32 - 15 = 17')
} else
if (a === 32 && sign === "-" && b === 16 ) {
  console.log('32 - 16 = 16')
} else
if (a === 32 && sign === "-" && b === 17 ) {
  console.log('32 - 17 = 15')
} else
if (a === 32 && sign === "-" && b === 18 ) {
  console.log('32 - 18 = 14')
} else
if (a === 32 && sign === "-" && b === 19 ) {
  console.log('32 - 19 = 13')
} else
if (a === 32 && sign === "-" && b === 20 ) {
  console.log('32 - 20 = 12')
} else
if (a === 32 && sign === "-" && b === 21 ) {
  console.log('32 - 21 = 11')
} else
if (a === 32 && sign === "-" && b === 22 ) {
  console.log('32 - 22 = 10')
} else
if (a === 32 && sign === "-" && b === 23 ) {
  console.log('32 - 23 = 9')
} else
if (a === 32 && sign === "-" && b === 24 ) {
  console.log('32 - 24 = 8')
} else
if (a === 32 && sign === "-" && b === 25 ) {
  console.log('32 - 25 = 7')
} else
if (a === 32 && sign === "-" && b === 26 ) {
  console.log('32 - 26 = 6')
} else
if (a === 32 && sign === "-" && b === 27 ) {
  console.log('32 - 27 = 5')
} else
if (a === 32 && sign === "-" && b === 28 ) {
  console.log('32 - 28 = 4')
} else
if (a === 32 && sign === "-" && b === 29 ) {
  console.log('32 - 29 = 3')
} else
if (a === 32 && sign === "-" && b === 30 ) {
  console.log('32 - 30 = 2')
} else
if (a === 32 && sign === "-" && b === 31 ) {
  console.log('32 - 31 = 1')
} else
if (a === 32 && sign === "-" && b === 32 ) {
  console.log('32 - 32 = 0')
} else
if (a === 32 && sign === "-" && b === 33 ) {
  console.log('32 - 33 = -1')
} else
if (a === 32 && sign === "-" && b === 34 ) {
  console.log('32 - 34 = -2')
} else
if (a === 32 && sign === "-" && b === 35 ) {
  console.log('32 - 35 = -3')
} else
if (a === 32 && sign === "-" && b === 36 ) {
  console.log('32 - 36 = -4')
} else
if (a === 32 && sign === "-" && b === 37 ) {
  console.log('32 - 37 = -5')
} else
if (a === 32 && sign === "-" && b === 38 ) {
  console.log('32 - 38 = -6')
} else
if (a === 32 && sign === "-" && b === 39 ) {
  console.log('32 - 39 = -7')
} else
if (a === 32 && sign === "-" && b === 40 ) {
  console.log('32 - 40 = -8')
} else
if (a === 32 && sign === "-" && b === 41 ) {
  console.log('32 - 41 = -9')
} else
if (a === 32 && sign === "-" && b === 42 ) {
  console.log('32 - 42 = -10')
} else
if (a === 32 && sign === "-" && b === 43 ) {
  console.log('32 - 43 = -11')
} else
if (a === 32 && sign === "-" && b === 44 ) {
  console.log('32 - 44 = -12')
} else
if (a === 32 && sign === "-" && b === 45 ) {
  console.log('32 - 45 = -13')
} else
if (a === 32 && sign === "-" && b === 46 ) {
  console.log('32 - 46 = -14')
} else
if (a === 32 && sign === "-" && b === 47 ) {
  console.log('32 - 47 = -15')
} else
if (a === 32 && sign === "-" && b === 48 ) {
  console.log('32 - 48 = -16')
} else
if (a === 32 && sign === "-" && b === 49 ) {
  console.log('32 - 49 = -17')
} else
if (a === 32 && sign === "-" && b === 50 ) {
  console.log('32 - 50 = -18')
} else
if (a === 33 && sign === "-" && b === 1 ) {
  console.log('33 - 1 = 32')
} else
if (a === 33 && sign === "-" && b === 2 ) {
  console.log('33 - 2 = 31')
} else
if (a === 33 && sign === "-" && b === 3 ) {
  console.log('33 - 3 = 30')
} else
if (a === 33 && sign === "-" && b === 4 ) {
  console.log('33 - 4 = 29')
} else
if (a === 33 && sign === "-" && b === 5 ) {
  console.log('33 - 5 = 28')
} else
if (a === 33 && sign === "-" && b === 6 ) {
  console.log('33 - 6 = 27')
} else
if (a === 33 && sign === "-" && b === 7 ) {
  console.log('33 - 7 = 26')
} else
if (a === 33 && sign === "-" && b === 8 ) {
  console.log('33 - 8 = 25')
} else
if (a === 33 && sign === "-" && b === 9 ) {
  console.log('33 - 9 = 24')
} else
if (a === 33 && sign === "-" && b === 10 ) {
  console.log('33 - 10 = 23')
} else
if (a === 33 && sign === "-" && b === 11 ) {
  console.log('33 - 11 = 22')
} else
if (a === 33 && sign === "-" && b === 12 ) {
  console.log('33 - 12 = 21')
} else
if (a === 33 && sign === "-" && b === 13 ) {
  console.log('33 - 13 = 20')
} else
if (a === 33 && sign === "-" && b === 14 ) {
  console.log('33 - 14 = 19')
} else
if (a === 33 && sign === "-" && b === 15 ) {
  console.log('33 - 15 = 18')
} else
if (a === 33 && sign === "-" && b === 16 ) {
  console.log('33 - 16 = 17')
} else
if (a === 33 && sign === "-" && b === 17 ) {
  console.log('33 - 17 = 16')
} else
if (a === 33 && sign === "-" && b === 18 ) {
  console.log('33 - 18 = 15')
} else
if (a === 33 && sign === "-" && b === 19 ) {
  console.log('33 - 19 = 14')
} else
if (a === 33 && sign === "-" && b === 20 ) {
  console.log('33 - 20 = 13')
} else
if (a === 33 && sign === "-" && b === 21 ) {
  console.log('33 - 21 = 12')
} else
if (a === 33 && sign === "-" && b === 22 ) {
  console.log('33 - 22 = 11')
} else
if (a === 33 && sign === "-" && b === 23 ) {
  console.log('33 - 23 = 10')
} else
if (a === 33 && sign === "-" && b === 24 ) {
  console.log('33 - 24 = 9')
} else
if (a === 33 && sign === "-" && b === 25 ) {
  console.log('33 - 25 = 8')
} else
if (a === 33 && sign === "-" && b === 26 ) {
  console.log('33 - 26 = 7')
} else
if (a === 33 && sign === "-" && b === 27 ) {
  console.log('33 - 27 = 6')
} else
if (a === 33 && sign === "-" && b === 28 ) {
  console.log('33 - 28 = 5')
} else
if (a === 33 && sign === "-" && b === 29 ) {
  console.log('33 - 29 = 4')
} else
if (a === 33 && sign === "-" && b === 30 ) {
  console.log('33 - 30 = 3')
} else
if (a === 33 && sign === "-" && b === 31 ) {
  console.log('33 - 31 = 2')
} else
if (a === 33 && sign === "-" && b === 32 ) {
  console.log('33 - 32 = 1')
} else
if (a === 33 && sign === "-" && b === 33 ) {
  console.log('33 - 33 = 0')
} else
if (a === 33 && sign === "-" && b === 34 ) {
  console.log('33 - 34 = -1')
} else
if (a === 33 && sign === "-" && b === 35 ) {
  console.log('33 - 35 = -2')
} else
if (a === 33 && sign === "-" && b === 36 ) {
  console.log('33 - 36 = -3')
} else
if (a === 33 && sign === "-" && b === 37 ) {
  console.log('33 - 37 = -4')
} else
if (a === 33 && sign === "-" && b === 38 ) {
  console.log('33 - 38 = -5')
} else
if (a === 33 && sign === "-" && b === 39 ) {
  console.log('33 - 39 = -6')
} else
if (a === 33 && sign === "-" && b === 40 ) {
  console.log('33 - 40 = -7')
} else
if (a === 33 && sign === "-" && b === 41 ) {
  console.log('33 - 41 = -8')
} else
if (a === 33 && sign === "-" && b === 42 ) {
  console.log('33 - 42 = -9')
} else
if (a === 33 && sign === "-" && b === 43 ) {
  console.log('33 - 43 = -10')
} else
if (a === 33 && sign === "-" && b === 44 ) {
  console.log('33 - 44 = -11')
} else
if (a === 33 && sign === "-" && b === 45 ) {
  console.log('33 - 45 = -12')
} else
if (a === 33 && sign === "-" && b === 46 ) {
  console.log('33 - 46 = -13')
} else
if (a === 33 && sign === "-" && b === 47 ) {
  console.log('33 - 47 = -14')
} else
if (a === 33 && sign === "-" && b === 48 ) {
  console.log('33 - 48 = -15')
} else
if (a === 33 && sign === "-" && b === 49 ) {
  console.log('33 - 49 = -16')
} else
if (a === 33 && sign === "-" && b === 50 ) {
  console.log('33 - 50 = -17')
} else
if (a === 34 && sign === "-" && b === 1 ) {
  console.log('34 - 1 = 33')
} else
if (a === 34 && sign === "-" && b === 2 ) {
  console.log('34 - 2 = 32')
} else
if (a === 34 && sign === "-" && b === 3 ) {
  console.log('34 - 3 = 31')
} else
if (a === 34 && sign === "-" && b === 4 ) {
  console.log('34 - 4 = 30')
} else
if (a === 34 && sign === "-" && b === 5 ) {
  console.log('34 - 5 = 29')
} else
if (a === 34 && sign === "-" && b === 6 ) {
  console.log('34 - 6 = 28')
} else
if (a === 34 && sign === "-" && b === 7 ) {
  console.log('34 - 7 = 27')
} else
if (a === 34 && sign === "-" && b === 8 ) {
  console.log('34 - 8 = 26')
} else
if (a === 34 && sign === "-" && b === 9 ) {
  console.log('34 - 9 = 25')
} else
if (a === 34 && sign === "-" && b === 10 ) {
  console.log('34 - 10 = 24')
} else
if (a === 34 && sign === "-" && b === 11 ) {
  console.log('34 - 11 = 23')
} else
if (a === 34 && sign === "-" && b === 12 ) {
  console.log('34 - 12 = 22')
} else
if (a === 34 && sign === "-" && b === 13 ) {
  console.log('34 - 13 = 21')
} else
if (a === 34 && sign === "-" && b === 14 ) {
  console.log('34 - 14 = 20')
} else
if (a === 34 && sign === "-" && b === 15 ) {
  console.log('34 - 15 = 19')
} else
if (a === 34 && sign === "-" && b === 16 ) {
  console.log('34 - 16 = 18')
} else
if (a === 34 && sign === "-" && b === 17 ) {
  console.log('34 - 17 = 17')
} else
if (a === 34 && sign === "-" && b === 18 ) {
  console.log('34 - 18 = 16')
} else
if (a === 34 && sign === "-" && b === 19 ) {
  console.log('34 - 19 = 15')
} else
if (a === 34 && sign === "-" && b === 20 ) {
  console.log('34 - 20 = 14')
} else
if (a === 34 && sign === "-" && b === 21 ) {
  console.log('34 - 21 = 13')
} else
if (a === 34 && sign === "-" && b === 22 ) {
  console.log('34 - 22 = 12')
} else
if (a === 34 && sign === "-" && b === 23 ) {
  console.log('34 - 23 = 11')
} else
if (a === 34 && sign === "-" && b === 24 ) {
  console.log('34 - 24 = 10')
} else
if (a === 34 && sign === "-" && b === 25 ) {
  console.log('34 - 25 = 9')
} else
if (a === 34 && sign === "-" && b === 26 ) {
  console.log('34 - 26 = 8')
} else
if (a === 34 && sign === "-" && b === 27 ) {
  console.log('34 - 27 = 7')
} else
if (a === 34 && sign === "-" && b === 28 ) {
  console.log('34 - 28 = 6')
} else
if (a === 34 && sign === "-" && b === 29 ) {
  console.log('34 - 29 = 5')
} else
if (a === 34 && sign === "-" && b === 30 ) {
  console.log('34 - 30 = 4')
} else
if (a === 34 && sign === "-" && b === 31 ) {
  console.log('34 - 31 = 3')
} else
if (a === 34 && sign === "-" && b === 32 ) {
  console.log('34 - 32 = 2')
} else
if (a === 34 && sign === "-" && b === 33 ) {
  console.log('34 - 33 = 1')
} else
if (a === 34 && sign === "-" && b === 34 ) {
  console.log('34 - 34 = 0')
} else
if (a === 34 && sign === "-" && b === 35 ) {
  console.log('34 - 35 = -1')
} else
if (a === 34 && sign === "-" && b === 36 ) {
  console.log('34 - 36 = -2')
} else
if (a === 34 && sign === "-" && b === 37 ) {
  console.log('34 - 37 = -3')
} else
if (a === 34 && sign === "-" && b === 38 ) {
  console.log('34 - 38 = -4')
} else
if (a === 34 && sign === "-" && b === 39 ) {
  console.log('34 - 39 = -5')
} else
if (a === 34 && sign === "-" && b === 40 ) {
  console.log('34 - 40 = -6')
} else
if (a === 34 && sign === "-" && b === 41 ) {
  console.log('34 - 41 = -7')
} else
if (a === 34 && sign === "-" && b === 42 ) {
  console.log('34 - 42 = -8')
} else
if (a === 34 && sign === "-" && b === 43 ) {
  console.log('34 - 43 = -9')
} else
if (a === 34 && sign === "-" && b === 44 ) {
  console.log('34 - 44 = -10')
} else
if (a === 34 && sign === "-" && b === 45 ) {
  console.log('34 - 45 = -11')
} else
if (a === 34 && sign === "-" && b === 46 ) {
  console.log('34 - 46 = -12')
} else
if (a === 34 && sign === "-" && b === 47 ) {
  console.log('34 - 47 = -13')
} else
if (a === 34 && sign === "-" && b === 48 ) {
  console.log('34 - 48 = -14')
} else
if (a === 34 && sign === "-" && b === 49 ) {
  console.log('34 - 49 = -15')
} else
if (a === 34 && sign === "-" && b === 50 ) {
  console.log('34 - 50 = -16')
} else
if (a === 35 && sign === "-" && b === 1 ) {
  console.log('35 - 1 = 34')
} else
if (a === 35 && sign === "-" && b === 2 ) {
  console.log('35 - 2 = 33')
} else
if (a === 35 && sign === "-" && b === 3 ) {
  console.log('35 - 3 = 32')
} else
if (a === 35 && sign === "-" && b === 4 ) {
  console.log('35 - 4 = 31')
} else
if (a === 35 && sign === "-" && b === 5 ) {
  console.log('35 - 5 = 30')
} else
if (a === 35 && sign === "-" && b === 6 ) {
  console.log('35 - 6 = 29')
} else
if (a === 35 && sign === "-" && b === 7 ) {
  console.log('35 - 7 = 28')
} else
if (a === 35 && sign === "-" && b === 8 ) {
  console.log('35 - 8 = 27')
} else
if (a === 35 && sign === "-" && b === 9 ) {
  console.log('35 - 9 = 26')
} else
if (a === 35 && sign === "-" && b === 10 ) {
  console.log('35 - 10 = 25')
} else
if (a === 35 && sign === "-" && b === 11 ) {
  console.log('35 - 11 = 24')
} else
if (a === 35 && sign === "-" && b === 12 ) {
  console.log('35 - 12 = 23')
} else
if (a === 35 && sign === "-" && b === 13 ) {
  console.log('35 - 13 = 22')
} else
if (a === 35 && sign === "-" && b === 14 ) {
  console.log('35 - 14 = 21')
} else
if (a === 35 && sign === "-" && b === 15 ) {
  console.log('35 - 15 = 20')
} else
if (a === 35 && sign === "-" && b === 16 ) {
  console.log('35 - 16 = 19')
} else
if (a === 35 && sign === "-" && b === 17 ) {
  console.log('35 - 17 = 18')
} else
if (a === 35 && sign === "-" && b === 18 ) {
  console.log('35 - 18 = 17')
} else
if (a === 35 && sign === "-" && b === 19 ) {
  console.log('35 - 19 = 16')
} else
if (a === 35 && sign === "-" && b === 20 ) {
  console.log('35 - 20 = 15')
} else
if (a === 35 && sign === "-" && b === 21 ) {
  console.log('35 - 21 = 14')
} else
if (a === 35 && sign === "-" && b === 22 ) {
  console.log('35 - 22 = 13')
} else
if (a === 35 && sign === "-" && b === 23 ) {
  console.log('35 - 23 = 12')
} else
if (a === 35 && sign === "-" && b === 24 ) {
  console.log('35 - 24 = 11')
} else
if (a === 35 && sign === "-" && b === 25 ) {
  console.log('35 - 25 = 10')
} else
if (a === 35 && sign === "-" && b === 26 ) {
  console.log('35 - 26 = 9')
} else
if (a === 35 && sign === "-" && b === 27 ) {
  console.log('35 - 27 = 8')
} else
if (a === 35 && sign === "-" && b === 28 ) {
  console.log('35 - 28 = 7')
} else
if (a === 35 && sign === "-" && b === 29 ) {
  console.log('35 - 29 = 6')
} else
if (a === 35 && sign === "-" && b === 30 ) {
  console.log('35 - 30 = 5')
} else
if (a === 35 && sign === "-" && b === 31 ) {
  console.log('35 - 31 = 4')
} else
if (a === 35 && sign === "-" && b === 32 ) {
  console.log('35 - 32 = 3')
} else
if (a === 35 && sign === "-" && b === 33 ) {
  console.log('35 - 33 = 2')
} else
if (a === 35 && sign === "-" && b === 34 ) {
  console.log('35 - 34 = 1')
} else
if (a === 35 && sign === "-" && b === 35 ) {
  console.log('35 - 35 = 0')
} else
if (a === 35 && sign === "-" && b === 36 ) {
  console.log('35 - 36 = -1')
} else
if (a === 35 && sign === "-" && b === 37 ) {
  console.log('35 - 37 = -2')
} else
if (a === 35 && sign === "-" && b === 38 ) {
  console.log('35 - 38 = -3')
} else
if (a === 35 && sign === "-" && b === 39 ) {
  console.log('35 - 39 = -4')
} else
if (a === 35 && sign === "-" && b === 40 ) {
  console.log('35 - 40 = -5')
} else
if (a === 35 && sign === "-" && b === 41 ) {
  console.log('35 - 41 = -6')
} else
if (a === 35 && sign === "-" && b === 42 ) {
  console.log('35 - 42 = -7')
} else
if (a === 35 && sign === "-" && b === 43 ) {
  console.log('35 - 43 = -8')
} else
if (a === 35 && sign === "-" && b === 44 ) {
  console.log('35 - 44 = -9')
} else
if (a === 35 && sign === "-" && b === 45 ) {
  console.log('35 - 45 = -10')
} else
if (a === 35 && sign === "-" && b === 46 ) {
  console.log('35 - 46 = -11')
} else
if (a === 35 && sign === "-" && b === 47 ) {
  console.log('35 - 47 = -12')
} else
if (a === 35 && sign === "-" && b === 48 ) {
  console.log('35 - 48 = -13')
} else
if (a === 35 && sign === "-" && b === 49 ) {
  console.log('35 - 49 = -14')
} else
if (a === 35 && sign === "-" && b === 50 ) {
  console.log('35 - 50 = -15')
} else
if (a === 36 && sign === "-" && b === 1 ) {
  console.log('36 - 1 = 35')
} else
if (a === 36 && sign === "-" && b === 2 ) {
  console.log('36 - 2 = 34')
} else
if (a === 36 && sign === "-" && b === 3 ) {
  console.log('36 - 3 = 33')
} else
if (a === 36 && sign === "-" && b === 4 ) {
  console.log('36 - 4 = 32')
} else
if (a === 36 && sign === "-" && b === 5 ) {
  console.log('36 - 5 = 31')
} else
if (a === 36 && sign === "-" && b === 6 ) {
  console.log('36 - 6 = 30')
} else
if (a === 36 && sign === "-" && b === 7 ) {
  console.log('36 - 7 = 29')
} else
if (a === 36 && sign === "-" && b === 8 ) {
  console.log('36 - 8 = 28')
} else
if (a === 36 && sign === "-" && b === 9 ) {
  console.log('36 - 9 = 27')
} else
if (a === 36 && sign === "-" && b === 10 ) {
  console.log('36 - 10 = 26')
} else
if (a === 36 && sign === "-" && b === 11 ) {
  console.log('36 - 11 = 25')
} else
if (a === 36 && sign === "-" && b === 12 ) {
  console.log('36 - 12 = 24')
} else
if (a === 36 && sign === "-" && b === 13 ) {
  console.log('36 - 13 = 23')
} else
if (a === 36 && sign === "-" && b === 14 ) {
  console.log('36 - 14 = 22')
} else
if (a === 36 && sign === "-" && b === 15 ) {
  console.log('36 - 15 = 21')
} else
if (a === 36 && sign === "-" && b === 16 ) {
  console.log('36 - 16 = 20')
} else
if (a === 36 && sign === "-" && b === 17 ) {
  console.log('36 - 17 = 19')
} else
if (a === 36 && sign === "-" && b === 18 ) {
  console.log('36 - 18 = 18')
} else
if (a === 36 && sign === "-" && b === 19 ) {
  console.log('36 - 19 = 17')
} else
if (a === 36 && sign === "-" && b === 20 ) {
  console.log('36 - 20 = 16')
} else
if (a === 36 && sign === "-" && b === 21 ) {
  console.log('36 - 21 = 15')
} else
if (a === 36 && sign === "-" && b === 22 ) {
  console.log('36 - 22 = 14')
} else
if (a === 36 && sign === "-" && b === 23 ) {
  console.log('36 - 23 = 13')
} else
if (a === 36 && sign === "-" && b === 24 ) {
  console.log('36 - 24 = 12')
} else
if (a === 36 && sign === "-" && b === 25 ) {
  console.log('36 - 25 = 11')
} else
if (a === 36 && sign === "-" && b === 26 ) {
  console.log('36 - 26 = 10')
} else
if (a === 36 && sign === "-" && b === 27 ) {
  console.log('36 - 27 = 9')
} else
if (a === 36 && sign === "-" && b === 28 ) {
  console.log('36 - 28 = 8')
} else
if (a === 36 && sign === "-" && b === 29 ) {
  console.log('36 - 29 = 7')
} else
if (a === 36 && sign === "-" && b === 30 ) {
  console.log('36 - 30 = 6')
} else
if (a === 36 && sign === "-" && b === 31 ) {
  console.log('36 - 31 = 5')
} else
if (a === 36 && sign === "-" && b === 32 ) {
  console.log('36 - 32 = 4')
} else
if (a === 36 && sign === "-" && b === 33 ) {
  console.log('36 - 33 = 3')
} else
if (a === 36 && sign === "-" && b === 34 ) {
  console.log('36 - 34 = 2')
} else
if (a === 36 && sign === "-" && b === 35 ) {
  console.log('36 - 35 = 1')
} else
if (a === 36 && sign === "-" && b === 36 ) {
  console.log('36 - 36 = 0')
} else
if (a === 36 && sign === "-" && b === 37 ) {
  console.log('36 - 37 = -1')
} else
if (a === 36 && sign === "-" && b === 38 ) {
  console.log('36 - 38 = -2')
} else
if (a === 36 && sign === "-" && b === 39 ) {
  console.log('36 - 39 = -3')
} else
if (a === 36 && sign === "-" && b === 40 ) {
  console.log('36 - 40 = -4')
} else
if (a === 36 && sign === "-" && b === 41 ) {
  console.log('36 - 41 = -5')
} else
if (a === 36 && sign === "-" && b === 42 ) {
  console.log('36 - 42 = -6')
} else
if (a === 36 && sign === "-" && b === 43 ) {
  console.log('36 - 43 = -7')
} else
if (a === 36 && sign === "-" && b === 44 ) {
  console.log('36 - 44 = -8')
} else
if (a === 36 && sign === "-" && b === 45 ) {
  console.log('36 - 45 = -9')
} else
if (a === 36 && sign === "-" && b === 46 ) {
  console.log('36 - 46 = -10')
} else
if (a === 36 && sign === "-" && b === 47 ) {
  console.log('36 - 47 = -11')
} else
if (a === 36 && sign === "-" && b === 48 ) {
  console.log('36 - 48 = -12')
} else
if (a === 36 && sign === "-" && b === 49 ) {
  console.log('36 - 49 = -13')
} else
if (a === 36 && sign === "-" && b === 50 ) {
  console.log('36 - 50 = -14')
} else
if (a === 37 && sign === "-" && b === 1 ) {
  console.log('37 - 1 = 36')
} else
if (a === 37 && sign === "-" && b === 2 ) {
  console.log('37 - 2 = 35')
} else
if (a === 37 && sign === "-" && b === 3 ) {
  console.log('37 - 3 = 34')
} else
if (a === 37 && sign === "-" && b === 4 ) {
  console.log('37 - 4 = 33')
} else
if (a === 37 && sign === "-" && b === 5 ) {
  console.log('37 - 5 = 32')
} else
if (a === 37 && sign === "-" && b === 6 ) {
  console.log('37 - 6 = 31')
} else
if (a === 37 && sign === "-" && b === 7 ) {
  console.log('37 - 7 = 30')
} else
if (a === 37 && sign === "-" && b === 8 ) {
  console.log('37 - 8 = 29')
} else
if (a === 37 && sign === "-" && b === 9 ) {
  console.log('37 - 9 = 28')
} else
if (a === 37 && sign === "-" && b === 10 ) {
  console.log('37 - 10 = 27')
} else
if (a === 37 && sign === "-" && b === 11 ) {
  console.log('37 - 11 = 26')
} else
if (a === 37 && sign === "-" && b === 12 ) {
  console.log('37 - 12 = 25')
} else
if (a === 37 && sign === "-" && b === 13 ) {
  console.log('37 - 13 = 24')
} else
if (a === 37 && sign === "-" && b === 14 ) {
  console.log('37 - 14 = 23')
} else
if (a === 37 && sign === "-" && b === 15 ) {
  console.log('37 - 15 = 22')
} else
if (a === 37 && sign === "-" && b === 16 ) {
  console.log('37 - 16 = 21')
} else
if (a === 37 && sign === "-" && b === 17 ) {
  console.log('37 - 17 = 20')
} else
if (a === 37 && sign === "-" && b === 18 ) {
  console.log('37 - 18 = 19')
} else
if (a === 37 && sign === "-" && b === 19 ) {
  console.log('37 - 19 = 18')
} else
if (a === 37 && sign === "-" && b === 20 ) {
  console.log('37 - 20 = 17')
} else
if (a === 37 && sign === "-" && b === 21 ) {
  console.log('37 - 21 = 16')
} else
if (a === 37 && sign === "-" && b === 22 ) {
  console.log('37 - 22 = 15')
} else
if (a === 37 && sign === "-" && b === 23 ) {
  console.log('37 - 23 = 14')
} else
if (a === 37 && sign === "-" && b === 24 ) {
  console.log('37 - 24 = 13')
} else
if (a === 37 && sign === "-" && b === 25 ) {
  console.log('37 - 25 = 12')
} else
if (a === 37 && sign === "-" && b === 26 ) {
  console.log('37 - 26 = 11')
} else
if (a === 37 && sign === "-" && b === 27 ) {
  console.log('37 - 27 = 10')
} else
if (a === 37 && sign === "-" && b === 28 ) {
  console.log('37 - 28 = 9')
} else
if (a === 37 && sign === "-" && b === 29 ) {
  console.log('37 - 29 = 8')
} else
if (a === 37 && sign === "-" && b === 30 ) {
  console.log('37 - 30 = 7')
} else
if (a === 37 && sign === "-" && b === 31 ) {
  console.log('37 - 31 = 6')
} else
if (a === 37 && sign === "-" && b === 32 ) {
  console.log('37 - 32 = 5')
} else
if (a === 37 && sign === "-" && b === 33 ) {
  console.log('37 - 33 = 4')
} else
if (a === 37 && sign === "-" && b === 34 ) {
  console.log('37 - 34 = 3')
} else
if (a === 37 && sign === "-" && b === 35 ) {
  console.log('37 - 35 = 2')
} else
if (a === 37 && sign === "-" && b === 36 ) {
  console.log('37 - 36 = 1')
} else
if (a === 37 && sign === "-" && b === 37 ) {
  console.log('37 - 37 = 0')
} else
if (a === 37 && sign === "-" && b === 38 ) {
  console.log('37 - 38 = -1')
} else
if (a === 37 && sign === "-" && b === 39 ) {
  console.log('37 - 39 = -2')
} else
if (a === 37 && sign === "-" && b === 40 ) {
  console.log('37 - 40 = -3')
} else
if (a === 37 && sign === "-" && b === 41 ) {
  console.log('37 - 41 = -4')
} else
if (a === 37 && sign === "-" && b === 42 ) {
  console.log('37 - 42 = -5')
} else
if (a === 37 && sign === "-" && b === 43 ) {
  console.log('37 - 43 = -6')
} else
if (a === 37 && sign === "-" && b === 44 ) {
  console.log('37 - 44 = -7')
} else
if (a === 37 && sign === "-" && b === 45 ) {
  console.log('37 - 45 = -8')
} else
if (a === 37 && sign === "-" && b === 46 ) {
  console.log('37 - 46 = -9')
} else
if (a === 37 && sign === "-" && b === 47 ) {
  console.log('37 - 47 = -10')
} else
if (a === 37 && sign === "-" && b === 48 ) {
  console.log('37 - 48 = -11')
} else
if (a === 37 && sign === "-" && b === 49 ) {
  console.log('37 - 49 = -12')
} else
if (a === 37 && sign === "-" && b === 50 ) {
  console.log('37 - 50 = -13')
} else
if (a === 38 && sign === "-" && b === 1 ) {
  console.log('38 - 1 = 37')
} else
if (a === 38 && sign === "-" && b === 2 ) {
  console.log('38 - 2 = 36')
} else
if (a === 38 && sign === "-" && b === 3 ) {
  console.log('38 - 3 = 35')
} else
if (a === 38 && sign === "-" && b === 4 ) {
  console.log('38 - 4 = 34')
} else
if (a === 38 && sign === "-" && b === 5 ) {
  console.log('38 - 5 = 33')
} else
if (a === 38 && sign === "-" && b === 6 ) {
  console.log('38 - 6 = 32')
} else
if (a === 38 && sign === "-" && b === 7 ) {
  console.log('38 - 7 = 31')
} else
if (a === 38 && sign === "-" && b === 8 ) {
  console.log('38 - 8 = 30')
} else
if (a === 38 && sign === "-" && b === 9 ) {
  console.log('38 - 9 = 29')
} else
if (a === 38 && sign === "-" && b === 10 ) {
  console.log('38 - 10 = 28')
} else
if (a === 38 && sign === "-" && b === 11 ) {
  console.log('38 - 11 = 27')
} else
if (a === 38 && sign === "-" && b === 12 ) {
  console.log('38 - 12 = 26')
} else
if (a === 38 && sign === "-" && b === 13 ) {
  console.log('38 - 13 = 25')
} else
if (a === 38 && sign === "-" && b === 14 ) {
  console.log('38 - 14 = 24')
} else
if (a === 38 && sign === "-" && b === 15 ) {
  console.log('38 - 15 = 23')
} else
if (a === 38 && sign === "-" && b === 16 ) {
  console.log('38 - 16 = 22')
} else
if (a === 38 && sign === "-" && b === 17 ) {
  console.log('38 - 17 = 21')
} else
if (a === 38 && sign === "-" && b === 18 ) {
  console.log('38 - 18 = 20')
} else
if (a === 38 && sign === "-" && b === 19 ) {
  console.log('38 - 19 = 19')
} else
if (a === 38 && sign === "-" && b === 20 ) {
  console.log('38 - 20 = 18')
} else
if (a === 38 && sign === "-" && b === 21 ) {
  console.log('38 - 21 = 17')
} else
if (a === 38 && sign === "-" && b === 22 ) {
  console.log('38 - 22 = 16')
} else
if (a === 38 && sign === "-" && b === 23 ) {
  console.log('38 - 23 = 15')
} else
if (a === 38 && sign === "-" && b === 24 ) {
  console.log('38 - 24 = 14')
} else
if (a === 38 && sign === "-" && b === 25 ) {
  console.log('38 - 25 = 13')
} else
if (a === 38 && sign === "-" && b === 26 ) {
  console.log('38 - 26 = 12')
} else
if (a === 38 && sign === "-" && b === 27 ) {
  console.log('38 - 27 = 11')
} else
if (a === 38 && sign === "-" && b === 28 ) {
  console.log('38 - 28 = 10')
} else
if (a === 38 && sign === "-" && b === 29 ) {
  console.log('38 - 29 = 9')
} else
if (a === 38 && sign === "-" && b === 30 ) {
  console.log('38 - 30 = 8')
} else
if (a === 38 && sign === "-" && b === 31 ) {
  console.log('38 - 31 = 7')
} else
if (a === 38 && sign === "-" && b === 32 ) {
  console.log('38 - 32 = 6')
} else
if (a === 38 && sign === "-" && b === 33 ) {
  console.log('38 - 33 = 5')
} else
if (a === 38 && sign === "-" && b === 34 ) {
  console.log('38 - 34 = 4')
} else
if (a === 38 && sign === "-" && b === 35 ) {
  console.log('38 - 35 = 3')
} else
if (a === 38 && sign === "-" && b === 36 ) {
  console.log('38 - 36 = 2')
} else
if (a === 38 && sign === "-" && b === 37 ) {
  console.log('38 - 37 = 1')
} else
if (a === 38 && sign === "-" && b === 38 ) {
  console.log('38 - 38 = 0')
} else
if (a === 38 && sign === "-" && b === 39 ) {
  console.log('38 - 39 = -1')
} else
if (a === 38 && sign === "-" && b === 40 ) {
  console.log('38 - 40 = -2')
} else
if (a === 38 && sign === "-" && b === 41 ) {
  console.log('38 - 41 = -3')
} else
if (a === 38 && sign === "-" && b === 42 ) {
  console.log('38 - 42 = -4')
} else
if (a === 38 && sign === "-" && b === 43 ) {
  console.log('38 - 43 = -5')
} else
if (a === 38 && sign === "-" && b === 44 ) {
  console.log('38 - 44 = -6')
} else
if (a === 38 && sign === "-" && b === 45 ) {
  console.log('38 - 45 = -7')
} else
if (a === 38 && sign === "-" && b === 46 ) {
  console.log('38 - 46 = -8')
} else
if (a === 38 && sign === "-" && b === 47 ) {
  console.log('38 - 47 = -9')
} else
if (a === 38 && sign === "-" && b === 48 ) {
  console.log('38 - 48 = -10')
} else
if (a === 38 && sign === "-" && b === 49 ) {
  console.log('38 - 49 = -11')
} else
if (a === 38 && sign === "-" && b === 50 ) {
  console.log('38 - 50 = -12')
} else
if (a === 39 && sign === "-" && b === 1 ) {
  console.log('39 - 1 = 38')
} else
if (a === 39 && sign === "-" && b === 2 ) {
  console.log('39 - 2 = 37')
} else
if (a === 39 && sign === "-" && b === 3 ) {
  console.log('39 - 3 = 36')
} else
if (a === 39 && sign === "-" && b === 4 ) {
  console.log('39 - 4 = 35')
} else
if (a === 39 && sign === "-" && b === 5 ) {
  console.log('39 - 5 = 34')
} else
if (a === 39 && sign === "-" && b === 6 ) {
  console.log('39 - 6 = 33')
} else
if (a === 39 && sign === "-" && b === 7 ) {
  console.log('39 - 7 = 32')
} else
if (a === 39 && sign === "-" && b === 8 ) {
  console.log('39 - 8 = 31')
} else
if (a === 39 && sign === "-" && b === 9 ) {
  console.log('39 - 9 = 30')
} else
if (a === 39 && sign === "-" && b === 10 ) {
  console.log('39 - 10 = 29')
} else
if (a === 39 && sign === "-" && b === 11 ) {
  console.log('39 - 11 = 28')
} else
if (a === 39 && sign === "-" && b === 12 ) {
  console.log('39 - 12 = 27')
} else
if (a === 39 && sign === "-" && b === 13 ) {
  console.log('39 - 13 = 26')
} else
if (a === 39 && sign === "-" && b === 14 ) {
  console.log('39 - 14 = 25')
} else
if (a === 39 && sign === "-" && b === 15 ) {
  console.log('39 - 15 = 24')
} else
if (a === 39 && sign === "-" && b === 16 ) {
  console.log('39 - 16 = 23')
} else
if (a === 39 && sign === "-" && b === 17 ) {
  console.log('39 - 17 = 22')
} else
if (a === 39 && sign === "-" && b === 18 ) {
  console.log('39 - 18 = 21')
} else
if (a === 39 && sign === "-" && b === 19 ) {
  console.log('39 - 19 = 20')
} else
if (a === 39 && sign === "-" && b === 20 ) {
  console.log('39 - 20 = 19')
} else
if (a === 39 && sign === "-" && b === 21 ) {
  console.log('39 - 21 = 18')
} else
if (a === 39 && sign === "-" && b === 22 ) {
  console.log('39 - 22 = 17')
} else
if (a === 39 && sign === "-" && b === 23 ) {
  console.log('39 - 23 = 16')
} else
if (a === 39 && sign === "-" && b === 24 ) {
  console.log('39 - 24 = 15')
} else
if (a === 39 && sign === "-" && b === 25 ) {
  console.log('39 - 25 = 14')
} else
if (a === 39 && sign === "-" && b === 26 ) {
  console.log('39 - 26 = 13')
} else
if (a === 39 && sign === "-" && b === 27 ) {
  console.log('39 - 27 = 12')
} else
if (a === 39 && sign === "-" && b === 28 ) {
  console.log('39 - 28 = 11')
} else
if (a === 39 && sign === "-" && b === 29 ) {
  console.log('39 - 29 = 10')
} else
if (a === 39 && sign === "-" && b === 30 ) {
  console.log('39 - 30 = 9')
} else
if (a === 39 && sign === "-" && b === 31 ) {
  console.log('39 - 31 = 8')
} else
if (a === 39 && sign === "-" && b === 32 ) {
  console.log('39 - 32 = 7')
} else
if (a === 39 && sign === "-" && b === 33 ) {
  console.log('39 - 33 = 6')
} else
if (a === 39 && sign === "-" && b === 34 ) {
  console.log('39 - 34 = 5')
} else
if (a === 39 && sign === "-" && b === 35 ) {
  console.log('39 - 35 = 4')
} else
if (a === 39 && sign === "-" && b === 36 ) {
  console.log('39 - 36 = 3')
} else
if (a === 39 && sign === "-" && b === 37 ) {
  console.log('39 - 37 = 2')
} else
if (a === 39 && sign === "-" && b === 38 ) {
  console.log('39 - 38 = 1')
} else
if (a === 39 && sign === "-" && b === 39 ) {
  console.log('39 - 39 = 0')
} else
if (a === 39 && sign === "-" && b === 40 ) {
  console.log('39 - 40 = -1')
} else
if (a === 39 && sign === "-" && b === 41 ) {
  console.log('39 - 41 = -2')
} else
if (a === 39 && sign === "-" && b === 42 ) {
  console.log('39 - 42 = -3')
} else
if (a === 39 && sign === "-" && b === 43 ) {
  console.log('39 - 43 = -4')
} else
if (a === 39 && sign === "-" && b === 44 ) {
  console.log('39 - 44 = -5')
} else
if (a === 39 && sign === "-" && b === 45 ) {
  console.log('39 - 45 = -6')
} else
if (a === 39 && sign === "-" && b === 46 ) {
  console.log('39 - 46 = -7')
} else
if (a === 39 && sign === "-" && b === 47 ) {
  console.log('39 - 47 = -8')
} else
if (a === 39 && sign === "-" && b === 48 ) {
  console.log('39 - 48 = -9')
} else
if (a === 39 && sign === "-" && b === 49 ) {
  console.log('39 - 49 = -10')
} else
if (a === 39 && sign === "-" && b === 50 ) {
  console.log('39 - 50 = -11')
} else
if (a === 40 && sign === "-" && b === 1 ) {
  console.log('40 - 1 = 39')
} else
if (a === 40 && sign === "-" && b === 2 ) {
  console.log('40 - 2 = 38')
} else
if (a === 40 && sign === "-" && b === 3 ) {
  console.log('40 - 3 = 37')
} else
if (a === 40 && sign === "-" && b === 4 ) {
  console.log('40 - 4 = 36')
} else
if (a === 40 && sign === "-" && b === 5 ) {
  console.log('40 - 5 = 35')
} else
if (a === 40 && sign === "-" && b === 6 ) {
  console.log('40 - 6 = 34')
} else
if (a === 40 && sign === "-" && b === 7 ) {
  console.log('40 - 7 = 33')
} else
if (a === 40 && sign === "-" && b === 8 ) {
  console.log('40 - 8 = 32')
} else
if (a === 40 && sign === "-" && b === 9 ) {
  console.log('40 - 9 = 31')
} else
if (a === 40 && sign === "-" && b === 10 ) {
  console.log('40 - 10 = 30')
} else
if (a === 40 && sign === "-" && b === 11 ) {
  console.log('40 - 11 = 29')
} else
if (a === 40 && sign === "-" && b === 12 ) {
  console.log('40 - 12 = 28')
} else
if (a === 40 && sign === "-" && b === 13 ) {
  console.log('40 - 13 = 27')
} else
if (a === 40 && sign === "-" && b === 14 ) {
  console.log('40 - 14 = 26')
} else
if (a === 40 && sign === "-" && b === 15 ) {
  console.log('40 - 15 = 25')
} else
if (a === 40 && sign === "-" && b === 16 ) {
  console.log('40 - 16 = 24')
} else
if (a === 40 && sign === "-" && b === 17 ) {
  console.log('40 - 17 = 23')
} else
if (a === 40 && sign === "-" && b === 18 ) {
  console.log('40 - 18 = 22')
} else
if (a === 40 && sign === "-" && b === 19 ) {
  console.log('40 - 19 = 21')
} else
if (a === 40 && sign === "-" && b === 20 ) {
  console.log('40 - 20 = 20')
} else
if (a === 40 && sign === "-" && b === 21 ) {
  console.log('40 - 21 = 19')
} else
if (a === 40 && sign === "-" && b === 22 ) {
  console.log('40 - 22 = 18')
} else
if (a === 40 && sign === "-" && b === 23 ) {
  console.log('40 - 23 = 17')
} else
if (a === 40 && sign === "-" && b === 24 ) {
  console.log('40 - 24 = 16')
} else
if (a === 40 && sign === "-" && b === 25 ) {
  console.log('40 - 25 = 15')
} else
if (a === 40 && sign === "-" && b === 26 ) {
  console.log('40 - 26 = 14')
} else
if (a === 40 && sign === "-" && b === 27 ) {
  console.log('40 - 27 = 13')
} else
if (a === 40 && sign === "-" && b === 28 ) {
  console.log('40 - 28 = 12')
} else
if (a === 40 && sign === "-" && b === 29 ) {
  console.log('40 - 29 = 11')
} else
if (a === 40 && sign === "-" && b === 30 ) {
  console.log('40 - 30 = 10')
} else
if (a === 40 && sign === "-" && b === 31 ) {
  console.log('40 - 31 = 9')
} else
if (a === 40 && sign === "-" && b === 32 ) {
  console.log('40 - 32 = 8')
} else
if (a === 40 && sign === "-" && b === 33 ) {
  console.log('40 - 33 = 7')
} else
if (a === 40 && sign === "-" && b === 34 ) {
  console.log('40 - 34 = 6')
} else
if (a === 40 && sign === "-" && b === 35 ) {
  console.log('40 - 35 = 5')
} else
if (a === 40 && sign === "-" && b === 36 ) {
  console.log('40 - 36 = 4')
} else
if (a === 40 && sign === "-" && b === 37 ) {
  console.log('40 - 37 = 3')
} else
if (a === 40 && sign === "-" && b === 38 ) {
  console.log('40 - 38 = 2')
} else
if (a === 40 && sign === "-" && b === 39 ) {
  console.log('40 - 39 = 1')
} else
if (a === 40 && sign === "-" && b === 40 ) {
  console.log('40 - 40 = 0')
} else
if (a === 40 && sign === "-" && b === 41 ) {
  console.log('40 - 41 = -1')
} else
if (a === 40 && sign === "-" && b === 42 ) {
  console.log('40 - 42 = -2')
} else
if (a === 40 && sign === "-" && b === 43 ) {
  console.log('40 - 43 = -3')
} else
if (a === 40 && sign === "-" && b === 44 ) {
  console.log('40 - 44 = -4')
} else
if (a === 40 && sign === "-" && b === 45 ) {
  console.log('40 - 45 = -5')
} else
if (a === 40 && sign === "-" && b === 46 ) {
  console.log('40 - 46 = -6')
} else
if (a === 40 && sign === "-" && b === 47 ) {
  console.log('40 - 47 = -7')
} else
if (a === 40 && sign === "-" && b === 48 ) {
  console.log('40 - 48 = -8')
} else
if (a === 40 && sign === "-" && b === 49 ) {
  console.log('40 - 49 = -9')
} else
if (a === 40 && sign === "-" && b === 50 ) {
  console.log('40 - 50 = -10')
} else
if (a === 41 && sign === "-" && b === 1 ) {
  console.log('41 - 1 = 40')
} else
if (a === 41 && sign === "-" && b === 2 ) {
  console.log('41 - 2 = 39')
} else
if (a === 41 && sign === "-" && b === 3 ) {
  console.log('41 - 3 = 38')
} else
if (a === 41 && sign === "-" && b === 4 ) {
  console.log('41 - 4 = 37')
} else
if (a === 41 && sign === "-" && b === 5 ) {
  console.log('41 - 5 = 36')
} else
if (a === 41 && sign === "-" && b === 6 ) {
  console.log('41 - 6 = 35')
} else
if (a === 41 && sign === "-" && b === 7 ) {
  console.log('41 - 7 = 34')
} else
if (a === 41 && sign === "-" && b === 8 ) {
  console.log('41 - 8 = 33')
} else
if (a === 41 && sign === "-" && b === 9 ) {
  console.log('41 - 9 = 32')
} else
if (a === 41 && sign === "-" && b === 10 ) {
  console.log('41 - 10 = 31')
} else
if (a === 41 && sign === "-" && b === 11 ) {
  console.log('41 - 11 = 30')
} else
if (a === 41 && sign === "-" && b === 12 ) {
  console.log('41 - 12 = 29')
} else
if (a === 41 && sign === "-" && b === 13 ) {
  console.log('41 - 13 = 28')
} else
if (a === 41 && sign === "-" && b === 14 ) {
  console.log('41 - 14 = 27')
} else
if (a === 41 && sign === "-" && b === 15 ) {
  console.log('41 - 15 = 26')
} else
if (a === 41 && sign === "-" && b === 16 ) {
  console.log('41 - 16 = 25')
} else
if (a === 41 && sign === "-" && b === 17 ) {
  console.log('41 - 17 = 24')
} else
if (a === 41 && sign === "-" && b === 18 ) {
  console.log('41 - 18 = 23')
} else
if (a === 41 && sign === "-" && b === 19 ) {
  console.log('41 - 19 = 22')
} else
if (a === 41 && sign === "-" && b === 20 ) {
  console.log('41 - 20 = 21')
} else
if (a === 41 && sign === "-" && b === 21 ) {
  console.log('41 - 21 = 20')
} else
if (a === 41 && sign === "-" && b === 22 ) {
  console.log('41 - 22 = 19')
} else
if (a === 41 && sign === "-" && b === 23 ) {
  console.log('41 - 23 = 18')
} else
if (a === 41 && sign === "-" && b === 24 ) {
  console.log('41 - 24 = 17')
} else
if (a === 41 && sign === "-" && b === 25 ) {
  console.log('41 - 25 = 16')
} else
if (a === 41 && sign === "-" && b === 26 ) {
  console.log('41 - 26 = 15')
} else
if (a === 41 && sign === "-" && b === 27 ) {
  console.log('41 - 27 = 14')
} else
if (a === 41 && sign === "-" && b === 28 ) {
  console.log('41 - 28 = 13')
} else
if (a === 41 && sign === "-" && b === 29 ) {
  console.log('41 - 29 = 12')
} else
if (a === 41 && sign === "-" && b === 30 ) {
  console.log('41 - 30 = 11')
} else
if (a === 41 && sign === "-" && b === 31 ) {
  console.log('41 - 31 = 10')
} else
if (a === 41 && sign === "-" && b === 32 ) {
  console.log('41 - 32 = 9')
} else
if (a === 41 && sign === "-" && b === 33 ) {
  console.log('41 - 33 = 8')
} else
if (a === 41 && sign === "-" && b === 34 ) {
  console.log('41 - 34 = 7')
} else
if (a === 41 && sign === "-" && b === 35 ) {
  console.log('41 - 35 = 6')
} else
if (a === 41 && sign === "-" && b === 36 ) {
  console.log('41 - 36 = 5')
} else
if (a === 41 && sign === "-" && b === 37 ) {
  console.log('41 - 37 = 4')
} else
if (a === 41 && sign === "-" && b === 38 ) {
  console.log('41 - 38 = 3')
} else
if (a === 41 && sign === "-" && b === 39 ) {
  console.log('41 - 39 = 2')
} else
if (a === 41 && sign === "-" && b === 40 ) {
  console.log('41 - 40 = 1')
} else
if (a === 41 && sign === "-" && b === 41 ) {
  console.log('41 - 41 = 0')
} else
if (a === 41 && sign === "-" && b === 42 ) {
  console.log('41 - 42 = -1')
} else
if (a === 41 && sign === "-" && b === 43 ) {
  console.log('41 - 43 = -2')
} else
if (a === 41 && sign === "-" && b === 44 ) {
  console.log('41 - 44 = -3')
} else
if (a === 41 && sign === "-" && b === 45 ) {
  console.log('41 - 45 = -4')
} else
if (a === 41 && sign === "-" && b === 46 ) {
  console.log('41 - 46 = -5')
} else
if (a === 41 && sign === "-" && b === 47 ) {
  console.log('41 - 47 = -6')
} else
if (a === 41 && sign === "-" && b === 48 ) {
  console.log('41 - 48 = -7')
} else
if (a === 41 && sign === "-" && b === 49 ) {
  console.log('41 - 49 = -8')
} else
if (a === 41 && sign === "-" && b === 50 ) {
  console.log('41 - 50 = -9')
} else
if (a === 42 && sign === "-" && b === 1 ) {
  console.log('42 - 1 = 41')
} else
if (a === 42 && sign === "-" && b === 2 ) {
  console.log('42 - 2 = 40')
} else
if (a === 42 && sign === "-" && b === 3 ) {
  console.log('42 - 3 = 39')
} else
if (a === 42 && sign === "-" && b === 4 ) {
  console.log('42 - 4 = 38')
} else
if (a === 42 && sign === "-" && b === 5 ) {
  console.log('42 - 5 = 37')
} else
if (a === 42 && sign === "-" && b === 6 ) {
  console.log('42 - 6 = 36')
} else
if (a === 42 && sign === "-" && b === 7 ) {
  console.log('42 - 7 = 35')
} else
if (a === 42 && sign === "-" && b === 8 ) {
  console.log('42 - 8 = 34')
} else
if (a === 42 && sign === "-" && b === 9 ) {
  console.log('42 - 9 = 33')
} else
if (a === 42 && sign === "-" && b === 10 ) {
  console.log('42 - 10 = 32')
} else
if (a === 42 && sign === "-" && b === 11 ) {
  console.log('42 - 11 = 31')
} else
if (a === 42 && sign === "-" && b === 12 ) {
  console.log('42 - 12 = 30')
} else
if (a === 42 && sign === "-" && b === 13 ) {
  console.log('42 - 13 = 29')
} else
if (a === 42 && sign === "-" && b === 14 ) {
  console.log('42 - 14 = 28')
} else
if (a === 42 && sign === "-" && b === 15 ) {
  console.log('42 - 15 = 27')
} else
if (a === 42 && sign === "-" && b === 16 ) {
  console.log('42 - 16 = 26')
} else
if (a === 42 && sign === "-" && b === 17 ) {
  console.log('42 - 17 = 25')
} else
if (a === 42 && sign === "-" && b === 18 ) {
  console.log('42 - 18 = 24')
} else
if (a === 42 && sign === "-" && b === 19 ) {
  console.log('42 - 19 = 23')
} else
if (a === 42 && sign === "-" && b === 20 ) {
  console.log('42 - 20 = 22')
} else
if (a === 42 && sign === "-" && b === 21 ) {
  console.log('42 - 21 = 21')
} else
if (a === 42 && sign === "-" && b === 22 ) {
  console.log('42 - 22 = 20')
} else
if (a === 42 && sign === "-" && b === 23 ) {
  console.log('42 - 23 = 19')
} else
if (a === 42 && sign === "-" && b === 24 ) {
  console.log('42 - 24 = 18')
} else
if (a === 42 && sign === "-" && b === 25 ) {
  console.log('42 - 25 = 17')
} else
if (a === 42 && sign === "-" && b === 26 ) {
  console.log('42 - 26 = 16')
} else
if (a === 42 && sign === "-" && b === 27 ) {
  console.log('42 - 27 = 15')
} else
if (a === 42 && sign === "-" && b === 28 ) {
  console.log('42 - 28 = 14')
} else
if (a === 42 && sign === "-" && b === 29 ) {
  console.log('42 - 29 = 13')
} else
if (a === 42 && sign === "-" && b === 30 ) {
  console.log('42 - 30 = 12')
} else
if (a === 42 && sign === "-" && b === 31 ) {
  console.log('42 - 31 = 11')
} else
if (a === 42 && sign === "-" && b === 32 ) {
  console.log('42 - 32 = 10')
} else
if (a === 42 && sign === "-" && b === 33 ) {
  console.log('42 - 33 = 9')
} else
if (a === 42 && sign === "-" && b === 34 ) {
  console.log('42 - 34 = 8')
} else
if (a === 42 && sign === "-" && b === 35 ) {
  console.log('42 - 35 = 7')
} else
if (a === 42 && sign === "-" && b === 36 ) {
  console.log('42 - 36 = 6')
} else
if (a === 42 && sign === "-" && b === 37 ) {
  console.log('42 - 37 = 5')
} else
if (a === 42 && sign === "-" && b === 38 ) {
  console.log('42 - 38 = 4')
} else
if (a === 42 && sign === "-" && b === 39 ) {
  console.log('42 - 39 = 3')
} else
if (a === 42 && sign === "-" && b === 40 ) {
  console.log('42 - 40 = 2')
} else
if (a === 42 && sign === "-" && b === 41 ) {
  console.log('42 - 41 = 1')
} else
if (a === 42 && sign === "-" && b === 42 ) {
  console.log('42 - 42 = 0')
} else
if (a === 42 && sign === "-" && b === 43 ) {
  console.log('42 - 43 = -1')
} else
if (a === 42 && sign === "-" && b === 44 ) {
  console.log('42 - 44 = -2')
} else
if (a === 42 && sign === "-" && b === 45 ) {
  console.log('42 - 45 = -3')
} else
if (a === 42 && sign === "-" && b === 46 ) {
  console.log('42 - 46 = -4')
} else
if (a === 42 && sign === "-" && b === 47 ) {
  console.log('42 - 47 = -5')
} else
if (a === 42 && sign === "-" && b === 48 ) {
  console.log('42 - 48 = -6')
} else
if (a === 42 && sign === "-" && b === 49 ) {
  console.log('42 - 49 = -7')
} else
if (a === 42 && sign === "-" && b === 50 ) {
  console.log('42 - 50 = -8')
} else
if (a === 43 && sign === "-" && b === 1 ) {
  console.log('43 - 1 = 42')
} else
if (a === 43 && sign === "-" && b === 2 ) {
  console.log('43 - 2 = 41')
} else
if (a === 43 && sign === "-" && b === 3 ) {
  console.log('43 - 3 = 40')
} else
if (a === 43 && sign === "-" && b === 4 ) {
  console.log('43 - 4 = 39')
} else
if (a === 43 && sign === "-" && b === 5 ) {
  console.log('43 - 5 = 38')
} else
if (a === 43 && sign === "-" && b === 6 ) {
  console.log('43 - 6 = 37')
} else
if (a === 43 && sign === "-" && b === 7 ) {
  console.log('43 - 7 = 36')
} else
if (a === 43 && sign === "-" && b === 8 ) {
  console.log('43 - 8 = 35')
} else
if (a === 43 && sign === "-" && b === 9 ) {
  console.log('43 - 9 = 34')
} else
if (a === 43 && sign === "-" && b === 10 ) {
  console.log('43 - 10 = 33')
} else
if (a === 43 && sign === "-" && b === 11 ) {
  console.log('43 - 11 = 32')
} else
if (a === 43 && sign === "-" && b === 12 ) {
  console.log('43 - 12 = 31')
} else
if (a === 43 && sign === "-" && b === 13 ) {
  console.log('43 - 13 = 30')
} else
if (a === 43 && sign === "-" && b === 14 ) {
  console.log('43 - 14 = 29')
} else
if (a === 43 && sign === "-" && b === 15 ) {
  console.log('43 - 15 = 28')
} else
if (a === 43 && sign === "-" && b === 16 ) {
  console.log('43 - 16 = 27')
} else
if (a === 43 && sign === "-" && b === 17 ) {
  console.log('43 - 17 = 26')
} else
if (a === 43 && sign === "-" && b === 18 ) {
  console.log('43 - 18 = 25')
} else
if (a === 43 && sign === "-" && b === 19 ) {
  console.log('43 - 19 = 24')
} else
if (a === 43 && sign === "-" && b === 20 ) {
  console.log('43 - 20 = 23')
} else
if (a === 43 && sign === "-" && b === 21 ) {
  console.log('43 - 21 = 22')
} else
if (a === 43 && sign === "-" && b === 22 ) {
  console.log('43 - 22 = 21')
} else
if (a === 43 && sign === "-" && b === 23 ) {
  console.log('43 - 23 = 20')
} else
if (a === 43 && sign === "-" && b === 24 ) {
  console.log('43 - 24 = 19')
} else
if (a === 43 && sign === "-" && b === 25 ) {
  console.log('43 - 25 = 18')
} else
if (a === 43 && sign === "-" && b === 26 ) {
  console.log('43 - 26 = 17')
} else
if (a === 43 && sign === "-" && b === 27 ) {
  console.log('43 - 27 = 16')
} else
if (a === 43 && sign === "-" && b === 28 ) {
  console.log('43 - 28 = 15')
} else
if (a === 43 && sign === "-" && b === 29 ) {
  console.log('43 - 29 = 14')
} else
if (a === 43 && sign === "-" && b === 30 ) {
  console.log('43 - 30 = 13')
} else
if (a === 43 && sign === "-" && b === 31 ) {
  console.log('43 - 31 = 12')
} else
if (a === 43 && sign === "-" && b === 32 ) {
  console.log('43 - 32 = 11')
} else
if (a === 43 && sign === "-" && b === 33 ) {
  console.log('43 - 33 = 10')
} else
if (a === 43 && sign === "-" && b === 34 ) {
  console.log('43 - 34 = 9')
} else
if (a === 43 && sign === "-" && b === 35 ) {
  console.log('43 - 35 = 8')
} else
if (a === 43 && sign === "-" && b === 36 ) {
  console.log('43 - 36 = 7')
} else
if (a === 43 && sign === "-" && b === 37 ) {
  console.log('43 - 37 = 6')
} else
if (a === 43 && sign === "-" && b === 38 ) {
  console.log('43 - 38 = 5')
} else
if (a === 43 && sign === "-" && b === 39 ) {
  console.log('43 - 39 = 4')
} else
if (a === 43 && sign === "-" && b === 40 ) {
  console.log('43 - 40 = 3')
} else
if (a === 43 && sign === "-" && b === 41 ) {
  console.log('43 - 41 = 2')
} else
if (a === 43 && sign === "-" && b === 42 ) {
  console.log('43 - 42 = 1')
} else
if (a === 43 && sign === "-" && b === 43 ) {
  console.log('43 - 43 = 0')
} else
if (a === 43 && sign === "-" && b === 44 ) {
  console.log('43 - 44 = -1')
} else
if (a === 43 && sign === "-" && b === 45 ) {
  console.log('43 - 45 = -2')
} else
if (a === 43 && sign === "-" && b === 46 ) {
  console.log('43 - 46 = -3')
} else
if (a === 43 && sign === "-" && b === 47 ) {
  console.log('43 - 47 = -4')
} else
if (a === 43 && sign === "-" && b === 48 ) {
  console.log('43 - 48 = -5')
} else
if (a === 43 && sign === "-" && b === 49 ) {
  console.log('43 - 49 = -6')
} else
if (a === 43 && sign === "-" && b === 50 ) {
  console.log('43 - 50 = -7')
} else
if (a === 44 && sign === "-" && b === 1 ) {
  console.log('44 - 1 = 43')
} else
if (a === 44 && sign === "-" && b === 2 ) {
  console.log('44 - 2 = 42')
} else
if (a === 44 && sign === "-" && b === 3 ) {
  console.log('44 - 3 = 41')
} else
if (a === 44 && sign === "-" && b === 4 ) {
  console.log('44 - 4 = 40')
} else
if (a === 44 && sign === "-" && b === 5 ) {
  console.log('44 - 5 = 39')
} else
if (a === 44 && sign === "-" && b === 6 ) {
  console.log('44 - 6 = 38')
} else
if (a === 44 && sign === "-" && b === 7 ) {
  console.log('44 - 7 = 37')
} else
if (a === 44 && sign === "-" && b === 8 ) {
  console.log('44 - 8 = 36')
} else
if (a === 44 && sign === "-" && b === 9 ) {
  console.log('44 - 9 = 35')
} else
if (a === 44 && sign === "-" && b === 10 ) {
  console.log('44 - 10 = 34')
} else
if (a === 44 && sign === "-" && b === 11 ) {
  console.log('44 - 11 = 33')
} else
if (a === 44 && sign === "-" && b === 12 ) {
  console.log('44 - 12 = 32')
} else
if (a === 44 && sign === "-" && b === 13 ) {
  console.log('44 - 13 = 31')
} else
if (a === 44 && sign === "-" && b === 14 ) {
  console.log('44 - 14 = 30')
} else
if (a === 44 && sign === "-" && b === 15 ) {
  console.log('44 - 15 = 29')
} else
if (a === 44 && sign === "-" && b === 16 ) {
  console.log('44 - 16 = 28')
} else
if (a === 44 && sign === "-" && b === 17 ) {
  console.log('44 - 17 = 27')
} else
if (a === 44 && sign === "-" && b === 18 ) {
  console.log('44 - 18 = 26')
} else
if (a === 44 && sign === "-" && b === 19 ) {
  console.log('44 - 19 = 25')
} else
if (a === 44 && sign === "-" && b === 20 ) {
  console.log('44 - 20 = 24')
} else
if (a === 44 && sign === "-" && b === 21 ) {
  console.log('44 - 21 = 23')
} else
if (a === 44 && sign === "-" && b === 22 ) {
  console.log('44 - 22 = 22')
} else
if (a === 44 && sign === "-" && b === 23 ) {
  console.log('44 - 23 = 21')
} else
if (a === 44 && sign === "-" && b === 24 ) {
  console.log('44 - 24 = 20')
} else
if (a === 44 && sign === "-" && b === 25 ) {
  console.log('44 - 25 = 19')
} else
if (a === 44 && sign === "-" && b === 26 ) {
  console.log('44 - 26 = 18')
} else
if (a === 44 && sign === "-" && b === 27 ) {
  console.log('44 - 27 = 17')
} else
if (a === 44 && sign === "-" && b === 28 ) {
  console.log('44 - 28 = 16')
} else
if (a === 44 && sign === "-" && b === 29 ) {
  console.log('44 - 29 = 15')
} else
if (a === 44 && sign === "-" && b === 30 ) {
  console.log('44 - 30 = 14')
} else
if (a === 44 && sign === "-" && b === 31 ) {
  console.log('44 - 31 = 13')
} else
if (a === 44 && sign === "-" && b === 32 ) {
  console.log('44 - 32 = 12')
} else
if (a === 44 && sign === "-" && b === 33 ) {
  console.log('44 - 33 = 11')
} else
if (a === 44 && sign === "-" && b === 34 ) {
  console.log('44 - 34 = 10')
} else
if (a === 44 && sign === "-" && b === 35 ) {
  console.log('44 - 35 = 9')
} else
if (a === 44 && sign === "-" && b === 36 ) {
  console.log('44 - 36 = 8')
} else
if (a === 44 && sign === "-" && b === 37 ) {
  console.log('44 - 37 = 7')
} else
if (a === 44 && sign === "-" && b === 38 ) {
  console.log('44 - 38 = 6')
} else
if (a === 44 && sign === "-" && b === 39 ) {
  console.log('44 - 39 = 5')
} else
if (a === 44 && sign === "-" && b === 40 ) {
  console.log('44 - 40 = 4')
} else
if (a === 44 && sign === "-" && b === 41 ) {
  console.log('44 - 41 = 3')
} else
if (a === 44 && sign === "-" && b === 42 ) {
  console.log('44 - 42 = 2')
} else
if (a === 44 && sign === "-" && b === 43 ) {
  console.log('44 - 43 = 1')
} else
if (a === 44 && sign === "-" && b === 44 ) {
  console.log('44 - 44 = 0')
} else
if (a === 44 && sign === "-" && b === 45 ) {
  console.log('44 - 45 = -1')
} else
if (a === 44 && sign === "-" && b === 46 ) {
  console.log('44 - 46 = -2')
} else
if (a === 44 && sign === "-" && b === 47 ) {
  console.log('44 - 47 = -3')
} else
if (a === 44 && sign === "-" && b === 48 ) {
  console.log('44 - 48 = -4')
} else
if (a === 44 && sign === "-" && b === 49 ) {
  console.log('44 - 49 = -5')
} else
if (a === 44 && sign === "-" && b === 50 ) {
  console.log('44 - 50 = -6')
} else
if (a === 45 && sign === "-" && b === 1 ) {
  console.log('45 - 1 = 44')
} else
if (a === 45 && sign === "-" && b === 2 ) {
  console.log('45 - 2 = 43')
} else
if (a === 45 && sign === "-" && b === 3 ) {
  console.log('45 - 3 = 42')
} else
if (a === 45 && sign === "-" && b === 4 ) {
  console.log('45 - 4 = 41')
} else
if (a === 45 && sign === "-" && b === 5 ) {
  console.log('45 - 5 = 40')
} else
if (a === 45 && sign === "-" && b === 6 ) {
  console.log('45 - 6 = 39')
} else
if (a === 45 && sign === "-" && b === 7 ) {
  console.log('45 - 7 = 38')
} else
if (a === 45 && sign === "-" && b === 8 ) {
  console.log('45 - 8 = 37')
} else
if (a === 45 && sign === "-" && b === 9 ) {
  console.log('45 - 9 = 36')
} else
if (a === 45 && sign === "-" && b === 10 ) {
  console.log('45 - 10 = 35')
} else
if (a === 45 && sign === "-" && b === 11 ) {
  console.log('45 - 11 = 34')
} else
if (a === 45 && sign === "-" && b === 12 ) {
  console.log('45 - 12 = 33')
} else
if (a === 45 && sign === "-" && b === 13 ) {
  console.log('45 - 13 = 32')
} else
if (a === 45 && sign === "-" && b === 14 ) {
  console.log('45 - 14 = 31')
} else
if (a === 45 && sign === "-" && b === 15 ) {
  console.log('45 - 15 = 30')
} else
if (a === 45 && sign === "-" && b === 16 ) {
  console.log('45 - 16 = 29')
} else
if (a === 45 && sign === "-" && b === 17 ) {
  console.log('45 - 17 = 28')
} else
if (a === 45 && sign === "-" && b === 18 ) {
  console.log('45 - 18 = 27')
} else
if (a === 45 && sign === "-" && b === 19 ) {
  console.log('45 - 19 = 26')
} else
if (a === 45 && sign === "-" && b === 20 ) {
  console.log('45 - 20 = 25')
} else
if (a === 45 && sign === "-" && b === 21 ) {
  console.log('45 - 21 = 24')
} else
if (a === 45 && sign === "-" && b === 22 ) {
  console.log('45 - 22 = 23')
} else
if (a === 45 && sign === "-" && b === 23 ) {
  console.log('45 - 23 = 22')
} else
if (a === 45 && sign === "-" && b === 24 ) {
  console.log('45 - 24 = 21')
} else
if (a === 45 && sign === "-" && b === 25 ) {
  console.log('45 - 25 = 20')
} else
if (a === 45 && sign === "-" && b === 26 ) {
  console.log('45 - 26 = 19')
} else
if (a === 45 && sign === "-" && b === 27 ) {
  console.log('45 - 27 = 18')
} else
if (a === 45 && sign === "-" && b === 28 ) {
  console.log('45 - 28 = 17')
} else
if (a === 45 && sign === "-" && b === 29 ) {
  console.log('45 - 29 = 16')
} else
if (a === 45 && sign === "-" && b === 30 ) {
  console.log('45 - 30 = 15')
} else
if (a === 45 && sign === "-" && b === 31 ) {
  console.log('45 - 31 = 14')
} else
if (a === 45 && sign === "-" && b === 32 ) {
  console.log('45 - 32 = 13')
} else
if (a === 45 && sign === "-" && b === 33 ) {
  console.log('45 - 33 = 12')
} else
if (a === 45 && sign === "-" && b === 34 ) {
  console.log('45 - 34 = 11')
} else
if (a === 45 && sign === "-" && b === 35 ) {
  console.log('45 - 35 = 10')
} else
if (a === 45 && sign === "-" && b === 36 ) {
  console.log('45 - 36 = 9')
} else
if (a === 45 && sign === "-" && b === 37 ) {
  console.log('45 - 37 = 8')
} else
if (a === 45 && sign === "-" && b === 38 ) {
  console.log('45 - 38 = 7')
} else
if (a === 45 && sign === "-" && b === 39 ) {
  console.log('45 - 39 = 6')
} else
if (a === 45 && sign === "-" && b === 40 ) {
  console.log('45 - 40 = 5')
} else
if (a === 45 && sign === "-" && b === 41 ) {
  console.log('45 - 41 = 4')
} else
if (a === 45 && sign === "-" && b === 42 ) {
  console.log('45 - 42 = 3')
} else
if (a === 45 && sign === "-" && b === 43 ) {
  console.log('45 - 43 = 2')
} else
if (a === 45 && sign === "-" && b === 44 ) {
  console.log('45 - 44 = 1')
} else
if (a === 45 && sign === "-" && b === 45 ) {
  console.log('45 - 45 = 0')
} else
if (a === 45 && sign === "-" && b === 46 ) {
  console.log('45 - 46 = -1')
} else
if (a === 45 && sign === "-" && b === 47 ) {
  console.log('45 - 47 = -2')
} else
if (a === 45 && sign === "-" && b === 48 ) {
  console.log('45 - 48 = -3')
} else
if (a === 45 && sign === "-" && b === 49 ) {
  console.log('45 - 49 = -4')
} else
if (a === 45 && sign === "-" && b === 50 ) {
  console.log('45 - 50 = -5')
} else
if (a === 46 && sign === "-" && b === 1 ) {
  console.log('46 - 1 = 45')
} else
if (a === 46 && sign === "-" && b === 2 ) {
  console.log('46 - 2 = 44')
} else
if (a === 46 && sign === "-" && b === 3 ) {
  console.log('46 - 3 = 43')
} else
if (a === 46 && sign === "-" && b === 4 ) {
  console.log('46 - 4 = 42')
} else
if (a === 46 && sign === "-" && b === 5 ) {
  console.log('46 - 5 = 41')
} else
if (a === 46 && sign === "-" && b === 6 ) {
  console.log('46 - 6 = 40')
} else
if (a === 46 && sign === "-" && b === 7 ) {
  console.log('46 - 7 = 39')
} else
if (a === 46 && sign === "-" && b === 8 ) {
  console.log('46 - 8 = 38')
} else
if (a === 46 && sign === "-" && b === 9 ) {
  console.log('46 - 9 = 37')
} else
if (a === 46 && sign === "-" && b === 10 ) {
  console.log('46 - 10 = 36')
} else
if (a === 46 && sign === "-" && b === 11 ) {
  console.log('46 - 11 = 35')
} else
if (a === 46 && sign === "-" && b === 12 ) {
  console.log('46 - 12 = 34')
} else
if (a === 46 && sign === "-" && b === 13 ) {
  console.log('46 - 13 = 33')
} else
if (a === 46 && sign === "-" && b === 14 ) {
  console.log('46 - 14 = 32')
} else
if (a === 46 && sign === "-" && b === 15 ) {
  console.log('46 - 15 = 31')
} else
if (a === 46 && sign === "-" && b === 16 ) {
  console.log('46 - 16 = 30')
} else
if (a === 46 && sign === "-" && b === 17 ) {
  console.log('46 - 17 = 29')
} else
if (a === 46 && sign === "-" && b === 18 ) {
  console.log('46 - 18 = 28')
} else
if (a === 46 && sign === "-" && b === 19 ) {
  console.log('46 - 19 = 27')
} else
if (a === 46 && sign === "-" && b === 20 ) {
  console.log('46 - 20 = 26')
} else
if (a === 46 && sign === "-" && b === 21 ) {
  console.log('46 - 21 = 25')
} else
if (a === 46 && sign === "-" && b === 22 ) {
  console.log('46 - 22 = 24')
} else
if (a === 46 && sign === "-" && b === 23 ) {
  console.log('46 - 23 = 23')
} else
if (a === 46 && sign === "-" && b === 24 ) {
  console.log('46 - 24 = 22')
} else
if (a === 46 && sign === "-" && b === 25 ) {
  console.log('46 - 25 = 21')
} else
if (a === 46 && sign === "-" && b === 26 ) {
  console.log('46 - 26 = 20')
} else
if (a === 46 && sign === "-" && b === 27 ) {
  console.log('46 - 27 = 19')
} else
if (a === 46 && sign === "-" && b === 28 ) {
  console.log('46 - 28 = 18')
} else
if (a === 46 && sign === "-" && b === 29 ) {
  console.log('46 - 29 = 17')
} else
if (a === 46 && sign === "-" && b === 30 ) {
  console.log('46 - 30 = 16')
} else
if (a === 46 && sign === "-" && b === 31 ) {
  console.log('46 - 31 = 15')
} else
if (a === 46 && sign === "-" && b === 32 ) {
  console.log('46 - 32 = 14')
} else
if (a === 46 && sign === "-" && b === 33 ) {
  console.log('46 - 33 = 13')
} else
if (a === 46 && sign === "-" && b === 34 ) {
  console.log('46 - 34 = 12')
} else
if (a === 46 && sign === "-" && b === 35 ) {
  console.log('46 - 35 = 11')
} else
if (a === 46 && sign === "-" && b === 36 ) {
  console.log('46 - 36 = 10')
} else
if (a === 46 && sign === "-" && b === 37 ) {
  console.log('46 - 37 = 9')
} else
if (a === 46 && sign === "-" && b === 38 ) {
  console.log('46 - 38 = 8')
} else
if (a === 46 && sign === "-" && b === 39 ) {
  console.log('46 - 39 = 7')
} else
if (a === 46 && sign === "-" && b === 40 ) {
  console.log('46 - 40 = 6')
} else
if (a === 46 && sign === "-" && b === 41 ) {
  console.log('46 - 41 = 5')
} else
if (a === 46 && sign === "-" && b === 42 ) {
  console.log('46 - 42 = 4')
} else
if (a === 46 && sign === "-" && b === 43 ) {
  console.log('46 - 43 = 3')
} else
if (a === 46 && sign === "-" && b === 44 ) {
  console.log('46 - 44 = 2')
} else
if (a === 46 && sign === "-" && b === 45 ) {
  console.log('46 - 45 = 1')
} else
if (a === 46 && sign === "-" && b === 46 ) {
  console.log('46 - 46 = 0')
} else
if (a === 46 && sign === "-" && b === 47 ) {
  console.log('46 - 47 = -1')
} else
if (a === 46 && sign === "-" && b === 48 ) {
  console.log('46 - 48 = -2')
} else
if (a === 46 && sign === "-" && b === 49 ) {
  console.log('46 - 49 = -3')
} else
if (a === 46 && sign === "-" && b === 50 ) {
  console.log('46 - 50 = -4')
} else
if (a === 47 && sign === "-" && b === 1 ) {
  console.log('47 - 1 = 46')
} else
if (a === 47 && sign === "-" && b === 2 ) {
  console.log('47 - 2 = 45')
} else
if (a === 47 && sign === "-" && b === 3 ) {
  console.log('47 - 3 = 44')
} else
if (a === 47 && sign === "-" && b === 4 ) {
  console.log('47 - 4 = 43')
} else
if (a === 47 && sign === "-" && b === 5 ) {
  console.log('47 - 5 = 42')
} else
if (a === 47 && sign === "-" && b === 6 ) {
  console.log('47 - 6 = 41')
} else
if (a === 47 && sign === "-" && b === 7 ) {
  console.log('47 - 7 = 40')
} else
if (a === 47 && sign === "-" && b === 8 ) {
  console.log('47 - 8 = 39')
} else
if (a === 47 && sign === "-" && b === 9 ) {
  console.log('47 - 9 = 38')
} else
if (a === 47 && sign === "-" && b === 10 ) {
  console.log('47 - 10 = 37')
} else
if (a === 47 && sign === "-" && b === 11 ) {
  console.log('47 - 11 = 36')
} else
if (a === 47 && sign === "-" && b === 12 ) {
  console.log('47 - 12 = 35')
} else
if (a === 47 && sign === "-" && b === 13 ) {
  console.log('47 - 13 = 34')
} else
if (a === 47 && sign === "-" && b === 14 ) {
  console.log('47 - 14 = 33')
} else
if (a === 47 && sign === "-" && b === 15 ) {
  console.log('47 - 15 = 32')
} else
if (a === 47 && sign === "-" && b === 16 ) {
  console.log('47 - 16 = 31')
} else
if (a === 47 && sign === "-" && b === 17 ) {
  console.log('47 - 17 = 30')
} else
if (a === 47 && sign === "-" && b === 18 ) {
  console.log('47 - 18 = 29')
} else
if (a === 47 && sign === "-" && b === 19 ) {
  console.log('47 - 19 = 28')
} else
if (a === 47 && sign === "-" && b === 20 ) {
  console.log('47 - 20 = 27')
} else
if (a === 47 && sign === "-" && b === 21 ) {
  console.log('47 - 21 = 26')
} else
if (a === 47 && sign === "-" && b === 22 ) {
  console.log('47 - 22 = 25')
} else
if (a === 47 && sign === "-" && b === 23 ) {
  console.log('47 - 23 = 24')
} else
if (a === 47 && sign === "-" && b === 24 ) {
  console.log('47 - 24 = 23')
} else
if (a === 47 && sign === "-" && b === 25 ) {
  console.log('47 - 25 = 22')
} else
if (a === 47 && sign === "-" && b === 26 ) {
  console.log('47 - 26 = 21')
} else
if (a === 47 && sign === "-" && b === 27 ) {
  console.log('47 - 27 = 20')
} else
if (a === 47 && sign === "-" && b === 28 ) {
  console.log('47 - 28 = 19')
} else
if (a === 47 && sign === "-" && b === 29 ) {
  console.log('47 - 29 = 18')
} else
if (a === 47 && sign === "-" && b === 30 ) {
  console.log('47 - 30 = 17')
} else
if (a === 47 && sign === "-" && b === 31 ) {
  console.log('47 - 31 = 16')
} else
if (a === 47 && sign === "-" && b === 32 ) {
  console.log('47 - 32 = 15')
} else
if (a === 47 && sign === "-" && b === 33 ) {
  console.log('47 - 33 = 14')
} else
if (a === 47 && sign === "-" && b === 34 ) {
  console.log('47 - 34 = 13')
} else
if (a === 47 && sign === "-" && b === 35 ) {
  console.log('47 - 35 = 12')
} else
if (a === 47 && sign === "-" && b === 36 ) {
  console.log('47 - 36 = 11')
} else
if (a === 47 && sign === "-" && b === 37 ) {
  console.log('47 - 37 = 10')
} else
if (a === 47 && sign === "-" && b === 38 ) {
  console.log('47 - 38 = 9')
} else
if (a === 47 && sign === "-" && b === 39 ) {
  console.log('47 - 39 = 8')
} else
if (a === 47 && sign === "-" && b === 40 ) {
  console.log('47 - 40 = 7')
} else
if (a === 47 && sign === "-" && b === 41 ) {
  console.log('47 - 41 = 6')
} else
if (a === 47 && sign === "-" && b === 42 ) {
  console.log('47 - 42 = 5')
} else
if (a === 47 && sign === "-" && b === 43 ) {
  console.log('47 - 43 = 4')
} else
if (a === 47 && sign === "-" && b === 44 ) {
  console.log('47 - 44 = 3')
} else
if (a === 47 && sign === "-" && b === 45 ) {
  console.log('47 - 45 = 2')
} else
if (a === 47 && sign === "-" && b === 46 ) {
  console.log('47 - 46 = 1')
} else
if (a === 47 && sign === "-" && b === 47 ) {
  console.log('47 - 47 = 0')
} else
if (a === 47 && sign === "-" && b === 48 ) {
  console.log('47 - 48 = -1')
} else
if (a === 47 && sign === "-" && b === 49 ) {
  console.log('47 - 49 = -2')
} else
if (a === 47 && sign === "-" && b === 50 ) {
  console.log('47 - 50 = -3')
} else
if (a === 48 && sign === "-" && b === 1 ) {
  console.log('48 - 1 = 47')
} else
if (a === 48 && sign === "-" && b === 2 ) {
  console.log('48 - 2 = 46')
} else
if (a === 48 && sign === "-" && b === 3 ) {
  console.log('48 - 3 = 45')
} else
if (a === 48 && sign === "-" && b === 4 ) {
  console.log('48 - 4 = 44')
} else
if (a === 48 && sign === "-" && b === 5 ) {
  console.log('48 - 5 = 43')
} else
if (a === 48 && sign === "-" && b === 6 ) {
  console.log('48 - 6 = 42')
} else
if (a === 48 && sign === "-" && b === 7 ) {
  console.log('48 - 7 = 41')
} else
if (a === 48 && sign === "-" && b === 8 ) {
  console.log('48 - 8 = 40')
} else
if (a === 48 && sign === "-" && b === 9 ) {
  console.log('48 - 9 = 39')
} else
if (a === 48 && sign === "-" && b === 10 ) {
  console.log('48 - 10 = 38')
} else
if (a === 48 && sign === "-" && b === 11 ) {
  console.log('48 - 11 = 37')
} else
if (a === 48 && sign === "-" && b === 12 ) {
  console.log('48 - 12 = 36')
} else
if (a === 48 && sign === "-" && b === 13 ) {
  console.log('48 - 13 = 35')
} else
if (a === 48 && sign === "-" && b === 14 ) {
  console.log('48 - 14 = 34')
} else
if (a === 48 && sign === "-" && b === 15 ) {
  console.log('48 - 15 = 33')
} else
if (a === 48 && sign === "-" && b === 16 ) {
  console.log('48 - 16 = 32')
} else
if (a === 48 && sign === "-" && b === 17 ) {
  console.log('48 - 17 = 31')
} else
if (a === 48 && sign === "-" && b === 18 ) {
  console.log('48 - 18 = 30')
} else
if (a === 48 && sign === "-" && b === 19 ) {
  console.log('48 - 19 = 29')
} else
if (a === 48 && sign === "-" && b === 20 ) {
  console.log('48 - 20 = 28')
} else
if (a === 48 && sign === "-" && b === 21 ) {
  console.log('48 - 21 = 27')
} else
if (a === 48 && sign === "-" && b === 22 ) {
  console.log('48 - 22 = 26')
} else
if (a === 48 && sign === "-" && b === 23 ) {
  console.log('48 - 23 = 25')
} else
if (a === 48 && sign === "-" && b === 24 ) {
  console.log('48 - 24 = 24')
} else
if (a === 48 && sign === "-" && b === 25 ) {
  console.log('48 - 25 = 23')
} else
if (a === 48 && sign === "-" && b === 26 ) {
  console.log('48 - 26 = 22')
} else
if (a === 48 && sign === "-" && b === 27 ) {
  console.log('48 - 27 = 21')
} else
if (a === 48 && sign === "-" && b === 28 ) {
  console.log('48 - 28 = 20')
} else
if (a === 48 && sign === "-" && b === 29 ) {
  console.log('48 - 29 = 19')
} else
if (a === 48 && sign === "-" && b === 30 ) {
  console.log('48 - 30 = 18')
} else
if (a === 48 && sign === "-" && b === 31 ) {
  console.log('48 - 31 = 17')
} else
if (a === 48 && sign === "-" && b === 32 ) {
  console.log('48 - 32 = 16')
} else
if (a === 48 && sign === "-" && b === 33 ) {
  console.log('48 - 33 = 15')
} else
if (a === 48 && sign === "-" && b === 34 ) {
  console.log('48 - 34 = 14')
} else
if (a === 48 && sign === "-" && b === 35 ) {
  console.log('48 - 35 = 13')
} else
if (a === 48 && sign === "-" && b === 36 ) {
  console.log('48 - 36 = 12')
} else
if (a === 48 && sign === "-" && b === 37 ) {
  console.log('48 - 37 = 11')
} else
if (a === 48 && sign === "-" && b === 38 ) {
  console.log('48 - 38 = 10')
} else
if (a === 48 && sign === "-" && b === 39 ) {
  console.log('48 - 39 = 9')
} else
if (a === 48 && sign === "-" && b === 40 ) {
  console.log('48 - 40 = 8')
} else
if (a === 48 && sign === "-" && b === 41 ) {
  console.log('48 - 41 = 7')
} else
if (a === 48 && sign === "-" && b === 42 ) {
  console.log('48 - 42 = 6')
} else
if (a === 48 && sign === "-" && b === 43 ) {
  console.log('48 - 43 = 5')
} else
if (a === 48 && sign === "-" && b === 44 ) {
  console.log('48 - 44 = 4')
} else
if (a === 48 && sign === "-" && b === 45 ) {
  console.log('48 - 45 = 3')
} else
if (a === 48 && sign === "-" && b === 46 ) {
  console.log('48 - 46 = 2')
} else
if (a === 48 && sign === "-" && b === 47 ) {
  console.log('48 - 47 = 1')
} else
if (a === 48 && sign === "-" && b === 48 ) {
  console.log('48 - 48 = 0')
} else
if (a === 48 && sign === "-" && b === 49 ) {
  console.log('48 - 49 = -1')
} else
if (a === 48 && sign === "-" && b === 50 ) {
  console.log('48 - 50 = -2')
} else
if (a === 49 && sign === "-" && b === 1 ) {
  console.log('49 - 1 = 48')
} else
if (a === 49 && sign === "-" && b === 2 ) {
  console.log('49 - 2 = 47')
} else
if (a === 49 && sign === "-" && b === 3 ) {
  console.log('49 - 3 = 46')
} else
if (a === 49 && sign === "-" && b === 4 ) {
  console.log('49 - 4 = 45')
} else
if (a === 49 && sign === "-" && b === 5 ) {
  console.log('49 - 5 = 44')
} else
if (a === 49 && sign === "-" && b === 6 ) {
  console.log('49 - 6 = 43')
} else
if (a === 49 && sign === "-" && b === 7 ) {
  console.log('49 - 7 = 42')
} else
if (a === 49 && sign === "-" && b === 8 ) {
  console.log('49 - 8 = 41')
} else
if (a === 49 && sign === "-" && b === 9 ) {
  console.log('49 - 9 = 40')
} else
if (a === 49 && sign === "-" && b === 10 ) {
  console.log('49 - 10 = 39')
} else
if (a === 49 && sign === "-" && b === 11 ) {
  console.log('49 - 11 = 38')
} else
if (a === 49 && sign === "-" && b === 12 ) {
  console.log('49 - 12 = 37')
} else
if (a === 49 && sign === "-" && b === 13 ) {
  console.log('49 - 13 = 36')
} else
if (a === 49 && sign === "-" && b === 14 ) {
  console.log('49 - 14 = 35')
} else
if (a === 49 && sign === "-" && b === 15 ) {
  console.log('49 - 15 = 34')
} else
if (a === 49 && sign === "-" && b === 16 ) {
  console.log('49 - 16 = 33')
} else
if (a === 49 && sign === "-" && b === 17 ) {
  console.log('49 - 17 = 32')
} else
if (a === 49 && sign === "-" && b === 18 ) {
  console.log('49 - 18 = 31')
} else
if (a === 49 && sign === "-" && b === 19 ) {
  console.log('49 - 19 = 30')
} else
if (a === 49 && sign === "-" && b === 20 ) {
  console.log('49 - 20 = 29')
} else
if (a === 49 && sign === "-" && b === 21 ) {
  console.log('49 - 21 = 28')
} else
if (a === 49 && sign === "-" && b === 22 ) {
  console.log('49 - 22 = 27')
} else
if (a === 49 && sign === "-" && b === 23 ) {
  console.log('49 - 23 = 26')
} else
if (a === 49 && sign === "-" && b === 24 ) {
  console.log('49 - 24 = 25')
} else
if (a === 49 && sign === "-" && b === 25 ) {
  console.log('49 - 25 = 24')
} else
if (a === 49 && sign === "-" && b === 26 ) {
  console.log('49 - 26 = 23')
} else
if (a === 49 && sign === "-" && b === 27 ) {
  console.log('49 - 27 = 22')
} else
if (a === 49 && sign === "-" && b === 28 ) {
  console.log('49 - 28 = 21')
} else
if (a === 49 && sign === "-" && b === 29 ) {
  console.log('49 - 29 = 20')
} else
if (a === 49 && sign === "-" && b === 30 ) {
  console.log('49 - 30 = 19')
} else
if (a === 49 && sign === "-" && b === 31 ) {
  console.log('49 - 31 = 18')
} else
if (a === 49 && sign === "-" && b === 32 ) {
  console.log('49 - 32 = 17')
} else
if (a === 49 && sign === "-" && b === 33 ) {
  console.log('49 - 33 = 16')
} else
if (a === 49 && sign === "-" && b === 34 ) {
  console.log('49 - 34 = 15')
} else
if (a === 49 && sign === "-" && b === 35 ) {
  console.log('49 - 35 = 14')
} else
if (a === 49 && sign === "-" && b === 36 ) {
  console.log('49 - 36 = 13')
} else
if (a === 49 && sign === "-" && b === 37 ) {
  console.log('49 - 37 = 12')
} else
if (a === 49 && sign === "-" && b === 38 ) {
  console.log('49 - 38 = 11')
} else
if (a === 49 && sign === "-" && b === 39 ) {
  console.log('49 - 39 = 10')
} else
if (a === 49 && sign === "-" && b === 40 ) {
  console.log('49 - 40 = 9')
} else
if (a === 49 && sign === "-" && b === 41 ) {
  console.log('49 - 41 = 8')
} else
if (a === 49 && sign === "-" && b === 42 ) {
  console.log('49 - 42 = 7')
} else
if (a === 49 && sign === "-" && b === 43 ) {
  console.log('49 - 43 = 6')
} else
if (a === 49 && sign === "-" && b === 44 ) {
  console.log('49 - 44 = 5')
} else
if (a === 49 && sign === "-" && b === 45 ) {
  console.log('49 - 45 = 4')
} else
if (a === 49 && sign === "-" && b === 46 ) {
  console.log('49 - 46 = 3')
} else
if (a === 49 && sign === "-" && b === 47 ) {
  console.log('49 - 47 = 2')
} else
if (a === 49 && sign === "-" && b === 48 ) {
  console.log('49 - 48 = 1')
} else
if (a === 49 && sign === "-" && b === 49 ) {
  console.log('49 - 49 = 0')
} else
if (a === 49 && sign === "-" && b === 50 ) {
  console.log('49 - 50 = -1')
} else
if (a === 50 && sign === "-" && b === 1 ) {
  console.log('50 - 1 = 49')
} else
if (a === 50 && sign === "-" && b === 2 ) {
  console.log('50 - 2 = 48')
} else
if (a === 50 && sign === "-" && b === 3 ) {
  console.log('50 - 3 = 47')
} else
if (a === 50 && sign === "-" && b === 4 ) {
  console.log('50 - 4 = 46')
} else
if (a === 50 && sign === "-" && b === 5 ) {
  console.log('50 - 5 = 45')
} else
if (a === 50 && sign === "-" && b === 6 ) {
  console.log('50 - 6 = 44')
} else
if (a === 50 && sign === "-" && b === 7 ) {
  console.log('50 - 7 = 43')
} else
if (a === 50 && sign === "-" && b === 8 ) {
  console.log('50 - 8 = 42')
} else
if (a === 50 && sign === "-" && b === 9 ) {
  console.log('50 - 9 = 41')
} else
if (a === 50 && sign === "-" && b === 10 ) {
  console.log('50 - 10 = 40')
} else
if (a === 50 && sign === "-" && b === 11 ) {
  console.log('50 - 11 = 39')
} else
if (a === 50 && sign === "-" && b === 12 ) {
  console.log('50 - 12 = 38')
} else
if (a === 50 && sign === "-" && b === 13 ) {
  console.log('50 - 13 = 37')
} else
if (a === 50 && sign === "-" && b === 14 ) {
  console.log('50 - 14 = 36')
} else
if (a === 50 && sign === "-" && b === 15 ) {
  console.log('50 - 15 = 35')
} else
if (a === 50 && sign === "-" && b === 16 ) {
  console.log('50 - 16 = 34')
} else
if (a === 50 && sign === "-" && b === 17 ) {
  console.log('50 - 17 = 33')
} else
if (a === 50 && sign === "-" && b === 18 ) {
  console.log('50 - 18 = 32')
} else
if (a === 50 && sign === "-" && b === 19 ) {
  console.log('50 - 19 = 31')
} else
if (a === 50 && sign === "-" && b === 20 ) {
  console.log('50 - 20 = 30')
} else
if (a === 50 && sign === "-" && b === 21 ) {
  console.log('50 - 21 = 29')
} else
if (a === 50 && sign === "-" && b === 22 ) {
  console.log('50 - 22 = 28')
} else
if (a === 50 && sign === "-" && b === 23 ) {
  console.log('50 - 23 = 27')
} else
if (a === 50 && sign === "-" && b === 24 ) {
  console.log('50 - 24 = 26')
} else
if (a === 50 && sign === "-" && b === 25 ) {
  console.log('50 - 25 = 25')
} else
if (a === 50 && sign === "-" && b === 26 ) {
  console.log('50 - 26 = 24')
} else
if (a === 50 && sign === "-" && b === 27 ) {
  console.log('50 - 27 = 23')
} else
if (a === 50 && sign === "-" && b === 28 ) {
  console.log('50 - 28 = 22')
} else
if (a === 50 && sign === "-" && b === 29 ) {
  console.log('50 - 29 = 21')
} else
if (a === 50 && sign === "-" && b === 30 ) {
  console.log('50 - 30 = 20')
} else
if (a === 50 && sign === "-" && b === 31 ) {
  console.log('50 - 31 = 19')
} else
if (a === 50 && sign === "-" && b === 32 ) {
  console.log('50 - 32 = 18')
} else
if (a === 50 && sign === "-" && b === 33 ) {
  console.log('50 - 33 = 17')
} else
if (a === 50 && sign === "-" && b === 34 ) {
  console.log('50 - 34 = 16')
} else
if (a === 50 && sign === "-" && b === 35 ) {
  console.log('50 - 35 = 15')
} else
if (a === 50 && sign === "-" && b === 36 ) {
  console.log('50 - 36 = 14')
} else
if (a === 50 && sign === "-" && b === 37 ) {
  console.log('50 - 37 = 13')
} else
if (a === 50 && sign === "-" && b === 38 ) {
  console.log('50 - 38 = 12')
} else
if (a === 50 && sign === "-" && b === 39 ) {
  console.log('50 - 39 = 11')
} else
if (a === 50 && sign === "-" && b === 40 ) {
  console.log('50 - 40 = 10')
} else
if (a === 50 && sign === "-" && b === 41 ) {
  console.log('50 - 41 = 9')
} else
if (a === 50 && sign === "-" && b === 42 ) {
  console.log('50 - 42 = 8')
} else
if (a === 50 && sign === "-" && b === 43 ) {
  console.log('50 - 43 = 7')
} else
if (a === 50 && sign === "-" && b === 44 ) {
  console.log('50 - 44 = 6')
} else
if (a === 50 && sign === "-" && b === 45 ) {
  console.log('50 - 45 = 5')
} else
if (a === 50 && sign === "-" && b === 46 ) {
  console.log('50 - 46 = 4')
} else
if (a === 50 && sign === "-" && b === 47 ) {
  console.log('50 - 47 = 3')
} else
if (a === 50 && sign === "-" && b === 48 ) {
  console.log('50 - 48 = 2')
} else
if (a === 50 && sign === "-" && b === 49 ) {
  console.log('50 - 49 = 1')
} else
if (a === 50 && sign === "-" && b === 50 ) {
  console.log('50 - 50 = 0')
} else
if (a === 1 && sign === "*" && b === 1 ) {
  console.log('1 * 1 = 1')
} else
if (a === 1 && sign === "*" && b === 2 ) {
  console.log('1 * 2 = 2')
} else
if (a === 1 && sign === "*" && b === 3 ) {
  console.log('1 * 3 = 3')
} else
if (a === 1 && sign === "*" && b === 4 ) {
  console.log('1 * 4 = 4')
} else
if (a === 1 && sign === "*" && b === 5 ) {
  console.log('1 * 5 = 5')
} else
if (a === 1 && sign === "*" && b === 6 ) {
  console.log('1 * 6 = 6')
} else
if (a === 1 && sign === "*" && b === 7 ) {
  console.log('1 * 7 = 7')
} else
if (a === 1 && sign === "*" && b === 8 ) {
  console.log('1 * 8 = 8')
} else
if (a === 1 && sign === "*" && b === 9 ) {
  console.log('1 * 9 = 9')
} else
if (a === 1 && sign === "*" && b === 10 ) {
  console.log('1 * 10 = 10')
} else
if (a === 1 && sign === "*" && b === 11 ) {
  console.log('1 * 11 = 11')
} else
if (a === 1 && sign === "*" && b === 12 ) {
  console.log('1 * 12 = 12')
} else
if (a === 1 && sign === "*" && b === 13 ) {
  console.log('1 * 13 = 13')
} else
if (a === 1 && sign === "*" && b === 14 ) {
  console.log('1 * 14 = 14')
} else
if (a === 1 && sign === "*" && b === 15 ) {
  console.log('1 * 15 = 15')
} else
if (a === 1 && sign === "*" && b === 16 ) {
  console.log('1 * 16 = 16')
} else
if (a === 1 && sign === "*" && b === 17 ) {
  console.log('1 * 17 = 17')
} else
if (a === 1 && sign === "*" && b === 18 ) {
  console.log('1 * 18 = 18')
} else
if (a === 1 && sign === "*" && b === 19 ) {
  console.log('1 * 19 = 19')
} else
if (a === 1 && sign === "*" && b === 20 ) {
  console.log('1 * 20 = 20')
} else
if (a === 1 && sign === "*" && b === 21 ) {
  console.log('1 * 21 = 21')
} else
if (a === 1 && sign === "*" && b === 22 ) {
  console.log('1 * 22 = 22')
} else
if (a === 1 && sign === "*" && b === 23 ) {
  console.log('1 * 23 = 23')
} else
if (a === 1 && sign === "*" && b === 24 ) {
  console.log('1 * 24 = 24')
} else
if (a === 1 && sign === "*" && b === 25 ) {
  console.log('1 * 25 = 25')
} else
if (a === 1 && sign === "*" && b === 26 ) {
  console.log('1 * 26 = 26')
} else
if (a === 1 && sign === "*" && b === 27 ) {
  console.log('1 * 27 = 27')
} else
if (a === 1 && sign === "*" && b === 28 ) {
  console.log('1 * 28 = 28')
} else
if (a === 1 && sign === "*" && b === 29 ) {
  console.log('1 * 29 = 29')
} else
if (a === 1 && sign === "*" && b === 30 ) {
  console.log('1 * 30 = 30')
} else
if (a === 1 && sign === "*" && b === 31 ) {
  console.log('1 * 31 = 31')
} else
if (a === 1 && sign === "*" && b === 32 ) {
  console.log('1 * 32 = 32')
} else
if (a === 1 && sign === "*" && b === 33 ) {
  console.log('1 * 33 = 33')
} else
if (a === 1 && sign === "*" && b === 34 ) {
  console.log('1 * 34 = 34')
} else
if (a === 1 && sign === "*" && b === 35 ) {
  console.log('1 * 35 = 35')
} else
if (a === 1 && sign === "*" && b === 36 ) {
  console.log('1 * 36 = 36')
} else
if (a === 1 && sign === "*" && b === 37 ) {
  console.log('1 * 37 = 37')
} else
if (a === 1 && sign === "*" && b === 38 ) {
  console.log('1 * 38 = 38')
} else
if (a === 1 && sign === "*" && b === 39 ) {
  console.log('1 * 39 = 39')
} else
if (a === 1 && sign === "*" && b === 40 ) {
  console.log('1 * 40 = 40')
} else
if (a === 1 && sign === "*" && b === 41 ) {
  console.log('1 * 41 = 41')
} else
if (a === 1 && sign === "*" && b === 42 ) {
  console.log('1 * 42 = 42')
} else
if (a === 1 && sign === "*" && b === 43 ) {
  console.log('1 * 43 = 43')
} else
if (a === 1 && sign === "*" && b === 44 ) {
  console.log('1 * 44 = 44')
} else
if (a === 1 && sign === "*" && b === 45 ) {
  console.log('1 * 45 = 45')
} else
if (a === 1 && sign === "*" && b === 46 ) {
  console.log('1 * 46 = 46')
} else
if (a === 1 && sign === "*" && b === 47 ) {
  console.log('1 * 47 = 47')
} else
if (a === 1 && sign === "*" && b === 48 ) {
  console.log('1 * 48 = 48')
} else
if (a === 1 && sign === "*" && b === 49 ) {
  console.log('1 * 49 = 49')
} else
if (a === 1 && sign === "*" && b === 50 ) {
  console.log('1 * 50 = 50')
} else
if (a === 2 && sign === "*" && b === 1 ) {
  console.log('2 * 1 = 2')
} else
if (a === 2 && sign === "*" && b === 2 ) {
  console.log('2 * 2 = 4')
} else
if (a === 2 && sign === "*" && b === 3 ) {
  console.log('2 * 3 = 6')
} else
if (a === 2 && sign === "*" && b === 4 ) {
  console.log('2 * 4 = 8')
} else
if (a === 2 && sign === "*" && b === 5 ) {
  console.log('2 * 5 = 10')
} else
if (a === 2 && sign === "*" && b === 6 ) {
  console.log('2 * 6 = 12')
} else
if (a === 2 && sign === "*" && b === 7 ) {
  console.log('2 * 7 = 14')
} else
if (a === 2 && sign === "*" && b === 8 ) {
  console.log('2 * 8 = 16')
} else
if (a === 2 && sign === "*" && b === 9 ) {
  console.log('2 * 9 = 18')
} else
if (a === 2 && sign === "*" && b === 10 ) {
  console.log('2 * 10 = 20')
} else
if (a === 2 && sign === "*" && b === 11 ) {
  console.log('2 * 11 = 22')
} else
if (a === 2 && sign === "*" && b === 12 ) {
  console.log('2 * 12 = 24')
} else
if (a === 2 && sign === "*" && b === 13 ) {
  console.log('2 * 13 = 26')
} else
if (a === 2 && sign === "*" && b === 14 ) {
  console.log('2 * 14 = 28')
} else
if (a === 2 && sign === "*" && b === 15 ) {
  console.log('2 * 15 = 30')
} else
if (a === 2 && sign === "*" && b === 16 ) {
  console.log('2 * 16 = 32')
} else
if (a === 2 && sign === "*" && b === 17 ) {
  console.log('2 * 17 = 34')
} else
if (a === 2 && sign === "*" && b === 18 ) {
  console.log('2 * 18 = 36')
} else
if (a === 2 && sign === "*" && b === 19 ) {
  console.log('2 * 19 = 38')
} else
if (a === 2 && sign === "*" && b === 20 ) {
  console.log('2 * 20 = 40')
} else
if (a === 2 && sign === "*" && b === 21 ) {
  console.log('2 * 21 = 42')
} else
if (a === 2 && sign === "*" && b === 22 ) {
  console.log('2 * 22 = 44')
} else
if (a === 2 && sign === "*" && b === 23 ) {
  console.log('2 * 23 = 46')
} else
if (a === 2 && sign === "*" && b === 24 ) {
  console.log('2 * 24 = 48')
} else
if (a === 2 && sign === "*" && b === 25 ) {
  console.log('2 * 25 = 50')
} else
if (a === 2 && sign === "*" && b === 26 ) {
  console.log('2 * 26 = 52')
} else
if (a === 2 && sign === "*" && b === 27 ) {
  console.log('2 * 27 = 54')
} else
if (a === 2 && sign === "*" && b === 28 ) {
  console.log('2 * 28 = 56')
} else
if (a === 2 && sign === "*" && b === 29 ) {
  console.log('2 * 29 = 58')
} else
if (a === 2 && sign === "*" && b === 30 ) {
  console.log('2 * 30 = 60')
} else
if (a === 2 && sign === "*" && b === 31 ) {
  console.log('2 * 31 = 62')
} else
if (a === 2 && sign === "*" && b === 32 ) {
  console.log('2 * 32 = 64')
} else
if (a === 2 && sign === "*" && b === 33 ) {
  console.log('2 * 33 = 66')
} else
if (a === 2 && sign === "*" && b === 34 ) {
  console.log('2 * 34 = 68')
} else
if (a === 2 && sign === "*" && b === 35 ) {
  console.log('2 * 35 = 70')
} else
if (a === 2 && sign === "*" && b === 36 ) {
  console.log('2 * 36 = 72')
} else
if (a === 2 && sign === "*" && b === 37 ) {
  console.log('2 * 37 = 74')
} else
if (a === 2 && sign === "*" && b === 38 ) {
  console.log('2 * 38 = 76')
} else
if (a === 2 && sign === "*" && b === 39 ) {
  console.log('2 * 39 = 78')
} else
if (a === 2 && sign === "*" && b === 40 ) {
  console.log('2 * 40 = 80')
} else
if (a === 2 && sign === "*" && b === 41 ) {
  console.log('2 * 41 = 82')
} else
if (a === 2 && sign === "*" && b === 42 ) {
  console.log('2 * 42 = 84')
} else
if (a === 2 && sign === "*" && b === 43 ) {
  console.log('2 * 43 = 86')
} else
if (a === 2 && sign === "*" && b === 44 ) {
  console.log('2 * 44 = 88')
} else
if (a === 2 && sign === "*" && b === 45 ) {
  console.log('2 * 45 = 90')
} else
if (a === 2 && sign === "*" && b === 46 ) {
  console.log('2 * 46 = 92')
} else
if (a === 2 && sign === "*" && b === 47 ) {
  console.log('2 * 47 = 94')
} else
if (a === 2 && sign === "*" && b === 48 ) {
  console.log('2 * 48 = 96')
} else
if (a === 2 && sign === "*" && b === 49 ) {
  console.log('2 * 49 = 98')
} else
if (a === 2 && sign === "*" && b === 50 ) {
  console.log('2 * 50 = 100')
} else
if (a === 3 && sign === "*" && b === 1 ) {
  console.log('3 * 1 = 3')
} else
if (a === 3 && sign === "*" && b === 2 ) {
  console.log('3 * 2 = 6')
} else
if (a === 3 && sign === "*" && b === 3 ) {
  console.log('3 * 3 = 9')
} else
if (a === 3 && sign === "*" && b === 4 ) {
  console.log('3 * 4 = 12')
} else
if (a === 3 && sign === "*" && b === 5 ) {
  console.log('3 * 5 = 15')
} else
if (a === 3 && sign === "*" && b === 6 ) {
  console.log('3 * 6 = 18')
} else
if (a === 3 && sign === "*" && b === 7 ) {
  console.log('3 * 7 = 21')
} else
if (a === 3 && sign === "*" && b === 8 ) {
  console.log('3 * 8 = 24')
} else
if (a === 3 && sign === "*" && b === 9 ) {
  console.log('3 * 9 = 27')
} else
if (a === 3 && sign === "*" && b === 10 ) {
  console.log('3 * 10 = 30')
} else
if (a === 3 && sign === "*" && b === 11 ) {
  console.log('3 * 11 = 33')
} else
if (a === 3 && sign === "*" && b === 12 ) {
  console.log('3 * 12 = 36')
} else
if (a === 3 && sign === "*" && b === 13 ) {
  console.log('3 * 13 = 39')
} else
if (a === 3 && sign === "*" && b === 14 ) {
  console.log('3 * 14 = 42')
} else
if (a === 3 && sign === "*" && b === 15 ) {
  console.log('3 * 15 = 45')
} else
if (a === 3 && sign === "*" && b === 16 ) {
  console.log('3 * 16 = 48')
} else
if (a === 3 && sign === "*" && b === 17 ) {
  console.log('3 * 17 = 51')
} else
if (a === 3 && sign === "*" && b === 18 ) {
  console.log('3 * 18 = 54')
} else
if (a === 3 && sign === "*" && b === 19 ) {
  console.log('3 * 19 = 57')
} else
if (a === 3 && sign === "*" && b === 20 ) {
  console.log('3 * 20 = 60')
} else
if (a === 3 && sign === "*" && b === 21 ) {
  console.log('3 * 21 = 63')
} else
if (a === 3 && sign === "*" && b === 22 ) {
  console.log('3 * 22 = 66')
} else
if (a === 3 && sign === "*" && b === 23 ) {
  console.log('3 * 23 = 69')
} else
if (a === 3 && sign === "*" && b === 24 ) {
  console.log('3 * 24 = 72')
} else
if (a === 3 && sign === "*" && b === 25 ) {
  console.log('3 * 25 = 75')
} else
if (a === 3 && sign === "*" && b === 26 ) {
  console.log('3 * 26 = 78')
} else
if (a === 3 && sign === "*" && b === 27 ) {
  console.log('3 * 27 = 81')
} else
if (a === 3 && sign === "*" && b === 28 ) {
  console.log('3 * 28 = 84')
} else
if (a === 3 && sign === "*" && b === 29 ) {
  console.log('3 * 29 = 87')
} else
if (a === 3 && sign === "*" && b === 30 ) {
  console.log('3 * 30 = 90')
} else
if (a === 3 && sign === "*" && b === 31 ) {
  console.log('3 * 31 = 93')
} else
if (a === 3 && sign === "*" && b === 32 ) {
  console.log('3 * 32 = 96')
} else
if (a === 3 && sign === "*" && b === 33 ) {
  console.log('3 * 33 = 99')
} else
if (a === 3 && sign === "*" && b === 34 ) {
  console.log('3 * 34 = 102')
} else
if (a === 3 && sign === "*" && b === 35 ) {
  console.log('3 * 35 = 105')
} else
if (a === 3 && sign === "*" && b === 36 ) {
  console.log('3 * 36 = 108')
} else
if (a === 3 && sign === "*" && b === 37 ) {
  console.log('3 * 37 = 111')
} else
if (a === 3 && sign === "*" && b === 38 ) {
  console.log('3 * 38 = 114')
} else
if (a === 3 && sign === "*" && b === 39 ) {
  console.log('3 * 39 = 117')
} else
if (a === 3 && sign === "*" && b === 40 ) {
  console.log('3 * 40 = 120')
} else
if (a === 3 && sign === "*" && b === 41 ) {
  console.log('3 * 41 = 123')
} else
if (a === 3 && sign === "*" && b === 42 ) {
  console.log('3 * 42 = 126')
} else
if (a === 3 && sign === "*" && b === 43 ) {
  console.log('3 * 43 = 129')
} else
if (a === 3 && sign === "*" && b === 44 ) {
  console.log('3 * 44 = 132')
} else
if (a === 3 && sign === "*" && b === 45 ) {
  console.log('3 * 45 = 135')
} else
if (a === 3 && sign === "*" && b === 46 ) {
  console.log('3 * 46 = 138')
} else
if (a === 3 && sign === "*" && b === 47 ) {
  console.log('3 * 47 = 141')
} else
if (a === 3 && sign === "*" && b === 48 ) {
  console.log('3 * 48 = 144')
} else
if (a === 3 && sign === "*" && b === 49 ) {
  console.log('3 * 49 = 147')
} else
if (a === 3 && sign === "*" && b === 50 ) {
  console.log('3 * 50 = 150')
} else
if (a === 4 && sign === "*" && b === 1 ) {
  console.log('4 * 1 = 4')
} else
if (a === 4 && sign === "*" && b === 2 ) {
  console.log('4 * 2 = 8')
} else
if (a === 4 && sign === "*" && b === 3 ) {
  console.log('4 * 3 = 12')
} else
if (a === 4 && sign === "*" && b === 4 ) {
  console.log('4 * 4 = 16')
} else
if (a === 4 && sign === "*" && b === 5 ) {
  console.log('4 * 5 = 20')
} else
if (a === 4 && sign === "*" && b === 6 ) {
  console.log('4 * 6 = 24')
} else
if (a === 4 && sign === "*" && b === 7 ) {
  console.log('4 * 7 = 28')
} else
if (a === 4 && sign === "*" && b === 8 ) {
  console.log('4 * 8 = 32')
} else
if (a === 4 && sign === "*" && b === 9 ) {
  console.log('4 * 9 = 36')
} else
if (a === 4 && sign === "*" && b === 10 ) {
  console.log('4 * 10 = 40')
} else
if (a === 4 && sign === "*" && b === 11 ) {
  console.log('4 * 11 = 44')
} else
if (a === 4 && sign === "*" && b === 12 ) {
  console.log('4 * 12 = 48')
} else
if (a === 4 && sign === "*" && b === 13 ) {
  console.log('4 * 13 = 52')
} else
if (a === 4 && sign === "*" && b === 14 ) {
  console.log('4 * 14 = 56')
} else
if (a === 4 && sign === "*" && b === 15 ) {
  console.log('4 * 15 = 60')
} else
if (a === 4 && sign === "*" && b === 16 ) {
  console.log('4 * 16 = 64')
} else
if (a === 4 && sign === "*" && b === 17 ) {
  console.log('4 * 17 = 68')
} else
if (a === 4 && sign === "*" && b === 18 ) {
  console.log('4 * 18 = 72')
} else
if (a === 4 && sign === "*" && b === 19 ) {
  console.log('4 * 19 = 76')
} else
if (a === 4 && sign === "*" && b === 20 ) {
  console.log('4 * 20 = 80')
} else
if (a === 4 && sign === "*" && b === 21 ) {
  console.log('4 * 21 = 84')
} else
if (a === 4 && sign === "*" && b === 22 ) {
  console.log('4 * 22 = 88')
} else
if (a === 4 && sign === "*" && b === 23 ) {
  console.log('4 * 23 = 92')
} else
if (a === 4 && sign === "*" && b === 24 ) {
  console.log('4 * 24 = 96')
} else
if (a === 4 && sign === "*" && b === 25 ) {
  console.log('4 * 25 = 100')
} else
if (a === 4 && sign === "*" && b === 26 ) {
  console.log('4 * 26 = 104')
} else
if (a === 4 && sign === "*" && b === 27 ) {
  console.log('4 * 27 = 108')
} else
if (a === 4 && sign === "*" && b === 28 ) {
  console.log('4 * 28 = 112')
} else
if (a === 4 && sign === "*" && b === 29 ) {
  console.log('4 * 29 = 116')
} else
if (a === 4 && sign === "*" && b === 30 ) {
  console.log('4 * 30 = 120')
} else
if (a === 4 && sign === "*" && b === 31 ) {
  console.log('4 * 31 = 124')
} else
if (a === 4 && sign === "*" && b === 32 ) {
  console.log('4 * 32 = 128')
} else
if (a === 4 && sign === "*" && b === 33 ) {
  console.log('4 * 33 = 132')
} else
if (a === 4 && sign === "*" && b === 34 ) {
  console.log('4 * 34 = 136')
} else
if (a === 4 && sign === "*" && b === 35 ) {
  console.log('4 * 35 = 140')
} else
if (a === 4 && sign === "*" && b === 36 ) {
  console.log('4 * 36 = 144')
} else
if (a === 4 && sign === "*" && b === 37 ) {
  console.log('4 * 37 = 148')
} else
if (a === 4 && sign === "*" && b === 38 ) {
  console.log('4 * 38 = 152')
} else
if (a === 4 && sign === "*" && b === 39 ) {
  console.log('4 * 39 = 156')
} else
if (a === 4 && sign === "*" && b === 40 ) {
  console.log('4 * 40 = 160')
} else
if (a === 4 && sign === "*" && b === 41 ) {
  console.log('4 * 41 = 164')
} else
if (a === 4 && sign === "*" && b === 42 ) {
  console.log('4 * 42 = 168')
} else
if (a === 4 && sign === "*" && b === 43 ) {
  console.log('4 * 43 = 172')
} else
if (a === 4 && sign === "*" && b === 44 ) {
  console.log('4 * 44 = 176')
} else
if (a === 4 && sign === "*" && b === 45 ) {
  console.log('4 * 45 = 180')
} else
if (a === 4 && sign === "*" && b === 46 ) {
  console.log('4 * 46 = 184')
} else
if (a === 4 && sign === "*" && b === 47 ) {
  console.log('4 * 47 = 188')
} else
if (a === 4 && sign === "*" && b === 48 ) {
  console.log('4 * 48 = 192')
} else
if (a === 4 && sign === "*" && b === 49 ) {
  console.log('4 * 49 = 196')
} else
if (a === 4 && sign === "*" && b === 50 ) {
  console.log('4 * 50 = 200')
} else
if (a === 5 && sign === "*" && b === 1 ) {
  console.log('5 * 1 = 5')
} else
if (a === 5 && sign === "*" && b === 2 ) {
  console.log('5 * 2 = 10')
} else
if (a === 5 && sign === "*" && b === 3 ) {
  console.log('5 * 3 = 15')
} else
if (a === 5 && sign === "*" && b === 4 ) {
  console.log('5 * 4 = 20')
} else
if (a === 5 && sign === "*" && b === 5 ) {
  console.log('5 * 5 = 25')
} else
if (a === 5 && sign === "*" && b === 6 ) {
  console.log('5 * 6 = 30')
} else
if (a === 5 && sign === "*" && b === 7 ) {
  console.log('5 * 7 = 35')
} else
if (a === 5 && sign === "*" && b === 8 ) {
  console.log('5 * 8 = 40')
} else
if (a === 5 && sign === "*" && b === 9 ) {
  console.log('5 * 9 = 45')
} else
if (a === 5 && sign === "*" && b === 10 ) {
  console.log('5 * 10 = 50')
} else
if (a === 5 && sign === "*" && b === 11 ) {
  console.log('5 * 11 = 55')
} else
if (a === 5 && sign === "*" && b === 12 ) {
  console.log('5 * 12 = 60')
} else
if (a === 5 && sign === "*" && b === 13 ) {
  console.log('5 * 13 = 65')
} else
if (a === 5 && sign === "*" && b === 14 ) {
  console.log('5 * 14 = 70')
} else
if (a === 5 && sign === "*" && b === 15 ) {
  console.log('5 * 15 = 75')
} else
if (a === 5 && sign === "*" && b === 16 ) {
  console.log('5 * 16 = 80')
} else
if (a === 5 && sign === "*" && b === 17 ) {
  console.log('5 * 17 = 85')
} else
if (a === 5 && sign === "*" && b === 18 ) {
  console.log('5 * 18 = 90')
} else
if (a === 5 && sign === "*" && b === 19 ) {
  console.log('5 * 19 = 95')
} else
if (a === 5 && sign === "*" && b === 20 ) {
  console.log('5 * 20 = 100')
} else
if (a === 5 && sign === "*" && b === 21 ) {
  console.log('5 * 21 = 105')
} else
if (a === 5 && sign === "*" && b === 22 ) {
  console.log('5 * 22 = 110')
} else
if (a === 5 && sign === "*" && b === 23 ) {
  console.log('5 * 23 = 115')
} else
if (a === 5 && sign === "*" && b === 24 ) {
  console.log('5 * 24 = 120')
} else
if (a === 5 && sign === "*" && b === 25 ) {
  console.log('5 * 25 = 125')
} else
if (a === 5 && sign === "*" && b === 26 ) {
  console.log('5 * 26 = 130')
} else
if (a === 5 && sign === "*" && b === 27 ) {
  console.log('5 * 27 = 135')
} else
if (a === 5 && sign === "*" && b === 28 ) {
  console.log('5 * 28 = 140')
} else
if (a === 5 && sign === "*" && b === 29 ) {
  console.log('5 * 29 = 145')
} else
if (a === 5 && sign === "*" && b === 30 ) {
  console.log('5 * 30 = 150')
} else
if (a === 5 && sign === "*" && b === 31 ) {
  console.log('5 * 31 = 155')
} else
if (a === 5 && sign === "*" && b === 32 ) {
  console.log('5 * 32 = 160')
} else
if (a === 5 && sign === "*" && b === 33 ) {
  console.log('5 * 33 = 165')
} else
if (a === 5 && sign === "*" && b === 34 ) {
  console.log('5 * 34 = 170')
} else
if (a === 5 && sign === "*" && b === 35 ) {
  console.log('5 * 35 = 175')
} else
if (a === 5 && sign === "*" && b === 36 ) {
  console.log('5 * 36 = 180')
} else
if (a === 5 && sign === "*" && b === 37 ) {
  console.log('5 * 37 = 185')
} else
if (a === 5 && sign === "*" && b === 38 ) {
  console.log('5 * 38 = 190')
} else
if (a === 5 && sign === "*" && b === 39 ) {
  console.log('5 * 39 = 195')
} else
if (a === 5 && sign === "*" && b === 40 ) {
  console.log('5 * 40 = 200')
} else
if (a === 5 && sign === "*" && b === 41 ) {
  console.log('5 * 41 = 205')
} else
if (a === 5 && sign === "*" && b === 42 ) {
  console.log('5 * 42 = 210')
} else
if (a === 5 && sign === "*" && b === 43 ) {
  console.log('5 * 43 = 215')
} else
if (a === 5 && sign === "*" && b === 44 ) {
  console.log('5 * 44 = 220')
} else
if (a === 5 && sign === "*" && b === 45 ) {
  console.log('5 * 45 = 225')
} else
if (a === 5 && sign === "*" && b === 46 ) {
  console.log('5 * 46 = 230')
} else
if (a === 5 && sign === "*" && b === 47 ) {
  console.log('5 * 47 = 235')
} else
if (a === 5 && sign === "*" && b === 48 ) {
  console.log('5 * 48 = 240')
} else
if (a === 5 && sign === "*" && b === 49 ) {
  console.log('5 * 49 = 245')
} else
if (a === 5 && sign === "*" && b === 50 ) {
  console.log('5 * 50 = 250')
} else
if (a === 6 && sign === "*" && b === 1 ) {
  console.log('6 * 1 = 6')
} else
if (a === 6 && sign === "*" && b === 2 ) {
  console.log('6 * 2 = 12')
} else
if (a === 6 && sign === "*" && b === 3 ) {
  console.log('6 * 3 = 18')
} else
if (a === 6 && sign === "*" && b === 4 ) {
  console.log('6 * 4 = 24')
} else
if (a === 6 && sign === "*" && b === 5 ) {
  console.log('6 * 5 = 30')
} else
if (a === 6 && sign === "*" && b === 6 ) {
  console.log('6 * 6 = 36')
} else
if (a === 6 && sign === "*" && b === 7 ) {
  console.log('6 * 7 = 42')
} else
if (a === 6 && sign === "*" && b === 8 ) {
  console.log('6 * 8 = 48')
} else
if (a === 6 && sign === "*" && b === 9 ) {
  console.log('6 * 9 = 54')
} else
if (a === 6 && sign === "*" && b === 10 ) {
  console.log('6 * 10 = 60')
} else
if (a === 6 && sign === "*" && b === 11 ) {
  console.log('6 * 11 = 66')
} else
if (a === 6 && sign === "*" && b === 12 ) {
  console.log('6 * 12 = 72')
} else
if (a === 6 && sign === "*" && b === 13 ) {
  console.log('6 * 13 = 78')
} else
if (a === 6 && sign === "*" && b === 14 ) {
  console.log('6 * 14 = 84')
} else
if (a === 6 && sign === "*" && b === 15 ) {
  console.log('6 * 15 = 90')
} else
if (a === 6 && sign === "*" && b === 16 ) {
  console.log('6 * 16 = 96')
} else
if (a === 6 && sign === "*" && b === 17 ) {
  console.log('6 * 17 = 102')
} else
if (a === 6 && sign === "*" && b === 18 ) {
  console.log('6 * 18 = 108')
} else
if (a === 6 && sign === "*" && b === 19 ) {
  console.log('6 * 19 = 114')
} else
if (a === 6 && sign === "*" && b === 20 ) {
  console.log('6 * 20 = 120')
} else
if (a === 6 && sign === "*" && b === 21 ) {
  console.log('6 * 21 = 126')
} else
if (a === 6 && sign === "*" && b === 22 ) {
  console.log('6 * 22 = 132')
} else
if (a === 6 && sign === "*" && b === 23 ) {
  console.log('6 * 23 = 138')
} else
if (a === 6 && sign === "*" && b === 24 ) {
  console.log('6 * 24 = 144')
} else
if (a === 6 && sign === "*" && b === 25 ) {
  console.log('6 * 25 = 150')
} else
if (a === 6 && sign === "*" && b === 26 ) {
  console.log('6 * 26 = 156')
} else
if (a === 6 && sign === "*" && b === 27 ) {
  console.log('6 * 27 = 162')
} else
if (a === 6 && sign === "*" && b === 28 ) {
  console.log('6 * 28 = 168')
} else
if (a === 6 && sign === "*" && b === 29 ) {
  console.log('6 * 29 = 174')
} else
if (a === 6 && sign === "*" && b === 30 ) {
  console.log('6 * 30 = 180')
} else
if (a === 6 && sign === "*" && b === 31 ) {
  console.log('6 * 31 = 186')
} else
if (a === 6 && sign === "*" && b === 32 ) {
  console.log('6 * 32 = 192')
} else
if (a === 6 && sign === "*" && b === 33 ) {
  console.log('6 * 33 = 198')
} else
if (a === 6 && sign === "*" && b === 34 ) {
  console.log('6 * 34 = 204')
} else
if (a === 6 && sign === "*" && b === 35 ) {
  console.log('6 * 35 = 210')
} else
if (a === 6 && sign === "*" && b === 36 ) {
  console.log('6 * 36 = 216')
} else
if (a === 6 && sign === "*" && b === 37 ) {
  console.log('6 * 37 = 222')
} else
if (a === 6 && sign === "*" && b === 38 ) {
  console.log('6 * 38 = 228')
} else
if (a === 6 && sign === "*" && b === 39 ) {
  console.log('6 * 39 = 234')
} else
if (a === 6 && sign === "*" && b === 40 ) {
  console.log('6 * 40 = 240')
} else
if (a === 6 && sign === "*" && b === 41 ) {
  console.log('6 * 41 = 246')
} else
if (a === 6 && sign === "*" && b === 42 ) {
  console.log('6 * 42 = 252')
} else
if (a === 6 && sign === "*" && b === 43 ) {
  console.log('6 * 43 = 258')
} else
if (a === 6 && sign === "*" && b === 44 ) {
  console.log('6 * 44 = 264')
} else
if (a === 6 && sign === "*" && b === 45 ) {
  console.log('6 * 45 = 270')
} else
if (a === 6 && sign === "*" && b === 46 ) {
  console.log('6 * 46 = 276')
} else
if (a === 6 && sign === "*" && b === 47 ) {
  console.log('6 * 47 = 282')
} else
if (a === 6 && sign === "*" && b === 48 ) {
  console.log('6 * 48 = 288')
} else
if (a === 6 && sign === "*" && b === 49 ) {
  console.log('6 * 49 = 294')
} else
if (a === 6 && sign === "*" && b === 50 ) {
  console.log('6 * 50 = 300')
} else
if (a === 7 && sign === "*" && b === 1 ) {
  console.log('7 * 1 = 7')
} else
if (a === 7 && sign === "*" && b === 2 ) {
  console.log('7 * 2 = 14')
} else
if (a === 7 && sign === "*" && b === 3 ) {
  console.log('7 * 3 = 21')
} else
if (a === 7 && sign === "*" && b === 4 ) {
  console.log('7 * 4 = 28')
} else
if (a === 7 && sign === "*" && b === 5 ) {
  console.log('7 * 5 = 35')
} else
if (a === 7 && sign === "*" && b === 6 ) {
  console.log('7 * 6 = 42')
} else
if (a === 7 && sign === "*" && b === 7 ) {
  console.log('7 * 7 = 49')
} else
if (a === 7 && sign === "*" && b === 8 ) {
  console.log('7 * 8 = 56')
} else
if (a === 7 && sign === "*" && b === 9 ) {
  console.log('7 * 9 = 63')
} else
if (a === 7 && sign === "*" && b === 10 ) {
  console.log('7 * 10 = 70')
} else
if (a === 7 && sign === "*" && b === 11 ) {
  console.log('7 * 11 = 77')
} else
if (a === 7 && sign === "*" && b === 12 ) {
  console.log('7 * 12 = 84')
} else
if (a === 7 && sign === "*" && b === 13 ) {
  console.log('7 * 13 = 91')
} else
if (a === 7 && sign === "*" && b === 14 ) {
  console.log('7 * 14 = 98')
} else
if (a === 7 && sign === "*" && b === 15 ) {
  console.log('7 * 15 = 105')
} else
if (a === 7 && sign === "*" && b === 16 ) {
  console.log('7 * 16 = 112')
} else
if (a === 7 && sign === "*" && b === 17 ) {
  console.log('7 * 17 = 119')
} else
if (a === 7 && sign === "*" && b === 18 ) {
  console.log('7 * 18 = 126')
} else
if (a === 7 && sign === "*" && b === 19 ) {
  console.log('7 * 19 = 133')
} else
if (a === 7 && sign === "*" && b === 20 ) {
  console.log('7 * 20 = 140')
} else
if (a === 7 && sign === "*" && b === 21 ) {
  console.log('7 * 21 = 147')
} else
if (a === 7 && sign === "*" && b === 22 ) {
  console.log('7 * 22 = 154')
} else
if (a === 7 && sign === "*" && b === 23 ) {
  console.log('7 * 23 = 161')
} else
if (a === 7 && sign === "*" && b === 24 ) {
  console.log('7 * 24 = 168')
} else
if (a === 7 && sign === "*" && b === 25 ) {
  console.log('7 * 25 = 175')
} else
if (a === 7 && sign === "*" && b === 26 ) {
  console.log('7 * 26 = 182')
} else
if (a === 7 && sign === "*" && b === 27 ) {
  console.log('7 * 27 = 189')
} else
if (a === 7 && sign === "*" && b === 28 ) {
  console.log('7 * 28 = 196')
} else
if (a === 7 && sign === "*" && b === 29 ) {
  console.log('7 * 29 = 203')
} else
if (a === 7 && sign === "*" && b === 30 ) {
  console.log('7 * 30 = 210')
} else
if (a === 7 && sign === "*" && b === 31 ) {
  console.log('7 * 31 = 217')
} else
if (a === 7 && sign === "*" && b === 32 ) {
  console.log('7 * 32 = 224')
} else
if (a === 7 && sign === "*" && b === 33 ) {
  console.log('7 * 33 = 231')
} else
if (a === 7 && sign === "*" && b === 34 ) {
  console.log('7 * 34 = 238')
} else
if (a === 7 && sign === "*" && b === 35 ) {
  console.log('7 * 35 = 245')
} else
if (a === 7 && sign === "*" && b === 36 ) {
  console.log('7 * 36 = 252')
} else
if (a === 7 && sign === "*" && b === 37 ) {
  console.log('7 * 37 = 259')
} else
if (a === 7 && sign === "*" && b === 38 ) {
  console.log('7 * 38 = 266')
} else
if (a === 7 && sign === "*" && b === 39 ) {
  console.log('7 * 39 = 273')
} else
if (a === 7 && sign === "*" && b === 40 ) {
  console.log('7 * 40 = 280')
} else
if (a === 7 && sign === "*" && b === 41 ) {
  console.log('7 * 41 = 287')
} else
if (a === 7 && sign === "*" && b === 42 ) {
  console.log('7 * 42 = 294')
} else
if (a === 7 && sign === "*" && b === 43 ) {
  console.log('7 * 43 = 301')
} else
if (a === 7 && sign === "*" && b === 44 ) {
  console.log('7 * 44 = 308')
} else
if (a === 7 && sign === "*" && b === 45 ) {
  console.log('7 * 45 = 315')
} else
if (a === 7 && sign === "*" && b === 46 ) {
  console.log('7 * 46 = 322')
} else
if (a === 7 && sign === "*" && b === 47 ) {
  console.log('7 * 47 = 329')
} else
if (a === 7 && sign === "*" && b === 48 ) {
  console.log('7 * 48 = 336')
} else
if (a === 7 && sign === "*" && b === 49 ) {
  console.log('7 * 49 = 343')
} else
if (a === 7 && sign === "*" && b === 50 ) {
  console.log('7 * 50 = 350')
} else
if (a === 8 && sign === "*" && b === 1 ) {
  console.log('8 * 1 = 8')
} else
if (a === 8 && sign === "*" && b === 2 ) {
  console.log('8 * 2 = 16')
} else
if (a === 8 && sign === "*" && b === 3 ) {
  console.log('8 * 3 = 24')
} else
if (a === 8 && sign === "*" && b === 4 ) {
  console.log('8 * 4 = 32')
} else
if (a === 8 && sign === "*" && b === 5 ) {
  console.log('8 * 5 = 40')
} else
if (a === 8 && sign === "*" && b === 6 ) {
  console.log('8 * 6 = 48')
} else
if (a === 8 && sign === "*" && b === 7 ) {
  console.log('8 * 7 = 56')
} else
if (a === 8 && sign === "*" && b === 8 ) {
  console.log('8 * 8 = 64')
} else
if (a === 8 && sign === "*" && b === 9 ) {
  console.log('8 * 9 = 72')
} else
if (a === 8 && sign === "*" && b === 10 ) {
  console.log('8 * 10 = 80')
} else
if (a === 8 && sign === "*" && b === 11 ) {
  console.log('8 * 11 = 88')
} else
if (a === 8 && sign === "*" && b === 12 ) {
  console.log('8 * 12 = 96')
} else
if (a === 8 && sign === "*" && b === 13 ) {
  console.log('8 * 13 = 104')
} else
if (a === 8 && sign === "*" && b === 14 ) {
  console.log('8 * 14 = 112')
} else
if (a === 8 && sign === "*" && b === 15 ) {
  console.log('8 * 15 = 120')
} else
if (a === 8 && sign === "*" && b === 16 ) {
  console.log('8 * 16 = 128')
} else
if (a === 8 && sign === "*" && b === 17 ) {
  console.log('8 * 17 = 136')
} else
if (a === 8 && sign === "*" && b === 18 ) {
  console.log('8 * 18 = 144')
} else
if (a === 8 && sign === "*" && b === 19 ) {
  console.log('8 * 19 = 152')
} else
if (a === 8 && sign === "*" && b === 20 ) {
  console.log('8 * 20 = 160')
} else
if (a === 8 && sign === "*" && b === 21 ) {
  console.log('8 * 21 = 168')
} else
if (a === 8 && sign === "*" && b === 22 ) {
  console.log('8 * 22 = 176')
} else
if (a === 8 && sign === "*" && b === 23 ) {
  console.log('8 * 23 = 184')
} else
if (a === 8 && sign === "*" && b === 24 ) {
  console.log('8 * 24 = 192')
} else
if (a === 8 && sign === "*" && b === 25 ) {
  console.log('8 * 25 = 200')
} else
if (a === 8 && sign === "*" && b === 26 ) {
  console.log('8 * 26 = 208')
} else
if (a === 8 && sign === "*" && b === 27 ) {
  console.log('8 * 27 = 216')
} else
if (a === 8 && sign === "*" && b === 28 ) {
  console.log('8 * 28 = 224')
} else
if (a === 8 && sign === "*" && b === 29 ) {
  console.log('8 * 29 = 232')
} else
if (a === 8 && sign === "*" && b === 30 ) {
  console.log('8 * 30 = 240')
} else
if (a === 8 && sign === "*" && b === 31 ) {
  console.log('8 * 31 = 248')
} else
if (a === 8 && sign === "*" && b === 32 ) {
  console.log('8 * 32 = 256')
} else
if (a === 8 && sign === "*" && b === 33 ) {
  console.log('8 * 33 = 264')
} else
if (a === 8 && sign === "*" && b === 34 ) {
  console.log('8 * 34 = 272')
} else
if (a === 8 && sign === "*" && b === 35 ) {
  console.log('8 * 35 = 280')
} else
if (a === 8 && sign === "*" && b === 36 ) {
  console.log('8 * 36 = 288')
} else
if (a === 8 && sign === "*" && b === 37 ) {
  console.log('8 * 37 = 296')
} else
if (a === 8 && sign === "*" && b === 38 ) {
  console.log('8 * 38 = 304')
} else
if (a === 8 && sign === "*" && b === 39 ) {
  console.log('8 * 39 = 312')
} else
if (a === 8 && sign === "*" && b === 40 ) {
  console.log('8 * 40 = 320')
} else
if (a === 8 && sign === "*" && b === 41 ) {
  console.log('8 * 41 = 328')
} else
if (a === 8 && sign === "*" && b === 42 ) {
  console.log('8 * 42 = 336')
} else
if (a === 8 && sign === "*" && b === 43 ) {
  console.log('8 * 43 = 344')
} else
if (a === 8 && sign === "*" && b === 44 ) {
  console.log('8 * 44 = 352')
} else
if (a === 8 && sign === "*" && b === 45 ) {
  console.log('8 * 45 = 360')
} else
if (a === 8 && sign === "*" && b === 46 ) {
  console.log('8 * 46 = 368')
} else
if (a === 8 && sign === "*" && b === 47 ) {
  console.log('8 * 47 = 376')
} else
if (a === 8 && sign === "*" && b === 48 ) {
  console.log('8 * 48 = 384')
} else
if (a === 8 && sign === "*" && b === 49 ) {
  console.log('8 * 49 = 392')
} else
if (a === 8 && sign === "*" && b === 50 ) {
  console.log('8 * 50 = 400')
} else
if (a === 9 && sign === "*" && b === 1 ) {
  console.log('9 * 1 = 9')
} else
if (a === 9 && sign === "*" && b === 2 ) {
  console.log('9 * 2 = 18')
} else
if (a === 9 && sign === "*" && b === 3 ) {
  console.log('9 * 3 = 27')
} else
if (a === 9 && sign === "*" && b === 4 ) {
  console.log('9 * 4 = 36')
} else
if (a === 9 && sign === "*" && b === 5 ) {
  console.log('9 * 5 = 45')
} else
if (a === 9 && sign === "*" && b === 6 ) {
  console.log('9 * 6 = 54')
} else
if (a === 9 && sign === "*" && b === 7 ) {
  console.log('9 * 7 = 63')
} else
if (a === 9 && sign === "*" && b === 8 ) {
  console.log('9 * 8 = 72')
} else
if (a === 9 && sign === "*" && b === 9 ) {
  console.log('9 * 9 = 81')
} else
if (a === 9 && sign === "*" && b === 10 ) {
  console.log('9 * 10 = 90')
} else
if (a === 9 && sign === "*" && b === 11 ) {
  console.log('9 * 11 = 99')
} else
if (a === 9 && sign === "*" && b === 12 ) {
  console.log('9 * 12 = 108')
} else
if (a === 9 && sign === "*" && b === 13 ) {
  console.log('9 * 13 = 117')
} else
if (a === 9 && sign === "*" && b === 14 ) {
  console.log('9 * 14 = 126')
} else
if (a === 9 && sign === "*" && b === 15 ) {
  console.log('9 * 15 = 135')
} else
if (a === 9 && sign === "*" && b === 16 ) {
  console.log('9 * 16 = 144')
} else
if (a === 9 && sign === "*" && b === 17 ) {
  console.log('9 * 17 = 153')
} else
if (a === 9 && sign === "*" && b === 18 ) {
  console.log('9 * 18 = 162')
} else
if (a === 9 && sign === "*" && b === 19 ) {
  console.log('9 * 19 = 171')
} else
if (a === 9 && sign === "*" && b === 20 ) {
  console.log('9 * 20 = 180')
} else
if (a === 9 && sign === "*" && b === 21 ) {
  console.log('9 * 21 = 189')
} else
if (a === 9 && sign === "*" && b === 22 ) {
  console.log('9 * 22 = 198')
} else
if (a === 9 && sign === "*" && b === 23 ) {
  console.log('9 * 23 = 207')
} else
if (a === 9 && sign === "*" && b === 24 ) {
  console.log('9 * 24 = 216')
} else
if (a === 9 && sign === "*" && b === 25 ) {
  console.log('9 * 25 = 225')
} else
if (a === 9 && sign === "*" && b === 26 ) {
  console.log('9 * 26 = 234')
} else
if (a === 9 && sign === "*" && b === 27 ) {
  console.log('9 * 27 = 243')
} else
if (a === 9 && sign === "*" && b === 28 ) {
  console.log('9 * 28 = 252')
} else
if (a === 9 && sign === "*" && b === 29 ) {
  console.log('9 * 29 = 261')
} else
if (a === 9 && sign === "*" && b === 30 ) {
  console.log('9 * 30 = 270')
} else
if (a === 9 && sign === "*" && b === 31 ) {
  console.log('9 * 31 = 279')
} else
if (a === 9 && sign === "*" && b === 32 ) {
  console.log('9 * 32 = 288')
} else
if (a === 9 && sign === "*" && b === 33 ) {
  console.log('9 * 33 = 297')
} else
if (a === 9 && sign === "*" && b === 34 ) {
  console.log('9 * 34 = 306')
} else
if (a === 9 && sign === "*" && b === 35 ) {
  console.log('9 * 35 = 315')
} else
if (a === 9 && sign === "*" && b === 36 ) {
  console.log('9 * 36 = 324')
} else
if (a === 9 && sign === "*" && b === 37 ) {
  console.log('9 * 37 = 333')
} else
if (a === 9 && sign === "*" && b === 38 ) {
  console.log('9 * 38 = 342')
} else
if (a === 9 && sign === "*" && b === 39 ) {
  console.log('9 * 39 = 351')
} else
if (a === 9 && sign === "*" && b === 40 ) {
  console.log('9 * 40 = 360')
} else
if (a === 9 && sign === "*" && b === 41 ) {
  console.log('9 * 41 = 369')
} else
if (a === 9 && sign === "*" && b === 42 ) {
  console.log('9 * 42 = 378')
} else
if (a === 9 && sign === "*" && b === 43 ) {
  console.log('9 * 43 = 387')
} else
if (a === 9 && sign === "*" && b === 44 ) {
  console.log('9 * 44 = 396')
} else
if (a === 9 && sign === "*" && b === 45 ) {
  console.log('9 * 45 = 405')
} else
if (a === 9 && sign === "*" && b === 46 ) {
  console.log('9 * 46 = 414')
} else
if (a === 9 && sign === "*" && b === 47 ) {
  console.log('9 * 47 = 423')
} else
if (a === 9 && sign === "*" && b === 48 ) {
  console.log('9 * 48 = 432')
} else
if (a === 9 && sign === "*" && b === 49 ) {
  console.log('9 * 49 = 441')
} else
if (a === 9 && sign === "*" && b === 50 ) {
  console.log('9 * 50 = 450')
} else
if (a === 10 && sign === "*" && b === 1 ) {
  console.log('10 * 1 = 10')
} else
if (a === 10 && sign === "*" && b === 2 ) {
  console.log('10 * 2 = 20')
} else
if (a === 10 && sign === "*" && b === 3 ) {
  console.log('10 * 3 = 30')
} else
if (a === 10 && sign === "*" && b === 4 ) {
  console.log('10 * 4 = 40')
} else
if (a === 10 && sign === "*" && b === 5 ) {
  console.log('10 * 5 = 50')
} else
if (a === 10 && sign === "*" && b === 6 ) {
  console.log('10 * 6 = 60')
} else
if (a === 10 && sign === "*" && b === 7 ) {
  console.log('10 * 7 = 70')
} else
if (a === 10 && sign === "*" && b === 8 ) {
  console.log('10 * 8 = 80')
} else
if (a === 10 && sign === "*" && b === 9 ) {
  console.log('10 * 9 = 90')
} else
if (a === 10 && sign === "*" && b === 10 ) {
  console.log('10 * 10 = 100')
} else
if (a === 10 && sign === "*" && b === 11 ) {
  console.log('10 * 11 = 110')
} else
if (a === 10 && sign === "*" && b === 12 ) {
  console.log('10 * 12 = 120')
} else
if (a === 10 && sign === "*" && b === 13 ) {
  console.log('10 * 13 = 130')
} else
if (a === 10 && sign === "*" && b === 14 ) {
  console.log('10 * 14 = 140')
} else
if (a === 10 && sign === "*" && b === 15 ) {
  console.log('10 * 15 = 150')
} else
if (a === 10 && sign === "*" && b === 16 ) {
  console.log('10 * 16 = 160')
} else
if (a === 10 && sign === "*" && b === 17 ) {
  console.log('10 * 17 = 170')
} else
if (a === 10 && sign === "*" && b === 18 ) {
  console.log('10 * 18 = 180')
} else
if (a === 10 && sign === "*" && b === 19 ) {
  console.log('10 * 19 = 190')
} else
if (a === 10 && sign === "*" && b === 20 ) {
  console.log('10 * 20 = 200')
} else
if (a === 10 && sign === "*" && b === 21 ) {
  console.log('10 * 21 = 210')
} else
if (a === 10 && sign === "*" && b === 22 ) {
  console.log('10 * 22 = 220')
} else
if (a === 10 && sign === "*" && b === 23 ) {
  console.log('10 * 23 = 230')
} else
if (a === 10 && sign === "*" && b === 24 ) {
  console.log('10 * 24 = 240')
} else
if (a === 10 && sign === "*" && b === 25 ) {
  console.log('10 * 25 = 250')
} else
if (a === 10 && sign === "*" && b === 26 ) {
  console.log('10 * 26 = 260')
} else
if (a === 10 && sign === "*" && b === 27 ) {
  console.log('10 * 27 = 270')
} else
if (a === 10 && sign === "*" && b === 28 ) {
  console.log('10 * 28 = 280')
} else
if (a === 10 && sign === "*" && b === 29 ) {
  console.log('10 * 29 = 290')
} else
if (a === 10 && sign === "*" && b === 30 ) {
  console.log('10 * 30 = 300')
} else
if (a === 10 && sign === "*" && b === 31 ) {
  console.log('10 * 31 = 310')
} else
if (a === 10 && sign === "*" && b === 32 ) {
  console.log('10 * 32 = 320')
} else
if (a === 10 && sign === "*" && b === 33 ) {
  console.log('10 * 33 = 330')
} else
if (a === 10 && sign === "*" && b === 34 ) {
  console.log('10 * 34 = 340')
} else
if (a === 10 && sign === "*" && b === 35 ) {
  console.log('10 * 35 = 350')
} else
if (a === 10 && sign === "*" && b === 36 ) {
  console.log('10 * 36 = 360')
} else
if (a === 10 && sign === "*" && b === 37 ) {
  console.log('10 * 37 = 370')
} else
if (a === 10 && sign === "*" && b === 38 ) {
  console.log('10 * 38 = 380')
} else
if (a === 10 && sign === "*" && b === 39 ) {
  console.log('10 * 39 = 390')
} else
if (a === 10 && sign === "*" && b === 40 ) {
  console.log('10 * 40 = 400')
} else
if (a === 10 && sign === "*" && b === 41 ) {
  console.log('10 * 41 = 410')
} else
if (a === 10 && sign === "*" && b === 42 ) {
  console.log('10 * 42 = 420')
} else
if (a === 10 && sign === "*" && b === 43 ) {
  console.log('10 * 43 = 430')
} else
if (a === 10 && sign === "*" && b === 44 ) {
  console.log('10 * 44 = 440')
} else
if (a === 10 && sign === "*" && b === 45 ) {
  console.log('10 * 45 = 450')
} else
if (a === 10 && sign === "*" && b === 46 ) {
  console.log('10 * 46 = 460')
} else
if (a === 10 && sign === "*" && b === 47 ) {
  console.log('10 * 47 = 470')
} else
if (a === 10 && sign === "*" && b === 48 ) {
  console.log('10 * 48 = 480')
} else
if (a === 10 && sign === "*" && b === 49 ) {
  console.log('10 * 49 = 490')
} else
if (a === 10 && sign === "*" && b === 50 ) {
  console.log('10 * 50 = 500')
} else
if (a === 11 && sign === "*" && b === 1 ) {
  console.log('11 * 1 = 11')
} else
if (a === 11 && sign === "*" && b === 2 ) {
  console.log('11 * 2 = 22')
} else
if (a === 11 && sign === "*" && b === 3 ) {
  console.log('11 * 3 = 33')
} else
if (a === 11 && sign === "*" && b === 4 ) {
  console.log('11 * 4 = 44')
} else
if (a === 11 && sign === "*" && b === 5 ) {
  console.log('11 * 5 = 55')
} else
if (a === 11 && sign === "*" && b === 6 ) {
  console.log('11 * 6 = 66')
} else
if (a === 11 && sign === "*" && b === 7 ) {
  console.log('11 * 7 = 77')
} else
if (a === 11 && sign === "*" && b === 8 ) {
  console.log('11 * 8 = 88')
} else
if (a === 11 && sign === "*" && b === 9 ) {
  console.log('11 * 9 = 99')
} else
if (a === 11 && sign === "*" && b === 10 ) {
  console.log('11 * 10 = 110')
} else
if (a === 11 && sign === "*" && b === 11 ) {
  console.log('11 * 11 = 121')
} else
if (a === 11 && sign === "*" && b === 12 ) {
  console.log('11 * 12 = 132')
} else
if (a === 11 && sign === "*" && b === 13 ) {
  console.log('11 * 13 = 143')
} else
if (a === 11 && sign === "*" && b === 14 ) {
  console.log('11 * 14 = 154')
} else
if (a === 11 && sign === "*" && b === 15 ) {
  console.log('11 * 15 = 165')
} else
if (a === 11 && sign === "*" && b === 16 ) {
  console.log('11 * 16 = 176')
} else
if (a === 11 && sign === "*" && b === 17 ) {
  console.log('11 * 17 = 187')
} else
if (a === 11 && sign === "*" && b === 18 ) {
  console.log('11 * 18 = 198')
} else
if (a === 11 && sign === "*" && b === 19 ) {
  console.log('11 * 19 = 209')
} else
if (a === 11 && sign === "*" && b === 20 ) {
  console.log('11 * 20 = 220')
} else
if (a === 11 && sign === "*" && b === 21 ) {
  console.log('11 * 21 = 231')
} else
if (a === 11 && sign === "*" && b === 22 ) {
  console.log('11 * 22 = 242')
} else
if (a === 11 && sign === "*" && b === 23 ) {
  console.log('11 * 23 = 253')
} else
if (a === 11 && sign === "*" && b === 24 ) {
  console.log('11 * 24 = 264')
} else
if (a === 11 && sign === "*" && b === 25 ) {
  console.log('11 * 25 = 275')
} else
if (a === 11 && sign === "*" && b === 26 ) {
  console.log('11 * 26 = 286')
} else
if (a === 11 && sign === "*" && b === 27 ) {
  console.log('11 * 27 = 297')
} else
if (a === 11 && sign === "*" && b === 28 ) {
  console.log('11 * 28 = 308')
} else
if (a === 11 && sign === "*" && b === 29 ) {
  console.log('11 * 29 = 319')
} else
if (a === 11 && sign === "*" && b === 30 ) {
  console.log('11 * 30 = 330')
} else
if (a === 11 && sign === "*" && b === 31 ) {
  console.log('11 * 31 = 341')
} else
if (a === 11 && sign === "*" && b === 32 ) {
  console.log('11 * 32 = 352')
} else
if (a === 11 && sign === "*" && b === 33 ) {
  console.log('11 * 33 = 363')
} else
if (a === 11 && sign === "*" && b === 34 ) {
  console.log('11 * 34 = 374')
} else
if (a === 11 && sign === "*" && b === 35 ) {
  console.log('11 * 35 = 385')
} else
if (a === 11 && sign === "*" && b === 36 ) {
  console.log('11 * 36 = 396')
} else
if (a === 11 && sign === "*" && b === 37 ) {
  console.log('11 * 37 = 407')
} else
if (a === 11 && sign === "*" && b === 38 ) {
  console.log('11 * 38 = 418')
} else
if (a === 11 && sign === "*" && b === 39 ) {
  console.log('11 * 39 = 429')
} else
if (a === 11 && sign === "*" && b === 40 ) {
  console.log('11 * 40 = 440')
} else
if (a === 11 && sign === "*" && b === 41 ) {
  console.log('11 * 41 = 451')
} else
if (a === 11 && sign === "*" && b === 42 ) {
  console.log('11 * 42 = 462')
} else
if (a === 11 && sign === "*" && b === 43 ) {
  console.log('11 * 43 = 473')
} else
if (a === 11 && sign === "*" && b === 44 ) {
  console.log('11 * 44 = 484')
} else
if (a === 11 && sign === "*" && b === 45 ) {
  console.log('11 * 45 = 495')
} else
if (a === 11 && sign === "*" && b === 46 ) {
  console.log('11 * 46 = 506')
} else
if (a === 11 && sign === "*" && b === 47 ) {
  console.log('11 * 47 = 517')
} else
if (a === 11 && sign === "*" && b === 48 ) {
  console.log('11 * 48 = 528')
} else
if (a === 11 && sign === "*" && b === 49 ) {
  console.log('11 * 49 = 539')
} else
if (a === 11 && sign === "*" && b === 50 ) {
  console.log('11 * 50 = 550')
} else
if (a === 12 && sign === "*" && b === 1 ) {
  console.log('12 * 1 = 12')
} else
if (a === 12 && sign === "*" && b === 2 ) {
  console.log('12 * 2 = 24')
} else
if (a === 12 && sign === "*" && b === 3 ) {
  console.log('12 * 3 = 36')
} else
if (a === 12 && sign === "*" && b === 4 ) {
  console.log('12 * 4 = 48')
} else
if (a === 12 && sign === "*" && b === 5 ) {
  console.log('12 * 5 = 60')
} else
if (a === 12 && sign === "*" && b === 6 ) {
  console.log('12 * 6 = 72')
} else
if (a === 12 && sign === "*" && b === 7 ) {
  console.log('12 * 7 = 84')
} else
if (a === 12 && sign === "*" && b === 8 ) {
  console.log('12 * 8 = 96')
} else
if (a === 12 && sign === "*" && b === 9 ) {
  console.log('12 * 9 = 108')
} else
if (a === 12 && sign === "*" && b === 10 ) {
  console.log('12 * 10 = 120')
} else
if (a === 12 && sign === "*" && b === 11 ) {
  console.log('12 * 11 = 132')
} else
if (a === 12 && sign === "*" && b === 12 ) {
  console.log('12 * 12 = 144')
} else
if (a === 12 && sign === "*" && b === 13 ) {
  console.log('12 * 13 = 156')
} else
if (a === 12 && sign === "*" && b === 14 ) {
  console.log('12 * 14 = 168')
} else
if (a === 12 && sign === "*" && b === 15 ) {
  console.log('12 * 15 = 180')
} else
if (a === 12 && sign === "*" && b === 16 ) {
  console.log('12 * 16 = 192')
} else
if (a === 12 && sign === "*" && b === 17 ) {
  console.log('12 * 17 = 204')
} else
if (a === 12 && sign === "*" && b === 18 ) {
  console.log('12 * 18 = 216')
} else
if (a === 12 && sign === "*" && b === 19 ) {
  console.log('12 * 19 = 228')
} else
if (a === 12 && sign === "*" && b === 20 ) {
  console.log('12 * 20 = 240')
} else
if (a === 12 && sign === "*" && b === 21 ) {
  console.log('12 * 21 = 252')
} else
if (a === 12 && sign === "*" && b === 22 ) {
  console.log('12 * 22 = 264')
} else
if (a === 12 && sign === "*" && b === 23 ) {
  console.log('12 * 23 = 276')
} else
if (a === 12 && sign === "*" && b === 24 ) {
  console.log('12 * 24 = 288')
} else
if (a === 12 && sign === "*" && b === 25 ) {
  console.log('12 * 25 = 300')
} else
if (a === 12 && sign === "*" && b === 26 ) {
  console.log('12 * 26 = 312')
} else
if (a === 12 && sign === "*" && b === 27 ) {
  console.log('12 * 27 = 324')
} else
if (a === 12 && sign === "*" && b === 28 ) {
  console.log('12 * 28 = 336')
} else
if (a === 12 && sign === "*" && b === 29 ) {
  console.log('12 * 29 = 348')
} else
if (a === 12 && sign === "*" && b === 30 ) {
  console.log('12 * 30 = 360')
} else
if (a === 12 && sign === "*" && b === 31 ) {
  console.log('12 * 31 = 372')
} else
if (a === 12 && sign === "*" && b === 32 ) {
  console.log('12 * 32 = 384')
} else
if (a === 12 && sign === "*" && b === 33 ) {
  console.log('12 * 33 = 396')
} else
if (a === 12 && sign === "*" && b === 34 ) {
  console.log('12 * 34 = 408')
} else
if (a === 12 && sign === "*" && b === 35 ) {
  console.log('12 * 35 = 420')
} else
if (a === 12 && sign === "*" && b === 36 ) {
  console.log('12 * 36 = 432')
} else
if (a === 12 && sign === "*" && b === 37 ) {
  console.log('12 * 37 = 444')
} else
if (a === 12 && sign === "*" && b === 38 ) {
  console.log('12 * 38 = 456')
} else
if (a === 12 && sign === "*" && b === 39 ) {
  console.log('12 * 39 = 468')
} else
if (a === 12 && sign === "*" && b === 40 ) {
  console.log('12 * 40 = 480')
} else
if (a === 12 && sign === "*" && b === 41 ) {
  console.log('12 * 41 = 492')
} else
if (a === 12 && sign === "*" && b === 42 ) {
  console.log('12 * 42 = 504')
} else
if (a === 12 && sign === "*" && b === 43 ) {
  console.log('12 * 43 = 516')
} else
if (a === 12 && sign === "*" && b === 44 ) {
  console.log('12 * 44 = 528')
} else
if (a === 12 && sign === "*" && b === 45 ) {
  console.log('12 * 45 = 540')
} else
if (a === 12 && sign === "*" && b === 46 ) {
  console.log('12 * 46 = 552')
} else
if (a === 12 && sign === "*" && b === 47 ) {
  console.log('12 * 47 = 564')
} else
if (a === 12 && sign === "*" && b === 48 ) {
  console.log('12 * 48 = 576')
} else
if (a === 12 && sign === "*" && b === 49 ) {
  console.log('12 * 49 = 588')
} else
if (a === 12 && sign === "*" && b === 50 ) {
  console.log('12 * 50 = 600')
} else
if (a === 13 && sign === "*" && b === 1 ) {
  console.log('13 * 1 = 13')
} else
if (a === 13 && sign === "*" && b === 2 ) {
  console.log('13 * 2 = 26')
} else
if (a === 13 && sign === "*" && b === 3 ) {
  console.log('13 * 3 = 39')
} else
if (a === 13 && sign === "*" && b === 4 ) {
  console.log('13 * 4 = 52')
} else
if (a === 13 && sign === "*" && b === 5 ) {
  console.log('13 * 5 = 65')
} else
if (a === 13 && sign === "*" && b === 6 ) {
  console.log('13 * 6 = 78')
} else
if (a === 13 && sign === "*" && b === 7 ) {
  console.log('13 * 7 = 91')
} else
if (a === 13 && sign === "*" && b === 8 ) {
  console.log('13 * 8 = 104')
} else
if (a === 13 && sign === "*" && b === 9 ) {
  console.log('13 * 9 = 117')
} else
if (a === 13 && sign === "*" && b === 10 ) {
  console.log('13 * 10 = 130')
} else
if (a === 13 && sign === "*" && b === 11 ) {
  console.log('13 * 11 = 143')
} else
if (a === 13 && sign === "*" && b === 12 ) {
  console.log('13 * 12 = 156')
} else
if (a === 13 && sign === "*" && b === 13 ) {
  console.log('13 * 13 = 169')
} else
if (a === 13 && sign === "*" && b === 14 ) {
  console.log('13 * 14 = 182')
} else
if (a === 13 && sign === "*" && b === 15 ) {
  console.log('13 * 15 = 195')
} else
if (a === 13 && sign === "*" && b === 16 ) {
  console.log('13 * 16 = 208')
} else
if (a === 13 && sign === "*" && b === 17 ) {
  console.log('13 * 17 = 221')
} else
if (a === 13 && sign === "*" && b === 18 ) {
  console.log('13 * 18 = 234')
} else
if (a === 13 && sign === "*" && b === 19 ) {
  console.log('13 * 19 = 247')
} else
if (a === 13 && sign === "*" && b === 20 ) {
  console.log('13 * 20 = 260')
} else
if (a === 13 && sign === "*" && b === 21 ) {
  console.log('13 * 21 = 273')
} else
if (a === 13 && sign === "*" && b === 22 ) {
  console.log('13 * 22 = 286')
} else
if (a === 13 && sign === "*" && b === 23 ) {
  console.log('13 * 23 = 299')
} else
if (a === 13 && sign === "*" && b === 24 ) {
  console.log('13 * 24 = 312')
} else
if (a === 13 && sign === "*" && b === 25 ) {
  console.log('13 * 25 = 325')
} else
if (a === 13 && sign === "*" && b === 26 ) {
  console.log('13 * 26 = 338')
} else
if (a === 13 && sign === "*" && b === 27 ) {
  console.log('13 * 27 = 351')
} else
if (a === 13 && sign === "*" && b === 28 ) {
  console.log('13 * 28 = 364')
} else
if (a === 13 && sign === "*" && b === 29 ) {
  console.log('13 * 29 = 377')
} else
if (a === 13 && sign === "*" && b === 30 ) {
  console.log('13 * 30 = 390')
} else
if (a === 13 && sign === "*" && b === 31 ) {
  console.log('13 * 31 = 403')
} else
if (a === 13 && sign === "*" && b === 32 ) {
  console.log('13 * 32 = 416')
} else
if (a === 13 && sign === "*" && b === 33 ) {
  console.log('13 * 33 = 429')
} else
if (a === 13 && sign === "*" && b === 34 ) {
  console.log('13 * 34 = 442')
} else
if (a === 13 && sign === "*" && b === 35 ) {
  console.log('13 * 35 = 455')
} else
if (a === 13 && sign === "*" && b === 36 ) {
  console.log('13 * 36 = 468')
} else
if (a === 13 && sign === "*" && b === 37 ) {
  console.log('13 * 37 = 481')
} else
if (a === 13 && sign === "*" && b === 38 ) {
  console.log('13 * 38 = 494')
} else
if (a === 13 && sign === "*" && b === 39 ) {
  console.log('13 * 39 = 507')
} else
if (a === 13 && sign === "*" && b === 40 ) {
  console.log('13 * 40 = 520')
} else
if (a === 13 && sign === "*" && b === 41 ) {
  console.log('13 * 41 = 533')
} else
if (a === 13 && sign === "*" && b === 42 ) {
  console.log('13 * 42 = 546')
} else
if (a === 13 && sign === "*" && b === 43 ) {
  console.log('13 * 43 = 559')
} else
if (a === 13 && sign === "*" && b === 44 ) {
  console.log('13 * 44 = 572')
} else
if (a === 13 && sign === "*" && b === 45 ) {
  console.log('13 * 45 = 585')
} else
if (a === 13 && sign === "*" && b === 46 ) {
  console.log('13 * 46 = 598')
} else
if (a === 13 && sign === "*" && b === 47 ) {
  console.log('13 * 47 = 611')
} else
if (a === 13 && sign === "*" && b === 48 ) {
  console.log('13 * 48 = 624')
} else
if (a === 13 && sign === "*" && b === 49 ) {
  console.log('13 * 49 = 637')
} else
if (a === 13 && sign === "*" && b === 50 ) {
  console.log('13 * 50 = 650')
} else
if (a === 14 && sign === "*" && b === 1 ) {
  console.log('14 * 1 = 14')
} else
if (a === 14 && sign === "*" && b === 2 ) {
  console.log('14 * 2 = 28')
} else
if (a === 14 && sign === "*" && b === 3 ) {
  console.log('14 * 3 = 42')
} else
if (a === 14 && sign === "*" && b === 4 ) {
  console.log('14 * 4 = 56')
} else
if (a === 14 && sign === "*" && b === 5 ) {
  console.log('14 * 5 = 70')
} else
if (a === 14 && sign === "*" && b === 6 ) {
  console.log('14 * 6 = 84')
} else
if (a === 14 && sign === "*" && b === 7 ) {
  console.log('14 * 7 = 98')
} else
if (a === 14 && sign === "*" && b === 8 ) {
  console.log('14 * 8 = 112')
} else
if (a === 14 && sign === "*" && b === 9 ) {
  console.log('14 * 9 = 126')
} else
if (a === 14 && sign === "*" && b === 10 ) {
  console.log('14 * 10 = 140')
} else
if (a === 14 && sign === "*" && b === 11 ) {
  console.log('14 * 11 = 154')
} else
if (a === 14 && sign === "*" && b === 12 ) {
  console.log('14 * 12 = 168')
} else
if (a === 14 && sign === "*" && b === 13 ) {
  console.log('14 * 13 = 182')
} else
if (a === 14 && sign === "*" && b === 14 ) {
  console.log('14 * 14 = 196')
} else
if (a === 14 && sign === "*" && b === 15 ) {
  console.log('14 * 15 = 210')
} else
if (a === 14 && sign === "*" && b === 16 ) {
  console.log('14 * 16 = 224')
} else
if (a === 14 && sign === "*" && b === 17 ) {
  console.log('14 * 17 = 238')
} else
if (a === 14 && sign === "*" && b === 18 ) {
  console.log('14 * 18 = 252')
} else
if (a === 14 && sign === "*" && b === 19 ) {
  console.log('14 * 19 = 266')
} else
if (a === 14 && sign === "*" && b === 20 ) {
  console.log('14 * 20 = 280')
} else
if (a === 14 && sign === "*" && b === 21 ) {
  console.log('14 * 21 = 294')
} else
if (a === 14 && sign === "*" && b === 22 ) {
  console.log('14 * 22 = 308')
} else
if (a === 14 && sign === "*" && b === 23 ) {
  console.log('14 * 23 = 322')
} else
if (a === 14 && sign === "*" && b === 24 ) {
  console.log('14 * 24 = 336')
} else
if (a === 14 && sign === "*" && b === 25 ) {
  console.log('14 * 25 = 350')
} else
if (a === 14 && sign === "*" && b === 26 ) {
  console.log('14 * 26 = 364')
} else
if (a === 14 && sign === "*" && b === 27 ) {
  console.log('14 * 27 = 378')
} else
if (a === 14 && sign === "*" && b === 28 ) {
  console.log('14 * 28 = 392')
} else
if (a === 14 && sign === "*" && b === 29 ) {
  console.log('14 * 29 = 406')
} else
if (a === 14 && sign === "*" && b === 30 ) {
  console.log('14 * 30 = 420')
} else
if (a === 14 && sign === "*" && b === 31 ) {
  console.log('14 * 31 = 434')
} else
if (a === 14 && sign === "*" && b === 32 ) {
  console.log('14 * 32 = 448')
} else
if (a === 14 && sign === "*" && b === 33 ) {
  console.log('14 * 33 = 462')
} else
if (a === 14 && sign === "*" && b === 34 ) {
  console.log('14 * 34 = 476')
} else
if (a === 14 && sign === "*" && b === 35 ) {
  console.log('14 * 35 = 490')
} else
if (a === 14 && sign === "*" && b === 36 ) {
  console.log('14 * 36 = 504')
} else
if (a === 14 && sign === "*" && b === 37 ) {
  console.log('14 * 37 = 518')
} else
if (a === 14 && sign === "*" && b === 38 ) {
  console.log('14 * 38 = 532')
} else
if (a === 14 && sign === "*" && b === 39 ) {
  console.log('14 * 39 = 546')
} else
if (a === 14 && sign === "*" && b === 40 ) {
  console.log('14 * 40 = 560')
} else
if (a === 14 && sign === "*" && b === 41 ) {
  console.log('14 * 41 = 574')
} else
if (a === 14 && sign === "*" && b === 42 ) {
  console.log('14 * 42 = 588')
} else
if (a === 14 && sign === "*" && b === 43 ) {
  console.log('14 * 43 = 602')
} else
if (a === 14 && sign === "*" && b === 44 ) {
  console.log('14 * 44 = 616')
} else
if (a === 14 && sign === "*" && b === 45 ) {
  console.log('14 * 45 = 630')
} else
if (a === 14 && sign === "*" && b === 46 ) {
  console.log('14 * 46 = 644')
} else
if (a === 14 && sign === "*" && b === 47 ) {
  console.log('14 * 47 = 658')
} else
if (a === 14 && sign === "*" && b === 48 ) {
  console.log('14 * 48 = 672')
} else
if (a === 14 && sign === "*" && b === 49 ) {
  console.log('14 * 49 = 686')
} else
if (a === 14 && sign === "*" && b === 50 ) {
  console.log('14 * 50 = 700')
} else
if (a === 15 && sign === "*" && b === 1 ) {
  console.log('15 * 1 = 15')
} else
if (a === 15 && sign === "*" && b === 2 ) {
  console.log('15 * 2 = 30')
} else
if (a === 15 && sign === "*" && b === 3 ) {
  console.log('15 * 3 = 45')
} else
if (a === 15 && sign === "*" && b === 4 ) {
  console.log('15 * 4 = 60')
} else
if (a === 15 && sign === "*" && b === 5 ) {
  console.log('15 * 5 = 75')
} else
if (a === 15 && sign === "*" && b === 6 ) {
  console.log('15 * 6 = 90')
} else
if (a === 15 && sign === "*" && b === 7 ) {
  console.log('15 * 7 = 105')
} else
if (a === 15 && sign === "*" && b === 8 ) {
  console.log('15 * 8 = 120')
} else
if (a === 15 && sign === "*" && b === 9 ) {
  console.log('15 * 9 = 135')
} else
if (a === 15 && sign === "*" && b === 10 ) {
  console.log('15 * 10 = 150')
} else
if (a === 15 && sign === "*" && b === 11 ) {
  console.log('15 * 11 = 165')
} else
if (a === 15 && sign === "*" && b === 12 ) {
  console.log('15 * 12 = 180')
} else
if (a === 15 && sign === "*" && b === 13 ) {
  console.log('15 * 13 = 195')
} else
if (a === 15 && sign === "*" && b === 14 ) {
  console.log('15 * 14 = 210')
} else
if (a === 15 && sign === "*" && b === 15 ) {
  console.log('15 * 15 = 225')
} else
if (a === 15 && sign === "*" && b === 16 ) {
  console.log('15 * 16 = 240')
} else
if (a === 15 && sign === "*" && b === 17 ) {
  console.log('15 * 17 = 255')
} else
if (a === 15 && sign === "*" && b === 18 ) {
  console.log('15 * 18 = 270')
} else
if (a === 15 && sign === "*" && b === 19 ) {
  console.log('15 * 19 = 285')
} else
if (a === 15 && sign === "*" && b === 20 ) {
  console.log('15 * 20 = 300')
} else
if (a === 15 && sign === "*" && b === 21 ) {
  console.log('15 * 21 = 315')
} else
if (a === 15 && sign === "*" && b === 22 ) {
  console.log('15 * 22 = 330')
} else
if (a === 15 && sign === "*" && b === 23 ) {
  console.log('15 * 23 = 345')
} else
if (a === 15 && sign === "*" && b === 24 ) {
  console.log('15 * 24 = 360')
} else
if (a === 15 && sign === "*" && b === 25 ) {
  console.log('15 * 25 = 375')
} else
if (a === 15 && sign === "*" && b === 26 ) {
  console.log('15 * 26 = 390')
} else
if (a === 15 && sign === "*" && b === 27 ) {
  console.log('15 * 27 = 405')
} else
if (a === 15 && sign === "*" && b === 28 ) {
  console.log('15 * 28 = 420')
} else
if (a === 15 && sign === "*" && b === 29 ) {
  console.log('15 * 29 = 435')
} else
if (a === 15 && sign === "*" && b === 30 ) {
  console.log('15 * 30 = 450')
} else
if (a === 15 && sign === "*" && b === 31 ) {
  console.log('15 * 31 = 465')
} else
if (a === 15 && sign === "*" && b === 32 ) {
  console.log('15 * 32 = 480')
} else
if (a === 15 && sign === "*" && b === 33 ) {
  console.log('15 * 33 = 495')
} else
if (a === 15 && sign === "*" && b === 34 ) {
  console.log('15 * 34 = 510')
} else
if (a === 15 && sign === "*" && b === 35 ) {
  console.log('15 * 35 = 525')
} else
if (a === 15 && sign === "*" && b === 36 ) {
  console.log('15 * 36 = 540')
} else
if (a === 15 && sign === "*" && b === 37 ) {
  console.log('15 * 37 = 555')
} else
if (a === 15 && sign === "*" && b === 38 ) {
  console.log('15 * 38 = 570')
} else
if (a === 15 && sign === "*" && b === 39 ) {
  console.log('15 * 39 = 585')
} else
if (a === 15 && sign === "*" && b === 40 ) {
  console.log('15 * 40 = 600')
} else
if (a === 15 && sign === "*" && b === 41 ) {
  console.log('15 * 41 = 615')
} else
if (a === 15 && sign === "*" && b === 42 ) {
  console.log('15 * 42 = 630')
} else
if (a === 15 && sign === "*" && b === 43 ) {
  console.log('15 * 43 = 645')
} else
if (a === 15 && sign === "*" && b === 44 ) {
  console.log('15 * 44 = 660')
} else
if (a === 15 && sign === "*" && b === 45 ) {
  console.log('15 * 45 = 675')
} else
if (a === 15 && sign === "*" && b === 46 ) {
  console.log('15 * 46 = 690')
} else
if (a === 15 && sign === "*" && b === 47 ) {
  console.log('15 * 47 = 705')
} else
if (a === 15 && sign === "*" && b === 48 ) {
  console.log('15 * 48 = 720')
} else
if (a === 15 && sign === "*" && b === 49 ) {
  console.log('15 * 49 = 735')
} else
if (a === 15 && sign === "*" && b === 50 ) {
  console.log('15 * 50 = 750')
} else
if (a === 16 && sign === "*" && b === 1 ) {
  console.log('16 * 1 = 16')
} else
if (a === 16 && sign === "*" && b === 2 ) {
  console.log('16 * 2 = 32')
} else
if (a === 16 && sign === "*" && b === 3 ) {
  console.log('16 * 3 = 48')
} else
if (a === 16 && sign === "*" && b === 4 ) {
  console.log('16 * 4 = 64')
} else
if (a === 16 && sign === "*" && b === 5 ) {
  console.log('16 * 5 = 80')
} else
if (a === 16 && sign === "*" && b === 6 ) {
  console.log('16 * 6 = 96')
} else
if (a === 16 && sign === "*" && b === 7 ) {
  console.log('16 * 7 = 112')
} else
if (a === 16 && sign === "*" && b === 8 ) {
  console.log('16 * 8 = 128')
} else
if (a === 16 && sign === "*" && b === 9 ) {
  console.log('16 * 9 = 144')
} else
if (a === 16 && sign === "*" && b === 10 ) {
  console.log('16 * 10 = 160')
} else
if (a === 16 && sign === "*" && b === 11 ) {
  console.log('16 * 11 = 176')
} else
if (a === 16 && sign === "*" && b === 12 ) {
  console.log('16 * 12 = 192')
} else
if (a === 16 && sign === "*" && b === 13 ) {
  console.log('16 * 13 = 208')
} else
if (a === 16 && sign === "*" && b === 14 ) {
  console.log('16 * 14 = 224')
} else
if (a === 16 && sign === "*" && b === 15 ) {
  console.log('16 * 15 = 240')
} else
if (a === 16 && sign === "*" && b === 16 ) {
  console.log('16 * 16 = 256')
} else
if (a === 16 && sign === "*" && b === 17 ) {
  console.log('16 * 17 = 272')
} else
if (a === 16 && sign === "*" && b === 18 ) {
  console.log('16 * 18 = 288')
} else
if (a === 16 && sign === "*" && b === 19 ) {
  console.log('16 * 19 = 304')
} else
if (a === 16 && sign === "*" && b === 20 ) {
  console.log('16 * 20 = 320')
} else
if (a === 16 && sign === "*" && b === 21 ) {
  console.log('16 * 21 = 336')
} else
if (a === 16 && sign === "*" && b === 22 ) {
  console.log('16 * 22 = 352')
} else
if (a === 16 && sign === "*" && b === 23 ) {
  console.log('16 * 23 = 368')
} else
if (a === 16 && sign === "*" && b === 24 ) {
  console.log('16 * 24 = 384')
} else
if (a === 16 && sign === "*" && b === 25 ) {
  console.log('16 * 25 = 400')
} else
if (a === 16 && sign === "*" && b === 26 ) {
  console.log('16 * 26 = 416')
} else
if (a === 16 && sign === "*" && b === 27 ) {
  console.log('16 * 27 = 432')
} else
if (a === 16 && sign === "*" && b === 28 ) {
  console.log('16 * 28 = 448')
} else
if (a === 16 && sign === "*" && b === 29 ) {
  console.log('16 * 29 = 464')
} else
if (a === 16 && sign === "*" && b === 30 ) {
  console.log('16 * 30 = 480')
} else
if (a === 16 && sign === "*" && b === 31 ) {
  console.log('16 * 31 = 496')
} else
if (a === 16 && sign === "*" && b === 32 ) {
  console.log('16 * 32 = 512')
} else
if (a === 16 && sign === "*" && b === 33 ) {
  console.log('16 * 33 = 528')
} else
if (a === 16 && sign === "*" && b === 34 ) {
  console.log('16 * 34 = 544')
} else
if (a === 16 && sign === "*" && b === 35 ) {
  console.log('16 * 35 = 560')
} else
if (a === 16 && sign === "*" && b === 36 ) {
  console.log('16 * 36 = 576')
} else
if (a === 16 && sign === "*" && b === 37 ) {
  console.log('16 * 37 = 592')
} else
if (a === 16 && sign === "*" && b === 38 ) {
  console.log('16 * 38 = 608')
} else
if (a === 16 && sign === "*" && b === 39 ) {
  console.log('16 * 39 = 624')
} else
if (a === 16 && sign === "*" && b === 40 ) {
  console.log('16 * 40 = 640')
} else
if (a === 16 && sign === "*" && b === 41 ) {
  console.log('16 * 41 = 656')
} else
if (a === 16 && sign === "*" && b === 42 ) {
  console.log('16 * 42 = 672')
} else
if (a === 16 && sign === "*" && b === 43 ) {
  console.log('16 * 43 = 688')
} else
if (a === 16 && sign === "*" && b === 44 ) {
  console.log('16 * 44 = 704')
} else
if (a === 16 && sign === "*" && b === 45 ) {
  console.log('16 * 45 = 720')
} else
if (a === 16 && sign === "*" && b === 46 ) {
  console.log('16 * 46 = 736')
} else
if (a === 16 && sign === "*" && b === 47 ) {
  console.log('16 * 47 = 752')
} else
if (a === 16 && sign === "*" && b === 48 ) {
  console.log('16 * 48 = 768')
} else
if (a === 16 && sign === "*" && b === 49 ) {
  console.log('16 * 49 = 784')
} else
if (a === 16 && sign === "*" && b === 50 ) {
  console.log('16 * 50 = 800')
} else
if (a === 17 && sign === "*" && b === 1 ) {
  console.log('17 * 1 = 17')
} else
if (a === 17 && sign === "*" && b === 2 ) {
  console.log('17 * 2 = 34')
} else
if (a === 17 && sign === "*" && b === 3 ) {
  console.log('17 * 3 = 51')
} else
if (a === 17 && sign === "*" && b === 4 ) {
  console.log('17 * 4 = 68')
} else
if (a === 17 && sign === "*" && b === 5 ) {
  console.log('17 * 5 = 85')
} else
if (a === 17 && sign === "*" && b === 6 ) {
  console.log('17 * 6 = 102')
} else
if (a === 17 && sign === "*" && b === 7 ) {
  console.log('17 * 7 = 119')
} else
if (a === 17 && sign === "*" && b === 8 ) {
  console.log('17 * 8 = 136')
} else
if (a === 17 && sign === "*" && b === 9 ) {
  console.log('17 * 9 = 153')
} else
if (a === 17 && sign === "*" && b === 10 ) {
  console.log('17 * 10 = 170')
} else
if (a === 17 && sign === "*" && b === 11 ) {
  console.log('17 * 11 = 187')
} else
if (a === 17 && sign === "*" && b === 12 ) {
  console.log('17 * 12 = 204')
} else
if (a === 17 && sign === "*" && b === 13 ) {
  console.log('17 * 13 = 221')
} else
if (a === 17 && sign === "*" && b === 14 ) {
  console.log('17 * 14 = 238')
} else
if (a === 17 && sign === "*" && b === 15 ) {
  console.log('17 * 15 = 255')
} else
if (a === 17 && sign === "*" && b === 16 ) {
  console.log('17 * 16 = 272')
} else
if (a === 17 && sign === "*" && b === 17 ) {
  console.log('17 * 17 = 289')
} else
if (a === 17 && sign === "*" && b === 18 ) {
  console.log('17 * 18 = 306')
} else
if (a === 17 && sign === "*" && b === 19 ) {
  console.log('17 * 19 = 323')
} else
if (a === 17 && sign === "*" && b === 20 ) {
  console.log('17 * 20 = 340')
} else
if (a === 17 && sign === "*" && b === 21 ) {
  console.log('17 * 21 = 357')
} else
if (a === 17 && sign === "*" && b === 22 ) {
  console.log('17 * 22 = 374')
} else
if (a === 17 && sign === "*" && b === 23 ) {
  console.log('17 * 23 = 391')
} else
if (a === 17 && sign === "*" && b === 24 ) {
  console.log('17 * 24 = 408')
} else
if (a === 17 && sign === "*" && b === 25 ) {
  console.log('17 * 25 = 425')
} else
if (a === 17 && sign === "*" && b === 26 ) {
  console.log('17 * 26 = 442')
} else
if (a === 17 && sign === "*" && b === 27 ) {
  console.log('17 * 27 = 459')
} else
if (a === 17 && sign === "*" && b === 28 ) {
  console.log('17 * 28 = 476')
} else
if (a === 17 && sign === "*" && b === 29 ) {
  console.log('17 * 29 = 493')
} else
if (a === 17 && sign === "*" && b === 30 ) {
  console.log('17 * 30 = 510')
} else
if (a === 17 && sign === "*" && b === 31 ) {
  console.log('17 * 31 = 527')
} else
if (a === 17 && sign === "*" && b === 32 ) {
  console.log('17 * 32 = 544')
} else
if (a === 17 && sign === "*" && b === 33 ) {
  console.log('17 * 33 = 561')
} else
if (a === 17 && sign === "*" && b === 34 ) {
  console.log('17 * 34 = 578')
} else
if (a === 17 && sign === "*" && b === 35 ) {
  console.log('17 * 35 = 595')
} else
if (a === 17 && sign === "*" && b === 36 ) {
  console.log('17 * 36 = 612')
} else
if (a === 17 && sign === "*" && b === 37 ) {
  console.log('17 * 37 = 629')
} else
if (a === 17 && sign === "*" && b === 38 ) {
  console.log('17 * 38 = 646')
} else
if (a === 17 && sign === "*" && b === 39 ) {
  console.log('17 * 39 = 663')
} else
if (a === 17 && sign === "*" && b === 40 ) {
  console.log('17 * 40 = 680')
} else
if (a === 17 && sign === "*" && b === 41 ) {
  console.log('17 * 41 = 697')
} else
if (a === 17 && sign === "*" && b === 42 ) {
  console.log('17 * 42 = 714')
} else
if (a === 17 && sign === "*" && b === 43 ) {
  console.log('17 * 43 = 731')
} else
if (a === 17 && sign === "*" && b === 44 ) {
  console.log('17 * 44 = 748')
} else
if (a === 17 && sign === "*" && b === 45 ) {
  console.log('17 * 45 = 765')
} else
if (a === 17 && sign === "*" && b === 46 ) {
  console.log('17 * 46 = 782')
} else
if (a === 17 && sign === "*" && b === 47 ) {
  console.log('17 * 47 = 799')
} else
if (a === 17 && sign === "*" && b === 48 ) {
  console.log('17 * 48 = 816')
} else
if (a === 17 && sign === "*" && b === 49 ) {
  console.log('17 * 49 = 833')
} else
if (a === 17 && sign === "*" && b === 50 ) {
  console.log('17 * 50 = 850')
} else
if (a === 18 && sign === "*" && b === 1 ) {
  console.log('18 * 1 = 18')
} else
if (a === 18 && sign === "*" && b === 2 ) {
  console.log('18 * 2 = 36')
} else
if (a === 18 && sign === "*" && b === 3 ) {
  console.log('18 * 3 = 54')
} else
if (a === 18 && sign === "*" && b === 4 ) {
  console.log('18 * 4 = 72')
} else
if (a === 18 && sign === "*" && b === 5 ) {
  console.log('18 * 5 = 90')
} else
if (a === 18 && sign === "*" && b === 6 ) {
  console.log('18 * 6 = 108')
} else
if (a === 18 && sign === "*" && b === 7 ) {
  console.log('18 * 7 = 126')
} else
if (a === 18 && sign === "*" && b === 8 ) {
  console.log('18 * 8 = 144')
} else
if (a === 18 && sign === "*" && b === 9 ) {
  console.log('18 * 9 = 162')
} else
if (a === 18 && sign === "*" && b === 10 ) {
  console.log('18 * 10 = 180')
} else
if (a === 18 && sign === "*" && b === 11 ) {
  console.log('18 * 11 = 198')
} else
if (a === 18 && sign === "*" && b === 12 ) {
  console.log('18 * 12 = 216')
} else
if (a === 18 && sign === "*" && b === 13 ) {
  console.log('18 * 13 = 234')
} else
if (a === 18 && sign === "*" && b === 14 ) {
  console.log('18 * 14 = 252')
} else
if (a === 18 && sign === "*" && b === 15 ) {
  console.log('18 * 15 = 270')
} else
if (a === 18 && sign === "*" && b === 16 ) {
  console.log('18 * 16 = 288')
} else
if (a === 18 && sign === "*" && b === 17 ) {
  console.log('18 * 17 = 306')
} else
if (a === 18 && sign === "*" && b === 18 ) {
  console.log('18 * 18 = 324')
} else
if (a === 18 && sign === "*" && b === 19 ) {
  console.log('18 * 19 = 342')
} else
if (a === 18 && sign === "*" && b === 20 ) {
  console.log('18 * 20 = 360')
} else
if (a === 18 && sign === "*" && b === 21 ) {
  console.log('18 * 21 = 378')
} else
if (a === 18 && sign === "*" && b === 22 ) {
  console.log('18 * 22 = 396')
} else
if (a === 18 && sign === "*" && b === 23 ) {
  console.log('18 * 23 = 414')
} else
if (a === 18 && sign === "*" && b === 24 ) {
  console.log('18 * 24 = 432')
} else
if (a === 18 && sign === "*" && b === 25 ) {
  console.log('18 * 25 = 450')
} else
if (a === 18 && sign === "*" && b === 26 ) {
  console.log('18 * 26 = 468')
} else
if (a === 18 && sign === "*" && b === 27 ) {
  console.log('18 * 27 = 486')
} else
if (a === 18 && sign === "*" && b === 28 ) {
  console.log('18 * 28 = 504')
} else
if (a === 18 && sign === "*" && b === 29 ) {
  console.log('18 * 29 = 522')
} else
if (a === 18 && sign === "*" && b === 30 ) {
  console.log('18 * 30 = 540')
} else
if (a === 18 && sign === "*" && b === 31 ) {
  console.log('18 * 31 = 558')
} else
if (a === 18 && sign === "*" && b === 32 ) {
  console.log('18 * 32 = 576')
} else
if (a === 18 && sign === "*" && b === 33 ) {
  console.log('18 * 33 = 594')
} else
if (a === 18 && sign === "*" && b === 34 ) {
  console.log('18 * 34 = 612')
} else
if (a === 18 && sign === "*" && b === 35 ) {
  console.log('18 * 35 = 630')
} else
if (a === 18 && sign === "*" && b === 36 ) {
  console.log('18 * 36 = 648')
} else
if (a === 18 && sign === "*" && b === 37 ) {
  console.log('18 * 37 = 666')
} else
if (a === 18 && sign === "*" && b === 38 ) {
  console.log('18 * 38 = 684')
} else
if (a === 18 && sign === "*" && b === 39 ) {
  console.log('18 * 39 = 702')
} else
if (a === 18 && sign === "*" && b === 40 ) {
  console.log('18 * 40 = 720')
} else
if (a === 18 && sign === "*" && b === 41 ) {
  console.log('18 * 41 = 738')
} else
if (a === 18 && sign === "*" && b === 42 ) {
  console.log('18 * 42 = 756')
} else
if (a === 18 && sign === "*" && b === 43 ) {
  console.log('18 * 43 = 774')
} else
if (a === 18 && sign === "*" && b === 44 ) {
  console.log('18 * 44 = 792')
} else
if (a === 18 && sign === "*" && b === 45 ) {
  console.log('18 * 45 = 810')
} else
if (a === 18 && sign === "*" && b === 46 ) {
  console.log('18 * 46 = 828')
} else
if (a === 18 && sign === "*" && b === 47 ) {
  console.log('18 * 47 = 846')
} else
if (a === 18 && sign === "*" && b === 48 ) {
  console.log('18 * 48 = 864')
} else
if (a === 18 && sign === "*" && b === 49 ) {
  console.log('18 * 49 = 882')
} else
if (a === 18 && sign === "*" && b === 50 ) {
  console.log('18 * 50 = 900')
} else
if (a === 19 && sign === "*" && b === 1 ) {
  console.log('19 * 1 = 19')
} else
if (a === 19 && sign === "*" && b === 2 ) {
  console.log('19 * 2 = 38')
} else
if (a === 19 && sign === "*" && b === 3 ) {
  console.log('19 * 3 = 57')
} else
if (a === 19 && sign === "*" && b === 4 ) {
  console.log('19 * 4 = 76')
} else
if (a === 19 && sign === "*" && b === 5 ) {
  console.log('19 * 5 = 95')
} else
if (a === 19 && sign === "*" && b === 6 ) {
  console.log('19 * 6 = 114')
} else
if (a === 19 && sign === "*" && b === 7 ) {
  console.log('19 * 7 = 133')
} else
if (a === 19 && sign === "*" && b === 8 ) {
  console.log('19 * 8 = 152')
} else
if (a === 19 && sign === "*" && b === 9 ) {
  console.log('19 * 9 = 171')
} else
if (a === 19 && sign === "*" && b === 10 ) {
  console.log('19 * 10 = 190')
} else
if (a === 19 && sign === "*" && b === 11 ) {
  console.log('19 * 11 = 209')
} else
if (a === 19 && sign === "*" && b === 12 ) {
  console.log('19 * 12 = 228')
} else
if (a === 19 && sign === "*" && b === 13 ) {
  console.log('19 * 13 = 247')
} else
if (a === 19 && sign === "*" && b === 14 ) {
  console.log('19 * 14 = 266')
} else
if (a === 19 && sign === "*" && b === 15 ) {
  console.log('19 * 15 = 285')
} else
if (a === 19 && sign === "*" && b === 16 ) {
  console.log('19 * 16 = 304')
} else
if (a === 19 && sign === "*" && b === 17 ) {
  console.log('19 * 17 = 323')
} else
if (a === 19 && sign === "*" && b === 18 ) {
  console.log('19 * 18 = 342')
} else
if (a === 19 && sign === "*" && b === 19 ) {
  console.log('19 * 19 = 361')
} else
if (a === 19 && sign === "*" && b === 20 ) {
  console.log('19 * 20 = 380')
} else
if (a === 19 && sign === "*" && b === 21 ) {
  console.log('19 * 21 = 399')
} else
if (a === 19 && sign === "*" && b === 22 ) {
  console.log('19 * 22 = 418')
} else
if (a === 19 && sign === "*" && b === 23 ) {
  console.log('19 * 23 = 437')
} else
if (a === 19 && sign === "*" && b === 24 ) {
  console.log('19 * 24 = 456')
} else
if (a === 19 && sign === "*" && b === 25 ) {
  console.log('19 * 25 = 475')
} else
if (a === 19 && sign === "*" && b === 26 ) {
  console.log('19 * 26 = 494')
} else
if (a === 19 && sign === "*" && b === 27 ) {
  console.log('19 * 27 = 513')
} else
if (a === 19 && sign === "*" && b === 28 ) {
  console.log('19 * 28 = 532')
} else
if (a === 19 && sign === "*" && b === 29 ) {
  console.log('19 * 29 = 551')
} else
if (a === 19 && sign === "*" && b === 30 ) {
  console.log('19 * 30 = 570')
} else
if (a === 19 && sign === "*" && b === 31 ) {
  console.log('19 * 31 = 589')
} else
if (a === 19 && sign === "*" && b === 32 ) {
  console.log('19 * 32 = 608')
} else
if (a === 19 && sign === "*" && b === 33 ) {
  console.log('19 * 33 = 627')
} else
if (a === 19 && sign === "*" && b === 34 ) {
  console.log('19 * 34 = 646')
} else
if (a === 19 && sign === "*" && b === 35 ) {
  console.log('19 * 35 = 665')
} else
if (a === 19 && sign === "*" && b === 36 ) {
  console.log('19 * 36 = 684')
} else
if (a === 19 && sign === "*" && b === 37 ) {
  console.log('19 * 37 = 703')
} else
if (a === 19 && sign === "*" && b === 38 ) {
  console.log('19 * 38 = 722')
} else
if (a === 19 && sign === "*" && b === 39 ) {
  console.log('19 * 39 = 741')
} else
if (a === 19 && sign === "*" && b === 40 ) {
  console.log('19 * 40 = 760')
} else
if (a === 19 && sign === "*" && b === 41 ) {
  console.log('19 * 41 = 779')
} else
if (a === 19 && sign === "*" && b === 42 ) {
  console.log('19 * 42 = 798')
} else
if (a === 19 && sign === "*" && b === 43 ) {
  console.log('19 * 43 = 817')
} else
if (a === 19 && sign === "*" && b === 44 ) {
  console.log('19 * 44 = 836')
} else
if (a === 19 && sign === "*" && b === 45 ) {
  console.log('19 * 45 = 855')
} else
if (a === 19 && sign === "*" && b === 46 ) {
  console.log('19 * 46 = 874')
} else
if (a === 19 && sign === "*" && b === 47 ) {
  console.log('19 * 47 = 893')
} else
if (a === 19 && sign === "*" && b === 48 ) {
  console.log('19 * 48 = 912')
} else
if (a === 19 && sign === "*" && b === 49 ) {
  console.log('19 * 49 = 931')
} else
if (a === 19 && sign === "*" && b === 50 ) {
  console.log('19 * 50 = 950')
} else
if (a === 20 && sign === "*" && b === 1 ) {
  console.log('20 * 1 = 20')
} else
if (a === 20 && sign === "*" && b === 2 ) {
  console.log('20 * 2 = 40')
} else
if (a === 20 && sign === "*" && b === 3 ) {
  console.log('20 * 3 = 60')
} else
if (a === 20 && sign === "*" && b === 4 ) {
  console.log('20 * 4 = 80')
} else
if (a === 20 && sign === "*" && b === 5 ) {
  console.log('20 * 5 = 100')
} else
if (a === 20 && sign === "*" && b === 6 ) {
  console.log('20 * 6 = 120')
} else
if (a === 20 && sign === "*" && b === 7 ) {
  console.log('20 * 7 = 140')
} else
if (a === 20 && sign === "*" && b === 8 ) {
  console.log('20 * 8 = 160')
} else
if (a === 20 && sign === "*" && b === 9 ) {
  console.log('20 * 9 = 180')
} else
if (a === 20 && sign === "*" && b === 10 ) {
  console.log('20 * 10 = 200')
} else
if (a === 20 && sign === "*" && b === 11 ) {
  console.log('20 * 11 = 220')
} else
if (a === 20 && sign === "*" && b === 12 ) {
  console.log('20 * 12 = 240')
} else
if (a === 20 && sign === "*" && b === 13 ) {
  console.log('20 * 13 = 260')
} else
if (a === 20 && sign === "*" && b === 14 ) {
  console.log('20 * 14 = 280')
} else
if (a === 20 && sign === "*" && b === 15 ) {
  console.log('20 * 15 = 300')
} else
if (a === 20 && sign === "*" && b === 16 ) {
  console.log('20 * 16 = 320')
} else
if (a === 20 && sign === "*" && b === 17 ) {
  console.log('20 * 17 = 340')
} else
if (a === 20 && sign === "*" && b === 18 ) {
  console.log('20 * 18 = 360')
} else
if (a === 20 && sign === "*" && b === 19 ) {
  console.log('20 * 19 = 380')
} else
if (a === 20 && sign === "*" && b === 20 ) {
  console.log('20 * 20 = 400')
} else
if (a === 20 && sign === "*" && b === 21 ) {
  console.log('20 * 21 = 420')
} else
if (a === 20 && sign === "*" && b === 22 ) {
  console.log('20 * 22 = 440')
} else
if (a === 20 && sign === "*" && b === 23 ) {
  console.log('20 * 23 = 460')
} else
if (a === 20 && sign === "*" && b === 24 ) {
  console.log('20 * 24 = 480')
} else
if (a === 20 && sign === "*" && b === 25 ) {
  console.log('20 * 25 = 500')
} else
if (a === 20 && sign === "*" && b === 26 ) {
  console.log('20 * 26 = 520')
} else
if (a === 20 && sign === "*" && b === 27 ) {
  console.log('20 * 27 = 540')
} else
if (a === 20 && sign === "*" && b === 28 ) {
  console.log('20 * 28 = 560')
} else
if (a === 20 && sign === "*" && b === 29 ) {
  console.log('20 * 29 = 580')
} else
if (a === 20 && sign === "*" && b === 30 ) {
  console.log('20 * 30 = 600')
} else
if (a === 20 && sign === "*" && b === 31 ) {
  console.log('20 * 31 = 620')
} else
if (a === 20 && sign === "*" && b === 32 ) {
  console.log('20 * 32 = 640')
} else
if (a === 20 && sign === "*" && b === 33 ) {
  console.log('20 * 33 = 660')
} else
if (a === 20 && sign === "*" && b === 34 ) {
  console.log('20 * 34 = 680')
} else
if (a === 20 && sign === "*" && b === 35 ) {
  console.log('20 * 35 = 700')
} else
if (a === 20 && sign === "*" && b === 36 ) {
  console.log('20 * 36 = 720')
} else
if (a === 20 && sign === "*" && b === 37 ) {
  console.log('20 * 37 = 740')
} else
if (a === 20 && sign === "*" && b === 38 ) {
  console.log('20 * 38 = 760')
} else
if (a === 20 && sign === "*" && b === 39 ) {
  console.log('20 * 39 = 780')
} else
if (a === 20 && sign === "*" && b === 40 ) {
  console.log('20 * 40 = 800')
} else
if (a === 20 && sign === "*" && b === 41 ) {
  console.log('20 * 41 = 820')
} else
if (a === 20 && sign === "*" && b === 42 ) {
  console.log('20 * 42 = 840')
} else
if (a === 20 && sign === "*" && b === 43 ) {
  console.log('20 * 43 = 860')
} else
if (a === 20 && sign === "*" && b === 44 ) {
  console.log('20 * 44 = 880')
} else
if (a === 20 && sign === "*" && b === 45 ) {
  console.log('20 * 45 = 900')
} else
if (a === 20 && sign === "*" && b === 46 ) {
  console.log('20 * 46 = 920')
} else
if (a === 20 && sign === "*" && b === 47 ) {
  console.log('20 * 47 = 940')
} else
if (a === 20 && sign === "*" && b === 48 ) {
  console.log('20 * 48 = 960')
} else
if (a === 20 && sign === "*" && b === 49 ) {
  console.log('20 * 49 = 980')
} else
if (a === 20 && sign === "*" && b === 50 ) {
  console.log('20 * 50 = 1000')
} else
if (a === 21 && sign === "*" && b === 1 ) {
  console.log('21 * 1 = 21')
} else
if (a === 21 && sign === "*" && b === 2 ) {
  console.log('21 * 2 = 42')
} else
if (a === 21 && sign === "*" && b === 3 ) {
  console.log('21 * 3 = 63')
} else
if (a === 21 && sign === "*" && b === 4 ) {
  console.log('21 * 4 = 84')
} else
if (a === 21 && sign === "*" && b === 5 ) {
  console.log('21 * 5 = 105')
} else
if (a === 21 && sign === "*" && b === 6 ) {
  console.log('21 * 6 = 126')
} else
if (a === 21 && sign === "*" && b === 7 ) {
  console.log('21 * 7 = 147')
} else
if (a === 21 && sign === "*" && b === 8 ) {
  console.log('21 * 8 = 168')
} else
if (a === 21 && sign === "*" && b === 9 ) {
  console.log('21 * 9 = 189')
} else
if (a === 21 && sign === "*" && b === 10 ) {
  console.log('21 * 10 = 210')
} else
if (a === 21 && sign === "*" && b === 11 ) {
  console.log('21 * 11 = 231')
} else
if (a === 21 && sign === "*" && b === 12 ) {
  console.log('21 * 12 = 252')
} else
if (a === 21 && sign === "*" && b === 13 ) {
  console.log('21 * 13 = 273')
} else
if (a === 21 && sign === "*" && b === 14 ) {
  console.log('21 * 14 = 294')
} else
if (a === 21 && sign === "*" && b === 15 ) {
  console.log('21 * 15 = 315')
} else
if (a === 21 && sign === "*" && b === 16 ) {
  console.log('21 * 16 = 336')
} else
if (a === 21 && sign === "*" && b === 17 ) {
  console.log('21 * 17 = 357')
} else
if (a === 21 && sign === "*" && b === 18 ) {
  console.log('21 * 18 = 378')
} else
if (a === 21 && sign === "*" && b === 19 ) {
  console.log('21 * 19 = 399')
} else
if (a === 21 && sign === "*" && b === 20 ) {
  console.log('21 * 20 = 420')
} else
if (a === 21 && sign === "*" && b === 21 ) {
  console.log('21 * 21 = 441')
} else
if (a === 21 && sign === "*" && b === 22 ) {
  console.log('21 * 22 = 462')
} else
if (a === 21 && sign === "*" && b === 23 ) {
  console.log('21 * 23 = 483')
} else
if (a === 21 && sign === "*" && b === 24 ) {
  console.log('21 * 24 = 504')
} else
if (a === 21 && sign === "*" && b === 25 ) {
  console.log('21 * 25 = 525')
} else
if (a === 21 && sign === "*" && b === 26 ) {
  console.log('21 * 26 = 546')
} else
if (a === 21 && sign === "*" && b === 27 ) {
  console.log('21 * 27 = 567')
} else
if (a === 21 && sign === "*" && b === 28 ) {
  console.log('21 * 28 = 588')
} else
if (a === 21 && sign === "*" && b === 29 ) {
  console.log('21 * 29 = 609')
} else
if (a === 21 && sign === "*" && b === 30 ) {
  console.log('21 * 30 = 630')
} else
if (a === 21 && sign === "*" && b === 31 ) {
  console.log('21 * 31 = 651')
} else
if (a === 21 && sign === "*" && b === 32 ) {
  console.log('21 * 32 = 672')
} else
if (a === 21 && sign === "*" && b === 33 ) {
  console.log('21 * 33 = 693')
} else
if (a === 21 && sign === "*" && b === 34 ) {
  console.log('21 * 34 = 714')
} else
if (a === 21 && sign === "*" && b === 35 ) {
  console.log('21 * 35 = 735')
} else
if (a === 21 && sign === "*" && b === 36 ) {
  console.log('21 * 36 = 756')
} else
if (a === 21 && sign === "*" && b === 37 ) {
  console.log('21 * 37 = 777')
} else
if (a === 21 && sign === "*" && b === 38 ) {
  console.log('21 * 38 = 798')
} else
if (a === 21 && sign === "*" && b === 39 ) {
  console.log('21 * 39 = 819')
} else
if (a === 21 && sign === "*" && b === 40 ) {
  console.log('21 * 40 = 840')
} else
if (a === 21 && sign === "*" && b === 41 ) {
  console.log('21 * 41 = 861')
} else
if (a === 21 && sign === "*" && b === 42 ) {
  console.log('21 * 42 = 882')
} else
if (a === 21 && sign === "*" && b === 43 ) {
  console.log('21 * 43 = 903')
} else
if (a === 21 && sign === "*" && b === 44 ) {
  console.log('21 * 44 = 924')
} else
if (a === 21 && sign === "*" && b === 45 ) {
  console.log('21 * 45 = 945')
} else
if (a === 21 && sign === "*" && b === 46 ) {
  console.log('21 * 46 = 966')
} else
if (a === 21 && sign === "*" && b === 47 ) {
  console.log('21 * 47 = 987')
} else
if (a === 21 && sign === "*" && b === 48 ) {
  console.log('21 * 48 = 1008')
} else
if (a === 21 && sign === "*" && b === 49 ) {
  console.log('21 * 49 = 1029')
} else
if (a === 21 && sign === "*" && b === 50 ) {
  console.log('21 * 50 = 1050')
} else
if (a === 22 && sign === "*" && b === 1 ) {
  console.log('22 * 1 = 22')
} else
if (a === 22 && sign === "*" && b === 2 ) {
  console.log('22 * 2 = 44')
} else
if (a === 22 && sign === "*" && b === 3 ) {
  console.log('22 * 3 = 66')
} else
if (a === 22 && sign === "*" && b === 4 ) {
  console.log('22 * 4 = 88')
} else
if (a === 22 && sign === "*" && b === 5 ) {
  console.log('22 * 5 = 110')
} else
if (a === 22 && sign === "*" && b === 6 ) {
  console.log('22 * 6 = 132')
} else
if (a === 22 && sign === "*" && b === 7 ) {
  console.log('22 * 7 = 154')
} else
if (a === 22 && sign === "*" && b === 8 ) {
  console.log('22 * 8 = 176')
} else
if (a === 22 && sign === "*" && b === 9 ) {
  console.log('22 * 9 = 198')
} else
if (a === 22 && sign === "*" && b === 10 ) {
  console.log('22 * 10 = 220')
} else
if (a === 22 && sign === "*" && b === 11 ) {
  console.log('22 * 11 = 242')
} else
if (a === 22 && sign === "*" && b === 12 ) {
  console.log('22 * 12 = 264')
} else
if (a === 22 && sign === "*" && b === 13 ) {
  console.log('22 * 13 = 286')
} else
if (a === 22 && sign === "*" && b === 14 ) {
  console.log('22 * 14 = 308')
} else
if (a === 22 && sign === "*" && b === 15 ) {
  console.log('22 * 15 = 330')
} else
if (a === 22 && sign === "*" && b === 16 ) {
  console.log('22 * 16 = 352')
} else
if (a === 22 && sign === "*" && b === 17 ) {
  console.log('22 * 17 = 374')
} else
if (a === 22 && sign === "*" && b === 18 ) {
  console.log('22 * 18 = 396')
} else
if (a === 22 && sign === "*" && b === 19 ) {
  console.log('22 * 19 = 418')
} else
if (a === 22 && sign === "*" && b === 20 ) {
  console.log('22 * 20 = 440')
} else
if (a === 22 && sign === "*" && b === 21 ) {
  console.log('22 * 21 = 462')
} else
if (a === 22 && sign === "*" && b === 22 ) {
  console.log('22 * 22 = 484')
} else
if (a === 22 && sign === "*" && b === 23 ) {
  console.log('22 * 23 = 506')
} else
if (a === 22 && sign === "*" && b === 24 ) {
  console.log('22 * 24 = 528')
} else
if (a === 22 && sign === "*" && b === 25 ) {
  console.log('22 * 25 = 550')
} else
if (a === 22 && sign === "*" && b === 26 ) {
  console.log('22 * 26 = 572')
} else
if (a === 22 && sign === "*" && b === 27 ) {
  console.log('22 * 27 = 594')
} else
if (a === 22 && sign === "*" && b === 28 ) {
  console.log('22 * 28 = 616')
} else
if (a === 22 && sign === "*" && b === 29 ) {
  console.log('22 * 29 = 638')
} else
if (a === 22 && sign === "*" && b === 30 ) {
  console.log('22 * 30 = 660')
} else
if (a === 22 && sign === "*" && b === 31 ) {
  console.log('22 * 31 = 682')
} else
if (a === 22 && sign === "*" && b === 32 ) {
  console.log('22 * 32 = 704')
} else
if (a === 22 && sign === "*" && b === 33 ) {
  console.log('22 * 33 = 726')
} else
if (a === 22 && sign === "*" && b === 34 ) {
  console.log('22 * 34 = 748')
} else
if (a === 22 && sign === "*" && b === 35 ) {
  console.log('22 * 35 = 770')
} else
if (a === 22 && sign === "*" && b === 36 ) {
  console.log('22 * 36 = 792')
} else
if (a === 22 && sign === "*" && b === 37 ) {
  console.log('22 * 37 = 814')
} else
if (a === 22 && sign === "*" && b === 38 ) {
  console.log('22 * 38 = 836')
} else
if (a === 22 && sign === "*" && b === 39 ) {
  console.log('22 * 39 = 858')
} else
if (a === 22 && sign === "*" && b === 40 ) {
  console.log('22 * 40 = 880')
} else
if (a === 22 && sign === "*" && b === 41 ) {
  console.log('22 * 41 = 902')
} else
if (a === 22 && sign === "*" && b === 42 ) {
  console.log('22 * 42 = 924')
} else
if (a === 22 && sign === "*" && b === 43 ) {
  console.log('22 * 43 = 946')
} else
if (a === 22 && sign === "*" && b === 44 ) {
  console.log('22 * 44 = 968')
} else
if (a === 22 && sign === "*" && b === 45 ) {
  console.log('22 * 45 = 990')
} else
if (a === 22 && sign === "*" && b === 46 ) {
  console.log('22 * 46 = 1012')
} else
if (a === 22 && sign === "*" && b === 47 ) {
  console.log('22 * 47 = 1034')
} else
if (a === 22 && sign === "*" && b === 48 ) {
  console.log('22 * 48 = 1056')
} else
if (a === 22 && sign === "*" && b === 49 ) {
  console.log('22 * 49 = 1078')
} else
if (a === 22 && sign === "*" && b === 50 ) {
  console.log('22 * 50 = 1100')
} else
if (a === 23 && sign === "*" && b === 1 ) {
  console.log('23 * 1 = 23')
} else
if (a === 23 && sign === "*" && b === 2 ) {
  console.log('23 * 2 = 46')
} else
if (a === 23 && sign === "*" && b === 3 ) {
  console.log('23 * 3 = 69')
} else
if (a === 23 && sign === "*" && b === 4 ) {
  console.log('23 * 4 = 92')
} else
if (a === 23 && sign === "*" && b === 5 ) {
  console.log('23 * 5 = 115')
} else
if (a === 23 && sign === "*" && b === 6 ) {
  console.log('23 * 6 = 138')
} else
if (a === 23 && sign === "*" && b === 7 ) {
  console.log('23 * 7 = 161')
} else
if (a === 23 && sign === "*" && b === 8 ) {
  console.log('23 * 8 = 184')
} else
if (a === 23 && sign === "*" && b === 9 ) {
  console.log('23 * 9 = 207')
} else
if (a === 23 && sign === "*" && b === 10 ) {
  console.log('23 * 10 = 230')
} else
if (a === 23 && sign === "*" && b === 11 ) {
  console.log('23 * 11 = 253')
} else
if (a === 23 && sign === "*" && b === 12 ) {
  console.log('23 * 12 = 276')
} else
if (a === 23 && sign === "*" && b === 13 ) {
  console.log('23 * 13 = 299')
} else
if (a === 23 && sign === "*" && b === 14 ) {
  console.log('23 * 14 = 322')
} else
if (a === 23 && sign === "*" && b === 15 ) {
  console.log('23 * 15 = 345')
} else
if (a === 23 && sign === "*" && b === 16 ) {
  console.log('23 * 16 = 368')
} else
if (a === 23 && sign === "*" && b === 17 ) {
  console.log('23 * 17 = 391')
} else
if (a === 23 && sign === "*" && b === 18 ) {
  console.log('23 * 18 = 414')
} else
if (a === 23 && sign === "*" && b === 19 ) {
  console.log('23 * 19 = 437')
} else
if (a === 23 && sign === "*" && b === 20 ) {
  console.log('23 * 20 = 460')
} else
if (a === 23 && sign === "*" && b === 21 ) {
  console.log('23 * 21 = 483')
} else
if (a === 23 && sign === "*" && b === 22 ) {
  console.log('23 * 22 = 506')
} else
if (a === 23 && sign === "*" && b === 23 ) {
  console.log('23 * 23 = 529')
} else
if (a === 23 && sign === "*" && b === 24 ) {
  console.log('23 * 24 = 552')
} else
if (a === 23 && sign === "*" && b === 25 ) {
  console.log('23 * 25 = 575')
} else
if (a === 23 && sign === "*" && b === 26 ) {
  console.log('23 * 26 = 598')
} else
if (a === 23 && sign === "*" && b === 27 ) {
  console.log('23 * 27 = 621')
} else
if (a === 23 && sign === "*" && b === 28 ) {
  console.log('23 * 28 = 644')
} else
if (a === 23 && sign === "*" && b === 29 ) {
  console.log('23 * 29 = 667')
} else
if (a === 23 && sign === "*" && b === 30 ) {
  console.log('23 * 30 = 690')
} else
if (a === 23 && sign === "*" && b === 31 ) {
  console.log('23 * 31 = 713')
} else
if (a === 23 && sign === "*" && b === 32 ) {
  console.log('23 * 32 = 736')
} else
if (a === 23 && sign === "*" && b === 33 ) {
  console.log('23 * 33 = 759')
} else
if (a === 23 && sign === "*" && b === 34 ) {
  console.log('23 * 34 = 782')
} else
if (a === 23 && sign === "*" && b === 35 ) {
  console.log('23 * 35 = 805')
} else
if (a === 23 && sign === "*" && b === 36 ) {
  console.log('23 * 36 = 828')
} else
if (a === 23 && sign === "*" && b === 37 ) {
  console.log('23 * 37 = 851')
} else
if (a === 23 && sign === "*" && b === 38 ) {
  console.log('23 * 38 = 874')
} else
if (a === 23 && sign === "*" && b === 39 ) {
  console.log('23 * 39 = 897')
} else
if (a === 23 && sign === "*" && b === 40 ) {
  console.log('23 * 40 = 920')
} else
if (a === 23 && sign === "*" && b === 41 ) {
  console.log('23 * 41 = 943')
} else
if (a === 23 && sign === "*" && b === 42 ) {
  console.log('23 * 42 = 966')
} else
if (a === 23 && sign === "*" && b === 43 ) {
  console.log('23 * 43 = 989')
} else
if (a === 23 && sign === "*" && b === 44 ) {
  console.log('23 * 44 = 1012')
} else
if (a === 23 && sign === "*" && b === 45 ) {
  console.log('23 * 45 = 1035')
} else
if (a === 23 && sign === "*" && b === 46 ) {
  console.log('23 * 46 = 1058')
} else
if (a === 23 && sign === "*" && b === 47 ) {
  console.log('23 * 47 = 1081')
} else
if (a === 23 && sign === "*" && b === 48 ) {
  console.log('23 * 48 = 1104')
} else
if (a === 23 && sign === "*" && b === 49 ) {
  console.log('23 * 49 = 1127')
} else
if (a === 23 && sign === "*" && b === 50 ) {
  console.log('23 * 50 = 1150')
} else
if (a === 24 && sign === "*" && b === 1 ) {
  console.log('24 * 1 = 24')
} else
if (a === 24 && sign === "*" && b === 2 ) {
  console.log('24 * 2 = 48')
} else
if (a === 24 && sign === "*" && b === 3 ) {
  console.log('24 * 3 = 72')
} else
if (a === 24 && sign === "*" && b === 4 ) {
  console.log('24 * 4 = 96')
} else
if (a === 24 && sign === "*" && b === 5 ) {
  console.log('24 * 5 = 120')
} else
if (a === 24 && sign === "*" && b === 6 ) {
  console.log('24 * 6 = 144')
} else
if (a === 24 && sign === "*" && b === 7 ) {
  console.log('24 * 7 = 168')
} else
if (a === 24 && sign === "*" && b === 8 ) {
  console.log('24 * 8 = 192')
} else
if (a === 24 && sign === "*" && b === 9 ) {
  console.log('24 * 9 = 216')
} else
if (a === 24 && sign === "*" && b === 10 ) {
  console.log('24 * 10 = 240')
} else
if (a === 24 && sign === "*" && b === 11 ) {
  console.log('24 * 11 = 264')
} else
if (a === 24 && sign === "*" && b === 12 ) {
  console.log('24 * 12 = 288')
} else
if (a === 24 && sign === "*" && b === 13 ) {
  console.log('24 * 13 = 312')
} else
if (a === 24 && sign === "*" && b === 14 ) {
  console.log('24 * 14 = 336')
} else
if (a === 24 && sign === "*" && b === 15 ) {
  console.log('24 * 15 = 360')
} else
if (a === 24 && sign === "*" && b === 16 ) {
  console.log('24 * 16 = 384')
} else
if (a === 24 && sign === "*" && b === 17 ) {
  console.log('24 * 17 = 408')
} else
if (a === 24 && sign === "*" && b === 18 ) {
  console.log('24 * 18 = 432')
} else
if (a === 24 && sign === "*" && b === 19 ) {
  console.log('24 * 19 = 456')
} else
if (a === 24 && sign === "*" && b === 20 ) {
  console.log('24 * 20 = 480')
} else
if (a === 24 && sign === "*" && b === 21 ) {
  console.log('24 * 21 = 504')
} else
if (a === 24 && sign === "*" && b === 22 ) {
  console.log('24 * 22 = 528')
} else
if (a === 24 && sign === "*" && b === 23 ) {
  console.log('24 * 23 = 552')
} else
if (a === 24 && sign === "*" && b === 24 ) {
  console.log('24 * 24 = 576')
} else
if (a === 24 && sign === "*" && b === 25 ) {
  console.log('24 * 25 = 600')
} else
if (a === 24 && sign === "*" && b === 26 ) {
  console.log('24 * 26 = 624')
} else
if (a === 24 && sign === "*" && b === 27 ) {
  console.log('24 * 27 = 648')
} else
if (a === 24 && sign === "*" && b === 28 ) {
  console.log('24 * 28 = 672')
} else
if (a === 24 && sign === "*" && b === 29 ) {
  console.log('24 * 29 = 696')
} else
if (a === 24 && sign === "*" && b === 30 ) {
  console.log('24 * 30 = 720')
} else
if (a === 24 && sign === "*" && b === 31 ) {
  console.log('24 * 31 = 744')
} else
if (a === 24 && sign === "*" && b === 32 ) {
  console.log('24 * 32 = 768')
} else
if (a === 24 && sign === "*" && b === 33 ) {
  console.log('24 * 33 = 792')
} else
if (a === 24 && sign === "*" && b === 34 ) {
  console.log('24 * 34 = 816')
} else
if (a === 24 && sign === "*" && b === 35 ) {
  console.log('24 * 35 = 840')
} else
if (a === 24 && sign === "*" && b === 36 ) {
  console.log('24 * 36 = 864')
} else
if (a === 24 && sign === "*" && b === 37 ) {
  console.log('24 * 37 = 888')
} else
if (a === 24 && sign === "*" && b === 38 ) {
  console.log('24 * 38 = 912')
} else
if (a === 24 && sign === "*" && b === 39 ) {
  console.log('24 * 39 = 936')
} else
if (a === 24 && sign === "*" && b === 40 ) {
  console.log('24 * 40 = 960')
} else
if (a === 24 && sign === "*" && b === 41 ) {
  console.log('24 * 41 = 984')
} else
if (a === 24 && sign === "*" && b === 42 ) {
  console.log('24 * 42 = 1008')
} else
if (a === 24 && sign === "*" && b === 43 ) {
  console.log('24 * 43 = 1032')
} else
if (a === 24 && sign === "*" && b === 44 ) {
  console.log('24 * 44 = 1056')
} else
if (a === 24 && sign === "*" && b === 45 ) {
  console.log('24 * 45 = 1080')
} else
if (a === 24 && sign === "*" && b === 46 ) {
  console.log('24 * 46 = 1104')
} else
if (a === 24 && sign === "*" && b === 47 ) {
  console.log('24 * 47 = 1128')
} else
if (a === 24 && sign === "*" && b === 48 ) {
  console.log('24 * 48 = 1152')
} else
if (a === 24 && sign === "*" && b === 49 ) {
  console.log('24 * 49 = 1176')
} else
if (a === 24 && sign === "*" && b === 50 ) {
  console.log('24 * 50 = 1200')
} else
if (a === 25 && sign === "*" && b === 1 ) {
  console.log('25 * 1 = 25')
} else
if (a === 25 && sign === "*" && b === 2 ) {
  console.log('25 * 2 = 50')
} else
if (a === 25 && sign === "*" && b === 3 ) {
  console.log('25 * 3 = 75')
} else
if (a === 25 && sign === "*" && b === 4 ) {
  console.log('25 * 4 = 100')
} else
if (a === 25 && sign === "*" && b === 5 ) {
  console.log('25 * 5 = 125')
} else
if (a === 25 && sign === "*" && b === 6 ) {
  console.log('25 * 6 = 150')
} else
if (a === 25 && sign === "*" && b === 7 ) {
  console.log('25 * 7 = 175')
} else
if (a === 25 && sign === "*" && b === 8 ) {
  console.log('25 * 8 = 200')
} else
if (a === 25 && sign === "*" && b === 9 ) {
  console.log('25 * 9 = 225')
} else
if (a === 25 && sign === "*" && b === 10 ) {
  console.log('25 * 10 = 250')
} else
if (a === 25 && sign === "*" && b === 11 ) {
  console.log('25 * 11 = 275')
} else
if (a === 25 && sign === "*" && b === 12 ) {
  console.log('25 * 12 = 300')
} else
if (a === 25 && sign === "*" && b === 13 ) {
  console.log('25 * 13 = 325')
} else
if (a === 25 && sign === "*" && b === 14 ) {
  console.log('25 * 14 = 350')
} else
if (a === 25 && sign === "*" && b === 15 ) {
  console.log('25 * 15 = 375')
} else
if (a === 25 && sign === "*" && b === 16 ) {
  console.log('25 * 16 = 400')
} else
if (a === 25 && sign === "*" && b === 17 ) {
  console.log('25 * 17 = 425')
} else
if (a === 25 && sign === "*" && b === 18 ) {
  console.log('25 * 18 = 450')
} else
if (a === 25 && sign === "*" && b === 19 ) {
  console.log('25 * 19 = 475')
} else
if (a === 25 && sign === "*" && b === 20 ) {
  console.log('25 * 20 = 500')
} else
if (a === 25 && sign === "*" && b === 21 ) {
  console.log('25 * 21 = 525')
} else
if (a === 25 && sign === "*" && b === 22 ) {
  console.log('25 * 22 = 550')
} else
if (a === 25 && sign === "*" && b === 23 ) {
  console.log('25 * 23 = 575')
} else
if (a === 25 && sign === "*" && b === 24 ) {
  console.log('25 * 24 = 600')
} else
if (a === 25 && sign === "*" && b === 25 ) {
  console.log('25 * 25 = 625')
} else
if (a === 25 && sign === "*" && b === 26 ) {
  console.log('25 * 26 = 650')
} else
if (a === 25 && sign === "*" && b === 27 ) {
  console.log('25 * 27 = 675')
} else
if (a === 25 && sign === "*" && b === 28 ) {
  console.log('25 * 28 = 700')
} else
if (a === 25 && sign === "*" && b === 29 ) {
  console.log('25 * 29 = 725')
} else
if (a === 25 && sign === "*" && b === 30 ) {
  console.log('25 * 30 = 750')
} else
if (a === 25 && sign === "*" && b === 31 ) {
  console.log('25 * 31 = 775')
} else
if (a === 25 && sign === "*" && b === 32 ) {
  console.log('25 * 32 = 800')
} else
if (a === 25 && sign === "*" && b === 33 ) {
  console.log('25 * 33 = 825')
} else
if (a === 25 && sign === "*" && b === 34 ) {
  console.log('25 * 34 = 850')
} else
if (a === 25 && sign === "*" && b === 35 ) {
  console.log('25 * 35 = 875')
} else
if (a === 25 && sign === "*" && b === 36 ) {
  console.log('25 * 36 = 900')
} else
if (a === 25 && sign === "*" && b === 37 ) {
  console.log('25 * 37 = 925')
} else
if (a === 25 && sign === "*" && b === 38 ) {
  console.log('25 * 38 = 950')
} else
if (a === 25 && sign === "*" && b === 39 ) {
  console.log('25 * 39 = 975')
} else
if (a === 25 && sign === "*" && b === 40 ) {
  console.log('25 * 40 = 1000')
} else
if (a === 25 && sign === "*" && b === 41 ) {
  console.log('25 * 41 = 1025')
} else
if (a === 25 && sign === "*" && b === 42 ) {
  console.log('25 * 42 = 1050')
} else
if (a === 25 && sign === "*" && b === 43 ) {
  console.log('25 * 43 = 1075')
} else
if (a === 25 && sign === "*" && b === 44 ) {
  console.log('25 * 44 = 1100')
} else
if (a === 25 && sign === "*" && b === 45 ) {
  console.log('25 * 45 = 1125')
} else
if (a === 25 && sign === "*" && b === 46 ) {
  console.log('25 * 46 = 1150')
} else
if (a === 25 && sign === "*" && b === 47 ) {
  console.log('25 * 47 = 1175')
} else
if (a === 25 && sign === "*" && b === 48 ) {
  console.log('25 * 48 = 1200')
} else
if (a === 25 && sign === "*" && b === 49 ) {
  console.log('25 * 49 = 1225')
} else
if (a === 25 && sign === "*" && b === 50 ) {
  console.log('25 * 50 = 1250')
} else
if (a === 26 && sign === "*" && b === 1 ) {
  console.log('26 * 1 = 26')
} else
if (a === 26 && sign === "*" && b === 2 ) {
  console.log('26 * 2 = 52')
} else
if (a === 26 && sign === "*" && b === 3 ) {
  console.log('26 * 3 = 78')
} else
if (a === 26 && sign === "*" && b === 4 ) {
  console.log('26 * 4 = 104')
} else
if (a === 26 && sign === "*" && b === 5 ) {
  console.log('26 * 5 = 130')
} else
if (a === 26 && sign === "*" && b === 6 ) {
  console.log('26 * 6 = 156')
} else
if (a === 26 && sign === "*" && b === 7 ) {
  console.log('26 * 7 = 182')
} else
if (a === 26 && sign === "*" && b === 8 ) {
  console.log('26 * 8 = 208')
} else
if (a === 26 && sign === "*" && b === 9 ) {
  console.log('26 * 9 = 234')
} else
if (a === 26 && sign === "*" && b === 10 ) {
  console.log('26 * 10 = 260')
} else
if (a === 26 && sign === "*" && b === 11 ) {
  console.log('26 * 11 = 286')
} else
if (a === 26 && sign === "*" && b === 12 ) {
  console.log('26 * 12 = 312')
} else
if (a === 26 && sign === "*" && b === 13 ) {
  console.log('26 * 13 = 338')
} else
if (a === 26 && sign === "*" && b === 14 ) {
  console.log('26 * 14 = 364')
} else
if (a === 26 && sign === "*" && b === 15 ) {
  console.log('26 * 15 = 390')
} else
if (a === 26 && sign === "*" && b === 16 ) {
  console.log('26 * 16 = 416')
} else
if (a === 26 && sign === "*" && b === 17 ) {
  console.log('26 * 17 = 442')
} else
if (a === 26 && sign === "*" && b === 18 ) {
  console.log('26 * 18 = 468')
} else
if (a === 26 && sign === "*" && b === 19 ) {
  console.log('26 * 19 = 494')
} else
if (a === 26 && sign === "*" && b === 20 ) {
  console.log('26 * 20 = 520')
} else
if (a === 26 && sign === "*" && b === 21 ) {
  console.log('26 * 21 = 546')
} else
if (a === 26 && sign === "*" && b === 22 ) {
  console.log('26 * 22 = 572')
} else
if (a === 26 && sign === "*" && b === 23 ) {
  console.log('26 * 23 = 598')
} else
if (a === 26 && sign === "*" && b === 24 ) {
  console.log('26 * 24 = 624')
} else
if (a === 26 && sign === "*" && b === 25 ) {
  console.log('26 * 25 = 650')
} else
if (a === 26 && sign === "*" && b === 26 ) {
  console.log('26 * 26 = 676')
} else
if (a === 26 && sign === "*" && b === 27 ) {
  console.log('26 * 27 = 702')
} else
if (a === 26 && sign === "*" && b === 28 ) {
  console.log('26 * 28 = 728')
} else
if (a === 26 && sign === "*" && b === 29 ) {
  console.log('26 * 29 = 754')
} else
if (a === 26 && sign === "*" && b === 30 ) {
  console.log('26 * 30 = 780')
} else
if (a === 26 && sign === "*" && b === 31 ) {
  console.log('26 * 31 = 806')
} else
if (a === 26 && sign === "*" && b === 32 ) {
  console.log('26 * 32 = 832')
} else
if (a === 26 && sign === "*" && b === 33 ) {
  console.log('26 * 33 = 858')
} else
if (a === 26 && sign === "*" && b === 34 ) {
  console.log('26 * 34 = 884')
} else
if (a === 26 && sign === "*" && b === 35 ) {
  console.log('26 * 35 = 910')
} else
if (a === 26 && sign === "*" && b === 36 ) {
  console.log('26 * 36 = 936')
} else
if (a === 26 && sign === "*" && b === 37 ) {
  console.log('26 * 37 = 962')
} else
if (a === 26 && sign === "*" && b === 38 ) {
  console.log('26 * 38 = 988')
} else
if (a === 26 && sign === "*" && b === 39 ) {
  console.log('26 * 39 = 1014')
} else
if (a === 26 && sign === "*" && b === 40 ) {
  console.log('26 * 40 = 1040')
} else
if (a === 26 && sign === "*" && b === 41 ) {
  console.log('26 * 41 = 1066')
} else
if (a === 26 && sign === "*" && b === 42 ) {
  console.log('26 * 42 = 1092')
} else
if (a === 26 && sign === "*" && b === 43 ) {
  console.log('26 * 43 = 1118')
} else
if (a === 26 && sign === "*" && b === 44 ) {
  console.log('26 * 44 = 1144')
} else
if (a === 26 && sign === "*" && b === 45 ) {
  console.log('26 * 45 = 1170')
} else
if (a === 26 && sign === "*" && b === 46 ) {
  console.log('26 * 46 = 1196')
} else
if (a === 26 && sign === "*" && b === 47 ) {
  console.log('26 * 47 = 1222')
} else
if (a === 26 && sign === "*" && b === 48 ) {
  console.log('26 * 48 = 1248')
} else
if (a === 26 && sign === "*" && b === 49 ) {
  console.log('26 * 49 = 1274')
} else
if (a === 26 && sign === "*" && b === 50 ) {
  console.log('26 * 50 = 1300')
} else
if (a === 27 && sign === "*" && b === 1 ) {
  console.log('27 * 1 = 27')
} else
if (a === 27 && sign === "*" && b === 2 ) {
  console.log('27 * 2 = 54')
} else
if (a === 27 && sign === "*" && b === 3 ) {
  console.log('27 * 3 = 81')
} else
if (a === 27 && sign === "*" && b === 4 ) {
  console.log('27 * 4 = 108')
} else
if (a === 27 && sign === "*" && b === 5 ) {
  console.log('27 * 5 = 135')
} else
if (a === 27 && sign === "*" && b === 6 ) {
  console.log('27 * 6 = 162')
} else
if (a === 27 && sign === "*" && b === 7 ) {
  console.log('27 * 7 = 189')
} else
if (a === 27 && sign === "*" && b === 8 ) {
  console.log('27 * 8 = 216')
} else
if (a === 27 && sign === "*" && b === 9 ) {
  console.log('27 * 9 = 243')
} else
if (a === 27 && sign === "*" && b === 10 ) {
  console.log('27 * 10 = 270')
} else
if (a === 27 && sign === "*" && b === 11 ) {
  console.log('27 * 11 = 297')
} else
if (a === 27 && sign === "*" && b === 12 ) {
  console.log('27 * 12 = 324')
} else
if (a === 27 && sign === "*" && b === 13 ) {
  console.log('27 * 13 = 351')
} else
if (a === 27 && sign === "*" && b === 14 ) {
  console.log('27 * 14 = 378')
} else
if (a === 27 && sign === "*" && b === 15 ) {
  console.log('27 * 15 = 405')
} else
if (a === 27 && sign === "*" && b === 16 ) {
  console.log('27 * 16 = 432')
} else
if (a === 27 && sign === "*" && b === 17 ) {
  console.log('27 * 17 = 459')
} else
if (a === 27 && sign === "*" && b === 18 ) {
  console.log('27 * 18 = 486')
} else
if (a === 27 && sign === "*" && b === 19 ) {
  console.log('27 * 19 = 513')
} else
if (a === 27 && sign === "*" && b === 20 ) {
  console.log('27 * 20 = 540')
} else
if (a === 27 && sign === "*" && b === 21 ) {
  console.log('27 * 21 = 567')
} else
if (a === 27 && sign === "*" && b === 22 ) {
  console.log('27 * 22 = 594')
} else
if (a === 27 && sign === "*" && b === 23 ) {
  console.log('27 * 23 = 621')
} else
if (a === 27 && sign === "*" && b === 24 ) {
  console.log('27 * 24 = 648')
} else
if (a === 27 && sign === "*" && b === 25 ) {
  console.log('27 * 25 = 675')
} else
if (a === 27 && sign === "*" && b === 26 ) {
  console.log('27 * 26 = 702')
} else
if (a === 27 && sign === "*" && b === 27 ) {
  console.log('27 * 27 = 729')
} else
if (a === 27 && sign === "*" && b === 28 ) {
  console.log('27 * 28 = 756')
} else
if (a === 27 && sign === "*" && b === 29 ) {
  console.log('27 * 29 = 783')
} else
if (a === 27 && sign === "*" && b === 30 ) {
  console.log('27 * 30 = 810')
} else
if (a === 27 && sign === "*" && b === 31 ) {
  console.log('27 * 31 = 837')
} else
if (a === 27 && sign === "*" && b === 32 ) {
  console.log('27 * 32 = 864')
} else
if (a === 27 && sign === "*" && b === 33 ) {
  console.log('27 * 33 = 891')
} else
if (a === 27 && sign === "*" && b === 34 ) {
  console.log('27 * 34 = 918')
} else
if (a === 27 && sign === "*" && b === 35 ) {
  console.log('27 * 35 = 945')
} else
if (a === 27 && sign === "*" && b === 36 ) {
  console.log('27 * 36 = 972')
} else
if (a === 27 && sign === "*" && b === 37 ) {
  console.log('27 * 37 = 999')
} else
if (a === 27 && sign === "*" && b === 38 ) {
  console.log('27 * 38 = 1026')
} else
if (a === 27 && sign === "*" && b === 39 ) {
  console.log('27 * 39 = 1053')
} else
if (a === 27 && sign === "*" && b === 40 ) {
  console.log('27 * 40 = 1080')
} else
if (a === 27 && sign === "*" && b === 41 ) {
  console.log('27 * 41 = 1107')
} else
if (a === 27 && sign === "*" && b === 42 ) {
  console.log('27 * 42 = 1134')
} else
if (a === 27 && sign === "*" && b === 43 ) {
  console.log('27 * 43 = 1161')
} else
if (a === 27 && sign === "*" && b === 44 ) {
  console.log('27 * 44 = 1188')
} else
if (a === 27 && sign === "*" && b === 45 ) {
  console.log('27 * 45 = 1215')
} else
if (a === 27 && sign === "*" && b === 46 ) {
  console.log('27 * 46 = 1242')
} else
if (a === 27 && sign === "*" && b === 47 ) {
  console.log('27 * 47 = 1269')
} else
if (a === 27 && sign === "*" && b === 48 ) {
  console.log('27 * 48 = 1296')
} else
if (a === 27 && sign === "*" && b === 49 ) {
  console.log('27 * 49 = 1323')
} else
if (a === 27 && sign === "*" && b === 50 ) {
  console.log('27 * 50 = 1350')
} else
if (a === 28 && sign === "*" && b === 1 ) {
  console.log('28 * 1 = 28')
} else
if (a === 28 && sign === "*" && b === 2 ) {
  console.log('28 * 2 = 56')
} else
if (a === 28 && sign === "*" && b === 3 ) {
  console.log('28 * 3 = 84')
} else
if (a === 28 && sign === "*" && b === 4 ) {
  console.log('28 * 4 = 112')
} else
if (a === 28 && sign === "*" && b === 5 ) {
  console.log('28 * 5 = 140')
} else
if (a === 28 && sign === "*" && b === 6 ) {
  console.log('28 * 6 = 168')
} else
if (a === 28 && sign === "*" && b === 7 ) {
  console.log('28 * 7 = 196')
} else
if (a === 28 && sign === "*" && b === 8 ) {
  console.log('28 * 8 = 224')
} else
if (a === 28 && sign === "*" && b === 9 ) {
  console.log('28 * 9 = 252')
} else
if (a === 28 && sign === "*" && b === 10 ) {
  console.log('28 * 10 = 280')
} else
if (a === 28 && sign === "*" && b === 11 ) {
  console.log('28 * 11 = 308')
} else
if (a === 28 && sign === "*" && b === 12 ) {
  console.log('28 * 12 = 336')
} else
if (a === 28 && sign === "*" && b === 13 ) {
  console.log('28 * 13 = 364')
} else
if (a === 28 && sign === "*" && b === 14 ) {
  console.log('28 * 14 = 392')
} else
if (a === 28 && sign === "*" && b === 15 ) {
  console.log('28 * 15 = 420')
} else
if (a === 28 && sign === "*" && b === 16 ) {
  console.log('28 * 16 = 448')
} else
if (a === 28 && sign === "*" && b === 17 ) {
  console.log('28 * 17 = 476')
} else
if (a === 28 && sign === "*" && b === 18 ) {
  console.log('28 * 18 = 504')
} else
if (a === 28 && sign === "*" && b === 19 ) {
  console.log('28 * 19 = 532')
} else
if (a === 28 && sign === "*" && b === 20 ) {
  console.log('28 * 20 = 560')
} else
if (a === 28 && sign === "*" && b === 21 ) {
  console.log('28 * 21 = 588')
} else
if (a === 28 && sign === "*" && b === 22 ) {
  console.log('28 * 22 = 616')
} else
if (a === 28 && sign === "*" && b === 23 ) {
  console.log('28 * 23 = 644')
} else
if (a === 28 && sign === "*" && b === 24 ) {
  console.log('28 * 24 = 672')
} else
if (a === 28 && sign === "*" && b === 25 ) {
  console.log('28 * 25 = 700')
} else
if (a === 28 && sign === "*" && b === 26 ) {
  console.log('28 * 26 = 728')
} else
if (a === 28 && sign === "*" && b === 27 ) {
  console.log('28 * 27 = 756')
} else
if (a === 28 && sign === "*" && b === 28 ) {
  console.log('28 * 28 = 784')
} else
if (a === 28 && sign === "*" && b === 29 ) {
  console.log('28 * 29 = 812')
} else
if (a === 28 && sign === "*" && b === 30 ) {
  console.log('28 * 30 = 840')
} else
if (a === 28 && sign === "*" && b === 31 ) {
  console.log('28 * 31 = 868')
} else
if (a === 28 && sign === "*" && b === 32 ) {
  console.log('28 * 32 = 896')
} else
if (a === 28 && sign === "*" && b === 33 ) {
  console.log('28 * 33 = 924')
} else
if (a === 28 && sign === "*" && b === 34 ) {
  console.log('28 * 34 = 952')
} else
if (a === 28 && sign === "*" && b === 35 ) {
  console.log('28 * 35 = 980')
} else
if (a === 28 && sign === "*" && b === 36 ) {
  console.log('28 * 36 = 1008')
} else
if (a === 28 && sign === "*" && b === 37 ) {
  console.log('28 * 37 = 1036')
} else
if (a === 28 && sign === "*" && b === 38 ) {
  console.log('28 * 38 = 1064')
} else
if (a === 28 && sign === "*" && b === 39 ) {
  console.log('28 * 39 = 1092')
} else
if (a === 28 && sign === "*" && b === 40 ) {
  console.log('28 * 40 = 1120')
} else
if (a === 28 && sign === "*" && b === 41 ) {
  console.log('28 * 41 = 1148')
} else
if (a === 28 && sign === "*" && b === 42 ) {
  console.log('28 * 42 = 1176')
} else
if (a === 28 && sign === "*" && b === 43 ) {
  console.log('28 * 43 = 1204')
} else
if (a === 28 && sign === "*" && b === 44 ) {
  console.log('28 * 44 = 1232')
} else
if (a === 28 && sign === "*" && b === 45 ) {
  console.log('28 * 45 = 1260')
} else
if (a === 28 && sign === "*" && b === 46 ) {
  console.log('28 * 46 = 1288')
} else
if (a === 28 && sign === "*" && b === 47 ) {
  console.log('28 * 47 = 1316')
} else
if (a === 28 && sign === "*" && b === 48 ) {
  console.log('28 * 48 = 1344')
} else
if (a === 28 && sign === "*" && b === 49 ) {
  console.log('28 * 49 = 1372')
} else
if (a === 28 && sign === "*" && b === 50 ) {
  console.log('28 * 50 = 1400')
} else
if (a === 29 && sign === "*" && b === 1 ) {
  console.log('29 * 1 = 29')
} else
if (a === 29 && sign === "*" && b === 2 ) {
  console.log('29 * 2 = 58')
} else
if (a === 29 && sign === "*" && b === 3 ) {
  console.log('29 * 3 = 87')
} else
if (a === 29 && sign === "*" && b === 4 ) {
  console.log('29 * 4 = 116')
} else
if (a === 29 && sign === "*" && b === 5 ) {
  console.log('29 * 5 = 145')
} else
if (a === 29 && sign === "*" && b === 6 ) {
  console.log('29 * 6 = 174')
} else
if (a === 29 && sign === "*" && b === 7 ) {
  console.log('29 * 7 = 203')
} else
if (a === 29 && sign === "*" && b === 8 ) {
  console.log('29 * 8 = 232')
} else
if (a === 29 && sign === "*" && b === 9 ) {
  console.log('29 * 9 = 261')
} else
if (a === 29 && sign === "*" && b === 10 ) {
  console.log('29 * 10 = 290')
} else
if (a === 29 && sign === "*" && b === 11 ) {
  console.log('29 * 11 = 319')
} else
if (a === 29 && sign === "*" && b === 12 ) {
  console.log('29 * 12 = 348')
} else
if (a === 29 && sign === "*" && b === 13 ) {
  console.log('29 * 13 = 377')
} else
if (a === 29 && sign === "*" && b === 14 ) {
  console.log('29 * 14 = 406')
} else
if (a === 29 && sign === "*" && b === 15 ) {
  console.log('29 * 15 = 435')
} else
if (a === 29 && sign === "*" && b === 16 ) {
  console.log('29 * 16 = 464')
} else
if (a === 29 && sign === "*" && b === 17 ) {
  console.log('29 * 17 = 493')
} else
if (a === 29 && sign === "*" && b === 18 ) {
  console.log('29 * 18 = 522')
} else
if (a === 29 && sign === "*" && b === 19 ) {
  console.log('29 * 19 = 551')
} else
if (a === 29 && sign === "*" && b === 20 ) {
  console.log('29 * 20 = 580')
} else
if (a === 29 && sign === "*" && b === 21 ) {
  console.log('29 * 21 = 609')
} else
if (a === 29 && sign === "*" && b === 22 ) {
  console.log('29 * 22 = 638')
} else
if (a === 29 && sign === "*" && b === 23 ) {
  console.log('29 * 23 = 667')
} else
if (a === 29 && sign === "*" && b === 24 ) {
  console.log('29 * 24 = 696')
} else
if (a === 29 && sign === "*" && b === 25 ) {
  console.log('29 * 25 = 725')
} else
if (a === 29 && sign === "*" && b === 26 ) {
  console.log('29 * 26 = 754')
} else
if (a === 29 && sign === "*" && b === 27 ) {
  console.log('29 * 27 = 783')
} else
if (a === 29 && sign === "*" && b === 28 ) {
  console.log('29 * 28 = 812')
} else
if (a === 29 && sign === "*" && b === 29 ) {
  console.log('29 * 29 = 841')
} else
if (a === 29 && sign === "*" && b === 30 ) {
  console.log('29 * 30 = 870')
} else
if (a === 29 && sign === "*" && b === 31 ) {
  console.log('29 * 31 = 899')
} else
if (a === 29 && sign === "*" && b === 32 ) {
  console.log('29 * 32 = 928')
} else
if (a === 29 && sign === "*" && b === 33 ) {
  console.log('29 * 33 = 957')
} else
if (a === 29 && sign === "*" && b === 34 ) {
  console.log('29 * 34 = 986')
} else
if (a === 29 && sign === "*" && b === 35 ) {
  console.log('29 * 35 = 1015')
} else
if (a === 29 && sign === "*" && b === 36 ) {
  console.log('29 * 36 = 1044')
} else
if (a === 29 && sign === "*" && b === 37 ) {
  console.log('29 * 37 = 1073')
} else
if (a === 29 && sign === "*" && b === 38 ) {
  console.log('29 * 38 = 1102')
} else
if (a === 29 && sign === "*" && b === 39 ) {
  console.log('29 * 39 = 1131')
} else
if (a === 29 && sign === "*" && b === 40 ) {
  console.log('29 * 40 = 1160')
} else
if (a === 29 && sign === "*" && b === 41 ) {
  console.log('29 * 41 = 1189')
} else
if (a === 29 && sign === "*" && b === 42 ) {
  console.log('29 * 42 = 1218')
} else
if (a === 29 && sign === "*" && b === 43 ) {
  console.log('29 * 43 = 1247')
} else
if (a === 29 && sign === "*" && b === 44 ) {
  console.log('29 * 44 = 1276')
} else
if (a === 29 && sign === "*" && b === 45 ) {
  console.log('29 * 45 = 1305')
} else
if (a === 29 && sign === "*" && b === 46 ) {
  console.log('29 * 46 = 1334')
} else
if (a === 29 && sign === "*" && b === 47 ) {
  console.log('29 * 47 = 1363')
} else
if (a === 29 && sign === "*" && b === 48 ) {
  console.log('29 * 48 = 1392')
} else
if (a === 29 && sign === "*" && b === 49 ) {
  console.log('29 * 49 = 1421')
} else
if (a === 29 && sign === "*" && b === 50 ) {
  console.log('29 * 50 = 1450')
} else
if (a === 30 && sign === "*" && b === 1 ) {
  console.log('30 * 1 = 30')
} else
if (a === 30 && sign === "*" && b === 2 ) {
  console.log('30 * 2 = 60')
} else
if (a === 30 && sign === "*" && b === 3 ) {
  console.log('30 * 3 = 90')
} else
if (a === 30 && sign === "*" && b === 4 ) {
  console.log('30 * 4 = 120')
} else
if (a === 30 && sign === "*" && b === 5 ) {
  console.log('30 * 5 = 150')
} else
if (a === 30 && sign === "*" && b === 6 ) {
  console.log('30 * 6 = 180')
} else
if (a === 30 && sign === "*" && b === 7 ) {
  console.log('30 * 7 = 210')
} else
if (a === 30 && sign === "*" && b === 8 ) {
  console.log('30 * 8 = 240')
} else
if (a === 30 && sign === "*" && b === 9 ) {
  console.log('30 * 9 = 270')
} else
if (a === 30 && sign === "*" && b === 10 ) {
  console.log('30 * 10 = 300')
} else
if (a === 30 && sign === "*" && b === 11 ) {
  console.log('30 * 11 = 330')
} else
if (a === 30 && sign === "*" && b === 12 ) {
  console.log('30 * 12 = 360')
} else
if (a === 30 && sign === "*" && b === 13 ) {
  console.log('30 * 13 = 390')
} else
if (a === 30 && sign === "*" && b === 14 ) {
  console.log('30 * 14 = 420')
} else
if (a === 30 && sign === "*" && b === 15 ) {
  console.log('30 * 15 = 450')
} else
if (a === 30 && sign === "*" && b === 16 ) {
  console.log('30 * 16 = 480')
} else
if (a === 30 && sign === "*" && b === 17 ) {
  console.log('30 * 17 = 510')
} else
if (a === 30 && sign === "*" && b === 18 ) {
  console.log('30 * 18 = 540')
} else
if (a === 30 && sign === "*" && b === 19 ) {
  console.log('30 * 19 = 570')
} else
if (a === 30 && sign === "*" && b === 20 ) {
  console.log('30 * 20 = 600')
} else
if (a === 30 && sign === "*" && b === 21 ) {
  console.log('30 * 21 = 630')
} else
if (a === 30 && sign === "*" && b === 22 ) {
  console.log('30 * 22 = 660')
} else
if (a === 30 && sign === "*" && b === 23 ) {
  console.log('30 * 23 = 690')
} else
if (a === 30 && sign === "*" && b === 24 ) {
  console.log('30 * 24 = 720')
} else
if (a === 30 && sign === "*" && b === 25 ) {
  console.log('30 * 25 = 750')
} else
if (a === 30 && sign === "*" && b === 26 ) {
  console.log('30 * 26 = 780')
} else
if (a === 30 && sign === "*" && b === 27 ) {
  console.log('30 * 27 = 810')
} else
if (a === 30 && sign === "*" && b === 28 ) {
  console.log('30 * 28 = 840')
} else
if (a === 30 && sign === "*" && b === 29 ) {
  console.log('30 * 29 = 870')
} else
if (a === 30 && sign === "*" && b === 30 ) {
  console.log('30 * 30 = 900')
} else
if (a === 30 && sign === "*" && b === 31 ) {
  console.log('30 * 31 = 930')
} else
if (a === 30 && sign === "*" && b === 32 ) {
  console.log('30 * 32 = 960')
} else
if (a === 30 && sign === "*" && b === 33 ) {
  console.log('30 * 33 = 990')
} else
if (a === 30 && sign === "*" && b === 34 ) {
  console.log('30 * 34 = 1020')
} else
if (a === 30 && sign === "*" && b === 35 ) {
  console.log('30 * 35 = 1050')
} else
if (a === 30 && sign === "*" && b === 36 ) {
  console.log('30 * 36 = 1080')
} else
if (a === 30 && sign === "*" && b === 37 ) {
  console.log('30 * 37 = 1110')
} else
if (a === 30 && sign === "*" && b === 38 ) {
  console.log('30 * 38 = 1140')
} else
if (a === 30 && sign === "*" && b === 39 ) {
  console.log('30 * 39 = 1170')
} else
if (a === 30 && sign === "*" && b === 40 ) {
  console.log('30 * 40 = 1200')
} else
if (a === 30 && sign === "*" && b === 41 ) {
  console.log('30 * 41 = 1230')
} else
if (a === 30 && sign === "*" && b === 42 ) {
  console.log('30 * 42 = 1260')
} else
if (a === 30 && sign === "*" && b === 43 ) {
  console.log('30 * 43 = 1290')
} else
if (a === 30 && sign === "*" && b === 44 ) {
  console.log('30 * 44 = 1320')
} else
if (a === 30 && sign === "*" && b === 45 ) {
  console.log('30 * 45 = 1350')
} else
if (a === 30 && sign === "*" && b === 46 ) {
  console.log('30 * 46 = 1380')
} else
if (a === 30 && sign === "*" && b === 47 ) {
  console.log('30 * 47 = 1410')
} else
if (a === 30 && sign === "*" && b === 48 ) {
  console.log('30 * 48 = 1440')
} else
if (a === 30 && sign === "*" && b === 49 ) {
  console.log('30 * 49 = 1470')
} else
if (a === 30 && sign === "*" && b === 50 ) {
  console.log('30 * 50 = 1500')
} else
if (a === 31 && sign === "*" && b === 1 ) {
  console.log('31 * 1 = 31')
} else
if (a === 31 && sign === "*" && b === 2 ) {
  console.log('31 * 2 = 62')
} else
if (a === 31 && sign === "*" && b === 3 ) {
  console.log('31 * 3 = 93')
} else
if (a === 31 && sign === "*" && b === 4 ) {
  console.log('31 * 4 = 124')
} else
if (a === 31 && sign === "*" && b === 5 ) {
  console.log('31 * 5 = 155')
} else
if (a === 31 && sign === "*" && b === 6 ) {
  console.log('31 * 6 = 186')
} else
if (a === 31 && sign === "*" && b === 7 ) {
  console.log('31 * 7 = 217')
} else
if (a === 31 && sign === "*" && b === 8 ) {
  console.log('31 * 8 = 248')
} else
if (a === 31 && sign === "*" && b === 9 ) {
  console.log('31 * 9 = 279')
} else
if (a === 31 && sign === "*" && b === 10 ) {
  console.log('31 * 10 = 310')
} else
if (a === 31 && sign === "*" && b === 11 ) {
  console.log('31 * 11 = 341')
} else
if (a === 31 && sign === "*" && b === 12 ) {
  console.log('31 * 12 = 372')
} else
if (a === 31 && sign === "*" && b === 13 ) {
  console.log('31 * 13 = 403')
} else
if (a === 31 && sign === "*" && b === 14 ) {
  console.log('31 * 14 = 434')
} else
if (a === 31 && sign === "*" && b === 15 ) {
  console.log('31 * 15 = 465')
} else
if (a === 31 && sign === "*" && b === 16 ) {
  console.log('31 * 16 = 496')
} else
if (a === 31 && sign === "*" && b === 17 ) {
  console.log('31 * 17 = 527')
} else
if (a === 31 && sign === "*" && b === 18 ) {
  console.log('31 * 18 = 558')
} else
if (a === 31 && sign === "*" && b === 19 ) {
  console.log('31 * 19 = 589')
} else
if (a === 31 && sign === "*" && b === 20 ) {
  console.log('31 * 20 = 620')
} else
if (a === 31 && sign === "*" && b === 21 ) {
  console.log('31 * 21 = 651')
} else
if (a === 31 && sign === "*" && b === 22 ) {
  console.log('31 * 22 = 682')
} else
if (a === 31 && sign === "*" && b === 23 ) {
  console.log('31 * 23 = 713')
} else
if (a === 31 && sign === "*" && b === 24 ) {
  console.log('31 * 24 = 744')
} else
if (a === 31 && sign === "*" && b === 25 ) {
  console.log('31 * 25 = 775')
} else
if (a === 31 && sign === "*" && b === 26 ) {
  console.log('31 * 26 = 806')
} else
if (a === 31 && sign === "*" && b === 27 ) {
  console.log('31 * 27 = 837')
} else
if (a === 31 && sign === "*" && b === 28 ) {
  console.log('31 * 28 = 868')
} else
if (a === 31 && sign === "*" && b === 29 ) {
  console.log('31 * 29 = 899')
} else
if (a === 31 && sign === "*" && b === 30 ) {
  console.log('31 * 30 = 930')
} else
if (a === 31 && sign === "*" && b === 31 ) {
  console.log('31 * 31 = 961')
} else
if (a === 31 && sign === "*" && b === 32 ) {
  console.log('31 * 32 = 992')
} else
if (a === 31 && sign === "*" && b === 33 ) {
  console.log('31 * 33 = 1023')
} else
if (a === 31 && sign === "*" && b === 34 ) {
  console.log('31 * 34 = 1054')
} else
if (a === 31 && sign === "*" && b === 35 ) {
  console.log('31 * 35 = 1085')
} else
if (a === 31 && sign === "*" && b === 36 ) {
  console.log('31 * 36 = 1116')
} else
if (a === 31 && sign === "*" && b === 37 ) {
  console.log('31 * 37 = 1147')
} else
if (a === 31 && sign === "*" && b === 38 ) {
  console.log('31 * 38 = 1178')
} else
if (a === 31 && sign === "*" && b === 39 ) {
  console.log('31 * 39 = 1209')
} else
if (a === 31 && sign === "*" && b === 40 ) {
  console.log('31 * 40 = 1240')
} else
if (a === 31 && sign === "*" && b === 41 ) {
  console.log('31 * 41 = 1271')
} else
if (a === 31 && sign === "*" && b === 42 ) {
  console.log('31 * 42 = 1302')
} else
if (a === 31 && sign === "*" && b === 43 ) {
  console.log('31 * 43 = 1333')
} else
if (a === 31 && sign === "*" && b === 44 ) {
  console.log('31 * 44 = 1364')
} else
if (a === 31 && sign === "*" && b === 45 ) {
  console.log('31 * 45 = 1395')
} else
if (a === 31 && sign === "*" && b === 46 ) {
  console.log('31 * 46 = 1426')
} else
if (a === 31 && sign === "*" && b === 47 ) {
  console.log('31 * 47 = 1457')
} else
if (a === 31 && sign === "*" && b === 48 ) {
  console.log('31 * 48 = 1488')
} else
if (a === 31 && sign === "*" && b === 49 ) {
  console.log('31 * 49 = 1519')
} else
if (a === 31 && sign === "*" && b === 50 ) {
  console.log('31 * 50 = 1550')
} else
if (a === 32 && sign === "*" && b === 1 ) {
  console.log('32 * 1 = 32')
} else
if (a === 32 && sign === "*" && b === 2 ) {
  console.log('32 * 2 = 64')
} else
if (a === 32 && sign === "*" && b === 3 ) {
  console.log('32 * 3 = 96')
} else
if (a === 32 && sign === "*" && b === 4 ) {
  console.log('32 * 4 = 128')
} else
if (a === 32 && sign === "*" && b === 5 ) {
  console.log('32 * 5 = 160')
} else
if (a === 32 && sign === "*" && b === 6 ) {
  console.log('32 * 6 = 192')
} else
if (a === 32 && sign === "*" && b === 7 ) {
  console.log('32 * 7 = 224')
} else
if (a === 32 && sign === "*" && b === 8 ) {
  console.log('32 * 8 = 256')
} else
if (a === 32 && sign === "*" && b === 9 ) {
  console.log('32 * 9 = 288')
} else
if (a === 32 && sign === "*" && b === 10 ) {
  console.log('32 * 10 = 320')
} else
if (a === 32 && sign === "*" && b === 11 ) {
  console.log('32 * 11 = 352')
} else
if (a === 32 && sign === "*" && b === 12 ) {
  console.log('32 * 12 = 384')
} else
if (a === 32 && sign === "*" && b === 13 ) {
  console.log('32 * 13 = 416')
} else
if (a === 32 && sign === "*" && b === 14 ) {
  console.log('32 * 14 = 448')
} else
if (a === 32 && sign === "*" && b === 15 ) {
  console.log('32 * 15 = 480')
} else
if (a === 32 && sign === "*" && b === 16 ) {
  console.log('32 * 16 = 512')
} else
if (a === 32 && sign === "*" && b === 17 ) {
  console.log('32 * 17 = 544')
} else
if (a === 32 && sign === "*" && b === 18 ) {
  console.log('32 * 18 = 576')
} else
if (a === 32 && sign === "*" && b === 19 ) {
  console.log('32 * 19 = 608')
} else
if (a === 32 && sign === "*" && b === 20 ) {
  console.log('32 * 20 = 640')
} else
if (a === 32 && sign === "*" && b === 21 ) {
  console.log('32 * 21 = 672')
} else
if (a === 32 && sign === "*" && b === 22 ) {
  console.log('32 * 22 = 704')
} else
if (a === 32 && sign === "*" && b === 23 ) {
  console.log('32 * 23 = 736')
} else
if (a === 32 && sign === "*" && b === 24 ) {
  console.log('32 * 24 = 768')
} else
if (a === 32 && sign === "*" && b === 25 ) {
  console.log('32 * 25 = 800')
} else
if (a === 32 && sign === "*" && b === 26 ) {
  console.log('32 * 26 = 832')
} else
if (a === 32 && sign === "*" && b === 27 ) {
  console.log('32 * 27 = 864')
} else
if (a === 32 && sign === "*" && b === 28 ) {
  console.log('32 * 28 = 896')
} else
if (a === 32 && sign === "*" && b === 29 ) {
  console.log('32 * 29 = 928')
} else
if (a === 32 && sign === "*" && b === 30 ) {
  console.log('32 * 30 = 960')
} else
if (a === 32 && sign === "*" && b === 31 ) {
  console.log('32 * 31 = 992')
} else
if (a === 32 && sign === "*" && b === 32 ) {
  console.log('32 * 32 = 1024')
} else
if (a === 32 && sign === "*" && b === 33 ) {
  console.log('32 * 33 = 1056')
} else
if (a === 32 && sign === "*" && b === 34 ) {
  console.log('32 * 34 = 1088')
} else
if (a === 32 && sign === "*" && b === 35 ) {
  console.log('32 * 35 = 1120')
} else
if (a === 32 && sign === "*" && b === 36 ) {
  console.log('32 * 36 = 1152')
} else
if (a === 32 && sign === "*" && b === 37 ) {
  console.log('32 * 37 = 1184')
} else
if (a === 32 && sign === "*" && b === 38 ) {
  console.log('32 * 38 = 1216')
} else
if (a === 32 && sign === "*" && b === 39 ) {
  console.log('32 * 39 = 1248')
} else
if (a === 32 && sign === "*" && b === 40 ) {
  console.log('32 * 40 = 1280')
} else
if (a === 32 && sign === "*" && b === 41 ) {
  console.log('32 * 41 = 1312')
} else
if (a === 32 && sign === "*" && b === 42 ) {
  console.log('32 * 42 = 1344')
} else
if (a === 32 && sign === "*" && b === 43 ) {
  console.log('32 * 43 = 1376')
} else
if (a === 32 && sign === "*" && b === 44 ) {
  console.log('32 * 44 = 1408')
} else
if (a === 32 && sign === "*" && b === 45 ) {
  console.log('32 * 45 = 1440')
} else
if (a === 32 && sign === "*" && b === 46 ) {
  console.log('32 * 46 = 1472')
} else
if (a === 32 && sign === "*" && b === 47 ) {
  console.log('32 * 47 = 1504')
} else
if (a === 32 && sign === "*" && b === 48 ) {
  console.log('32 * 48 = 1536')
} else
if (a === 32 && sign === "*" && b === 49 ) {
  console.log('32 * 49 = 1568')
} else
if (a === 32 && sign === "*" && b === 50 ) {
  console.log('32 * 50 = 1600')
} else
if (a === 33 && sign === "*" && b === 1 ) {
  console.log('33 * 1 = 33')
} else
if (a === 33 && sign === "*" && b === 2 ) {
  console.log('33 * 2 = 66')
} else
if (a === 33 && sign === "*" && b === 3 ) {
  console.log('33 * 3 = 99')
} else
if (a === 33 && sign === "*" && b === 4 ) {
  console.log('33 * 4 = 132')
} else
if (a === 33 && sign === "*" && b === 5 ) {
  console.log('33 * 5 = 165')
} else
if (a === 33 && sign === "*" && b === 6 ) {
  console.log('33 * 6 = 198')
} else
if (a === 33 && sign === "*" && b === 7 ) {
  console.log('33 * 7 = 231')
} else
if (a === 33 && sign === "*" && b === 8 ) {
  console.log('33 * 8 = 264')
} else
if (a === 33 && sign === "*" && b === 9 ) {
  console.log('33 * 9 = 297')
} else
if (a === 33 && sign === "*" && b === 10 ) {
  console.log('33 * 10 = 330')
} else
if (a === 33 && sign === "*" && b === 11 ) {
  console.log('33 * 11 = 363')
} else
if (a === 33 && sign === "*" && b === 12 ) {
  console.log('33 * 12 = 396')
} else
if (a === 33 && sign === "*" && b === 13 ) {
  console.log('33 * 13 = 429')
} else
if (a === 33 && sign === "*" && b === 14 ) {
  console.log('33 * 14 = 462')
} else
if (a === 33 && sign === "*" && b === 15 ) {
  console.log('33 * 15 = 495')
} else
if (a === 33 && sign === "*" && b === 16 ) {
  console.log('33 * 16 = 528')
} else
if (a === 33 && sign === "*" && b === 17 ) {
  console.log('33 * 17 = 561')
} else
if (a === 33 && sign === "*" && b === 18 ) {
  console.log('33 * 18 = 594')
} else
if (a === 33 && sign === "*" && b === 19 ) {
  console.log('33 * 19 = 627')
} else
if (a === 33 && sign === "*" && b === 20 ) {
  console.log('33 * 20 = 660')
} else
if (a === 33 && sign === "*" && b === 21 ) {
  console.log('33 * 21 = 693')
} else
if (a === 33 && sign === "*" && b === 22 ) {
  console.log('33 * 22 = 726')
} else
if (a === 33 && sign === "*" && b === 23 ) {
  console.log('33 * 23 = 759')
} else
if (a === 33 && sign === "*" && b === 24 ) {
  console.log('33 * 24 = 792')
} else
if (a === 33 && sign === "*" && b === 25 ) {
  console.log('33 * 25 = 825')
} else
if (a === 33 && sign === "*" && b === 26 ) {
  console.log('33 * 26 = 858')
} else
if (a === 33 && sign === "*" && b === 27 ) {
  console.log('33 * 27 = 891')
} else
if (a === 33 && sign === "*" && b === 28 ) {
  console.log('33 * 28 = 924')
} else
if (a === 33 && sign === "*" && b === 29 ) {
  console.log('33 * 29 = 957')
} else
if (a === 33 && sign === "*" && b === 30 ) {
  console.log('33 * 30 = 990')
} else
if (a === 33 && sign === "*" && b === 31 ) {
  console.log('33 * 31 = 1023')
} else
if (a === 33 && sign === "*" && b === 32 ) {
  console.log('33 * 32 = 1056')
} else
if (a === 33 && sign === "*" && b === 33 ) {
  console.log('33 * 33 = 1089')
} else
if (a === 33 && sign === "*" && b === 34 ) {
  console.log('33 * 34 = 1122')
} else
if (a === 33 && sign === "*" && b === 35 ) {
  console.log('33 * 35 = 1155')
} else
if (a === 33 && sign === "*" && b === 36 ) {
  console.log('33 * 36 = 1188')
} else
if (a === 33 && sign === "*" && b === 37 ) {
  console.log('33 * 37 = 1221')
} else
if (a === 33 && sign === "*" && b === 38 ) {
  console.log('33 * 38 = 1254')
} else
if (a === 33 && sign === "*" && b === 39 ) {
  console.log('33 * 39 = 1287')
} else
if (a === 33 && sign === "*" && b === 40 ) {
  console.log('33 * 40 = 1320')
} else
if (a === 33 && sign === "*" && b === 41 ) {
  console.log('33 * 41 = 1353')
} else
if (a === 33 && sign === "*" && b === 42 ) {
  console.log('33 * 42 = 1386')
} else
if (a === 33 && sign === "*" && b === 43 ) {
  console.log('33 * 43 = 1419')
} else
if (a === 33 && sign === "*" && b === 44 ) {
  console.log('33 * 44 = 1452')
} else
if (a === 33 && sign === "*" && b === 45 ) {
  console.log('33 * 45 = 1485')
} else
if (a === 33 && sign === "*" && b === 46 ) {
  console.log('33 * 46 = 1518')
} else
if (a === 33 && sign === "*" && b === 47 ) {
  console.log('33 * 47 = 1551')
} else
if (a === 33 && sign === "*" && b === 48 ) {
  console.log('33 * 48 = 1584')
} else
if (a === 33 && sign === "*" && b === 49 ) {
  console.log('33 * 49 = 1617')
} else
if (a === 33 && sign === "*" && b === 50 ) {
  console.log('33 * 50 = 1650')
} else
if (a === 34 && sign === "*" && b === 1 ) {
  console.log('34 * 1 = 34')
} else
if (a === 34 && sign === "*" && b === 2 ) {
  console.log('34 * 2 = 68')
} else
if (a === 34 && sign === "*" && b === 3 ) {
  console.log('34 * 3 = 102')
} else
if (a === 34 && sign === "*" && b === 4 ) {
  console.log('34 * 4 = 136')
} else
if (a === 34 && sign === "*" && b === 5 ) {
  console.log('34 * 5 = 170')
} else
if (a === 34 && sign === "*" && b === 6 ) {
  console.log('34 * 6 = 204')
} else
if (a === 34 && sign === "*" && b === 7 ) {
  console.log('34 * 7 = 238')
} else
if (a === 34 && sign === "*" && b === 8 ) {
  console.log('34 * 8 = 272')
} else
if (a === 34 && sign === "*" && b === 9 ) {
  console.log('34 * 9 = 306')
} else
if (a === 34 && sign === "*" && b === 10 ) {
  console.log('34 * 10 = 340')
} else
if (a === 34 && sign === "*" && b === 11 ) {
  console.log('34 * 11 = 374')
} else
if (a === 34 && sign === "*" && b === 12 ) {
  console.log('34 * 12 = 408')
} else
if (a === 34 && sign === "*" && b === 13 ) {
  console.log('34 * 13 = 442')
} else
if (a === 34 && sign === "*" && b === 14 ) {
  console.log('34 * 14 = 476')
} else
if (a === 34 && sign === "*" && b === 15 ) {
  console.log('34 * 15 = 510')
} else
if (a === 34 && sign === "*" && b === 16 ) {
  console.log('34 * 16 = 544')
} else
if (a === 34 && sign === "*" && b === 17 ) {
  console.log('34 * 17 = 578')
} else
if (a === 34 && sign === "*" && b === 18 ) {
  console.log('34 * 18 = 612')
} else
if (a === 34 && sign === "*" && b === 19 ) {
  console.log('34 * 19 = 646')
} else
if (a === 34 && sign === "*" && b === 20 ) {
  console.log('34 * 20 = 680')
} else
if (a === 34 && sign === "*" && b === 21 ) {
  console.log('34 * 21 = 714')
} else
if (a === 34 && sign === "*" && b === 22 ) {
  console.log('34 * 22 = 748')
} else
if (a === 34 && sign === "*" && b === 23 ) {
  console.log('34 * 23 = 782')
} else
if (a === 34 && sign === "*" && b === 24 ) {
  console.log('34 * 24 = 816')
} else
if (a === 34 && sign === "*" && b === 25 ) {
  console.log('34 * 25 = 850')
} else
if (a === 34 && sign === "*" && b === 26 ) {
  console.log('34 * 26 = 884')
} else
if (a === 34 && sign === "*" && b === 27 ) {
  console.log('34 * 27 = 918')
} else
if (a === 34 && sign === "*" && b === 28 ) {
  console.log('34 * 28 = 952')
} else
if (a === 34 && sign === "*" && b === 29 ) {
  console.log('34 * 29 = 986')
} else
if (a === 34 && sign === "*" && b === 30 ) {
  console.log('34 * 30 = 1020')
} else
if (a === 34 && sign === "*" && b === 31 ) {
  console.log('34 * 31 = 1054')
} else
if (a === 34 && sign === "*" && b === 32 ) {
  console.log('34 * 32 = 1088')
} else
if (a === 34 && sign === "*" && b === 33 ) {
  console.log('34 * 33 = 1122')
} else
if (a === 34 && sign === "*" && b === 34 ) {
  console.log('34 * 34 = 1156')
} else
if (a === 34 && sign === "*" && b === 35 ) {
  console.log('34 * 35 = 1190')
} else
if (a === 34 && sign === "*" && b === 36 ) {
  console.log('34 * 36 = 1224')
} else
if (a === 34 && sign === "*" && b === 37 ) {
  console.log('34 * 37 = 1258')
} else
if (a === 34 && sign === "*" && b === 38 ) {
  console.log('34 * 38 = 1292')
} else
if (a === 34 && sign === "*" && b === 39 ) {
  console.log('34 * 39 = 1326')
} else
if (a === 34 && sign === "*" && b === 40 ) {
  console.log('34 * 40 = 1360')
} else
if (a === 34 && sign === "*" && b === 41 ) {
  console.log('34 * 41 = 1394')
} else
if (a === 34 && sign === "*" && b === 42 ) {
  console.log('34 * 42 = 1428')
} else
if (a === 34 && sign === "*" && b === 43 ) {
  console.log('34 * 43 = 1462')
} else
if (a === 34 && sign === "*" && b === 44 ) {
  console.log('34 * 44 = 1496')
} else
if (a === 34 && sign === "*" && b === 45 ) {
  console.log('34 * 45 = 1530')
} else
if (a === 34 && sign === "*" && b === 46 ) {
  console.log('34 * 46 = 1564')
} else
if (a === 34 && sign === "*" && b === 47 ) {
  console.log('34 * 47 = 1598')
} else
if (a === 34 && sign === "*" && b === 48 ) {
  console.log('34 * 48 = 1632')
} else
if (a === 34 && sign === "*" && b === 49 ) {
  console.log('34 * 49 = 1666')
} else
if (a === 34 && sign === "*" && b === 50 ) {
  console.log('34 * 50 = 1700')
} else
if (a === 35 && sign === "*" && b === 1 ) {
  console.log('35 * 1 = 35')
} else
if (a === 35 && sign === "*" && b === 2 ) {
  console.log('35 * 2 = 70')
} else
if (a === 35 && sign === "*" && b === 3 ) {
  console.log('35 * 3 = 105')
} else
if (a === 35 && sign === "*" && b === 4 ) {
  console.log('35 * 4 = 140')
} else
if (a === 35 && sign === "*" && b === 5 ) {
  console.log('35 * 5 = 175')
} else
if (a === 35 && sign === "*" && b === 6 ) {
  console.log('35 * 6 = 210')
} else
if (a === 35 && sign === "*" && b === 7 ) {
  console.log('35 * 7 = 245')
} else
if (a === 35 && sign === "*" && b === 8 ) {
  console.log('35 * 8 = 280')
} else
if (a === 35 && sign === "*" && b === 9 ) {
  console.log('35 * 9 = 315')
} else
if (a === 35 && sign === "*" && b === 10 ) {
  console.log('35 * 10 = 350')
} else
if (a === 35 && sign === "*" && b === 11 ) {
  console.log('35 * 11 = 385')
} else
if (a === 35 && sign === "*" && b === 12 ) {
  console.log('35 * 12 = 420')
} else
if (a === 35 && sign === "*" && b === 13 ) {
  console.log('35 * 13 = 455')
} else
if (a === 35 && sign === "*" && b === 14 ) {
  console.log('35 * 14 = 490')
} else
if (a === 35 && sign === "*" && b === 15 ) {
  console.log('35 * 15 = 525')
} else
if (a === 35 && sign === "*" && b === 16 ) {
  console.log('35 * 16 = 560')
} else
if (a === 35 && sign === "*" && b === 17 ) {
  console.log('35 * 17 = 595')
} else
if (a === 35 && sign === "*" && b === 18 ) {
  console.log('35 * 18 = 630')
} else
if (a === 35 && sign === "*" && b === 19 ) {
  console.log('35 * 19 = 665')
} else
if (a === 35 && sign === "*" && b === 20 ) {
  console.log('35 * 20 = 700')
} else
if (a === 35 && sign === "*" && b === 21 ) {
  console.log('35 * 21 = 735')
} else
if (a === 35 && sign === "*" && b === 22 ) {
  console.log('35 * 22 = 770')
} else
if (a === 35 && sign === "*" && b === 23 ) {
  console.log('35 * 23 = 805')
} else
if (a === 35 && sign === "*" && b === 24 ) {
  console.log('35 * 24 = 840')
} else
if (a === 35 && sign === "*" && b === 25 ) {
  console.log('35 * 25 = 875')
} else
if (a === 35 && sign === "*" && b === 26 ) {
  console.log('35 * 26 = 910')
} else
if (a === 35 && sign === "*" && b === 27 ) {
  console.log('35 * 27 = 945')
} else
if (a === 35 && sign === "*" && b === 28 ) {
  console.log('35 * 28 = 980')
} else
if (a === 35 && sign === "*" && b === 29 ) {
  console.log('35 * 29 = 1015')
} else
if (a === 35 && sign === "*" && b === 30 ) {
  console.log('35 * 30 = 1050')
} else
if (a === 35 && sign === "*" && b === 31 ) {
  console.log('35 * 31 = 1085')
} else
if (a === 35 && sign === "*" && b === 32 ) {
  console.log('35 * 32 = 1120')
} else
if (a === 35 && sign === "*" && b === 33 ) {
  console.log('35 * 33 = 1155')
} else
if (a === 35 && sign === "*" && b === 34 ) {
  console.log('35 * 34 = 1190')
} else
if (a === 35 && sign === "*" && b === 35 ) {
  console.log('35 * 35 = 1225')
} else
if (a === 35 && sign === "*" && b === 36 ) {
  console.log('35 * 36 = 1260')
} else
if (a === 35 && sign === "*" && b === 37 ) {
  console.log('35 * 37 = 1295')
} else
if (a === 35 && sign === "*" && b === 38 ) {
  console.log('35 * 38 = 1330')
} else
if (a === 35 && sign === "*" && b === 39 ) {
  console.log('35 * 39 = 1365')
} else
if (a === 35 && sign === "*" && b === 40 ) {
  console.log('35 * 40 = 1400')
} else
if (a === 35 && sign === "*" && b === 41 ) {
  console.log('35 * 41 = 1435')
} else
if (a === 35 && sign === "*" && b === 42 ) {
  console.log('35 * 42 = 1470')
} else
if (a === 35 && sign === "*" && b === 43 ) {
  console.log('35 * 43 = 1505')
} else
if (a === 35 && sign === "*" && b === 44 ) {
  console.log('35 * 44 = 1540')
} else
if (a === 35 && sign === "*" && b === 45 ) {
  console.log('35 * 45 = 1575')
} else
if (a === 35 && sign === "*" && b === 46 ) {
  console.log('35 * 46 = 1610')
} else
if (a === 35 && sign === "*" && b === 47 ) {
  console.log('35 * 47 = 1645')
} else
if (a === 35 && sign === "*" && b === 48 ) {
  console.log('35 * 48 = 1680')
} else
if (a === 35 && sign === "*" && b === 49 ) {
  console.log('35 * 49 = 1715')
} else
if (a === 35 && sign === "*" && b === 50 ) {
  console.log('35 * 50 = 1750')
} else
if (a === 36 && sign === "*" && b === 1 ) {
  console.log('36 * 1 = 36')
} else
if (a === 36 && sign === "*" && b === 2 ) {
  console.log('36 * 2 = 72')
} else
if (a === 36 && sign === "*" && b === 3 ) {
  console.log('36 * 3 = 108')
} else
if (a === 36 && sign === "*" && b === 4 ) {
  console.log('36 * 4 = 144')
} else
if (a === 36 && sign === "*" && b === 5 ) {
  console.log('36 * 5 = 180')
} else
if (a === 36 && sign === "*" && b === 6 ) {
  console.log('36 * 6 = 216')
} else
if (a === 36 && sign === "*" && b === 7 ) {
  console.log('36 * 7 = 252')
} else
if (a === 36 && sign === "*" && b === 8 ) {
  console.log('36 * 8 = 288')
} else
if (a === 36 && sign === "*" && b === 9 ) {
  console.log('36 * 9 = 324')
} else
if (a === 36 && sign === "*" && b === 10 ) {
  console.log('36 * 10 = 360')
} else
if (a === 36 && sign === "*" && b === 11 ) {
  console.log('36 * 11 = 396')
} else
if (a === 36 && sign === "*" && b === 12 ) {
  console.log('36 * 12 = 432')
} else
if (a === 36 && sign === "*" && b === 13 ) {
  console.log('36 * 13 = 468')
} else
if (a === 36 && sign === "*" && b === 14 ) {
  console.log('36 * 14 = 504')
} else
if (a === 36 && sign === "*" && b === 15 ) {
  console.log('36 * 15 = 540')
} else
if (a === 36 && sign === "*" && b === 16 ) {
  console.log('36 * 16 = 576')
} else
if (a === 36 && sign === "*" && b === 17 ) {
  console.log('36 * 17 = 612')
} else
if (a === 36 && sign === "*" && b === 18 ) {
  console.log('36 * 18 = 648')
} else
if (a === 36 && sign === "*" && b === 19 ) {
  console.log('36 * 19 = 684')
} else
if (a === 36 && sign === "*" && b === 20 ) {
  console.log('36 * 20 = 720')
} else
if (a === 36 && sign === "*" && b === 21 ) {
  console.log('36 * 21 = 756')
} else
if (a === 36 && sign === "*" && b === 22 ) {
  console.log('36 * 22 = 792')
} else
if (a === 36 && sign === "*" && b === 23 ) {
  console.log('36 * 23 = 828')
} else
if (a === 36 && sign === "*" && b === 24 ) {
  console.log('36 * 24 = 864')
} else
if (a === 36 && sign === "*" && b === 25 ) {
  console.log('36 * 25 = 900')
} else
if (a === 36 && sign === "*" && b === 26 ) {
  console.log('36 * 26 = 936')
} else
if (a === 36 && sign === "*" && b === 27 ) {
  console.log('36 * 27 = 972')
} else
if (a === 36 && sign === "*" && b === 28 ) {
  console.log('36 * 28 = 1008')
} else
if (a === 36 && sign === "*" && b === 29 ) {
  console.log('36 * 29 = 1044')
} else
if (a === 36 && sign === "*" && b === 30 ) {
  console.log('36 * 30 = 1080')
} else
if (a === 36 && sign === "*" && b === 31 ) {
  console.log('36 * 31 = 1116')
} else
if (a === 36 && sign === "*" && b === 32 ) {
  console.log('36 * 32 = 1152')
} else
if (a === 36 && sign === "*" && b === 33 ) {
  console.log('36 * 33 = 1188')
} else
if (a === 36 && sign === "*" && b === 34 ) {
  console.log('36 * 34 = 1224')
} else
if (a === 36 && sign === "*" && b === 35 ) {
  console.log('36 * 35 = 1260')
} else
if (a === 36 && sign === "*" && b === 36 ) {
  console.log('36 * 36 = 1296')
} else
if (a === 36 && sign === "*" && b === 37 ) {
  console.log('36 * 37 = 1332')
} else
if (a === 36 && sign === "*" && b === 38 ) {
  console.log('36 * 38 = 1368')
} else
if (a === 36 && sign === "*" && b === 39 ) {
  console.log('36 * 39 = 1404')
} else
if (a === 36 && sign === "*" && b === 40 ) {
  console.log('36 * 40 = 1440')
} else
if (a === 36 && sign === "*" && b === 41 ) {
  console.log('36 * 41 = 1476')
} else
if (a === 36 && sign === "*" && b === 42 ) {
  console.log('36 * 42 = 1512')
} else
if (a === 36 && sign === "*" && b === 43 ) {
  console.log('36 * 43 = 1548')
} else
if (a === 36 && sign === "*" && b === 44 ) {
  console.log('36 * 44 = 1584')
} else
if (a === 36 && sign === "*" && b === 45 ) {
  console.log('36 * 45 = 1620')
} else
if (a === 36 && sign === "*" && b === 46 ) {
  console.log('36 * 46 = 1656')
} else
if (a === 36 && sign === "*" && b === 47 ) {
  console.log('36 * 47 = 1692')
} else
if (a === 36 && sign === "*" && b === 48 ) {
  console.log('36 * 48 = 1728')
} else
if (a === 36 && sign === "*" && b === 49 ) {
  console.log('36 * 49 = 1764')
} else
if (a === 36 && sign === "*" && b === 50 ) {
  console.log('36 * 50 = 1800')
} else
if (a === 37 && sign === "*" && b === 1 ) {
  console.log('37 * 1 = 37')
} else
if (a === 37 && sign === "*" && b === 2 ) {
  console.log('37 * 2 = 74')
} else
if (a === 37 && sign === "*" && b === 3 ) {
  console.log('37 * 3 = 111')
} else
if (a === 37 && sign === "*" && b === 4 ) {
  console.log('37 * 4 = 148')
} else
if (a === 37 && sign === "*" && b === 5 ) {
  console.log('37 * 5 = 185')
} else
if (a === 37 && sign === "*" && b === 6 ) {
  console.log('37 * 6 = 222')
} else
if (a === 37 && sign === "*" && b === 7 ) {
  console.log('37 * 7 = 259')
} else
if (a === 37 && sign === "*" && b === 8 ) {
  console.log('37 * 8 = 296')
} else
if (a === 37 && sign === "*" && b === 9 ) {
  console.log('37 * 9 = 333')
} else
if (a === 37 && sign === "*" && b === 10 ) {
  console.log('37 * 10 = 370')
} else
if (a === 37 && sign === "*" && b === 11 ) {
  console.log('37 * 11 = 407')
} else
if (a === 37 && sign === "*" && b === 12 ) {
  console.log('37 * 12 = 444')
} else
if (a === 37 && sign === "*" && b === 13 ) {
  console.log('37 * 13 = 481')
} else
if (a === 37 && sign === "*" && b === 14 ) {
  console.log('37 * 14 = 518')
} else
if (a === 37 && sign === "*" && b === 15 ) {
  console.log('37 * 15 = 555')
} else
if (a === 37 && sign === "*" && b === 16 ) {
  console.log('37 * 16 = 592')
} else
if (a === 37 && sign === "*" && b === 17 ) {
  console.log('37 * 17 = 629')
} else
if (a === 37 && sign === "*" && b === 18 ) {
  console.log('37 * 18 = 666')
} else
if (a === 37 && sign === "*" && b === 19 ) {
  console.log('37 * 19 = 703')
} else
if (a === 37 && sign === "*" && b === 20 ) {
  console.log('37 * 20 = 740')
} else
if (a === 37 && sign === "*" && b === 21 ) {
  console.log('37 * 21 = 777')
} else
if (a === 37 && sign === "*" && b === 22 ) {
  console.log('37 * 22 = 814')
} else
if (a === 37 && sign === "*" && b === 23 ) {
  console.log('37 * 23 = 851')
} else
if (a === 37 && sign === "*" && b === 24 ) {
  console.log('37 * 24 = 888')
} else
if (a === 37 && sign === "*" && b === 25 ) {
  console.log('37 * 25 = 925')
} else
if (a === 37 && sign === "*" && b === 26 ) {
  console.log('37 * 26 = 962')
} else
if (a === 37 && sign === "*" && b === 27 ) {
  console.log('37 * 27 = 999')
} else
if (a === 37 && sign === "*" && b === 28 ) {
  console.log('37 * 28 = 1036')
} else
if (a === 37 && sign === "*" && b === 29 ) {
  console.log('37 * 29 = 1073')
} else
if (a === 37 && sign === "*" && b === 30 ) {
  console.log('37 * 30 = 1110')
} else
if (a === 37 && sign === "*" && b === 31 ) {
  console.log('37 * 31 = 1147')
} else
if (a === 37 && sign === "*" && b === 32 ) {
  console.log('37 * 32 = 1184')
} else
if (a === 37 && sign === "*" && b === 33 ) {
  console.log('37 * 33 = 1221')
} else
if (a === 37 && sign === "*" && b === 34 ) {
  console.log('37 * 34 = 1258')
} else
if (a === 37 && sign === "*" && b === 35 ) {
  console.log('37 * 35 = 1295')
} else
if (a === 37 && sign === "*" && b === 36 ) {
  console.log('37 * 36 = 1332')
} else
if (a === 37 && sign === "*" && b === 37 ) {
  console.log('37 * 37 = 1369')
} else
if (a === 37 && sign === "*" && b === 38 ) {
  console.log('37 * 38 = 1406')
} else
if (a === 37 && sign === "*" && b === 39 ) {
  console.log('37 * 39 = 1443')
} else
if (a === 37 && sign === "*" && b === 40 ) {
  console.log('37 * 40 = 1480')
} else
if (a === 37 && sign === "*" && b === 41 ) {
  console.log('37 * 41 = 1517')
} else
if (a === 37 && sign === "*" && b === 42 ) {
  console.log('37 * 42 = 1554')
} else
if (a === 37 && sign === "*" && b === 43 ) {
  console.log('37 * 43 = 1591')
} else
if (a === 37 && sign === "*" && b === 44 ) {
  console.log('37 * 44 = 1628')
} else
if (a === 37 && sign === "*" && b === 45 ) {
  console.log('37 * 45 = 1665')
} else
if (a === 37 && sign === "*" && b === 46 ) {
  console.log('37 * 46 = 1702')
} else
if (a === 37 && sign === "*" && b === 47 ) {
  console.log('37 * 47 = 1739')
} else
if (a === 37 && sign === "*" && b === 48 ) {
  console.log('37 * 48 = 1776')
} else
if (a === 37 && sign === "*" && b === 49 ) {
  console.log('37 * 49 = 1813')
} else
if (a === 37 && sign === "*" && b === 50 ) {
  console.log('37 * 50 = 1850')
} else
if (a === 38 && sign === "*" && b === 1 ) {
  console.log('38 * 1 = 38')
} else
if (a === 38 && sign === "*" && b === 2 ) {
  console.log('38 * 2 = 76')
} else
if (a === 38 && sign === "*" && b === 3 ) {
  console.log('38 * 3 = 114')
} else
if (a === 38 && sign === "*" && b === 4 ) {
  console.log('38 * 4 = 152')
} else
if (a === 38 && sign === "*" && b === 5 ) {
  console.log('38 * 5 = 190')
} else
if (a === 38 && sign === "*" && b === 6 ) {
  console.log('38 * 6 = 228')
} else
if (a === 38 && sign === "*" && b === 7 ) {
  console.log('38 * 7 = 266')
} else
if (a === 38 && sign === "*" && b === 8 ) {
  console.log('38 * 8 = 304')
} else
if (a === 38 && sign === "*" && b === 9 ) {
  console.log('38 * 9 = 342')
} else
if (a === 38 && sign === "*" && b === 10 ) {
  console.log('38 * 10 = 380')
} else
if (a === 38 && sign === "*" && b === 11 ) {
  console.log('38 * 11 = 418')
} else
if (a === 38 && sign === "*" && b === 12 ) {
  console.log('38 * 12 = 456')
} else
if (a === 38 && sign === "*" && b === 13 ) {
  console.log('38 * 13 = 494')
} else
if (a === 38 && sign === "*" && b === 14 ) {
  console.log('38 * 14 = 532')
} else
if (a === 38 && sign === "*" && b === 15 ) {
  console.log('38 * 15 = 570')
} else
if (a === 38 && sign === "*" && b === 16 ) {
  console.log('38 * 16 = 608')
} else
if (a === 38 && sign === "*" && b === 17 ) {
  console.log('38 * 17 = 646')
} else
if (a === 38 && sign === "*" && b === 18 ) {
  console.log('38 * 18 = 684')
} else
if (a === 38 && sign === "*" && b === 19 ) {
  console.log('38 * 19 = 722')
} else
if (a === 38 && sign === "*" && b === 20 ) {
  console.log('38 * 20 = 760')
} else
if (a === 38 && sign === "*" && b === 21 ) {
  console.log('38 * 21 = 798')
} else
if (a === 38 && sign === "*" && b === 22 ) {
  console.log('38 * 22 = 836')
} else
if (a === 38 && sign === "*" && b === 23 ) {
  console.log('38 * 23 = 874')
} else
if (a === 38 && sign === "*" && b === 24 ) {
  console.log('38 * 24 = 912')
} else
if (a === 38 && sign === "*" && b === 25 ) {
  console.log('38 * 25 = 950')
} else
if (a === 38 && sign === "*" && b === 26 ) {
  console.log('38 * 26 = 988')
} else
if (a === 38 && sign === "*" && b === 27 ) {
  console.log('38 * 27 = 1026')
} else
if (a === 38 && sign === "*" && b === 28 ) {
  console.log('38 * 28 = 1064')
} else
if (a === 38 && sign === "*" && b === 29 ) {
  console.log('38 * 29 = 1102')
} else
if (a === 38 && sign === "*" && b === 30 ) {
  console.log('38 * 30 = 1140')
} else
if (a === 38 && sign === "*" && b === 31 ) {
  console.log('38 * 31 = 1178')
} else
if (a === 38 && sign === "*" && b === 32 ) {
  console.log('38 * 32 = 1216')
} else
if (a === 38 && sign === "*" && b === 33 ) {
  console.log('38 * 33 = 1254')
} else
if (a === 38 && sign === "*" && b === 34 ) {
  console.log('38 * 34 = 1292')
} else
if (a === 38 && sign === "*" && b === 35 ) {
  console.log('38 * 35 = 1330')
} else
if (a === 38 && sign === "*" && b === 36 ) {
  console.log('38 * 36 = 1368')
} else
if (a === 38 && sign === "*" && b === 37 ) {
  console.log('38 * 37 = 1406')
} else
if (a === 38 && sign === "*" && b === 38 ) {
  console.log('38 * 38 = 1444')
} else
if (a === 38 && sign === "*" && b === 39 ) {
  console.log('38 * 39 = 1482')
} else
if (a === 38 && sign === "*" && b === 40 ) {
  console.log('38 * 40 = 1520')
} else
if (a === 38 && sign === "*" && b === 41 ) {
  console.log('38 * 41 = 1558')
} else
if (a === 38 && sign === "*" && b === 42 ) {
  console.log('38 * 42 = 1596')
} else
if (a === 38 && sign === "*" && b === 43 ) {
  console.log('38 * 43 = 1634')
} else
if (a === 38 && sign === "*" && b === 44 ) {
  console.log('38 * 44 = 1672')
} else
if (a === 38 && sign === "*" && b === 45 ) {
  console.log('38 * 45 = 1710')
} else
if (a === 38 && sign === "*" && b === 46 ) {
  console.log('38 * 46 = 1748')
} else
if (a === 38 && sign === "*" && b === 47 ) {
  console.log('38 * 47 = 1786')
} else
if (a === 38 && sign === "*" && b === 48 ) {
  console.log('38 * 48 = 1824')
} else
if (a === 38 && sign === "*" && b === 49 ) {
  console.log('38 * 49 = 1862')
} else
if (a === 38 && sign === "*" && b === 50 ) {
  console.log('38 * 50 = 1900')
} else
if (a === 39 && sign === "*" && b === 1 ) {
  console.log('39 * 1 = 39')
} else
if (a === 39 && sign === "*" && b === 2 ) {
  console.log('39 * 2 = 78')
} else
if (a === 39 && sign === "*" && b === 3 ) {
  console.log('39 * 3 = 117')
} else
if (a === 39 && sign === "*" && b === 4 ) {
  console.log('39 * 4 = 156')
} else
if (a === 39 && sign === "*" && b === 5 ) {
  console.log('39 * 5 = 195')
} else
if (a === 39 && sign === "*" && b === 6 ) {
  console.log('39 * 6 = 234')
} else
if (a === 39 && sign === "*" && b === 7 ) {
  console.log('39 * 7 = 273')
} else
if (a === 39 && sign === "*" && b === 8 ) {
  console.log('39 * 8 = 312')
} else
if (a === 39 && sign === "*" && b === 9 ) {
  console.log('39 * 9 = 351')
} else
if (a === 39 && sign === "*" && b === 10 ) {
  console.log('39 * 10 = 390')
} else
if (a === 39 && sign === "*" && b === 11 ) {
  console.log('39 * 11 = 429')
} else
if (a === 39 && sign === "*" && b === 12 ) {
  console.log('39 * 12 = 468')
} else
if (a === 39 && sign === "*" && b === 13 ) {
  console.log('39 * 13 = 507')
} else
if (a === 39 && sign === "*" && b === 14 ) {
  console.log('39 * 14 = 546')
} else
if (a === 39 && sign === "*" && b === 15 ) {
  console.log('39 * 15 = 585')
} else
if (a === 39 && sign === "*" && b === 16 ) {
  console.log('39 * 16 = 624')
} else
if (a === 39 && sign === "*" && b === 17 ) {
  console.log('39 * 17 = 663')
} else
if (a === 39 && sign === "*" && b === 18 ) {
  console.log('39 * 18 = 702')
} else
if (a === 39 && sign === "*" && b === 19 ) {
  console.log('39 * 19 = 741')
} else
if (a === 39 && sign === "*" && b === 20 ) {
  console.log('39 * 20 = 780')
} else
if (a === 39 && sign === "*" && b === 21 ) {
  console.log('39 * 21 = 819')
} else
if (a === 39 && sign === "*" && b === 22 ) {
  console.log('39 * 22 = 858')
} else
if (a === 39 && sign === "*" && b === 23 ) {
  console.log('39 * 23 = 897')
} else
if (a === 39 && sign === "*" && b === 24 ) {
  console.log('39 * 24 = 936')
} else
if (a === 39 && sign === "*" && b === 25 ) {
  console.log('39 * 25 = 975')
} else
if (a === 39 && sign === "*" && b === 26 ) {
  console.log('39 * 26 = 1014')
} else
if (a === 39 && sign === "*" && b === 27 ) {
  console.log('39 * 27 = 1053')
} else
if (a === 39 && sign === "*" && b === 28 ) {
  console.log('39 * 28 = 1092')
} else
if (a === 39 && sign === "*" && b === 29 ) {
  console.log('39 * 29 = 1131')
} else
if (a === 39 && sign === "*" && b === 30 ) {
  console.log('39 * 30 = 1170')
} else
if (a === 39 && sign === "*" && b === 31 ) {
  console.log('39 * 31 = 1209')
} else
if (a === 39 && sign === "*" && b === 32 ) {
  console.log('39 * 32 = 1248')
} else
if (a === 39 && sign === "*" && b === 33 ) {
  console.log('39 * 33 = 1287')
} else
if (a === 39 && sign === "*" && b === 34 ) {
  console.log('39 * 34 = 1326')
} else
if (a === 39 && sign === "*" && b === 35 ) {
  console.log('39 * 35 = 1365')
} else
if (a === 39 && sign === "*" && b === 36 ) {
  console.log('39 * 36 = 1404')
} else
if (a === 39 && sign === "*" && b === 37 ) {
  console.log('39 * 37 = 1443')
} else
if (a === 39 && sign === "*" && b === 38 ) {
  console.log('39 * 38 = 1482')
} else
if (a === 39 && sign === "*" && b === 39 ) {
  console.log('39 * 39 = 1521')
} else
if (a === 39 && sign === "*" && b === 40 ) {
  console.log('39 * 40 = 1560')
} else
if (a === 39 && sign === "*" && b === 41 ) {
  console.log('39 * 41 = 1599')
} else
if (a === 39 && sign === "*" && b === 42 ) {
  console.log('39 * 42 = 1638')
} else
if (a === 39 && sign === "*" && b === 43 ) {
  console.log('39 * 43 = 1677')
} else
if (a === 39 && sign === "*" && b === 44 ) {
  console.log('39 * 44 = 1716')
} else
if (a === 39 && sign === "*" && b === 45 ) {
  console.log('39 * 45 = 1755')
} else
if (a === 39 && sign === "*" && b === 46 ) {
  console.log('39 * 46 = 1794')
} else
if (a === 39 && sign === "*" && b === 47 ) {
  console.log('39 * 47 = 1833')
} else
if (a === 39 && sign === "*" && b === 48 ) {
  console.log('39 * 48 = 1872')
} else
if (a === 39 && sign === "*" && b === 49 ) {
  console.log('39 * 49 = 1911')
} else
if (a === 39 && sign === "*" && b === 50 ) {
  console.log('39 * 50 = 1950')
} else
if (a === 40 && sign === "*" && b === 1 ) {
  console.log('40 * 1 = 40')
} else
if (a === 40 && sign === "*" && b === 2 ) {
  console.log('40 * 2 = 80')
} else
if (a === 40 && sign === "*" && b === 3 ) {
  console.log('40 * 3 = 120')
} else
if (a === 40 && sign === "*" && b === 4 ) {
  console.log('40 * 4 = 160')
} else
if (a === 40 && sign === "*" && b === 5 ) {
  console.log('40 * 5 = 200')
} else
if (a === 40 && sign === "*" && b === 6 ) {
  console.log('40 * 6 = 240')
} else
if (a === 40 && sign === "*" && b === 7 ) {
  console.log('40 * 7 = 280')
} else
if (a === 40 && sign === "*" && b === 8 ) {
  console.log('40 * 8 = 320')
} else
if (a === 40 && sign === "*" && b === 9 ) {
  console.log('40 * 9 = 360')
} else
if (a === 40 && sign === "*" && b === 10 ) {
  console.log('40 * 10 = 400')
} else
if (a === 40 && sign === "*" && b === 11 ) {
  console.log('40 * 11 = 440')
} else
if (a === 40 && sign === "*" && b === 12 ) {
  console.log('40 * 12 = 480')
} else
if (a === 40 && sign === "*" && b === 13 ) {
  console.log('40 * 13 = 520')
} else
if (a === 40 && sign === "*" && b === 14 ) {
  console.log('40 * 14 = 560')
} else
if (a === 40 && sign === "*" && b === 15 ) {
  console.log('40 * 15 = 600')
} else
if (a === 40 && sign === "*" && b === 16 ) {
  console.log('40 * 16 = 640')
} else
if (a === 40 && sign === "*" && b === 17 ) {
  console.log('40 * 17 = 680')
} else
if (a === 40 && sign === "*" && b === 18 ) {
  console.log('40 * 18 = 720')
} else
if (a === 40 && sign === "*" && b === 19 ) {
  console.log('40 * 19 = 760')
} else
if (a === 40 && sign === "*" && b === 20 ) {
  console.log('40 * 20 = 800')
} else
if (a === 40 && sign === "*" && b === 21 ) {
  console.log('40 * 21 = 840')
} else
if (a === 40 && sign === "*" && b === 22 ) {
  console.log('40 * 22 = 880')
} else
if (a === 40 && sign === "*" && b === 23 ) {
  console.log('40 * 23 = 920')
} else
if (a === 40 && sign === "*" && b === 24 ) {
  console.log('40 * 24 = 960')
} else
if (a === 40 && sign === "*" && b === 25 ) {
  console.log('40 * 25 = 1000')
} else
if (a === 40 && sign === "*" && b === 26 ) {
  console.log('40 * 26 = 1040')
} else
if (a === 40 && sign === "*" && b === 27 ) {
  console.log('40 * 27 = 1080')
} else
if (a === 40 && sign === "*" && b === 28 ) {
  console.log('40 * 28 = 1120')
} else
if (a === 40 && sign === "*" && b === 29 ) {
  console.log('40 * 29 = 1160')
} else
if (a === 40 && sign === "*" && b === 30 ) {
  console.log('40 * 30 = 1200')
} else
if (a === 40 && sign === "*" && b === 31 ) {
  console.log('40 * 31 = 1240')
} else
if (a === 40 && sign === "*" && b === 32 ) {
  console.log('40 * 32 = 1280')
} else
if (a === 40 && sign === "*" && b === 33 ) {
  console.log('40 * 33 = 1320')
} else
if (a === 40 && sign === "*" && b === 34 ) {
  console.log('40 * 34 = 1360')
} else
if (a === 40 && sign === "*" && b === 35 ) {
  console.log('40 * 35 = 1400')
} else
if (a === 40 && sign === "*" && b === 36 ) {
  console.log('40 * 36 = 1440')
} else
if (a === 40 && sign === "*" && b === 37 ) {
  console.log('40 * 37 = 1480')
} else
if (a === 40 && sign === "*" && b === 38 ) {
  console.log('40 * 38 = 1520')
} else
if (a === 40 && sign === "*" && b === 39 ) {
  console.log('40 * 39 = 1560')
} else
if (a === 40 && sign === "*" && b === 40 ) {
  console.log('40 * 40 = 1600')
} else
if (a === 40 && sign === "*" && b === 41 ) {
  console.log('40 * 41 = 1640')
} else
if (a === 40 && sign === "*" && b === 42 ) {
  console.log('40 * 42 = 1680')
} else
if (a === 40 && sign === "*" && b === 43 ) {
  console.log('40 * 43 = 1720')
} else
if (a === 40 && sign === "*" && b === 44 ) {
  console.log('40 * 44 = 1760')
} else
if (a === 40 && sign === "*" && b === 45 ) {
  console.log('40 * 45 = 1800')
} else
if (a === 40 && sign === "*" && b === 46 ) {
  console.log('40 * 46 = 1840')
} else
if (a === 40 && sign === "*" && b === 47 ) {
  console.log('40 * 47 = 1880')
} else
if (a === 40 && sign === "*" && b === 48 ) {
  console.log('40 * 48 = 1920')
} else
if (a === 40 && sign === "*" && b === 49 ) {
  console.log('40 * 49 = 1960')
} else
if (a === 40 && sign === "*" && b === 50 ) {
  console.log('40 * 50 = 2000')
} else
if (a === 41 && sign === "*" && b === 1 ) {
  console.log('41 * 1 = 41')
} else
if (a === 41 && sign === "*" && b === 2 ) {
  console.log('41 * 2 = 82')
} else
if (a === 41 && sign === "*" && b === 3 ) {
  console.log('41 * 3 = 123')
} else
if (a === 41 && sign === "*" && b === 4 ) {
  console.log('41 * 4 = 164')
} else
if (a === 41 && sign === "*" && b === 5 ) {
  console.log('41 * 5 = 205')
} else
if (a === 41 && sign === "*" && b === 6 ) {
  console.log('41 * 6 = 246')
} else
if (a === 41 && sign === "*" && b === 7 ) {
  console.log('41 * 7 = 287')
} else
if (a === 41 && sign === "*" && b === 8 ) {
  console.log('41 * 8 = 328')
} else
if (a === 41 && sign === "*" && b === 9 ) {
  console.log('41 * 9 = 369')
} else
if (a === 41 && sign === "*" && b === 10 ) {
  console.log('41 * 10 = 410')
} else
if (a === 41 && sign === "*" && b === 11 ) {
  console.log('41 * 11 = 451')
} else
if (a === 41 && sign === "*" && b === 12 ) {
  console.log('41 * 12 = 492')
} else
if (a === 41 && sign === "*" && b === 13 ) {
  console.log('41 * 13 = 533')
} else
if (a === 41 && sign === "*" && b === 14 ) {
  console.log('41 * 14 = 574')
} else
if (a === 41 && sign === "*" && b === 15 ) {
  console.log('41 * 15 = 615')
} else
if (a === 41 && sign === "*" && b === 16 ) {
  console.log('41 * 16 = 656')
} else
if (a === 41 && sign === "*" && b === 17 ) {
  console.log('41 * 17 = 697')
} else
if (a === 41 && sign === "*" && b === 18 ) {
  console.log('41 * 18 = 738')
} else
if (a === 41 && sign === "*" && b === 19 ) {
  console.log('41 * 19 = 779')
} else
if (a === 41 && sign === "*" && b === 20 ) {
  console.log('41 * 20 = 820')
} else
if (a === 41 && sign === "*" && b === 21 ) {
  console.log('41 * 21 = 861')
} else
if (a === 41 && sign === "*" && b === 22 ) {
  console.log('41 * 22 = 902')
} else
if (a === 41 && sign === "*" && b === 23 ) {
  console.log('41 * 23 = 943')
} else
if (a === 41 && sign === "*" && b === 24 ) {
  console.log('41 * 24 = 984')
} else
if (a === 41 && sign === "*" && b === 25 ) {
  console.log('41 * 25 = 1025')
} else
if (a === 41 && sign === "*" && b === 26 ) {
  console.log('41 * 26 = 1066')
} else
if (a === 41 && sign === "*" && b === 27 ) {
  console.log('41 * 27 = 1107')
} else
if (a === 41 && sign === "*" && b === 28 ) {
  console.log('41 * 28 = 1148')
} else
if (a === 41 && sign === "*" && b === 29 ) {
  console.log('41 * 29 = 1189')
} else
if (a === 41 && sign === "*" && b === 30 ) {
  console.log('41 * 30 = 1230')
} else
if (a === 41 && sign === "*" && b === 31 ) {
  console.log('41 * 31 = 1271')
} else
if (a === 41 && sign === "*" && b === 32 ) {
  console.log('41 * 32 = 1312')
} else
if (a === 41 && sign === "*" && b === 33 ) {
  console.log('41 * 33 = 1353')
} else
if (a === 41 && sign === "*" && b === 34 ) {
  console.log('41 * 34 = 1394')
} else
if (a === 41 && sign === "*" && b === 35 ) {
  console.log('41 * 35 = 1435')
} else
if (a === 41 && sign === "*" && b === 36 ) {
  console.log('41 * 36 = 1476')
} else
if (a === 41 && sign === "*" && b === 37 ) {
  console.log('41 * 37 = 1517')
} else
if (a === 41 && sign === "*" && b === 38 ) {
  console.log('41 * 38 = 1558')
} else
if (a === 41 && sign === "*" && b === 39 ) {
  console.log('41 * 39 = 1599')
} else
if (a === 41 && sign === "*" && b === 40 ) {
  console.log('41 * 40 = 1640')
} else
if (a === 41 && sign === "*" && b === 41 ) {
  console.log('41 * 41 = 1681')
} else
if (a === 41 && sign === "*" && b === 42 ) {
  console.log('41 * 42 = 1722')
} else
if (a === 41 && sign === "*" && b === 43 ) {
  console.log('41 * 43 = 1763')
} else
if (a === 41 && sign === "*" && b === 44 ) {
  console.log('41 * 44 = 1804')
} else
if (a === 41 && sign === "*" && b === 45 ) {
  console.log('41 * 45 = 1845')
} else
if (a === 41 && sign === "*" && b === 46 ) {
  console.log('41 * 46 = 1886')
} else
if (a === 41 && sign === "*" && b === 47 ) {
  console.log('41 * 47 = 1927')
} else
if (a === 41 && sign === "*" && b === 48 ) {
  console.log('41 * 48 = 1968')
} else
if (a === 41 && sign === "*" && b === 49 ) {
  console.log('41 * 49 = 2009')
} else
if (a === 41 && sign === "*" && b === 50 ) {
  console.log('41 * 50 = 2050')
} else
if (a === 42 && sign === "*" && b === 1 ) {
  console.log('42 * 1 = 42')
} else
if (a === 42 && sign === "*" && b === 2 ) {
  console.log('42 * 2 = 84')
} else
if (a === 42 && sign === "*" && b === 3 ) {
  console.log('42 * 3 = 126')
} else
if (a === 42 && sign === "*" && b === 4 ) {
  console.log('42 * 4 = 168')
} else
if (a === 42 && sign === "*" && b === 5 ) {
  console.log('42 * 5 = 210')
} else
if (a === 42 && sign === "*" && b === 6 ) {
  console.log('42 * 6 = 252')
} else
if (a === 42 && sign === "*" && b === 7 ) {
  console.log('42 * 7 = 294')
} else
if (a === 42 && sign === "*" && b === 8 ) {
  console.log('42 * 8 = 336')
} else
if (a === 42 && sign === "*" && b === 9 ) {
  console.log('42 * 9 = 378')
} else
if (a === 42 && sign === "*" && b === 10 ) {
  console.log('42 * 10 = 420')
} else
if (a === 42 && sign === "*" && b === 11 ) {
  console.log('42 * 11 = 462')
} else
if (a === 42 && sign === "*" && b === 12 ) {
  console.log('42 * 12 = 504')
} else
if (a === 42 && sign === "*" && b === 13 ) {
  console.log('42 * 13 = 546')
} else
if (a === 42 && sign === "*" && b === 14 ) {
  console.log('42 * 14 = 588')
} else
if (a === 42 && sign === "*" && b === 15 ) {
  console.log('42 * 15 = 630')
} else
if (a === 42 && sign === "*" && b === 16 ) {
  console.log('42 * 16 = 672')
} else
if (a === 42 && sign === "*" && b === 17 ) {
  console.log('42 * 17 = 714')
} else
if (a === 42 && sign === "*" && b === 18 ) {
  console.log('42 * 18 = 756')
} else
if (a === 42 && sign === "*" && b === 19 ) {
  console.log('42 * 19 = 798')
} else
if (a === 42 && sign === "*" && b === 20 ) {
  console.log('42 * 20 = 840')
} else
if (a === 42 && sign === "*" && b === 21 ) {
  console.log('42 * 21 = 882')
} else
if (a === 42 && sign === "*" && b === 22 ) {
  console.log('42 * 22 = 924')
} else
if (a === 42 && sign === "*" && b === 23 ) {
  console.log('42 * 23 = 966')
} else
if (a === 42 && sign === "*" && b === 24 ) {
  console.log('42 * 24 = 1008')
} else
if (a === 42 && sign === "*" && b === 25 ) {
  console.log('42 * 25 = 1050')
} else
if (a === 42 && sign === "*" && b === 26 ) {
  console.log('42 * 26 = 1092')
} else
if (a === 42 && sign === "*" && b === 27 ) {
  console.log('42 * 27 = 1134')
} else
if (a === 42 && sign === "*" && b === 28 ) {
  console.log('42 * 28 = 1176')
} else
if (a === 42 && sign === "*" && b === 29 ) {
  console.log('42 * 29 = 1218')
} else
if (a === 42 && sign === "*" && b === 30 ) {
  console.log('42 * 30 = 1260')
} else
if (a === 42 && sign === "*" && b === 31 ) {
  console.log('42 * 31 = 1302')
} else
if (a === 42 && sign === "*" && b === 32 ) {
  console.log('42 * 32 = 1344')
} else
if (a === 42 && sign === "*" && b === 33 ) {
  console.log('42 * 33 = 1386')
} else
if (a === 42 && sign === "*" && b === 34 ) {
  console.log('42 * 34 = 1428')
} else
if (a === 42 && sign === "*" && b === 35 ) {
  console.log('42 * 35 = 1470')
} else
if (a === 42 && sign === "*" && b === 36 ) {
  console.log('42 * 36 = 1512')
} else
if (a === 42 && sign === "*" && b === 37 ) {
  console.log('42 * 37 = 1554')
} else
if (a === 42 && sign === "*" && b === 38 ) {
  console.log('42 * 38 = 1596')
} else
if (a === 42 && sign === "*" && b === 39 ) {
  console.log('42 * 39 = 1638')
} else
if (a === 42 && sign === "*" && b === 40 ) {
  console.log('42 * 40 = 1680')
} else
if (a === 42 && sign === "*" && b === 41 ) {
  console.log('42 * 41 = 1722')
} else
if (a === 42 && sign === "*" && b === 42 ) {
  console.log('42 * 42 = 1764')
} else
if (a === 42 && sign === "*" && b === 43 ) {
  console.log('42 * 43 = 1806')
} else
if (a === 42 && sign === "*" && b === 44 ) {
  console.log('42 * 44 = 1848')
} else
if (a === 42 && sign === "*" && b === 45 ) {
  console.log('42 * 45 = 1890')
} else
if (a === 42 && sign === "*" && b === 46 ) {
  console.log('42 * 46 = 1932')
} else
if (a === 42 && sign === "*" && b === 47 ) {
  console.log('42 * 47 = 1974')
} else
if (a === 42 && sign === "*" && b === 48 ) {
  console.log('42 * 48 = 2016')
} else
if (a === 42 && sign === "*" && b === 49 ) {
  console.log('42 * 49 = 2058')
} else
if (a === 42 && sign === "*" && b === 50 ) {
  console.log('42 * 50 = 2100')
} else
if (a === 43 && sign === "*" && b === 1 ) {
  console.log('43 * 1 = 43')
} else
if (a === 43 && sign === "*" && b === 2 ) {
  console.log('43 * 2 = 86')
} else
if (a === 43 && sign === "*" && b === 3 ) {
  console.log('43 * 3 = 129')
} else
if (a === 43 && sign === "*" && b === 4 ) {
  console.log('43 * 4 = 172')
} else
if (a === 43 && sign === "*" && b === 5 ) {
  console.log('43 * 5 = 215')
} else
if (a === 43 && sign === "*" && b === 6 ) {
  console.log('43 * 6 = 258')
} else
if (a === 43 && sign === "*" && b === 7 ) {
  console.log('43 * 7 = 301')
} else
if (a === 43 && sign === "*" && b === 8 ) {
  console.log('43 * 8 = 344')
} else
if (a === 43 && sign === "*" && b === 9 ) {
  console.log('43 * 9 = 387')
} else
if (a === 43 && sign === "*" && b === 10 ) {
  console.log('43 * 10 = 430')
} else
if (a === 43 && sign === "*" && b === 11 ) {
  console.log('43 * 11 = 473')
} else
if (a === 43 && sign === "*" && b === 12 ) {
  console.log('43 * 12 = 516')
} else
if (a === 43 && sign === "*" && b === 13 ) {
  console.log('43 * 13 = 559')
} else
if (a === 43 && sign === "*" && b === 14 ) {
  console.log('43 * 14 = 602')
} else
if (a === 43 && sign === "*" && b === 15 ) {
  console.log('43 * 15 = 645')
} else
if (a === 43 && sign === "*" && b === 16 ) {
  console.log('43 * 16 = 688')
} else
if (a === 43 && sign === "*" && b === 17 ) {
  console.log('43 * 17 = 731')
} else
if (a === 43 && sign === "*" && b === 18 ) {
  console.log('43 * 18 = 774')
} else
if (a === 43 && sign === "*" && b === 19 ) {
  console.log('43 * 19 = 817')
} else
if (a === 43 && sign === "*" && b === 20 ) {
  console.log('43 * 20 = 860')
} else
if (a === 43 && sign === "*" && b === 21 ) {
  console.log('43 * 21 = 903')
} else
if (a === 43 && sign === "*" && b === 22 ) {
  console.log('43 * 22 = 946')
} else
if (a === 43 && sign === "*" && b === 23 ) {
  console.log('43 * 23 = 989')
} else
if (a === 43 && sign === "*" && b === 24 ) {
  console.log('43 * 24 = 1032')
} else
if (a === 43 && sign === "*" && b === 25 ) {
  console.log('43 * 25 = 1075')
} else
if (a === 43 && sign === "*" && b === 26 ) {
  console.log('43 * 26 = 1118')
} else
if (a === 43 && sign === "*" && b === 27 ) {
  console.log('43 * 27 = 1161')
} else
if (a === 43 && sign === "*" && b === 28 ) {
  console.log('43 * 28 = 1204')
} else
if (a === 43 && sign === "*" && b === 29 ) {
  console.log('43 * 29 = 1247')
} else
if (a === 43 && sign === "*" && b === 30 ) {
  console.log('43 * 30 = 1290')
} else
if (a === 43 && sign === "*" && b === 31 ) {
  console.log('43 * 31 = 1333')
} else
if (a === 43 && sign === "*" && b === 32 ) {
  console.log('43 * 32 = 1376')
} else
if (a === 43 && sign === "*" && b === 33 ) {
  console.log('43 * 33 = 1419')
} else
if (a === 43 && sign === "*" && b === 34 ) {
  console.log('43 * 34 = 1462')
} else
if (a === 43 && sign === "*" && b === 35 ) {
  console.log('43 * 35 = 1505')
} else
if (a === 43 && sign === "*" && b === 36 ) {
  console.log('43 * 36 = 1548')
} else
if (a === 43 && sign === "*" && b === 37 ) {
  console.log('43 * 37 = 1591')
} else
if (a === 43 && sign === "*" && b === 38 ) {
  console.log('43 * 38 = 1634')
} else
if (a === 43 && sign === "*" && b === 39 ) {
  console.log('43 * 39 = 1677')
} else
if (a === 43 && sign === "*" && b === 40 ) {
  console.log('43 * 40 = 1720')
} else
if (a === 43 && sign === "*" && b === 41 ) {
  console.log('43 * 41 = 1763')
} else
if (a === 43 && sign === "*" && b === 42 ) {
  console.log('43 * 42 = 1806')
} else
if (a === 43 && sign === "*" && b === 43 ) {
  console.log('43 * 43 = 1849')
} else
if (a === 43 && sign === "*" && b === 44 ) {
  console.log('43 * 44 = 1892')
} else
if (a === 43 && sign === "*" && b === 45 ) {
  console.log('43 * 45 = 1935')
} else
if (a === 43 && sign === "*" && b === 46 ) {
  console.log('43 * 46 = 1978')
} else
if (a === 43 && sign === "*" && b === 47 ) {
  console.log('43 * 47 = 2021')
} else
if (a === 43 && sign === "*" && b === 48 ) {
  console.log('43 * 48 = 2064')
} else
if (a === 43 && sign === "*" && b === 49 ) {
  console.log('43 * 49 = 2107')
} else
if (a === 43 && sign === "*" && b === 50 ) {
  console.log('43 * 50 = 2150')
} else
if (a === 44 && sign === "*" && b === 1 ) {
  console.log('44 * 1 = 44')
} else
if (a === 44 && sign === "*" && b === 2 ) {
  console.log('44 * 2 = 88')
} else
if (a === 44 && sign === "*" && b === 3 ) {
  console.log('44 * 3 = 132')
} else
if (a === 44 && sign === "*" && b === 4 ) {
  console.log('44 * 4 = 176')
} else
if (a === 44 && sign === "*" && b === 5 ) {
  console.log('44 * 5 = 220')
} else
if (a === 44 && sign === "*" && b === 6 ) {
  console.log('44 * 6 = 264')
} else
if (a === 44 && sign === "*" && b === 7 ) {
  console.log('44 * 7 = 308')
} else
if (a === 44 && sign === "*" && b === 8 ) {
  console.log('44 * 8 = 352')
} else
if (a === 44 && sign === "*" && b === 9 ) {
  console.log('44 * 9 = 396')
} else
if (a === 44 && sign === "*" && b === 10 ) {
  console.log('44 * 10 = 440')
} else
if (a === 44 && sign === "*" && b === 11 ) {
  console.log('44 * 11 = 484')
} else
if (a === 44 && sign === "*" && b === 12 ) {
  console.log('44 * 12 = 528')
} else
if (a === 44 && sign === "*" && b === 13 ) {
  console.log('44 * 13 = 572')
} else
if (a === 44 && sign === "*" && b === 14 ) {
  console.log('44 * 14 = 616')
} else
if (a === 44 && sign === "*" && b === 15 ) {
  console.log('44 * 15 = 660')
} else
if (a === 44 && sign === "*" && b === 16 ) {
  console.log('44 * 16 = 704')
} else
if (a === 44 && sign === "*" && b === 17 ) {
  console.log('44 * 17 = 748')
} else
if (a === 44 && sign === "*" && b === 18 ) {
  console.log('44 * 18 = 792')
} else
if (a === 44 && sign === "*" && b === 19 ) {
  console.log('44 * 19 = 836')
} else
if (a === 44 && sign === "*" && b === 20 ) {
  console.log('44 * 20 = 880')
} else
if (a === 44 && sign === "*" && b === 21 ) {
  console.log('44 * 21 = 924')
} else
if (a === 44 && sign === "*" && b === 22 ) {
  console.log('44 * 22 = 968')
} else
if (a === 44 && sign === "*" && b === 23 ) {
  console.log('44 * 23 = 1012')
} else
if (a === 44 && sign === "*" && b === 24 ) {
  console.log('44 * 24 = 1056')
} else
if (a === 44 && sign === "*" && b === 25 ) {
  console.log('44 * 25 = 1100')
} else
if (a === 44 && sign === "*" && b === 26 ) {
  console.log('44 * 26 = 1144')
} else
if (a === 44 && sign === "*" && b === 27 ) {
  console.log('44 * 27 = 1188')
} else
if (a === 44 && sign === "*" && b === 28 ) {
  console.log('44 * 28 = 1232')
} else
if (a === 44 && sign === "*" && b === 29 ) {
  console.log('44 * 29 = 1276')
} else
if (a === 44 && sign === "*" && b === 30 ) {
  console.log('44 * 30 = 1320')
} else
if (a === 44 && sign === "*" && b === 31 ) {
  console.log('44 * 31 = 1364')
} else
if (a === 44 && sign === "*" && b === 32 ) {
  console.log('44 * 32 = 1408')
} else
if (a === 44 && sign === "*" && b === 33 ) {
  console.log('44 * 33 = 1452')
} else
if (a === 44 && sign === "*" && b === 34 ) {
  console.log('44 * 34 = 1496')
} else
if (a === 44 && sign === "*" && b === 35 ) {
  console.log('44 * 35 = 1540')
} else
if (a === 44 && sign === "*" && b === 36 ) {
  console.log('44 * 36 = 1584')
} else
if (a === 44 && sign === "*" && b === 37 ) {
  console.log('44 * 37 = 1628')
} else
if (a === 44 && sign === "*" && b === 38 ) {
  console.log('44 * 38 = 1672')
} else
if (a === 44 && sign === "*" && b === 39 ) {
  console.log('44 * 39 = 1716')
} else
if (a === 44 && sign === "*" && b === 40 ) {
  console.log('44 * 40 = 1760')
} else
if (a === 44 && sign === "*" && b === 41 ) {
  console.log('44 * 41 = 1804')
} else
if (a === 44 && sign === "*" && b === 42 ) {
  console.log('44 * 42 = 1848')
} else
if (a === 44 && sign === "*" && b === 43 ) {
  console.log('44 * 43 = 1892')
} else
if (a === 44 && sign === "*" && b === 44 ) {
  console.log('44 * 44 = 1936')
} else
if (a === 44 && sign === "*" && b === 45 ) {
  console.log('44 * 45 = 1980')
} else
if (a === 44 && sign === "*" && b === 46 ) {
  console.log('44 * 46 = 2024')
} else
if (a === 44 && sign === "*" && b === 47 ) {
  console.log('44 * 47 = 2068')
} else
if (a === 44 && sign === "*" && b === 48 ) {
  console.log('44 * 48 = 2112')
} else
if (a === 44 && sign === "*" && b === 49 ) {
  console.log('44 * 49 = 2156')
} else
if (a === 44 && sign === "*" && b === 50 ) {
  console.log('44 * 50 = 2200')
} else
if (a === 45 && sign === "*" && b === 1 ) {
  console.log('45 * 1 = 45')
} else
if (a === 45 && sign === "*" && b === 2 ) {
  console.log('45 * 2 = 90')
} else
if (a === 45 && sign === "*" && b === 3 ) {
  console.log('45 * 3 = 135')
} else
if (a === 45 && sign === "*" && b === 4 ) {
  console.log('45 * 4 = 180')
} else
if (a === 45 && sign === "*" && b === 5 ) {
  console.log('45 * 5 = 225')
} else
if (a === 45 && sign === "*" && b === 6 ) {
  console.log('45 * 6 = 270')
} else
if (a === 45 && sign === "*" && b === 7 ) {
  console.log('45 * 7 = 315')
} else
if (a === 45 && sign === "*" && b === 8 ) {
  console.log('45 * 8 = 360')
} else
if (a === 45 && sign === "*" && b === 9 ) {
  console.log('45 * 9 = 405')
} else
if (a === 45 && sign === "*" && b === 10 ) {
  console.log('45 * 10 = 450')
} else
if (a === 45 && sign === "*" && b === 11 ) {
  console.log('45 * 11 = 495')
} else
if (a === 45 && sign === "*" && b === 12 ) {
  console.log('45 * 12 = 540')
} else
if (a === 45 && sign === "*" && b === 13 ) {
  console.log('45 * 13 = 585')
} else
if (a === 45 && sign === "*" && b === 14 ) {
  console.log('45 * 14 = 630')
} else
if (a === 45 && sign === "*" && b === 15 ) {
  console.log('45 * 15 = 675')
} else
if (a === 45 && sign === "*" && b === 16 ) {
  console.log('45 * 16 = 720')
} else
if (a === 45 && sign === "*" && b === 17 ) {
  console.log('45 * 17 = 765')
} else
if (a === 45 && sign === "*" && b === 18 ) {
  console.log('45 * 18 = 810')
} else
if (a === 45 && sign === "*" && b === 19 ) {
  console.log('45 * 19 = 855')
} else
if (a === 45 && sign === "*" && b === 20 ) {
  console.log('45 * 20 = 900')
} else
if (a === 45 && sign === "*" && b === 21 ) {
  console.log('45 * 21 = 945')
} else
if (a === 45 && sign === "*" && b === 22 ) {
  console.log('45 * 22 = 990')
} else
if (a === 45 && sign === "*" && b === 23 ) {
  console.log('45 * 23 = 1035')
} else
if (a === 45 && sign === "*" && b === 24 ) {
  console.log('45 * 24 = 1080')
} else
if (a === 45 && sign === "*" && b === 25 ) {
  console.log('45 * 25 = 1125')
} else
if (a === 45 && sign === "*" && b === 26 ) {
  console.log('45 * 26 = 1170')
} else
if (a === 45 && sign === "*" && b === 27 ) {
  console.log('45 * 27 = 1215')
} else
if (a === 45 && sign === "*" && b === 28 ) {
  console.log('45 * 28 = 1260')
} else
if (a === 45 && sign === "*" && b === 29 ) {
  console.log('45 * 29 = 1305')
} else
if (a === 45 && sign === "*" && b === 30 ) {
  console.log('45 * 30 = 1350')
} else
if (a === 45 && sign === "*" && b === 31 ) {
  console.log('45 * 31 = 1395')
} else
if (a === 45 && sign === "*" && b === 32 ) {
  console.log('45 * 32 = 1440')
} else
if (a === 45 && sign === "*" && b === 33 ) {
  console.log('45 * 33 = 1485')
} else
if (a === 45 && sign === "*" && b === 34 ) {
  console.log('45 * 34 = 1530')
} else
if (a === 45 && sign === "*" && b === 35 ) {
  console.log('45 * 35 = 1575')
} else
if (a === 45 && sign === "*" && b === 36 ) {
  console.log('45 * 36 = 1620')
} else
if (a === 45 && sign === "*" && b === 37 ) {
  console.log('45 * 37 = 1665')
} else
if (a === 45 && sign === "*" && b === 38 ) {
  console.log('45 * 38 = 1710')
} else
if (a === 45 && sign === "*" && b === 39 ) {
  console.log('45 * 39 = 1755')
} else
if (a === 45 && sign === "*" && b === 40 ) {
  console.log('45 * 40 = 1800')
} else
if (a === 45 && sign === "*" && b === 41 ) {
  console.log('45 * 41 = 1845')
} else
if (a === 45 && sign === "*" && b === 42 ) {
  console.log('45 * 42 = 1890')
} else
if (a === 45 && sign === "*" && b === 43 ) {
  console.log('45 * 43 = 1935')
} else
if (a === 45 && sign === "*" && b === 44 ) {
  console.log('45 * 44 = 1980')
} else
if (a === 45 && sign === "*" && b === 45 ) {
  console.log('45 * 45 = 2025')
} else
if (a === 45 && sign === "*" && b === 46 ) {
  console.log('45 * 46 = 2070')
} else
if (a === 45 && sign === "*" && b === 47 ) {
  console.log('45 * 47 = 2115')
} else
if (a === 45 && sign === "*" && b === 48 ) {
  console.log('45 * 48 = 2160')
} else
if (a === 45 && sign === "*" && b === 49 ) {
  console.log('45 * 49 = 2205')
} else
if (a === 45 && sign === "*" && b === 50 ) {
  console.log('45 * 50 = 2250')
} else
if (a === 46 && sign === "*" && b === 1 ) {
  console.log('46 * 1 = 46')
} else
if (a === 46 && sign === "*" && b === 2 ) {
  console.log('46 * 2 = 92')
} else
if (a === 46 && sign === "*" && b === 3 ) {
  console.log('46 * 3 = 138')
} else
if (a === 46 && sign === "*" && b === 4 ) {
  console.log('46 * 4 = 184')
} else
if (a === 46 && sign === "*" && b === 5 ) {
  console.log('46 * 5 = 230')
} else
if (a === 46 && sign === "*" && b === 6 ) {
  console.log('46 * 6 = 276')
} else
if (a === 46 && sign === "*" && b === 7 ) {
  console.log('46 * 7 = 322')
} else
if (a === 46 && sign === "*" && b === 8 ) {
  console.log('46 * 8 = 368')
} else
if (a === 46 && sign === "*" && b === 9 ) {
  console.log('46 * 9 = 414')
} else
if (a === 46 && sign === "*" && b === 10 ) {
  console.log('46 * 10 = 460')
} else
if (a === 46 && sign === "*" && b === 11 ) {
  console.log('46 * 11 = 506')
} else
if (a === 46 && sign === "*" && b === 12 ) {
  console.log('46 * 12 = 552')
} else
if (a === 46 && sign === "*" && b === 13 ) {
  console.log('46 * 13 = 598')
} else
if (a === 46 && sign === "*" && b === 14 ) {
  console.log('46 * 14 = 644')
} else
if (a === 46 && sign === "*" && b === 15 ) {
  console.log('46 * 15 = 690')
} else
if (a === 46 && sign === "*" && b === 16 ) {
  console.log('46 * 16 = 736')
} else
if (a === 46 && sign === "*" && b === 17 ) {
  console.log('46 * 17 = 782')
} else
if (a === 46 && sign === "*" && b === 18 ) {
  console.log('46 * 18 = 828')
} else
if (a === 46 && sign === "*" && b === 19 ) {
  console.log('46 * 19 = 874')
} else
if (a === 46 && sign === "*" && b === 20 ) {
  console.log('46 * 20 = 920')
} else
if (a === 46 && sign === "*" && b === 21 ) {
  console.log('46 * 21 = 966')
} else
if (a === 46 && sign === "*" && b === 22 ) {
  console.log('46 * 22 = 1012')
} else
if (a === 46 && sign === "*" && b === 23 ) {
  console.log('46 * 23 = 1058')
} else
if (a === 46 && sign === "*" && b === 24 ) {
  console.log('46 * 24 = 1104')
} else
if (a === 46 && sign === "*" && b === 25 ) {
  console.log('46 * 25 = 1150')
} else
if (a === 46 && sign === "*" && b === 26 ) {
  console.log('46 * 26 = 1196')
} else
if (a === 46 && sign === "*" && b === 27 ) {
  console.log('46 * 27 = 1242')
} else
if (a === 46 && sign === "*" && b === 28 ) {
  console.log('46 * 28 = 1288')
} else
if (a === 46 && sign === "*" && b === 29 ) {
  console.log('46 * 29 = 1334')
} else
if (a === 46 && sign === "*" && b === 30 ) {
  console.log('46 * 30 = 1380')
} else
if (a === 46 && sign === "*" && b === 31 ) {
  console.log('46 * 31 = 1426')
} else
if (a === 46 && sign === "*" && b === 32 ) {
  console.log('46 * 32 = 1472')
} else
if (a === 46 && sign === "*" && b === 33 ) {
  console.log('46 * 33 = 1518')
} else
if (a === 46 && sign === "*" && b === 34 ) {
  console.log('46 * 34 = 1564')
} else
if (a === 46 && sign === "*" && b === 35 ) {
  console.log('46 * 35 = 1610')
} else
if (a === 46 && sign === "*" && b === 36 ) {
  console.log('46 * 36 = 1656')
} else
if (a === 46 && sign === "*" && b === 37 ) {
  console.log('46 * 37 = 1702')
} else
if (a === 46 && sign === "*" && b === 38 ) {
  console.log('46 * 38 = 1748')
} else
if (a === 46 && sign === "*" && b === 39 ) {
  console.log('46 * 39 = 1794')
} else
if (a === 46 && sign === "*" && b === 40 ) {
  console.log('46 * 40 = 1840')
} else
if (a === 46 && sign === "*" && b === 41 ) {
  console.log('46 * 41 = 1886')
} else
if (a === 46 && sign === "*" && b === 42 ) {
  console.log('46 * 42 = 1932')
} else
if (a === 46 && sign === "*" && b === 43 ) {
  console.log('46 * 43 = 1978')
} else
if (a === 46 && sign === "*" && b === 44 ) {
  console.log('46 * 44 = 2024')
} else
if (a === 46 && sign === "*" && b === 45 ) {
  console.log('46 * 45 = 2070')
} else
if (a === 46 && sign === "*" && b === 46 ) {
  console.log('46 * 46 = 2116')
} else
if (a === 46 && sign === "*" && b === 47 ) {
  console.log('46 * 47 = 2162')
} else
if (a === 46 && sign === "*" && b === 48 ) {
  console.log('46 * 48 = 2208')
} else
if (a === 46 && sign === "*" && b === 49 ) {
  console.log('46 * 49 = 2254')
} else
if (a === 46 && sign === "*" && b === 50 ) {
  console.log('46 * 50 = 2300')
} else
if (a === 47 && sign === "*" && b === 1 ) {
  console.log('47 * 1 = 47')
} else
if (a === 47 && sign === "*" && b === 2 ) {
  console.log('47 * 2 = 94')
} else
if (a === 47 && sign === "*" && b === 3 ) {
  console.log('47 * 3 = 141')
} else
if (a === 47 && sign === "*" && b === 4 ) {
  console.log('47 * 4 = 188')
} else
if (a === 47 && sign === "*" && b === 5 ) {
  console.log('47 * 5 = 235')
} else
if (a === 47 && sign === "*" && b === 6 ) {
  console.log('47 * 6 = 282')
} else
if (a === 47 && sign === "*" && b === 7 ) {
  console.log('47 * 7 = 329')
} else
if (a === 47 && sign === "*" && b === 8 ) {
  console.log('47 * 8 = 376')
} else
if (a === 47 && sign === "*" && b === 9 ) {
  console.log('47 * 9 = 423')
} else
if (a === 47 && sign === "*" && b === 10 ) {
  console.log('47 * 10 = 470')
} else
if (a === 47 && sign === "*" && b === 11 ) {
  console.log('47 * 11 = 517')
} else
if (a === 47 && sign === "*" && b === 12 ) {
  console.log('47 * 12 = 564')
} else
if (a === 47 && sign === "*" && b === 13 ) {
  console.log('47 * 13 = 611')
} else
if (a === 47 && sign === "*" && b === 14 ) {
  console.log('47 * 14 = 658')
} else
if (a === 47 && sign === "*" && b === 15 ) {
  console.log('47 * 15 = 705')
} else
if (a === 47 && sign === "*" && b === 16 ) {
  console.log('47 * 16 = 752')
} else
if (a === 47 && sign === "*" && b === 17 ) {
  console.log('47 * 17 = 799')
} else
if (a === 47 && sign === "*" && b === 18 ) {
  console.log('47 * 18 = 846')
} else
if (a === 47 && sign === "*" && b === 19 ) {
  console.log('47 * 19 = 893')
} else
if (a === 47 && sign === "*" && b === 20 ) {
  console.log('47 * 20 = 940')
} else
if (a === 47 && sign === "*" && b === 21 ) {
  console.log('47 * 21 = 987')
} else
if (a === 47 && sign === "*" && b === 22 ) {
  console.log('47 * 22 = 1034')
} else
if (a === 47 && sign === "*" && b === 23 ) {
  console.log('47 * 23 = 1081')
} else
if (a === 47 && sign === "*" && b === 24 ) {
  console.log('47 * 24 = 1128')
} else
if (a === 47 && sign === "*" && b === 25 ) {
  console.log('47 * 25 = 1175')
} else
if (a === 47 && sign === "*" && b === 26 ) {
  console.log('47 * 26 = 1222')
} else
if (a === 47 && sign === "*" && b === 27 ) {
  console.log('47 * 27 = 1269')
} else
if (a === 47 && sign === "*" && b === 28 ) {
  console.log('47 * 28 = 1316')
} else
if (a === 47 && sign === "*" && b === 29 ) {
  console.log('47 * 29 = 1363')
} else
if (a === 47 && sign === "*" && b === 30 ) {
  console.log('47 * 30 = 1410')
} else
if (a === 47 && sign === "*" && b === 31 ) {
  console.log('47 * 31 = 1457')
} else
if (a === 47 && sign === "*" && b === 32 ) {
  console.log('47 * 32 = 1504')
} else
if (a === 47 && sign === "*" && b === 33 ) {
  console.log('47 * 33 = 1551')
} else
if (a === 47 && sign === "*" && b === 34 ) {
  console.log('47 * 34 = 1598')
} else
if (a === 47 && sign === "*" && b === 35 ) {
  console.log('47 * 35 = 1645')
} else
if (a === 47 && sign === "*" && b === 36 ) {
  console.log('47 * 36 = 1692')
} else
if (a === 47 && sign === "*" && b === 37 ) {
  console.log('47 * 37 = 1739')
} else
if (a === 47 && sign === "*" && b === 38 ) {
  console.log('47 * 38 = 1786')
} else
if (a === 47 && sign === "*" && b === 39 ) {
  console.log('47 * 39 = 1833')
} else
if (a === 47 && sign === "*" && b === 40 ) {
  console.log('47 * 40 = 1880')
} else
if (a === 47 && sign === "*" && b === 41 ) {
  console.log('47 * 41 = 1927')
} else
if (a === 47 && sign === "*" && b === 42 ) {
  console.log('47 * 42 = 1974')
} else
if (a === 47 && sign === "*" && b === 43 ) {
  console.log('47 * 43 = 2021')
} else
if (a === 47 && sign === "*" && b === 44 ) {
  console.log('47 * 44 = 2068')
} else
if (a === 47 && sign === "*" && b === 45 ) {
  console.log('47 * 45 = 2115')
} else
if (a === 47 && sign === "*" && b === 46 ) {
  console.log('47 * 46 = 2162')
} else
if (a === 47 && sign === "*" && b === 47 ) {
  console.log('47 * 47 = 2209')
} else
if (a === 47 && sign === "*" && b === 48 ) {
  console.log('47 * 48 = 2256')
} else
if (a === 47 && sign === "*" && b === 49 ) {
  console.log('47 * 49 = 2303')
} else
if (a === 47 && sign === "*" && b === 50 ) {
  console.log('47 * 50 = 2350')
} else
if (a === 48 && sign === "*" && b === 1 ) {
  console.log('48 * 1 = 48')
} else
if (a === 48 && sign === "*" && b === 2 ) {
  console.log('48 * 2 = 96')
} else
if (a === 48 && sign === "*" && b === 3 ) {
  console.log('48 * 3 = 144')
} else
if (a === 48 && sign === "*" && b === 4 ) {
  console.log('48 * 4 = 192')
} else
if (a === 48 && sign === "*" && b === 5 ) {
  console.log('48 * 5 = 240')
} else
if (a === 48 && sign === "*" && b === 6 ) {
  console.log('48 * 6 = 288')
} else
if (a === 48 && sign === "*" && b === 7 ) {
  console.log('48 * 7 = 336')
} else
if (a === 48 && sign === "*" && b === 8 ) {
  console.log('48 * 8 = 384')
} else
if (a === 48 && sign === "*" && b === 9 ) {
  console.log('48 * 9 = 432')
} else
if (a === 48 && sign === "*" && b === 10 ) {
  console.log('48 * 10 = 480')
} else
if (a === 48 && sign === "*" && b === 11 ) {
  console.log('48 * 11 = 528')
} else
if (a === 48 && sign === "*" && b === 12 ) {
  console.log('48 * 12 = 576')
} else
if (a === 48 && sign === "*" && b === 13 ) {
  console.log('48 * 13 = 624')
} else
if (a === 48 && sign === "*" && b === 14 ) {
  console.log('48 * 14 = 672')
} else
if (a === 48 && sign === "*" && b === 15 ) {
  console.log('48 * 15 = 720')
} else
if (a === 48 && sign === "*" && b === 16 ) {
  console.log('48 * 16 = 768')
} else
if (a === 48 && sign === "*" && b === 17 ) {
  console.log('48 * 17 = 816')
} else
if (a === 48 && sign === "*" && b === 18 ) {
  console.log('48 * 18 = 864')
} else
if (a === 48 && sign === "*" && b === 19 ) {
  console.log('48 * 19 = 912')
} else
if (a === 48 && sign === "*" && b === 20 ) {
  console.log('48 * 20 = 960')
} else
if (a === 48 && sign === "*" && b === 21 ) {
  console.log('48 * 21 = 1008')
} else
if (a === 48 && sign === "*" && b === 22 ) {
  console.log('48 * 22 = 1056')
} else
if (a === 48 && sign === "*" && b === 23 ) {
  console.log('48 * 23 = 1104')
} else
if (a === 48 && sign === "*" && b === 24 ) {
  console.log('48 * 24 = 1152')
} else
if (a === 48 && sign === "*" && b === 25 ) {
  console.log('48 * 25 = 1200')
} else
if (a === 48 && sign === "*" && b === 26 ) {
  console.log('48 * 26 = 1248')
} else
if (a === 48 && sign === "*" && b === 27 ) {
  console.log('48 * 27 = 1296')
} else
if (a === 48 && sign === "*" && b === 28 ) {
  console.log('48 * 28 = 1344')
} else
if (a === 48 && sign === "*" && b === 29 ) {
  console.log('48 * 29 = 1392')
} else
if (a === 48 && sign === "*" && b === 30 ) {
  console.log('48 * 30 = 1440')
} else
if (a === 48 && sign === "*" && b === 31 ) {
  console.log('48 * 31 = 1488')
} else
if (a === 48 && sign === "*" && b === 32 ) {
  console.log('48 * 32 = 1536')
} else
if (a === 48 && sign === "*" && b === 33 ) {
  console.log('48 * 33 = 1584')
} else
if (a === 48 && sign === "*" && b === 34 ) {
  console.log('48 * 34 = 1632')
} else
if (a === 48 && sign === "*" && b === 35 ) {
  console.log('48 * 35 = 1680')
} else
if (a === 48 && sign === "*" && b === 36 ) {
  console.log('48 * 36 = 1728')
} else
if (a === 48 && sign === "*" && b === 37 ) {
  console.log('48 * 37 = 1776')
} else
if (a === 48 && sign === "*" && b === 38 ) {
  console.log('48 * 38 = 1824')
} else
if (a === 48 && sign === "*" && b === 39 ) {
  console.log('48 * 39 = 1872')
} else
if (a === 48 && sign === "*" && b === 40 ) {
  console.log('48 * 40 = 1920')
} else
if (a === 48 && sign === "*" && b === 41 ) {
  console.log('48 * 41 = 1968')
} else
if (a === 48 && sign === "*" && b === 42 ) {
  console.log('48 * 42 = 2016')
} else
if (a === 48 && sign === "*" && b === 43 ) {
  console.log('48 * 43 = 2064')
} else
if (a === 48 && sign === "*" && b === 44 ) {
  console.log('48 * 44 = 2112')
} else
if (a === 48 && sign === "*" && b === 45 ) {
  console.log('48 * 45 = 2160')
} else
if (a === 48 && sign === "*" && b === 46 ) {
  console.log('48 * 46 = 2208')
} else
if (a === 48 && sign === "*" && b === 47 ) {
  console.log('48 * 47 = 2256')
} else
if (a === 48 && sign === "*" && b === 48 ) {
  console.log('48 * 48 = 2304')
} else
if (a === 48 && sign === "*" && b === 49 ) {
  console.log('48 * 49 = 2352')
} else
if (a === 48 && sign === "*" && b === 50 ) {
  console.log('48 * 50 = 2400')
} else
if (a === 49 && sign === "*" && b === 1 ) {
  console.log('49 * 1 = 49')
} else
if (a === 49 && sign === "*" && b === 2 ) {
  console.log('49 * 2 = 98')
} else
if (a === 49 && sign === "*" && b === 3 ) {
  console.log('49 * 3 = 147')
} else
if (a === 49 && sign === "*" && b === 4 ) {
  console.log('49 * 4 = 196')
} else
if (a === 49 && sign === "*" && b === 5 ) {
  console.log('49 * 5 = 245')
} else
if (a === 49 && sign === "*" && b === 6 ) {
  console.log('49 * 6 = 294')
} else
if (a === 49 && sign === "*" && b === 7 ) {
  console.log('49 * 7 = 343')
} else
if (a === 49 && sign === "*" && b === 8 ) {
  console.log('49 * 8 = 392')
} else
if (a === 49 && sign === "*" && b === 9 ) {
  console.log('49 * 9 = 441')
} else
if (a === 49 && sign === "*" && b === 10 ) {
  console.log('49 * 10 = 490')
} else
if (a === 49 && sign === "*" && b === 11 ) {
  console.log('49 * 11 = 539')
} else
if (a === 49 && sign === "*" && b === 12 ) {
  console.log('49 * 12 = 588')
} else
if (a === 49 && sign === "*" && b === 13 ) {
  console.log('49 * 13 = 637')
} else
if (a === 49 && sign === "*" && b === 14 ) {
  console.log('49 * 14 = 686')
} else
if (a === 49 && sign === "*" && b === 15 ) {
  console.log('49 * 15 = 735')
} else
if (a === 49 && sign === "*" && b === 16 ) {
  console.log('49 * 16 = 784')
} else
if (a === 49 && sign === "*" && b === 17 ) {
  console.log('49 * 17 = 833')
} else
if (a === 49 && sign === "*" && b === 18 ) {
  console.log('49 * 18 = 882')
} else
if (a === 49 && sign === "*" && b === 19 ) {
  console.log('49 * 19 = 931')
} else
if (a === 49 && sign === "*" && b === 20 ) {
  console.log('49 * 20 = 980')
} else
if (a === 49 && sign === "*" && b === 21 ) {
  console.log('49 * 21 = 1029')
} else
if (a === 49 && sign === "*" && b === 22 ) {
  console.log('49 * 22 = 1078')
} else
if (a === 49 && sign === "*" && b === 23 ) {
  console.log('49 * 23 = 1127')
} else
if (a === 49 && sign === "*" && b === 24 ) {
  console.log('49 * 24 = 1176')
} else
if (a === 49 && sign === "*" && b === 25 ) {
  console.log('49 * 25 = 1225')
} else
if (a === 49 && sign === "*" && b === 26 ) {
  console.log('49 * 26 = 1274')
} else
if (a === 49 && sign === "*" && b === 27 ) {
  console.log('49 * 27 = 1323')
} else
if (a === 49 && sign === "*" && b === 28 ) {
  console.log('49 * 28 = 1372')
} else
if (a === 49 && sign === "*" && b === 29 ) {
  console.log('49 * 29 = 1421')
} else
if (a === 49 && sign === "*" && b === 30 ) {
  console.log('49 * 30 = 1470')
} else
if (a === 49 && sign === "*" && b === 31 ) {
  console.log('49 * 31 = 1519')
} else
if (a === 49 && sign === "*" && b === 32 ) {
  console.log('49 * 32 = 1568')
} else
if (a === 49 && sign === "*" && b === 33 ) {
  console.log('49 * 33 = 1617')
} else
if (a === 49 && sign === "*" && b === 34 ) {
  console.log('49 * 34 = 1666')
} else
if (a === 49 && sign === "*" && b === 35 ) {
  console.log('49 * 35 = 1715')
} else
if (a === 49 && sign === "*" && b === 36 ) {
  console.log('49 * 36 = 1764')
} else
if (a === 49 && sign === "*" && b === 37 ) {
  console.log('49 * 37 = 1813')
} else
if (a === 49 && sign === "*" && b === 38 ) {
  console.log('49 * 38 = 1862')
} else
if (a === 49 && sign === "*" && b === 39 ) {
  console.log('49 * 39 = 1911')
} else
if (a === 49 && sign === "*" && b === 40 ) {
  console.log('49 * 40 = 1960')
} else
if (a === 49 && sign === "*" && b === 41 ) {
  console.log('49 * 41 = 2009')
} else
if (a === 49 && sign === "*" && b === 42 ) {
  console.log('49 * 42 = 2058')
} else
if (a === 49 && sign === "*" && b === 43 ) {
  console.log('49 * 43 = 2107')
} else
if (a === 49 && sign === "*" && b === 44 ) {
  console.log('49 * 44 = 2156')
} else
if (a === 49 && sign === "*" && b === 45 ) {
  console.log('49 * 45 = 2205')
} else
if (a === 49 && sign === "*" && b === 46 ) {
  console.log('49 * 46 = 2254')
} else
if (a === 49 && sign === "*" && b === 47 ) {
  console.log('49 * 47 = 2303')
} else
if (a === 49 && sign === "*" && b === 48 ) {
  console.log('49 * 48 = 2352')
} else
if (a === 49 && sign === "*" && b === 49 ) {
  console.log('49 * 49 = 2401')
} else
if (a === 49 && sign === "*" && b === 50 ) {
  console.log('49 * 50 = 2450')
} else
if (a === 50 && sign === "*" && b === 1 ) {
  console.log('50 * 1 = 50')
} else
if (a === 50 && sign === "*" && b === 2 ) {
  console.log('50 * 2 = 100')
} else
if (a === 50 && sign === "*" && b === 3 ) {
  console.log('50 * 3 = 150')
} else
if (a === 50 && sign === "*" && b === 4 ) {
  console.log('50 * 4 = 200')
} else
if (a === 50 && sign === "*" && b === 5 ) {
  console.log('50 * 5 = 250')
} else
if (a === 50 && sign === "*" && b === 6 ) {
  console.log('50 * 6 = 300')
} else
if (a === 50 && sign === "*" && b === 7 ) {
  console.log('50 * 7 = 350')
} else
if (a === 50 && sign === "*" && b === 8 ) {
  console.log('50 * 8 = 400')
} else
if (a === 50 && sign === "*" && b === 9 ) {
  console.log('50 * 9 = 450')
} else
if (a === 50 && sign === "*" && b === 10 ) {
  console.log('50 * 10 = 500')
} else
if (a === 50 && sign === "*" && b === 11 ) {
  console.log('50 * 11 = 550')
} else
if (a === 50 && sign === "*" && b === 12 ) {
  console.log('50 * 12 = 600')
} else
if (a === 50 && sign === "*" && b === 13 ) {
  console.log('50 * 13 = 650')
} else
if (a === 50 && sign === "*" && b === 14 ) {
  console.log('50 * 14 = 700')
} else
if (a === 50 && sign === "*" && b === 15 ) {
  console.log('50 * 15 = 750')
} else
if (a === 50 && sign === "*" && b === 16 ) {
  console.log('50 * 16 = 800')
} else
if (a === 50 && sign === "*" && b === 17 ) {
  console.log('50 * 17 = 850')
} else
if (a === 50 && sign === "*" && b === 18 ) {
  console.log('50 * 18 = 900')
} else
if (a === 50 && sign === "*" && b === 19 ) {
  console.log('50 * 19 = 950')
} else
if (a === 50 && sign === "*" && b === 20 ) {
  console.log('50 * 20 = 1000')
} else
if (a === 50 && sign === "*" && b === 21 ) {
  console.log('50 * 21 = 1050')
} else
if (a === 50 && sign === "*" && b === 22 ) {
  console.log('50 * 22 = 1100')
} else
if (a === 50 && sign === "*" && b === 23 ) {
  console.log('50 * 23 = 1150')
} else
if (a === 50 && sign === "*" && b === 24 ) {
  console.log('50 * 24 = 1200')
} else
if (a === 50 && sign === "*" && b === 25 ) {
  console.log('50 * 25 = 1250')
} else
if (a === 50 && sign === "*" && b === 26 ) {
  console.log('50 * 26 = 1300')
} else
if (a === 50 && sign === "*" && b === 27 ) {
  console.log('50 * 27 = 1350')
} else
if (a === 50 && sign === "*" && b === 28 ) {
  console.log('50 * 28 = 1400')
} else
if (a === 50 && sign === "*" && b === 29 ) {
  console.log('50 * 29 = 1450')
} else
if (a === 50 && sign === "*" && b === 30 ) {
  console.log('50 * 30 = 1500')
} else
if (a === 50 && sign === "*" && b === 31 ) {
  console.log('50 * 31 = 1550')
} else
if (a === 50 && sign === "*" && b === 32 ) {
  console.log('50 * 32 = 1600')
} else
if (a === 50 && sign === "*" && b === 33 ) {
  console.log('50 * 33 = 1650')
} else
if (a === 50 && sign === "*" && b === 34 ) {
  console.log('50 * 34 = 1700')
} else
if (a === 50 && sign === "*" && b === 35 ) {
  console.log('50 * 35 = 1750')
} else
if (a === 50 && sign === "*" && b === 36 ) {
  console.log('50 * 36 = 1800')
} else
if (a === 50 && sign === "*" && b === 37 ) {
  console.log('50 * 37 = 1850')
} else
if (a === 50 && sign === "*" && b === 38 ) {
  console.log('50 * 38 = 1900')
} else
if (a === 50 && sign === "*" && b === 39 ) {
  console.log('50 * 39 = 1950')
} else
if (a === 50 && sign === "*" && b === 40 ) {
  console.log('50 * 40 = 2000')
} else
if (a === 50 && sign === "*" && b === 41 ) {
  console.log('50 * 41 = 2050')
} else
if (a === 50 && sign === "*" && b === 42 ) {
  console.log('50 * 42 = 2100')
} else
if (a === 50 && sign === "*" && b === 43 ) {
  console.log('50 * 43 = 2150')
} else
if (a === 50 && sign === "*" && b === 44 ) {
  console.log('50 * 44 = 2200')
} else
if (a === 50 && sign === "*" && b === 45 ) {
  console.log('50 * 45 = 2250')
} else
if (a === 50 && sign === "*" && b === 46 ) {
  console.log('50 * 46 = 2300')
} else
if (a === 50 && sign === "*" && b === 47 ) {
  console.log('50 * 47 = 2350')
} else
if (a === 50 && sign === "*" && b === 48 ) {
  console.log('50 * 48 = 2400')
} else
if (a === 50 && sign === "*" && b === 49 ) {
  console.log('50 * 49 = 2450')
} else
if (a === 50 && sign === "*" && b === 50 ) {
  console.log('50 * 50 = 2500')
} else
if (a === 1 && sign === "/" && b === 1 ) {
  console.log('1 / 1 = 1')
} else
if (a === 1 && sign === "/" && b === 2 ) {
  console.log('1 / 2 = 0.5')
} else
if (a === 1 && sign === "/" && b === 3 ) {
  console.log('1 / 3 = 0.3333333333333333')
} else
if (a === 1 && sign === "/" && b === 4 ) {
  console.log('1 / 4 = 0.25')
} else
if (a === 1 && sign === "/" && b === 5 ) {
  console.log('1 / 5 = 0.2')
} else
if (a === 1 && sign === "/" && b === 6 ) {
  console.log('1 / 6 = 0.16666666666666666')
} else
if (a === 1 && sign === "/" && b === 7 ) {
  console.log('1 / 7 = 0.14285714285714285')
} else
if (a === 1 && sign === "/" && b === 8 ) {
  console.log('1 / 8 = 0.125')
} else
if (a === 1 && sign === "/" && b === 9 ) {
  console.log('1 / 9 = 0.1111111111111111')
} else
if (a === 1 && sign === "/" && b === 10 ) {
  console.log('1 / 10 = 0.1')
} else
if (a === 1 && sign === "/" && b === 11 ) {
  console.log('1 / 11 = 0.09090909090909091')
} else
if (a === 1 && sign === "/" && b === 12 ) {
  console.log('1 / 12 = 0.08333333333333333')
} else
if (a === 1 && sign === "/" && b === 13 ) {
  console.log('1 / 13 = 0.07692307692307693')
} else
if (a === 1 && sign === "/" && b === 14 ) {
  console.log('1 / 14 = 0.07142857142857142')
} else
if (a === 1 && sign === "/" && b === 15 ) {
  console.log('1 / 15 = 0.06666666666666667')
} else
if (a === 1 && sign === "/" && b === 16 ) {
  console.log('1 / 16 = 0.0625')
} else
if (a === 1 && sign === "/" && b === 17 ) {
  console.log('1 / 17 = 0.058823529411764705')
} else
if (a === 1 && sign === "/" && b === 18 ) {
  console.log('1 / 18 = 0.05555555555555555')
} else
if (a === 1 && sign === "/" && b === 19 ) {
  console.log('1 / 19 = 0.05263157894736842')
} else
if (a === 1 && sign === "/" && b === 20 ) {
  console.log('1 / 20 = 0.05')
} else
if (a === 1 && sign === "/" && b === 21 ) {
  console.log('1 / 21 = 0.047619047619047616')
} else
if (a === 1 && sign === "/" && b === 22 ) {
  console.log('1 / 22 = 0.045454545454545456')
} else
if (a === 1 && sign === "/" && b === 23 ) {
  console.log('1 / 23 = 0.043478260869565216')
} else
if (a === 1 && sign === "/" && b === 24 ) {
  console.log('1 / 24 = 0.041666666666666664')
} else
if (a === 1 && sign === "/" && b === 25 ) {
  console.log('1 / 25 = 0.04')
} else
if (a === 1 && sign === "/" && b === 26 ) {
  console.log('1 / 26 = 0.038461538461538464')
} else
if (a === 1 && sign === "/" && b === 27 ) {
  console.log('1 / 27 = 0.037037037037037035')
} else
if (a === 1 && sign === "/" && b === 28 ) {
  console.log('1 / 28 = 0.03571428571428571')
} else
if (a === 1 && sign === "/" && b === 29 ) {
  console.log('1 / 29 = 0.034482758620689655')
} else
if (a === 1 && sign === "/" && b === 30 ) {
  console.log('1 / 30 = 0.03333333333333333')
} else
if (a === 1 && sign === "/" && b === 31 ) {
  console.log('1 / 31 = 0.03225806451612903')
} else
if (a === 1 && sign === "/" && b === 32 ) {
  console.log('1 / 32 = 0.03125')
} else
if (a === 1 && sign === "/" && b === 33 ) {
  console.log('1 / 33 = 0.030303030303030304')
} else
if (a === 1 && sign === "/" && b === 34 ) {
  console.log('1 / 34 = 0.029411764705882353')
} else
if (a === 1 && sign === "/" && b === 35 ) {
  console.log('1 / 35 = 0.02857142857142857')
} else
if (a === 1 && sign === "/" && b === 36 ) {
  console.log('1 / 36 = 0.027777777777777776')
} else
if (a === 1 && sign === "/" && b === 37 ) {
  console.log('1 / 37 = 0.02702702702702703')
} else
if (a === 1 && sign === "/" && b === 38 ) {
  console.log('1 / 38 = 0.02631578947368421')
} else
if (a === 1 && sign === "/" && b === 39 ) {
  console.log('1 / 39 = 0.02564102564102564')
} else
if (a === 1 && sign === "/" && b === 40 ) {
  console.log('1 / 40 = 0.025')
} else
if (a === 1 && sign === "/" && b === 41 ) {
  console.log('1 / 41 = 0.024390243902439025')
} else
if (a === 1 && sign === "/" && b === 42 ) {
  console.log('1 / 42 = 0.023809523809523808')
} else
if (a === 1 && sign === "/" && b === 43 ) {
  console.log('1 / 43 = 0.023255813953488372')
} else
if (a === 1 && sign === "/" && b === 44 ) {
  console.log('1 / 44 = 0.022727272727272728')
} else
if (a === 1 && sign === "/" && b === 45 ) {
  console.log('1 / 45 = 0.022222222222222223')
} else
if (a === 1 && sign === "/" && b === 46 ) {
  console.log('1 / 46 = 0.021739130434782608')
} else
if (a === 1 && sign === "/" && b === 47 ) {
  console.log('1 / 47 = 0.02127659574468085')
} else
if (a === 1 && sign === "/" && b === 48 ) {
  console.log('1 / 48 = 0.020833333333333332')
} else
if (a === 1 && sign === "/" && b === 49 ) {
  console.log('1 / 49 = 0.02040816326530612')
} else
if (a === 1 && sign === "/" && b === 50 ) {
  console.log('1 / 50 = 0.02')
} else
if (a === 2 && sign === "/" && b === 1 ) {
  console.log('2 / 1 = 2')
} else
if (a === 2 && sign === "/" && b === 2 ) {
  console.log('2 / 2 = 1')
} else
if (a === 2 && sign === "/" && b === 3 ) {
  console.log('2 / 3 = 0.6666666666666666')
} else
if (a === 2 && sign === "/" && b === 4 ) {
  console.log('2 / 4 = 0.5')
} else
if (a === 2 && sign === "/" && b === 5 ) {
  console.log('2 / 5 = 0.4')
} else
if (a === 2 && sign === "/" && b === 6 ) {
  console.log('2 / 6 = 0.3333333333333333')
} else
if (a === 2 && sign === "/" && b === 7 ) {
  console.log('2 / 7 = 0.2857142857142857')
} else
if (a === 2 && sign === "/" && b === 8 ) {
  console.log('2 / 8 = 0.25')
} else
if (a === 2 && sign === "/" && b === 9 ) {
  console.log('2 / 9 = 0.2222222222222222')
} else
if (a === 2 && sign === "/" && b === 10 ) {
  console.log('2 / 10 = 0.2')
} else
if (a === 2 && sign === "/" && b === 11 ) {
  console.log('2 / 11 = 0.18181818181818182')
} else
if (a === 2 && sign === "/" && b === 12 ) {
  console.log('2 / 12 = 0.16666666666666666')
} else
if (a === 2 && sign === "/" && b === 13 ) {
  console.log('2 / 13 = 0.15384615384615385')
} else
if (a === 2 && sign === "/" && b === 14 ) {
  console.log('2 / 14 = 0.14285714285714285')
} else
if (a === 2 && sign === "/" && b === 15 ) {
  console.log('2 / 15 = 0.13333333333333333')
} else
if (a === 2 && sign === "/" && b === 16 ) {
  console.log('2 / 16 = 0.125')
} else
if (a === 2 && sign === "/" && b === 17 ) {
  console.log('2 / 17 = 0.11764705882352941')
} else
if (a === 2 && sign === "/" && b === 18 ) {
  console.log('2 / 18 = 0.1111111111111111')
} else
if (a === 2 && sign === "/" && b === 19 ) {
  console.log('2 / 19 = 0.10526315789473684')
} else
if (a === 2 && sign === "/" && b === 20 ) {
  console.log('2 / 20 = 0.1')
} else
if (a === 2 && sign === "/" && b === 21 ) {
  console.log('2 / 21 = 0.09523809523809523')
} else
if (a === 2 && sign === "/" && b === 22 ) {
  console.log('2 / 22 = 0.09090909090909091')
} else
if (a === 2 && sign === "/" && b === 23 ) {
  console.log('2 / 23 = 0.08695652173913043')
} else
if (a === 2 && sign === "/" && b === 24 ) {
  console.log('2 / 24 = 0.08333333333333333')
} else
if (a === 2 && sign === "/" && b === 25 ) {
  console.log('2 / 25 = 0.08')
} else
if (a === 2 && sign === "/" && b === 26 ) {
  console.log('2 / 26 = 0.07692307692307693')
} else
if (a === 2 && sign === "/" && b === 27 ) {
  console.log('2 / 27 = 0.07407407407407407')
} else
if (a === 2 && sign === "/" && b === 28 ) {
  console.log('2 / 28 = 0.07142857142857142')
} else
if (a === 2 && sign === "/" && b === 29 ) {
  console.log('2 / 29 = 0.06896551724137931')
} else
if (a === 2 && sign === "/" && b === 30 ) {
  console.log('2 / 30 = 0.06666666666666667')
} else
if (a === 2 && sign === "/" && b === 31 ) {
  console.log('2 / 31 = 0.06451612903225806')
} else
if (a === 2 && sign === "/" && b === 32 ) {
  console.log('2 / 32 = 0.0625')
} else
if (a === 2 && sign === "/" && b === 33 ) {
  console.log('2 / 33 = 0.06060606060606061')
} else
if (a === 2 && sign === "/" && b === 34 ) {
  console.log('2 / 34 = 0.058823529411764705')
} else
if (a === 2 && sign === "/" && b === 35 ) {
  console.log('2 / 35 = 0.05714285714285714')
} else
if (a === 2 && sign === "/" && b === 36 ) {
  console.log('2 / 36 = 0.05555555555555555')
} else
if (a === 2 && sign === "/" && b === 37 ) {
  console.log('2 / 37 = 0.05405405405405406')
} else
if (a === 2 && sign === "/" && b === 38 ) {
  console.log('2 / 38 = 0.05263157894736842')
} else
if (a === 2 && sign === "/" && b === 39 ) {
  console.log('2 / 39 = 0.05128205128205128')
} else
if (a === 2 && sign === "/" && b === 40 ) {
  console.log('2 / 40 = 0.05')
} else
if (a === 2 && sign === "/" && b === 41 ) {
  console.log('2 / 41 = 0.04878048780487805')
} else
if (a === 2 && sign === "/" && b === 42 ) {
  console.log('2 / 42 = 0.047619047619047616')
} else
if (a === 2 && sign === "/" && b === 43 ) {
  console.log('2 / 43 = 0.046511627906976744')
} else
if (a === 2 && sign === "/" && b === 44 ) {
  console.log('2 / 44 = 0.045454545454545456')
} else
if (a === 2 && sign === "/" && b === 45 ) {
  console.log('2 / 45 = 0.044444444444444446')
} else
if (a === 2 && sign === "/" && b === 46 ) {
  console.log('2 / 46 = 0.043478260869565216')
} else
if (a === 2 && sign === "/" && b === 47 ) {
  console.log('2 / 47 = 0.0425531914893617')
} else
if (a === 2 && sign === "/" && b === 48 ) {
  console.log('2 / 48 = 0.041666666666666664')
} else
if (a === 2 && sign === "/" && b === 49 ) {
  console.log('2 / 49 = 0.04081632653061224')
} else
if (a === 2 && sign === "/" && b === 50 ) {
  console.log('2 / 50 = 0.04')
} else
if (a === 3 && sign === "/" && b === 1 ) {
  console.log('3 / 1 = 3')
} else
if (a === 3 && sign === "/" && b === 2 ) {
  console.log('3 / 2 = 1.5')
} else
if (a === 3 && sign === "/" && b === 3 ) {
  console.log('3 / 3 = 1')
} else
if (a === 3 && sign === "/" && b === 4 ) {
  console.log('3 / 4 = 0.75')
} else
if (a === 3 && sign === "/" && b === 5 ) {
  console.log('3 / 5 = 0.6')
} else
if (a === 3 && sign === "/" && b === 6 ) {
  console.log('3 / 6 = 0.5')
} else
if (a === 3 && sign === "/" && b === 7 ) {
  console.log('3 / 7 = 0.42857142857142855')
} else
if (a === 3 && sign === "/" && b === 8 ) {
  console.log('3 / 8 = 0.375')
} else
if (a === 3 && sign === "/" && b === 9 ) {
  console.log('3 / 9 = 0.3333333333333333')
} else
if (a === 3 && sign === "/" && b === 10 ) {
  console.log('3 / 10 = 0.3')
} else
if (a === 3 && sign === "/" && b === 11 ) {
  console.log('3 / 11 = 0.2727272727272727')
} else
if (a === 3 && sign === "/" && b === 12 ) {
  console.log('3 / 12 = 0.25')
} else
if (a === 3 && sign === "/" && b === 13 ) {
  console.log('3 / 13 = 0.23076923076923078')
} else
if (a === 3 && sign === "/" && b === 14 ) {
  console.log('3 / 14 = 0.21428571428571427')
} else
if (a === 3 && sign === "/" && b === 15 ) {
  console.log('3 / 15 = 0.2')
} else
if (a === 3 && sign === "/" && b === 16 ) {
  console.log('3 / 16 = 0.1875')
} else
if (a === 3 && sign === "/" && b === 17 ) {
  console.log('3 / 17 = 0.17647058823529413')
} else
if (a === 3 && sign === "/" && b === 18 ) {
  console.log('3 / 18 = 0.16666666666666666')
} else
if (a === 3 && sign === "/" && b === 19 ) {
  console.log('3 / 19 = 0.15789473684210525')
} else
if (a === 3 && sign === "/" && b === 20 ) {
  console.log('3 / 20 = 0.15')
} else
if (a === 3 && sign === "/" && b === 21 ) {
  console.log('3 / 21 = 0.14285714285714285')
} else
if (a === 3 && sign === "/" && b === 22 ) {
  console.log('3 / 22 = 0.13636363636363635')
} else
if (a === 3 && sign === "/" && b === 23 ) {
  console.log('3 / 23 = 0.13043478260869565')
} else
if (a === 3 && sign === "/" && b === 24 ) {
  console.log('3 / 24 = 0.125')
} else
if (a === 3 && sign === "/" && b === 25 ) {
  console.log('3 / 25 = 0.12')
} else
if (a === 3 && sign === "/" && b === 26 ) {
  console.log('3 / 26 = 0.11538461538461539')
} else
if (a === 3 && sign === "/" && b === 27 ) {
  console.log('3 / 27 = 0.1111111111111111')
} else
if (a === 3 && sign === "/" && b === 28 ) {
  console.log('3 / 28 = 0.10714285714285714')
} else
if (a === 3 && sign === "/" && b === 29 ) {
  console.log('3 / 29 = 0.10344827586206896')
} else
if (a === 3 && sign === "/" && b === 30 ) {
  console.log('3 / 30 = 0.1')
} else
if (a === 3 && sign === "/" && b === 31 ) {
  console.log('3 / 31 = 0.0967741935483871')
} else
if (a === 3 && sign === "/" && b === 32 ) {
  console.log('3 / 32 = 0.09375')
} else
if (a === 3 && sign === "/" && b === 33 ) {
  console.log('3 / 33 = 0.09090909090909091')
} else
if (a === 3 && sign === "/" && b === 34 ) {
  console.log('3 / 34 = 0.08823529411764706')
} else
if (a === 3 && sign === "/" && b === 35 ) {
  console.log('3 / 35 = 0.08571428571428572')
} else
if (a === 3 && sign === "/" && b === 36 ) {
  console.log('3 / 36 = 0.08333333333333333')
} else
if (a === 3 && sign === "/" && b === 37 ) {
  console.log('3 / 37 = 0.08108108108108109')
} else
if (a === 3 && sign === "/" && b === 38 ) {
  console.log('3 / 38 = 0.07894736842105263')
} else
if (a === 3 && sign === "/" && b === 39 ) {
  console.log('3 / 39 = 0.07692307692307693')
} else
if (a === 3 && sign === "/" && b === 40 ) {
  console.log('3 / 40 = 0.075')
} else
if (a === 3 && sign === "/" && b === 41 ) {
  console.log('3 / 41 = 0.07317073170731707')
} else
if (a === 3 && sign === "/" && b === 42 ) {
  console.log('3 / 42 = 0.07142857142857142')
} else
if (a === 3 && sign === "/" && b === 43 ) {
  console.log('3 / 43 = 0.06976744186046512')
} else
if (a === 3 && sign === "/" && b === 44 ) {
  console.log('3 / 44 = 0.06818181818181818')
} else
if (a === 3 && sign === "/" && b === 45 ) {
  console.log('3 / 45 = 0.06666666666666667')
} else
if (a === 3 && sign === "/" && b === 46 ) {
  console.log('3 / 46 = 0.06521739130434782')
} else
if (a === 3 && sign === "/" && b === 47 ) {
  console.log('3 / 47 = 0.06382978723404255')
} else
if (a === 3 && sign === "/" && b === 48 ) {
  console.log('3 / 48 = 0.0625')
} else
if (a === 3 && sign === "/" && b === 49 ) {
  console.log('3 / 49 = 0.061224489795918366')
} else
if (a === 3 && sign === "/" && b === 50 ) {
  console.log('3 / 50 = 0.06')
} else
if (a === 4 && sign === "/" && b === 1 ) {
  console.log('4 / 1 = 4')
} else
if (a === 4 && sign === "/" && b === 2 ) {
  console.log('4 / 2 = 2')
} else
if (a === 4 && sign === "/" && b === 3 ) {
  console.log('4 / 3 = 1.3333333333333333')
} else
if (a === 4 && sign === "/" && b === 4 ) {
  console.log('4 / 4 = 1')
} else
if (a === 4 && sign === "/" && b === 5 ) {
  console.log('4 / 5 = 0.8')
} else
if (a === 4 && sign === "/" && b === 6 ) {
  console.log('4 / 6 = 0.6666666666666666')
} else
if (a === 4 && sign === "/" && b === 7 ) {
  console.log('4 / 7 = 0.5714285714285714')
} else
if (a === 4 && sign === "/" && b === 8 ) {
  console.log('4 / 8 = 0.5')
} else
if (a === 4 && sign === "/" && b === 9 ) {
  console.log('4 / 9 = 0.4444444444444444')
} else
if (a === 4 && sign === "/" && b === 10 ) {
  console.log('4 / 10 = 0.4')
} else
if (a === 4 && sign === "/" && b === 11 ) {
  console.log('4 / 11 = 0.36363636363636365')
} else
if (a === 4 && sign === "/" && b === 12 ) {
  console.log('4 / 12 = 0.3333333333333333')
} else
if (a === 4 && sign === "/" && b === 13 ) {
  console.log('4 / 13 = 0.3076923076923077')
} else
if (a === 4 && sign === "/" && b === 14 ) {
  console.log('4 / 14 = 0.2857142857142857')
} else
if (a === 4 && sign === "/" && b === 15 ) {
  console.log('4 / 15 = 0.26666666666666666')
} else
if (a === 4 && sign === "/" && b === 16 ) {
  console.log('4 / 16 = 0.25')
} else
if (a === 4 && sign === "/" && b === 17 ) {
  console.log('4 / 17 = 0.23529411764705882')
} else
if (a === 4 && sign === "/" && b === 18 ) {
  console.log('4 / 18 = 0.2222222222222222')
} else
if (a === 4 && sign === "/" && b === 19 ) {
  console.log('4 / 19 = 0.21052631578947367')
} else
if (a === 4 && sign === "/" && b === 20 ) {
  console.log('4 / 20 = 0.2')
} else
if (a === 4 && sign === "/" && b === 21 ) {
  console.log('4 / 21 = 0.19047619047619047')
} else
if (a === 4 && sign === "/" && b === 22 ) {
  console.log('4 / 22 = 0.18181818181818182')
} else
if (a === 4 && sign === "/" && b === 23 ) {
  console.log('4 / 23 = 0.17391304347826086')
} else
if (a === 4 && sign === "/" && b === 24 ) {
  console.log('4 / 24 = 0.16666666666666666')
} else
if (a === 4 && sign === "/" && b === 25 ) {
  console.log('4 / 25 = 0.16')
} else
if (a === 4 && sign === "/" && b === 26 ) {
  console.log('4 / 26 = 0.15384615384615385')
} else
if (a === 4 && sign === "/" && b === 27 ) {
  console.log('4 / 27 = 0.14814814814814814')
} else
if (a === 4 && sign === "/" && b === 28 ) {
  console.log('4 / 28 = 0.14285714285714285')
} else
if (a === 4 && sign === "/" && b === 29 ) {
  console.log('4 / 29 = 0.13793103448275862')
} else
if (a === 4 && sign === "/" && b === 30 ) {
  console.log('4 / 30 = 0.13333333333333333')
} else
if (a === 4 && sign === "/" && b === 31 ) {
  console.log('4 / 31 = 0.12903225806451613')
} else
if (a === 4 && sign === "/" && b === 32 ) {
  console.log('4 / 32 = 0.125')
} else
if (a === 4 && sign === "/" && b === 33 ) {
  console.log('4 / 33 = 0.12121212121212122')
} else
if (a === 4 && sign === "/" && b === 34 ) {
  console.log('4 / 34 = 0.11764705882352941')
} else
if (a === 4 && sign === "/" && b === 35 ) {
  console.log('4 / 35 = 0.11428571428571428')
} else
if (a === 4 && sign === "/" && b === 36 ) {
  console.log('4 / 36 = 0.1111111111111111')
} else
if (a === 4 && sign === "/" && b === 37 ) {
  console.log('4 / 37 = 0.10810810810810811')
} else
if (a === 4 && sign === "/" && b === 38 ) {
  console.log('4 / 38 = 0.10526315789473684')
} else
if (a === 4 && sign === "/" && b === 39 ) {
  console.log('4 / 39 = 0.10256410256410256')
} else
if (a === 4 && sign === "/" && b === 40 ) {
  console.log('4 / 40 = 0.1')
} else
if (a === 4 && sign === "/" && b === 41 ) {
  console.log('4 / 41 = 0.0975609756097561')
} else
if (a === 4 && sign === "/" && b === 42 ) {
  console.log('4 / 42 = 0.09523809523809523')
} else
if (a === 4 && sign === "/" && b === 43 ) {
  console.log('4 / 43 = 0.09302325581395349')
} else
if (a === 4 && sign === "/" && b === 44 ) {
  console.log('4 / 44 = 0.09090909090909091')
} else
if (a === 4 && sign === "/" && b === 45 ) {
  console.log('4 / 45 = 0.08888888888888889')
} else
if (a === 4 && sign === "/" && b === 46 ) {
  console.log('4 / 46 = 0.08695652173913043')
} else
if (a === 4 && sign === "/" && b === 47 ) {
  console.log('4 / 47 = 0.0851063829787234')
} else
if (a === 4 && sign === "/" && b === 48 ) {
  console.log('4 / 48 = 0.08333333333333333')
} else
if (a === 4 && sign === "/" && b === 49 ) {
  console.log('4 / 49 = 0.08163265306122448')
} else
if (a === 4 && sign === "/" && b === 50 ) {
  console.log('4 / 50 = 0.08')
} else
if (a === 5 && sign === "/" && b === 1 ) {
  console.log('5 / 1 = 5')
} else
if (a === 5 && sign === "/" && b === 2 ) {
  console.log('5 / 2 = 2.5')
} else
if (a === 5 && sign === "/" && b === 3 ) {
  console.log('5 / 3 = 1.6666666666666667')
} else
if (a === 5 && sign === "/" && b === 4 ) {
  console.log('5 / 4 = 1.25')
} else
if (a === 5 && sign === "/" && b === 5 ) {
  console.log('5 / 5 = 1')
} else
if (a === 5 && sign === "/" && b === 6 ) {
  console.log('5 / 6 = 0.8333333333333334')
} else
if (a === 5 && sign === "/" && b === 7 ) {
  console.log('5 / 7 = 0.7142857142857143')
} else
if (a === 5 && sign === "/" && b === 8 ) {
  console.log('5 / 8 = 0.625')
} else
if (a === 5 && sign === "/" && b === 9 ) {
  console.log('5 / 9 = 0.5555555555555556')
} else
if (a === 5 && sign === "/" && b === 10 ) {
  console.log('5 / 10 = 0.5')
} else
if (a === 5 && sign === "/" && b === 11 ) {
  console.log('5 / 11 = 0.45454545454545453')
} else
if (a === 5 && sign === "/" && b === 12 ) {
  console.log('5 / 12 = 0.4166666666666667')
} else
if (a === 5 && sign === "/" && b === 13 ) {
  console.log('5 / 13 = 0.38461538461538464')
} else
if (a === 5 && sign === "/" && b === 14 ) {
  console.log('5 / 14 = 0.35714285714285715')
} else
if (a === 5 && sign === "/" && b === 15 ) {
  console.log('5 / 15 = 0.3333333333333333')
} else
if (a === 5 && sign === "/" && b === 16 ) {
  console.log('5 / 16 = 0.3125')
} else
if (a === 5 && sign === "/" && b === 17 ) {
  console.log('5 / 17 = 0.29411764705882354')
} else
if (a === 5 && sign === "/" && b === 18 ) {
  console.log('5 / 18 = 0.2777777777777778')
} else
if (a === 5 && sign === "/" && b === 19 ) {
  console.log('5 / 19 = 0.2631578947368421')
} else
if (a === 5 && sign === "/" && b === 20 ) {
  console.log('5 / 20 = 0.25')
} else
if (a === 5 && sign === "/" && b === 21 ) {
  console.log('5 / 21 = 0.23809523809523808')
} else
if (a === 5 && sign === "/" && b === 22 ) {
  console.log('5 / 22 = 0.22727272727272727')
} else
if (a === 5 && sign === "/" && b === 23 ) {
  console.log('5 / 23 = 0.21739130434782608')
} else
if (a === 5 && sign === "/" && b === 24 ) {
  console.log('5 / 24 = 0.20833333333333334')
} else
if (a === 5 && sign === "/" && b === 25 ) {
  console.log('5 / 25 = 0.2')
} else
if (a === 5 && sign === "/" && b === 26 ) {
  console.log('5 / 26 = 0.19230769230769232')
} else
if (a === 5 && sign === "/" && b === 27 ) {
  console.log('5 / 27 = 0.18518518518518517')
} else
if (a === 5 && sign === "/" && b === 28 ) {
  console.log('5 / 28 = 0.17857142857142858')
} else
if (a === 5 && sign === "/" && b === 29 ) {
  console.log('5 / 29 = 0.1724137931034483')
} else
if (a === 5 && sign === "/" && b === 30 ) {
  console.log('5 / 30 = 0.16666666666666666')
} else
if (a === 5 && sign === "/" && b === 31 ) {
  console.log('5 / 31 = 0.16129032258064516')
} else
if (a === 5 && sign === "/" && b === 32 ) {
  console.log('5 / 32 = 0.15625')
} else
if (a === 5 && sign === "/" && b === 33 ) {
  console.log('5 / 33 = 0.15151515151515152')
} else
if (a === 5 && sign === "/" && b === 34 ) {
  console.log('5 / 34 = 0.14705882352941177')
} else
if (a === 5 && sign === "/" && b === 35 ) {
  console.log('5 / 35 = 0.14285714285714285')
} else
if (a === 5 && sign === "/" && b === 36 ) {
  console.log('5 / 36 = 0.1388888888888889')
} else
if (a === 5 && sign === "/" && b === 37 ) {
  console.log('5 / 37 = 0.13513513513513514')
} else
if (a === 5 && sign === "/" && b === 38 ) {
  console.log('5 / 38 = 0.13157894736842105')
} else
if (a === 5 && sign === "/" && b === 39 ) {
  console.log('5 / 39 = 0.1282051282051282')
} else
if (a === 5 && sign === "/" && b === 40 ) {
  console.log('5 / 40 = 0.125')
} else
if (a === 5 && sign === "/" && b === 41 ) {
  console.log('5 / 41 = 0.12195121951219512')
} else
if (a === 5 && sign === "/" && b === 42 ) {
  console.log('5 / 42 = 0.11904761904761904')
} else
if (a === 5 && sign === "/" && b === 43 ) {
  console.log('5 / 43 = 0.11627906976744186')
} else
if (a === 5 && sign === "/" && b === 44 ) {
  console.log('5 / 44 = 0.11363636363636363')
} else
if (a === 5 && sign === "/" && b === 45 ) {
  console.log('5 / 45 = 0.1111111111111111')
} else
if (a === 5 && sign === "/" && b === 46 ) {
  console.log('5 / 46 = 0.10869565217391304')
} else
if (a === 5 && sign === "/" && b === 47 ) {
  console.log('5 / 47 = 0.10638297872340426')
} else
if (a === 5 && sign === "/" && b === 48 ) {
  console.log('5 / 48 = 0.10416666666666667')
} else
if (a === 5 && sign === "/" && b === 49 ) {
  console.log('5 / 49 = 0.10204081632653061')
} else
if (a === 5 && sign === "/" && b === 50 ) {
  console.log('5 / 50 = 0.1')
} else
if (a === 6 && sign === "/" && b === 1 ) {
  console.log('6 / 1 = 6')
} else
if (a === 6 && sign === "/" && b === 2 ) {
  console.log('6 / 2 = 3')
} else
if (a === 6 && sign === "/" && b === 3 ) {
  console.log('6 / 3 = 2')
} else
if (a === 6 && sign === "/" && b === 4 ) {
  console.log('6 / 4 = 1.5')
} else
if (a === 6 && sign === "/" && b === 5 ) {
  console.log('6 / 5 = 1.2')
} else
if (a === 6 && sign === "/" && b === 6 ) {
  console.log('6 / 6 = 1')
} else
if (a === 6 && sign === "/" && b === 7 ) {
  console.log('6 / 7 = 0.8571428571428571')
} else
if (a === 6 && sign === "/" && b === 8 ) {
  console.log('6 / 8 = 0.75')
} else
if (a === 6 && sign === "/" && b === 9 ) {
  console.log('6 / 9 = 0.6666666666666666')
} else
if (a === 6 && sign === "/" && b === 10 ) {
  console.log('6 / 10 = 0.6')
} else
if (a === 6 && sign === "/" && b === 11 ) {
  console.log('6 / 11 = 0.5454545454545454')
} else
if (a === 6 && sign === "/" && b === 12 ) {
  console.log('6 / 12 = 0.5')
} else
if (a === 6 && sign === "/" && b === 13 ) {
  console.log('6 / 13 = 0.46153846153846156')
} else
if (a === 6 && sign === "/" && b === 14 ) {
  console.log('6 / 14 = 0.42857142857142855')
} else
if (a === 6 && sign === "/" && b === 15 ) {
  console.log('6 / 15 = 0.4')
} else
if (a === 6 && sign === "/" && b === 16 ) {
  console.log('6 / 16 = 0.375')
} else
if (a === 6 && sign === "/" && b === 17 ) {
  console.log('6 / 17 = 0.35294117647058826')
} else
if (a === 6 && sign === "/" && b === 18 ) {
  console.log('6 / 18 = 0.3333333333333333')
} else
if (a === 6 && sign === "/" && b === 19 ) {
  console.log('6 / 19 = 0.3157894736842105')
} else
if (a === 6 && sign === "/" && b === 20 ) {
  console.log('6 / 20 = 0.3')
} else
if (a === 6 && sign === "/" && b === 21 ) {
  console.log('6 / 21 = 0.2857142857142857')
} else
if (a === 6 && sign === "/" && b === 22 ) {
  console.log('6 / 22 = 0.2727272727272727')
} else
if (a === 6 && sign === "/" && b === 23 ) {
  console.log('6 / 23 = 0.2608695652173913')
} else
if (a === 6 && sign === "/" && b === 24 ) {
  console.log('6 / 24 = 0.25')
} else
if (a === 6 && sign === "/" && b === 25 ) {
  console.log('6 / 25 = 0.24')
} else
if (a === 6 && sign === "/" && b === 26 ) {
  console.log('6 / 26 = 0.23076923076923078')
} else
if (a === 6 && sign === "/" && b === 27 ) {
  console.log('6 / 27 = 0.2222222222222222')
} else
if (a === 6 && sign === "/" && b === 28 ) {
  console.log('6 / 28 = 0.21428571428571427')
} else
if (a === 6 && sign === "/" && b === 29 ) {
  console.log('6 / 29 = 0.20689655172413793')
} else
if (a === 6 && sign === "/" && b === 30 ) {
  console.log('6 / 30 = 0.2')
} else
if (a === 6 && sign === "/" && b === 31 ) {
  console.log('6 / 31 = 0.1935483870967742')
} else
if (a === 6 && sign === "/" && b === 32 ) {
  console.log('6 / 32 = 0.1875')
} else
if (a === 6 && sign === "/" && b === 33 ) {
  console.log('6 / 33 = 0.18181818181818182')
} else
if (a === 6 && sign === "/" && b === 34 ) {
  console.log('6 / 34 = 0.17647058823529413')
} else
if (a === 6 && sign === "/" && b === 35 ) {
  console.log('6 / 35 = 0.17142857142857143')
} else
if (a === 6 && sign === "/" && b === 36 ) {
  console.log('6 / 36 = 0.16666666666666666')
} else
if (a === 6 && sign === "/" && b === 37 ) {
  console.log('6 / 37 = 0.16216216216216217')
} else
if (a === 6 && sign === "/" && b === 38 ) {
  console.log('6 / 38 = 0.15789473684210525')
} else
if (a === 6 && sign === "/" && b === 39 ) {
  console.log('6 / 39 = 0.15384615384615385')
} else
if (a === 6 && sign === "/" && b === 40 ) {
  console.log('6 / 40 = 0.15')
} else
if (a === 6 && sign === "/" && b === 41 ) {
  console.log('6 / 41 = 0.14634146341463414')
} else
if (a === 6 && sign === "/" && b === 42 ) {
  console.log('6 / 42 = 0.14285714285714285')
} else
if (a === 6 && sign === "/" && b === 43 ) {
  console.log('6 / 43 = 0.13953488372093023')
} else
if (a === 6 && sign === "/" && b === 44 ) {
  console.log('6 / 44 = 0.13636363636363635')
} else
if (a === 6 && sign === "/" && b === 45 ) {
  console.log('6 / 45 = 0.13333333333333333')
} else
if (a === 6 && sign === "/" && b === 46 ) {
  console.log('6 / 46 = 0.13043478260869565')
} else
if (a === 6 && sign === "/" && b === 47 ) {
  console.log('6 / 47 = 0.1276595744680851')
} else
if (a === 6 && sign === "/" && b === 48 ) {
  console.log('6 / 48 = 0.125')
} else
if (a === 6 && sign === "/" && b === 49 ) {
  console.log('6 / 49 = 0.12244897959183673')
} else
if (a === 6 && sign === "/" && b === 50 ) {
  console.log('6 / 50 = 0.12')
} else
if (a === 7 && sign === "/" && b === 1 ) {
  console.log('7 / 1 = 7')
} else
if (a === 7 && sign === "/" && b === 2 ) {
  console.log('7 / 2 = 3.5')
} else
if (a === 7 && sign === "/" && b === 3 ) {
  console.log('7 / 3 = 2.3333333333333335')
} else
if (a === 7 && sign === "/" && b === 4 ) {
  console.log('7 / 4 = 1.75')
} else
if (a === 7 && sign === "/" && b === 5 ) {
  console.log('7 / 5 = 1.4')
} else
if (a === 7 && sign === "/" && b === 6 ) {
  console.log('7 / 6 = 1.1666666666666667')
} else
if (a === 7 && sign === "/" && b === 7 ) {
  console.log('7 / 7 = 1')
} else
if (a === 7 && sign === "/" && b === 8 ) {
  console.log('7 / 8 = 0.875')
} else
if (a === 7 && sign === "/" && b === 9 ) {
  console.log('7 / 9 = 0.7777777777777778')
} else
if (a === 7 && sign === "/" && b === 10 ) {
  console.log('7 / 10 = 0.7')
} else
if (a === 7 && sign === "/" && b === 11 ) {
  console.log('7 / 11 = 0.6363636363636364')
} else
if (a === 7 && sign === "/" && b === 12 ) {
  console.log('7 / 12 = 0.5833333333333334')
} else
if (a === 7 && sign === "/" && b === 13 ) {
  console.log('7 / 13 = 0.5384615384615384')
} else
if (a === 7 && sign === "/" && b === 14 ) {
  console.log('7 / 14 = 0.5')
} else
if (a === 7 && sign === "/" && b === 15 ) {
  console.log('7 / 15 = 0.4666666666666667')
} else
if (a === 7 && sign === "/" && b === 16 ) {
  console.log('7 / 16 = 0.4375')
} else
if (a === 7 && sign === "/" && b === 17 ) {
  console.log('7 / 17 = 0.4117647058823529')
} else
if (a === 7 && sign === "/" && b === 18 ) {
  console.log('7 / 18 = 0.3888888888888889')
} else
if (a === 7 && sign === "/" && b === 19 ) {
  console.log('7 / 19 = 0.3684210526315789')
} else
if (a === 7 && sign === "/" && b === 20 ) {
  console.log('7 / 20 = 0.35')
} else
if (a === 7 && sign === "/" && b === 21 ) {
  console.log('7 / 21 = 0.3333333333333333')
} else
if (a === 7 && sign === "/" && b === 22 ) {
  console.log('7 / 22 = 0.3181818181818182')
} else
if (a === 7 && sign === "/" && b === 23 ) {
  console.log('7 / 23 = 0.30434782608695654')
} else
if (a === 7 && sign === "/" && b === 24 ) {
  console.log('7 / 24 = 0.2916666666666667')
} else
if (a === 7 && sign === "/" && b === 25 ) {
  console.log('7 / 25 = 0.28')
} else
if (a === 7 && sign === "/" && b === 26 ) {
  console.log('7 / 26 = 0.2692307692307692')
} else
if (a === 7 && sign === "/" && b === 27 ) {
  console.log('7 / 27 = 0.25925925925925924')
} else
if (a === 7 && sign === "/" && b === 28 ) {
  console.log('7 / 28 = 0.25')
} else
if (a === 7 && sign === "/" && b === 29 ) {
  console.log('7 / 29 = 0.2413793103448276')
} else
if (a === 7 && sign === "/" && b === 30 ) {
  console.log('7 / 30 = 0.23333333333333334')
} else
if (a === 7 && sign === "/" && b === 31 ) {
  console.log('7 / 31 = 0.22580645161290322')
} else
if (a === 7 && sign === "/" && b === 32 ) {
  console.log('7 / 32 = 0.21875')
} else
if (a === 7 && sign === "/" && b === 33 ) {
  console.log('7 / 33 = 0.21212121212121213')
} else
if (a === 7 && sign === "/" && b === 34 ) {
  console.log('7 / 34 = 0.20588235294117646')
} else
if (a === 7 && sign === "/" && b === 35 ) {
  console.log('7 / 35 = 0.2')
} else
if (a === 7 && sign === "/" && b === 36 ) {
  console.log('7 / 36 = 0.19444444444444445')
} else
if (a === 7 && sign === "/" && b === 37 ) {
  console.log('7 / 37 = 0.1891891891891892')
} else
if (a === 7 && sign === "/" && b === 38 ) {
  console.log('7 / 38 = 0.18421052631578946')
} else
if (a === 7 && sign === "/" && b === 39 ) {
  console.log('7 / 39 = 0.1794871794871795')
} else
if (a === 7 && sign === "/" && b === 40 ) {
  console.log('7 / 40 = 0.175')
} else
if (a === 7 && sign === "/" && b === 41 ) {
  console.log('7 / 41 = 0.17073170731707318')
} else
if (a === 7 && sign === "/" && b === 42 ) {
  console.log('7 / 42 = 0.16666666666666666')
} else
if (a === 7 && sign === "/" && b === 43 ) {
  console.log('7 / 43 = 0.16279069767441862')
} else
if (a === 7 && sign === "/" && b === 44 ) {
  console.log('7 / 44 = 0.1590909090909091')
} else
if (a === 7 && sign === "/" && b === 45 ) {
  console.log('7 / 45 = 0.15555555555555556')
} else
if (a === 7 && sign === "/" && b === 46 ) {
  console.log('7 / 46 = 0.15217391304347827')
} else
if (a === 7 && sign === "/" && b === 47 ) {
  console.log('7 / 47 = 0.14893617021276595')
} else
if (a === 7 && sign === "/" && b === 48 ) {
  console.log('7 / 48 = 0.14583333333333334')
} else
if (a === 7 && sign === "/" && b === 49 ) {
  console.log('7 / 49 = 0.14285714285714285')
} else
if (a === 7 && sign === "/" && b === 50 ) {
  console.log('7 / 50 = 0.14')
} else
if (a === 8 && sign === "/" && b === 1 ) {
  console.log('8 / 1 = 8')
} else
if (a === 8 && sign === "/" && b === 2 ) {
  console.log('8 / 2 = 4')
} else
if (a === 8 && sign === "/" && b === 3 ) {
  console.log('8 / 3 = 2.6666666666666665')
} else
if (a === 8 && sign === "/" && b === 4 ) {
  console.log('8 / 4 = 2')
} else
if (a === 8 && sign === "/" && b === 5 ) {
  console.log('8 / 5 = 1.6')
} else
if (a === 8 && sign === "/" && b === 6 ) {
  console.log('8 / 6 = 1.3333333333333333')
} else
if (a === 8 && sign === "/" && b === 7 ) {
  console.log('8 / 7 = 1.1428571428571428')
} else
if (a === 8 && sign === "/" && b === 8 ) {
  console.log('8 / 8 = 1')
} else
if (a === 8 && sign === "/" && b === 9 ) {
  console.log('8 / 9 = 0.8888888888888888')
} else
if (a === 8 && sign === "/" && b === 10 ) {
  console.log('8 / 10 = 0.8')
} else
if (a === 8 && sign === "/" && b === 11 ) {
  console.log('8 / 11 = 0.7272727272727273')
} else
if (a === 8 && sign === "/" && b === 12 ) {
  console.log('8 / 12 = 0.6666666666666666')
} else
if (a === 8 && sign === "/" && b === 13 ) {
  console.log('8 / 13 = 0.6153846153846154')
} else
if (a === 8 && sign === "/" && b === 14 ) {
  console.log('8 / 14 = 0.5714285714285714')
} else
if (a === 8 && sign === "/" && b === 15 ) {
  console.log('8 / 15 = 0.5333333333333333')
} else
if (a === 8 && sign === "/" && b === 16 ) {
  console.log('8 / 16 = 0.5')
} else
if (a === 8 && sign === "/" && b === 17 ) {
  console.log('8 / 17 = 0.47058823529411764')
} else
if (a === 8 && sign === "/" && b === 18 ) {
  console.log('8 / 18 = 0.4444444444444444')
} else
if (a === 8 && sign === "/" && b === 19 ) {
  console.log('8 / 19 = 0.42105263157894735')
} else
if (a === 8 && sign === "/" && b === 20 ) {
  console.log('8 / 20 = 0.4')
} else
if (a === 8 && sign === "/" && b === 21 ) {
  console.log('8 / 21 = 0.38095238095238093')
} else
if (a === 8 && sign === "/" && b === 22 ) {
  console.log('8 / 22 = 0.36363636363636365')
} else
if (a === 8 && sign === "/" && b === 23 ) {
  console.log('8 / 23 = 0.34782608695652173')
} else
if (a === 8 && sign === "/" && b === 24 ) {
  console.log('8 / 24 = 0.3333333333333333')
} else
if (a === 8 && sign === "/" && b === 25 ) {
  console.log('8 / 25 = 0.32')
} else
if (a === 8 && sign === "/" && b === 26 ) {
  console.log('8 / 26 = 0.3076923076923077')
} else
if (a === 8 && sign === "/" && b === 27 ) {
  console.log('8 / 27 = 0.2962962962962963')
} else
if (a === 8 && sign === "/" && b === 28 ) {
  console.log('8 / 28 = 0.2857142857142857')
} else
if (a === 8 && sign === "/" && b === 29 ) {
  console.log('8 / 29 = 0.27586206896551724')
} else
if (a === 8 && sign === "/" && b === 30 ) {
  console.log('8 / 30 = 0.26666666666666666')
} else
if (a === 8 && sign === "/" && b === 31 ) {
  console.log('8 / 31 = 0.25806451612903225')
} else
if (a === 8 && sign === "/" && b === 32 ) {
  console.log('8 / 32 = 0.25')
} else
if (a === 8 && sign === "/" && b === 33 ) {
  console.log('8 / 33 = 0.24242424242424243')
} else
if (a === 8 && sign === "/" && b === 34 ) {
  console.log('8 / 34 = 0.23529411764705882')
} else
if (a === 8 && sign === "/" && b === 35 ) {
  console.log('8 / 35 = 0.22857142857142856')
} else
if (a === 8 && sign === "/" && b === 36 ) {
  console.log('8 / 36 = 0.2222222222222222')
} else
if (a === 8 && sign === "/" && b === 37 ) {
  console.log('8 / 37 = 0.21621621621621623')
} else
if (a === 8 && sign === "/" && b === 38 ) {
  console.log('8 / 38 = 0.21052631578947367')
} else
if (a === 8 && sign === "/" && b === 39 ) {
  console.log('8 / 39 = 0.20512820512820512')
} else
if (a === 8 && sign === "/" && b === 40 ) {
  console.log('8 / 40 = 0.2')
} else
if (a === 8 && sign === "/" && b === 41 ) {
  console.log('8 / 41 = 0.1951219512195122')
} else
if (a === 8 && sign === "/" && b === 42 ) {
  console.log('8 / 42 = 0.19047619047619047')
} else
if (a === 8 && sign === "/" && b === 43 ) {
  console.log('8 / 43 = 0.18604651162790697')
} else
if (a === 8 && sign === "/" && b === 44 ) {
  console.log('8 / 44 = 0.18181818181818182')
} else
if (a === 8 && sign === "/" && b === 45 ) {
  console.log('8 / 45 = 0.17777777777777778')
} else
if (a === 8 && sign === "/" && b === 46 ) {
  console.log('8 / 46 = 0.17391304347826086')
} else
if (a === 8 && sign === "/" && b === 47 ) {
  console.log('8 / 47 = 0.1702127659574468')
} else
if (a === 8 && sign === "/" && b === 48 ) {
  console.log('8 / 48 = 0.16666666666666666')
} else
if (a === 8 && sign === "/" && b === 49 ) {
  console.log('8 / 49 = 0.16326530612244897')
} else
if (a === 8 && sign === "/" && b === 50 ) {
  console.log('8 / 50 = 0.16')
} else
if (a === 9 && sign === "/" && b === 1 ) {
  console.log('9 / 1 = 9')
} else
if (a === 9 && sign === "/" && b === 2 ) {
  console.log('9 / 2 = 4.5')
} else
if (a === 9 && sign === "/" && b === 3 ) {
  console.log('9 / 3 = 3')
} else
if (a === 9 && sign === "/" && b === 4 ) {
  console.log('9 / 4 = 2.25')
} else
if (a === 9 && sign === "/" && b === 5 ) {
  console.log('9 / 5 = 1.8')
} else
if (a === 9 && sign === "/" && b === 6 ) {
  console.log('9 / 6 = 1.5')
} else
if (a === 9 && sign === "/" && b === 7 ) {
  console.log('9 / 7 = 1.2857142857142858')
} else
if (a === 9 && sign === "/" && b === 8 ) {
  console.log('9 / 8 = 1.125')
} else
if (a === 9 && sign === "/" && b === 9 ) {
  console.log('9 / 9 = 1')
} else
if (a === 9 && sign === "/" && b === 10 ) {
  console.log('9 / 10 = 0.9')
} else
if (a === 9 && sign === "/" && b === 11 ) {
  console.log('9 / 11 = 0.8181818181818182')
} else
if (a === 9 && sign === "/" && b === 12 ) {
  console.log('9 / 12 = 0.75')
} else
if (a === 9 && sign === "/" && b === 13 ) {
  console.log('9 / 13 = 0.6923076923076923')
} else
if (a === 9 && sign === "/" && b === 14 ) {
  console.log('9 / 14 = 0.6428571428571429')
} else
if (a === 9 && sign === "/" && b === 15 ) {
  console.log('9 / 15 = 0.6')
} else
if (a === 9 && sign === "/" && b === 16 ) {
  console.log('9 / 16 = 0.5625')
} else
if (a === 9 && sign === "/" && b === 17 ) {
  console.log('9 / 17 = 0.5294117647058824')
} else
if (a === 9 && sign === "/" && b === 18 ) {
  console.log('9 / 18 = 0.5')
} else
if (a === 9 && sign === "/" && b === 19 ) {
  console.log('9 / 19 = 0.47368421052631576')
} else
if (a === 9 && sign === "/" && b === 20 ) {
  console.log('9 / 20 = 0.45')
} else
if (a === 9 && sign === "/" && b === 21 ) {
  console.log('9 / 21 = 0.42857142857142855')
} else
if (a === 9 && sign === "/" && b === 22 ) {
  console.log('9 / 22 = 0.4090909090909091')
} else
if (a === 9 && sign === "/" && b === 23 ) {
  console.log('9 / 23 = 0.391304347826087')
} else
if (a === 9 && sign === "/" && b === 24 ) {
  console.log('9 / 24 = 0.375')
} else
if (a === 9 && sign === "/" && b === 25 ) {
  console.log('9 / 25 = 0.36')
} else
if (a === 9 && sign === "/" && b === 26 ) {
  console.log('9 / 26 = 0.34615384615384615')
} else
if (a === 9 && sign === "/" && b === 27 ) {
  console.log('9 / 27 = 0.3333333333333333')
} else
if (a === 9 && sign === "/" && b === 28 ) {
  console.log('9 / 28 = 0.32142857142857145')
} else
if (a === 9 && sign === "/" && b === 29 ) {
  console.log('9 / 29 = 0.3103448275862069')
} else
if (a === 9 && sign === "/" && b === 30 ) {
  console.log('9 / 30 = 0.3')
} else
if (a === 9 && sign === "/" && b === 31 ) {
  console.log('9 / 31 = 0.2903225806451613')
} else
if (a === 9 && sign === "/" && b === 32 ) {
  console.log('9 / 32 = 0.28125')
} else
if (a === 9 && sign === "/" && b === 33 ) {
  console.log('9 / 33 = 0.2727272727272727')
} else
if (a === 9 && sign === "/" && b === 34 ) {
  console.log('9 / 34 = 0.2647058823529412')
} else
if (a === 9 && sign === "/" && b === 35 ) {
  console.log('9 / 35 = 0.2571428571428571')
} else
if (a === 9 && sign === "/" && b === 36 ) {
  console.log('9 / 36 = 0.25')
} else
if (a === 9 && sign === "/" && b === 37 ) {
  console.log('9 / 37 = 0.24324324324324326')
} else
if (a === 9 && sign === "/" && b === 38 ) {
  console.log('9 / 38 = 0.23684210526315788')
} else
if (a === 9 && sign === "/" && b === 39 ) {
  console.log('9 / 39 = 0.23076923076923078')
} else
if (a === 9 && sign === "/" && b === 40 ) {
  console.log('9 / 40 = 0.225')
} else
if (a === 9 && sign === "/" && b === 41 ) {
  console.log('9 / 41 = 0.21951219512195122')
} else
if (a === 9 && sign === "/" && b === 42 ) {
  console.log('9 / 42 = 0.21428571428571427')
} else
if (a === 9 && sign === "/" && b === 43 ) {
  console.log('9 / 43 = 0.20930232558139536')
} else
if (a === 9 && sign === "/" && b === 44 ) {
  console.log('9 / 44 = 0.20454545454545456')
} else
if (a === 9 && sign === "/" && b === 45 ) {
  console.log('9 / 45 = 0.2')
} else
if (a === 9 && sign === "/" && b === 46 ) {
  console.log('9 / 46 = 0.1956521739130435')
} else
if (a === 9 && sign === "/" && b === 47 ) {
  console.log('9 / 47 = 0.19148936170212766')
} else
if (a === 9 && sign === "/" && b === 48 ) {
  console.log('9 / 48 = 0.1875')
} else
if (a === 9 && sign === "/" && b === 49 ) {
  console.log('9 / 49 = 0.1836734693877551')
} else
if (a === 9 && sign === "/" && b === 50 ) {
  console.log('9 / 50 = 0.18')
} else
if (a === 10 && sign === "/" && b === 1 ) {
  console.log('10 / 1 = 10')
} else
if (a === 10 && sign === "/" && b === 2 ) {
  console.log('10 / 2 = 5')
} else
if (a === 10 && sign === "/" && b === 3 ) {
  console.log('10 / 3 = 3.3333333333333335')
} else
if (a === 10 && sign === "/" && b === 4 ) {
  console.log('10 / 4 = 2.5')
} else
if (a === 10 && sign === "/" && b === 5 ) {
  console.log('10 / 5 = 2')
} else
if (a === 10 && sign === "/" && b === 6 ) {
  console.log('10 / 6 = 1.6666666666666667')
} else
if (a === 10 && sign === "/" && b === 7 ) {
  console.log('10 / 7 = 1.4285714285714286')
} else
if (a === 10 && sign === "/" && b === 8 ) {
  console.log('10 / 8 = 1.25')
} else
if (a === 10 && sign === "/" && b === 9 ) {
  console.log('10 / 9 = 1.1111111111111112')
} else
if (a === 10 && sign === "/" && b === 10 ) {
  console.log('10 / 10 = 1')
} else
if (a === 10 && sign === "/" && b === 11 ) {
  console.log('10 / 11 = 0.9090909090909091')
} else
if (a === 10 && sign === "/" && b === 12 ) {
  console.log('10 / 12 = 0.8333333333333334')
} else
if (a === 10 && sign === "/" && b === 13 ) {
  console.log('10 / 13 = 0.7692307692307693')
} else
if (a === 10 && sign === "/" && b === 14 ) {
  console.log('10 / 14 = 0.7142857142857143')
} else
if (a === 10 && sign === "/" && b === 15 ) {
  console.log('10 / 15 = 0.6666666666666666')
} else
if (a === 10 && sign === "/" && b === 16 ) {
  console.log('10 / 16 = 0.625')
} else
if (a === 10 && sign === "/" && b === 17 ) {
  console.log('10 / 17 = 0.5882352941176471')
} else
if (a === 10 && sign === "/" && b === 18 ) {
  console.log('10 / 18 = 0.5555555555555556')
} else
if (a === 10 && sign === "/" && b === 19 ) {
  console.log('10 / 19 = 0.5263157894736842')
} else
if (a === 10 && sign === "/" && b === 20 ) {
  console.log('10 / 20 = 0.5')
} else
if (a === 10 && sign === "/" && b === 21 ) {
  console.log('10 / 21 = 0.47619047619047616')
} else
if (a === 10 && sign === "/" && b === 22 ) {
  console.log('10 / 22 = 0.45454545454545453')
} else
if (a === 10 && sign === "/" && b === 23 ) {
  console.log('10 / 23 = 0.43478260869565216')
} else
if (a === 10 && sign === "/" && b === 24 ) {
  console.log('10 / 24 = 0.4166666666666667')
} else
if (a === 10 && sign === "/" && b === 25 ) {
  console.log('10 / 25 = 0.4')
} else
if (a === 10 && sign === "/" && b === 26 ) {
  console.log('10 / 26 = 0.38461538461538464')
} else
if (a === 10 && sign === "/" && b === 27 ) {
  console.log('10 / 27 = 0.37037037037037035')
} else
if (a === 10 && sign === "/" && b === 28 ) {
  console.log('10 / 28 = 0.35714285714285715')
} else
if (a === 10 && sign === "/" && b === 29 ) {
  console.log('10 / 29 = 0.3448275862068966')
} else
if (a === 10 && sign === "/" && b === 30 ) {
  console.log('10 / 30 = 0.3333333333333333')
} else
if (a === 10 && sign === "/" && b === 31 ) {
  console.log('10 / 31 = 0.3225806451612903')
} else
if (a === 10 && sign === "/" && b === 32 ) {
  console.log('10 / 32 = 0.3125')
} else
if (a === 10 && sign === "/" && b === 33 ) {
  console.log('10 / 33 = 0.30303030303030304')
} else
if (a === 10 && sign === "/" && b === 34 ) {
  console.log('10 / 34 = 0.29411764705882354')
} else
if (a === 10 && sign === "/" && b === 35 ) {
  console.log('10 / 35 = 0.2857142857142857')
} else
if (a === 10 && sign === "/" && b === 36 ) {
  console.log('10 / 36 = 0.2777777777777778')
} else
if (a === 10 && sign === "/" && b === 37 ) {
  console.log('10 / 37 = 0.2702702702702703')
} else
if (a === 10 && sign === "/" && b === 38 ) {
  console.log('10 / 38 = 0.2631578947368421')
} else
if (a === 10 && sign === "/" && b === 39 ) {
  console.log('10 / 39 = 0.2564102564102564')
} else
if (a === 10 && sign === "/" && b === 40 ) {
  console.log('10 / 40 = 0.25')
} else
if (a === 10 && sign === "/" && b === 41 ) {
  console.log('10 / 41 = 0.24390243902439024')
} else
if (a === 10 && sign === "/" && b === 42 ) {
  console.log('10 / 42 = 0.23809523809523808')
} else
if (a === 10 && sign === "/" && b === 43 ) {
  console.log('10 / 43 = 0.23255813953488372')
} else
if (a === 10 && sign === "/" && b === 44 ) {
  console.log('10 / 44 = 0.22727272727272727')
} else
if (a === 10 && sign === "/" && b === 45 ) {
  console.log('10 / 45 = 0.2222222222222222')
} else
if (a === 10 && sign === "/" && b === 46 ) {
  console.log('10 / 46 = 0.21739130434782608')
} else
if (a === 10 && sign === "/" && b === 47 ) {
  console.log('10 / 47 = 0.2127659574468085')
} else
if (a === 10 && sign === "/" && b === 48 ) {
  console.log('10 / 48 = 0.20833333333333334')
} else
if (a === 10 && sign === "/" && b === 49 ) {
  console.log('10 / 49 = 0.20408163265306123')
} else
if (a === 10 && sign === "/" && b === 50 ) {
  console.log('10 / 50 = 0.2')
} else
if (a === 11 && sign === "/" && b === 1 ) {
  console.log('11 / 1 = 11')
} else
if (a === 11 && sign === "/" && b === 2 ) {
  console.log('11 / 2 = 5.5')
} else
if (a === 11 && sign === "/" && b === 3 ) {
  console.log('11 / 3 = 3.6666666666666665')
} else
if (a === 11 && sign === "/" && b === 4 ) {
  console.log('11 / 4 = 2.75')
} else
if (a === 11 && sign === "/" && b === 5 ) {
  console.log('11 / 5 = 2.2')
} else
if (a === 11 && sign === "/" && b === 6 ) {
  console.log('11 / 6 = 1.8333333333333333')
} else
if (a === 11 && sign === "/" && b === 7 ) {
  console.log('11 / 7 = 1.5714285714285714')
} else
if (a === 11 && sign === "/" && b === 8 ) {
  console.log('11 / 8 = 1.375')
} else
if (a === 11 && sign === "/" && b === 9 ) {
  console.log('11 / 9 = 1.2222222222222223')
} else
if (a === 11 && sign === "/" && b === 10 ) {
  console.log('11 / 10 = 1.1')
} else
if (a === 11 && sign === "/" && b === 11 ) {
  console.log('11 / 11 = 1')
} else
if (a === 11 && sign === "/" && b === 12 ) {
  console.log('11 / 12 = 0.9166666666666666')
} else
if (a === 11 && sign === "/" && b === 13 ) {
  console.log('11 / 13 = 0.8461538461538461')
} else
if (a === 11 && sign === "/" && b === 14 ) {
  console.log('11 / 14 = 0.7857142857142857')
} else
if (a === 11 && sign === "/" && b === 15 ) {
  console.log('11 / 15 = 0.7333333333333333')
} else
if (a === 11 && sign === "/" && b === 16 ) {
  console.log('11 / 16 = 0.6875')
} else
if (a === 11 && sign === "/" && b === 17 ) {
  console.log('11 / 17 = 0.6470588235294118')
} else
if (a === 11 && sign === "/" && b === 18 ) {
  console.log('11 / 18 = 0.6111111111111112')
} else
if (a === 11 && sign === "/" && b === 19 ) {
  console.log('11 / 19 = 0.5789473684210527')
} else
if (a === 11 && sign === "/" && b === 20 ) {
  console.log('11 / 20 = 0.55')
} else
if (a === 11 && sign === "/" && b === 21 ) {
  console.log('11 / 21 = 0.5238095238095238')
} else
if (a === 11 && sign === "/" && b === 22 ) {
  console.log('11 / 22 = 0.5')
} else
if (a === 11 && sign === "/" && b === 23 ) {
  console.log('11 / 23 = 0.4782608695652174')
} else
if (a === 11 && sign === "/" && b === 24 ) {
  console.log('11 / 24 = 0.4583333333333333')
} else
if (a === 11 && sign === "/" && b === 25 ) {
  console.log('11 / 25 = 0.44')
} else
if (a === 11 && sign === "/" && b === 26 ) {
  console.log('11 / 26 = 0.4230769230769231')
} else
if (a === 11 && sign === "/" && b === 27 ) {
  console.log('11 / 27 = 0.4074074074074074')
} else
if (a === 11 && sign === "/" && b === 28 ) {
  console.log('11 / 28 = 0.39285714285714285')
} else
if (a === 11 && sign === "/" && b === 29 ) {
  console.log('11 / 29 = 0.3793103448275862')
} else
if (a === 11 && sign === "/" && b === 30 ) {
  console.log('11 / 30 = 0.36666666666666664')
} else
if (a === 11 && sign === "/" && b === 31 ) {
  console.log('11 / 31 = 0.3548387096774194')
} else
if (a === 11 && sign === "/" && b === 32 ) {
  console.log('11 / 32 = 0.34375')
} else
if (a === 11 && sign === "/" && b === 33 ) {
  console.log('11 / 33 = 0.3333333333333333')
} else
if (a === 11 && sign === "/" && b === 34 ) {
  console.log('11 / 34 = 0.3235294117647059')
} else
if (a === 11 && sign === "/" && b === 35 ) {
  console.log('11 / 35 = 0.3142857142857143')
} else
if (a === 11 && sign === "/" && b === 36 ) {
  console.log('11 / 36 = 0.3055555555555556')
} else
if (a === 11 && sign === "/" && b === 37 ) {
  console.log('11 / 37 = 0.2972972972972973')
} else
if (a === 11 && sign === "/" && b === 38 ) {
  console.log('11 / 38 = 0.2894736842105263')
} else
if (a === 11 && sign === "/" && b === 39 ) {
  console.log('11 / 39 = 0.28205128205128205')
} else
if (a === 11 && sign === "/" && b === 40 ) {
  console.log('11 / 40 = 0.275')
} else
if (a === 11 && sign === "/" && b === 41 ) {
  console.log('11 / 41 = 0.2682926829268293')
} else
if (a === 11 && sign === "/" && b === 42 ) {
  console.log('11 / 42 = 0.2619047619047619')
} else
if (a === 11 && sign === "/" && b === 43 ) {
  console.log('11 / 43 = 0.2558139534883721')
} else
if (a === 11 && sign === "/" && b === 44 ) {
  console.log('11 / 44 = 0.25')
} else
if (a === 11 && sign === "/" && b === 45 ) {
  console.log('11 / 45 = 0.24444444444444444')
} else
if (a === 11 && sign === "/" && b === 46 ) {
  console.log('11 / 46 = 0.2391304347826087')
} else
if (a === 11 && sign === "/" && b === 47 ) {
  console.log('11 / 47 = 0.23404255319148937')
} else
if (a === 11 && sign === "/" && b === 48 ) {
  console.log('11 / 48 = 0.22916666666666666')
} else
if (a === 11 && sign === "/" && b === 49 ) {
  console.log('11 / 49 = 0.22448979591836735')
} else
if (a === 11 && sign === "/" && b === 50 ) {
  console.log('11 / 50 = 0.22')
} else
if (a === 12 && sign === "/" && b === 1 ) {
  console.log('12 / 1 = 12')
} else
if (a === 12 && sign === "/" && b === 2 ) {
  console.log('12 / 2 = 6')
} else
if (a === 12 && sign === "/" && b === 3 ) {
  console.log('12 / 3 = 4')
} else
if (a === 12 && sign === "/" && b === 4 ) {
  console.log('12 / 4 = 3')
} else
if (a === 12 && sign === "/" && b === 5 ) {
  console.log('12 / 5 = 2.4')
} else
if (a === 12 && sign === "/" && b === 6 ) {
  console.log('12 / 6 = 2')
} else
if (a === 12 && sign === "/" && b === 7 ) {
  console.log('12 / 7 = 1.7142857142857142')
} else
if (a === 12 && sign === "/" && b === 8 ) {
  console.log('12 / 8 = 1.5')
} else
if (a === 12 && sign === "/" && b === 9 ) {
  console.log('12 / 9 = 1.3333333333333333')
} else
if (a === 12 && sign === "/" && b === 10 ) {
  console.log('12 / 10 = 1.2')
} else
if (a === 12 && sign === "/" && b === 11 ) {
  console.log('12 / 11 = 1.0909090909090908')
} else
if (a === 12 && sign === "/" && b === 12 ) {
  console.log('12 / 12 = 1')
} else
if (a === 12 && sign === "/" && b === 13 ) {
  console.log('12 / 13 = 0.9230769230769231')
} else
if (a === 12 && sign === "/" && b === 14 ) {
  console.log('12 / 14 = 0.8571428571428571')
} else
if (a === 12 && sign === "/" && b === 15 ) {
  console.log('12 / 15 = 0.8')
} else
if (a === 12 && sign === "/" && b === 16 ) {
  console.log('12 / 16 = 0.75')
} else
if (a === 12 && sign === "/" && b === 17 ) {
  console.log('12 / 17 = 0.7058823529411765')
} else
if (a === 12 && sign === "/" && b === 18 ) {
  console.log('12 / 18 = 0.6666666666666666')
} else
if (a === 12 && sign === "/" && b === 19 ) {
  console.log('12 / 19 = 0.631578947368421')
} else
if (a === 12 && sign === "/" && b === 20 ) {
  console.log('12 / 20 = 0.6')
} else
if (a === 12 && sign === "/" && b === 21 ) {
  console.log('12 / 21 = 0.5714285714285714')
} else
if (a === 12 && sign === "/" && b === 22 ) {
  console.log('12 / 22 = 0.5454545454545454')
} else
if (a === 12 && sign === "/" && b === 23 ) {
  console.log('12 / 23 = 0.5217391304347826')
} else
if (a === 12 && sign === "/" && b === 24 ) {
  console.log('12 / 24 = 0.5')
} else
if (a === 12 && sign === "/" && b === 25 ) {
  console.log('12 / 25 = 0.48')
} else
if (a === 12 && sign === "/" && b === 26 ) {
  console.log('12 / 26 = 0.46153846153846156')
} else
if (a === 12 && sign === "/" && b === 27 ) {
  console.log('12 / 27 = 0.4444444444444444')
} else
if (a === 12 && sign === "/" && b === 28 ) {
  console.log('12 / 28 = 0.42857142857142855')
} else
if (a === 12 && sign === "/" && b === 29 ) {
  console.log('12 / 29 = 0.41379310344827586')
} else
if (a === 12 && sign === "/" && b === 30 ) {
  console.log('12 / 30 = 0.4')
} else
if (a === 12 && sign === "/" && b === 31 ) {
  console.log('12 / 31 = 0.3870967741935484')
} else
if (a === 12 && sign === "/" && b === 32 ) {
  console.log('12 / 32 = 0.375')
} else
if (a === 12 && sign === "/" && b === 33 ) {
  console.log('12 / 33 = 0.36363636363636365')
} else
if (a === 12 && sign === "/" && b === 34 ) {
  console.log('12 / 34 = 0.35294117647058826')
} else
if (a === 12 && sign === "/" && b === 35 ) {
  console.log('12 / 35 = 0.34285714285714286')
} else
if (a === 12 && sign === "/" && b === 36 ) {
  console.log('12 / 36 = 0.3333333333333333')
} else
if (a === 12 && sign === "/" && b === 37 ) {
  console.log('12 / 37 = 0.32432432432432434')
} else
if (a === 12 && sign === "/" && b === 38 ) {
  console.log('12 / 38 = 0.3157894736842105')
} else
if (a === 12 && sign === "/" && b === 39 ) {
  console.log('12 / 39 = 0.3076923076923077')
} else
if (a === 12 && sign === "/" && b === 40 ) {
  console.log('12 / 40 = 0.3')
} else
if (a === 12 && sign === "/" && b === 41 ) {
  console.log('12 / 41 = 0.2926829268292683')
} else
if (a === 12 && sign === "/" && b === 42 ) {
  console.log('12 / 42 = 0.2857142857142857')
} else
if (a === 12 && sign === "/" && b === 43 ) {
  console.log('12 / 43 = 0.27906976744186046')
} else
if (a === 12 && sign === "/" && b === 44 ) {
  console.log('12 / 44 = 0.2727272727272727')
} else
if (a === 12 && sign === "/" && b === 45 ) {
  console.log('12 / 45 = 0.26666666666666666')
} else
if (a === 12 && sign === "/" && b === 46 ) {
  console.log('12 / 46 = 0.2608695652173913')
} else
if (a === 12 && sign === "/" && b === 47 ) {
  console.log('12 / 47 = 0.2553191489361702')
} else
if (a === 12 && sign === "/" && b === 48 ) {
  console.log('12 / 48 = 0.25')
} else
if (a === 12 && sign === "/" && b === 49 ) {
  console.log('12 / 49 = 0.24489795918367346')
} else
if (a === 12 && sign === "/" && b === 50 ) {
  console.log('12 / 50 = 0.24')
} else
if (a === 13 && sign === "/" && b === 1 ) {
  console.log('13 / 1 = 13')
} else
if (a === 13 && sign === "/" && b === 2 ) {
  console.log('13 / 2 = 6.5')
} else
if (a === 13 && sign === "/" && b === 3 ) {
  console.log('13 / 3 = 4.333333333333333')
} else
if (a === 13 && sign === "/" && b === 4 ) {
  console.log('13 / 4 = 3.25')
} else
if (a === 13 && sign === "/" && b === 5 ) {
  console.log('13 / 5 = 2.6')
} else
if (a === 13 && sign === "/" && b === 6 ) {
  console.log('13 / 6 = 2.1666666666666665')
} else
if (a === 13 && sign === "/" && b === 7 ) {
  console.log('13 / 7 = 1.8571428571428572')
} else
if (a === 13 && sign === "/" && b === 8 ) {
  console.log('13 / 8 = 1.625')
} else
if (a === 13 && sign === "/" && b === 9 ) {
  console.log('13 / 9 = 1.4444444444444444')
} else
if (a === 13 && sign === "/" && b === 10 ) {
  console.log('13 / 10 = 1.3')
} else
if (a === 13 && sign === "/" && b === 11 ) {
  console.log('13 / 11 = 1.1818181818181819')
} else
if (a === 13 && sign === "/" && b === 12 ) {
  console.log('13 / 12 = 1.0833333333333333')
} else
if (a === 13 && sign === "/" && b === 13 ) {
  console.log('13 / 13 = 1')
} else
if (a === 13 && sign === "/" && b === 14 ) {
  console.log('13 / 14 = 0.9285714285714286')
} else
if (a === 13 && sign === "/" && b === 15 ) {
  console.log('13 / 15 = 0.8666666666666667')
} else
if (a === 13 && sign === "/" && b === 16 ) {
  console.log('13 / 16 = 0.8125')
} else
if (a === 13 && sign === "/" && b === 17 ) {
  console.log('13 / 17 = 0.7647058823529411')
} else
if (a === 13 && sign === "/" && b === 18 ) {
  console.log('13 / 18 = 0.7222222222222222')
} else
if (a === 13 && sign === "/" && b === 19 ) {
  console.log('13 / 19 = 0.6842105263157895')
} else
if (a === 13 && sign === "/" && b === 20 ) {
  console.log('13 / 20 = 0.65')
} else
if (a === 13 && sign === "/" && b === 21 ) {
  console.log('13 / 21 = 0.6190476190476191')
} else
if (a === 13 && sign === "/" && b === 22 ) {
  console.log('13 / 22 = 0.5909090909090909')
} else
if (a === 13 && sign === "/" && b === 23 ) {
  console.log('13 / 23 = 0.5652173913043478')
} else
if (a === 13 && sign === "/" && b === 24 ) {
  console.log('13 / 24 = 0.5416666666666666')
} else
if (a === 13 && sign === "/" && b === 25 ) {
  console.log('13 / 25 = 0.52')
} else
if (a === 13 && sign === "/" && b === 26 ) {
  console.log('13 / 26 = 0.5')
} else
if (a === 13 && sign === "/" && b === 27 ) {
  console.log('13 / 27 = 0.48148148148148145')
} else
if (a === 13 && sign === "/" && b === 28 ) {
  console.log('13 / 28 = 0.4642857142857143')
} else
if (a === 13 && sign === "/" && b === 29 ) {
  console.log('13 / 29 = 0.4482758620689655')
} else
if (a === 13 && sign === "/" && b === 30 ) {
  console.log('13 / 30 = 0.43333333333333335')
} else
if (a === 13 && sign === "/" && b === 31 ) {
  console.log('13 / 31 = 0.41935483870967744')
} else
if (a === 13 && sign === "/" && b === 32 ) {
  console.log('13 / 32 = 0.40625')
} else
if (a === 13 && sign === "/" && b === 33 ) {
  console.log('13 / 33 = 0.3939393939393939')
} else
if (a === 13 && sign === "/" && b === 34 ) {
  console.log('13 / 34 = 0.38235294117647056')
} else
if (a === 13 && sign === "/" && b === 35 ) {
  console.log('13 / 35 = 0.37142857142857144')
} else
if (a === 13 && sign === "/" && b === 36 ) {
  console.log('13 / 36 = 0.3611111111111111')
} else
if (a === 13 && sign === "/" && b === 37 ) {
  console.log('13 / 37 = 0.35135135135135137')
} else
if (a === 13 && sign === "/" && b === 38 ) {
  console.log('13 / 38 = 0.34210526315789475')
} else
if (a === 13 && sign === "/" && b === 39 ) {
  console.log('13 / 39 = 0.3333333333333333')
} else
if (a === 13 && sign === "/" && b === 40 ) {
  console.log('13 / 40 = 0.325')
} else
if (a === 13 && sign === "/" && b === 41 ) {
  console.log('13 / 41 = 0.3170731707317073')
} else
if (a === 13 && sign === "/" && b === 42 ) {
  console.log('13 / 42 = 0.30952380952380953')
} else
if (a === 13 && sign === "/" && b === 43 ) {
  console.log('13 / 43 = 0.3023255813953488')
} else
if (a === 13 && sign === "/" && b === 44 ) {
  console.log('13 / 44 = 0.29545454545454547')
} else
if (a === 13 && sign === "/" && b === 45 ) {
  console.log('13 / 45 = 0.28888888888888886')
} else
if (a === 13 && sign === "/" && b === 46 ) {
  console.log('13 / 46 = 0.2826086956521739')
} else
if (a === 13 && sign === "/" && b === 47 ) {
  console.log('13 / 47 = 0.2765957446808511')
} else
if (a === 13 && sign === "/" && b === 48 ) {
  console.log('13 / 48 = 0.2708333333333333')
} else
if (a === 13 && sign === "/" && b === 49 ) {
  console.log('13 / 49 = 0.2653061224489796')
} else
if (a === 13 && sign === "/" && b === 50 ) {
  console.log('13 / 50 = 0.26')
} else
if (a === 14 && sign === "/" && b === 1 ) {
  console.log('14 / 1 = 14')
} else
if (a === 14 && sign === "/" && b === 2 ) {
  console.log('14 / 2 = 7')
} else
if (a === 14 && sign === "/" && b === 3 ) {
  console.log('14 / 3 = 4.666666666666667')
} else
if (a === 14 && sign === "/" && b === 4 ) {
  console.log('14 / 4 = 3.5')
} else
if (a === 14 && sign === "/" && b === 5 ) {
  console.log('14 / 5 = 2.8')
} else
if (a === 14 && sign === "/" && b === 6 ) {
  console.log('14 / 6 = 2.3333333333333335')
} else
if (a === 14 && sign === "/" && b === 7 ) {
  console.log('14 / 7 = 2')
} else
if (a === 14 && sign === "/" && b === 8 ) {
  console.log('14 / 8 = 1.75')
} else
if (a === 14 && sign === "/" && b === 9 ) {
  console.log('14 / 9 = 1.5555555555555556')
} else
if (a === 14 && sign === "/" && b === 10 ) {
  console.log('14 / 10 = 1.4')
} else
if (a === 14 && sign === "/" && b === 11 ) {
  console.log('14 / 11 = 1.2727272727272727')
} else
if (a === 14 && sign === "/" && b === 12 ) {
  console.log('14 / 12 = 1.1666666666666667')
} else
if (a === 14 && sign === "/" && b === 13 ) {
  console.log('14 / 13 = 1.0769230769230769')
} else
if (a === 14 && sign === "/" && b === 14 ) {
  console.log('14 / 14 = 1')
} else
if (a === 14 && sign === "/" && b === 15 ) {
  console.log('14 / 15 = 0.9333333333333333')
} else
if (a === 14 && sign === "/" && b === 16 ) {
  console.log('14 / 16 = 0.875')
} else
if (a === 14 && sign === "/" && b === 17 ) {
  console.log('14 / 17 = 0.8235294117647058')
} else
if (a === 14 && sign === "/" && b === 18 ) {
  console.log('14 / 18 = 0.7777777777777778')
} else
if (a === 14 && sign === "/" && b === 19 ) {
  console.log('14 / 19 = 0.7368421052631579')
} else
if (a === 14 && sign === "/" && b === 20 ) {
  console.log('14 / 20 = 0.7')
} else
if (a === 14 && sign === "/" && b === 21 ) {
  console.log('14 / 21 = 0.6666666666666666')
} else
if (a === 14 && sign === "/" && b === 22 ) {
  console.log('14 / 22 = 0.6363636363636364')
} else
if (a === 14 && sign === "/" && b === 23 ) {
  console.log('14 / 23 = 0.6086956521739131')
} else
if (a === 14 && sign === "/" && b === 24 ) {
  console.log('14 / 24 = 0.5833333333333334')
} else
if (a === 14 && sign === "/" && b === 25 ) {
  console.log('14 / 25 = 0.56')
} else
if (a === 14 && sign === "/" && b === 26 ) {
  console.log('14 / 26 = 0.5384615384615384')
} else
if (a === 14 && sign === "/" && b === 27 ) {
  console.log('14 / 27 = 0.5185185185185185')
} else
if (a === 14 && sign === "/" && b === 28 ) {
  console.log('14 / 28 = 0.5')
} else
if (a === 14 && sign === "/" && b === 29 ) {
  console.log('14 / 29 = 0.4827586206896552')
} else
if (a === 14 && sign === "/" && b === 30 ) {
  console.log('14 / 30 = 0.4666666666666667')
} else
if (a === 14 && sign === "/" && b === 31 ) {
  console.log('14 / 31 = 0.45161290322580644')
} else
if (a === 14 && sign === "/" && b === 32 ) {
  console.log('14 / 32 = 0.4375')
} else
if (a === 14 && sign === "/" && b === 33 ) {
  console.log('14 / 33 = 0.42424242424242425')
} else
if (a === 14 && sign === "/" && b === 34 ) {
  console.log('14 / 34 = 0.4117647058823529')
} else
if (a === 14 && sign === "/" && b === 35 ) {
  console.log('14 / 35 = 0.4')
} else
if (a === 14 && sign === "/" && b === 36 ) {
  console.log('14 / 36 = 0.3888888888888889')
} else
if (a === 14 && sign === "/" && b === 37 ) {
  console.log('14 / 37 = 0.3783783783783784')
} else
if (a === 14 && sign === "/" && b === 38 ) {
  console.log('14 / 38 = 0.3684210526315789')
} else
if (a === 14 && sign === "/" && b === 39 ) {
  console.log('14 / 39 = 0.358974358974359')
} else
if (a === 14 && sign === "/" && b === 40 ) {
  console.log('14 / 40 = 0.35')
} else
if (a === 14 && sign === "/" && b === 41 ) {
  console.log('14 / 41 = 0.34146341463414637')
} else
if (a === 14 && sign === "/" && b === 42 ) {
  console.log('14 / 42 = 0.3333333333333333')
} else
if (a === 14 && sign === "/" && b === 43 ) {
  console.log('14 / 43 = 0.32558139534883723')
} else
if (a === 14 && sign === "/" && b === 44 ) {
  console.log('14 / 44 = 0.3181818181818182')
} else
if (a === 14 && sign === "/" && b === 45 ) {
  console.log('14 / 45 = 0.3111111111111111')
} else
if (a === 14 && sign === "/" && b === 46 ) {
  console.log('14 / 46 = 0.30434782608695654')
} else
if (a === 14 && sign === "/" && b === 47 ) {
  console.log('14 / 47 = 0.2978723404255319')
} else
if (a === 14 && sign === "/" && b === 48 ) {
  console.log('14 / 48 = 0.2916666666666667')
} else
if (a === 14 && sign === "/" && b === 49 ) {
  console.log('14 / 49 = 0.2857142857142857')
} else
if (a === 14 && sign === "/" && b === 50 ) {
  console.log('14 / 50 = 0.28')
} else
if (a === 15 && sign === "/" && b === 1 ) {
  console.log('15 / 1 = 15')
} else
if (a === 15 && sign === "/" && b === 2 ) {
  console.log('15 / 2 = 7.5')
} else
if (a === 15 && sign === "/" && b === 3 ) {
  console.log('15 / 3 = 5')
} else
if (a === 15 && sign === "/" && b === 4 ) {
  console.log('15 / 4 = 3.75')
} else
if (a === 15 && sign === "/" && b === 5 ) {
  console.log('15 / 5 = 3')
} else
if (a === 15 && sign === "/" && b === 6 ) {
  console.log('15 / 6 = 2.5')
} else
if (a === 15 && sign === "/" && b === 7 ) {
  console.log('15 / 7 = 2.142857142857143')
} else
if (a === 15 && sign === "/" && b === 8 ) {
  console.log('15 / 8 = 1.875')
} else
if (a === 15 && sign === "/" && b === 9 ) {
  console.log('15 / 9 = 1.6666666666666667')
} else
if (a === 15 && sign === "/" && b === 10 ) {
  console.log('15 / 10 = 1.5')
} else
if (a === 15 && sign === "/" && b === 11 ) {
  console.log('15 / 11 = 1.3636363636363635')
} else
if (a === 15 && sign === "/" && b === 12 ) {
  console.log('15 / 12 = 1.25')
} else
if (a === 15 && sign === "/" && b === 13 ) {
  console.log('15 / 13 = 1.1538461538461537')
} else
if (a === 15 && sign === "/" && b === 14 ) {
  console.log('15 / 14 = 1.0714285714285714')
} else
if (a === 15 && sign === "/" && b === 15 ) {
  console.log('15 / 15 = 1')
} else
if (a === 15 && sign === "/" && b === 16 ) {
  console.log('15 / 16 = 0.9375')
} else
if (a === 15 && sign === "/" && b === 17 ) {
  console.log('15 / 17 = 0.8823529411764706')
} else
if (a === 15 && sign === "/" && b === 18 ) {
  console.log('15 / 18 = 0.8333333333333334')
} else
if (a === 15 && sign === "/" && b === 19 ) {
  console.log('15 / 19 = 0.7894736842105263')
} else
if (a === 15 && sign === "/" && b === 20 ) {
  console.log('15 / 20 = 0.75')
} else
if (a === 15 && sign === "/" && b === 21 ) {
  console.log('15 / 21 = 0.7142857142857143')
} else
if (a === 15 && sign === "/" && b === 22 ) {
  console.log('15 / 22 = 0.6818181818181818')
} else
if (a === 15 && sign === "/" && b === 23 ) {
  console.log('15 / 23 = 0.6521739130434783')
} else
if (a === 15 && sign === "/" && b === 24 ) {
  console.log('15 / 24 = 0.625')
} else
if (a === 15 && sign === "/" && b === 25 ) {
  console.log('15 / 25 = 0.6')
} else
if (a === 15 && sign === "/" && b === 26 ) {
  console.log('15 / 26 = 0.5769230769230769')
} else
if (a === 15 && sign === "/" && b === 27 ) {
  console.log('15 / 27 = 0.5555555555555556')
} else
if (a === 15 && sign === "/" && b === 28 ) {
  console.log('15 / 28 = 0.5357142857142857')
} else
if (a === 15 && sign === "/" && b === 29 ) {
  console.log('15 / 29 = 0.5172413793103449')
} else
if (a === 15 && sign === "/" && b === 30 ) {
  console.log('15 / 30 = 0.5')
} else
if (a === 15 && sign === "/" && b === 31 ) {
  console.log('15 / 31 = 0.4838709677419355')
} else
if (a === 15 && sign === "/" && b === 32 ) {
  console.log('15 / 32 = 0.46875')
} else
if (a === 15 && sign === "/" && b === 33 ) {
  console.log('15 / 33 = 0.45454545454545453')
} else
if (a === 15 && sign === "/" && b === 34 ) {
  console.log('15 / 34 = 0.4411764705882353')
} else
if (a === 15 && sign === "/" && b === 35 ) {
  console.log('15 / 35 = 0.42857142857142855')
} else
if (a === 15 && sign === "/" && b === 36 ) {
  console.log('15 / 36 = 0.4166666666666667')
} else
if (a === 15 && sign === "/" && b === 37 ) {
  console.log('15 / 37 = 0.40540540540540543')
} else
if (a === 15 && sign === "/" && b === 38 ) {
  console.log('15 / 38 = 0.39473684210526316')
} else
if (a === 15 && sign === "/" && b === 39 ) {
  console.log('15 / 39 = 0.38461538461538464')
} else
if (a === 15 && sign === "/" && b === 40 ) {
  console.log('15 / 40 = 0.375')
} else
if (a === 15 && sign === "/" && b === 41 ) {
  console.log('15 / 41 = 0.36585365853658536')
} else
if (a === 15 && sign === "/" && b === 42 ) {
  console.log('15 / 42 = 0.35714285714285715')
} else
if (a === 15 && sign === "/" && b === 43 ) {
  console.log('15 / 43 = 0.3488372093023256')
} else
if (a === 15 && sign === "/" && b === 44 ) {
  console.log('15 / 44 = 0.3409090909090909')
} else
if (a === 15 && sign === "/" && b === 45 ) {
  console.log('15 / 45 = 0.3333333333333333')
} else
if (a === 15 && sign === "/" && b === 46 ) {
  console.log('15 / 46 = 0.32608695652173914')
} else
if (a === 15 && sign === "/" && b === 47 ) {
  console.log('15 / 47 = 0.3191489361702128')
} else
if (a === 15 && sign === "/" && b === 48 ) {
  console.log('15 / 48 = 0.3125')
} else
if (a === 15 && sign === "/" && b === 49 ) {
  console.log('15 / 49 = 0.30612244897959184')
} else
if (a === 15 && sign === "/" && b === 50 ) {
  console.log('15 / 50 = 0.3')
} else
if (a === 16 && sign === "/" && b === 1 ) {
  console.log('16 / 1 = 16')
} else
if (a === 16 && sign === "/" && b === 2 ) {
  console.log('16 / 2 = 8')
} else
if (a === 16 && sign === "/" && b === 3 ) {
  console.log('16 / 3 = 5.333333333333333')
} else
if (a === 16 && sign === "/" && b === 4 ) {
  console.log('16 / 4 = 4')
} else
if (a === 16 && sign === "/" && b === 5 ) {
  console.log('16 / 5 = 3.2')
} else
if (a === 16 && sign === "/" && b === 6 ) {
  console.log('16 / 6 = 2.6666666666666665')
} else
if (a === 16 && sign === "/" && b === 7 ) {
  console.log('16 / 7 = 2.2857142857142856')
} else
if (a === 16 && sign === "/" && b === 8 ) {
  console.log('16 / 8 = 2')
} else
if (a === 16 && sign === "/" && b === 9 ) {
  console.log('16 / 9 = 1.7777777777777777')
} else
if (a === 16 && sign === "/" && b === 10 ) {
  console.log('16 / 10 = 1.6')
} else
if (a === 16 && sign === "/" && b === 11 ) {
  console.log('16 / 11 = 1.4545454545454546')
} else
if (a === 16 && sign === "/" && b === 12 ) {
  console.log('16 / 12 = 1.3333333333333333')
} else
if (a === 16 && sign === "/" && b === 13 ) {
  console.log('16 / 13 = 1.2307692307692308')
} else
if (a === 16 && sign === "/" && b === 14 ) {
  console.log('16 / 14 = 1.1428571428571428')
} else
if (a === 16 && sign === "/" && b === 15 ) {
  console.log('16 / 15 = 1.0666666666666667')
} else
if (a === 16 && sign === "/" && b === 16 ) {
  console.log('16 / 16 = 1')
} else
if (a === 16 && sign === "/" && b === 17 ) {
  console.log('16 / 17 = 0.9411764705882353')
} else
if (a === 16 && sign === "/" && b === 18 ) {
  console.log('16 / 18 = 0.8888888888888888')
} else
if (a === 16 && sign === "/" && b === 19 ) {
  console.log('16 / 19 = 0.8421052631578947')
} else
if (a === 16 && sign === "/" && b === 20 ) {
  console.log('16 / 20 = 0.8')
} else
if (a === 16 && sign === "/" && b === 21 ) {
  console.log('16 / 21 = 0.7619047619047619')
} else
if (a === 16 && sign === "/" && b === 22 ) {
  console.log('16 / 22 = 0.7272727272727273')
} else
if (a === 16 && sign === "/" && b === 23 ) {
  console.log('16 / 23 = 0.6956521739130435')
} else
if (a === 16 && sign === "/" && b === 24 ) {
  console.log('16 / 24 = 0.6666666666666666')
} else
if (a === 16 && sign === "/" && b === 25 ) {
  console.log('16 / 25 = 0.64')
} else
if (a === 16 && sign === "/" && b === 26 ) {
  console.log('16 / 26 = 0.6153846153846154')
} else
if (a === 16 && sign === "/" && b === 27 ) {
  console.log('16 / 27 = 0.5925925925925926')
} else
if (a === 16 && sign === "/" && b === 28 ) {
  console.log('16 / 28 = 0.5714285714285714')
} else
if (a === 16 && sign === "/" && b === 29 ) {
  console.log('16 / 29 = 0.5517241379310345')
} else
if (a === 16 && sign === "/" && b === 30 ) {
  console.log('16 / 30 = 0.5333333333333333')
} else
if (a === 16 && sign === "/" && b === 31 ) {
  console.log('16 / 31 = 0.5161290322580645')
} else
if (a === 16 && sign === "/" && b === 32 ) {
  console.log('16 / 32 = 0.5')
} else
if (a === 16 && sign === "/" && b === 33 ) {
  console.log('16 / 33 = 0.48484848484848486')
} else
if (a === 16 && sign === "/" && b === 34 ) {
  console.log('16 / 34 = 0.47058823529411764')
} else
if (a === 16 && sign === "/" && b === 35 ) {
  console.log('16 / 35 = 0.45714285714285713')
} else
if (a === 16 && sign === "/" && b === 36 ) {
  console.log('16 / 36 = 0.4444444444444444')
} else
if (a === 16 && sign === "/" && b === 37 ) {
  console.log('16 / 37 = 0.43243243243243246')
} else
if (a === 16 && sign === "/" && b === 38 ) {
  console.log('16 / 38 = 0.42105263157894735')
} else
if (a === 16 && sign === "/" && b === 39 ) {
  console.log('16 / 39 = 0.41025641025641024')
} else
if (a === 16 && sign === "/" && b === 40 ) {
  console.log('16 / 40 = 0.4')
} else
if (a === 16 && sign === "/" && b === 41 ) {
  console.log('16 / 41 = 0.3902439024390244')
} else
if (a === 16 && sign === "/" && b === 42 ) {
  console.log('16 / 42 = 0.38095238095238093')
} else
if (a === 16 && sign === "/" && b === 43 ) {
  console.log('16 / 43 = 0.37209302325581395')
} else
if (a === 16 && sign === "/" && b === 44 ) {
  console.log('16 / 44 = 0.36363636363636365')
} else
if (a === 16 && sign === "/" && b === 45 ) {
  console.log('16 / 45 = 0.35555555555555557')
} else
if (a === 16 && sign === "/" && b === 46 ) {
  console.log('16 / 46 = 0.34782608695652173')
} else
if (a === 16 && sign === "/" && b === 47 ) {
  console.log('16 / 47 = 0.3404255319148936')
} else
if (a === 16 && sign === "/" && b === 48 ) {
  console.log('16 / 48 = 0.3333333333333333')
} else
if (a === 16 && sign === "/" && b === 49 ) {
  console.log('16 / 49 = 0.32653061224489793')
} else
if (a === 16 && sign === "/" && b === 50 ) {
  console.log('16 / 50 = 0.32')
} else
if (a === 17 && sign === "/" && b === 1 ) {
  console.log('17 / 1 = 17')
} else
if (a === 17 && sign === "/" && b === 2 ) {
  console.log('17 / 2 = 8.5')
} else
if (a === 17 && sign === "/" && b === 3 ) {
  console.log('17 / 3 = 5.666666666666667')
} else
if (a === 17 && sign === "/" && b === 4 ) {
  console.log('17 / 4 = 4.25')
} else
if (a === 17 && sign === "/" && b === 5 ) {
  console.log('17 / 5 = 3.4')
} else
if (a === 17 && sign === "/" && b === 6 ) {
  console.log('17 / 6 = 2.8333333333333335')
} else
if (a === 17 && sign === "/" && b === 7 ) {
  console.log('17 / 7 = 2.4285714285714284')
} else
if (a === 17 && sign === "/" && b === 8 ) {
  console.log('17 / 8 = 2.125')
} else
if (a === 17 && sign === "/" && b === 9 ) {
  console.log('17 / 9 = 1.8888888888888888')
} else
if (a === 17 && sign === "/" && b === 10 ) {
  console.log('17 / 10 = 1.7')
} else
if (a === 17 && sign === "/" && b === 11 ) {
  console.log('17 / 11 = 1.5454545454545454')
} else
if (a === 17 && sign === "/" && b === 12 ) {
  console.log('17 / 12 = 1.4166666666666667')
} else
if (a === 17 && sign === "/" && b === 13 ) {
  console.log('17 / 13 = 1.3076923076923077')
} else
if (a === 17 && sign === "/" && b === 14 ) {
  console.log('17 / 14 = 1.2142857142857142')
} else
if (a === 17 && sign === "/" && b === 15 ) {
  console.log('17 / 15 = 1.1333333333333333')
} else
if (a === 17 && sign === "/" && b === 16 ) {
  console.log('17 / 16 = 1.0625')
} else
if (a === 17 && sign === "/" && b === 17 ) {
  console.log('17 / 17 = 1')
} else
if (a === 17 && sign === "/" && b === 18 ) {
  console.log('17 / 18 = 0.9444444444444444')
} else
if (a === 17 && sign === "/" && b === 19 ) {
  console.log('17 / 19 = 0.8947368421052632')
} else
if (a === 17 && sign === "/" && b === 20 ) {
  console.log('17 / 20 = 0.85')
} else
if (a === 17 && sign === "/" && b === 21 ) {
  console.log('17 / 21 = 0.8095238095238095')
} else
if (a === 17 && sign === "/" && b === 22 ) {
  console.log('17 / 22 = 0.7727272727272727')
} else
if (a === 17 && sign === "/" && b === 23 ) {
  console.log('17 / 23 = 0.7391304347826086')
} else
if (a === 17 && sign === "/" && b === 24 ) {
  console.log('17 / 24 = 0.7083333333333334')
} else
if (a === 17 && sign === "/" && b === 25 ) {
  console.log('17 / 25 = 0.68')
} else
if (a === 17 && sign === "/" && b === 26 ) {
  console.log('17 / 26 = 0.6538461538461539')
} else
if (a === 17 && sign === "/" && b === 27 ) {
  console.log('17 / 27 = 0.6296296296296297')
} else
if (a === 17 && sign === "/" && b === 28 ) {
  console.log('17 / 28 = 0.6071428571428571')
} else
if (a === 17 && sign === "/" && b === 29 ) {
  console.log('17 / 29 = 0.5862068965517241')
} else
if (a === 17 && sign === "/" && b === 30 ) {
  console.log('17 / 30 = 0.5666666666666667')
} else
if (a === 17 && sign === "/" && b === 31 ) {
  console.log('17 / 31 = 0.5483870967741935')
} else
if (a === 17 && sign === "/" && b === 32 ) {
  console.log('17 / 32 = 0.53125')
} else
if (a === 17 && sign === "/" && b === 33 ) {
  console.log('17 / 33 = 0.5151515151515151')
} else
if (a === 17 && sign === "/" && b === 34 ) {
  console.log('17 / 34 = 0.5')
} else
if (a === 17 && sign === "/" && b === 35 ) {
  console.log('17 / 35 = 0.4857142857142857')
} else
if (a === 17 && sign === "/" && b === 36 ) {
  console.log('17 / 36 = 0.4722222222222222')
} else
if (a === 17 && sign === "/" && b === 37 ) {
  console.log('17 / 37 = 0.4594594594594595')
} else
if (a === 17 && sign === "/" && b === 38 ) {
  console.log('17 / 38 = 0.4473684210526316')
} else
if (a === 17 && sign === "/" && b === 39 ) {
  console.log('17 / 39 = 0.4358974358974359')
} else
if (a === 17 && sign === "/" && b === 40 ) {
  console.log('17 / 40 = 0.425')
} else
if (a === 17 && sign === "/" && b === 41 ) {
  console.log('17 / 41 = 0.4146341463414634')
} else
if (a === 17 && sign === "/" && b === 42 ) {
  console.log('17 / 42 = 0.40476190476190477')
} else
if (a === 17 && sign === "/" && b === 43 ) {
  console.log('17 / 43 = 0.3953488372093023')
} else
if (a === 17 && sign === "/" && b === 44 ) {
  console.log('17 / 44 = 0.38636363636363635')
} else
if (a === 17 && sign === "/" && b === 45 ) {
  console.log('17 / 45 = 0.37777777777777777')
} else
if (a === 17 && sign === "/" && b === 46 ) {
  console.log('17 / 46 = 0.3695652173913043')
} else
if (a === 17 && sign === "/" && b === 47 ) {
  console.log('17 / 47 = 0.3617021276595745')
} else
if (a === 17 && sign === "/" && b === 48 ) {
  console.log('17 / 48 = 0.3541666666666667')
} else
if (a === 17 && sign === "/" && b === 49 ) {
  console.log('17 / 49 = 0.3469387755102041')
} else
if (a === 17 && sign === "/" && b === 50 ) {
  console.log('17 / 50 = 0.34')
} else
if (a === 18 && sign === "/" && b === 1 ) {
  console.log('18 / 1 = 18')
} else
if (a === 18 && sign === "/" && b === 2 ) {
  console.log('18 / 2 = 9')
} else
if (a === 18 && sign === "/" && b === 3 ) {
  console.log('18 / 3 = 6')
} else
if (a === 18 && sign === "/" && b === 4 ) {
  console.log('18 / 4 = 4.5')
} else
if (a === 18 && sign === "/" && b === 5 ) {
  console.log('18 / 5 = 3.6')
} else
if (a === 18 && sign === "/" && b === 6 ) {
  console.log('18 / 6 = 3')
} else
if (a === 18 && sign === "/" && b === 7 ) {
  console.log('18 / 7 = 2.5714285714285716')
} else
if (a === 18 && sign === "/" && b === 8 ) {
  console.log('18 / 8 = 2.25')
} else
if (a === 18 && sign === "/" && b === 9 ) {
  console.log('18 / 9 = 2')
} else
if (a === 18 && sign === "/" && b === 10 ) {
  console.log('18 / 10 = 1.8')
} else
if (a === 18 && sign === "/" && b === 11 ) {
  console.log('18 / 11 = 1.6363636363636365')
} else
if (a === 18 && sign === "/" && b === 12 ) {
  console.log('18 / 12 = 1.5')
} else
if (a === 18 && sign === "/" && b === 13 ) {
  console.log('18 / 13 = 1.3846153846153846')
} else
if (a === 18 && sign === "/" && b === 14 ) {
  console.log('18 / 14 = 1.2857142857142858')
} else
if (a === 18 && sign === "/" && b === 15 ) {
  console.log('18 / 15 = 1.2')
} else
if (a === 18 && sign === "/" && b === 16 ) {
  console.log('18 / 16 = 1.125')
} else
if (a === 18 && sign === "/" && b === 17 ) {
  console.log('18 / 17 = 1.0588235294117647')
} else
if (a === 18 && sign === "/" && b === 18 ) {
  console.log('18 / 18 = 1')
} else
if (a === 18 && sign === "/" && b === 19 ) {
  console.log('18 / 19 = 0.9473684210526315')
} else
if (a === 18 && sign === "/" && b === 20 ) {
  console.log('18 / 20 = 0.9')
} else
if (a === 18 && sign === "/" && b === 21 ) {
  console.log('18 / 21 = 0.8571428571428571')
} else
if (a === 18 && sign === "/" && b === 22 ) {
  console.log('18 / 22 = 0.8181818181818182')
} else
if (a === 18 && sign === "/" && b === 23 ) {
  console.log('18 / 23 = 0.782608695652174')
} else
if (a === 18 && sign === "/" && b === 24 ) {
  console.log('18 / 24 = 0.75')
} else
if (a === 18 && sign === "/" && b === 25 ) {
  console.log('18 / 25 = 0.72')
} else
if (a === 18 && sign === "/" && b === 26 ) {
  console.log('18 / 26 = 0.6923076923076923')
} else
if (a === 18 && sign === "/" && b === 27 ) {
  console.log('18 / 27 = 0.6666666666666666')
} else
if (a === 18 && sign === "/" && b === 28 ) {
  console.log('18 / 28 = 0.6428571428571429')
} else
if (a === 18 && sign === "/" && b === 29 ) {
  console.log('18 / 29 = 0.6206896551724138')
} else
if (a === 18 && sign === "/" && b === 30 ) {
  console.log('18 / 30 = 0.6')
} else
if (a === 18 && sign === "/" && b === 31 ) {
  console.log('18 / 31 = 0.5806451612903226')
} else
if (a === 18 && sign === "/" && b === 32 ) {
  console.log('18 / 32 = 0.5625')
} else
if (a === 18 && sign === "/" && b === 33 ) {
  console.log('18 / 33 = 0.5454545454545454')
} else
if (a === 18 && sign === "/" && b === 34 ) {
  console.log('18 / 34 = 0.5294117647058824')
} else
if (a === 18 && sign === "/" && b === 35 ) {
  console.log('18 / 35 = 0.5142857142857142')
} else
if (a === 18 && sign === "/" && b === 36 ) {
  console.log('18 / 36 = 0.5')
} else
if (a === 18 && sign === "/" && b === 37 ) {
  console.log('18 / 37 = 0.4864864864864865')
} else
if (a === 18 && sign === "/" && b === 38 ) {
  console.log('18 / 38 = 0.47368421052631576')
} else
if (a === 18 && sign === "/" && b === 39 ) {
  console.log('18 / 39 = 0.46153846153846156')
} else
if (a === 18 && sign === "/" && b === 40 ) {
  console.log('18 / 40 = 0.45')
} else
if (a === 18 && sign === "/" && b === 41 ) {
  console.log('18 / 41 = 0.43902439024390244')
} else
if (a === 18 && sign === "/" && b === 42 ) {
  console.log('18 / 42 = 0.42857142857142855')
} else
if (a === 18 && sign === "/" && b === 43 ) {
  console.log('18 / 43 = 0.4186046511627907')
} else
if (a === 18 && sign === "/" && b === 44 ) {
  console.log('18 / 44 = 0.4090909090909091')
} else
if (a === 18 && sign === "/" && b === 45 ) {
  console.log('18 / 45 = 0.4')
} else
if (a === 18 && sign === "/" && b === 46 ) {
  console.log('18 / 46 = 0.391304347826087')
} else
if (a === 18 && sign === "/" && b === 47 ) {
  console.log('18 / 47 = 0.3829787234042553')
} else
if (a === 18 && sign === "/" && b === 48 ) {
  console.log('18 / 48 = 0.375')
} else
if (a === 18 && sign === "/" && b === 49 ) {
  console.log('18 / 49 = 0.3673469387755102')
} else
if (a === 18 && sign === "/" && b === 50 ) {
  console.log('18 / 50 = 0.36')
} else
if (a === 19 && sign === "/" && b === 1 ) {
  console.log('19 / 1 = 19')
} else
if (a === 19 && sign === "/" && b === 2 ) {
  console.log('19 / 2 = 9.5')
} else
if (a === 19 && sign === "/" && b === 3 ) {
  console.log('19 / 3 = 6.333333333333333')
} else
if (a === 19 && sign === "/" && b === 4 ) {
  console.log('19 / 4 = 4.75')
} else
if (a === 19 && sign === "/" && b === 5 ) {
  console.log('19 / 5 = 3.8')
} else
if (a === 19 && sign === "/" && b === 6 ) {
  console.log('19 / 6 = 3.1666666666666665')
} else
if (a === 19 && sign === "/" && b === 7 ) {
  console.log('19 / 7 = 2.7142857142857144')
} else
if (a === 19 && sign === "/" && b === 8 ) {
  console.log('19 / 8 = 2.375')
} else
if (a === 19 && sign === "/" && b === 9 ) {
  console.log('19 / 9 = 2.111111111111111')
} else
if (a === 19 && sign === "/" && b === 10 ) {
  console.log('19 / 10 = 1.9')
} else
if (a === 19 && sign === "/" && b === 11 ) {
  console.log('19 / 11 = 1.7272727272727273')
} else
if (a === 19 && sign === "/" && b === 12 ) {
  console.log('19 / 12 = 1.5833333333333333')
} else
if (a === 19 && sign === "/" && b === 13 ) {
  console.log('19 / 13 = 1.4615384615384615')
} else
if (a === 19 && sign === "/" && b === 14 ) {
  console.log('19 / 14 = 1.3571428571428572')
} else
if (a === 19 && sign === "/" && b === 15 ) {
  console.log('19 / 15 = 1.2666666666666666')
} else
if (a === 19 && sign === "/" && b === 16 ) {
  console.log('19 / 16 = 1.1875')
} else
if (a === 19 && sign === "/" && b === 17 ) {
  console.log('19 / 17 = 1.1176470588235294')
} else
if (a === 19 && sign === "/" && b === 18 ) {
  console.log('19 / 18 = 1.0555555555555556')
} else
if (a === 19 && sign === "/" && b === 19 ) {
  console.log('19 / 19 = 1')
} else
if (a === 19 && sign === "/" && b === 20 ) {
  console.log('19 / 20 = 0.95')
} else
if (a === 19 && sign === "/" && b === 21 ) {
  console.log('19 / 21 = 0.9047619047619048')
} else
if (a === 19 && sign === "/" && b === 22 ) {
  console.log('19 / 22 = 0.8636363636363636')
} else
if (a === 19 && sign === "/" && b === 23 ) {
  console.log('19 / 23 = 0.8260869565217391')
} else
if (a === 19 && sign === "/" && b === 24 ) {
  console.log('19 / 24 = 0.7916666666666666')
} else
if (a === 19 && sign === "/" && b === 25 ) {
  console.log('19 / 25 = 0.76')
} else
if (a === 19 && sign === "/" && b === 26 ) {
  console.log('19 / 26 = 0.7307692307692307')
} else
if (a === 19 && sign === "/" && b === 27 ) {
  console.log('19 / 27 = 0.7037037037037037')
} else
if (a === 19 && sign === "/" && b === 28 ) {
  console.log('19 / 28 = 0.6785714285714286')
} else
if (a === 19 && sign === "/" && b === 29 ) {
  console.log('19 / 29 = 0.6551724137931034')
} else
if (a === 19 && sign === "/" && b === 30 ) {
  console.log('19 / 30 = 0.6333333333333333')
} else
if (a === 19 && sign === "/" && b === 31 ) {
  console.log('19 / 31 = 0.6129032258064516')
} else
if (a === 19 && sign === "/" && b === 32 ) {
  console.log('19 / 32 = 0.59375')
} else
if (a === 19 && sign === "/" && b === 33 ) {
  console.log('19 / 33 = 0.5757575757575758')
} else
if (a === 19 && sign === "/" && b === 34 ) {
  console.log('19 / 34 = 0.5588235294117647')
} else
if (a === 19 && sign === "/" && b === 35 ) {
  console.log('19 / 35 = 0.5428571428571428')
} else
if (a === 19 && sign === "/" && b === 36 ) {
  console.log('19 / 36 = 0.5277777777777778')
} else
if (a === 19 && sign === "/" && b === 37 ) {
  console.log('19 / 37 = 0.5135135135135135')
} else
if (a === 19 && sign === "/" && b === 38 ) {
  console.log('19 / 38 = 0.5')
} else
if (a === 19 && sign === "/" && b === 39 ) {
  console.log('19 / 39 = 0.48717948717948717')
} else
if (a === 19 && sign === "/" && b === 40 ) {
  console.log('19 / 40 = 0.475')
} else
if (a === 19 && sign === "/" && b === 41 ) {
  console.log('19 / 41 = 0.4634146341463415')
} else
if (a === 19 && sign === "/" && b === 42 ) {
  console.log('19 / 42 = 0.4523809523809524')
} else
if (a === 19 && sign === "/" && b === 43 ) {
  console.log('19 / 43 = 0.4418604651162791')
} else
if (a === 19 && sign === "/" && b === 44 ) {
  console.log('19 / 44 = 0.4318181818181818')
} else
if (a === 19 && sign === "/" && b === 45 ) {
  console.log('19 / 45 = 0.4222222222222222')
} else
if (a === 19 && sign === "/" && b === 46 ) {
  console.log('19 / 46 = 0.41304347826086957')
} else
if (a === 19 && sign === "/" && b === 47 ) {
  console.log('19 / 47 = 0.40425531914893614')
} else
if (a === 19 && sign === "/" && b === 48 ) {
  console.log('19 / 48 = 0.3958333333333333')
} else
if (a === 19 && sign === "/" && b === 49 ) {
  console.log('19 / 49 = 0.3877551020408163')
} else
if (a === 19 && sign === "/" && b === 50 ) {
  console.log('19 / 50 = 0.38')
} else
if (a === 20 && sign === "/" && b === 1 ) {
  console.log('20 / 1 = 20')
} else
if (a === 20 && sign === "/" && b === 2 ) {
  console.log('20 / 2 = 10')
} else
if (a === 20 && sign === "/" && b === 3 ) {
  console.log('20 / 3 = 6.666666666666667')
} else
if (a === 20 && sign === "/" && b === 4 ) {
  console.log('20 / 4 = 5')
} else
if (a === 20 && sign === "/" && b === 5 ) {
  console.log('20 / 5 = 4')
} else
if (a === 20 && sign === "/" && b === 6 ) {
  console.log('20 / 6 = 3.3333333333333335')
} else
if (a === 20 && sign === "/" && b === 7 ) {
  console.log('20 / 7 = 2.857142857142857')
} else
if (a === 20 && sign === "/" && b === 8 ) {
  console.log('20 / 8 = 2.5')
} else
if (a === 20 && sign === "/" && b === 9 ) {
  console.log('20 / 9 = 2.2222222222222223')
} else
if (a === 20 && sign === "/" && b === 10 ) {
  console.log('20 / 10 = 2')
} else
if (a === 20 && sign === "/" && b === 11 ) {
  console.log('20 / 11 = 1.8181818181818181')
} else
if (a === 20 && sign === "/" && b === 12 ) {
  console.log('20 / 12 = 1.6666666666666667')
} else
if (a === 20 && sign === "/" && b === 13 ) {
  console.log('20 / 13 = 1.5384615384615385')
} else
if (a === 20 && sign === "/" && b === 14 ) {
  console.log('20 / 14 = 1.4285714285714286')
} else
if (a === 20 && sign === "/" && b === 15 ) {
  console.log('20 / 15 = 1.3333333333333333')
} else
if (a === 20 && sign === "/" && b === 16 ) {
  console.log('20 / 16 = 1.25')
} else
if (a === 20 && sign === "/" && b === 17 ) {
  console.log('20 / 17 = 1.1764705882352942')
} else
if (a === 20 && sign === "/" && b === 18 ) {
  console.log('20 / 18 = 1.1111111111111112')
} else
if (a === 20 && sign === "/" && b === 19 ) {
  console.log('20 / 19 = 1.0526315789473684')
} else
if (a === 20 && sign === "/" && b === 20 ) {
  console.log('20 / 20 = 1')
} else
if (a === 20 && sign === "/" && b === 21 ) {
  console.log('20 / 21 = 0.9523809523809523')
} else
if (a === 20 && sign === "/" && b === 22 ) {
  console.log('20 / 22 = 0.9090909090909091')
} else
if (a === 20 && sign === "/" && b === 23 ) {
  console.log('20 / 23 = 0.8695652173913043')
} else
if (a === 20 && sign === "/" && b === 24 ) {
  console.log('20 / 24 = 0.8333333333333334')
} else
if (a === 20 && sign === "/" && b === 25 ) {
  console.log('20 / 25 = 0.8')
} else
if (a === 20 && sign === "/" && b === 26 ) {
  console.log('20 / 26 = 0.7692307692307693')
} else
if (a === 20 && sign === "/" && b === 27 ) {
  console.log('20 / 27 = 0.7407407407407407')
} else
if (a === 20 && sign === "/" && b === 28 ) {
  console.log('20 / 28 = 0.7142857142857143')
} else
if (a === 20 && sign === "/" && b === 29 ) {
  console.log('20 / 29 = 0.6896551724137931')
} else
if (a === 20 && sign === "/" && b === 30 ) {
  console.log('20 / 30 = 0.6666666666666666')
} else
if (a === 20 && sign === "/" && b === 31 ) {
  console.log('20 / 31 = 0.6451612903225806')
} else
if (a === 20 && sign === "/" && b === 32 ) {
  console.log('20 / 32 = 0.625')
} else
if (a === 20 && sign === "/" && b === 33 ) {
  console.log('20 / 33 = 0.6060606060606061')
} else
if (a === 20 && sign === "/" && b === 34 ) {
  console.log('20 / 34 = 0.5882352941176471')
} else
if (a === 20 && sign === "/" && b === 35 ) {
  console.log('20 / 35 = 0.5714285714285714')
} else
if (a === 20 && sign === "/" && b === 36 ) {
  console.log('20 / 36 = 0.5555555555555556')
} else
if (a === 20 && sign === "/" && b === 37 ) {
  console.log('20 / 37 = 0.5405405405405406')
} else
if (a === 20 && sign === "/" && b === 38 ) {
  console.log('20 / 38 = 0.5263157894736842')
} else
if (a === 20 && sign === "/" && b === 39 ) {
  console.log('20 / 39 = 0.5128205128205128')
} else
if (a === 20 && sign === "/" && b === 40 ) {
  console.log('20 / 40 = 0.5')
} else
if (a === 20 && sign === "/" && b === 41 ) {
  console.log('20 / 41 = 0.4878048780487805')
} else
if (a === 20 && sign === "/" && b === 42 ) {
  console.log('20 / 42 = 0.47619047619047616')
} else
if (a === 20 && sign === "/" && b === 43 ) {
  console.log('20 / 43 = 0.46511627906976744')
} else
if (a === 20 && sign === "/" && b === 44 ) {
  console.log('20 / 44 = 0.45454545454545453')
} else
if (a === 20 && sign === "/" && b === 45 ) {
  console.log('20 / 45 = 0.4444444444444444')
} else
if (a === 20 && sign === "/" && b === 46 ) {
  console.log('20 / 46 = 0.43478260869565216')
} else
if (a === 20 && sign === "/" && b === 47 ) {
  console.log('20 / 47 = 0.425531914893617')
} else
if (a === 20 && sign === "/" && b === 48 ) {
  console.log('20 / 48 = 0.4166666666666667')
} else
if (a === 20 && sign === "/" && b === 49 ) {
  console.log('20 / 49 = 0.40816326530612246')
} else
if (a === 20 && sign === "/" && b === 50 ) {
  console.log('20 / 50 = 0.4')
} else
if (a === 21 && sign === "/" && b === 1 ) {
  console.log('21 / 1 = 21')
} else
if (a === 21 && sign === "/" && b === 2 ) {
  console.log('21 / 2 = 10.5')
} else
if (a === 21 && sign === "/" && b === 3 ) {
  console.log('21 / 3 = 7')
} else
if (a === 21 && sign === "/" && b === 4 ) {
  console.log('21 / 4 = 5.25')
} else
if (a === 21 && sign === "/" && b === 5 ) {
  console.log('21 / 5 = 4.2')
} else
if (a === 21 && sign === "/" && b === 6 ) {
  console.log('21 / 6 = 3.5')
} else
if (a === 21 && sign === "/" && b === 7 ) {
  console.log('21 / 7 = 3')
} else
if (a === 21 && sign === "/" && b === 8 ) {
  console.log('21 / 8 = 2.625')
} else
if (a === 21 && sign === "/" && b === 9 ) {
  console.log('21 / 9 = 2.3333333333333335')
} else
if (a === 21 && sign === "/" && b === 10 ) {
  console.log('21 / 10 = 2.1')
} else
if (a === 21 && sign === "/" && b === 11 ) {
  console.log('21 / 11 = 1.9090909090909092')
} else
if (a === 21 && sign === "/" && b === 12 ) {
  console.log('21 / 12 = 1.75')
} else
if (a === 21 && sign === "/" && b === 13 ) {
  console.log('21 / 13 = 1.6153846153846154')
} else
if (a === 21 && sign === "/" && b === 14 ) {
  console.log('21 / 14 = 1.5')
} else
if (a === 21 && sign === "/" && b === 15 ) {
  console.log('21 / 15 = 1.4')
} else
if (a === 21 && sign === "/" && b === 16 ) {
  console.log('21 / 16 = 1.3125')
} else
if (a === 21 && sign === "/" && b === 17 ) {
  console.log('21 / 17 = 1.2352941176470589')
} else
if (a === 21 && sign === "/" && b === 18 ) {
  console.log('21 / 18 = 1.1666666666666667')
} else
if (a === 21 && sign === "/" && b === 19 ) {
  console.log('21 / 19 = 1.105263157894737')
} else
if (a === 21 && sign === "/" && b === 20 ) {
  console.log('21 / 20 = 1.05')
} else
if (a === 21 && sign === "/" && b === 21 ) {
  console.log('21 / 21 = 1')
} else
if (a === 21 && sign === "/" && b === 22 ) {
  console.log('21 / 22 = 0.9545454545454546')
} else
if (a === 21 && sign === "/" && b === 23 ) {
  console.log('21 / 23 = 0.9130434782608695')
} else
if (a === 21 && sign === "/" && b === 24 ) {
  console.log('21 / 24 = 0.875')
} else
if (a === 21 && sign === "/" && b === 25 ) {
  console.log('21 / 25 = 0.84')
} else
if (a === 21 && sign === "/" && b === 26 ) {
  console.log('21 / 26 = 0.8076923076923077')
} else
if (a === 21 && sign === "/" && b === 27 ) {
  console.log('21 / 27 = 0.7777777777777778')
} else
if (a === 21 && sign === "/" && b === 28 ) {
  console.log('21 / 28 = 0.75')
} else
if (a === 21 && sign === "/" && b === 29 ) {
  console.log('21 / 29 = 0.7241379310344828')
} else
if (a === 21 && sign === "/" && b === 30 ) {
  console.log('21 / 30 = 0.7')
} else
if (a === 21 && sign === "/" && b === 31 ) {
  console.log('21 / 31 = 0.6774193548387096')
} else
if (a === 21 && sign === "/" && b === 32 ) {
  console.log('21 / 32 = 0.65625')
} else
if (a === 21 && sign === "/" && b === 33 ) {
  console.log('21 / 33 = 0.6363636363636364')
} else
if (a === 21 && sign === "/" && b === 34 ) {
  console.log('21 / 34 = 0.6176470588235294')
} else
if (a === 21 && sign === "/" && b === 35 ) {
  console.log('21 / 35 = 0.6')
} else
if (a === 21 && sign === "/" && b === 36 ) {
  console.log('21 / 36 = 0.5833333333333334')
} else
if (a === 21 && sign === "/" && b === 37 ) {
  console.log('21 / 37 = 0.5675675675675675')
} else
if (a === 21 && sign === "/" && b === 38 ) {
  console.log('21 / 38 = 0.5526315789473685')
} else
if (a === 21 && sign === "/" && b === 39 ) {
  console.log('21 / 39 = 0.5384615384615384')
} else
if (a === 21 && sign === "/" && b === 40 ) {
  console.log('21 / 40 = 0.525')
} else
if (a === 21 && sign === "/" && b === 41 ) {
  console.log('21 / 41 = 0.5121951219512195')
} else
if (a === 21 && sign === "/" && b === 42 ) {
  console.log('21 / 42 = 0.5')
} else
if (a === 21 && sign === "/" && b === 43 ) {
  console.log('21 / 43 = 0.4883720930232558')
} else
if (a === 21 && sign === "/" && b === 44 ) {
  console.log('21 / 44 = 0.4772727272727273')
} else
if (a === 21 && sign === "/" && b === 45 ) {
  console.log('21 / 45 = 0.4666666666666667')
} else
if (a === 21 && sign === "/" && b === 46 ) {
  console.log('21 / 46 = 0.45652173913043476')
} else
if (a === 21 && sign === "/" && b === 47 ) {
  console.log('21 / 47 = 0.44680851063829785')
} else
if (a === 21 && sign === "/" && b === 48 ) {
  console.log('21 / 48 = 0.4375')
} else
if (a === 21 && sign === "/" && b === 49 ) {
  console.log('21 / 49 = 0.42857142857142855')
} else
if (a === 21 && sign === "/" && b === 50 ) {
  console.log('21 / 50 = 0.42')
} else
if (a === 22 && sign === "/" && b === 1 ) {
  console.log('22 / 1 = 22')
} else
if (a === 22 && sign === "/" && b === 2 ) {
  console.log('22 / 2 = 11')
} else
if (a === 22 && sign === "/" && b === 3 ) {
  console.log('22 / 3 = 7.333333333333333')
} else
if (a === 22 && sign === "/" && b === 4 ) {
  console.log('22 / 4 = 5.5')
} else
if (a === 22 && sign === "/" && b === 5 ) {
  console.log('22 / 5 = 4.4')
} else
if (a === 22 && sign === "/" && b === 6 ) {
  console.log('22 / 6 = 3.6666666666666665')
} else
if (a === 22 && sign === "/" && b === 7 ) {
  console.log('22 / 7 = 3.142857142857143')
} else
if (a === 22 && sign === "/" && b === 8 ) {
  console.log('22 / 8 = 2.75')
} else
if (a === 22 && sign === "/" && b === 9 ) {
  console.log('22 / 9 = 2.4444444444444446')
} else
if (a === 22 && sign === "/" && b === 10 ) {
  console.log('22 / 10 = 2.2')
} else
if (a === 22 && sign === "/" && b === 11 ) {
  console.log('22 / 11 = 2')
} else
if (a === 22 && sign === "/" && b === 12 ) {
  console.log('22 / 12 = 1.8333333333333333')
} else
if (a === 22 && sign === "/" && b === 13 ) {
  console.log('22 / 13 = 1.6923076923076923')
} else
if (a === 22 && sign === "/" && b === 14 ) {
  console.log('22 / 14 = 1.5714285714285714')
} else
if (a === 22 && sign === "/" && b === 15 ) {
  console.log('22 / 15 = 1.4666666666666666')
} else
if (a === 22 && sign === "/" && b === 16 ) {
  console.log('22 / 16 = 1.375')
} else
if (a === 22 && sign === "/" && b === 17 ) {
  console.log('22 / 17 = 1.2941176470588236')
} else
if (a === 22 && sign === "/" && b === 18 ) {
  console.log('22 / 18 = 1.2222222222222223')
} else
if (a === 22 && sign === "/" && b === 19 ) {
  console.log('22 / 19 = 1.1578947368421053')
} else
if (a === 22 && sign === "/" && b === 20 ) {
  console.log('22 / 20 = 1.1')
} else
if (a === 22 && sign === "/" && b === 21 ) {
  console.log('22 / 21 = 1.0476190476190477')
} else
if (a === 22 && sign === "/" && b === 22 ) {
  console.log('22 / 22 = 1')
} else
if (a === 22 && sign === "/" && b === 23 ) {
  console.log('22 / 23 = 0.9565217391304348')
} else
if (a === 22 && sign === "/" && b === 24 ) {
  console.log('22 / 24 = 0.9166666666666666')
} else
if (a === 22 && sign === "/" && b === 25 ) {
  console.log('22 / 25 = 0.88')
} else
if (a === 22 && sign === "/" && b === 26 ) {
  console.log('22 / 26 = 0.8461538461538461')
} else
if (a === 22 && sign === "/" && b === 27 ) {
  console.log('22 / 27 = 0.8148148148148148')
} else
if (a === 22 && sign === "/" && b === 28 ) {
  console.log('22 / 28 = 0.7857142857142857')
} else
if (a === 22 && sign === "/" && b === 29 ) {
  console.log('22 / 29 = 0.7586206896551724')
} else
if (a === 22 && sign === "/" && b === 30 ) {
  console.log('22 / 30 = 0.7333333333333333')
} else
if (a === 22 && sign === "/" && b === 31 ) {
  console.log('22 / 31 = 0.7096774193548387')
} else
if (a === 22 && sign === "/" && b === 32 ) {
  console.log('22 / 32 = 0.6875')
} else
if (a === 22 && sign === "/" && b === 33 ) {
  console.log('22 / 33 = 0.6666666666666666')
} else
if (a === 22 && sign === "/" && b === 34 ) {
  console.log('22 / 34 = 0.6470588235294118')
} else
if (a === 22 && sign === "/" && b === 35 ) {
  console.log('22 / 35 = 0.6285714285714286')
} else
if (a === 22 && sign === "/" && b === 36 ) {
  console.log('22 / 36 = 0.6111111111111112')
} else
if (a === 22 && sign === "/" && b === 37 ) {
  console.log('22 / 37 = 0.5945945945945946')
} else
if (a === 22 && sign === "/" && b === 38 ) {
  console.log('22 / 38 = 0.5789473684210527')
} else
if (a === 22 && sign === "/" && b === 39 ) {
  console.log('22 / 39 = 0.5641025641025641')
} else
if (a === 22 && sign === "/" && b === 40 ) {
  console.log('22 / 40 = 0.55')
} else
if (a === 22 && sign === "/" && b === 41 ) {
  console.log('22 / 41 = 0.5365853658536586')
} else
if (a === 22 && sign === "/" && b === 42 ) {
  console.log('22 / 42 = 0.5238095238095238')
} else
if (a === 22 && sign === "/" && b === 43 ) {
  console.log('22 / 43 = 0.5116279069767442')
} else
if (a === 22 && sign === "/" && b === 44 ) {
  console.log('22 / 44 = 0.5')
} else
if (a === 22 && sign === "/" && b === 45 ) {
  console.log('22 / 45 = 0.4888888888888889')
} else
if (a === 22 && sign === "/" && b === 46 ) {
  console.log('22 / 46 = 0.4782608695652174')
} else
if (a === 22 && sign === "/" && b === 47 ) {
  console.log('22 / 47 = 0.46808510638297873')
} else
if (a === 22 && sign === "/" && b === 48 ) {
  console.log('22 / 48 = 0.4583333333333333')
} else
if (a === 22 && sign === "/" && b === 49 ) {
  console.log('22 / 49 = 0.4489795918367347')
} else
if (a === 22 && sign === "/" && b === 50 ) {
  console.log('22 / 50 = 0.44')
} else
if (a === 23 && sign === "/" && b === 1 ) {
  console.log('23 / 1 = 23')
} else
if (a === 23 && sign === "/" && b === 2 ) {
  console.log('23 / 2 = 11.5')
} else
if (a === 23 && sign === "/" && b === 3 ) {
  console.log('23 / 3 = 7.666666666666667')
} else
if (a === 23 && sign === "/" && b === 4 ) {
  console.log('23 / 4 = 5.75')
} else
if (a === 23 && sign === "/" && b === 5 ) {
  console.log('23 / 5 = 4.6')
} else
if (a === 23 && sign === "/" && b === 6 ) {
  console.log('23 / 6 = 3.8333333333333335')
} else
if (a === 23 && sign === "/" && b === 7 ) {
  console.log('23 / 7 = 3.2857142857142856')
} else
if (a === 23 && sign === "/" && b === 8 ) {
  console.log('23 / 8 = 2.875')
} else
if (a === 23 && sign === "/" && b === 9 ) {
  console.log('23 / 9 = 2.5555555555555554')
} else
if (a === 23 && sign === "/" && b === 10 ) {
  console.log('23 / 10 = 2.3')
} else
if (a === 23 && sign === "/" && b === 11 ) {
  console.log('23 / 11 = 2.090909090909091')
} else
if (a === 23 && sign === "/" && b === 12 ) {
  console.log('23 / 12 = 1.9166666666666667')
} else
if (a === 23 && sign === "/" && b === 13 ) {
  console.log('23 / 13 = 1.7692307692307692')
} else
if (a === 23 && sign === "/" && b === 14 ) {
  console.log('23 / 14 = 1.6428571428571428')
} else
if (a === 23 && sign === "/" && b === 15 ) {
  console.log('23 / 15 = 1.5333333333333334')
} else
if (a === 23 && sign === "/" && b === 16 ) {
  console.log('23 / 16 = 1.4375')
} else
if (a === 23 && sign === "/" && b === 17 ) {
  console.log('23 / 17 = 1.3529411764705883')
} else
if (a === 23 && sign === "/" && b === 18 ) {
  console.log('23 / 18 = 1.2777777777777777')
} else
if (a === 23 && sign === "/" && b === 19 ) {
  console.log('23 / 19 = 1.2105263157894737')
} else
if (a === 23 && sign === "/" && b === 20 ) {
  console.log('23 / 20 = 1.15')
} else
if (a === 23 && sign === "/" && b === 21 ) {
  console.log('23 / 21 = 1.0952380952380953')
} else
if (a === 23 && sign === "/" && b === 22 ) {
  console.log('23 / 22 = 1.0454545454545454')
} else
if (a === 23 && sign === "/" && b === 23 ) {
  console.log('23 / 23 = 1')
} else
if (a === 23 && sign === "/" && b === 24 ) {
  console.log('23 / 24 = 0.9583333333333334')
} else
if (a === 23 && sign === "/" && b === 25 ) {
  console.log('23 / 25 = 0.92')
} else
if (a === 23 && sign === "/" && b === 26 ) {
  console.log('23 / 26 = 0.8846153846153846')
} else
if (a === 23 && sign === "/" && b === 27 ) {
  console.log('23 / 27 = 0.8518518518518519')
} else
if (a === 23 && sign === "/" && b === 28 ) {
  console.log('23 / 28 = 0.8214285714285714')
} else
if (a === 23 && sign === "/" && b === 29 ) {
  console.log('23 / 29 = 0.7931034482758621')
} else
if (a === 23 && sign === "/" && b === 30 ) {
  console.log('23 / 30 = 0.7666666666666667')
} else
if (a === 23 && sign === "/" && b === 31 ) {
  console.log('23 / 31 = 0.7419354838709677')
} else
if (a === 23 && sign === "/" && b === 32 ) {
  console.log('23 / 32 = 0.71875')
} else
if (a === 23 && sign === "/" && b === 33 ) {
  console.log('23 / 33 = 0.696969696969697')
} else
if (a === 23 && sign === "/" && b === 34 ) {
  console.log('23 / 34 = 0.6764705882352942')
} else
if (a === 23 && sign === "/" && b === 35 ) {
  console.log('23 / 35 = 0.6571428571428571')
} else
if (a === 23 && sign === "/" && b === 36 ) {
  console.log('23 / 36 = 0.6388888888888888')
} else
if (a === 23 && sign === "/" && b === 37 ) {
  console.log('23 / 37 = 0.6216216216216216')
} else
if (a === 23 && sign === "/" && b === 38 ) {
  console.log('23 / 38 = 0.6052631578947368')
} else
if (a === 23 && sign === "/" && b === 39 ) {
  console.log('23 / 39 = 0.5897435897435898')
} else
if (a === 23 && sign === "/" && b === 40 ) {
  console.log('23 / 40 = 0.575')
} else
if (a === 23 && sign === "/" && b === 41 ) {
  console.log('23 / 41 = 0.5609756097560976')
} else
if (a === 23 && sign === "/" && b === 42 ) {
  console.log('23 / 42 = 0.5476190476190477')
} else
if (a === 23 && sign === "/" && b === 43 ) {
  console.log('23 / 43 = 0.5348837209302325')
} else
if (a === 23 && sign === "/" && b === 44 ) {
  console.log('23 / 44 = 0.5227272727272727')
} else
if (a === 23 && sign === "/" && b === 45 ) {
  console.log('23 / 45 = 0.5111111111111111')
} else
if (a === 23 && sign === "/" && b === 46 ) {
  console.log('23 / 46 = 0.5')
} else
if (a === 23 && sign === "/" && b === 47 ) {
  console.log('23 / 47 = 0.48936170212765956')
} else
if (a === 23 && sign === "/" && b === 48 ) {
  console.log('23 / 48 = 0.4791666666666667')
} else
if (a === 23 && sign === "/" && b === 49 ) {
  console.log('23 / 49 = 0.46938775510204084')
} else
if (a === 23 && sign === "/" && b === 50 ) {
  console.log('23 / 50 = 0.46')
} else
if (a === 24 && sign === "/" && b === 1 ) {
  console.log('24 / 1 = 24')
} else
if (a === 24 && sign === "/" && b === 2 ) {
  console.log('24 / 2 = 12')
} else
if (a === 24 && sign === "/" && b === 3 ) {
  console.log('24 / 3 = 8')
} else
if (a === 24 && sign === "/" && b === 4 ) {
  console.log('24 / 4 = 6')
} else
if (a === 24 && sign === "/" && b === 5 ) {
  console.log('24 / 5 = 4.8')
} else
if (a === 24 && sign === "/" && b === 6 ) {
  console.log('24 / 6 = 4')
} else
if (a === 24 && sign === "/" && b === 7 ) {
  console.log('24 / 7 = 3.4285714285714284')
} else
if (a === 24 && sign === "/" && b === 8 ) {
  console.log('24 / 8 = 3')
} else
if (a === 24 && sign === "/" && b === 9 ) {
  console.log('24 / 9 = 2.6666666666666665')
} else
if (a === 24 && sign === "/" && b === 10 ) {
  console.log('24 / 10 = 2.4')
} else
if (a === 24 && sign === "/" && b === 11 ) {
  console.log('24 / 11 = 2.1818181818181817')
} else
if (a === 24 && sign === "/" && b === 12 ) {
  console.log('24 / 12 = 2')
} else
if (a === 24 && sign === "/" && b === 13 ) {
  console.log('24 / 13 = 1.8461538461538463')
} else
if (a === 24 && sign === "/" && b === 14 ) {
  console.log('24 / 14 = 1.7142857142857142')
} else
if (a === 24 && sign === "/" && b === 15 ) {
  console.log('24 / 15 = 1.6')
} else
if (a === 24 && sign === "/" && b === 16 ) {
  console.log('24 / 16 = 1.5')
} else
if (a === 24 && sign === "/" && b === 17 ) {
  console.log('24 / 17 = 1.411764705882353')
} else
if (a === 24 && sign === "/" && b === 18 ) {
  console.log('24 / 18 = 1.3333333333333333')
} else
if (a === 24 && sign === "/" && b === 19 ) {
  console.log('24 / 19 = 1.263157894736842')
} else
if (a === 24 && sign === "/" && b === 20 ) {
  console.log('24 / 20 = 1.2')
} else
if (a === 24 && sign === "/" && b === 21 ) {
  console.log('24 / 21 = 1.1428571428571428')
} else
if (a === 24 && sign === "/" && b === 22 ) {
  console.log('24 / 22 = 1.0909090909090908')
} else
if (a === 24 && sign === "/" && b === 23 ) {
  console.log('24 / 23 = 1.0434782608695652')
} else
if (a === 24 && sign === "/" && b === 24 ) {
  console.log('24 / 24 = 1')
} else
if (a === 24 && sign === "/" && b === 25 ) {
  console.log('24 / 25 = 0.96')
} else
if (a === 24 && sign === "/" && b === 26 ) {
  console.log('24 / 26 = 0.9230769230769231')
} else
if (a === 24 && sign === "/" && b === 27 ) {
  console.log('24 / 27 = 0.8888888888888888')
} else
if (a === 24 && sign === "/" && b === 28 ) {
  console.log('24 / 28 = 0.8571428571428571')
} else
if (a === 24 && sign === "/" && b === 29 ) {
  console.log('24 / 29 = 0.8275862068965517')
} else
if (a === 24 && sign === "/" && b === 30 ) {
  console.log('24 / 30 = 0.8')
} else
if (a === 24 && sign === "/" && b === 31 ) {
  console.log('24 / 31 = 0.7741935483870968')
} else
if (a === 24 && sign === "/" && b === 32 ) {
  console.log('24 / 32 = 0.75')
} else
if (a === 24 && sign === "/" && b === 33 ) {
  console.log('24 / 33 = 0.7272727272727273')
} else
if (a === 24 && sign === "/" && b === 34 ) {
  console.log('24 / 34 = 0.7058823529411765')
} else
if (a === 24 && sign === "/" && b === 35 ) {
  console.log('24 / 35 = 0.6857142857142857')
} else
if (a === 24 && sign === "/" && b === 36 ) {
  console.log('24 / 36 = 0.6666666666666666')
} else
if (a === 24 && sign === "/" && b === 37 ) {
  console.log('24 / 37 = 0.6486486486486487')
} else
if (a === 24 && sign === "/" && b === 38 ) {
  console.log('24 / 38 = 0.631578947368421')
} else
if (a === 24 && sign === "/" && b === 39 ) {
  console.log('24 / 39 = 0.6153846153846154')
} else
if (a === 24 && sign === "/" && b === 40 ) {
  console.log('24 / 40 = 0.6')
} else
if (a === 24 && sign === "/" && b === 41 ) {
  console.log('24 / 41 = 0.5853658536585366')
} else
if (a === 24 && sign === "/" && b === 42 ) {
  console.log('24 / 42 = 0.5714285714285714')
} else
if (a === 24 && sign === "/" && b === 43 ) {
  console.log('24 / 43 = 0.5581395348837209')
} else
if (a === 24 && sign === "/" && b === 44 ) {
  console.log('24 / 44 = 0.5454545454545454')
} else
if (a === 24 && sign === "/" && b === 45 ) {
  console.log('24 / 45 = 0.5333333333333333')
} else
if (a === 24 && sign === "/" && b === 46 ) {
  console.log('24 / 46 = 0.5217391304347826')
} else
if (a === 24 && sign === "/" && b === 47 ) {
  console.log('24 / 47 = 0.5106382978723404')
} else
if (a === 24 && sign === "/" && b === 48 ) {
  console.log('24 / 48 = 0.5')
} else
if (a === 24 && sign === "/" && b === 49 ) {
  console.log('24 / 49 = 0.4897959183673469')
} else
if (a === 24 && sign === "/" && b === 50 ) {
  console.log('24 / 50 = 0.48')
} else
if (a === 25 && sign === "/" && b === 1 ) {
  console.log('25 / 1 = 25')
} else
if (a === 25 && sign === "/" && b === 2 ) {
  console.log('25 / 2 = 12.5')
} else
if (a === 25 && sign === "/" && b === 3 ) {
  console.log('25 / 3 = 8.333333333333334')
} else
if (a === 25 && sign === "/" && b === 4 ) {
  console.log('25 / 4 = 6.25')
} else
if (a === 25 && sign === "/" && b === 5 ) {
  console.log('25 / 5 = 5')
} else
if (a === 25 && sign === "/" && b === 6 ) {
  console.log('25 / 6 = 4.166666666666667')
} else
if (a === 25 && sign === "/" && b === 7 ) {
  console.log('25 / 7 = 3.5714285714285716')
} else
if (a === 25 && sign === "/" && b === 8 ) {
  console.log('25 / 8 = 3.125')
} else
if (a === 25 && sign === "/" && b === 9 ) {
  console.log('25 / 9 = 2.7777777777777777')
} else
if (a === 25 && sign === "/" && b === 10 ) {
  console.log('25 / 10 = 2.5')
} else
if (a === 25 && sign === "/" && b === 11 ) {
  console.log('25 / 11 = 2.272727272727273')
} else
if (a === 25 && sign === "/" && b === 12 ) {
  console.log('25 / 12 = 2.0833333333333335')
} else
if (a === 25 && sign === "/" && b === 13 ) {
  console.log('25 / 13 = 1.9230769230769231')
} else
if (a === 25 && sign === "/" && b === 14 ) {
  console.log('25 / 14 = 1.7857142857142858')
} else
if (a === 25 && sign === "/" && b === 15 ) {
  console.log('25 / 15 = 1.6666666666666667')
} else
if (a === 25 && sign === "/" && b === 16 ) {
  console.log('25 / 16 = 1.5625')
} else
if (a === 25 && sign === "/" && b === 17 ) {
  console.log('25 / 17 = 1.4705882352941178')
} else
if (a === 25 && sign === "/" && b === 18 ) {
  console.log('25 / 18 = 1.3888888888888888')
} else
if (a === 25 && sign === "/" && b === 19 ) {
  console.log('25 / 19 = 1.3157894736842106')
} else
if (a === 25 && sign === "/" && b === 20 ) {
  console.log('25 / 20 = 1.25')
} else
if (a === 25 && sign === "/" && b === 21 ) {
  console.log('25 / 21 = 1.1904761904761905')
} else
if (a === 25 && sign === "/" && b === 22 ) {
  console.log('25 / 22 = 1.1363636363636365')
} else
if (a === 25 && sign === "/" && b === 23 ) {
  console.log('25 / 23 = 1.0869565217391304')
} else
if (a === 25 && sign === "/" && b === 24 ) {
  console.log('25 / 24 = 1.0416666666666667')
} else
if (a === 25 && sign === "/" && b === 25 ) {
  console.log('25 / 25 = 1')
} else
if (a === 25 && sign === "/" && b === 26 ) {
  console.log('25 / 26 = 0.9615384615384616')
} else
if (a === 25 && sign === "/" && b === 27 ) {
  console.log('25 / 27 = 0.9259259259259259')
} else
if (a === 25 && sign === "/" && b === 28 ) {
  console.log('25 / 28 = 0.8928571428571429')
} else
if (a === 25 && sign === "/" && b === 29 ) {
  console.log('25 / 29 = 0.8620689655172413')
} else
if (a === 25 && sign === "/" && b === 30 ) {
  console.log('25 / 30 = 0.8333333333333334')
} else
if (a === 25 && sign === "/" && b === 31 ) {
  console.log('25 / 31 = 0.8064516129032258')
} else
if (a === 25 && sign === "/" && b === 32 ) {
  console.log('25 / 32 = 0.78125')
} else
if (a === 25 && sign === "/" && b === 33 ) {
  console.log('25 / 33 = 0.7575757575757576')
} else
if (a === 25 && sign === "/" && b === 34 ) {
  console.log('25 / 34 = 0.7352941176470589')
} else
if (a === 25 && sign === "/" && b === 35 ) {
  console.log('25 / 35 = 0.7142857142857143')
} else
if (a === 25 && sign === "/" && b === 36 ) {
  console.log('25 / 36 = 0.6944444444444444')
} else
if (a === 25 && sign === "/" && b === 37 ) {
  console.log('25 / 37 = 0.6756756756756757')
} else
if (a === 25 && sign === "/" && b === 38 ) {
  console.log('25 / 38 = 0.6578947368421053')
} else
if (a === 25 && sign === "/" && b === 39 ) {
  console.log('25 / 39 = 0.6410256410256411')
} else
if (a === 25 && sign === "/" && b === 40 ) {
  console.log('25 / 40 = 0.625')
} else
if (a === 25 && sign === "/" && b === 41 ) {
  console.log('25 / 41 = 0.6097560975609756')
} else
if (a === 25 && sign === "/" && b === 42 ) {
  console.log('25 / 42 = 0.5952380952380952')
} else
if (a === 25 && sign === "/" && b === 43 ) {
  console.log('25 / 43 = 0.5813953488372093')
} else
if (a === 25 && sign === "/" && b === 44 ) {
  console.log('25 / 44 = 0.5681818181818182')
} else
if (a === 25 && sign === "/" && b === 45 ) {
  console.log('25 / 45 = 0.5555555555555556')
} else
if (a === 25 && sign === "/" && b === 46 ) {
  console.log('25 / 46 = 0.5434782608695652')
} else
if (a === 25 && sign === "/" && b === 47 ) {
  console.log('25 / 47 = 0.5319148936170213')
} else
if (a === 25 && sign === "/" && b === 48 ) {
  console.log('25 / 48 = 0.5208333333333334')
} else
if (a === 25 && sign === "/" && b === 49 ) {
  console.log('25 / 49 = 0.5102040816326531')
} else
if (a === 25 && sign === "/" && b === 50 ) {
  console.log('25 / 50 = 0.5')
} else
if (a === 26 && sign === "/" && b === 1 ) {
  console.log('26 / 1 = 26')
} else
if (a === 26 && sign === "/" && b === 2 ) {
  console.log('26 / 2 = 13')
} else
if (a === 26 && sign === "/" && b === 3 ) {
  console.log('26 / 3 = 8.666666666666666')
} else
if (a === 26 && sign === "/" && b === 4 ) {
  console.log('26 / 4 = 6.5')
} else
if (a === 26 && sign === "/" && b === 5 ) {
  console.log('26 / 5 = 5.2')
} else
if (a === 26 && sign === "/" && b === 6 ) {
  console.log('26 / 6 = 4.333333333333333')
} else
if (a === 26 && sign === "/" && b === 7 ) {
  console.log('26 / 7 = 3.7142857142857144')
} else
if (a === 26 && sign === "/" && b === 8 ) {
  console.log('26 / 8 = 3.25')
} else
if (a === 26 && sign === "/" && b === 9 ) {
  console.log('26 / 9 = 2.888888888888889')
} else
if (a === 26 && sign === "/" && b === 10 ) {
  console.log('26 / 10 = 2.6')
} else
if (a === 26 && sign === "/" && b === 11 ) {
  console.log('26 / 11 = 2.3636363636363638')
} else
if (a === 26 && sign === "/" && b === 12 ) {
  console.log('26 / 12 = 2.1666666666666665')
} else
if (a === 26 && sign === "/" && b === 13 ) {
  console.log('26 / 13 = 2')
} else
if (a === 26 && sign === "/" && b === 14 ) {
  console.log('26 / 14 = 1.8571428571428572')
} else
if (a === 26 && sign === "/" && b === 15 ) {
  console.log('26 / 15 = 1.7333333333333334')
} else
if (a === 26 && sign === "/" && b === 16 ) {
  console.log('26 / 16 = 1.625')
} else
if (a === 26 && sign === "/" && b === 17 ) {
  console.log('26 / 17 = 1.5294117647058822')
} else
if (a === 26 && sign === "/" && b === 18 ) {
  console.log('26 / 18 = 1.4444444444444444')
} else
if (a === 26 && sign === "/" && b === 19 ) {
  console.log('26 / 19 = 1.368421052631579')
} else
if (a === 26 && sign === "/" && b === 20 ) {
  console.log('26 / 20 = 1.3')
} else
if (a === 26 && sign === "/" && b === 21 ) {
  console.log('26 / 21 = 1.2380952380952381')
} else
if (a === 26 && sign === "/" && b === 22 ) {
  console.log('26 / 22 = 1.1818181818181819')
} else
if (a === 26 && sign === "/" && b === 23 ) {
  console.log('26 / 23 = 1.1304347826086956')
} else
if (a === 26 && sign === "/" && b === 24 ) {
  console.log('26 / 24 = 1.0833333333333333')
} else
if (a === 26 && sign === "/" && b === 25 ) {
  console.log('26 / 25 = 1.04')
} else
if (a === 26 && sign === "/" && b === 26 ) {
  console.log('26 / 26 = 1')
} else
if (a === 26 && sign === "/" && b === 27 ) {
  console.log('26 / 27 = 0.9629629629629629')
} else
if (a === 26 && sign === "/" && b === 28 ) {
  console.log('26 / 28 = 0.9285714285714286')
} else
if (a === 26 && sign === "/" && b === 29 ) {
  console.log('26 / 29 = 0.896551724137931')
} else
if (a === 26 && sign === "/" && b === 30 ) {
  console.log('26 / 30 = 0.8666666666666667')
} else
if (a === 26 && sign === "/" && b === 31 ) {
  console.log('26 / 31 = 0.8387096774193549')
} else
if (a === 26 && sign === "/" && b === 32 ) {
  console.log('26 / 32 = 0.8125')
} else
if (a === 26 && sign === "/" && b === 33 ) {
  console.log('26 / 33 = 0.7878787878787878')
} else
if (a === 26 && sign === "/" && b === 34 ) {
  console.log('26 / 34 = 0.7647058823529411')
} else
if (a === 26 && sign === "/" && b === 35 ) {
  console.log('26 / 35 = 0.7428571428571429')
} else
if (a === 26 && sign === "/" && b === 36 ) {
  console.log('26 / 36 = 0.7222222222222222')
} else
if (a === 26 && sign === "/" && b === 37 ) {
  console.log('26 / 37 = 0.7027027027027027')
} else
if (a === 26 && sign === "/" && b === 38 ) {
  console.log('26 / 38 = 0.6842105263157895')
} else
if (a === 26 && sign === "/" && b === 39 ) {
  console.log('26 / 39 = 0.6666666666666666')
} else
if (a === 26 && sign === "/" && b === 40 ) {
  console.log('26 / 40 = 0.65')
} else
if (a === 26 && sign === "/" && b === 41 ) {
  console.log('26 / 41 = 0.6341463414634146')
} else
if (a === 26 && sign === "/" && b === 42 ) {
  console.log('26 / 42 = 0.6190476190476191')
} else
if (a === 26 && sign === "/" && b === 43 ) {
  console.log('26 / 43 = 0.6046511627906976')
} else
if (a === 26 && sign === "/" && b === 44 ) {
  console.log('26 / 44 = 0.5909090909090909')
} else
if (a === 26 && sign === "/" && b === 45 ) {
  console.log('26 / 45 = 0.5777777777777777')
} else
if (a === 26 && sign === "/" && b === 46 ) {
  console.log('26 / 46 = 0.5652173913043478')
} else
if (a === 26 && sign === "/" && b === 47 ) {
  console.log('26 / 47 = 0.5531914893617021')
} else
if (a === 26 && sign === "/" && b === 48 ) {
  console.log('26 / 48 = 0.5416666666666666')
} else
if (a === 26 && sign === "/" && b === 49 ) {
  console.log('26 / 49 = 0.5306122448979592')
} else
if (a === 26 && sign === "/" && b === 50 ) {
  console.log('26 / 50 = 0.52')
} else
if (a === 27 && sign === "/" && b === 1 ) {
  console.log('27 / 1 = 27')
} else
if (a === 27 && sign === "/" && b === 2 ) {
  console.log('27 / 2 = 13.5')
} else
if (a === 27 && sign === "/" && b === 3 ) {
  console.log('27 / 3 = 9')
} else
if (a === 27 && sign === "/" && b === 4 ) {
  console.log('27 / 4 = 6.75')
} else
if (a === 27 && sign === "/" && b === 5 ) {
  console.log('27 / 5 = 5.4')
} else
if (a === 27 && sign === "/" && b === 6 ) {
  console.log('27 / 6 = 4.5')
} else
if (a === 27 && sign === "/" && b === 7 ) {
  console.log('27 / 7 = 3.857142857142857')
} else
if (a === 27 && sign === "/" && b === 8 ) {
  console.log('27 / 8 = 3.375')
} else
if (a === 27 && sign === "/" && b === 9 ) {
  console.log('27 / 9 = 3')
} else
if (a === 27 && sign === "/" && b === 10 ) {
  console.log('27 / 10 = 2.7')
} else
if (a === 27 && sign === "/" && b === 11 ) {
  console.log('27 / 11 = 2.4545454545454546')
} else
if (a === 27 && sign === "/" && b === 12 ) {
  console.log('27 / 12 = 2.25')
} else
if (a === 27 && sign === "/" && b === 13 ) {
  console.log('27 / 13 = 2.076923076923077')
} else
if (a === 27 && sign === "/" && b === 14 ) {
  console.log('27 / 14 = 1.9285714285714286')
} else
if (a === 27 && sign === "/" && b === 15 ) {
  console.log('27 / 15 = 1.8')
} else
if (a === 27 && sign === "/" && b === 16 ) {
  console.log('27 / 16 = 1.6875')
} else
if (a === 27 && sign === "/" && b === 17 ) {
  console.log('27 / 17 = 1.588235294117647')
} else
if (a === 27 && sign === "/" && b === 18 ) {
  console.log('27 / 18 = 1.5')
} else
if (a === 27 && sign === "/" && b === 19 ) {
  console.log('27 / 19 = 1.4210526315789473')
} else
if (a === 27 && sign === "/" && b === 20 ) {
  console.log('27 / 20 = 1.35')
} else
if (a === 27 && sign === "/" && b === 21 ) {
  console.log('27 / 21 = 1.2857142857142858')
} else
if (a === 27 && sign === "/" && b === 22 ) {
  console.log('27 / 22 = 1.2272727272727273')
} else
if (a === 27 && sign === "/" && b === 23 ) {
  console.log('27 / 23 = 1.173913043478261')
} else
if (a === 27 && sign === "/" && b === 24 ) {
  console.log('27 / 24 = 1.125')
} else
if (a === 27 && sign === "/" && b === 25 ) {
  console.log('27 / 25 = 1.08')
} else
if (a === 27 && sign === "/" && b === 26 ) {
  console.log('27 / 26 = 1.0384615384615385')
} else
if (a === 27 && sign === "/" && b === 27 ) {
  console.log('27 / 27 = 1')
} else
if (a === 27 && sign === "/" && b === 28 ) {
  console.log('27 / 28 = 0.9642857142857143')
} else
if (a === 27 && sign === "/" && b === 29 ) {
  console.log('27 / 29 = 0.9310344827586207')
} else
if (a === 27 && sign === "/" && b === 30 ) {
  console.log('27 / 30 = 0.9')
} else
if (a === 27 && sign === "/" && b === 31 ) {
  console.log('27 / 31 = 0.8709677419354839')
} else
if (a === 27 && sign === "/" && b === 32 ) {
  console.log('27 / 32 = 0.84375')
} else
if (a === 27 && sign === "/" && b === 33 ) {
  console.log('27 / 33 = 0.8181818181818182')
} else
if (a === 27 && sign === "/" && b === 34 ) {
  console.log('27 / 34 = 0.7941176470588235')
} else
if (a === 27 && sign === "/" && b === 35 ) {
  console.log('27 / 35 = 0.7714285714285715')
} else
if (a === 27 && sign === "/" && b === 36 ) {
  console.log('27 / 36 = 0.75')
} else
if (a === 27 && sign === "/" && b === 37 ) {
  console.log('27 / 37 = 0.7297297297297297')
} else
if (a === 27 && sign === "/" && b === 38 ) {
  console.log('27 / 38 = 0.7105263157894737')
} else
if (a === 27 && sign === "/" && b === 39 ) {
  console.log('27 / 39 = 0.6923076923076923')
} else
if (a === 27 && sign === "/" && b === 40 ) {
  console.log('27 / 40 = 0.675')
} else
if (a === 27 && sign === "/" && b === 41 ) {
  console.log('27 / 41 = 0.6585365853658537')
} else
if (a === 27 && sign === "/" && b === 42 ) {
  console.log('27 / 42 = 0.6428571428571429')
} else
if (a === 27 && sign === "/" && b === 43 ) {
  console.log('27 / 43 = 0.627906976744186')
} else
if (a === 27 && sign === "/" && b === 44 ) {
  console.log('27 / 44 = 0.6136363636363636')
} else
if (a === 27 && sign === "/" && b === 45 ) {
  console.log('27 / 45 = 0.6')
} else
if (a === 27 && sign === "/" && b === 46 ) {
  console.log('27 / 46 = 0.5869565217391305')
} else
if (a === 27 && sign === "/" && b === 47 ) {
  console.log('27 / 47 = 0.574468085106383')
} else
if (a === 27 && sign === "/" && b === 48 ) {
  console.log('27 / 48 = 0.5625')
} else
if (a === 27 && sign === "/" && b === 49 ) {
  console.log('27 / 49 = 0.5510204081632653')
} else
if (a === 27 && sign === "/" && b === 50 ) {
  console.log('27 / 50 = 0.54')
} else
if (a === 28 && sign === "/" && b === 1 ) {
  console.log('28 / 1 = 28')
} else
if (a === 28 && sign === "/" && b === 2 ) {
  console.log('28 / 2 = 14')
} else
if (a === 28 && sign === "/" && b === 3 ) {
  console.log('28 / 3 = 9.333333333333334')
} else
if (a === 28 && sign === "/" && b === 4 ) {
  console.log('28 / 4 = 7')
} else
if (a === 28 && sign === "/" && b === 5 ) {
  console.log('28 / 5 = 5.6')
} else
if (a === 28 && sign === "/" && b === 6 ) {
  console.log('28 / 6 = 4.666666666666667')
} else
if (a === 28 && sign === "/" && b === 7 ) {
  console.log('28 / 7 = 4')
} else
if (a === 28 && sign === "/" && b === 8 ) {
  console.log('28 / 8 = 3.5')
} else
if (a === 28 && sign === "/" && b === 9 ) {
  console.log('28 / 9 = 3.111111111111111')
} else
if (a === 28 && sign === "/" && b === 10 ) {
  console.log('28 / 10 = 2.8')
} else
if (a === 28 && sign === "/" && b === 11 ) {
  console.log('28 / 11 = 2.5454545454545454')
} else
if (a === 28 && sign === "/" && b === 12 ) {
  console.log('28 / 12 = 2.3333333333333335')
} else
if (a === 28 && sign === "/" && b === 13 ) {
  console.log('28 / 13 = 2.1538461538461537')
} else
if (a === 28 && sign === "/" && b === 14 ) {
  console.log('28 / 14 = 2')
} else
if (a === 28 && sign === "/" && b === 15 ) {
  console.log('28 / 15 = 1.8666666666666667')
} else
if (a === 28 && sign === "/" && b === 16 ) {
  console.log('28 / 16 = 1.75')
} else
if (a === 28 && sign === "/" && b === 17 ) {
  console.log('28 / 17 = 1.6470588235294117')
} else
if (a === 28 && sign === "/" && b === 18 ) {
  console.log('28 / 18 = 1.5555555555555556')
} else
if (a === 28 && sign === "/" && b === 19 ) {
  console.log('28 / 19 = 1.4736842105263157')
} else
if (a === 28 && sign === "/" && b === 20 ) {
  console.log('28 / 20 = 1.4')
} else
if (a === 28 && sign === "/" && b === 21 ) {
  console.log('28 / 21 = 1.3333333333333333')
} else
if (a === 28 && sign === "/" && b === 22 ) {
  console.log('28 / 22 = 1.2727272727272727')
} else
if (a === 28 && sign === "/" && b === 23 ) {
  console.log('28 / 23 = 1.2173913043478262')
} else
if (a === 28 && sign === "/" && b === 24 ) {
  console.log('28 / 24 = 1.1666666666666667')
} else
if (a === 28 && sign === "/" && b === 25 ) {
  console.log('28 / 25 = 1.12')
} else
if (a === 28 && sign === "/" && b === 26 ) {
  console.log('28 / 26 = 1.0769230769230769')
} else
if (a === 28 && sign === "/" && b === 27 ) {
  console.log('28 / 27 = 1.037037037037037')
} else
if (a === 28 && sign === "/" && b === 28 ) {
  console.log('28 / 28 = 1')
} else
if (a === 28 && sign === "/" && b === 29 ) {
  console.log('28 / 29 = 0.9655172413793104')
} else
if (a === 28 && sign === "/" && b === 30 ) {
  console.log('28 / 30 = 0.9333333333333333')
} else
if (a === 28 && sign === "/" && b === 31 ) {
  console.log('28 / 31 = 0.9032258064516129')
} else
if (a === 28 && sign === "/" && b === 32 ) {
  console.log('28 / 32 = 0.875')
} else
if (a === 28 && sign === "/" && b === 33 ) {
  console.log('28 / 33 = 0.8484848484848485')
} else
if (a === 28 && sign === "/" && b === 34 ) {
  console.log('28 / 34 = 0.8235294117647058')
} else
if (a === 28 && sign === "/" && b === 35 ) {
  console.log('28 / 35 = 0.8')
} else
if (a === 28 && sign === "/" && b === 36 ) {
  console.log('28 / 36 = 0.7777777777777778')
} else
if (a === 28 && sign === "/" && b === 37 ) {
  console.log('28 / 37 = 0.7567567567567568')
} else
if (a === 28 && sign === "/" && b === 38 ) {
  console.log('28 / 38 = 0.7368421052631579')
} else
if (a === 28 && sign === "/" && b === 39 ) {
  console.log('28 / 39 = 0.717948717948718')
} else
if (a === 28 && sign === "/" && b === 40 ) {
  console.log('28 / 40 = 0.7')
} else
if (a === 28 && sign === "/" && b === 41 ) {
  console.log('28 / 41 = 0.6829268292682927')
} else
if (a === 28 && sign === "/" && b === 42 ) {
  console.log('28 / 42 = 0.6666666666666666')
} else
if (a === 28 && sign === "/" && b === 43 ) {
  console.log('28 / 43 = 0.6511627906976745')
} else
if (a === 28 && sign === "/" && b === 44 ) {
  console.log('28 / 44 = 0.6363636363636364')
} else
if (a === 28 && sign === "/" && b === 45 ) {
  console.log('28 / 45 = 0.6222222222222222')
} else
if (a === 28 && sign === "/" && b === 46 ) {
  console.log('28 / 46 = 0.6086956521739131')
} else
if (a === 28 && sign === "/" && b === 47 ) {
  console.log('28 / 47 = 0.5957446808510638')
} else
if (a === 28 && sign === "/" && b === 48 ) {
  console.log('28 / 48 = 0.5833333333333334')
} else
if (a === 28 && sign === "/" && b === 49 ) {
  console.log('28 / 49 = 0.5714285714285714')
} else
if (a === 28 && sign === "/" && b === 50 ) {
  console.log('28 / 50 = 0.56')
} else
if (a === 29 && sign === "/" && b === 1 ) {
  console.log('29 / 1 = 29')
} else
if (a === 29 && sign === "/" && b === 2 ) {
  console.log('29 / 2 = 14.5')
} else
if (a === 29 && sign === "/" && b === 3 ) {
  console.log('29 / 3 = 9.666666666666666')
} else
if (a === 29 && sign === "/" && b === 4 ) {
  console.log('29 / 4 = 7.25')
} else
if (a === 29 && sign === "/" && b === 5 ) {
  console.log('29 / 5 = 5.8')
} else
if (a === 29 && sign === "/" && b === 6 ) {
  console.log('29 / 6 = 4.833333333333333')
} else
if (a === 29 && sign === "/" && b === 7 ) {
  console.log('29 / 7 = 4.142857142857143')
} else
if (a === 29 && sign === "/" && b === 8 ) {
  console.log('29 / 8 = 3.625')
} else
if (a === 29 && sign === "/" && b === 9 ) {
  console.log('29 / 9 = 3.2222222222222223')
} else
if (a === 29 && sign === "/" && b === 10 ) {
  console.log('29 / 10 = 2.9')
} else
if (a === 29 && sign === "/" && b === 11 ) {
  console.log('29 / 11 = 2.6363636363636362')
} else
if (a === 29 && sign === "/" && b === 12 ) {
  console.log('29 / 12 = 2.4166666666666665')
} else
if (a === 29 && sign === "/" && b === 13 ) {
  console.log('29 / 13 = 2.230769230769231')
} else
if (a === 29 && sign === "/" && b === 14 ) {
  console.log('29 / 14 = 2.0714285714285716')
} else
if (a === 29 && sign === "/" && b === 15 ) {
  console.log('29 / 15 = 1.9333333333333333')
} else
if (a === 29 && sign === "/" && b === 16 ) {
  console.log('29 / 16 = 1.8125')
} else
if (a === 29 && sign === "/" && b === 17 ) {
  console.log('29 / 17 = 1.7058823529411764')
} else
if (a === 29 && sign === "/" && b === 18 ) {
  console.log('29 / 18 = 1.6111111111111112')
} else
if (a === 29 && sign === "/" && b === 19 ) {
  console.log('29 / 19 = 1.5263157894736843')
} else
if (a === 29 && sign === "/" && b === 20 ) {
  console.log('29 / 20 = 1.45')
} else
if (a === 29 && sign === "/" && b === 21 ) {
  console.log('29 / 21 = 1.380952380952381')
} else
if (a === 29 && sign === "/" && b === 22 ) {
  console.log('29 / 22 = 1.3181818181818181')
} else
if (a === 29 && sign === "/" && b === 23 ) {
  console.log('29 / 23 = 1.2608695652173914')
} else
if (a === 29 && sign === "/" && b === 24 ) {
  console.log('29 / 24 = 1.2083333333333333')
} else
if (a === 29 && sign === "/" && b === 25 ) {
  console.log('29 / 25 = 1.16')
} else
if (a === 29 && sign === "/" && b === 26 ) {
  console.log('29 / 26 = 1.1153846153846154')
} else
if (a === 29 && sign === "/" && b === 27 ) {
  console.log('29 / 27 = 1.0740740740740742')
} else
if (a === 29 && sign === "/" && b === 28 ) {
  console.log('29 / 28 = 1.0357142857142858')
} else
if (a === 29 && sign === "/" && b === 29 ) {
  console.log('29 / 29 = 1')
} else
if (a === 29 && sign === "/" && b === 30 ) {
  console.log('29 / 30 = 0.9666666666666667')
} else
if (a === 29 && sign === "/" && b === 31 ) {
  console.log('29 / 31 = 0.9354838709677419')
} else
if (a === 29 && sign === "/" && b === 32 ) {
  console.log('29 / 32 = 0.90625')
} else
if (a === 29 && sign === "/" && b === 33 ) {
  console.log('29 / 33 = 0.8787878787878788')
} else
if (a === 29 && sign === "/" && b === 34 ) {
  console.log('29 / 34 = 0.8529411764705882')
} else
if (a === 29 && sign === "/" && b === 35 ) {
  console.log('29 / 35 = 0.8285714285714286')
} else
if (a === 29 && sign === "/" && b === 36 ) {
  console.log('29 / 36 = 0.8055555555555556')
} else
if (a === 29 && sign === "/" && b === 37 ) {
  console.log('29 / 37 = 0.7837837837837838')
} else
if (a === 29 && sign === "/" && b === 38 ) {
  console.log('29 / 38 = 0.7631578947368421')
} else
if (a === 29 && sign === "/" && b === 39 ) {
  console.log('29 / 39 = 0.7435897435897436')
} else
if (a === 29 && sign === "/" && b === 40 ) {
  console.log('29 / 40 = 0.725')
} else
if (a === 29 && sign === "/" && b === 41 ) {
  console.log('29 / 41 = 0.7073170731707317')
} else
if (a === 29 && sign === "/" && b === 42 ) {
  console.log('29 / 42 = 0.6904761904761905')
} else
if (a === 29 && sign === "/" && b === 43 ) {
  console.log('29 / 43 = 0.6744186046511628')
} else
if (a === 29 && sign === "/" && b === 44 ) {
  console.log('29 / 44 = 0.6590909090909091')
} else
if (a === 29 && sign === "/" && b === 45 ) {
  console.log('29 / 45 = 0.6444444444444445')
} else
if (a === 29 && sign === "/" && b === 46 ) {
  console.log('29 / 46 = 0.6304347826086957')
} else
if (a === 29 && sign === "/" && b === 47 ) {
  console.log('29 / 47 = 0.6170212765957447')
} else
if (a === 29 && sign === "/" && b === 48 ) {
  console.log('29 / 48 = 0.6041666666666666')
} else
if (a === 29 && sign === "/" && b === 49 ) {
  console.log('29 / 49 = 0.5918367346938775')
} else
if (a === 29 && sign === "/" && b === 50 ) {
  console.log('29 / 50 = 0.58')
} else
if (a === 30 && sign === "/" && b === 1 ) {
  console.log('30 / 1 = 30')
} else
if (a === 30 && sign === "/" && b === 2 ) {
  console.log('30 / 2 = 15')
} else
if (a === 30 && sign === "/" && b === 3 ) {
  console.log('30 / 3 = 10')
} else
if (a === 30 && sign === "/" && b === 4 ) {
  console.log('30 / 4 = 7.5')
} else
if (a === 30 && sign === "/" && b === 5 ) {
  console.log('30 / 5 = 6')
} else
if (a === 30 && sign === "/" && b === 6 ) {
  console.log('30 / 6 = 5')
} else
if (a === 30 && sign === "/" && b === 7 ) {
  console.log('30 / 7 = 4.285714285714286')
} else
if (a === 30 && sign === "/" && b === 8 ) {
  console.log('30 / 8 = 3.75')
} else
if (a === 30 && sign === "/" && b === 9 ) {
  console.log('30 / 9 = 3.3333333333333335')
} else
if (a === 30 && sign === "/" && b === 10 ) {
  console.log('30 / 10 = 3')
} else
if (a === 30 && sign === "/" && b === 11 ) {
  console.log('30 / 11 = 2.727272727272727')
} else
if (a === 30 && sign === "/" && b === 12 ) {
  console.log('30 / 12 = 2.5')
} else
if (a === 30 && sign === "/" && b === 13 ) {
  console.log('30 / 13 = 2.3076923076923075')
} else
if (a === 30 && sign === "/" && b === 14 ) {
  console.log('30 / 14 = 2.142857142857143')
} else
if (a === 30 && sign === "/" && b === 15 ) {
  console.log('30 / 15 = 2')
} else
if (a === 30 && sign === "/" && b === 16 ) {
  console.log('30 / 16 = 1.875')
} else
if (a === 30 && sign === "/" && b === 17 ) {
  console.log('30 / 17 = 1.7647058823529411')
} else
if (a === 30 && sign === "/" && b === 18 ) {
  console.log('30 / 18 = 1.6666666666666667')
} else
if (a === 30 && sign === "/" && b === 19 ) {
  console.log('30 / 19 = 1.5789473684210527')
} else
if (a === 30 && sign === "/" && b === 20 ) {
  console.log('30 / 20 = 1.5')
} else
if (a === 30 && sign === "/" && b === 21 ) {
  console.log('30 / 21 = 1.4285714285714286')
} else
if (a === 30 && sign === "/" && b === 22 ) {
  console.log('30 / 22 = 1.3636363636363635')
} else
if (a === 30 && sign === "/" && b === 23 ) {
  console.log('30 / 23 = 1.3043478260869565')
} else
if (a === 30 && sign === "/" && b === 24 ) {
  console.log('30 / 24 = 1.25')
} else
if (a === 30 && sign === "/" && b === 25 ) {
  console.log('30 / 25 = 1.2')
} else
if (a === 30 && sign === "/" && b === 26 ) {
  console.log('30 / 26 = 1.1538461538461537')
} else
if (a === 30 && sign === "/" && b === 27 ) {
  console.log('30 / 27 = 1.1111111111111112')
} else
if (a === 30 && sign === "/" && b === 28 ) {
  console.log('30 / 28 = 1.0714285714285714')
} else
if (a === 30 && sign === "/" && b === 29 ) {
  console.log('30 / 29 = 1.0344827586206897')
} else
if (a === 30 && sign === "/" && b === 30 ) {
  console.log('30 / 30 = 1')
} else
if (a === 30 && sign === "/" && b === 31 ) {
  console.log('30 / 31 = 0.967741935483871')
} else
if (a === 30 && sign === "/" && b === 32 ) {
  console.log('30 / 32 = 0.9375')
} else
if (a === 30 && sign === "/" && b === 33 ) {
  console.log('30 / 33 = 0.9090909090909091')
} else
if (a === 30 && sign === "/" && b === 34 ) {
  console.log('30 / 34 = 0.8823529411764706')
} else
if (a === 30 && sign === "/" && b === 35 ) {
  console.log('30 / 35 = 0.8571428571428571')
} else
if (a === 30 && sign === "/" && b === 36 ) {
  console.log('30 / 36 = 0.8333333333333334')
} else
if (a === 30 && sign === "/" && b === 37 ) {
  console.log('30 / 37 = 0.8108108108108109')
} else
if (a === 30 && sign === "/" && b === 38 ) {
  console.log('30 / 38 = 0.7894736842105263')
} else
if (a === 30 && sign === "/" && b === 39 ) {
  console.log('30 / 39 = 0.7692307692307693')
} else
if (a === 30 && sign === "/" && b === 40 ) {
  console.log('30 / 40 = 0.75')
} else
if (a === 30 && sign === "/" && b === 41 ) {
  console.log('30 / 41 = 0.7317073170731707')
} else
if (a === 30 && sign === "/" && b === 42 ) {
  console.log('30 / 42 = 0.7142857142857143')
} else
if (a === 30 && sign === "/" && b === 43 ) {
  console.log('30 / 43 = 0.6976744186046512')
} else
if (a === 30 && sign === "/" && b === 44 ) {
  console.log('30 / 44 = 0.6818181818181818')
} else
if (a === 30 && sign === "/" && b === 45 ) {
  console.log('30 / 45 = 0.6666666666666666')
} else
if (a === 30 && sign === "/" && b === 46 ) {
  console.log('30 / 46 = 0.6521739130434783')
} else
if (a === 30 && sign === "/" && b === 47 ) {
  console.log('30 / 47 = 0.6382978723404256')
} else
if (a === 30 && sign === "/" && b === 48 ) {
  console.log('30 / 48 = 0.625')
} else
if (a === 30 && sign === "/" && b === 49 ) {
  console.log('30 / 49 = 0.6122448979591837')
} else
if (a === 30 && sign === "/" && b === 50 ) {
  console.log('30 / 50 = 0.6')
} else
if (a === 31 && sign === "/" && b === 1 ) {
  console.log('31 / 1 = 31')
} else
if (a === 31 && sign === "/" && b === 2 ) {
  console.log('31 / 2 = 15.5')
} else
if (a === 31 && sign === "/" && b === 3 ) {
  console.log('31 / 3 = 10.333333333333334')
} else
if (a === 31 && sign === "/" && b === 4 ) {
  console.log('31 / 4 = 7.75')
} else
if (a === 31 && sign === "/" && b === 5 ) {
  console.log('31 / 5 = 6.2')
} else
if (a === 31 && sign === "/" && b === 6 ) {
  console.log('31 / 6 = 5.166666666666667')
} else
if (a === 31 && sign === "/" && b === 7 ) {
  console.log('31 / 7 = 4.428571428571429')
} else
if (a === 31 && sign === "/" && b === 8 ) {
  console.log('31 / 8 = 3.875')
} else
if (a === 31 && sign === "/" && b === 9 ) {
  console.log('31 / 9 = 3.4444444444444446')
} else
if (a === 31 && sign === "/" && b === 10 ) {
  console.log('31 / 10 = 3.1')
} else
if (a === 31 && sign === "/" && b === 11 ) {
  console.log('31 / 11 = 2.8181818181818183')
} else
if (a === 31 && sign === "/" && b === 12 ) {
  console.log('31 / 12 = 2.5833333333333335')
} else
if (a === 31 && sign === "/" && b === 13 ) {
  console.log('31 / 13 = 2.3846153846153846')
} else
if (a === 31 && sign === "/" && b === 14 ) {
  console.log('31 / 14 = 2.2142857142857144')
} else
if (a === 31 && sign === "/" && b === 15 ) {
  console.log('31 / 15 = 2.066666666666667')
} else
if (a === 31 && sign === "/" && b === 16 ) {
  console.log('31 / 16 = 1.9375')
} else
if (a === 31 && sign === "/" && b === 17 ) {
  console.log('31 / 17 = 1.8235294117647058')
} else
if (a === 31 && sign === "/" && b === 18 ) {
  console.log('31 / 18 = 1.7222222222222223')
} else
if (a === 31 && sign === "/" && b === 19 ) {
  console.log('31 / 19 = 1.631578947368421')
} else
if (a === 31 && sign === "/" && b === 20 ) {
  console.log('31 / 20 = 1.55')
} else
if (a === 31 && sign === "/" && b === 21 ) {
  console.log('31 / 21 = 1.4761904761904763')
} else
if (a === 31 && sign === "/" && b === 22 ) {
  console.log('31 / 22 = 1.4090909090909092')
} else
if (a === 31 && sign === "/" && b === 23 ) {
  console.log('31 / 23 = 1.3478260869565217')
} else
if (a === 31 && sign === "/" && b === 24 ) {
  console.log('31 / 24 = 1.2916666666666667')
} else
if (a === 31 && sign === "/" && b === 25 ) {
  console.log('31 / 25 = 1.24')
} else
if (a === 31 && sign === "/" && b === 26 ) {
  console.log('31 / 26 = 1.1923076923076923')
} else
if (a === 31 && sign === "/" && b === 27 ) {
  console.log('31 / 27 = 1.1481481481481481')
} else
if (a === 31 && sign === "/" && b === 28 ) {
  console.log('31 / 28 = 1.1071428571428572')
} else
if (a === 31 && sign === "/" && b === 29 ) {
  console.log('31 / 29 = 1.0689655172413792')
} else
if (a === 31 && sign === "/" && b === 30 ) {
  console.log('31 / 30 = 1.0333333333333334')
} else
if (a === 31 && sign === "/" && b === 31 ) {
  console.log('31 / 31 = 1')
} else
if (a === 31 && sign === "/" && b === 32 ) {
  console.log('31 / 32 = 0.96875')
} else
if (a === 31 && sign === "/" && b === 33 ) {
  console.log('31 / 33 = 0.9393939393939394')
} else
if (a === 31 && sign === "/" && b === 34 ) {
  console.log('31 / 34 = 0.9117647058823529')
} else
if (a === 31 && sign === "/" && b === 35 ) {
  console.log('31 / 35 = 0.8857142857142857')
} else
if (a === 31 && sign === "/" && b === 36 ) {
  console.log('31 / 36 = 0.8611111111111112')
} else
if (a === 31 && sign === "/" && b === 37 ) {
  console.log('31 / 37 = 0.8378378378378378')
} else
if (a === 31 && sign === "/" && b === 38 ) {
  console.log('31 / 38 = 0.8157894736842105')
} else
if (a === 31 && sign === "/" && b === 39 ) {
  console.log('31 / 39 = 0.7948717948717948')
} else
if (a === 31 && sign === "/" && b === 40 ) {
  console.log('31 / 40 = 0.775')
} else
if (a === 31 && sign === "/" && b === 41 ) {
  console.log('31 / 41 = 0.7560975609756098')
} else
if (a === 31 && sign === "/" && b === 42 ) {
  console.log('31 / 42 = 0.7380952380952381')
} else
if (a === 31 && sign === "/" && b === 43 ) {
  console.log('31 / 43 = 0.7209302325581395')
} else
if (a === 31 && sign === "/" && b === 44 ) {
  console.log('31 / 44 = 0.7045454545454546')
} else
if (a === 31 && sign === "/" && b === 45 ) {
  console.log('31 / 45 = 0.6888888888888889')
} else
if (a === 31 && sign === "/" && b === 46 ) {
  console.log('31 / 46 = 0.6739130434782609')
} else
if (a === 31 && sign === "/" && b === 47 ) {
  console.log('31 / 47 = 0.6595744680851063')
} else
if (a === 31 && sign === "/" && b === 48 ) {
  console.log('31 / 48 = 0.6458333333333334')
} else
if (a === 31 && sign === "/" && b === 49 ) {
  console.log('31 / 49 = 0.6326530612244898')
} else
if (a === 31 && sign === "/" && b === 50 ) {
  console.log('31 / 50 = 0.62')
} else
if (a === 32 && sign === "/" && b === 1 ) {
  console.log('32 / 1 = 32')
} else
if (a === 32 && sign === "/" && b === 2 ) {
  console.log('32 / 2 = 16')
} else
if (a === 32 && sign === "/" && b === 3 ) {
  console.log('32 / 3 = 10.666666666666666')
} else
if (a === 32 && sign === "/" && b === 4 ) {
  console.log('32 / 4 = 8')
} else
if (a === 32 && sign === "/" && b === 5 ) {
  console.log('32 / 5 = 6.4')
} else
if (a === 32 && sign === "/" && b === 6 ) {
  console.log('32 / 6 = 5.333333333333333')
} else
if (a === 32 && sign === "/" && b === 7 ) {
  console.log('32 / 7 = 4.571428571428571')
} else
if (a === 32 && sign === "/" && b === 8 ) {
  console.log('32 / 8 = 4')
} else
if (a === 32 && sign === "/" && b === 9 ) {
  console.log('32 / 9 = 3.5555555555555554')
} else
if (a === 32 && sign === "/" && b === 10 ) {
  console.log('32 / 10 = 3.2')
} else
if (a === 32 && sign === "/" && b === 11 ) {
  console.log('32 / 11 = 2.909090909090909')
} else
if (a === 32 && sign === "/" && b === 12 ) {
  console.log('32 / 12 = 2.6666666666666665')
} else
if (a === 32 && sign === "/" && b === 13 ) {
  console.log('32 / 13 = 2.4615384615384617')
} else
if (a === 32 && sign === "/" && b === 14 ) {
  console.log('32 / 14 = 2.2857142857142856')
} else
if (a === 32 && sign === "/" && b === 15 ) {
  console.log('32 / 15 = 2.1333333333333333')
} else
if (a === 32 && sign === "/" && b === 16 ) {
  console.log('32 / 16 = 2')
} else
if (a === 32 && sign === "/" && b === 17 ) {
  console.log('32 / 17 = 1.8823529411764706')
} else
if (a === 32 && sign === "/" && b === 18 ) {
  console.log('32 / 18 = 1.7777777777777777')
} else
if (a === 32 && sign === "/" && b === 19 ) {
  console.log('32 / 19 = 1.6842105263157894')
} else
if (a === 32 && sign === "/" && b === 20 ) {
  console.log('32 / 20 = 1.6')
} else
if (a === 32 && sign === "/" && b === 21 ) {
  console.log('32 / 21 = 1.5238095238095237')
} else
if (a === 32 && sign === "/" && b === 22 ) {
  console.log('32 / 22 = 1.4545454545454546')
} else
if (a === 32 && sign === "/" && b === 23 ) {
  console.log('32 / 23 = 1.391304347826087')
} else
if (a === 32 && sign === "/" && b === 24 ) {
  console.log('32 / 24 = 1.3333333333333333')
} else
if (a === 32 && sign === "/" && b === 25 ) {
  console.log('32 / 25 = 1.28')
} else
if (a === 32 && sign === "/" && b === 26 ) {
  console.log('32 / 26 = 1.2307692307692308')
} else
if (a === 32 && sign === "/" && b === 27 ) {
  console.log('32 / 27 = 1.1851851851851851')
} else
if (a === 32 && sign === "/" && b === 28 ) {
  console.log('32 / 28 = 1.1428571428571428')
} else
if (a === 32 && sign === "/" && b === 29 ) {
  console.log('32 / 29 = 1.103448275862069')
} else
if (a === 32 && sign === "/" && b === 30 ) {
  console.log('32 / 30 = 1.0666666666666667')
} else
if (a === 32 && sign === "/" && b === 31 ) {
  console.log('32 / 31 = 1.032258064516129')
} else
if (a === 32 && sign === "/" && b === 32 ) {
  console.log('32 / 32 = 1')
} else
if (a === 32 && sign === "/" && b === 33 ) {
  console.log('32 / 33 = 0.9696969696969697')
} else
if (a === 32 && sign === "/" && b === 34 ) {
  console.log('32 / 34 = 0.9411764705882353')
} else
if (a === 32 && sign === "/" && b === 35 ) {
  console.log('32 / 35 = 0.9142857142857143')
} else
if (a === 32 && sign === "/" && b === 36 ) {
  console.log('32 / 36 = 0.8888888888888888')
} else
if (a === 32 && sign === "/" && b === 37 ) {
  console.log('32 / 37 = 0.8648648648648649')
} else
if (a === 32 && sign === "/" && b === 38 ) {
  console.log('32 / 38 = 0.8421052631578947')
} else
if (a === 32 && sign === "/" && b === 39 ) {
  console.log('32 / 39 = 0.8205128205128205')
} else
if (a === 32 && sign === "/" && b === 40 ) {
  console.log('32 / 40 = 0.8')
} else
if (a === 32 && sign === "/" && b === 41 ) {
  console.log('32 / 41 = 0.7804878048780488')
} else
if (a === 32 && sign === "/" && b === 42 ) {
  console.log('32 / 42 = 0.7619047619047619')
} else
if (a === 32 && sign === "/" && b === 43 ) {
  console.log('32 / 43 = 0.7441860465116279')
} else
if (a === 32 && sign === "/" && b === 44 ) {
  console.log('32 / 44 = 0.7272727272727273')
} else
if (a === 32 && sign === "/" && b === 45 ) {
  console.log('32 / 45 = 0.7111111111111111')
} else
if (a === 32 && sign === "/" && b === 46 ) {
  console.log('32 / 46 = 0.6956521739130435')
} else
if (a === 32 && sign === "/" && b === 47 ) {
  console.log('32 / 47 = 0.6808510638297872')
} else
if (a === 32 && sign === "/" && b === 48 ) {
  console.log('32 / 48 = 0.6666666666666666')
} else
if (a === 32 && sign === "/" && b === 49 ) {
  console.log('32 / 49 = 0.6530612244897959')
} else
if (a === 32 && sign === "/" && b === 50 ) {
  console.log('32 / 50 = 0.64')
} else
if (a === 33 && sign === "/" && b === 1 ) {
  console.log('33 / 1 = 33')
} else
if (a === 33 && sign === "/" && b === 2 ) {
  console.log('33 / 2 = 16.5')
} else
if (a === 33 && sign === "/" && b === 3 ) {
  console.log('33 / 3 = 11')
} else
if (a === 33 && sign === "/" && b === 4 ) {
  console.log('33 / 4 = 8.25')
} else
if (a === 33 && sign === "/" && b === 5 ) {
  console.log('33 / 5 = 6.6')
} else
if (a === 33 && sign === "/" && b === 6 ) {
  console.log('33 / 6 = 5.5')
} else
if (a === 33 && sign === "/" && b === 7 ) {
  console.log('33 / 7 = 4.714285714285714')
} else
if (a === 33 && sign === "/" && b === 8 ) {
  console.log('33 / 8 = 4.125')
} else
if (a === 33 && sign === "/" && b === 9 ) {
  console.log('33 / 9 = 3.6666666666666665')
} else
if (a === 33 && sign === "/" && b === 10 ) {
  console.log('33 / 10 = 3.3')
} else
if (a === 33 && sign === "/" && b === 11 ) {
  console.log('33 / 11 = 3')
} else
if (a === 33 && sign === "/" && b === 12 ) {
  console.log('33 / 12 = 2.75')
} else
if (a === 33 && sign === "/" && b === 13 ) {
  console.log('33 / 13 = 2.5384615384615383')
} else
if (a === 33 && sign === "/" && b === 14 ) {
  console.log('33 / 14 = 2.357142857142857')
} else
if (a === 33 && sign === "/" && b === 15 ) {
  console.log('33 / 15 = 2.2')
} else
if (a === 33 && sign === "/" && b === 16 ) {
  console.log('33 / 16 = 2.0625')
} else
if (a === 33 && sign === "/" && b === 17 ) {
  console.log('33 / 17 = 1.9411764705882353')
} else
if (a === 33 && sign === "/" && b === 18 ) {
  console.log('33 / 18 = 1.8333333333333333')
} else
if (a === 33 && sign === "/" && b === 19 ) {
  console.log('33 / 19 = 1.736842105263158')
} else
if (a === 33 && sign === "/" && b === 20 ) {
  console.log('33 / 20 = 1.65')
} else
if (a === 33 && sign === "/" && b === 21 ) {
  console.log('33 / 21 = 1.5714285714285714')
} else
if (a === 33 && sign === "/" && b === 22 ) {
  console.log('33 / 22 = 1.5')
} else
if (a === 33 && sign === "/" && b === 23 ) {
  console.log('33 / 23 = 1.434782608695652')
} else
if (a === 33 && sign === "/" && b === 24 ) {
  console.log('33 / 24 = 1.375')
} else
if (a === 33 && sign === "/" && b === 25 ) {
  console.log('33 / 25 = 1.32')
} else
if (a === 33 && sign === "/" && b === 26 ) {
  console.log('33 / 26 = 1.2692307692307692')
} else
if (a === 33 && sign === "/" && b === 27 ) {
  console.log('33 / 27 = 1.2222222222222223')
} else
if (a === 33 && sign === "/" && b === 28 ) {
  console.log('33 / 28 = 1.1785714285714286')
} else
if (a === 33 && sign === "/" && b === 29 ) {
  console.log('33 / 29 = 1.1379310344827587')
} else
if (a === 33 && sign === "/" && b === 30 ) {
  console.log('33 / 30 = 1.1')
} else
if (a === 33 && sign === "/" && b === 31 ) {
  console.log('33 / 31 = 1.064516129032258')
} else
if (a === 33 && sign === "/" && b === 32 ) {
  console.log('33 / 32 = 1.03125')
} else
if (a === 33 && sign === "/" && b === 33 ) {
  console.log('33 / 33 = 1')
} else
if (a === 33 && sign === "/" && b === 34 ) {
  console.log('33 / 34 = 0.9705882352941176')
} else
if (a === 33 && sign === "/" && b === 35 ) {
  console.log('33 / 35 = 0.9428571428571428')
} else
if (a === 33 && sign === "/" && b === 36 ) {
  console.log('33 / 36 = 0.9166666666666666')
} else
if (a === 33 && sign === "/" && b === 37 ) {
  console.log('33 / 37 = 0.8918918918918919')
} else
if (a === 33 && sign === "/" && b === 38 ) {
  console.log('33 / 38 = 0.868421052631579')
} else
if (a === 33 && sign === "/" && b === 39 ) {
  console.log('33 / 39 = 0.8461538461538461')
} else
if (a === 33 && sign === "/" && b === 40 ) {
  console.log('33 / 40 = 0.825')
} else
if (a === 33 && sign === "/" && b === 41 ) {
  console.log('33 / 41 = 0.8048780487804879')
} else
if (a === 33 && sign === "/" && b === 42 ) {
  console.log('33 / 42 = 0.7857142857142857')
} else
if (a === 33 && sign === "/" && b === 43 ) {
  console.log('33 / 43 = 0.7674418604651163')
} else
if (a === 33 && sign === "/" && b === 44 ) {
  console.log('33 / 44 = 0.75')
} else
if (a === 33 && sign === "/" && b === 45 ) {
  console.log('33 / 45 = 0.7333333333333333')
} else
if (a === 33 && sign === "/" && b === 46 ) {
  console.log('33 / 46 = 0.717391304347826')
} else
if (a === 33 && sign === "/" && b === 47 ) {
  console.log('33 / 47 = 0.7021276595744681')
} else
if (a === 33 && sign === "/" && b === 48 ) {
  console.log('33 / 48 = 0.6875')
} else
if (a === 33 && sign === "/" && b === 49 ) {
  console.log('33 / 49 = 0.673469387755102')
} else
if (a === 33 && sign === "/" && b === 50 ) {
  console.log('33 / 50 = 0.66')
} else
if (a === 34 && sign === "/" && b === 1 ) {
  console.log('34 / 1 = 34')
} else
if (a === 34 && sign === "/" && b === 2 ) {
  console.log('34 / 2 = 17')
} else
if (a === 34 && sign === "/" && b === 3 ) {
  console.log('34 / 3 = 11.333333333333334')
} else
if (a === 34 && sign === "/" && b === 4 ) {
  console.log('34 / 4 = 8.5')
} else
if (a === 34 && sign === "/" && b === 5 ) {
  console.log('34 / 5 = 6.8')
} else
if (a === 34 && sign === "/" && b === 6 ) {
  console.log('34 / 6 = 5.666666666666667')
} else
if (a === 34 && sign === "/" && b === 7 ) {
  console.log('34 / 7 = 4.857142857142857')
} else
if (a === 34 && sign === "/" && b === 8 ) {
  console.log('34 / 8 = 4.25')
} else
if (a === 34 && sign === "/" && b === 9 ) {
  console.log('34 / 9 = 3.7777777777777777')
} else
if (a === 34 && sign === "/" && b === 10 ) {
  console.log('34 / 10 = 3.4')
} else
if (a === 34 && sign === "/" && b === 11 ) {
  console.log('34 / 11 = 3.090909090909091')
} else
if (a === 34 && sign === "/" && b === 12 ) {
  console.log('34 / 12 = 2.8333333333333335')
} else
if (a === 34 && sign === "/" && b === 13 ) {
  console.log('34 / 13 = 2.6153846153846154')
} else
if (a === 34 && sign === "/" && b === 14 ) {
  console.log('34 / 14 = 2.4285714285714284')
} else
if (a === 34 && sign === "/" && b === 15 ) {
  console.log('34 / 15 = 2.2666666666666666')
} else
if (a === 34 && sign === "/" && b === 16 ) {
  console.log('34 / 16 = 2.125')
} else
if (a === 34 && sign === "/" && b === 17 ) {
  console.log('34 / 17 = 2')
} else
if (a === 34 && sign === "/" && b === 18 ) {
  console.log('34 / 18 = 1.8888888888888888')
} else
if (a === 34 && sign === "/" && b === 19 ) {
  console.log('34 / 19 = 1.7894736842105263')
} else
if (a === 34 && sign === "/" && b === 20 ) {
  console.log('34 / 20 = 1.7')
} else
if (a === 34 && sign === "/" && b === 21 ) {
  console.log('34 / 21 = 1.619047619047619')
} else
if (a === 34 && sign === "/" && b === 22 ) {
  console.log('34 / 22 = 1.5454545454545454')
} else
if (a === 34 && sign === "/" && b === 23 ) {
  console.log('34 / 23 = 1.4782608695652173')
} else
if (a === 34 && sign === "/" && b === 24 ) {
  console.log('34 / 24 = 1.4166666666666667')
} else
if (a === 34 && sign === "/" && b === 25 ) {
  console.log('34 / 25 = 1.36')
} else
if (a === 34 && sign === "/" && b === 26 ) {
  console.log('34 / 26 = 1.3076923076923077')
} else
if (a === 34 && sign === "/" && b === 27 ) {
  console.log('34 / 27 = 1.2592592592592593')
} else
if (a === 34 && sign === "/" && b === 28 ) {
  console.log('34 / 28 = 1.2142857142857142')
} else
if (a === 34 && sign === "/" && b === 29 ) {
  console.log('34 / 29 = 1.1724137931034482')
} else
if (a === 34 && sign === "/" && b === 30 ) {
  console.log('34 / 30 = 1.1333333333333333')
} else
if (a === 34 && sign === "/" && b === 31 ) {
  console.log('34 / 31 = 1.096774193548387')
} else
if (a === 34 && sign === "/" && b === 32 ) {
  console.log('34 / 32 = 1.0625')
} else
if (a === 34 && sign === "/" && b === 33 ) {
  console.log('34 / 33 = 1.0303030303030303')
} else
if (a === 34 && sign === "/" && b === 34 ) {
  console.log('34 / 34 = 1')
} else
if (a === 34 && sign === "/" && b === 35 ) {
  console.log('34 / 35 = 0.9714285714285714')
} else
if (a === 34 && sign === "/" && b === 36 ) {
  console.log('34 / 36 = 0.9444444444444444')
} else
if (a === 34 && sign === "/" && b === 37 ) {
  console.log('34 / 37 = 0.918918918918919')
} else
if (a === 34 && sign === "/" && b === 38 ) {
  console.log('34 / 38 = 0.8947368421052632')
} else
if (a === 34 && sign === "/" && b === 39 ) {
  console.log('34 / 39 = 0.8717948717948718')
} else
if (a === 34 && sign === "/" && b === 40 ) {
  console.log('34 / 40 = 0.85')
} else
if (a === 34 && sign === "/" && b === 41 ) {
  console.log('34 / 41 = 0.8292682926829268')
} else
if (a === 34 && sign === "/" && b === 42 ) {
  console.log('34 / 42 = 0.8095238095238095')
} else
if (a === 34 && sign === "/" && b === 43 ) {
  console.log('34 / 43 = 0.7906976744186046')
} else
if (a === 34 && sign === "/" && b === 44 ) {
  console.log('34 / 44 = 0.7727272727272727')
} else
if (a === 34 && sign === "/" && b === 45 ) {
  console.log('34 / 45 = 0.7555555555555555')
} else
if (a === 34 && sign === "/" && b === 46 ) {
  console.log('34 / 46 = 0.7391304347826086')
} else
if (a === 34 && sign === "/" && b === 47 ) {
  console.log('34 / 47 = 0.723404255319149')
} else
if (a === 34 && sign === "/" && b === 48 ) {
  console.log('34 / 48 = 0.7083333333333334')
} else
if (a === 34 && sign === "/" && b === 49 ) {
  console.log('34 / 49 = 0.6938775510204082')
} else
if (a === 34 && sign === "/" && b === 50 ) {
  console.log('34 / 50 = 0.68')
} else
if (a === 35 && sign === "/" && b === 1 ) {
  console.log('35 / 1 = 35')
} else
if (a === 35 && sign === "/" && b === 2 ) {
  console.log('35 / 2 = 17.5')
} else
if (a === 35 && sign === "/" && b === 3 ) {
  console.log('35 / 3 = 11.666666666666666')
} else
if (a === 35 && sign === "/" && b === 4 ) {
  console.log('35 / 4 = 8.75')
} else
if (a === 35 && sign === "/" && b === 5 ) {
  console.log('35 / 5 = 7')
} else
if (a === 35 && sign === "/" && b === 6 ) {
  console.log('35 / 6 = 5.833333333333333')
} else
if (a === 35 && sign === "/" && b === 7 ) {
  console.log('35 / 7 = 5')
} else
if (a === 35 && sign === "/" && b === 8 ) {
  console.log('35 / 8 = 4.375')
} else
if (a === 35 && sign === "/" && b === 9 ) {
  console.log('35 / 9 = 3.888888888888889')
} else
if (a === 35 && sign === "/" && b === 10 ) {
  console.log('35 / 10 = 3.5')
} else
if (a === 35 && sign === "/" && b === 11 ) {
  console.log('35 / 11 = 3.1818181818181817')
} else
if (a === 35 && sign === "/" && b === 12 ) {
  console.log('35 / 12 = 2.9166666666666665')
} else
if (a === 35 && sign === "/" && b === 13 ) {
  console.log('35 / 13 = 2.6923076923076925')
} else
if (a === 35 && sign === "/" && b === 14 ) {
  console.log('35 / 14 = 2.5')
} else
if (a === 35 && sign === "/" && b === 15 ) {
  console.log('35 / 15 = 2.3333333333333335')
} else
if (a === 35 && sign === "/" && b === 16 ) {
  console.log('35 / 16 = 2.1875')
} else
if (a === 35 && sign === "/" && b === 17 ) {
  console.log('35 / 17 = 2.0588235294117645')
} else
if (a === 35 && sign === "/" && b === 18 ) {
  console.log('35 / 18 = 1.9444444444444444')
} else
if (a === 35 && sign === "/" && b === 19 ) {
  console.log('35 / 19 = 1.8421052631578947')
} else
if (a === 35 && sign === "/" && b === 20 ) {
  console.log('35 / 20 = 1.75')
} else
if (a === 35 && sign === "/" && b === 21 ) {
  console.log('35 / 21 = 1.6666666666666667')
} else
if (a === 35 && sign === "/" && b === 22 ) {
  console.log('35 / 22 = 1.5909090909090908')
} else
if (a === 35 && sign === "/" && b === 23 ) {
  console.log('35 / 23 = 1.5217391304347827')
} else
if (a === 35 && sign === "/" && b === 24 ) {
  console.log('35 / 24 = 1.4583333333333333')
} else
if (a === 35 && sign === "/" && b === 25 ) {
  console.log('35 / 25 = 1.4')
} else
if (a === 35 && sign === "/" && b === 26 ) {
  console.log('35 / 26 = 1.3461538461538463')
} else
if (a === 35 && sign === "/" && b === 27 ) {
  console.log('35 / 27 = 1.2962962962962963')
} else
if (a === 35 && sign === "/" && b === 28 ) {
  console.log('35 / 28 = 1.25')
} else
if (a === 35 && sign === "/" && b === 29 ) {
  console.log('35 / 29 = 1.206896551724138')
} else
if (a === 35 && sign === "/" && b === 30 ) {
  console.log('35 / 30 = 1.1666666666666667')
} else
if (a === 35 && sign === "/" && b === 31 ) {
  console.log('35 / 31 = 1.1290322580645162')
} else
if (a === 35 && sign === "/" && b === 32 ) {
  console.log('35 / 32 = 1.09375')
} else
if (a === 35 && sign === "/" && b === 33 ) {
  console.log('35 / 33 = 1.0606060606060606')
} else
if (a === 35 && sign === "/" && b === 34 ) {
  console.log('35 / 34 = 1.0294117647058822')
} else
if (a === 35 && sign === "/" && b === 35 ) {
  console.log('35 / 35 = 1')
} else
if (a === 35 && sign === "/" && b === 36 ) {
  console.log('35 / 36 = 0.9722222222222222')
} else
if (a === 35 && sign === "/" && b === 37 ) {
  console.log('35 / 37 = 0.9459459459459459')
} else
if (a === 35 && sign === "/" && b === 38 ) {
  console.log('35 / 38 = 0.9210526315789473')
} else
if (a === 35 && sign === "/" && b === 39 ) {
  console.log('35 / 39 = 0.8974358974358975')
} else
if (a === 35 && sign === "/" && b === 40 ) {
  console.log('35 / 40 = 0.875')
} else
if (a === 35 && sign === "/" && b === 41 ) {
  console.log('35 / 41 = 0.8536585365853658')
} else
if (a === 35 && sign === "/" && b === 42 ) {
  console.log('35 / 42 = 0.8333333333333334')
} else
if (a === 35 && sign === "/" && b === 43 ) {
  console.log('35 / 43 = 0.813953488372093')
} else
if (a === 35 && sign === "/" && b === 44 ) {
  console.log('35 / 44 = 0.7954545454545454')
} else
if (a === 35 && sign === "/" && b === 45 ) {
  console.log('35 / 45 = 0.7777777777777778')
} else
if (a === 35 && sign === "/" && b === 46 ) {
  console.log('35 / 46 = 0.7608695652173914')
} else
if (a === 35 && sign === "/" && b === 47 ) {
  console.log('35 / 47 = 0.7446808510638298')
} else
if (a === 35 && sign === "/" && b === 48 ) {
  console.log('35 / 48 = 0.7291666666666666')
} else
if (a === 35 && sign === "/" && b === 49 ) {
  console.log('35 / 49 = 0.7142857142857143')
} else
if (a === 35 && sign === "/" && b === 50 ) {
  console.log('35 / 50 = 0.7')
} else
if (a === 36 && sign === "/" && b === 1 ) {
  console.log('36 / 1 = 36')
} else
if (a === 36 && sign === "/" && b === 2 ) {
  console.log('36 / 2 = 18')
} else
if (a === 36 && sign === "/" && b === 3 ) {
  console.log('36 / 3 = 12')
} else
if (a === 36 && sign === "/" && b === 4 ) {
  console.log('36 / 4 = 9')
} else
if (a === 36 && sign === "/" && b === 5 ) {
  console.log('36 / 5 = 7.2')
} else
if (a === 36 && sign === "/" && b === 6 ) {
  console.log('36 / 6 = 6')
} else
if (a === 36 && sign === "/" && b === 7 ) {
  console.log('36 / 7 = 5.142857142857143')
} else
if (a === 36 && sign === "/" && b === 8 ) {
  console.log('36 / 8 = 4.5')
} else
if (a === 36 && sign === "/" && b === 9 ) {
  console.log('36 / 9 = 4')
} else
if (a === 36 && sign === "/" && b === 10 ) {
  console.log('36 / 10 = 3.6')
} else
if (a === 36 && sign === "/" && b === 11 ) {
  console.log('36 / 11 = 3.272727272727273')
} else
if (a === 36 && sign === "/" && b === 12 ) {
  console.log('36 / 12 = 3')
} else
if (a === 36 && sign === "/" && b === 13 ) {
  console.log('36 / 13 = 2.769230769230769')
} else
if (a === 36 && sign === "/" && b === 14 ) {
  console.log('36 / 14 = 2.5714285714285716')
} else
if (a === 36 && sign === "/" && b === 15 ) {
  console.log('36 / 15 = 2.4')
} else
if (a === 36 && sign === "/" && b === 16 ) {
  console.log('36 / 16 = 2.25')
} else
if (a === 36 && sign === "/" && b === 17 ) {
  console.log('36 / 17 = 2.1176470588235294')
} else
if (a === 36 && sign === "/" && b === 18 ) {
  console.log('36 / 18 = 2')
} else
if (a === 36 && sign === "/" && b === 19 ) {
  console.log('36 / 19 = 1.894736842105263')
} else
if (a === 36 && sign === "/" && b === 20 ) {
  console.log('36 / 20 = 1.8')
} else
if (a === 36 && sign === "/" && b === 21 ) {
  console.log('36 / 21 = 1.7142857142857142')
} else
if (a === 36 && sign === "/" && b === 22 ) {
  console.log('36 / 22 = 1.6363636363636365')
} else
if (a === 36 && sign === "/" && b === 23 ) {
  console.log('36 / 23 = 1.565217391304348')
} else
if (a === 36 && sign === "/" && b === 24 ) {
  console.log('36 / 24 = 1.5')
} else
if (a === 36 && sign === "/" && b === 25 ) {
  console.log('36 / 25 = 1.44')
} else
if (a === 36 && sign === "/" && b === 26 ) {
  console.log('36 / 26 = 1.3846153846153846')
} else
if (a === 36 && sign === "/" && b === 27 ) {
  console.log('36 / 27 = 1.3333333333333333')
} else
if (a === 36 && sign === "/" && b === 28 ) {
  console.log('36 / 28 = 1.2857142857142858')
} else
if (a === 36 && sign === "/" && b === 29 ) {
  console.log('36 / 29 = 1.2413793103448276')
} else
if (a === 36 && sign === "/" && b === 30 ) {
  console.log('36 / 30 = 1.2')
} else
if (a === 36 && sign === "/" && b === 31 ) {
  console.log('36 / 31 = 1.1612903225806452')
} else
if (a === 36 && sign === "/" && b === 32 ) {
  console.log('36 / 32 = 1.125')
} else
if (a === 36 && sign === "/" && b === 33 ) {
  console.log('36 / 33 = 1.0909090909090908')
} else
if (a === 36 && sign === "/" && b === 34 ) {
  console.log('36 / 34 = 1.0588235294117647')
} else
if (a === 36 && sign === "/" && b === 35 ) {
  console.log('36 / 35 = 1.0285714285714285')
} else
if (a === 36 && sign === "/" && b === 36 ) {
  console.log('36 / 36 = 1')
} else
if (a === 36 && sign === "/" && b === 37 ) {
  console.log('36 / 37 = 0.972972972972973')
} else
if (a === 36 && sign === "/" && b === 38 ) {
  console.log('36 / 38 = 0.9473684210526315')
} else
if (a === 36 && sign === "/" && b === 39 ) {
  console.log('36 / 39 = 0.9230769230769231')
} else
if (a === 36 && sign === "/" && b === 40 ) {
  console.log('36 / 40 = 0.9')
} else
if (a === 36 && sign === "/" && b === 41 ) {
  console.log('36 / 41 = 0.8780487804878049')
} else
if (a === 36 && sign === "/" && b === 42 ) {
  console.log('36 / 42 = 0.8571428571428571')
} else
if (a === 36 && sign === "/" && b === 43 ) {
  console.log('36 / 43 = 0.8372093023255814')
} else
if (a === 36 && sign === "/" && b === 44 ) {
  console.log('36 / 44 = 0.8181818181818182')
} else
if (a === 36 && sign === "/" && b === 45 ) {
  console.log('36 / 45 = 0.8')
} else
if (a === 36 && sign === "/" && b === 46 ) {
  console.log('36 / 46 = 0.782608695652174')
} else
if (a === 36 && sign === "/" && b === 47 ) {
  console.log('36 / 47 = 0.7659574468085106')
} else
if (a === 36 && sign === "/" && b === 48 ) {
  console.log('36 / 48 = 0.75')
} else
if (a === 36 && sign === "/" && b === 49 ) {
  console.log('36 / 49 = 0.7346938775510204')
} else
if (a === 36 && sign === "/" && b === 50 ) {
  console.log('36 / 50 = 0.72')
} else
if (a === 37 && sign === "/" && b === 1 ) {
  console.log('37 / 1 = 37')
} else
if (a === 37 && sign === "/" && b === 2 ) {
  console.log('37 / 2 = 18.5')
} else
if (a === 37 && sign === "/" && b === 3 ) {
  console.log('37 / 3 = 12.333333333333334')
} else
if (a === 37 && sign === "/" && b === 4 ) {
  console.log('37 / 4 = 9.25')
} else
if (a === 37 && sign === "/" && b === 5 ) {
  console.log('37 / 5 = 7.4')
} else
if (a === 37 && sign === "/" && b === 6 ) {
  console.log('37 / 6 = 6.166666666666667')
} else
if (a === 37 && sign === "/" && b === 7 ) {
  console.log('37 / 7 = 5.285714285714286')
} else
if (a === 37 && sign === "/" && b === 8 ) {
  console.log('37 / 8 = 4.625')
} else
if (a === 37 && sign === "/" && b === 9 ) {
  console.log('37 / 9 = 4.111111111111111')
} else
if (a === 37 && sign === "/" && b === 10 ) {
  console.log('37 / 10 = 3.7')
} else
if (a === 37 && sign === "/" && b === 11 ) {
  console.log('37 / 11 = 3.3636363636363638')
} else
if (a === 37 && sign === "/" && b === 12 ) {
  console.log('37 / 12 = 3.0833333333333335')
} else
if (a === 37 && sign === "/" && b === 13 ) {
  console.log('37 / 13 = 2.8461538461538463')
} else
if (a === 37 && sign === "/" && b === 14 ) {
  console.log('37 / 14 = 2.642857142857143')
} else
if (a === 37 && sign === "/" && b === 15 ) {
  console.log('37 / 15 = 2.466666666666667')
} else
if (a === 37 && sign === "/" && b === 16 ) {
  console.log('37 / 16 = 2.3125')
} else
if (a === 37 && sign === "/" && b === 17 ) {
  console.log('37 / 17 = 2.176470588235294')
} else
if (a === 37 && sign === "/" && b === 18 ) {
  console.log('37 / 18 = 2.0555555555555554')
} else
if (a === 37 && sign === "/" && b === 19 ) {
  console.log('37 / 19 = 1.9473684210526316')
} else
if (a === 37 && sign === "/" && b === 20 ) {
  console.log('37 / 20 = 1.85')
} else
if (a === 37 && sign === "/" && b === 21 ) {
  console.log('37 / 21 = 1.7619047619047619')
} else
if (a === 37 && sign === "/" && b === 22 ) {
  console.log('37 / 22 = 1.6818181818181819')
} else
if (a === 37 && sign === "/" && b === 23 ) {
  console.log('37 / 23 = 1.608695652173913')
} else
if (a === 37 && sign === "/" && b === 24 ) {
  console.log('37 / 24 = 1.5416666666666667')
} else
if (a === 37 && sign === "/" && b === 25 ) {
  console.log('37 / 25 = 1.48')
} else
if (a === 37 && sign === "/" && b === 26 ) {
  console.log('37 / 26 = 1.4230769230769231')
} else
if (a === 37 && sign === "/" && b === 27 ) {
  console.log('37 / 27 = 1.3703703703703705')
} else
if (a === 37 && sign === "/" && b === 28 ) {
  console.log('37 / 28 = 1.3214285714285714')
} else
if (a === 37 && sign === "/" && b === 29 ) {
  console.log('37 / 29 = 1.2758620689655173')
} else
if (a === 37 && sign === "/" && b === 30 ) {
  console.log('37 / 30 = 1.2333333333333334')
} else
if (a === 37 && sign === "/" && b === 31 ) {
  console.log('37 / 31 = 1.1935483870967742')
} else
if (a === 37 && sign === "/" && b === 32 ) {
  console.log('37 / 32 = 1.15625')
} else
if (a === 37 && sign === "/" && b === 33 ) {
  console.log('37 / 33 = 1.121212121212121')
} else
if (a === 37 && sign === "/" && b === 34 ) {
  console.log('37 / 34 = 1.088235294117647')
} else
if (a === 37 && sign === "/" && b === 35 ) {
  console.log('37 / 35 = 1.0571428571428572')
} else
if (a === 37 && sign === "/" && b === 36 ) {
  console.log('37 / 36 = 1.0277777777777777')
} else
if (a === 37 && sign === "/" && b === 37 ) {
  console.log('37 / 37 = 1')
} else
if (a === 37 && sign === "/" && b === 38 ) {
  console.log('37 / 38 = 0.9736842105263158')
} else
if (a === 37 && sign === "/" && b === 39 ) {
  console.log('37 / 39 = 0.9487179487179487')
} else
if (a === 37 && sign === "/" && b === 40 ) {
  console.log('37 / 40 = 0.925')
} else
if (a === 37 && sign === "/" && b === 41 ) {
  console.log('37 / 41 = 0.9024390243902439')
} else
if (a === 37 && sign === "/" && b === 42 ) {
  console.log('37 / 42 = 0.8809523809523809')
} else
if (a === 37 && sign === "/" && b === 43 ) {
  console.log('37 / 43 = 0.8604651162790697')
} else
if (a === 37 && sign === "/" && b === 44 ) {
  console.log('37 / 44 = 0.8409090909090909')
} else
if (a === 37 && sign === "/" && b === 45 ) {
  console.log('37 / 45 = 0.8222222222222222')
} else
if (a === 37 && sign === "/" && b === 46 ) {
  console.log('37 / 46 = 0.8043478260869565')
} else
if (a === 37 && sign === "/" && b === 47 ) {
  console.log('37 / 47 = 0.7872340425531915')
} else
if (a === 37 && sign === "/" && b === 48 ) {
  console.log('37 / 48 = 0.7708333333333334')
} else
if (a === 37 && sign === "/" && b === 49 ) {
  console.log('37 / 49 = 0.7551020408163265')
} else
if (a === 37 && sign === "/" && b === 50 ) {
  console.log('37 / 50 = 0.74')
} else
if (a === 38 && sign === "/" && b === 1 ) {
  console.log('38 / 1 = 38')
} else
if (a === 38 && sign === "/" && b === 2 ) {
  console.log('38 / 2 = 19')
} else
if (a === 38 && sign === "/" && b === 3 ) {
  console.log('38 / 3 = 12.666666666666666')
} else
if (a === 38 && sign === "/" && b === 4 ) {
  console.log('38 / 4 = 9.5')
} else
if (a === 38 && sign === "/" && b === 5 ) {
  console.log('38 / 5 = 7.6')
} else
if (a === 38 && sign === "/" && b === 6 ) {
  console.log('38 / 6 = 6.333333333333333')
} else
if (a === 38 && sign === "/" && b === 7 ) {
  console.log('38 / 7 = 5.428571428571429')
} else
if (a === 38 && sign === "/" && b === 8 ) {
  console.log('38 / 8 = 4.75')
} else
if (a === 38 && sign === "/" && b === 9 ) {
  console.log('38 / 9 = 4.222222222222222')
} else
if (a === 38 && sign === "/" && b === 10 ) {
  console.log('38 / 10 = 3.8')
} else
if (a === 38 && sign === "/" && b === 11 ) {
  console.log('38 / 11 = 3.4545454545454546')
} else
if (a === 38 && sign === "/" && b === 12 ) {
  console.log('38 / 12 = 3.1666666666666665')
} else
if (a === 38 && sign === "/" && b === 13 ) {
  console.log('38 / 13 = 2.923076923076923')
} else
if (a === 38 && sign === "/" && b === 14 ) {
  console.log('38 / 14 = 2.7142857142857144')
} else
if (a === 38 && sign === "/" && b === 15 ) {
  console.log('38 / 15 = 2.533333333333333')
} else
if (a === 38 && sign === "/" && b === 16 ) {
  console.log('38 / 16 = 2.375')
} else
if (a === 38 && sign === "/" && b === 17 ) {
  console.log('38 / 17 = 2.235294117647059')
} else
if (a === 38 && sign === "/" && b === 18 ) {
  console.log('38 / 18 = 2.111111111111111')
} else
if (a === 38 && sign === "/" && b === 19 ) {
  console.log('38 / 19 = 2')
} else
if (a === 38 && sign === "/" && b === 20 ) {
  console.log('38 / 20 = 1.9')
} else
if (a === 38 && sign === "/" && b === 21 ) {
  console.log('38 / 21 = 1.8095238095238095')
} else
if (a === 38 && sign === "/" && b === 22 ) {
  console.log('38 / 22 = 1.7272727272727273')
} else
if (a === 38 && sign === "/" && b === 23 ) {
  console.log('38 / 23 = 1.6521739130434783')
} else
if (a === 38 && sign === "/" && b === 24 ) {
  console.log('38 / 24 = 1.5833333333333333')
} else
if (a === 38 && sign === "/" && b === 25 ) {
  console.log('38 / 25 = 1.52')
} else
if (a === 38 && sign === "/" && b === 26 ) {
  console.log('38 / 26 = 1.4615384615384615')
} else
if (a === 38 && sign === "/" && b === 27 ) {
  console.log('38 / 27 = 1.4074074074074074')
} else
if (a === 38 && sign === "/" && b === 28 ) {
  console.log('38 / 28 = 1.3571428571428572')
} else
if (a === 38 && sign === "/" && b === 29 ) {
  console.log('38 / 29 = 1.3103448275862069')
} else
if (a === 38 && sign === "/" && b === 30 ) {
  console.log('38 / 30 = 1.2666666666666666')
} else
if (a === 38 && sign === "/" && b === 31 ) {
  console.log('38 / 31 = 1.2258064516129032')
} else
if (a === 38 && sign === "/" && b === 32 ) {
  console.log('38 / 32 = 1.1875')
} else
if (a === 38 && sign === "/" && b === 33 ) {
  console.log('38 / 33 = 1.1515151515151516')
} else
if (a === 38 && sign === "/" && b === 34 ) {
  console.log('38 / 34 = 1.1176470588235294')
} else
if (a === 38 && sign === "/" && b === 35 ) {
  console.log('38 / 35 = 1.0857142857142856')
} else
if (a === 38 && sign === "/" && b === 36 ) {
  console.log('38 / 36 = 1.0555555555555556')
} else
if (a === 38 && sign === "/" && b === 37 ) {
  console.log('38 / 37 = 1.027027027027027')
} else
if (a === 38 && sign === "/" && b === 38 ) {
  console.log('38 / 38 = 1')
} else
if (a === 38 && sign === "/" && b === 39 ) {
  console.log('38 / 39 = 0.9743589743589743')
} else
if (a === 38 && sign === "/" && b === 40 ) {
  console.log('38 / 40 = 0.95')
} else
if (a === 38 && sign === "/" && b === 41 ) {
  console.log('38 / 41 = 0.926829268292683')
} else
if (a === 38 && sign === "/" && b === 42 ) {
  console.log('38 / 42 = 0.9047619047619048')
} else
if (a === 38 && sign === "/" && b === 43 ) {
  console.log('38 / 43 = 0.8837209302325582')
} else
if (a === 38 && sign === "/" && b === 44 ) {
  console.log('38 / 44 = 0.8636363636363636')
} else
if (a === 38 && sign === "/" && b === 45 ) {
  console.log('38 / 45 = 0.8444444444444444')
} else
if (a === 38 && sign === "/" && b === 46 ) {
  console.log('38 / 46 = 0.8260869565217391')
} else
if (a === 38 && sign === "/" && b === 47 ) {
  console.log('38 / 47 = 0.8085106382978723')
} else
if (a === 38 && sign === "/" && b === 48 ) {
  console.log('38 / 48 = 0.7916666666666666')
} else
if (a === 38 && sign === "/" && b === 49 ) {
  console.log('38 / 49 = 0.7755102040816326')
} else
if (a === 38 && sign === "/" && b === 50 ) {
  console.log('38 / 50 = 0.76')
} else
if (a === 39 && sign === "/" && b === 1 ) {
  console.log('39 / 1 = 39')
} else
if (a === 39 && sign === "/" && b === 2 ) {
  console.log('39 / 2 = 19.5')
} else
if (a === 39 && sign === "/" && b === 3 ) {
  console.log('39 / 3 = 13')
} else
if (a === 39 && sign === "/" && b === 4 ) {
  console.log('39 / 4 = 9.75')
} else
if (a === 39 && sign === "/" && b === 5 ) {
  console.log('39 / 5 = 7.8')
} else
if (a === 39 && sign === "/" && b === 6 ) {
  console.log('39 / 6 = 6.5')
} else
if (a === 39 && sign === "/" && b === 7 ) {
  console.log('39 / 7 = 5.571428571428571')
} else
if (a === 39 && sign === "/" && b === 8 ) {
  console.log('39 / 8 = 4.875')
} else
if (a === 39 && sign === "/" && b === 9 ) {
  console.log('39 / 9 = 4.333333333333333')
} else
if (a === 39 && sign === "/" && b === 10 ) {
  console.log('39 / 10 = 3.9')
} else
if (a === 39 && sign === "/" && b === 11 ) {
  console.log('39 / 11 = 3.5454545454545454')
} else
if (a === 39 && sign === "/" && b === 12 ) {
  console.log('39 / 12 = 3.25')
} else
if (a === 39 && sign === "/" && b === 13 ) {
  console.log('39 / 13 = 3')
} else
if (a === 39 && sign === "/" && b === 14 ) {
  console.log('39 / 14 = 2.7857142857142856')
} else
if (a === 39 && sign === "/" && b === 15 ) {
  console.log('39 / 15 = 2.6')
} else
if (a === 39 && sign === "/" && b === 16 ) {
  console.log('39 / 16 = 2.4375')
} else
if (a === 39 && sign === "/" && b === 17 ) {
  console.log('39 / 17 = 2.2941176470588234')
} else
if (a === 39 && sign === "/" && b === 18 ) {
  console.log('39 / 18 = 2.1666666666666665')
} else
if (a === 39 && sign === "/" && b === 19 ) {
  console.log('39 / 19 = 2.0526315789473686')
} else
if (a === 39 && sign === "/" && b === 20 ) {
  console.log('39 / 20 = 1.95')
} else
if (a === 39 && sign === "/" && b === 21 ) {
  console.log('39 / 21 = 1.8571428571428572')
} else
if (a === 39 && sign === "/" && b === 22 ) {
  console.log('39 / 22 = 1.7727272727272727')
} else
if (a === 39 && sign === "/" && b === 23 ) {
  console.log('39 / 23 = 1.6956521739130435')
} else
if (a === 39 && sign === "/" && b === 24 ) {
  console.log('39 / 24 = 1.625')
} else
if (a === 39 && sign === "/" && b === 25 ) {
  console.log('39 / 25 = 1.56')
} else
if (a === 39 && sign === "/" && b === 26 ) {
  console.log('39 / 26 = 1.5')
} else
if (a === 39 && sign === "/" && b === 27 ) {
  console.log('39 / 27 = 1.4444444444444444')
} else
if (a === 39 && sign === "/" && b === 28 ) {
  console.log('39 / 28 = 1.3928571428571428')
} else
if (a === 39 && sign === "/" && b === 29 ) {
  console.log('39 / 29 = 1.3448275862068966')
} else
if (a === 39 && sign === "/" && b === 30 ) {
  console.log('39 / 30 = 1.3')
} else
if (a === 39 && sign === "/" && b === 31 ) {
  console.log('39 / 31 = 1.2580645161290323')
} else
if (a === 39 && sign === "/" && b === 32 ) {
  console.log('39 / 32 = 1.21875')
} else
if (a === 39 && sign === "/" && b === 33 ) {
  console.log('39 / 33 = 1.1818181818181819')
} else
if (a === 39 && sign === "/" && b === 34 ) {
  console.log('39 / 34 = 1.1470588235294117')
} else
if (a === 39 && sign === "/" && b === 35 ) {
  console.log('39 / 35 = 1.1142857142857143')
} else
if (a === 39 && sign === "/" && b === 36 ) {
  console.log('39 / 36 = 1.0833333333333333')
} else
if (a === 39 && sign === "/" && b === 37 ) {
  console.log('39 / 37 = 1.054054054054054')
} else
if (a === 39 && sign === "/" && b === 38 ) {
  console.log('39 / 38 = 1.0263157894736843')
} else
if (a === 39 && sign === "/" && b === 39 ) {
  console.log('39 / 39 = 1')
} else
if (a === 39 && sign === "/" && b === 40 ) {
  console.log('39 / 40 = 0.975')
} else
if (a === 39 && sign === "/" && b === 41 ) {
  console.log('39 / 41 = 0.9512195121951219')
} else
if (a === 39 && sign === "/" && b === 42 ) {
  console.log('39 / 42 = 0.9285714285714286')
} else
if (a === 39 && sign === "/" && b === 43 ) {
  console.log('39 / 43 = 0.9069767441860465')
} else
if (a === 39 && sign === "/" && b === 44 ) {
  console.log('39 / 44 = 0.8863636363636364')
} else
if (a === 39 && sign === "/" && b === 45 ) {
  console.log('39 / 45 = 0.8666666666666667')
} else
if (a === 39 && sign === "/" && b === 46 ) {
  console.log('39 / 46 = 0.8478260869565217')
} else
if (a === 39 && sign === "/" && b === 47 ) {
  console.log('39 / 47 = 0.8297872340425532')
} else
if (a === 39 && sign === "/" && b === 48 ) {
  console.log('39 / 48 = 0.8125')
} else
if (a === 39 && sign === "/" && b === 49 ) {
  console.log('39 / 49 = 0.7959183673469388')
} else
if (a === 39 && sign === "/" && b === 50 ) {
  console.log('39 / 50 = 0.78')
} else
if (a === 40 && sign === "/" && b === 1 ) {
  console.log('40 / 1 = 40')
} else
if (a === 40 && sign === "/" && b === 2 ) {
  console.log('40 / 2 = 20')
} else
if (a === 40 && sign === "/" && b === 3 ) {
  console.log('40 / 3 = 13.333333333333334')
} else
if (a === 40 && sign === "/" && b === 4 ) {
  console.log('40 / 4 = 10')
} else
if (a === 40 && sign === "/" && b === 5 ) {
  console.log('40 / 5 = 8')
} else
if (a === 40 && sign === "/" && b === 6 ) {
  console.log('40 / 6 = 6.666666666666667')
} else
if (a === 40 && sign === "/" && b === 7 ) {
  console.log('40 / 7 = 5.714285714285714')
} else
if (a === 40 && sign === "/" && b === 8 ) {
  console.log('40 / 8 = 5')
} else
if (a === 40 && sign === "/" && b === 9 ) {
  console.log('40 / 9 = 4.444444444444445')
} else
if (a === 40 && sign === "/" && b === 10 ) {
  console.log('40 / 10 = 4')
} else
if (a === 40 && sign === "/" && b === 11 ) {
  console.log('40 / 11 = 3.6363636363636362')
} else
if (a === 40 && sign === "/" && b === 12 ) {
  console.log('40 / 12 = 3.3333333333333335')
} else
if (a === 40 && sign === "/" && b === 13 ) {
  console.log('40 / 13 = 3.076923076923077')
} else
if (a === 40 && sign === "/" && b === 14 ) {
  console.log('40 / 14 = 2.857142857142857')
} else
if (a === 40 && sign === "/" && b === 15 ) {
  console.log('40 / 15 = 2.6666666666666665')
} else
if (a === 40 && sign === "/" && b === 16 ) {
  console.log('40 / 16 = 2.5')
} else
if (a === 40 && sign === "/" && b === 17 ) {
  console.log('40 / 17 = 2.3529411764705883')
} else
if (a === 40 && sign === "/" && b === 18 ) {
  console.log('40 / 18 = 2.2222222222222223')
} else
if (a === 40 && sign === "/" && b === 19 ) {
  console.log('40 / 19 = 2.1052631578947367')
} else
if (a === 40 && sign === "/" && b === 20 ) {
  console.log('40 / 20 = 2')
} else
if (a === 40 && sign === "/" && b === 21 ) {
  console.log('40 / 21 = 1.9047619047619047')
} else
if (a === 40 && sign === "/" && b === 22 ) {
  console.log('40 / 22 = 1.8181818181818181')
} else
if (a === 40 && sign === "/" && b === 23 ) {
  console.log('40 / 23 = 1.7391304347826086')
} else
if (a === 40 && sign === "/" && b === 24 ) {
  console.log('40 / 24 = 1.6666666666666667')
} else
if (a === 40 && sign === "/" && b === 25 ) {
  console.log('40 / 25 = 1.6')
} else
if (a === 40 && sign === "/" && b === 26 ) {
  console.log('40 / 26 = 1.5384615384615385')
} else
if (a === 40 && sign === "/" && b === 27 ) {
  console.log('40 / 27 = 1.4814814814814814')
} else
if (a === 40 && sign === "/" && b === 28 ) {
  console.log('40 / 28 = 1.4285714285714286')
} else
if (a === 40 && sign === "/" && b === 29 ) {
  console.log('40 / 29 = 1.3793103448275863')
} else
if (a === 40 && sign === "/" && b === 30 ) {
  console.log('40 / 30 = 1.3333333333333333')
} else
if (a === 40 && sign === "/" && b === 31 ) {
  console.log('40 / 31 = 1.2903225806451613')
} else
if (a === 40 && sign === "/" && b === 32 ) {
  console.log('40 / 32 = 1.25')
} else
if (a === 40 && sign === "/" && b === 33 ) {
  console.log('40 / 33 = 1.2121212121212122')
} else
if (a === 40 && sign === "/" && b === 34 ) {
  console.log('40 / 34 = 1.1764705882352942')
} else
if (a === 40 && sign === "/" && b === 35 ) {
  console.log('40 / 35 = 1.1428571428571428')
} else
if (a === 40 && sign === "/" && b === 36 ) {
  console.log('40 / 36 = 1.1111111111111112')
} else
if (a === 40 && sign === "/" && b === 37 ) {
  console.log('40 / 37 = 1.0810810810810811')
} else
if (a === 40 && sign === "/" && b === 38 ) {
  console.log('40 / 38 = 1.0526315789473684')
} else
if (a === 40 && sign === "/" && b === 39 ) {
  console.log('40 / 39 = 1.0256410256410255')
} else
if (a === 40 && sign === "/" && b === 40 ) {
  console.log('40 / 40 = 1')
} else
if (a === 40 && sign === "/" && b === 41 ) {
  console.log('40 / 41 = 0.975609756097561')
} else
if (a === 40 && sign === "/" && b === 42 ) {
  console.log('40 / 42 = 0.9523809523809523')
} else
if (a === 40 && sign === "/" && b === 43 ) {
  console.log('40 / 43 = 0.9302325581395349')
} else
if (a === 40 && sign === "/" && b === 44 ) {
  console.log('40 / 44 = 0.9090909090909091')
} else
if (a === 40 && sign === "/" && b === 45 ) {
  console.log('40 / 45 = 0.8888888888888888')
} else
if (a === 40 && sign === "/" && b === 46 ) {
  console.log('40 / 46 = 0.8695652173913043')
} else
if (a === 40 && sign === "/" && b === 47 ) {
  console.log('40 / 47 = 0.851063829787234')
} else
if (a === 40 && sign === "/" && b === 48 ) {
  console.log('40 / 48 = 0.8333333333333334')
} else
if (a === 40 && sign === "/" && b === 49 ) {
  console.log('40 / 49 = 0.8163265306122449')
} else
if (a === 40 && sign === "/" && b === 50 ) {
  console.log('40 / 50 = 0.8')
} else
if (a === 41 && sign === "/" && b === 1 ) {
  console.log('41 / 1 = 41')
} else
if (a === 41 && sign === "/" && b === 2 ) {
  console.log('41 / 2 = 20.5')
} else
if (a === 41 && sign === "/" && b === 3 ) {
  console.log('41 / 3 = 13.666666666666666')
} else
if (a === 41 && sign === "/" && b === 4 ) {
  console.log('41 / 4 = 10.25')
} else
if (a === 41 && sign === "/" && b === 5 ) {
  console.log('41 / 5 = 8.2')
} else
if (a === 41 && sign === "/" && b === 6 ) {
  console.log('41 / 6 = 6.833333333333333')
} else
if (a === 41 && sign === "/" && b === 7 ) {
  console.log('41 / 7 = 5.857142857142857')
} else
if (a === 41 && sign === "/" && b === 8 ) {
  console.log('41 / 8 = 5.125')
} else
if (a === 41 && sign === "/" && b === 9 ) {
  console.log('41 / 9 = 4.555555555555555')
} else
if (a === 41 && sign === "/" && b === 10 ) {
  console.log('41 / 10 = 4.1')
} else
if (a === 41 && sign === "/" && b === 11 ) {
  console.log('41 / 11 = 3.727272727272727')
} else
if (a === 41 && sign === "/" && b === 12 ) {
  console.log('41 / 12 = 3.4166666666666665')
} else
if (a === 41 && sign === "/" && b === 13 ) {
  console.log('41 / 13 = 3.1538461538461537')
} else
if (a === 41 && sign === "/" && b === 14 ) {
  console.log('41 / 14 = 2.9285714285714284')
} else
if (a === 41 && sign === "/" && b === 15 ) {
  console.log('41 / 15 = 2.7333333333333334')
} else
if (a === 41 && sign === "/" && b === 16 ) {
  console.log('41 / 16 = 2.5625')
} else
if (a === 41 && sign === "/" && b === 17 ) {
  console.log('41 / 17 = 2.411764705882353')
} else
if (a === 41 && sign === "/" && b === 18 ) {
  console.log('41 / 18 = 2.2777777777777777')
} else
if (a === 41 && sign === "/" && b === 19 ) {
  console.log('41 / 19 = 2.1578947368421053')
} else
if (a === 41 && sign === "/" && b === 20 ) {
  console.log('41 / 20 = 2.05')
} else
if (a === 41 && sign === "/" && b === 21 ) {
  console.log('41 / 21 = 1.9523809523809523')
} else
if (a === 41 && sign === "/" && b === 22 ) {
  console.log('41 / 22 = 1.8636363636363635')
} else
if (a === 41 && sign === "/" && b === 23 ) {
  console.log('41 / 23 = 1.7826086956521738')
} else
if (a === 41 && sign === "/" && b === 24 ) {
  console.log('41 / 24 = 1.7083333333333333')
} else
if (a === 41 && sign === "/" && b === 25 ) {
  console.log('41 / 25 = 1.64')
} else
if (a === 41 && sign === "/" && b === 26 ) {
  console.log('41 / 26 = 1.5769230769230769')
} else
if (a === 41 && sign === "/" && b === 27 ) {
  console.log('41 / 27 = 1.5185185185185186')
} else
if (a === 41 && sign === "/" && b === 28 ) {
  console.log('41 / 28 = 1.4642857142857142')
} else
if (a === 41 && sign === "/" && b === 29 ) {
  console.log('41 / 29 = 1.4137931034482758')
} else
if (a === 41 && sign === "/" && b === 30 ) {
  console.log('41 / 30 = 1.3666666666666667')
} else
if (a === 41 && sign === "/" && b === 31 ) {
  console.log('41 / 31 = 1.3225806451612903')
} else
if (a === 41 && sign === "/" && b === 32 ) {
  console.log('41 / 32 = 1.28125')
} else
if (a === 41 && sign === "/" && b === 33 ) {
  console.log('41 / 33 = 1.2424242424242424')
} else
if (a === 41 && sign === "/" && b === 34 ) {
  console.log('41 / 34 = 1.2058823529411764')
} else
if (a === 41 && sign === "/" && b === 35 ) {
  console.log('41 / 35 = 1.1714285714285715')
} else
if (a === 41 && sign === "/" && b === 36 ) {
  console.log('41 / 36 = 1.1388888888888888')
} else
if (a === 41 && sign === "/" && b === 37 ) {
  console.log('41 / 37 = 1.1081081081081081')
} else
if (a === 41 && sign === "/" && b === 38 ) {
  console.log('41 / 38 = 1.0789473684210527')
} else
if (a === 41 && sign === "/" && b === 39 ) {
  console.log('41 / 39 = 1.0512820512820513')
} else
if (a === 41 && sign === "/" && b === 40 ) {
  console.log('41 / 40 = 1.025')
} else
if (a === 41 && sign === "/" && b === 41 ) {
  console.log('41 / 41 = 1')
} else
if (a === 41 && sign === "/" && b === 42 ) {
  console.log('41 / 42 = 0.9761904761904762')
} else
if (a === 41 && sign === "/" && b === 43 ) {
  console.log('41 / 43 = 0.9534883720930233')
} else
if (a === 41 && sign === "/" && b === 44 ) {
  console.log('41 / 44 = 0.9318181818181818')
} else
if (a === 41 && sign === "/" && b === 45 ) {
  console.log('41 / 45 = 0.9111111111111111')
} else
if (a === 41 && sign === "/" && b === 46 ) {
  console.log('41 / 46 = 0.8913043478260869')
} else
if (a === 41 && sign === "/" && b === 47 ) {
  console.log('41 / 47 = 0.8723404255319149')
} else
if (a === 41 && sign === "/" && b === 48 ) {
  console.log('41 / 48 = 0.8541666666666666')
} else
if (a === 41 && sign === "/" && b === 49 ) {
  console.log('41 / 49 = 0.8367346938775511')
} else
if (a === 41 && sign === "/" && b === 50 ) {
  console.log('41 / 50 = 0.82')
} else
if (a === 42 && sign === "/" && b === 1 ) {
  console.log('42 / 1 = 42')
} else
if (a === 42 && sign === "/" && b === 2 ) {
  console.log('42 / 2 = 21')
} else
if (a === 42 && sign === "/" && b === 3 ) {
  console.log('42 / 3 = 14')
} else
if (a === 42 && sign === "/" && b === 4 ) {
  console.log('42 / 4 = 10.5')
} else
if (a === 42 && sign === "/" && b === 5 ) {
  console.log('42 / 5 = 8.4')
} else
if (a === 42 && sign === "/" && b === 6 ) {
  console.log('42 / 6 = 7')
} else
if (a === 42 && sign === "/" && b === 7 ) {
  console.log('42 / 7 = 6')
} else
if (a === 42 && sign === "/" && b === 8 ) {
  console.log('42 / 8 = 5.25')
} else
if (a === 42 && sign === "/" && b === 9 ) {
  console.log('42 / 9 = 4.666666666666667')
} else
if (a === 42 && sign === "/" && b === 10 ) {
  console.log('42 / 10 = 4.2')
} else
if (a === 42 && sign === "/" && b === 11 ) {
  console.log('42 / 11 = 3.8181818181818183')
} else
if (a === 42 && sign === "/" && b === 12 ) {
  console.log('42 / 12 = 3.5')
} else
if (a === 42 && sign === "/" && b === 13 ) {
  console.log('42 / 13 = 3.230769230769231')
} else
if (a === 42 && sign === "/" && b === 14 ) {
  console.log('42 / 14 = 3')
} else
if (a === 42 && sign === "/" && b === 15 ) {
  console.log('42 / 15 = 2.8')
} else
if (a === 42 && sign === "/" && b === 16 ) {
  console.log('42 / 16 = 2.625')
} else
if (a === 42 && sign === "/" && b === 17 ) {
  console.log('42 / 17 = 2.4705882352941178')
} else
if (a === 42 && sign === "/" && b === 18 ) {
  console.log('42 / 18 = 2.3333333333333335')
} else
if (a === 42 && sign === "/" && b === 19 ) {
  console.log('42 / 19 = 2.210526315789474')
} else
if (a === 42 && sign === "/" && b === 20 ) {
  console.log('42 / 20 = 2.1')
} else
if (a === 42 && sign === "/" && b === 21 ) {
  console.log('42 / 21 = 2')
} else
if (a === 42 && sign === "/" && b === 22 ) {
  console.log('42 / 22 = 1.9090909090909092')
} else
if (a === 42 && sign === "/" && b === 23 ) {
  console.log('42 / 23 = 1.826086956521739')
} else
if (a === 42 && sign === "/" && b === 24 ) {
  console.log('42 / 24 = 1.75')
} else
if (a === 42 && sign === "/" && b === 25 ) {
  console.log('42 / 25 = 1.68')
} else
if (a === 42 && sign === "/" && b === 26 ) {
  console.log('42 / 26 = 1.6153846153846154')
} else
if (a === 42 && sign === "/" && b === 27 ) {
  console.log('42 / 27 = 1.5555555555555556')
} else
if (a === 42 && sign === "/" && b === 28 ) {
  console.log('42 / 28 = 1.5')
} else
if (a === 42 && sign === "/" && b === 29 ) {
  console.log('42 / 29 = 1.4482758620689655')
} else
if (a === 42 && sign === "/" && b === 30 ) {
  console.log('42 / 30 = 1.4')
} else
if (a === 42 && sign === "/" && b === 31 ) {
  console.log('42 / 31 = 1.3548387096774193')
} else
if (a === 42 && sign === "/" && b === 32 ) {
  console.log('42 / 32 = 1.3125')
} else
if (a === 42 && sign === "/" && b === 33 ) {
  console.log('42 / 33 = 1.2727272727272727')
} else
if (a === 42 && sign === "/" && b === 34 ) {
  console.log('42 / 34 = 1.2352941176470589')
} else
if (a === 42 && sign === "/" && b === 35 ) {
  console.log('42 / 35 = 1.2')
} else
if (a === 42 && sign === "/" && b === 36 ) {
  console.log('42 / 36 = 1.1666666666666667')
} else
if (a === 42 && sign === "/" && b === 37 ) {
  console.log('42 / 37 = 1.135135135135135')
} else
if (a === 42 && sign === "/" && b === 38 ) {
  console.log('42 / 38 = 1.105263157894737')
} else
if (a === 42 && sign === "/" && b === 39 ) {
  console.log('42 / 39 = 1.0769230769230769')
} else
if (a === 42 && sign === "/" && b === 40 ) {
  console.log('42 / 40 = 1.05')
} else
if (a === 42 && sign === "/" && b === 41 ) {
  console.log('42 / 41 = 1.024390243902439')
} else
if (a === 42 && sign === "/" && b === 42 ) {
  console.log('42 / 42 = 1')
} else
if (a === 42 && sign === "/" && b === 43 ) {
  console.log('42 / 43 = 0.9767441860465116')
} else
if (a === 42 && sign === "/" && b === 44 ) {
  console.log('42 / 44 = 0.9545454545454546')
} else
if (a === 42 && sign === "/" && b === 45 ) {
  console.log('42 / 45 = 0.9333333333333333')
} else
if (a === 42 && sign === "/" && b === 46 ) {
  console.log('42 / 46 = 0.9130434782608695')
} else
if (a === 42 && sign === "/" && b === 47 ) {
  console.log('42 / 47 = 0.8936170212765957')
} else
if (a === 42 && sign === "/" && b === 48 ) {
  console.log('42 / 48 = 0.875')
} else
if (a === 42 && sign === "/" && b === 49 ) {
  console.log('42 / 49 = 0.8571428571428571')
} else
if (a === 42 && sign === "/" && b === 50 ) {
  console.log('42 / 50 = 0.84')
} else
if (a === 43 && sign === "/" && b === 1 ) {
  console.log('43 / 1 = 43')
} else
if (a === 43 && sign === "/" && b === 2 ) {
  console.log('43 / 2 = 21.5')
} else
if (a === 43 && sign === "/" && b === 3 ) {
  console.log('43 / 3 = 14.333333333333334')
} else
if (a === 43 && sign === "/" && b === 4 ) {
  console.log('43 / 4 = 10.75')
} else
if (a === 43 && sign === "/" && b === 5 ) {
  console.log('43 / 5 = 8.6')
} else
if (a === 43 && sign === "/" && b === 6 ) {
  console.log('43 / 6 = 7.166666666666667')
} else
if (a === 43 && sign === "/" && b === 7 ) {
  console.log('43 / 7 = 6.142857142857143')
} else
if (a === 43 && sign === "/" && b === 8 ) {
  console.log('43 / 8 = 5.375')
} else
if (a === 43 && sign === "/" && b === 9 ) {
  console.log('43 / 9 = 4.777777777777778')
} else
if (a === 43 && sign === "/" && b === 10 ) {
  console.log('43 / 10 = 4.3')
} else
if (a === 43 && sign === "/" && b === 11 ) {
  console.log('43 / 11 = 3.909090909090909')
} else
if (a === 43 && sign === "/" && b === 12 ) {
  console.log('43 / 12 = 3.5833333333333335')
} else
if (a === 43 && sign === "/" && b === 13 ) {
  console.log('43 / 13 = 3.3076923076923075')
} else
if (a === 43 && sign === "/" && b === 14 ) {
  console.log('43 / 14 = 3.0714285714285716')
} else
if (a === 43 && sign === "/" && b === 15 ) {
  console.log('43 / 15 = 2.8666666666666667')
} else
if (a === 43 && sign === "/" && b === 16 ) {
  console.log('43 / 16 = 2.6875')
} else
if (a === 43 && sign === "/" && b === 17 ) {
  console.log('43 / 17 = 2.5294117647058822')
} else
if (a === 43 && sign === "/" && b === 18 ) {
  console.log('43 / 18 = 2.388888888888889')
} else
if (a === 43 && sign === "/" && b === 19 ) {
  console.log('43 / 19 = 2.263157894736842')
} else
if (a === 43 && sign === "/" && b === 20 ) {
  console.log('43 / 20 = 2.15')
} else
if (a === 43 && sign === "/" && b === 21 ) {
  console.log('43 / 21 = 2.0476190476190474')
} else
if (a === 43 && sign === "/" && b === 22 ) {
  console.log('43 / 22 = 1.9545454545454546')
} else
if (a === 43 && sign === "/" && b === 23 ) {
  console.log('43 / 23 = 1.8695652173913044')
} else
if (a === 43 && sign === "/" && b === 24 ) {
  console.log('43 / 24 = 1.7916666666666667')
} else
if (a === 43 && sign === "/" && b === 25 ) {
  console.log('43 / 25 = 1.72')
} else
if (a === 43 && sign === "/" && b === 26 ) {
  console.log('43 / 26 = 1.6538461538461537')
} else
if (a === 43 && sign === "/" && b === 27 ) {
  console.log('43 / 27 = 1.5925925925925926')
} else
if (a === 43 && sign === "/" && b === 28 ) {
  console.log('43 / 28 = 1.5357142857142858')
} else
if (a === 43 && sign === "/" && b === 29 ) {
  console.log('43 / 29 = 1.4827586206896552')
} else
if (a === 43 && sign === "/" && b === 30 ) {
  console.log('43 / 30 = 1.4333333333333333')
} else
if (a === 43 && sign === "/" && b === 31 ) {
  console.log('43 / 31 = 1.3870967741935485')
} else
if (a === 43 && sign === "/" && b === 32 ) {
  console.log('43 / 32 = 1.34375')
} else
if (a === 43 && sign === "/" && b === 33 ) {
  console.log('43 / 33 = 1.303030303030303')
} else
if (a === 43 && sign === "/" && b === 34 ) {
  console.log('43 / 34 = 1.2647058823529411')
} else
if (a === 43 && sign === "/" && b === 35 ) {
  console.log('43 / 35 = 1.2285714285714286')
} else
if (a === 43 && sign === "/" && b === 36 ) {
  console.log('43 / 36 = 1.1944444444444444')
} else
if (a === 43 && sign === "/" && b === 37 ) {
  console.log('43 / 37 = 1.162162162162162')
} else
if (a === 43 && sign === "/" && b === 38 ) {
  console.log('43 / 38 = 1.131578947368421')
} else
if (a === 43 && sign === "/" && b === 39 ) {
  console.log('43 / 39 = 1.1025641025641026')
} else
if (a === 43 && sign === "/" && b === 40 ) {
  console.log('43 / 40 = 1.075')
} else
if (a === 43 && sign === "/" && b === 41 ) {
  console.log('43 / 41 = 1.048780487804878')
} else
if (a === 43 && sign === "/" && b === 42 ) {
  console.log('43 / 42 = 1.0238095238095237')
} else
if (a === 43 && sign === "/" && b === 43 ) {
  console.log('43 / 43 = 1')
} else
if (a === 43 && sign === "/" && b === 44 ) {
  console.log('43 / 44 = 0.9772727272727273')
} else
if (a === 43 && sign === "/" && b === 45 ) {
  console.log('43 / 45 = 0.9555555555555556')
} else
if (a === 43 && sign === "/" && b === 46 ) {
  console.log('43 / 46 = 0.9347826086956522')
} else
if (a === 43 && sign === "/" && b === 47 ) {
  console.log('43 / 47 = 0.9148936170212766')
} else
if (a === 43 && sign === "/" && b === 48 ) {
  console.log('43 / 48 = 0.8958333333333334')
} else
if (a === 43 && sign === "/" && b === 49 ) {
  console.log('43 / 49 = 0.8775510204081632')
} else
if (a === 43 && sign === "/" && b === 50 ) {
  console.log('43 / 50 = 0.86')
} else
if (a === 44 && sign === "/" && b === 1 ) {
  console.log('44 / 1 = 44')
} else
if (a === 44 && sign === "/" && b === 2 ) {
  console.log('44 / 2 = 22')
} else
if (a === 44 && sign === "/" && b === 3 ) {
  console.log('44 / 3 = 14.666666666666666')
} else
if (a === 44 && sign === "/" && b === 4 ) {
  console.log('44 / 4 = 11')
} else
if (a === 44 && sign === "/" && b === 5 ) {
  console.log('44 / 5 = 8.8')
} else
if (a === 44 && sign === "/" && b === 6 ) {
  console.log('44 / 6 = 7.333333333333333')
} else
if (a === 44 && sign === "/" && b === 7 ) {
  console.log('44 / 7 = 6.285714285714286')
} else
if (a === 44 && sign === "/" && b === 8 ) {
  console.log('44 / 8 = 5.5')
} else
if (a === 44 && sign === "/" && b === 9 ) {
  console.log('44 / 9 = 4.888888888888889')
} else
if (a === 44 && sign === "/" && b === 10 ) {
  console.log('44 / 10 = 4.4')
} else
if (a === 44 && sign === "/" && b === 11 ) {
  console.log('44 / 11 = 4')
} else
if (a === 44 && sign === "/" && b === 12 ) {
  console.log('44 / 12 = 3.6666666666666665')
} else
if (a === 44 && sign === "/" && b === 13 ) {
  console.log('44 / 13 = 3.3846153846153846')
} else
if (a === 44 && sign === "/" && b === 14 ) {
  console.log('44 / 14 = 3.142857142857143')
} else
if (a === 44 && sign === "/" && b === 15 ) {
  console.log('44 / 15 = 2.933333333333333')
} else
if (a === 44 && sign === "/" && b === 16 ) {
  console.log('44 / 16 = 2.75')
} else
if (a === 44 && sign === "/" && b === 17 ) {
  console.log('44 / 17 = 2.588235294117647')
} else
if (a === 44 && sign === "/" && b === 18 ) {
  console.log('44 / 18 = 2.4444444444444446')
} else
if (a === 44 && sign === "/" && b === 19 ) {
  console.log('44 / 19 = 2.3157894736842106')
} else
if (a === 44 && sign === "/" && b === 20 ) {
  console.log('44 / 20 = 2.2')
} else
if (a === 44 && sign === "/" && b === 21 ) {
  console.log('44 / 21 = 2.0952380952380953')
} else
if (a === 44 && sign === "/" && b === 22 ) {
  console.log('44 / 22 = 2')
} else
if (a === 44 && sign === "/" && b === 23 ) {
  console.log('44 / 23 = 1.9130434782608696')
} else
if (a === 44 && sign === "/" && b === 24 ) {
  console.log('44 / 24 = 1.8333333333333333')
} else
if (a === 44 && sign === "/" && b === 25 ) {
  console.log('44 / 25 = 1.76')
} else
if (a === 44 && sign === "/" && b === 26 ) {
  console.log('44 / 26 = 1.6923076923076923')
} else
if (a === 44 && sign === "/" && b === 27 ) {
  console.log('44 / 27 = 1.6296296296296295')
} else
if (a === 44 && sign === "/" && b === 28 ) {
  console.log('44 / 28 = 1.5714285714285714')
} else
if (a === 44 && sign === "/" && b === 29 ) {
  console.log('44 / 29 = 1.5172413793103448')
} else
if (a === 44 && sign === "/" && b === 30 ) {
  console.log('44 / 30 = 1.4666666666666666')
} else
if (a === 44 && sign === "/" && b === 31 ) {
  console.log('44 / 31 = 1.4193548387096775')
} else
if (a === 44 && sign === "/" && b === 32 ) {
  console.log('44 / 32 = 1.375')
} else
if (a === 44 && sign === "/" && b === 33 ) {
  console.log('44 / 33 = 1.3333333333333333')
} else
if (a === 44 && sign === "/" && b === 34 ) {
  console.log('44 / 34 = 1.2941176470588236')
} else
if (a === 44 && sign === "/" && b === 35 ) {
  console.log('44 / 35 = 1.2571428571428571')
} else
if (a === 44 && sign === "/" && b === 36 ) {
  console.log('44 / 36 = 1.2222222222222223')
} else
if (a === 44 && sign === "/" && b === 37 ) {
  console.log('44 / 37 = 1.1891891891891893')
} else
if (a === 44 && sign === "/" && b === 38 ) {
  console.log('44 / 38 = 1.1578947368421053')
} else
if (a === 44 && sign === "/" && b === 39 ) {
  console.log('44 / 39 = 1.1282051282051282')
} else
if (a === 44 && sign === "/" && b === 40 ) {
  console.log('44 / 40 = 1.1')
} else
if (a === 44 && sign === "/" && b === 41 ) {
  console.log('44 / 41 = 1.0731707317073171')
} else
if (a === 44 && sign === "/" && b === 42 ) {
  console.log('44 / 42 = 1.0476190476190477')
} else
if (a === 44 && sign === "/" && b === 43 ) {
  console.log('44 / 43 = 1.0232558139534884')
} else
if (a === 44 && sign === "/" && b === 44 ) {
  console.log('44 / 44 = 1')
} else
if (a === 44 && sign === "/" && b === 45 ) {
  console.log('44 / 45 = 0.9777777777777777')
} else
if (a === 44 && sign === "/" && b === 46 ) {
  console.log('44 / 46 = 0.9565217391304348')
} else
if (a === 44 && sign === "/" && b === 47 ) {
  console.log('44 / 47 = 0.9361702127659575')
} else
if (a === 44 && sign === "/" && b === 48 ) {
  console.log('44 / 48 = 0.9166666666666666')
} else
if (a === 44 && sign === "/" && b === 49 ) {
  console.log('44 / 49 = 0.8979591836734694')
} else
if (a === 44 && sign === "/" && b === 50 ) {
  console.log('44 / 50 = 0.88')
} else
if (a === 45 && sign === "/" && b === 1 ) {
  console.log('45 / 1 = 45')
} else
if (a === 45 && sign === "/" && b === 2 ) {
  console.log('45 / 2 = 22.5')
} else
if (a === 45 && sign === "/" && b === 3 ) {
  console.log('45 / 3 = 15')
} else
if (a === 45 && sign === "/" && b === 4 ) {
  console.log('45 / 4 = 11.25')
} else
if (a === 45 && sign === "/" && b === 5 ) {
  console.log('45 / 5 = 9')
} else
if (a === 45 && sign === "/" && b === 6 ) {
  console.log('45 / 6 = 7.5')
} else
if (a === 45 && sign === "/" && b === 7 ) {
  console.log('45 / 7 = 6.428571428571429')
} else
if (a === 45 && sign === "/" && b === 8 ) {
  console.log('45 / 8 = 5.625')
} else
if (a === 45 && sign === "/" && b === 9 ) {
  console.log('45 / 9 = 5')
} else
if (a === 45 && sign === "/" && b === 10 ) {
  console.log('45 / 10 = 4.5')
} else
if (a === 45 && sign === "/" && b === 11 ) {
  console.log('45 / 11 = 4.090909090909091')
} else
if (a === 45 && sign === "/" && b === 12 ) {
  console.log('45 / 12 = 3.75')
} else
if (a === 45 && sign === "/" && b === 13 ) {
  console.log('45 / 13 = 3.4615384615384617')
} else
if (a === 45 && sign === "/" && b === 14 ) {
  console.log('45 / 14 = 3.2142857142857144')
} else
if (a === 45 && sign === "/" && b === 15 ) {
  console.log('45 / 15 = 3')
} else
if (a === 45 && sign === "/" && b === 16 ) {
  console.log('45 / 16 = 2.8125')
} else
if (a === 45 && sign === "/" && b === 17 ) {
  console.log('45 / 17 = 2.6470588235294117')
} else
if (a === 45 && sign === "/" && b === 18 ) {
  console.log('45 / 18 = 2.5')
} else
if (a === 45 && sign === "/" && b === 19 ) {
  console.log('45 / 19 = 2.3684210526315788')
} else
if (a === 45 && sign === "/" && b === 20 ) {
  console.log('45 / 20 = 2.25')
} else
if (a === 45 && sign === "/" && b === 21 ) {
  console.log('45 / 21 = 2.142857142857143')
} else
if (a === 45 && sign === "/" && b === 22 ) {
  console.log('45 / 22 = 2.0454545454545454')
} else
if (a === 45 && sign === "/" && b === 23 ) {
  console.log('45 / 23 = 1.9565217391304348')
} else
if (a === 45 && sign === "/" && b === 24 ) {
  console.log('45 / 24 = 1.875')
} else
if (a === 45 && sign === "/" && b === 25 ) {
  console.log('45 / 25 = 1.8')
} else
if (a === 45 && sign === "/" && b === 26 ) {
  console.log('45 / 26 = 1.7307692307692308')
} else
if (a === 45 && sign === "/" && b === 27 ) {
  console.log('45 / 27 = 1.6666666666666667')
} else
if (a === 45 && sign === "/" && b === 28 ) {
  console.log('45 / 28 = 1.6071428571428572')
} else
if (a === 45 && sign === "/" && b === 29 ) {
  console.log('45 / 29 = 1.5517241379310345')
} else
if (a === 45 && sign === "/" && b === 30 ) {
  console.log('45 / 30 = 1.5')
} else
if (a === 45 && sign === "/" && b === 31 ) {
  console.log('45 / 31 = 1.4516129032258065')
} else
if (a === 45 && sign === "/" && b === 32 ) {
  console.log('45 / 32 = 1.40625')
} else
if (a === 45 && sign === "/" && b === 33 ) {
  console.log('45 / 33 = 1.3636363636363635')
} else
if (a === 45 && sign === "/" && b === 34 ) {
  console.log('45 / 34 = 1.3235294117647058')
} else
if (a === 45 && sign === "/" && b === 35 ) {
  console.log('45 / 35 = 1.2857142857142858')
} else
if (a === 45 && sign === "/" && b === 36 ) {
  console.log('45 / 36 = 1.25')
} else
if (a === 45 && sign === "/" && b === 37 ) {
  console.log('45 / 37 = 1.2162162162162162')
} else
if (a === 45 && sign === "/" && b === 38 ) {
  console.log('45 / 38 = 1.1842105263157894')
} else
if (a === 45 && sign === "/" && b === 39 ) {
  console.log('45 / 39 = 1.1538461538461537')
} else
if (a === 45 && sign === "/" && b === 40 ) {
  console.log('45 / 40 = 1.125')
} else
if (a === 45 && sign === "/" && b === 41 ) {
  console.log('45 / 41 = 1.0975609756097562')
} else
if (a === 45 && sign === "/" && b === 42 ) {
  console.log('45 / 42 = 1.0714285714285714')
} else
if (a === 45 && sign === "/" && b === 43 ) {
  console.log('45 / 43 = 1.0465116279069768')
} else
if (a === 45 && sign === "/" && b === 44 ) {
  console.log('45 / 44 = 1.0227272727272727')
} else
if (a === 45 && sign === "/" && b === 45 ) {
  console.log('45 / 45 = 1')
} else
if (a === 45 && sign === "/" && b === 46 ) {
  console.log('45 / 46 = 0.9782608695652174')
} else
if (a === 45 && sign === "/" && b === 47 ) {
  console.log('45 / 47 = 0.9574468085106383')
} else
if (a === 45 && sign === "/" && b === 48 ) {
  console.log('45 / 48 = 0.9375')
} else
if (a === 45 && sign === "/" && b === 49 ) {
  console.log('45 / 49 = 0.9183673469387755')
} else
if (a === 45 && sign === "/" && b === 50 ) {
  console.log('45 / 50 = 0.9')
} else
if (a === 46 && sign === "/" && b === 1 ) {
  console.log('46 / 1 = 46')
} else
if (a === 46 && sign === "/" && b === 2 ) {
  console.log('46 / 2 = 23')
} else
if (a === 46 && sign === "/" && b === 3 ) {
  console.log('46 / 3 = 15.333333333333334')
} else
if (a === 46 && sign === "/" && b === 4 ) {
  console.log('46 / 4 = 11.5')
} else
if (a === 46 && sign === "/" && b === 5 ) {
  console.log('46 / 5 = 9.2')
} else
if (a === 46 && sign === "/" && b === 6 ) {
  console.log('46 / 6 = 7.666666666666667')
} else
if (a === 46 && sign === "/" && b === 7 ) {
  console.log('46 / 7 = 6.571428571428571')
} else
if (a === 46 && sign === "/" && b === 8 ) {
  console.log('46 / 8 = 5.75')
} else
if (a === 46 && sign === "/" && b === 9 ) {
  console.log('46 / 9 = 5.111111111111111')
} else
if (a === 46 && sign === "/" && b === 10 ) {
  console.log('46 / 10 = 4.6')
} else
if (a === 46 && sign === "/" && b === 11 ) {
  console.log('46 / 11 = 4.181818181818182')
} else
if (a === 46 && sign === "/" && b === 12 ) {
  console.log('46 / 12 = 3.8333333333333335')
} else
if (a === 46 && sign === "/" && b === 13 ) {
  console.log('46 / 13 = 3.5384615384615383')
} else
if (a === 46 && sign === "/" && b === 14 ) {
  console.log('46 / 14 = 3.2857142857142856')
} else
if (a === 46 && sign === "/" && b === 15 ) {
  console.log('46 / 15 = 3.066666666666667')
} else
if (a === 46 && sign === "/" && b === 16 ) {
  console.log('46 / 16 = 2.875')
} else
if (a === 46 && sign === "/" && b === 17 ) {
  console.log('46 / 17 = 2.7058823529411766')
} else
if (a === 46 && sign === "/" && b === 18 ) {
  console.log('46 / 18 = 2.5555555555555554')
} else
if (a === 46 && sign === "/" && b === 19 ) {
  console.log('46 / 19 = 2.4210526315789473')
} else
if (a === 46 && sign === "/" && b === 20 ) {
  console.log('46 / 20 = 2.3')
} else
if (a === 46 && sign === "/" && b === 21 ) {
  console.log('46 / 21 = 2.1904761904761907')
} else
if (a === 46 && sign === "/" && b === 22 ) {
  console.log('46 / 22 = 2.090909090909091')
} else
if (a === 46 && sign === "/" && b === 23 ) {
  console.log('46 / 23 = 2')
} else
if (a === 46 && sign === "/" && b === 24 ) {
  console.log('46 / 24 = 1.9166666666666667')
} else
if (a === 46 && sign === "/" && b === 25 ) {
  console.log('46 / 25 = 1.84')
} else
if (a === 46 && sign === "/" && b === 26 ) {
  console.log('46 / 26 = 1.7692307692307692')
} else
if (a === 46 && sign === "/" && b === 27 ) {
  console.log('46 / 27 = 1.7037037037037037')
} else
if (a === 46 && sign === "/" && b === 28 ) {
  console.log('46 / 28 = 1.6428571428571428')
} else
if (a === 46 && sign === "/" && b === 29 ) {
  console.log('46 / 29 = 1.5862068965517242')
} else
if (a === 46 && sign === "/" && b === 30 ) {
  console.log('46 / 30 = 1.5333333333333334')
} else
if (a === 46 && sign === "/" && b === 31 ) {
  console.log('46 / 31 = 1.4838709677419355')
} else
if (a === 46 && sign === "/" && b === 32 ) {
  console.log('46 / 32 = 1.4375')
} else
if (a === 46 && sign === "/" && b === 33 ) {
  console.log('46 / 33 = 1.393939393939394')
} else
if (a === 46 && sign === "/" && b === 34 ) {
  console.log('46 / 34 = 1.3529411764705883')
} else
if (a === 46 && sign === "/" && b === 35 ) {
  console.log('46 / 35 = 1.3142857142857143')
} else
if (a === 46 && sign === "/" && b === 36 ) {
  console.log('46 / 36 = 1.2777777777777777')
} else
if (a === 46 && sign === "/" && b === 37 ) {
  console.log('46 / 37 = 1.2432432432432432')
} else
if (a === 46 && sign === "/" && b === 38 ) {
  console.log('46 / 38 = 1.2105263157894737')
} else
if (a === 46 && sign === "/" && b === 39 ) {
  console.log('46 / 39 = 1.1794871794871795')
} else
if (a === 46 && sign === "/" && b === 40 ) {
  console.log('46 / 40 = 1.15')
} else
if (a === 46 && sign === "/" && b === 41 ) {
  console.log('46 / 41 = 1.1219512195121952')
} else
if (a === 46 && sign === "/" && b === 42 ) {
  console.log('46 / 42 = 1.0952380952380953')
} else
if (a === 46 && sign === "/" && b === 43 ) {
  console.log('46 / 43 = 1.069767441860465')
} else
if (a === 46 && sign === "/" && b === 44 ) {
  console.log('46 / 44 = 1.0454545454545454')
} else
if (a === 46 && sign === "/" && b === 45 ) {
  console.log('46 / 45 = 1.0222222222222221')
} else
if (a === 46 && sign === "/" && b === 46 ) {
  console.log('46 / 46 = 1')
} else
if (a === 46 && sign === "/" && b === 47 ) {
  console.log('46 / 47 = 0.9787234042553191')
} else
if (a === 46 && sign === "/" && b === 48 ) {
  console.log('46 / 48 = 0.9583333333333334')
} else
if (a === 46 && sign === "/" && b === 49 ) {
  console.log('46 / 49 = 0.9387755102040817')
} else
if (a === 46 && sign === "/" && b === 50 ) {
  console.log('46 / 50 = 0.92')
} else
if (a === 47 && sign === "/" && b === 1 ) {
  console.log('47 / 1 = 47')
} else
if (a === 47 && sign === "/" && b === 2 ) {
  console.log('47 / 2 = 23.5')
} else
if (a === 47 && sign === "/" && b === 3 ) {
  console.log('47 / 3 = 15.666666666666666')
} else
if (a === 47 && sign === "/" && b === 4 ) {
  console.log('47 / 4 = 11.75')
} else
if (a === 47 && sign === "/" && b === 5 ) {
  console.log('47 / 5 = 9.4')
} else
if (a === 47 && sign === "/" && b === 6 ) {
  console.log('47 / 6 = 7.833333333333333')
} else
if (a === 47 && sign === "/" && b === 7 ) {
  console.log('47 / 7 = 6.714285714285714')
} else
if (a === 47 && sign === "/" && b === 8 ) {
  console.log('47 / 8 = 5.875')
} else
if (a === 47 && sign === "/" && b === 9 ) {
  console.log('47 / 9 = 5.222222222222222')
} else
if (a === 47 && sign === "/" && b === 10 ) {
  console.log('47 / 10 = 4.7')
} else
if (a === 47 && sign === "/" && b === 11 ) {
  console.log('47 / 11 = 4.2727272727272725')
} else
if (a === 47 && sign === "/" && b === 12 ) {
  console.log('47 / 12 = 3.9166666666666665')
} else
if (a === 47 && sign === "/" && b === 13 ) {
  console.log('47 / 13 = 3.6153846153846154')
} else
if (a === 47 && sign === "/" && b === 14 ) {
  console.log('47 / 14 = 3.357142857142857')
} else
if (a === 47 && sign === "/" && b === 15 ) {
  console.log('47 / 15 = 3.1333333333333333')
} else
if (a === 47 && sign === "/" && b === 16 ) {
  console.log('47 / 16 = 2.9375')
} else
if (a === 47 && sign === "/" && b === 17 ) {
  console.log('47 / 17 = 2.764705882352941')
} else
if (a === 47 && sign === "/" && b === 18 ) {
  console.log('47 / 18 = 2.611111111111111')
} else
if (a === 47 && sign === "/" && b === 19 ) {
  console.log('47 / 19 = 2.473684210526316')
} else
if (a === 47 && sign === "/" && b === 20 ) {
  console.log('47 / 20 = 2.35')
} else
if (a === 47 && sign === "/" && b === 21 ) {
  console.log('47 / 21 = 2.238095238095238')
} else
if (a === 47 && sign === "/" && b === 22 ) {
  console.log('47 / 22 = 2.1363636363636362')
} else
if (a === 47 && sign === "/" && b === 23 ) {
  console.log('47 / 23 = 2.0434782608695654')
} else
if (a === 47 && sign === "/" && b === 24 ) {
  console.log('47 / 24 = 1.9583333333333333')
} else
if (a === 47 && sign === "/" && b === 25 ) {
  console.log('47 / 25 = 1.88')
} else
if (a === 47 && sign === "/" && b === 26 ) {
  console.log('47 / 26 = 1.8076923076923077')
} else
if (a === 47 && sign === "/" && b === 27 ) {
  console.log('47 / 27 = 1.7407407407407407')
} else
if (a === 47 && sign === "/" && b === 28 ) {
  console.log('47 / 28 = 1.6785714285714286')
} else
if (a === 47 && sign === "/" && b === 29 ) {
  console.log('47 / 29 = 1.6206896551724137')
} else
if (a === 47 && sign === "/" && b === 30 ) {
  console.log('47 / 30 = 1.5666666666666667')
} else
if (a === 47 && sign === "/" && b === 31 ) {
  console.log('47 / 31 = 1.5161290322580645')
} else
if (a === 47 && sign === "/" && b === 32 ) {
  console.log('47 / 32 = 1.46875')
} else
if (a === 47 && sign === "/" && b === 33 ) {
  console.log('47 / 33 = 1.4242424242424243')
} else
if (a === 47 && sign === "/" && b === 34 ) {
  console.log('47 / 34 = 1.3823529411764706')
} else
if (a === 47 && sign === "/" && b === 35 ) {
  console.log('47 / 35 = 1.3428571428571427')
} else
if (a === 47 && sign === "/" && b === 36 ) {
  console.log('47 / 36 = 1.3055555555555556')
} else
if (a === 47 && sign === "/" && b === 37 ) {
  console.log('47 / 37 = 1.2702702702702702')
} else
if (a === 47 && sign === "/" && b === 38 ) {
  console.log('47 / 38 = 1.236842105263158')
} else
if (a === 47 && sign === "/" && b === 39 ) {
  console.log('47 / 39 = 1.205128205128205')
} else
if (a === 47 && sign === "/" && b === 40 ) {
  console.log('47 / 40 = 1.175')
} else
if (a === 47 && sign === "/" && b === 41 ) {
  console.log('47 / 41 = 1.146341463414634')
} else
if (a === 47 && sign === "/" && b === 42 ) {
  console.log('47 / 42 = 1.119047619047619')
} else
if (a === 47 && sign === "/" && b === 43 ) {
  console.log('47 / 43 = 1.0930232558139534')
} else
if (a === 47 && sign === "/" && b === 44 ) {
  console.log('47 / 44 = 1.0681818181818181')
} else
if (a === 47 && sign === "/" && b === 45 ) {
  console.log('47 / 45 = 1.0444444444444445')
} else
if (a === 47 && sign === "/" && b === 46 ) {
  console.log('47 / 46 = 1.0217391304347827')
} else
if (a === 47 && sign === "/" && b === 47 ) {
  console.log('47 / 47 = 1')
} else
if (a === 47 && sign === "/" && b === 48 ) {
  console.log('47 / 48 = 0.9791666666666666')
} else
if (a === 47 && sign === "/" && b === 49 ) {
  console.log('47 / 49 = 0.9591836734693877')
} else
if (a === 47 && sign === "/" && b === 50 ) {
  console.log('47 / 50 = 0.94')
} else
if (a === 48 && sign === "/" && b === 1 ) {
  console.log('48 / 1 = 48')
} else
if (a === 48 && sign === "/" && b === 2 ) {
  console.log('48 / 2 = 24')
} else
if (a === 48 && sign === "/" && b === 3 ) {
  console.log('48 / 3 = 16')
} else
if (a === 48 && sign === "/" && b === 4 ) {
  console.log('48 / 4 = 12')
} else
if (a === 48 && sign === "/" && b === 5 ) {
  console.log('48 / 5 = 9.6')
} else
if (a === 48 && sign === "/" && b === 6 ) {
  console.log('48 / 6 = 8')
} else
if (a === 48 && sign === "/" && b === 7 ) {
  console.log('48 / 7 = 6.857142857142857')
} else
if (a === 48 && sign === "/" && b === 8 ) {
  console.log('48 / 8 = 6')
} else
if (a === 48 && sign === "/" && b === 9 ) {
  console.log('48 / 9 = 5.333333333333333')
} else
if (a === 48 && sign === "/" && b === 10 ) {
  console.log('48 / 10 = 4.8')
} else
if (a === 48 && sign === "/" && b === 11 ) {
  console.log('48 / 11 = 4.363636363636363')
} else
if (a === 48 && sign === "/" && b === 12 ) {
  console.log('48 / 12 = 4')
} else
if (a === 48 && sign === "/" && b === 13 ) {
  console.log('48 / 13 = 3.6923076923076925')
} else
if (a === 48 && sign === "/" && b === 14 ) {
  console.log('48 / 14 = 3.4285714285714284')
} else
if (a === 48 && sign === "/" && b === 15 ) {
  console.log('48 / 15 = 3.2')
} else
if (a === 48 && sign === "/" && b === 16 ) {
  console.log('48 / 16 = 3')
} else
if (a === 48 && sign === "/" && b === 17 ) {
  console.log('48 / 17 = 2.823529411764706')
} else
if (a === 48 && sign === "/" && b === 18 ) {
  console.log('48 / 18 = 2.6666666666666665')
} else
if (a === 48 && sign === "/" && b === 19 ) {
  console.log('48 / 19 = 2.526315789473684')
} else
if (a === 48 && sign === "/" && b === 20 ) {
  console.log('48 / 20 = 2.4')
} else
if (a === 48 && sign === "/" && b === 21 ) {
  console.log('48 / 21 = 2.2857142857142856')
} else
if (a === 48 && sign === "/" && b === 22 ) {
  console.log('48 / 22 = 2.1818181818181817')
} else
if (a === 48 && sign === "/" && b === 23 ) {
  console.log('48 / 23 = 2.0869565217391304')
} else
if (a === 48 && sign === "/" && b === 24 ) {
  console.log('48 / 24 = 2')
} else
if (a === 48 && sign === "/" && b === 25 ) {
  console.log('48 / 25 = 1.92')
} else
if (a === 48 && sign === "/" && b === 26 ) {
  console.log('48 / 26 = 1.8461538461538463')
} else
if (a === 48 && sign === "/" && b === 27 ) {
  console.log('48 / 27 = 1.7777777777777777')
} else
if (a === 48 && sign === "/" && b === 28 ) {
  console.log('48 / 28 = 1.7142857142857142')
} else
if (a === 48 && sign === "/" && b === 29 ) {
  console.log('48 / 29 = 1.6551724137931034')
} else
if (a === 48 && sign === "/" && b === 30 ) {
  console.log('48 / 30 = 1.6')
} else
if (a === 48 && sign === "/" && b === 31 ) {
  console.log('48 / 31 = 1.5483870967741935')
} else
if (a === 48 && sign === "/" && b === 32 ) {
  console.log('48 / 32 = 1.5')
} else
if (a === 48 && sign === "/" && b === 33 ) {
  console.log('48 / 33 = 1.4545454545454546')
} else
if (a === 48 && sign === "/" && b === 34 ) {
  console.log('48 / 34 = 1.411764705882353')
} else
if (a === 48 && sign === "/" && b === 35 ) {
  console.log('48 / 35 = 1.3714285714285714')
} else
if (a === 48 && sign === "/" && b === 36 ) {
  console.log('48 / 36 = 1.3333333333333333')
} else
if (a === 48 && sign === "/" && b === 37 ) {
  console.log('48 / 37 = 1.2972972972972974')
} else
if (a === 48 && sign === "/" && b === 38 ) {
  console.log('48 / 38 = 1.263157894736842')
} else
if (a === 48 && sign === "/" && b === 39 ) {
  console.log('48 / 39 = 1.2307692307692308')
} else
if (a === 48 && sign === "/" && b === 40 ) {
  console.log('48 / 40 = 1.2')
} else
if (a === 48 && sign === "/" && b === 41 ) {
  console.log('48 / 41 = 1.170731707317073')
} else
if (a === 48 && sign === "/" && b === 42 ) {
  console.log('48 / 42 = 1.1428571428571428')
} else
if (a === 48 && sign === "/" && b === 43 ) {
  console.log('48 / 43 = 1.1162790697674418')
} else
if (a === 48 && sign === "/" && b === 44 ) {
  console.log('48 / 44 = 1.0909090909090908')
} else
if (a === 48 && sign === "/" && b === 45 ) {
  console.log('48 / 45 = 1.0666666666666667')
} else
if (a === 48 && sign === "/" && b === 46 ) {
  console.log('48 / 46 = 1.0434782608695652')
} else
if (a === 48 && sign === "/" && b === 47 ) {
  console.log('48 / 47 = 1.0212765957446808')
} else
if (a === 48 && sign === "/" && b === 48 ) {
  console.log('48 / 48 = 1')
} else
if (a === 48 && sign === "/" && b === 49 ) {
  console.log('48 / 49 = 0.9795918367346939')
} else
if (a === 48 && sign === "/" && b === 50 ) {
  console.log('48 / 50 = 0.96')
} else
if (a === 49 && sign === "/" && b === 1 ) {
  console.log('49 / 1 = 49')
} else
if (a === 49 && sign === "/" && b === 2 ) {
  console.log('49 / 2 = 24.5')
} else
if (a === 49 && sign === "/" && b === 3 ) {
  console.log('49 / 3 = 16.333333333333332')
} else
if (a === 49 && sign === "/" && b === 4 ) {
  console.log('49 / 4 = 12.25')
} else
if (a === 49 && sign === "/" && b === 5 ) {
  console.log('49 / 5 = 9.8')
} else
if (a === 49 && sign === "/" && b === 6 ) {
  console.log('49 / 6 = 8.166666666666666')
} else
if (a === 49 && sign === "/" && b === 7 ) {
  console.log('49 / 7 = 7')
} else
if (a === 49 && sign === "/" && b === 8 ) {
  console.log('49 / 8 = 6.125')
} else
if (a === 49 && sign === "/" && b === 9 ) {
  console.log('49 / 9 = 5.444444444444445')
} else
if (a === 49 && sign === "/" && b === 10 ) {
  console.log('49 / 10 = 4.9')
} else
if (a === 49 && sign === "/" && b === 11 ) {
  console.log('49 / 11 = 4.454545454545454')
} else
if (a === 49 && sign === "/" && b === 12 ) {
  console.log('49 / 12 = 4.083333333333333')
} else
if (a === 49 && sign === "/" && b === 13 ) {
  console.log('49 / 13 = 3.769230769230769')
} else
if (a === 49 && sign === "/" && b === 14 ) {
  console.log('49 / 14 = 3.5')
} else
if (a === 49 && sign === "/" && b === 15 ) {
  console.log('49 / 15 = 3.2666666666666666')
} else
if (a === 49 && sign === "/" && b === 16 ) {
  console.log('49 / 16 = 3.0625')
} else
if (a === 49 && sign === "/" && b === 17 ) {
  console.log('49 / 17 = 2.8823529411764706')
} else
if (a === 49 && sign === "/" && b === 18 ) {
  console.log('49 / 18 = 2.7222222222222223')
} else
if (a === 49 && sign === "/" && b === 19 ) {
  console.log('49 / 19 = 2.5789473684210527')
} else
if (a === 49 && sign === "/" && b === 20 ) {
  console.log('49 / 20 = 2.45')
} else
if (a === 49 && sign === "/" && b === 21 ) {
  console.log('49 / 21 = 2.3333333333333335')
} else
if (a === 49 && sign === "/" && b === 22 ) {
  console.log('49 / 22 = 2.227272727272727')
} else
if (a === 49 && sign === "/" && b === 23 ) {
  console.log('49 / 23 = 2.130434782608696')
} else
if (a === 49 && sign === "/" && b === 24 ) {
  console.log('49 / 24 = 2.0416666666666665')
} else
if (a === 49 && sign === "/" && b === 25 ) {
  console.log('49 / 25 = 1.96')
} else
if (a === 49 && sign === "/" && b === 26 ) {
  console.log('49 / 26 = 1.8846153846153846')
} else
if (a === 49 && sign === "/" && b === 27 ) {
  console.log('49 / 27 = 1.8148148148148149')
} else
if (a === 49 && sign === "/" && b === 28 ) {
  console.log('49 / 28 = 1.75')
} else
if (a === 49 && sign === "/" && b === 29 ) {
  console.log('49 / 29 = 1.6896551724137931')
} else
if (a === 49 && sign === "/" && b === 30 ) {
  console.log('49 / 30 = 1.6333333333333333')
} else
if (a === 49 && sign === "/" && b === 31 ) {
  console.log('49 / 31 = 1.5806451612903225')
} else
if (a === 49 && sign === "/" && b === 32 ) {
  console.log('49 / 32 = 1.53125')
} else
if (a === 49 && sign === "/" && b === 33 ) {
  console.log('49 / 33 = 1.4848484848484849')
} else
if (a === 49 && sign === "/" && b === 34 ) {
  console.log('49 / 34 = 1.4411764705882353')
} else
if (a === 49 && sign === "/" && b === 35 ) {
  console.log('49 / 35 = 1.4')
} else
if (a === 49 && sign === "/" && b === 36 ) {
  console.log('49 / 36 = 1.3611111111111112')
} else
if (a === 49 && sign === "/" && b === 37 ) {
  console.log('49 / 37 = 1.3243243243243243')
} else
if (a === 49 && sign === "/" && b === 38 ) {
  console.log('49 / 38 = 1.2894736842105263')
} else
if (a === 49 && sign === "/" && b === 39 ) {
  console.log('49 / 39 = 1.2564102564102564')
} else
if (a === 49 && sign === "/" && b === 40 ) {
  console.log('49 / 40 = 1.225')
} else
if (a === 49 && sign === "/" && b === 41 ) {
  console.log('49 / 41 = 1.1951219512195121')
} else
if (a === 49 && sign === "/" && b === 42 ) {
  console.log('49 / 42 = 1.1666666666666667')
} else
if (a === 49 && sign === "/" && b === 43 ) {
  console.log('49 / 43 = 1.1395348837209303')
} else
if (a === 49 && sign === "/" && b === 44 ) {
  console.log('49 / 44 = 1.1136363636363635')
} else
if (a === 49 && sign === "/" && b === 45 ) {
  console.log('49 / 45 = 1.0888888888888888')
} else
if (a === 49 && sign === "/" && b === 46 ) {
  console.log('49 / 46 = 1.065217391304348')
} else
if (a === 49 && sign === "/" && b === 47 ) {
  console.log('49 / 47 = 1.0425531914893618')
} else
if (a === 49 && sign === "/" && b === 48 ) {
  console.log('49 / 48 = 1.0208333333333333')
} else
if (a === 49 && sign === "/" && b === 49 ) {
  console.log('49 / 49 = 1')
} else
if (a === 49 && sign === "/" && b === 50 ) {
  console.log('49 / 50 = 0.98')
} else
if (a === 50 && sign === "/" && b === 1 ) {
  console.log('50 / 1 = 50')
} else
if (a === 50 && sign === "/" && b === 2 ) {
  console.log('50 / 2 = 25')
} else
if (a === 50 && sign === "/" && b === 3 ) {
  console.log('50 / 3 = 16.666666666666668')
} else
if (a === 50 && sign === "/" && b === 4 ) {
  console.log('50 / 4 = 12.5')
} else
if (a === 50 && sign === "/" && b === 5 ) {
  console.log('50 / 5 = 10')
} else
if (a === 50 && sign === "/" && b === 6 ) {
  console.log('50 / 6 = 8.333333333333334')
} else
if (a === 50 && sign === "/" && b === 7 ) {
  console.log('50 / 7 = 7.142857142857143')
} else
if (a === 50 && sign === "/" && b === 8 ) {
  console.log('50 / 8 = 6.25')
} else
if (a === 50 && sign === "/" && b === 9 ) {
  console.log('50 / 9 = 5.555555555555555')
} else
if (a === 50 && sign === "/" && b === 10 ) {
  console.log('50 / 10 = 5')
} else
if (a === 50 && sign === "/" && b === 11 ) {
  console.log('50 / 11 = 4.545454545454546')
} else
if (a === 50 && sign === "/" && b === 12 ) {
  console.log('50 / 12 = 4.166666666666667')
} else
if (a === 50 && sign === "/" && b === 13 ) {
  console.log('50 / 13 = 3.8461538461538463')
} else
if (a === 50 && sign === "/" && b === 14 ) {
  console.log('50 / 14 = 3.5714285714285716')
} else
if (a === 50 && sign === "/" && b === 15 ) {
  console.log('50 / 15 = 3.3333333333333335')
} else
if (a === 50 && sign === "/" && b === 16 ) {
  console.log('50 / 16 = 3.125')
} else
if (a === 50 && sign === "/" && b === 17 ) {
  console.log('50 / 17 = 2.9411764705882355')
} else
if (a === 50 && sign === "/" && b === 18 ) {
  console.log('50 / 18 = 2.7777777777777777')
} else
if (a === 50 && sign === "/" && b === 19 ) {
  console.log('50 / 19 = 2.6315789473684212')
} else
if (a === 50 && sign === "/" && b === 20 ) {
  console.log('50 / 20 = 2.5')
} else
if (a === 50 && sign === "/" && b === 21 ) {
  console.log('50 / 21 = 2.380952380952381')
} else
if (a === 50 && sign === "/" && b === 22 ) {
  console.log('50 / 22 = 2.272727272727273')
} else
if (a === 50 && sign === "/" && b === 23 ) {
  console.log('50 / 23 = 2.1739130434782608')
} else
if (a === 50 && sign === "/" && b === 24 ) {
  console.log('50 / 24 = 2.0833333333333335')
} else
if (a === 50 && sign === "/" && b === 25 ) {
  console.log('50 / 25 = 2')
} else
if (a === 50 && sign === "/" && b === 26 ) {
  console.log('50 / 26 = 1.9230769230769231')
} else
if (a === 50 && sign === "/" && b === 27 ) {
  console.log('50 / 27 = 1.8518518518518519')
} else
if (a === 50 && sign === "/" && b === 28 ) {
  console.log('50 / 28 = 1.7857142857142858')
} else
if (a === 50 && sign === "/" && b === 29 ) {
  console.log('50 / 29 = 1.7241379310344827')
} else
if (a === 50 && sign === "/" && b === 30 ) {
  console.log('50 / 30 = 1.6666666666666667')
} else
if (a === 50 && sign === "/" && b === 31 ) {
  console.log('50 / 31 = 1.6129032258064515')
} else
if (a === 50 && sign === "/" && b === 32 ) {
  console.log('50 / 32 = 1.5625')
} else
if (a === 50 && sign === "/" && b === 33 ) {
  console.log('50 / 33 = 1.5151515151515151')
} else
if (a === 50 && sign === "/" && b === 34 ) {
  console.log('50 / 34 = 1.4705882352941178')
} else
if (a === 50 && sign === "/" && b === 35 ) {
  console.log('50 / 35 = 1.4285714285714286')
} else
if (a === 50 && sign === "/" && b === 36 ) {
  console.log('50 / 36 = 1.3888888888888888')
} else
if (a === 50 && sign === "/" && b === 37 ) {
  console.log('50 / 37 = 1.3513513513513513')
} else
if (a === 50 && sign === "/" && b === 38 ) {
  console.log('50 / 38 = 1.3157894736842106')
} else
if (a === 50 && sign === "/" && b === 39 ) {
  console.log('50 / 39 = 1.2820512820512822')
} else
if (a === 50 && sign === "/" && b === 40 ) {
  console.log('50 / 40 = 1.25')
} else
if (a === 50 && sign === "/" && b === 41 ) {
  console.log('50 / 41 = 1.2195121951219512')
} else
if (a === 50 && sign === "/" && b === 42 ) {
  console.log('50 / 42 = 1.1904761904761905')
} else
if (a === 50 && sign === "/" && b === 43 ) {
  console.log('50 / 43 = 1.1627906976744187')
} else
if (a === 50 && sign === "/" && b === 44 ) {
  console.log('50 / 44 = 1.1363636363636365')
} else
if (a === 50 && sign === "/" && b === 45 ) {
  console.log('50 / 45 = 1.1111111111111112')
} else
if (a === 50 && sign === "/" && b === 46 ) {
  console.log('50 / 46 = 1.0869565217391304')
} else
if (a === 50 && sign === "/" && b === 47 ) {
  console.log('50 / 47 = 1.0638297872340425')
} else
if (a === 50 && sign === "/" && b === 48 ) {
  console.log('50 / 48 = 1.0416666666666667')
} else
if (a === 50 && sign === "/" && b === 49 ) {
  console.log('50 / 49 = 1.0204081632653061')
} else
if (a === 50 && sign === "/" && b === 50 ) {
  console.log('50 / 50 = 1')
} else
{
  console.log("Something's wrong")
}
  console.log("Thanks for using this calculator. :)")
}
