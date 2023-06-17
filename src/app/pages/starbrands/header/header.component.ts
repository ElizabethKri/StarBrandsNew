import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {debounceTime, fromEvent, Subject, takeUntil} from "rxjs";
import {Products} from "../../../interface/products";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  @ViewChild('productSearch') productSearch: ElementRef;
  productSearchValue: string;
  destroyer = new Subject();
  productsCopy: Products[];
  products: Products[];

  constructor(){}

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Для женщин',
        routerLink: ['/women'],
          },
          {
            label: 'Для мужчин',
            routerLink: ['/man'],
          },
          {
            label: 'Sale',
            icon: 'pi pi-bolt',
            routerLink: ['/sales'],
          },
      {
        label: 'Профиль',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Регистрация',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/registration'],
          },
          {
            label: 'Вход',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/authorization']
          },
          {
            label: 'Выход',
            icon: 'pi pi-fw pi-power-off',
            routerLink: ['/starbrands'],
          }
        ]
      },
      {
        label: 'Нравится',
        icon: 'pi pi-heart-fill',
        routerLink: ['/likes'],
      },

      {
        label: 'Корзина',
        icon: 'pi pi-shopping-bag',
        routerLink: ['/basket'],
      },
    ];
  }

  ngAfterViewInit(){
    const fromEventOberver = fromEvent(this.productSearch.nativeElement, "keyup")
    fromEventOberver.pipe(
      debounceTime(200),
      takeUntil(this.destroyer)
    ).subscribe((ev: any) => {
        if (this.productSearchValue) {
          this.products = this.productsCopy.filter((el) => {
            //проверка на строку, ищет при всех регистрах
            const nameToLower = typeof (el?.name) === "string" ? el.name.toLowerCase(): '';
            return nameToLower.includes(this.productSearchValue.toLowerCase());
          });
        } else {
          this.products = [...this.productsCopy]
        }
      }
    );
  }
}

