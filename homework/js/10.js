 function a(b , c ,d)
 {
     var e = 0;
     for(let x = c; x < d ; x+=0.001)
     {
         e+= b(x) * 0.001;
     }
     return e;
 }
 console.log(a((x)=>x*x,0,1));