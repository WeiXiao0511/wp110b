class ratio
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    toString()
    {
        return this.a+'/'+this.b;
    }
    add(c)
    {
        return this.a*c.b+c.a*this.b+'/'+this.b*c.b;
    }
    sub(c)
    {
        return this.a*c.b-c.a*this.b+'/'+this.b*c.b;
 
    }
    mul(c)
    {
        return this.a*c.b+c.a*this.b+'/'+this.b*c.b;
    }
    div(c)
    {
        return this.a*c.b-c.a*this.b+'/'+this.b*c.b;
    }
    reduce()
    {
        var d;
        if(this.a > this.b)d = this.b;
        else  d = this.a;

        for(var e = 2 ; e <= d ; e++)
        {
            if(this.a % e == 0 && this.b % e == 0)
            {
                this.a /= e;
                this.b /= e;
                d /= e;
                e=2;
            }
        }
    }
}

var a1 = new ratio(6,9);
a1.reduce();
console.log(a1.toString());