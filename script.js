keys = document.getElementsByClassName("key")
mainSC = document.getElementById("main")
secondarySC = document.getElementById("secondary")
txt = ""
txt2 = ""
operation = ""

Array.from(keys).forEach(element => {
   element.addEventListener("click",HandleClick)
})
function HandleClick(e){
   
   key = e.target
   // console.log(key.id)
   typechar(key.id)
}
function typechar(id){
   
   if(txt.length >= 13){
      mainSC.style.fontSize = "20px"
   }
   if(txt.length >= 20){
      clear()
      mainSC.innerText = "ERROR"
      return
   }
   if(id.slice(0,3) == "key"){
      if(id.slice(3,4) == "P")txt += "."
      else txt += id.slice(3,4)
      mainSC.innerText = txt
      if(id.slice(3,4) == "C"){
         clear()
      }
   }
   if(id == "equals")equals()
   if(id == "times")times()
   if(id == "divide")divide()
   if(id == "plus")plus()
   if(id == "minus")minus()
   console.log(txt.length)
}
function equals(){
   if(operation == "plus"){
      result = parseFloat(txt2) + parseFloat(txt)
      txt = result
      mainSC.innerText = result
      txt2 = ""
      operation = ""
      secondarySC.innerText = ""
   }
   if(operation == "minus"){
      result = parseFloat(txt2) - parseFloat(txt)
      txt = result
      mainSC.innerText = result
      txt2 = ""
      operation = ""
      secondarySC.innerText = ""
   }
   if(operation == "divide"){
      result = parseFloat(txt2) / parseFloat(txt)
      txt = result
      mainSC.innerText = result
      txt2 = ""
      operation = ""
      secondarySC.innerText = ""
   }
   if(operation == "times"){
      result = parseFloat(txt2) * parseFloat(txt)
      txt = result
      mainSC.innerText = result
      txt2 = ""
      operation = ""
      secondarySC.innerText = ""
   }
}
function times(){
   if(operation != "")return
   txt2 = txt
   txt = ""
   mainSC.innerText = "0"
   secondarySC.innerText = txt2+" *"
   operation = "times"
}
function divide(){
   if(operation != "")return
   txt2 = txt
   txt = ""
   mainSC.innerText = "0"
   secondarySC.innerText = txt2+" /"
   operation = "divide"
}
function plus(){
   if(operation != "")return
   txt2 = txt
   txt = ""
   mainSC.innerText = "0"
   secondarySC.innerText = txt2+" +"
   operation = "plus"
}
function minus(){
   if(operation != "")return
   txt2 = txt
   txt = ""
   mainSC.innerText = "0"
   secondarySC.innerText = txt2+" -"
   operation = "minus"
}
function clear(){
   txt = ""
         txt2 = ""
         mainSC.innerText = "0"
         secondarySC.innerText = ""
         operation = ""
}