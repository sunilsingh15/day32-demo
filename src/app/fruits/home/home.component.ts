import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFruits: Fruits[] = [];

  constructor(private fruitSvc: FruitsService) { }

  ngOnInit(): void {
    this.fruitSvc.getAll().subscribe((data) => {
      this.allFruits = data;
    })
  }

  delete(id: number) {
    this.fruitSvc.delete('fruits', id).subscribe(
      (data) => {
        this.allFruits = this.allFruits.filter(o => o.id != id);
      }
    )
  }

}
