function a(a1)
{
    if(a1 == 0) return 0;
    else if (a1 == 1) return 1;
    else return a(a1 - 1) + a(a1 -2);
}

console.log(a(7));