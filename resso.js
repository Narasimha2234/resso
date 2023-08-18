function show1() {
    var element = document.getElementById("innerani1");
    var c=document.getElementsByClassName("animg1")
    if (element.style.display === "none") {
      element.style.display = "block";
      c[0].style.border="30px solid red"
    } else {
      element.style.display = "none";
      c[0].style.border="30px solid white"
    }
    setTimeout(show1,1500);
  }
  show1();
  function show2() {
    var element = document.getElementById("innerani2");
    var c=document.getElementsByClassName("animg2")
    if (element.style.display === "none") {
      element.style.display = "block";
      c[0].style.border="30px solid red"
    } else {
      element.style.display = "none";
      c[0].style.border="30px solid white"
    }
    setTimeout(show2,3000);
  }
  show2();
  function show3() {
    var element = document.getElementById("innerani3");
    var c=document.getElementsByClassName("animg3")

    if (element.style.display === "none") {
      element.style.display = "block";
      c[0].style.border="30px solid red"

    } else {
      element.style.display = "none";
      c[0].style.border="30px solid white"

    }
    setTimeout(show3,4500 );
  }
  show3();

  
let exp=document.getElementById("exp")
console.log(exp);

exp.onmouseover=()=>{
  let exp1=document.getElementById("explore-bar")
  console.log(exp1);
  let display=exp1.classList.toggle(true)
  console.log(display);
  if(display){
    exp1.style.visibility="visible" 
  }
  else{
    exp1.style.visibility="hidden"
  }
}

exp.onmouseleave=()=>{
  let exp1=document.getElementById("explore-bar")
  console.log(exp1);
  let display=exp1.classList.toggle(true)
  console.log(display);
  if(display){
    exp1.style.visibility="visible" 
  }
  else{
    exp1.style.visibility="hidden"
  }
}

let play=document.getElementById("play")
console.log(play);
let display=false
play.onclick=()=>{ 
  let aud=document.getElementById("aud")
  console.log(aud);
  if(display){
    
  aud.autoplay=false;
  aud.load()
  }
  else{
    
    aud.autoplay=true;
    aud.load()
  }
  display= !display
}
// play.onmouseover=()=>{
//   let exp1=document.getElementById("play")
//   console.log(exp1);
//   let display=exp1.classList.toggle(true)
//   console.log(display);
//   if(display){
//     exp1.style.visibility="visible" 
//   }
//   else{
//     exp1.style.visibility="hidden"
//   }
// }
// play.onmouseleave=()=>{
//   let exp1=document.getElementById("play")
//   console.log(exp1);
//   let display=exp1.classList.toggle(true)
//   console.log(display);
//   if(display){
//     exp1.style.visibility="visible" 
//   }
//   else{
//     exp1.style.visibility="hidden"
//   }
// }




  
 