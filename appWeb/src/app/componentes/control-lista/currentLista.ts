export class CurrentLista{
    constructor(private mostrarLista:boolean,private mostrarCrearLista:boolean,private idLista:number){}

    public setMostrarLista(mostrarLista:boolean)
    {
        this.mostrarLista = mostrarLista;
    }
    public getMostrarLista()
    {
        return this.mostrarLista;
    }
    public setMostrarCrearLista(mostrarCrearLista:boolean)
    {
        this.mostrarCrearLista = mostrarCrearLista;
    }
    public getMostrarCrearLista()
    {
        return this.mostrarCrearLista;
    }
    public setid(mostrarLista:number)
    {
        this.idLista = mostrarLista;
    }
    public getId()
    {
        return this.idLista;
    }
}
export const currentLista = new CurrentLista(false,true,0);