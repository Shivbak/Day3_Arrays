var event1 = document.getElementById("button1");
    event1.addEventListener('click',shift,false);

var event2 = document.getElementById("button2");
    event2.addEventListener('click',unshift,false);

var event3 = document.getElementById("button3");
    event3.addEventListener('click',push,false);

var event4 = document.getElementById("button4");
    event4.addEventListener('click',pop,false);

 var items = [1,2,3];
function shift()
{
    items.shift(document.getElementById("shift").value);
    document.getElementById("demo").innerHTML = items;
}

function unshift()
{
    items.unshift(document.getElementById("unshift").value);
    document.getElementById("demo").innerHTML = items;
}

function push()
{
    items.push(document.getElementById("push").value);
    document.getElementById("demo").innerHTML = items;
}

function pop()
{
    items.pop(document.getElementById("pop").value);
    document.getElementById("demo").innerHTML = items;
}