export interface GroceryItem {
  id: number;
  name: string;
  section: string;
  price: number;
  weight: number;
}

export interface TableGroceryItem extends GroceryItem {
  pricePer100g: number;
}
