export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  category: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: '128 350 ₸',
    description: "технология NFC: Да цвет: серый тип экрана: цветной AMOLED, сенсорный диагональ: 6.67 дюйм размер оперативной памяти: 8 ГБ процессор: 8-ядерный Qualcomm Snapdragon 732G объем встроенной памяти: 256 ГБ емкость аккумулятора: 5020 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: '380 600 ₸',
    description: "технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR диагональ: 6.1 дюйм размер оперативной памяти: 4 ГБпроцессор: 6-ядерный Apple A15 Bionicобъем встроенной памяти: 128 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: '104 565 ₸',
    description: "технология NFC: Дацвет: черныйтип экрана: PLS TFT LCD сенсорный, мультитачдиагональ: 6.6 дюймразмер оперативной памяти: 6 ГБпроцессор: 8-ядерный Snapdragon 680объем встроенной памяти: 128 ГБемкость аккумулятора: 5000 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h83/49792685178910/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 4,
    name: 'Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: '701 800 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: '430 100 ₸',
    description: `технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h05/63072540098590/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: '373 395 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h2c/46392664195102/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ голубой',
    price: '91 098 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h55/49613818036254/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ голубой',
    price: '129 440 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h03/49897401188382/smartfon-samsung-galaxy-a33-5g-128gb-sm-a336blbgskz-blue-104399147-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 9,
    name: 'Смартфон OPPO Reno 7 8 ГБ/128 ГБ черный',
    price: '159 680 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h7a/50459864989726/orro-reno-7-8-128gb-cernyj-104705829-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: '394 500 ₸',
    description: "технология NFC: Дацвет: фиолетовыйтип экрана: OLED, Super Retina XDR display c возможностью постоянной работыдиагональ: 6.7 дюймразмер оперативной памяти: 6 ГБпроцессор: 6-ядерный Apple A16 Bionicобъем встроенной памяти: 256 ГБемкость аккумулятора: 3095 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/hf8/49319164575774/apple-iphone-13-128gb-zelenyj-104078887-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=151010000#!/item',
    category: 'Phone',
    like: 0
  },
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: '480 430 ₸',
    description: 'диагональ экрана: 13.3 дюйм процессор: Apple M1 видеокарта: Apple M1 7 core размер оперативной памяти: 8 ГБ тип жесткого диска: SSD общий объем накопителей: 256 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=151010000#!/item',
    category: 'laptop',
    like: 0
  },
  {
    id: 2,
    name: 'Ноутбук Lenovo V14-ADA 82C6S03900 серый',
    price: '284 455 ₸',
    description: 'диагональ экрана: 14 дюйм процессор: Athlon Gold 3150U видеокарта: AMD Radeon Vega 3 размер оперативной памяти: 8 ГБ тип жесткого диска: SSD общий объем накопителей: 128 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h4d/50514616188958/lenovo-v14-ada-82c6s03900-seryj-101128764-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lenovo-v14-ada-82c6s03900-seryi-101128764/?c=151010000#!/item',
    category: 'laptop',
    like: 0
  },
  {
    id: 3,
    name: 'Ноутбук Acer Aspire 7 Gaming A715-75G NH.Q87ER.00F черный',
    price: '531 270 ₸',
    description: 'диагональ экрана: 15.6 дюйм процессор: Intel Core i7 9750H видеокарта: NVIDIA GeForce GTX 1650 размер оперативной памяти: 16 ГБ тип жесткого диска: SSD общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/hd2/32693202681886/acer-aspire-7-gaming-a715-75g-nh-q87er-00f-cernyj-100503512-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/acer-aspire-7-gaming-a715-75g-nh-q87er-00f-chernyi-100503512/?c=151010000#!/item',
    category: 'laptop',
    like: 0
  },
  {
    id: 4,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: '389 990 ₸',
    description: 'диагональ экрана: 15.6 дюйм процессор: Intel Core i5 11400H видеокарта: NVIDIA GeForce GTX 1650 размер оперативной памяти: 16 ГБ тип жесткого диска: SSD общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hde/67236399153182/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=151010000#!/item',
    category: 'laptop',
    like: 0
  },
  {
    id: 5,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: '369 990 ₸',
    description: 'диагональ экрана: 15.6 дюйм процессор: AMD Ryzen 5 4600H видеокарта: nVidia GeForce GTX1650 размер оперативной памяти: 8 ГБ тип жесткого диска: SSD общий объем накопителей: 512 ГБ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/ha0/62100002635806/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=151010000#!/item',
    category: 'laptop',
    like: 0
  },
  {
    id: 1,
    name: 'Наушники Marshall Major IV черный',
    price: '129 890 ₸',
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет шумоподавления: Нет микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h82/44876123996190/marshall-major-iv-102138144-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=151010000#!/item',
    category: 'headset',
    like: 0
  },
  {
    id: 2,
    name: 'Наушники Apple AirPods Max серебристый',
    price: '369 400 ₸',
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Да микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h71/33524667777054/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=151010000#!/item',
    category: 'headset',
    like: 0
  },
  {
    id: 3,
    name: 'Наушники HyperX Cloud Alpha черный-красный',
    price: '49 975 ₸',
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет шумоподавления: Нет микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hb1/31656651587614/hyperx-cloud-alpha-cernyj-krasnyj-4802955-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/hyperx-cloud-alpha-chernyi-krasnyi-4802955/?c=151010000#!/item',
    category: 'headset',
    like: 0
  },
  {
    id: 4,
    name: 'Наушники ASUS ROG Delta 90YH00Z1-B2UA00 черный',
    price: '93 096 ₸',
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет шумоподавления: Нет микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf1/hcf/31611160756254/asus-rog-delta-90yh00z1-b2ua00-cernyj-100405014-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-rog-delta-90yh00z1-b2ua00-chernyi-100405014/?c=151010000#!/item',
    category: 'headset',
    like: 0
  },
  {
    id: 5,
    name: 'Наушники Apple AirPods Max синий',
    price: '359 750 ₸',
    description: 'тип: гарнитура вид: накладные подключение: беспроводное тип акустического оформления: закрытые тип крепления: оголовье система активного шумоподавления: Нет шумоподавления: Нет микрофон: Да',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h0d/46659800498206/apple-airpods-max-sinij-101180956-1-Container.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=151010000#!/item',
    category: 'headset',
    like: 0
  },
  {
    id: 1,
    name: 'Телевизор LG 77C1RLA 196 см белый',
    price: '2 999 990 ₸',
    description: 'тип: OLED-телевизор диагональ: 77 дюйм разрешение: 3840x2160 поддержка HD: 4K UHD технология Smart TV: Да wi-Fi: Да входы: HDMI ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/hf1/47509676556318/lg-77c1rla-195-sm-belyj-103038965-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lg-77c1rla-196-sm-belyi-103038965/?c=151010000#!/item',
    category: 'TV',
    like: 0
  },
  {
    id: 2,
    name: 'Телевизор Samsung NEO QE85QN90AAUXCE 216 см черный',
    price: '2 999 990 ₸',
    description: 'тип: OLED-телевизор диагональ: 77 дюйм разрешение: 3840x2160 поддержка HD: 4K UHD технология Smart TV: Да wi-Fi: Да входы: HDMI',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/hd5/48044011290654/samsung-neo-qe85qn90aauxce-103334007-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-neo-qe85qn90aauxce-216-sm-chernyi-103334007/?c=151010000#!/item',
    category: 'TV',
    like: 0
  },
  {
    id: 3,
    name: 'Телевизор Sony KD85XH9505BR2 216 см черный',
    price: '2 499 990 ₸',
    description: 'тип: OLED-телевизор диагональ: 77 дюйм разрешение: 3840x2160 поддержка HD: 4K UHD технология Smart TV: Да wi-Fi: Да входы: HDMI',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/he5/64908856754206/sony-kd85xh9505br2-chernyi-107282099-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/sony-kd85xh9505br2-216-sm-chernyi-107282099/?c=151010000#!/item',
    category: 'TV',
    like: 0
  },
  {
    id: 4,
    name: 'Телевизор Sony KD65AG8BR2 165 см черный',
    price: '2 499 990 ₸',
    description: 'тип: OLED-телевизор диагональ: 77 дюйм разрешение: 3840x2160 поддержка HD: 4K UHD технология Smart TV: Да wi-Fi: Да входы: HDMI',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h94/64911394111518/sony-kd65ag8br2-chernyi-107283326-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/sony-kd65ag8br2-165-sm-chernyi-107283326/?c=151010000#!/item',
    category: 'TV',
    like: 0
  },
  {
    id: 5,
    name: 'Телевизор Samsung QE85Q77AAUXCE 216 см черный',
    price: '2 499 990 ₸',
    description: 'тип: OLED-телевизор диагональ: 77 дюйм разрешение: 3840x2160 поддержка HD: 4K UHD технология Smart TV: Да wi-Fi: Да входы: HDMI',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h9b/34249758539806/samsung-qe85q77aauxce-216-sm-cernyj-101496324-1.jpg',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/samsung-qe85q77aauxce-216-sm-chernyi-101496324/?c=151010000#!/item',
    category: 'TV',
    like: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/