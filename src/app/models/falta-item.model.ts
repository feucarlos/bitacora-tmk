export class FaltaItem {
    id: number;
    desc?: string;
    fecha: Date;

    constructor(year: number,
                month: number,
                day: number,
                desc?: string){
        this.fecha = new Date(year, month, day);
        if (desc) {
            this.desc = desc;
        }
        this.id = new Date().getTime();
    }
}