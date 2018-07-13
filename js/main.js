function checkNumber()
{
   var num=document.getElementById("num").value;
     var message;
    if(num %2 ==0)
        message="Number "+num+" is even";
    else{
        message="Number "+num+" is odd"; 
    }
    document.getElementById("res").innerHTML=message;
}

function billcal()
{
    var units=document.getElementById("units").value;
 var   min_amount=0;
    var tot_amount=0;
    var amount=0;
   
    if(units>=0 && units<100)
        {
            amount=units*5;
        }
    else if(units>=100 && units<200)
        {
            amount=units*6;
        }
    else
        {
            amount=units*10;
        }
tot_amount=min_amount+amount;
    message="total bill amount is="+tot_amount;
 document.getElementById("res").innerHTML=message;
}