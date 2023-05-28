import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

  constructor(){}

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Для женщин',
        routerLink: ['women'],
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
        label: 'Профиль',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Регистрация',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['registration'],
          },
          {
            label: 'Вход',
            icon: 'pi pi-fw pi-users',
            routerLink: ['authorization']
          },
          {
            label: 'Выход',
            icon: 'pi pi-fw pi-power-off',
            routerLink: ['auth'],
          }
        ]
      },
      {
        label: 'Нравится',
        icon: 'pi pi-heart-fill',
        routerLink: ['likes'],
      },

      {
        label: 'Корзина',
        icon: 'pi pi-shopping-bag',
        routerLink: ['basket'],
      },
    ];
  }
}

