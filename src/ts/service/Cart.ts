import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  price(discount: number): number {
    const priceSum = this.items.reduce((sum, item) => sum + item.price, 0);
    return discount > 0 && discount < 1 ? priceSum * (1 - discount) : priceSum;
  }

  delete(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }

}