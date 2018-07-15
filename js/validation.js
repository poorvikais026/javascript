function validate()
{
   
     var nameEle=document.getElementById("uname");
     var pwdEle=document.getElementById("pwd");
    
    var name=nameEle.value;
    var pwd=pwdEle.value;
    
    if(name.trim()===""){
        document.getElementById("erroruname").innerHTML="Username can't be empty";
        nameEle.style.border="1px solid red";
        return false;
    }
    if(pwd.trim()===""){
        document.getElementById("errorpwd").innerHTML="password can't be empty";
        pwdEle.style.border="1px solid red";
        return false; 
    }
    
    
    
    
    
    
}