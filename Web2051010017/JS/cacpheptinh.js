function Tinh()
{
    var a=parseInt(document.forms["myForm"]["txtSo1"].value);
    var b=parseInt(document.forms["myForm"]["txtSo2"].value);
    var pheptoan=document.forms["myForm"]["op"].value;
    var kq=0;
    switch(pheptoan)
    {
        case "+":kq=a+b;break;
        case "-":kq=a-b;break;
        case "*":kq=a*b;break;
        case "/":
        if(b!=0)
            { kq=a/b;
                break;
            }
        else
            kq="không thể thực hiện";
        break; 
            
    }
    
    document.forms["myForm"]["txtkq"].value=kq;
    return false;
}