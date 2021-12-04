var myForm = document.querySelector(".myform")
var first = document.querySelector(".first")
var secound = document.querySelector(".secound")
var third = document.querySelector(".third")
var furth = document.querySelector(".furth")
var fifth = document.querySelector(".fifth")
var sixth = document.querySelector(".sixth")
var seventh = document.querySelector(".seventh")
var eigth = document.querySelector(".eighth")
var result = document.querySelector(".result")

myForm.addEventListener("submit",function(event){
    event.preventDefault()
var one = Number(first.value);
var two = Number(secound.value);
var three = Number(third.value);
var four = Number(furth.value);
var five = Number(fifth.value);
var six = Number(sixth.value);
var seven = Number(seventh.value);
var eight = Number(eigth.value);
    if( (one > 4) || (two > 4) || (three > 4) || (four > 4) || (five > 4) || (six > 4) || (seven > 4) || (eight > 4)){
      alert("please enter right value")
    }else{
      var input_gpa = {
        one : ((Number(first.value) * 5)/100),
        two : ((Number(secound.value)*5)/100),
        three : ((Number(third.value)*5)/100),
        foure : ((Number(furth.value)*10)/100),
        five : ((Number(fifth.value)*15)/100),
        six : ((Number(sixth.value)*20)/100),
        seven : ((Number(seventh.value)*25)/100),
        eight : ((Number(eigth.value)*15)/100)
      }
      var total = input_gpa["one"] + input_gpa["two"] + input_gpa["three"] + input_gpa["foure"] + input_gpa["five"] + input_gpa["six"] + input_gpa["seven"] + input_gpa["eight"]
      result.innerHTML = total; 
    }
 
})
