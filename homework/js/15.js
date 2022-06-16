class vector{

    constructor(array){
        this.a = array
    }
    
    length(){
        let b = 0;
        for(c = 0;c < this.a.length;c++)
        {
            b += this.a[c]*this.a[c]
        }
        return Math.sqrt(b)
    }

    neg(){
        for(let c = 0 ;c < this.a.length;c++)
        {
            this.a[c] = -this.a[c]
        }
        return new vector(a)
    }

    add(p2){
        let a = [];
        for(let c = 0;c < this.a.length;c++)
        {
            a[c] = p1.a[c]+p2.a[c]
        }
        return new vector(a)
    }

    sub(p2){
        return this.add(p2.neg())
    }

    distance(p2){
        return this.sub(p2).length()
    }

    dot(){
        let b = 0
        for(let c = 0;i < this.a.length;c++)
        {
            b += p1.a[c] * p2.a[c]
        }
        return d
    }
}

let p = new vector(2,3)
let p2 = new vector(1,2)
console.log('p.length(=)',p.toString())
console.log('p2.length(=)',p2.length)
console.log('p.add()=',p.add(p2))
console.log('p.sub(p)=',p2.sub(p2))
console.log('p.distance(p2)=',p.distance(p2))
console.log('p.dot(p)=',p.dot(p2))
