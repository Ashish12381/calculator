var lowerLimit;
var upperLimit;
var i;
var text = "";

function even()
{

   lowerLimit=parseInt(document.getElementById('ll').value);

upperLimit=parseInt(document.getElementById('ul').value);

if(lowerLimit<upperLimit && lowerLimit>=0)
{

for(i=lowerLimit; i<=upperLimit; i++)
{
    if(i%2==0)
    {
       
     text+= +i + "<br>"; 
        console.log(+i);
    }
    document.getElementById('result').innerHTML=text;
   
} 
}
return false;
}

function odd()
{

   lowerLimit=parseInt(document.getElementById('ll').value);

upperLimit=parseInt(document.getElementById('ul').value);

if(lowerLimit<upperLimit && lowerLimit>=0)
{

for(i=lowerLimit; i<=upperLimit; i++)
{
    if(i%2==1)
    {
        text+= +i + "<br>"; 
        console.log(+i);
    }
    document.getElementById('result').innerHTML=text;
   
}  
}
return false;
}

