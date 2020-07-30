export class FechaHoraUniversal{
    fecha: string;
    hora: string;
    ymd: number;

    constructor(){
        const hoy = new Date();
        this.fecha = this.fechaToUniversal( hoy );
        this.hora = this.horaLocal( hoy );
        this.ymd = hoy.getFullYear() * 10000 + (hoy.getMonth() + 1) * 100 + hoy.getDate();
    }

    fechaToUniversal(date: Date){
        let fecha = '';
        fecha = String( date.getFullYear() );
        fecha = fecha + ( (date.getMonth() + 1) < 10 ? ( '-0' +  ( date.getMonth() + 1) ) :  '-' + ( date.getMonth() + 1 )  );
        fecha = fecha + ( (date.getDate()) < 10 ? ( '-0' +  ( date.getDate() ) ) : '-' + ( date.getDate()) );
        return fecha;
    }

    horaLocal( date: Date ){
        return date.toLocaleTimeString().substr(0, 5);
    }

    horaTomin(){
        return Number( this.hora.substr(0, 2) ) * 60 +  Number( this.hora.substr(3, 2 ) );
    }

    year(){
        return Number(this.fecha.substr(0, 4));
    }

}
