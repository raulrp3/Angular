import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  mProducts: any;
  constructor(private productsService: ProductsService) {
    this.mProducts = productsService.products.rows;
  }

  ngOnInit() {
  }

}
