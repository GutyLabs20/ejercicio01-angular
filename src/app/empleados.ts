export class Empleado {

  nombre: string;
  apellido: string;
  documento: string;
  numero: string;
  estado: string;
  correo: string;
  celular: string;
  vigente: boolean;

  constructor(
      nombre: string='', apellido: string='', documento: string = '',
      numero: string ='', estado:string='', correo:string='', celular:string='', vigente:boolean=false
  ){
      this.nombre = nombre;
      this.apellido = apellido;
      this.documento = documento;
      this.numero = numero;
      this.estado = estado;
      this.correo = correo;
      this.celular = celular;
      this.vigente = vigente;
  }

}
