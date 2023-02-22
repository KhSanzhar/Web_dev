export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  rating: number;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: '128 350 ₸',
    description: "технология NFC: Да цвет: серый тип экрана: цветной AMOLED, сенсорный диагональ: 6.67 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 732G объем встроенной памяти: 256 ГБ емкость аккумулятора: 5020 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=151010000#!/item'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: '380 600 ₸',
    description: "технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБпроцессор: 6-ядерный Apple A15 Bionicобъем встроенной памяти: 128 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=151010000#!/item'
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: '104 565 ₸',
    description: "технология NFC: Дацвет: черныйтип экрана: PLS TFT LCD сенсорный, мультитачдиагональ: 6.6 дюймразмер оперативной памяти: 6 ГБпроцессор: 8-ядерный Snapdragon 680объем встроенной памяти: 128 ГБемкость аккумулятора: 5000 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h83/49792685178910/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=151010000#!/item'
  },
  {
    id: 4,
    name: 'Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: '701 800 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=151010000#!/item'
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: '430 100 ₸',
    description: `технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h05/63072540098590/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=151010000#!/item'
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: '373 395 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h2c/46392664195102/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=151010000#!/item'
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ голубой',
    price: '91 098 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h55/49613818036254/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=151010000#!/item'
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ голубой',
    price: '129 440 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h03/49897401188382/smartfon-samsung-galaxy-a33-5g-128gb-sm-a336blbgskz-blue-104399147-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=151010000#!/item'
  },
  {
    id: 9,
    name: 'Смартфон OPPO Reno 7 8 ГБ/128 ГБ черный',
    price: '159 680 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h7a/50459864989726/orro-reno-7-8-128gb-cernyj-104705829-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=151010000#!/item'
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: '394 500 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/hf8/49319164575774/apple-iphone-13-128gb-zelenyj-104078887-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=151010000#!/item'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/