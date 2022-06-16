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
}
var a1 = new ratio(1,3);
var a2 = new ratio(2,4);
var a3 = a1.add(a2);
console.log(a3.toString());