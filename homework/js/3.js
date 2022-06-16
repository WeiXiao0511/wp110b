function Isprime(a)
{
    {
        var count = 0
        for(var b =1 ; b <= a ; b++)
        {
            if(a % b == 0)
            {
                count+=1;
            }
        }
            if(count == 2)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
}
console.log(Isprime(7));