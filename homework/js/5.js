var a = [1 , 2, 3 ,4 ,5];
var total = 0 , average ,c;

for(var b = 0 ; b < a.length ; b++)
{
    total += a[b];
    c = total / a.length;
}
console.log(c);