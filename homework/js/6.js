var b = 45;

for(var a = 2 ; a < b ; a ++)
{
    if(b % a ==0)
    {
        b /= a;
        console.log("a", a);
    }
}
