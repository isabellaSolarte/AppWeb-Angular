export class CurrentLista{
    constructor(private mostrarLista:boolean,private mostrarCrearLista:boolean){}

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
}
export const currentLista = new CurrentLista(false,true);