

var mujahid=[70,75,80,85,90,95]
var sum=0
for(let i=0; i<mujahid.length; i++){
    sum = sum+mujahid[i]    
}
console.log("The total mark is : " + sum)
 var avg=sum/mujahid.length

 console.log("The AVG numberis : " + avg);

 if (avg < 60){
    console.log("The grade is Grade : F");      
    } 
  else if (avg < 70) {
          console.log("The grade is Grade : D"); 
            } 
  else if (avg < 80) 
       {
          console.log("The grade is Grade : C"); 
  } else if (avg < 90) {
          console.log("The grade is Grade : B"); 
  } else if (avg < 100) {
          console.log("The grade is Grade : A"); 
}
