

var add = document.querySelector(".add")
add.addEventListener("click",function(){
    document.querySelector(".overlay").style.display = "block"
    document.querySelector(".popup").style.display = "block"
})

var cancel = document.querySelector("#cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
  document.querySelector(".overlay").style.display = "none"
    document.querySelector(".popup").style.display = "none"
}
)

var addbook = document.getElementById("add-book")
var notetitle = document.getElementById("input")
var des = document.getElementById("des") 
var box = document.querySelector(".box")
var conti = document.querySelector(".container")
var popup2 = document.querySelector(".popup2")
function pop2(){

    popup2.style.display = "none"

}
function added(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML= `<h2>${notetitle.value}</h1>
    <p>${des.value}</p>
    <button onclick="deleted(event)" id ="delete">DELETE</button>`
    
    if(notetitle.value==""){
        
        popup2.style.display = "block"
        

        return;
    }
    
    conti.append(div)
    document.querySelector(".overlay").style.display = "none"
    document.querySelector(".popup").style.display = "none"
    des.value="";
    notetitle.value="";
}
   var removed = document.querySelector("#delete")
        function deleted(event){
            event.target.parentElement.remove()
        }