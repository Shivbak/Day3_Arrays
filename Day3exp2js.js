//adding eventlistener to click button

var event1 = document.getElementById("button");
    event1.addEventListener('click',myfirst,false);

// define array

var items = [];

//caslling fuction when button click

function myfirst()
{
    items[0]= document.getElementById("input1").value;
    items[1]= document.getElementById("input2").value;
    items[2]= document.getElementById("input3").value;
    
    
            document.getElementById("demo").innerHTML = items;
        
    
}

//event listener to push button

var event2 = document.getElementById("push2");
    event2.addEventListener('click',push,false);

function push()
{
   
    items.push(document.getElementById("push").value);
    
    document.getElementById("demo2").innerHTML = items + "lenght is : " + items.length;
    
    
}
