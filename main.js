//what can the user see?
  //three inputs for the three numbers
  //one button to Submit
  //text showing the outcome--win or lose

//what can the user do?
  //enter one number into field one between 1-50
  //enter one number into field 2 between 1-50
  //enter one number into field 3 between 1-50
  //click Submit

//the user clicks Submit
document.addEventListener("DOMContentLoaded", function(){

  function userClickedSubmit(){
    //input values are strings..turning them into numbers
    let userInput1 = parseInt(document.getElementById('firstNum').value)
    let userInput2= parseInt(document.getElementById('secNum').value)
    let userInput3 = parseInt(document.getElementById('thirdNum').value)
    let randNum = Math.round(Math.random() * 50)
    //user has to enter number between 1 -50
    if(userInput1< 1 || userInput1 >50 || userInput2 < 1 || userInput2 > 50|| userInput3<1 || userInput3>50){
      alert('Must be a number between 1-50')
    }else
    //what can the user expect?
      //an outcome in text saying that one of their numbers matches the random number
      //conditionsals needed
        //user plays a number , compare it to random number
        //if random number and player number are the same , the user wins
        //if random numbeer and player number are not the same, then user loses
   if (userInput1==randNum || userInput2==randNum || userInput3 == randNum){
     document.getElementById('outcome').innerHTML="You won!"
     console.log(randNum, userInput1, userInput2, userInput3)
   }else if(userInput1 !== randNum || userInput2 !== randNum || userInput3 !== randNum){
     document.getElementById('outcome').innerHTML="You lost!"
     console.log(randNum, userInput1,userInput2, userInput3)
   }
 }


  document.getElementById('submit').onclick=userClickedSubmit
});
