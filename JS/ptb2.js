function Tinh() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var kq, x;
    if(a == 0){
        if(b == 0){
            if(c == 0)
            kq = " PT vô số nghiệm";
            else
            kq = " PT vô nghiệm";
        }
        else{//b!=0
            
            x= -c/b;
            kq = x.toFixed(2);
        }
    }
    else{//a!=0
       var delta = b*b -4*a*c;
       if(delta < 0)
           kq = "PT vô nghiệm";
       else if (delta == 0){
           x = -b/(2*a);
           kq = "PT có nghiệm kép là " +x.toFixed(2);
       }
       else{//delta >0
           var x1 = (-b + Math.sqrt(delta))/(2*a);
           var x2 = (-b + Math.sqrt(delta))/(2*a);
           kq = "PT có 2 nghiệm kép là:<br>" + x1.toFixed(2) + "<br>" + x2.toFixed(2);
       }
    }
    document.getElementById("kq").innerHTML = kq;
}
function Xoa() {
    document.getElementById("a").value ="";
    document.getElementById("b").value ="";
    document.getElementById("c").value ="";
    document.getElementById("kq").innerHTML = "";
}
