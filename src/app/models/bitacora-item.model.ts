export class BitacoraItem{
    id: number;
    fecha: Date;
    ymd: number;
    desc?: string;

    constructor(){
        this.fecha = new Date();
        this.id = new Date().getTime();
        this.ymd = this.fecha.getFullYear() * 10000 + this.fecha.getMonth() * 100 + this.fecha.getDate();
    }

    setFecha( fechaU: string ){
        this.fecha.setFullYear( Number( fechaU.substr(0, 4)),
                                Number( fechaU.substr(5, 2)) - 1,
                                Number( fechaU.substr(8, 2)) );
    }

    fechaIonic(): string {
        let fecha = '';
        fecha = this.fecha.getFullYear() + '-';
        fecha = fecha + ( (this.fecha.getMonth() + 1) < 10
                ? ( '0' +  ( this.fecha.getMonth() + 1) )
                :  ( this.fecha.getMonth() + 1 )  );
        fecha = fecha + '-' + ( (this.fecha.getDate()) < 10
                ? ( '0' +  ( this.fecha.getDate() ) ) : ( this.fecha.getDate()) );
        return fecha;
    }

}
