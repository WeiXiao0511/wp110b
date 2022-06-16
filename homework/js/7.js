var array = ([[1,2,3],[3,2,1]]);

    var a = [];
    for(var b = 0 ; b < array[0].length ; b++)
    {
        a[b]=[];
        for(var c = 0 ;c <array.length;c++)
        {
            a[b][c]=(array[c][b]);
        }
    }
    console.log(a);