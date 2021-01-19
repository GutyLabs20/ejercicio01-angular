import { Component } from '@angular/core';
import { Empleado } from './empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:String = 'Gestión de Trabajadores';

  gestion:String = "Personal";

  actual:Empleado = new Empleado();
  posicion: number = -1;

  // trabajadores = [
  //   {'nombre': 'Juan', 'apellido': 'Perez', 'documento': 'DNI', 'numero': '09878905', 'estado': 'Soltero', 'correo': 'juan@perez.com', 'celular': 988998988, 'vigente': false}

  // ];

  trabajadores = [
    new Empleado('Juan', 'Perez', 'DNI', '09878905', 'Soltero', 'juan@perez.com', '988998988', false)
  ];

  documentos:String[] = ["DNI", "Pasaporte", "Carné de Extranjería"];

  estado:String[] = ["Soltero", "Casado", "Viudo", "Divorciado"];

  ocultarFormulario:boolean = true;

  mostrarFormulario():void{
    this.ocultarFormulario = false;
    this.actual = new Empleado('', '', '', '', '', '', '', true);
  }

  cancelar():void{
    this.ocultarFormulario = true;
  }

  registrar():void{

    if (this.posicion == -1) {
      this.trabajadores.push(this.actual);
    } else {
      this.trabajadores[this.posicion].nombre = this.actual.nombre;
      this.trabajadores[this.posicion].apellido = this.actual.apellido;
      this.trabajadores[this.posicion].documento = this.actual.documento;
      this.trabajadores[this.posicion].numero = this.actual.numero;
      this.trabajadores[this.posicion].estado = this.actual.estado;
      this.trabajadores[this.posicion].correo = this.actual.correo;
      this.trabajadores[this.posicion].celular = this.actual.celular;
      this.trabajadores[this.posicion].vigente = this.actual.vigente;
    }

    this.ocultarFormulario = true;
  }

  cambiarVigencia(indice: number): void {
    this.trabajadores[indice].vigente = !this.trabajadores[indice].vigente;
  }

  presentarProducto(indice: number): void {
    this.ocultarFormulario = false;
    this.actual = new Empleado(this.trabajadores[indice].nombre,
      this.trabajadores[indice].apellido,
      this.trabajadores[indice].documento,
      this.trabajadores[indice].numero,
      this.trabajadores[indice].estado,
      this.trabajadores[indice].correo,
      this.trabajadores[indice].celular,
      this.trabajadores[indice].vigente);
    this.posicion = indice;
  }
}
