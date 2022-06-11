
import { countries } from './countries.js'
import { webTechs } from './web_techs.js'


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

// let dChecks = 'JavaScript'
//   dLength = dChecks.length
//  randomCheck = Math.floor(Math.random() * dLength);

//  console.log(randomCheck)

 
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

console.log(sentence5.replace(/[%$%@;#&!?]/g,''))


// Qst. 4

let statement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary = statement.match(/\d+/g)

let perMonth =  parseInt(salary[0])
let annualBonus =  parseInt(salary[1])
let coursePayment = parseInt(salary[2])

let total = ((perMonth + coursePayment) * 12) + annualBonus

console.log(total)



// DAY 3
// Exercise 1  Qst. 7

// Qst. i
const currentYear = new Date()
console.log(currentYear.getFullYear())

// Qst. ii

const currentMonth = new Date()
console.log(currentMonth.getMonth())

// Qst. iii

const currentDate = new Date()
console.log(currentDate.getDate())

// Qst. iv
const currentDay = new Date()
console.log(currentDay.getDay())


// Qst. v
const currentHours = new Date()
console.log(currentHours.getHours())

// Qst. vi
const currentMinutes = new Date()
console.log(currentMinutes.getMinutes())

// Qst. vii
const secondsEllapsed = new Date()
console.log(secondsEllapsed.getTime() - secondsEllapsed.getMilliseconds())



// Exercise :Level 2

// Qst. 1

let base = 10
let height = 23

const area = 0.5 * base * height

console.log(`The area of the triangle is ${area}`)

// Qst. 4

let radius = 15

const pi = 3.14

const areaOfCircle = pi * radius * radius
const circumOfCircle = 2 * pi * radius

console.log(` The area of a Circle is ${areaOfCircle} and the circumference is ${circumOfCircle}`)


// Qst. 5
/* Calculate the slope, x-intercept and y-intercept of y = 2x -2*/

let xnum = 0
let ynum = 0
let interceptY = (2*xnum) - 2
let interceptX = -2/2

let slope = (ynum - interceptY)/interceptX
console.log(`The slope is ${slope}  Y intercept is ${interceptY} and X is ${interceptX}` )

// Qst 6
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let y1 = 2
let y2 = 10
let x1 = 2
let x2 = 6


let slope_m = (y2 - y1)/(x2 - x1)

console.log(slope_m)


// Qst 8
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0

let x = -1.1;

let findY = (x *2) + (6 * x )+ 9

console.log(findY)

// Qst. 10
let checkName = 'oma'

if (checkName.length > 7){
  console.log('Your name is long')
} else {
    console.log('Your name is short')
}


// Qst. 14
let years = 24
let secondsInAYear = 365 * 24 * 60 * 60

let totalSeconds = years * secondsInAYear

console.log(`You lived ${totalSeconds}  seconds`)

// Qst. 15

let year = new Date();
let month = new Date()
let day = new Date()
let hour = new Date()
let minutes = new Date ()

console.log(`${year.getFullYear()} - ${month.getMonth() + 1} - ${day.getDate() } ${hour.getHours()} : ${minutes.getMinutes()} `)

console.log(`${day.getDate() } - ${month.getMonth() + 1} - ${year.getFullYear()} ${hour.getHours()} : ${minutes.getMinutes()}`)

console.log(`${day.getDate() } / ${month.getMonth() + 1} / ${year.getFullYear()} ${hour.getHours()} : ${minutes.getMinutes()}`)

// Exercise: Level 3

console.log(`${year.getFullYear()} - 0${month.getMonth() + 1} - 0${day.getDate() } 0${hour.getHours()} : 0${minutes.getMinutes()} `)

// Another Answer for Level 3

 let checkMonths = month.getMonth() + 1;
 let checkHours = hour.getHours();
 let checkDays = day.getDay();
 let checkMinutes = minutes.getMinutes();
 let readable, myHour, myDays, myMinutes;

if (checkMonths <= 9){
   readable ='0' + checkMonths;
} else {
  readable = checkMonths;
}

if (checkHours <= 9){
  myHour = '0' + checkHours;
}else{
  myHour = checkHours
}

if(checkDays <= 9){
  myDays = '0' + checkDays;
}else{
  myDays = checkDays
}

if(checkMinutes <= 9){
  myMinutes = '0' + checkMinutes;
}else{
  myMinutes = checkMinutes
}


console.log(`${year.getFullYear()}-${readable}- ${myDays}-${myHour} : ${myMinutes}`)


// Week 4
// Exercise : Level 2

// Qst. 1

// Write a code which can give grades to students according to theirs scores: 80-100, A, 70-89, B, 60-69, C, 50-59, D, 0-49, F


let grade = 79;

if (grade < 0) {
  console.log('This is not a grade')
} else if (grade >= 80 && grade <= 100){
  console.log('You got an A')
} else if (grade >= 70 && grade <= 79){
  console.log('You got a B')
} else if (grade >= 60 && grade <= 69){
  console.log('You got a C')
} else if (grade >= 50 && grade <= 59){
  console.log('You got a D')
} else if (grade <= 49){
  console.log('You got an F')
}


// Qst. 2
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = 'OCTOBER';
 let checkSeason = season.toLowerCase()

 switch(checkSeason) {
   case 'september':
   case 'october':
   case 'november':
     console.log('The season is Autumn')
    break
   
   case 'december':
   case 'january':
   case 'february':
     console.log('The season is Winter')
     break

   case 'march':
   case 'april':
   case 'may':
     console.log('The season is Spring')
     break

   case 'june':
   case 'july':
   case 'august':
   console.log('The season is Summer')
   break
   default:
     console.log('It is not a season')

 }

//  Qst.3


let theDay = 'SaTurDay';
 let checkDay = theDay.toLowerCase();
 let printDay = checkDay.charAt(0).toUpperCase()+ checkDay.slice(1);

 switch(checkDay) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log(printDay + ' is a working day')
   break
  
  case 'saturday':
  case 'sunday':
    console.log(printDay + ' is a weekend')
    break
  
    default:
      console.log(printDay + ' is niether a working day or a weekend')

 }

//  Level 3
let theMonth = 'MAY';
 let checkMonth = theMonth.toLowerCase();
 let printMonth = checkMonth.charAt(0).toUpperCase()+ checkMonth.slice(1);

 switch(checkMonth){
  case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
      console.log(printMonth + ' has 31 days')
     break
    
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      console.log(printMonth + ' has 30 days')
      break

    case 'february':
      console.log(printMonth + ' has 28 days')
      break
    
      default:
        console.log(printMonth + ' is not a month')
  
   }


  //  Week 5
  // Level 2

  // Qst. 1
   console.log(countries)
   console.log(webTechs)

  //  Qst. 2
  let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

  let checkRemove = text.replace(/[.,]/g, "")

  let dInfo = checkRemove.split(" ");

  console.log(dInfo)
  console.log(dInfo.length)

  // Qst. 3
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

  shoppingCart.unshift('Meat')

  console.log(shoppingCart)

  shoppingCart.push('Sugar')

  console.log(shoppingCart)

  shoppingCart.splice(4,1)

  console.log(shoppingCart)

  shoppingCart.splice(3,1, 'Green Tea')

  console.log(shoppingCart)

  // Qst. 4

  //  In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

  if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
  }else{
    console.log(countries.push('Ethiopia'))
  }

//  Qst. 5
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess')
}else{
  webTechs.push('Sass')
  console.log(webTechs)
}

