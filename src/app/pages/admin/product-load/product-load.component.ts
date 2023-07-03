import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AllproductsService} from "../../../services/allproducts/allproducts.service";

@Component({
  selector: 'app-product-load',
  templateUrl: './product-load.component.html',
  styleUrls: ['./product-load.component.scss']
})
export class ProductLoadComponent {
  productForm: FormGroup;
  constructor(private allProductsService: AllproductsService) {
  }
  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', {validators: Validators.required}),
      collection: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', {validators: Validators.required}),
      priceSale: new FormControl(),
      img: new FormControl(),
    });
  }

  createProducts(): void {
    //считывает все значения
    const productDataRow = this.productForm.getRawValue();
    //отправка данных разных типов
    let formParams = new FormData();
    if (typeof productDataRow === "object"){
      for (let prop in productDataRow){
        //prop - ключ
        formParams.append(prop, productDataRow[prop])
      }
    }
    this.allProductsService.createProducts(formParams).subscribe(() => {})
  }

  //файлы
  selectFile(ev: any): void {
    console.log('ev', ev)
    if (ev.target.files.length > 0){
      const file = ev.target.files[0];
      console.log('file', file)
      //добавляет значение
      this.productForm.patchValue({
        img: file
      })
    }
  }
}
