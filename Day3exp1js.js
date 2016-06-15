var event = document.getElementById("button");
    event.addEventListener('click',myfirst,false);

var items = [];

function myfirst()
{
    items[0] = document.getElementById("input1").value;
    items[1] = document.getElementById("input2").value;
    items[2] = document.getElementById("input3").value;
    
    for(var i =0;i<items.length;i++)
        {
            document.getElementById("demo").innerHTML += items[i] + " ";
        }
}

