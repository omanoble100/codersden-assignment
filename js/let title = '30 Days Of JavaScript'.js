let title = '30 Days Of JavaScript'
console.log(title.charAt('15'))

let sum=0
for(let i = 0; i < 101; i++){
    sum = i + sum;

    console.log(sum)
}

console.log(sum)

let pattern;

for (let i = 0; i <= 10; i++){

    pattern = `${i}, ${i*i}, ${i*i*i} `
    console.log(pattern)
}

console.log(pattern)



function myFunction(a, b){
        if (a.includes(b)){
            console.log(b+a)
        }else{
            console.log(a+b)
        }
    
}

myFunction('lips', 's')

function dFuction(a){
    console.log(Object.keys(a))
}

dFuction({j:1,i:2,x:3,z:4})