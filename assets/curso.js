class Curso{
    /* Poner el # bajo antes de cualquier atributo quiere indicar que son privados osea que no se deben usar esto es encapsular*/
    #codigo;
    #nombre;
    #horas;

    constructor(codigo, nombre, horas){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#horas = horas;
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get horas(){
        return this.#horas;
    }
    set horas(horas){
        const regex = new RegExp(/[0-9]/, 'g');
        if(regex.test(String(horas))){
        this.#horas = horas;
        }
    }
    mostrarDatos(){
        return `Codigo: ${this.#codigo} Nombre: ${this.#nombre} Horas: ${this.#horas}`;
    }
}

const cursoUno = new Curso('12423451', 'FullStack java', 480);
console.log(cursoUno)




console.log(mostrarDatos)


export{
    Curso
}

/* class Curso{
    _codigo;
    _nombre;
    _horas;

    constructor(codigo, nombre, horas){
        this._codigo = codigo;
        this._nombre = nombre;
        this._horas = horas;
    }

    get codigo(){
        return this._codigo;
    }
    set codigo(codigo){
        this._codigo = codigo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get horas(){
        return this._horas;
    }
    set horas(horas){
        const regex = new RegExp(/[0-9]/, 'g');
        if(regex.test(String(horas))){
        this._horas = horas;
        }
    }
    mostrarDatos(){
        return `Codigo: ${this._codigo} Nombre: ${this._nombre} Horas: ${this._horas}`;
    }
} */