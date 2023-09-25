
var allproducts = document.querySelectorAll(".product ")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn")
var prices = document.querySelector("#prices")
var totalPrice = 0
    allproducts.forEach(function(item){
    item.onclick = function () {
        content.innerHTML += item.textContent + "   --   " 
        totalPrice += +(item.getAttribute("price"))
        if(content.innerHTML !=""){
            btn.style.display ="block";
            content.style.display ="block";
        }
    }
})
btn.onclick = function(){
    prices.innerHTML = ("Total Price : ") + totalPrice +( " $")
}