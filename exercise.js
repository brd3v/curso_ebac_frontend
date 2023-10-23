function Cel  (modelo, ano, preco){
    this.modelo = modelo
    this.ano = ano
}
function vendeCell(modelo, ano, preco){
    Cel.call(this, modelo,ano)
    this.preco = preco

}
function fabricaCell(modelo, ano, precoFabrica){
    Cel.call(this, modelo,ano)
    this.precoFabrica = precoFabrica

}

const newCell = new vendeCell('Xiomi', 2020, 1500)
const newCell1 = new vendeCell('Sansung', 2020, 1500)
const newCell2 = new vendeCell('XiomiXiomi', 2020, 1500)
const fabrica1 = new fabricaCell('Lg', 2025, 100)


console.log(newCell);
console.log(newCell1);
console.log(newCell2);
console.log(fabrica1)
