document.getElementById("submit").onclick = function(){
  const marks = document.getElementById("input").value;
  switch(marks){
    case "A":
      console.log("you did great");
      break
    case "B":
      console.log("you did good");
      break
    case "C":
      console.log("you did okey");
      break
    case "D":
      console.log("you barely passed")   
      break
    default:
      console.log(marks,"is not a letter grade")  
  }
}