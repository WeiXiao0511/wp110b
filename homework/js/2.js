var b
function factorial(a)
    {
        if (a > 0)
        {
            b = (a * factorial(a - 1));
            return b;
        }
        else return (1);
    }
    factorial(5);
    console.log(b);