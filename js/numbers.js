function checkPrime(){
   num = getUserInput();
   flag = true;
 
    if(num < 2){
       flag = false;
    }

    for( var i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0){
          flag = false;
          break;
      }
    }
    if(flag){
        showResult("Number is:"+num+" prime");
    }
    else{
         showResult("Number is :"+num+" not prime");
    }

}
function factorial()
{
   var num=getUserInput();
    var res=1;
        for(var i = 2;i <= num;i++){
            res *= i;
        }
     showResult("factorial of :"+num+" is"+res);
}
function factors()
{
 var num=getUserInput();
    var output=" ";
    for( var i=1;i<=num;i++){
        if(num % i==0){
            output +=i+" ";
        }
    }
    showResult("factors of "+num+" is "+output);
}
function fibonaci()
{
    var num=getUserInput();
    var output=" ";
    if (num==1){
        output +="0";
    }else if(num==2){
        output+="0 1";
    }else{
        var a=0,b=1;
        output +="0 1";
        for(var i=3;i<=num;i++){
            c=a+b;
            output +=" "+c;
            a=b;
            b=c;
        }
    }
    showResult("fibonaci of "+num+" is "+output);
}
function reverse(){
    var num=getUserInput();
    var rev=0;
    while(num!=0){
       r=num%10;
       rev=rev*10+r;
       num=Math.floor(num/10);
   } 
    showResult("reverse of number is"+rev);
}
function pallindrome(){
  var num=getUserInput();
    var num2=num;
    var rev=0;
    while(num!=0){
       r=num%10;
       rev=rev*10+r;
       num=Math.floor(num/10);  
}
    if(num2==rev){
        showResult("pallindrome");
    }else{
        showResult("not a pallindrome");
    }
}
function sumofdigits(){
  var num=getUserInput();  
var sum=0;
    while(num!=0)
        {
            sum +=num%10;
            num=Math.floor(num/10);
        }
    showResult("sum of digits is"+sum);
}
function sumofsingledigits(){
     var num=getUserInput();  
    var num2;
    sum=num2;
    while(num>9){
        sum=Math.floor(num/10)+num%10;
        num=sum;
    }
    showResult("sumofsingledigits is"+sum);
}





function getUserInput(){
    num=document.getElementById("num").value;
    return num;
}

function showResult(message)
{
    document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}