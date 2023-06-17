import { Component, Input } from '@angular/core';
import { Videos } from '../models';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
@Input() ArreglosData?: Videos[];
@Input() ArregloVideos?: Videos[];

public filtro(seccion:String){
  this.ArreglosData=this.ArregloVideos?.filter(el=>{el.seccion==seccion})
alert(this.ArregloVideos)
}
}
