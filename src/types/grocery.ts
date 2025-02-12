export interface GroceryItemProps {
  id: number;
  name: string;
  section: string;
  price: number;
  weight: number;
}

export interface TableGroceryItemProps extends GroceryItemProps {
  pricePer100g: number;
}
