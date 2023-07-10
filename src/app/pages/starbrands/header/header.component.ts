import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {debounceTime, fromEvent, Subject, takeUntil} from "rxjs";
import {AllproductsService} from "../../../services/allproducts/allproducts.service";
import {BasketService} from "../../../services/basket/basket.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  @ViewChild('productSearch') productSearch: ElementRef;
  productSearchValue: string;
  destroyer = new Subject();
  products: any [];
  totalItem: number = 0;
  itemInCart: number;

  constructor( private productsAll: AllproductsService, private basketService: BasketService){}

  items: MenuItem[];

  ngOnInit() {
    //кол-во вывод
    this.basketService.numofItems.subscribe(d =>{
      this.itemInCart = d.length
    })

    //выводить номер на корзине
    this.basketService.getProduct().subscribe(res =>{
      this.totalItem = res.length
    })

    this.items = [
      {
        label: 'Главная',
        routerLink: ['main'],

      },
      {
        label: 'Для женщин',
        routerLink: ['woman'],
          },
          {
            label: 'Для мужчин',
            routerLink: ['man'],
          },
          {
            label: 'Sale',
            icon: 'pi pi-bolt',
            routerLink: ['sales'],
          },

      {
        label: 'Корзина',
        icon: 'pi pi-shopping-bag',
        routerLink: ['basket'],
      },

      {
        label: 'Для администратора',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/starbrands/order-admin'],
        items: [
          // {
          //   label: 'Создание продукта',
          //   icon: 'pi pi-fw pi-user-plus',
          //   routerLink: ['/product-load'],
          // },
          {
            label: 'История заказов',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/starbrands/order-admin']
          },
        ]
      },
    ];
  }

  ngAfterViewInit(){
    const fromEventOberver = fromEvent(this.productSearch.nativeElement, "keyup")
    fromEventOberver.pipe(
      debounceTime(200),
      takeUntil(this.destroyer)
    ).subscribe((ev: any) => {
      console.log(this.productSearchValue)
      this.productsAll.sendSearchText(this.productSearchValue);
      }
    );
  }
}

