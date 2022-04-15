
// Day 2: Exercises

// Exercise: Level 1

// Qst. 1
let title = '30 Days Of JavaScript'
//  Qst. 2
console.log(title)
//  Qst. 3
console.log(title.length)
//  Qst. 4
console.log(title.toUpperCase())
//  Qst. 5
console.log(title.toLowerCase())
//  Qst. 6
console.log(title.substring(3,15))
//  Qst. 7
console.log(title.substring(0,2))
// Qst. 8
console.log(title.includes('Script'))
// Qst. 9
console.log(title.split())
// Qst. 10
console.log(title.split(''))
// Qst. 11

let techCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(techCompany.split(","))

// Qst. 12
console.log(title.replace('JavaScript', 'Python'))

// Qst. 13
console.log(title.charAt('15'))

// Qst. 14
console.log(title.charCodeAt('J'))

// Qst. 15
console.log(title.indexOf('a'));

// Qst. 16
console.log(title.lastIndexOf('a'));
// Qst. 17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

// Qst. 18
console.log(sentence.lastIndexOf('because'));

// Qst. 19
console.log(sentence.search('because'));

// Qst. 20
let word = '   30 Days of Javascript '
console.log(word.trim(word))

// Qst. 21
console.log(title.startsWith('30 Days'))

// Qst. 22
console.log(title.endsWith('JavaScript'))

// Qst. 23
console.log(title.match('a'))

// Qst. 24
let word1 = '30 Days of'

console.log(word1.concat(' Javascript'))

// Qst. 25
console.log(title.repeat(2))



// Exercise: Level 2

// Qst. 1

let quote1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches usto help one another."

console.log(quote1);

// Qst. 2

let quote2 ='"Love is not patronizing and charoty isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead. "'

console.log(quote2);

// Qst. 3
let checkNum = '10'
let changToNum = parseInt(checkNum)
let check = changToNum == 10
console.log(typeof check)
console.log(check)


// Qst. 4
let floatNum = '9.8'
let changeToNum2 = parseFloat(floatNum)
let roundUp = Math.round(changeToNum2) 

let finalNum = roundUp == 10

console.log(finalNum)

// Qst. 5

let check2 = 'python'
let check3 = 'jargon'

console.log(check2.includes('on'))
console.log(check3.includes('on'))


// Qst. 6
let sentence2 = 'I hope this course is not full of jargon'

console.log(sentence2.includes('jargon'))

// Qst. 7

let numGenerator = Math.floor(Math.random () * 101)

console.log(numGenerator)

// Qst. 8
let numGenerator2 = Math.floor(Math.random() * 51) + 50;

console.log(numGenerator2)

// Qst. 9

let numGenerator3 = Math.floor(Math.random() * 256)

console.log(numGenerator3)

// Qst. 10

let dString = 'JavaScript'
 randomCheck = Math.floor(Math.random() * dString.length);

 console.log(randomCheck)

 
// Qst. 11




// Qst. 12

let sentence3 = 'You cannot end a sentence with because because because is a conjunction'
let sent22 = sentence3.substring(31,54)
console.log(sent22)


// Exercises: Level 3

// Qst. 1
let sentence4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence4.match(/love/gi))

// Qst. 2
console.log(sentence3.match(/because/g))

// Qst. 3
const sentence5 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence5.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. D8oes this motivate you to be a teacher? This 30 Days Of JavaScript is also the result of love of teaching'))


// Qst. 4

let statement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary = statement.match(/\d+/g)

let perMonth =  parseInt(salary[0])
let annualBonus =  parseInt(salary[1])
let coursePayment = parseInt(salary[2])

let total = ((perMonth + coursePayment) * 12) + annualBonus

console.log(total)








