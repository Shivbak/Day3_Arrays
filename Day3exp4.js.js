var event = document.getElementById("button");

    event.addEventListener('click',splice,false);

var items = [1,2,4,5];

document.getElementById("demo").innerHTML = items ;

function splice()
{
    var a = parseInt(document.getElementById("index").value);
    items.splice(2,0,a);
   document.getElementById("demo1").innerHTML = items;
}

 