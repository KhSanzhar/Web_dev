export interface Product {
  id: number;
  name: string;
  rating: string;
  description: string;
  link: string;
  img: string;
  category: string;
  NumOfLikes: number;
}

export const products = [
  {
    id: 1,
    name: `IPhone11`,
    rating: '4.5 / 5.0',
    description: 'A large phone with one of the best screens',
    link: `https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item`,
    img: `Iphone11.jpg`,
    category: 'Phone',
    NumOfLikes: 0,
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    rating: '4.7 / 5.0',
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-256gb-chernyi-102298504/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Iphone13-mini.jpg',
    category: 'Phone',
    NumOfLikes: 0,
  },
  {
    id: 3,
    name: 'Ipad',
    rating: '4.8 / 5.0',
    description: 'Big tablet',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Ipad.jpg',
    category: 'Tablets',
    NumOfLikes: 0,
  },
  {
    id: 4,
    name: 'Asus ',
    rating: '3.9 / 5.0',
    description: 'Good Laptop',
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item ',
    img: 'Asus.jpg',
    category: 'Laptops',
    NumOfLikes:0,
  },
  {
    id: 5,
    name: 'Iphone13',
    rating: '4.7 / 5.0',
    description: 'Good Iphone version',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Iphone13.jpg',
    category: 'Phone',
    NumOfLikes:0,
  },
  {
    id: 6,
    name: 'Iphone14',
    rating: '3.7 / 5.0',
    description: 'Useless phone for the price',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Iphone14.jpg',
    category: 'Phone',
    NumOfLikes:0,
  },
  {
    id: 7,
    name: 'Lenovo IdeaPad 3',
    rating: '4.1 / 5.0',
    description: 'Good Laptop for the price',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'LenovoIdeapad3.jpg',
    category: 'Laptops',
    NumOfLikes:0,
  },
  {
    id: 8,
    name: 'SamsungA13',
    rating: '4.9 / 5.0',
    description: 'Good phone for the price',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'SamsungA13.jpg',
    category: 'Phone',
    NumOfLikes:0,
  },
  {
    id: 9,
    name: `Samsung Galaxy Tab4`,
    rating: '4.0 / 5.0',
    description: 'Good tablet for the price',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-64-gb-seryi-103450735/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'SamsungGalaxyTab4.jpg',
    category: 'Tablets',
    NumOfLikes:0,
  },
  {
    id: 10,
    name: 'Xiaomi Redmi11',
    rating: '4.9 / 5.0',
    description: 'Good phone for the quality && price',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'XiamoRedmi11.jpg',
    category: 'Phone',
    NumOfLikes:0,
  },
  {
    id: 11,
    name: 'Acer Nitro 5',
    rating: '4.9 / 5.0',
    description: 'Good laptop',
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    img: 'AcerNitro5.jpg',
    category: 'Laptops',
    NumOfLikes:0,
  },
  {
    id: 12,
    name: 'AsusTUFGaming',
    rating: '4.9 / 5.0',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
    img: 'AsusTUFGaming.jpg',
    category: 'Laptops',
    NumOfLikes:0,
  },
  {
    id: 13,
    name: 'HP 15 S',
    rating: '4.9 / 5.0',
    link: 'https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000#!/item',
    img: 'HP15S.jpg',
    category: 'Laptops',
    NumOfLikes:0,
  },
  {
    id: 14,
    name: 'Teclast',
    rating: '4.9 / 5.0',
    link: 'https://kaspi.kz/shop/p/teclast-p40hd-10-1-djuim-4-gb-64-gb-seryi-107576387/?c=750000000#!/item',
    img: 'Teclast.jpg',
    category: 'Tablets',
    NumOfLikes:0,
  },
  {
    id: 15,
    name: 'HTC A 103',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/htc-a103-10-1-djuim-4-gb-64-gb-seryi-106512370/?c=750000000#!/item',
    img: 'HTC A103.jpg',
    category: 'Tablets',
    NumOfLikes:0,
  },
  {
    id: 16,
    name: 'XiaomiMiPad',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-pad-5-11-djuim-6-gb-128-gb-belyi-102301115/?c=750000000#!/item',
    img: 'XiaomiMiPad.jpg',
    category: 'Tablets',
    NumOfLikes:0,
  },
  {
    id: 17,
    name: 'LG',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    img: 'LG.jpg',
    category: 'TV',
    NumOfLikes:0,
  },
  {
    id: 18,
    name: 'Yasin',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
    img: 'Yasin.jpg',
    category: 'TV',
    NumOfLikes:0,
  },
  {
    id: 19,
    name: 'TCL',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/tcl-43p615-109-sm-chernyi-102569498/?c=750000000#!/item',
    img: 'TCL.jpg',
    category: 'TV',
    NumOfLikes:0,
  },
  {
    id: 20,
    name: 'XiaomiMI TV',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-l43m6-6arg-109-sm-chernyi-102743844/?c=750000000#!/item',
    img: 'XiaomiMITV.jpg',
    category: 'TV',
    NumOfLikes:0,
  },
  {
    id: 21,
    name: 'SSmart tv',
    rating: '4.1 / 5.0',
    link: 'https://kaspi.kz/shop/p/ssmart-43f20-109-sm-chernyi-105159159/?c=750000000#!/item',
    img: 'SSMART.jpg',
    category: 'TV',
    NumOfLikes:0,
  }
];
