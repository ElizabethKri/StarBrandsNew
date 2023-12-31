import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Products} from "../../interface/products";

@Injectable({
  providedIn: 'root'
})
export class ManService {
  constructor(private http: HttpClient) {
  }

  getManProductsData() {
    return [
      {
        "model": "MAN COSMO",
        "name": "Сумка Кросс-Боди S",
        "price": "26.500",
        "color": "Цвет: Spriz + Nero",
        "collectionNew": "New collection",
        "size": "S",
        "description": "ОПИСАНИЕ\n" +
          "\n" + "Furla Man Cosmo – идеальныая сумка для путешествий. Это практичная сумка кросс-боди, изготовленная из сочетания легкого нейлона и роскошной тисненой кожи. Эта компактная сумка с внешним карманом на застежке-молнии – идеальный выбор для активных людей.\n" +
          "\n" +
          "- Регулируемый ремешок из жаккардовой ткани с логотипом\n" +
          "- Внутренний карман\n" +
          "- Основное отделение на молнии\n" +
          "- Логотип Arch, вышитый на стороне с объемным эффектом и принтом в виде надписей\n" +
          "\n" +
          "Размеры\n" +
          "24.0 x 18.0 x 7.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Нейлон,Телячья Кожа Selene\n" +
          "\n" +
          "Состав\n" +
          "90% NY 10% Кожа\n" +
          "\n" +
          "Высота\n" +
          "18.0 cm\n",
        "img": "1. Сумка Кросс-Боди S Spritz.jpg",
        "productId": "1000"
      },
      {
        "model": "MAN COSMO",
        "name": "Сумка Кросс-Боди S",
        "price": "26.500",
        "color": "Цвет: Nero",
        "size": "S",
        "productId": "1001",
        "collectionNew": "New collection",
        "description": "ОПИСАНИЕ\n" +
          "\n" + "Furla Man Cosmo – идеальныая сумка для путешествий. Это практичная сумка кросс-боди, изготовленная из сочетания легкого нейлона и роскошной тисненой кожи. Эта компактная сумка с внешним карманом на застежке-молнии – идеальный выбор для активных людей.\n" +
          "\n" +
          "- Регулируемый ремешок из жаккардовой ткани с логотипом\n" +
          "- Внутренний карман\n" +
          "- Основное отделение на молнии\n" +
          "- Логотип Arch, вышитый на стороне с объемным эффектом и принтом в виде надписей\n" +
          "\n" +
          "Размеры\n" +
          "24.0 x 18.0 x 7.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Нейлон,Телячья Кожа Selene\n" +
          "\n" +
          "Состав\n" +
          "90% NY 10% Кожа\n" +
          "\n" +
          "Высота\n" +
          "18.0 cm\n",
        "img": "1.1 Сумка Кросс-Боди S Nero.jpg",
      },
      {
        "model": "FURLA MAN GIOVE",
        "name": "Сумка-Торба, Мини-Формат",
        "price": "22.500",
        "color": "Цвет: Nero",
        "size": "S",
        "productId": "1002",
        "collectionNew": "New collection",
        "description": "ОПИСАНИЕ\n" +
          "\n" + "Маленькая сумка-торба Furla Man Giove выполнена из зерненой кожи. Модель без подкладки. Благодаря удобному плечевому ремню и кожаному ремешку многофункциональную сумку можно носить на манер кросс-боди или в руке. Идеальный аксессуар для путешествий и отдыха.\n" +
          "\n" +
          "- Кулиска\n" +
          "- Тисненый логотип Furla спереди\n" +
          "\n" +
          "Размеры\n" +
          "15.0 x 22.0 x 10.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Зерненая Кожа Теленка\n" +
          "\n" +
          "Состав\n" +
          "100% Кожа\n" +
          "\n" +
          "Фурнитура\n" +
          "Палладий\n" +
          "\n" +
          "Высота\n" +
          "22.0 cm",
        "img": "2. Сумка-Торба, Мини-Формат Nero.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Сумка Кросс-Боди S",
        "price": "26.500",
        "color": "Цвет: Toni Caffe",
        "size": "S",
        "productId": "1003",
        "collectionNew": "New collection",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Сумка кросс-боди Furla Man Cosmo в формате мини выполнена из ткани с принтом в виде цепи с логотипом Arch. Миниатюрная сумка идеально подходит для путешествий и отдыха.\n" +
          "\n" +
          "- Застежка-молния\n" +
          "- Наружный карман на молнии\n" +
          "- Съемный регулируемый ремень из крупнозерненой кожи\n" +
          "- Внутренний карман на задней стенке\n" +
          "- Логотип Furla, нанесенный на кожу методом горячего тиснения\n" +
          "\n" +
          "Размеры\n" +
          "23.0 x 25.5 x 2.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Ткань с покрытием и принтом Arch Chain\n" +
          "\n" +
          "Состав\n" +
          "46% Полиуретан 10% Кожа 34% Полиэстер 10% Хлопок\n" +
          "\n" +
          "Высота\n" +
          "25.5 cm",
        "img": "3. Сумка Кросс-Боди S Toni Caffe'.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Рюкзак M",
        "price": "29.500",
        "color": "Цвет: Nero",
        "size": "M",
        "productId": "1004",
        "collectionNew": "New collection",
        "description": "Рюкзак Furla Man Cosmo выполнен из нейлоновой ткани. Благодаря расположенному сзади удобному нейлоновому ремешку модель можно легко прикрепить к чемодану во время путешествия. Внутренний карман сзади позволяет хранить ноутбук и электронные устройства.\n" +
          "\n" +
          "- Застежка-молния\n" +
          "- Верхняя ручка\n" +
          "- Внешний карман спереди с застежкой на металлические кнопки и логотипом Arch из смолы\n" +
          "- Внутренний карман на молнии\n" +
          "- Мягкий регулируемый плечевой ремень\n" +
          "- Отделка с гальваническим покрытием серебристо-серого цвета\n" +
          "\n" +
          "Размеры\n" +
          "28.5 x 40.0 x 13.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Нейлон\n" +
          "\n" +
          "Состав\n" +
          "90% NY 10% Кожа\n" +
          "\n" +
          "Высота\n" +
          "40.0 cm",
        "img": "4. Рюкзак M Nero.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Рюкзак M",
        "price": "29.500",
        "color": "Цвет: Stone",
        "size": "M",
        "productId": "1005",
        "collectionNew": "New collection",
        "description": "Рюкзак Furla Man Cosmo выполнен из нейлоновой ткани. Благодаря расположенному сзади удобному нейлоновому ремешку модель можно легко прикрепить к чемодану во время путешествия. Внутренний карман сзади позволяет хранить ноутбук и электронные устройства.\n" +
          "\n" +
          "- Застежка-молния\n" +
          "- Верхняя ручка\n" +
          "- Внешний карман спереди с застежкой на металлические кнопки и логотипом Arch из смолы\n" +
          "- Внутренний карман на молнии\n" +
          "- Мягкий регулируемый плечевой ремень\n" +
          "- Отделка с гальваническим покрытием серебристо-серого цвета\n" +
          "\n" +
          "Размеры\n" +
          "28.5 x 40.0 x 13.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Нейлон\n" +
          "\n" +
          "Состав\n" +
          "90% NY 10% Кожа\n" +
          "\n" +
          "Высота\n" +
          "40.0 cm",
        "img": "4.1 Рюкзак M Stone.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Сумка-Мессенджер M",
        "price": "31.500",
        "color": "Цвет: Nero",
        "size": "M",
        "productId": "1006",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Сумка кросс-боди Furla Man Cosmo выполнена из телячьей кожи Selene. Сумка застегивается на клапан спереди, что делает ее уникальной и неповторимой благодаря двум металлическим пряжкам, украшенным логотипом Arch Furla, выгравированным спереди. Внешний задний карман обеспечивает легкий доступ к вашим вещам.\n" +
          "\n" +
          "- Логотип Arch на металлических пряжках из ABS, изготовленных по высокочастотных технологий\n" +
          "- Фиксированный регулируемый ремень из ткани\n" +
          "- Два внутренних кармана и один на молнии\n" +
          "- Рельефный логотип Furla из блестящего гальванизированного палладия на левой стороне\n" +
          "- Палладиевое покрытие\n" +
          "\n" +
          "Размеры\n" +
          "30.0 x 22.0 x 10.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Телячья Кожа Selene\n" +
          "\n" +
          "Состав\n" +
          "80% Кожа 20% Полиэстер\n" +
          "\n" +
          "Фурнитура\n" +
          "Палладий\n" +
          "\n" +
          "Высота\n" +
          "22.0 cm",
        "img": "5. Сумка-Мессенджер M Nero.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Сумка-Мессенджер M",
        "price": "31.500",
        "color": "Цвет: Fango",
        "size": "M",
        "productId": "1007",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Сумка кросс-боди Furla Man Cosmo выполнена из телячьей кожи Selene. Сумка застегивается на клапан спереди, что делает ее уникальной и неповторимой благодаря двум металлическим пряжкам, украшенным логотипом Arch Furla, выгравированным спереди. Внешний задний карман обеспечивает легкий доступ к вашим вещам.\n" +
          "\n" +
          "- Логотип Arch на металлических пряжках из ABS, изготовленных по высокочастотных технологий\n" +
          "- Фиксированный регулируемый ремень из ткани\n" +
          "- Два внутренних кармана и один на молнии\n" +
          "- Рельефный логотип Furla из блестящего гальванизированного палладия на левой стороне\n" +
          "- Палладиевое покрытие\n" +
          "\n" +
          "Размеры\n" +
          "30.0 x 22.0 x 10.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Телячья Кожа Selene\n" +
          "\n" +
          "Состав\n" +
          "80% Кожа 20% Полиэстер\n" +
          "\n" +
          "Фурнитура\n" +
          "Палладий\n" +
          "\n" +
          "Высота\n" +
          "22.0 cm",
        "img": "5.1 Сумка-Мессенджер M Fango.jpg",
      },
      {
        "model": "MAN URBAN",
        "name": "Сумка-Тоут M",
        "price": "34.000",
        "color": "Цвет: Blu Jay + Nero",
        "productId": "1008",
        "size": "M",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Сумка-тоут Furla Man Urban выполнена из сочетания телячьей кожи Selene и нейлоновой ткани. Металлическое D-образное кольцо, предназначенное для крепления подвесок, придает образу оригинальность.\n" +
          "\n" +
          "- Внешний кожаный карман на молнии спереди\n" +
          "- Нейлоновый карман на молнии сзади\n" +
          "- Мягкое внутреннее отделение для ноутбука и маленькие карманы-органайзеры\n" +
          "- Регулируемые кожаные ручки с ремнями\n" +
          "- Съемный регулируемый ремень с логотипом Furla\n" +
          "- Потайная застежка-молния\n" +
          "- Тисненые логотипы Arch и Furla на переднем кармане\n" +
          "\n" +
          "Размеры\n" +
          "38.0 x 32.0 x 13.5 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Нейлон,Телячья Кожа Selene\n" +
          "\n" +
          "Состав\n" +
          "70% NY 30% Кожа\n" +
          "\n" +
          "Высота\n" +
          "32.0 cm",
        "img": "6. Сумка-Тоут M Blu Jay.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Рюкзак M",
        "price": "44.500",
        "color": "Цвет: Nero",
        "productId": "1009",
        "size": "M",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Рюкзак Furla Man Cosmo из телячьей кожи Selene идеально подходит для путешествий. Передняя застежка на клапан с металлической пряжкой, украшенной логотипом Arch, позволяет легко и быстро разместить все самое необходимое. Рюкзак можно легко прикрепить к чемодану с помощью расположенного сзади нейлонового ремешка.\n" +
          "\n" +
          "- Карман на молнии с кожаным язычком на переднем клапане\n" +
          "- Два наружных кармана на молнии спереди\n" +
          "- Кулиска\n" +
          "- Мягкое внутреннее отделение для ноутбука на задней стенке\n" +
          "- Внутренний карман на молнии на передней стенке\n" +
          "- Карман на молнии под клапаном\n" +
          "- Регулируемые мягкие лямки\n" +
          "- Принт логотипа Furla Arch на черной лакированной коже слева\n" +
          "- Логотип Arch с декором\n" +
          "- Отделка с гальваническим покрытием серебристо-серого цвета\n" +
          "\n" +
          "Размеры\n" +
          "28.0 x 40.0 x 14.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Телячья Кожа Selene\n" +
          "\n" +
          "Состав\n" +
          "80% Кожа 20% Полиэстер\n" +
          "\n" +
          "Высота\n" +
          "40.0 cm",
        "img": "7. Рюкзак M Nero.jpg",
      },
      {
        "model": "MAN SIRIO",
        "name": "Сумка-Дафлбэг Xl",
        "price": "43.000",
        "color": "Цвет: Nero",
        "size": "Xl",
        "productId": "1010",
        "description": "Сумка-дафлбэг Furla Man Sirio выполнена из мягкой телячьей кожи. Удобная и функциональна модель идеально подойдет для путешествий благодаря отделению-органайзеру спереди, в котором можно аккуратно и надежно хранить личные принадлежности. Кожаная бирка с тисненым логотипом Furla Arch, прикрепленная к верхней ручке, вносит в дизайн уникальный и элегантный завершающий штрих.\n" +
          "\n" +
          "- Складные ручки\n" +
          "- Двусторонняя застежка-молния с кожаными язычками\n" +
          "- Один внутренний карман на молнии сзади\n" +
          "- Съемный регулируемый плечевой ремень с металлическими D-образными кольцами для крепления\n" +
          "- Отделка с гальваническим покрытием серебристо-серого цвета\n" +
          "\n" +
          "Размеры\n" +
          "42.0 x 33.0 x 18.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Мягкая Кожа Теленка\n" +
          "\n" +
          "Состав\n" +
          "80% Кожа 20% Полиэстер\n" +
          "\n" +
          "Высота\n" +
          "33.0 cm",
        "img": "8. Сумка-Дафлбэг Xl Nero.jpg",
      },
      {
        "model": "MAN PROJECT",
        "name": "Визитница S",
        "price": "6.000",
        "priceSale": "7.500",
        "color": "Цвет: Praline + Perla + Spritz",
        "size": "S",
        "productId": "1011",
        "collectionSale": "Sale",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Ультраплоский футляр для кредитных карт Furla Man Project выполнен из тисненой кожи и украшен контрастным изображением змеи спереди.\n" +
          "\n" +
          "- Две прорези для кредитных карт и удостоверения личности спереди\n" +
          "- Три прорези для кредитных карт и удостоверения личности сзади\n" +
          "- Открытое верхнее отделение\n" +
          "- Миниатюрный логотип Furla спереди\n" +
          "\n" +
          "Размеры\n" +
          "19.5 x 10.0 x 2.0 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Тисненая кожа Milos с принтом Snake\n" +
          "\n" +
          "Состав\n" +
          "100% Кожа\n" +
          "\n" +
          "Высота\n" +
          "10.0 cm",
        "img": "9. Визитница S Praline.jpg",
      },
      {
        "model": "MAN COSMO",
        "name": "Чехол Для Мобильного Телефона Nero",
        "price": "6.800",
        "priceSale": "8.500",
        "color": "Цвет: Nero",
        "size": "S",
        "productId": "1012",
        "collectionSale": "Sale",
        "description": "ОПИСАНИЕ\n" +
          "\n" +
          "Футляр для телефона Furla Man Giove выполнен из нейлоновой ткани. Практичный фиксированный ремень из кожи позволяет удобно носить аксессуар на шее или через плечо. В кармане на молнии сбоку удобно хранить личные принадлежности и мелкие предметы.\n" +
          "\n" +
          "- Открытый карман для смартфонов\n" +
          "- Два внутренних отделения для кредитных карт и удостоверений личности\n" +
          "- Белый принт логотипа Furla спереди\n" +
          "- Отделка из матовой смолы черного цвета и гальваническое покрытие серебристо-серого цвета\n" +
          "\n" +
          "Размеры\n" +
          "11.0 x 17.5 x 1.5 (w x h x d)\n" +
          "\n" +
          "Материал\n" +
          "Нейлон\n" +
          "\n" +
          "Состав\n" +
          "90% NY 10% Кожа\n" +
          "\n" +
          "Высота\n" +
          "17.5 cm\n",
        "img": "10. Чехол Для Мобильного Телефона Nero.jpg",
      }
    ]
  }

  //для удаления и формирования списка туров
  private productUpdateSubject = new Subject<Products[]>();
  readonly productUpdateSubject$ = this.productUpdateSubject.asObservable();

  getProductsSmall() {
    return Promise.resolve(this.getManProductsData().slice(0, 10));
  }

   getProductsMan() {
    return Promise.resolve(this.getManProductsData());
  }

  // createProducts(body: any): Observable<any> {
  //   return this.http.post("http://localhost:3000/product-item/", body, {
  //     headers: {}
  //   })
  // }

    getProducts(): Observable<Products[]>{
      return  this.http.get<Products[]>('http://localhost:3000/products/')
    }

  deleteProducts(): Observable<any> {
    return this.http.delete("http://localhost:3000/products/");
  }

  // initProduct(): Observable<any> {
  //   return this.http.get("http://localhost:3000/products/");
  // }

  updateProductList(data: Products[]) {
    this.productUpdateSubject.next(data);
  }


}
