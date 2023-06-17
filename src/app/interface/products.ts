export interface Products {
  model: string;
  name: string;
  price: number;
  color: string;
  description: string;
  img: string;
  productId: string;
  collectionNew: string;
  collectionSale: string;
  priceSale: number;
  size: string;
}

export interface IProductTypeSelect {
  label?: string,
  value?: string,
  date?: string
}
