var itm = document.getElementById("item");
var btn = document.getElementById("btn");
var ul = document.querySelector("ul");
var i = 0;
var dlt_btn;

btn.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itm.value.concat(" ")));
    ul.appendChild(li);
    console.log(++i);
    itm.value = "";

    dlt_btn = document.createElement("button");
    dlt_btn.appendChild(document.createTextNode("delete"));
    li.appendChild(dlt_btn);
    var x = li.value;
    dlt_btn.addEventListener("click", function(){
        if (x===dlt_btn.parentElement.value){
            li.remove();
        }
        
    }) 
    
})



