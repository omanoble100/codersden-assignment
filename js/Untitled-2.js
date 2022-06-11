// let n = 7
let str = ""
  for (let i = 0; i<= 7; i++){
       for (let j = 0; j < i; j++){
            str += "#"
       }
       str +="\n"

  }
  console.log(str);


  [1,2,3].forEach(function(base, length){
      console.log(base, length)
  })
