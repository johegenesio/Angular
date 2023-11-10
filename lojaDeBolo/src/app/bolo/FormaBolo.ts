export default class FormaBolo {
   private _nome: string;
   private _peso: number;
   private _sabor: string;
   private _preco: number;
   private _saldo: number;
    //criar constructor
    constructor(nome: string, peso: number, sabor: string, preco: number, saldo: number){
        this._nome = nome;
        this._peso = peso;
        this._sabor = sabor;
        this._preco = preco;
        this._saldo = saldo;
    }
    //criar get
    public get nome() : string {
        return this._nome
    }  
    public get peso() : number {
        return this._peso
    }
    public get sabor() : string {
        return this._sabor
    }
    public get preco() : number {
        return this._preco
    }
    public get saldo() : number {
        return this._saldo
    }
    
    public get total() : number {
        return (this._saldo-this._preco)
    }
    
    public status() {
        document.write(`${this.total}`)
    }

}