// Qst. 6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


// LEVEL 3

// Qst. 1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

console.log(ages)

let checkMax = Math.max(...ages)

console.log(checkMax)

let checkMin = Math.min(...ages)
console.log(checkMin)


// let sum = ages.length / 2;
let ress ;
// for (let i = 0; i < ages.length; i++){    
//     sum = sum + ages[i];
// }
if (ages.length % 2 == 0){
  let sum; let chh; let wee;
  sum = ages.length / 2
      chh = ages[sum]
      wee = ages[sum -1]

    console.log(ress = parseInt((chh + wee)/2))

}else {
  let sum; let wek;
    ages.length/2
        sum = ages.length/2
        console.log(sum)
       wek = Math.floor(sum)

       console.log(wek)
  ress = ages[wek]

}


 console.log(ress)

//  Find the average age(all items divided by number of items)

let totalNum=0
 for (let i = 0; i< ages.length; i++){

    totalNum += ages[i]
     
  }

  let numOfItems = ages.length
  
  let averageNum = totalNum/numOfItems

  console.log(averageNum)

  // Find the range of the ages(max minus min)

    let rangeAges = checkMax - checkMin

    console.log(rangeAges)

    // Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
     let compareValue1 = checkMin - averageNum

     let compareValue2 = checkMax - averageNum

     let checkValue = compareValue2 - compareValue1

     console.log(checkValue)


     console.log(countries.splice(0, 10))

    // Find the middle country(ies) in the countries array

    let checkMiddleIndex = Math.floor(countries.length/2)

    let middleCountry = countries[checkMiddleIndex]
  
    console.log(middleCountry)

    // Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.






    // Day 6


    // Qst. 4

    let str = ""
    for (let i = 0; i<= 7; i++){
       for (let j = 0; j < i; j++){
            str += "#"
       }
       str +="\n"

    }
    
    console.log(str);


    // Qst. 5
    for(let i = 0; i<= 10; i++){
      console.log(`${i} x ${i} = ${i * i}`)
    }



    // Qst. 6
    let pattern;

    for (let i = 0; i <= 10; i++){
    
        pattern = `${i}, ${i*i}, ${i*i*i} `
        console.log(pattern)
    }
    
    // Qst. 7 & 8
    for(let i = 0; i<=100; i++){
      if(i % 2 == 0){
          console.log('This is an even number ' + i)
      }
      else{
          console.log('This is an odd number ' + i)
      }
  }

    // Qst. 10
    let sum=0
    for(let i = 0; i < 101; i++){
        sum = i + sum;

        console.log(sum)
    }

