import Cart from '../service/Cart';
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

test('Пустая Корзина', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('Заполненная Корзина', () => {
  const cart = new Cart();
  cart.add(new Movie(
    9999,
    'Мстители',
    'The Avengers',
    100,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137'));
  expect(cart.items).toEqual([
    {"author": "The Avengers",
      "city": "США",
      "genre": ["фантастика", "боевик", "фэнтези", "приключения"],
      "id": 9999,
      "name": "Мстители",
      "price": 100,
      "tagline": "Avengers Assemble",
      "time": "137 мин. /2:17", "year": 2012
    }
    ]);
});

test('Цена за содержимое', () => {
  const cart = new Cart();
  cart.add(new Book(
    1000,
    'Evgeniy Onegin',
    'Alexander Pushkin',
    5000,
    224));
  cart.add(new MusicAlbum(
    1001,
    'Dream',
    'Krek',
    900));
  cart.add(new Movie(
    9999,
    'Мстители',
    'The Avengers',
    100,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137'));
  expect(cart.price(0)).toEqual(6000);
  expect(cart.price(0.2)).toEqual(4800);
});

test('Удаление одного товара из корзины', () => {
  const cart = new Cart();
  cart.add(new Book(
    1000,
    'Evgeniy Onegin',
    'Alexander Pushkin',
    5000,
    224));
  cart.add(new MusicAlbum(
    1001,
    'Dream',
    'Krek',
    900));
  cart.add(new Movie(
    9999,
    'Мстители',
    'The Avengers',
    100,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137'));
  cart.delete(1001)
  expect(cart.items.length).toEqual(2);
});