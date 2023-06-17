import { Component, OnInit, Output } from '@angular/core';
import { Videos } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Mi primer app de Angular';
  @Output() ArregloVideos: Videos[]=[]; /*Creamos una variable publica ArregloVideos y nuestra interface va a ser de tipo arreglo; lo declaramos sin ningun valor.*/
  @Output() ArreglosData: Videos[]=[];

   

  ngOnInit(): void { /*Este metodo se ejecuta una unica vez cuando se inicializa la pagina*/
      this.ArregloVideos = [
        {titulo: "Argentina vs Cuba", 
        subtitulo: "3 - 0", 
        image: "https://www.ole.com.ar/2021/08/01/v-yeG4_99_1200x630__1.jpg", 
        url:"https://www.youtube.com/watch?v=obNy5Mi2JoA&pp=ygUFdm9sZXk%3D", 
        seccion:"voley"},

        {titulo: "Japon vs Argentina", 
        subtitulo: "3 - 1", 
        image: "https://i.ytimg.com/vi/eVNF9vJnZF0/maxresdefault.jpg", 
        url:"https://www.youtube.com/watch?v=VZCYjClmIFE&t=2183s&pp=ygUFdm9sZXk%3D", 
        seccion:"voley"},

        {titulo: "USA vs Argentina", 
        subtitulo: "0 - 3", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThin6XhJpg3ZKpsqa3wVibBbI4dRVO2oH1Dw&usqp=CAU", 
        url:"https://www.youtube.com/watch?v=Tc8FLI9HCs8&pp=ygUmYXJnZW50aW5hIHZzIGVzdGFkb3MgdW5pZG9zIHZvbGV5IGpqb28%3D", 
        seccion:"voley"},
        
        {titulo: "Partido1", 
        subtitulo: "Argentina vs Brasil", 
        image: "https://pbs.twimg.com/media/E5-sfsJXIAAQpaj.jpg:large", 
        url:"", 
        seccion:"futbol"},
        
        {titulo: "Partido2", 
        subtitulo: "", image: "", 
        url:"", 
        seccion:"futbol"},
        
        {titulo: "Partido3", 
        subtitulo: "", 
        image: "", 
        url:"", 
        seccion:"futbol"}
        
      ]
      this.ArreglosData = this.ArregloVideos  
    }
   
}
