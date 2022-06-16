function add(a,b)
    {
        for(var c in a)
        {
            for(var d in a[c])
            {
                a[c][d] += b[c][d];
            }
        }
        console.log(a);
    }
    add([[1,2],[3,4]],[[1,1],[1,1]]);