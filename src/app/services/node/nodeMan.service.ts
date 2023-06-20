import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeManService {
  constructor() { }

  getFiles() {
    return Promise.resolve(this.getTreeNodesDataMan());
  }
  getTreeNodesDataMan() {
    return [
      {
        key: '0',
        label: 'Модель',
        data: 'color',
        icon: 'pi pi-fw pi-star',
        children: [
          {key: '0-0', label: 'MAN COSMO', icon: 'pi pi-fw pi-star', data: 'MAN COSMO'},
          {key: '0-1', label: 'FURLA MAN GIOVE', icon: 'pi pi-fw pi-star', data: 'FURLA MAN GIOVE'},
          {key: '0-2', label: 'MAN URBAN', icon: 'pi pi-fw pi-star', data: 'MAN URBAN'},
          {key: '0-3', label: 'MAN SIRIO', icon: 'pi pi-fw pi-star', data: 'MAN SIRIO'},
          {key: '0-4', label: 'MAN PROJECT', icon: 'pi pi-fw pi-star', data: 'MAN PROJECT'},
        ]
      },
      {
        key: '1',
        label: 'Размер',
        data: 'size',
        icon: 'pi pi-fw pi-moon',
        children: [
          {key: '1-0', label: 'XL', icon: 'pi pi-fw pi-moon', data: 'XL'},
          {key: '1-1', label: 'S, Мини-Формат', icon: 'pi pi-fw pi-moon', data: 'S'},
          {key: '1-2', label: 'M', icon: 'pi pi-fw pi-moon', data: 'Рюкзак M'},
        ]
      },

      {
        key: '2',
        label: 'Цвет',
        data: 'Color',
        icon: 'pi pi-fw pi-palette',
        children: [
          {key: '2-0', label: 'Spriz + Nero', icon: 'pi pi-fw pi-palette', data: 'Spriz + Nero'},
          {key: '2-1', label: 'Nero, Мини-Формат', icon: 'pi pi-fw pi-palette', data: 'Nero'},
          {key: '2-2', label: 'Toni Caffe', icon: 'pi pi-fw pi-palette', data: 'Toni Caffe'},
          {key: '2-3', label: 'Stone', icon: 'pi pi-fw pi-palette', data: 'Stone'},
          {key: '2-4', label: 'Fango', icon: 'pi pi-fw pi-palette', data: 'Fango'},
          {key: '2-5', label: 'Blu Jay + Nero', icon: 'pi pi-fw pi-palette', data: 'Blu Jay + Nero'},
          {key: '2-6', label: 'Blu Jay + Nero', icon: 'pi pi-fw pi-palette', data: 'Praline + Perla + Spritz'},
        ]
      },


      ]
  }

  getFiles() {
    return Promise.resolve(this.getTreeNodesDataMan());
  }
}
