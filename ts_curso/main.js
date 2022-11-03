const cars=`
[
    {
        "modelo":"ford",
        "produccion":2010,
        "millaje": 12000
    },
    {
        "modelo":"honda",
        "produccion":2021,
        "millaje": 4500 
    },
    {
        "modelo":"fiat",
        "produccion":2016,
        "millaje": 58000 
    }
]`;
console.log(typeof cars);

const jsondata=JSON.parse(cars);

console.log(typeof jsondata);

const carrosnuevos=jsondata.filter(
    (carro)=> carro.produccion > 2010 && carro.millaje < 30000
);
console.log(carrosnuevos);

const newcars =JSON.stringify(carrosnuevos);
console.log(typeof newcars);