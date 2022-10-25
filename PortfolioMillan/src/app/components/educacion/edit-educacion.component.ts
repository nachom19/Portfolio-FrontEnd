import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;
  
  constructor(private educacionService: EducacionService, private activatedrouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data => {
        this.edu = data;
      }, err =>{
        alert("Error al modificar la educacion");
    this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.educacionService.update(id, this.edu).subscribe(data =>{
      this.router.navigate([''])
  }, err=>{
    alert("Error al modificar la educacion");
    this.router.navigate(['']);
  })
  }
}