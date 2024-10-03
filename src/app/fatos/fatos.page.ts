import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../services/cat-fact.service';

@Component({
  selector: 'app-fatos',
  templateUrl: './fatos.page.html',
  styleUrls: ['./fatos.page.scss'],
})
export class FatosPage implements OnInit {
  catFact: string = '';

  constructor(private catFactService: CatFactService) { }

  ngOnInit() {
    this.fetchCatFact();
  }

  fetchCatFact() {
    this.catFactService.getCatFact().subscribe((data) => {
      this.catFact = data.fact;
    });
  }
}
