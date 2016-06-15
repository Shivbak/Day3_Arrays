var event = document.getElementById("button");
    event.addEventListener('click',country,false);

var countries = ["England","France","Italy","Mexico","Poland","Russia","China","Greece","Egypt","India"];

function country()
{
    
    var userinput = document.getElementById("input").value;
    
    for(var i=0; i<countries.length;i++)
        {
            var A = userinput.toUpperCase();
            var B = countries[i].toUpperCase();
            if(B == A)
                {
                    document.getElementById("demo").innerHTML = "This country is present in array and position is :" + i;
                    break;
                }
            else
                {
                    document.getElementById("demo").innerHTML = "This country is not present in array"
                }
        }
}