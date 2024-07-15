interface BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}


function summ(a:BigObject):number {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === 'undefined') return 2021;//undefined=>'undefined' as a string
        if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;//"String"=>"string", "2021"=>2021(number)
        if (typeof elem.cvalue === 'object') return summ(elem.cvalue);
        return elem.cvalue === undefined ? 2021 : elem.cvalue;//something was wrong with cvalue and check whether the object is not undefined 
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {//lenght=>length
        sum += x[i];
    }
    return sum;//summ=>sum
}

const obj = {
    hello: {cvalue: 1}, 
    world: { cvalue: 
       { yay: { cvalue: "2" }  } 
    }
 }

console.log(summ(obj));
 

