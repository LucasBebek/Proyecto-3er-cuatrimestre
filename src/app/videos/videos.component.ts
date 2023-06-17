import { Component, OnInit, Input } from '@angular/core'; /*Importamos la libreria INPUT, y lo agragamos junto con Component y OnInit para asegurarnos de que vamos a usar la libreria Input de @angular/core*/ 

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})


export class VideosComponent implements OnInit {/*PROPERTY DATA BINDING*//*INTERPOLACION*/

// titulo?:String;
// subtitulo:String="";
// image:String="";
// url:String="";
// seccion?:String;

   
  @Input() dataEntrante: any; /*Declaramos el decorador Input llamado dataEntrante de tipo any, esto quiere decir, que podemos cargarle cualquier valor*/
  constructor() { }

  ngOnInit(): void {
   
}


}

