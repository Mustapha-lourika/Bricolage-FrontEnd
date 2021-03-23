import { Component, OnInit } from '@angular/core';
import { Bricoleur } from '../model/bricoleur';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  bricoleur:Bricoleur;
  haserrors;

  constructor(private inscriptionService:InscriptionService) {

    this.bricoleur=new Bricoleur("","","",null,"",false,"",null,"","");
   }

  ngOnInit(): void {
  }


  submit(value){
    this.inscriptionService.inscrire(this.bricoleur).subscribe(
      data=>{
        console.log(data);
      }
      ,
      err=>{
        console.log(err);
      }

    )
    console.log("form user===",value);

  }

  changeLocalValue(ev){
    if(ev=="true") this.bricoleur.isLocal=true;
    else   this.bricoleur.isLocal=false
  }
}
