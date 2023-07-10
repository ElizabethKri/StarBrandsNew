import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AllproductsService} from "../../../services/allproducts/allproducts.service";
import {Subject, takeUntil} from "rxjs";
import {Products} from "../../../interface/products";

@Component({
  selector: 'app-product-load',
  templateUrl: './product-load.component.html',
  styleUrls: ['./product-load.component.scss']
})
export class ProductLoadComponent {
  productForm: FormGroup;
  gender: any[]
  products: any;
  destroyer = new Subject();
  constructor(private allProductsService: AllproductsService) {
  }
  ngOnInit(): void {
    // this.gender = [
    //   {name: 'Man'},
    //   {name: 'Woman'}
    // ]

    this.allProductsService.productUpdateSubject$.pipe(takeUntil(this.destroyer)).subscribe((data) => {
      this.products = data; //обновление значений
    })

    this.productForm = new FormGroup({
      name: new FormControl('', {validators: Validators.required}),
      price: new FormControl('', {validators: Validators.required}),
      color: new FormControl('', {validators: Validators.required}),
      description: new FormControl('', {validators: Validators.required}),
      model: new FormControl('', {validators: Validators.required}),
      priceSale: new FormControl(),
      // collectionNew: new FormControl(),
      // collectionSale: new FormControl(),
      productType: new FormControl('woman'),
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

 //удаление продукта
  deleteProduct(): void {
      this.allProductsService.deleteProducts().subscribe((data) => {
        this.allProductsService.updateProductList([])
      })
  }

  //формирование продукта
  // initProduct(): void {
  //   this.allProductsService.createProducts().subscribe((data) => {
  //     this.allProductsService.updateProductList([])
  //   })
  // }





}
