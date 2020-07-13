export class FaltaItem {
    id: number;
    desc?: string;
    fecha: Date;

    constructor(fecha: Date,
                desc?: string){
        this.fecha = fecha;
        if (desc) {
            this.desc = desc;
        }
        this.id = new Date().getTime();
    }
}