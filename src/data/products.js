export const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { 
    id: 'men', 
    name: 'Men',
    subcategories: [
      'Kheri', 'Peshawari', 'Sandals', 'Slipper', 'Medicated', 'Washable',
      'Moccasins', 'Sneakers', 'Fleet', 'Joggers', 'Loafers'
    ]
  },
  { 
    id: 'women', 
    name: 'Women',
    subcategories: [
      'Pumps', 'Court Shoes', 'Sneakers', 'Back Shoe', 'Slipper',
      'Fancy Bridal', 'Sandals', 'Flat', 'Wedge', 'Casual'
    ]
  },
  { 
    id: 'kids', 
    name: 'Kids',
    subcategories: ['Boys', 'Girls', 'School', 'Washable']
  },
  { 
    id: 'accessories', 
    name: 'Accessories',
    subcategories: ['Ladies Bags', 'Fragrance', 'Skin Care']
  }
];

export const SUBCATEGORY_META = {
  men: [
    { name: 'Peshawari', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12519607BLK.jpg?v=1784961928' },
    { name: 'Kheri', image: 'https://cdn.shopify.com/s/files/1/0659/8184/1487/files/TraditionalQuettaNoroziChappalinPrintedLeatherwithDoubleSole_2.webp?v=1788158826' },
    { name: 'Loafers', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5134_c8e7ae09-fe56-45a0-955f-de0a26a099d4.jpg?v=1788592529' },
    { name: 'Moccasins', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4712_c134b160-3b61-4329-b4c8-16db860dc051.jpg?v=1788589065' },
    { name: 'Sneakers', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5119_591a0c83-b718-46d4-acfd-d26f33aebd04.jpg?v=1788592156' },
    { name: 'Sandals', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M120605.jpg?v=1757324259' },
    { name: 'Slipper', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135506BRN.jpg?v=1778157552' },
    { name: 'Medicated', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0890_af7933d9-dcbc-4ac5-93d8-8b5a12de9442.jpg?v=1785847503' },
    { name: 'Washable', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5731_80d5307c-2fe4-43f7-97a4-625882eca4b3.jpg?v=1789022333' },
    { name: 'Fleet', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3745_3dce2f98-0c1e-4639-a6d6-50116fd12ce3.jpg?v=1787643611' },
    { name: 'Joggers', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6768_f364d8de-443f-4d73-bbfa-974fc3839e2b.jpg?v=1788439468' }
  ],
  women: [
    { name: 'Fancy Bridal', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04038506GDN.jpg?v=1782107023' },
    { name: 'Pumps', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7276_ff56599d-bcd7-4a6c-830f-e1a329895e9a.jpg?v=1789022426' },
    { name: 'Court Shoes', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08581111MRN.jpg?v=1787130323' },
    { name: 'Sandals', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5918_db25baae-4a6a-4925-b500-bc3cac68a866.jpg?v=1789022081' },
    { name: 'Flat', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00137306BLK.jpg?v=1757671592' },
    { name: 'Back Shoe', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100035.png?v=1767164298' },
    { name: 'Sneakers', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7154_93fedf7e-e402-467d-a67e-683bf51a35cb.jpg?v=1788865011' },
    { name: 'Wedge', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07440806BLK.jpg?v=1782112269' },
    { name: 'Slipper', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07652406LBU.jpg?v=1763104469' },
    { name: 'Casual', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07039806MRN.jpg?v=1782216973' }
  ],
  kids: [
    { name: 'Boys', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6037_857be61c-d08e-4172-ba05-1cee66d63e43.jpg?v=1788868531' },
    { name: 'Girls', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5745_74729e3d-fa2d-45e2-9771-46389bdb79a7.jpg?v=1788869360' },
    { name: 'School', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600926BLK.jpg?v=1785242785' },
    { name: 'Washable', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3417_19ae5553-1967-468d-87df-95fe49833e08.jpg?v=1787640065' }
  ],
  accessories: [
    { name: 'Ladies Bags', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7526_e33c8cdf-ea17-48a4-86a3-287ec9247cb1.jpg?v=1789045288' },
    { name: 'Fragrance', image: 'https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0021-MLT.jpg?v=1779705388' },
    { name: 'Skin Care', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' }
  ]
};

export const CIRCULAR_CATEGORIES = [
  {
    "id": "men-kheri",
    "categoryId": "men",
    "subcategory": "Kheri",
    "title": "Kheri Chappal",
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/TraditionalQuettaNoroziChappalinPrintedLeatherwithDoubleSole_2.webp?v=1788158826"
  },
  {
    "id": "accessories-lbag",
    "categoryId": "accessories",
    "subcategory": "Ladies Bags",
    "title": "Ladies Bags",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7526_e33c8cdf-ea17-48a4-86a3-287ec9247cb1.jpg?v=1789045288"
  },
  {
    "id": "women-bridal",
    "categoryId": "women",
    "subcategory": "Fancy Bridal",
    "title": "Bridal Heels",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04038506GDN.jpg?v=1782107023"
  },
  {
    "id": "women-pumps",
    "categoryId": "women",
    "subcategory": "Pumps",
    "title": "Royal Pumps",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7276_ff56599d-bcd7-4a6c-830f-e1a329895e9a.jpg?v=1789022426"
  },
  {
    "id": "accessories-clutch",
    "categoryId": "accessories",
    "subcategory": "Ladies Bags",
    "title": "Luxury Clutches",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7522_8e223e8c-2694-417a-b7c8-56cf6e75c290.jpg?v=1789045130"
  },
  {
    "id": "men-peshawari",
    "categoryId": "men",
    "subcategory": "Peshawari",
    "title": "Peshawari",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12519607BLK.jpg?v=1784961928"
  },
  {
    "id": "women-court",
    "categoryId": "women",
    "subcategory": "Court Shoes",
    "title": "Court Shoes",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08581111MRN.jpg?v=1787130323"
  },
  {
    "id": "men-loafers",
    "categoryId": "men",
    "subcategory": "Loafers",
    "title": "Men Loafers",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5720_4a125cde-ba7c-455f-811a-492d97e90e8c.jpg?v=1789022368"
  },
  {
    "id": "men-joggers",
    "categoryId": "men",
    "subcategory": "Joggers",
    "title": "Air Joggers",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6768_f364d8de-443f-4d73-bbfa-974fc3839e2b.jpg?v=1788439468"
  },
  {
    "id": "men-slippers",
    "categoryId": "men",
    "subcategory": "Slipper",
    "title": "Men Slippers",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135506BRN.jpg?v=1778157552"
  },
  {
    "id": "men-sneakers",
    "categoryId": "men",
    "subcategory": "Sneakers",
    "title": "Men Sneakers",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5731_80d5307c-2fe4-43f7-97a4-625882eca4b3.jpg?v=1789022333"
  },
  {
    "id": "women-sneakers",
    "categoryId": "women",
    "subcategory": "Sneakers",
    "title": "Chunky Sneakers",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7154_93fedf7e-e402-467d-a67e-683bf51a35cb.jpg?v=1788865011"
  },
  {
    "id": "women-sandals",
    "categoryId": "women",
    "subcategory": "Sandals",
    "title": "Party Sandals",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5918_db25baae-4a6a-4925-b500-bc3cac68a866.jpg?v=1789022081"
  },
  {
    "id": "women-khussa",
    "categoryId": "women",
    "subcategory": "Flat",
    "title": "Khussa Flats",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00137306BLK.jpg?v=1757671592"
  },
  {
    "id": "kids-school",
    "categoryId": "kids",
    "subcategory": "School",
    "title": "School Shoes",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600926BLK.jpg?v=1785242785"
  },
  {
    "id": "kids-girls",
    "categoryId": "kids",
    "subcategory": "Girls",
    "title": "Girls Ballerinas",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5745_74729e3d-fa2d-45e2-9771-46389bdb79a7.jpg?v=1788869360"
  },
  {
    "id": "fragrance",
    "categoryId": "accessories",
    "subcategory": "Fragrance",
    "title": "Fragrance",
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0021-MLT.jpg?v=1779705388"
  },
  {
    "id": "skincare",
    "categoryId": "accessories",
    "subcategory": "Skin Care",
    "title": "Skin Care",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800"
  }
];

export const PRODUCTS = [
  {
    "id": "m-kheri-1",
    "title": "Traditional Quetta Norozi Chappal in Printed Leather (Double Sole)",
    "category": "men",
    "subcategory": "Kheri",
    "price": 5999,
    "rating": 5.0,
    "reviewsCount": 24,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/TraditionalQuettaNoroziChappalinPrintedLeatherwithDoubleSole_2.webp?v=1788158826",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/TraditionalQuettaNoroziChappalinPrintedLeatherwithDoubleSole.webp?v=1788158826",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/TraditionalQuettaNoroziChappalinPrintedLeatherwithDoubleSole_2.webp?v=1788158826",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/TraditionalQuettaNoroziChappalinPrintedLeatherwithDoubleSole.webp?v=1788158826"
    ],
    "colors": [
      "Black Textured",
      "Coffee Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Authentic Quetta Norozi Kheri chappal in premium textured leather with durable double sole. Handcrafted for supreme comfort and traditional grace.",
    "stockCount": 15,
    "inStock": true
  },
  {
    "id": "m-kheri-2",
    "title": "Hand Crafted Blue Suede Shikari Quetta Norozi Kheri",
    "category": "men",
    "subcategory": "Kheri",
    "price": 6500,
    "rating": 4.9,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/shikari-chappal.jpg?v=1757056261",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092356-1-750x750-1080x1080-1-700x700.png?v=1757056261",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/shikari-chappal.jpg?v=1757056261",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092356-1-750x750-1080x1080-1-700x700.png?v=1757056261"
    ],
    "colors": [
      "Royal Blue Suede",
      "Navy Blue"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Exquisite blue suede leather Shikari Norozi Kheri chappal with contrast stitching and durable comfort sole.",
    "stockCount": 10,
    "inStock": true
  },
  {
    "id": "m-kheri-3",
    "title": "Handmade Quetta Shikari Chappal with Double Tyre Sole",
    "category": "men",
    "subcategory": "Kheri",
    "price": 6500,
    "rating": 4.8,
    "reviewsCount": 16,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092330-750x750-535x535-1_72bb2af3-a5e0-4c3a-96c9-b82d02be46b3.jpg?v=1756922820",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092330-750x750-535x535-1_72bb2af3-a5e0-4c3a-96c9-b82d02be46b3.jpg?v=1756922820",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092330-750x750-535x535-1_72bb2af3-a5e0-4c3a-96c9-b82d02be46b3.jpg?v=1756922820"
    ],
    "colors": [
      "Mustard Tan",
      "Dark Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Master artisan crafted Quetta Shikari chappal featuring heavy-duty double tyre sole and pure cowhide leather upper.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-kheri-4",
    "title": "Handmade Quetta Norozi Shikari Leather Chappal",
    "category": "men",
    "subcategory": "Kheri",
    "price": 6999,
    "rating": 5.0,
    "reviewsCount": 27,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092165-2-535x535-1.jpg?v=1756893438",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/shikari-chappal-min-jpg-700x700.webp?v=1756900280",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092165-2-535x535-1.jpg?v=1756893438",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/shikari-chappal-min-jpg-700x700.webp?v=1756900280",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/shikari_chappal_2.jpg?v=1756900313"
    ],
    "colorImages": {
      "Rich Brown": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092165-2-535x535-1.jpg?v=1756893438",
      "Jet Black": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/shikari-chappal-min-jpg-700x700.webp?v=1756900280"
    },
    "colors": [
      "Rich Brown",
      "Jet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Premium Quetta Norozi Shikari leather chappal made with select top-grain leather, padded memory insole, and robust outer sole.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-kheri-5",
    "title": "Envy Black Printed Leather Quetta Norozi Kheri",
    "category": "men",
    "subcategory": "Kheri",
    "price": 5999,
    "rating": 4.9,
    "reviewsCount": 22,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/norozi-chappal-700x700.png?v=1756895162",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092378-3-750x750-1080x1080-1-700x700.png?v=1756895162",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/norozi-chappal-700x700.png?v=1756895162",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/092378-3-750x750-1080x1080-1-700x700.png?v=1756895162"
    ],
    "colors": [
      "Envy Black",
      "Midnight Charcoal"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Modern luxury Norozi Kheri in envy printed textured black leather. Features an ergonomic arch support and double rubber sole.",
    "stockCount": 18,
    "inStock": true
  },
  {
    "id": "m-kheri-6",
    "title": "Black T-Shape Peshawar Zalmi Kheri Chappal",
    "category": "men",
    "subcategory": "Kheri",
    "price": 5500,
    "rating": 4.8,
    "reviewsCount": 35,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_zalmi_chappal_1.png?v=1768905807",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_zalmi_chappal_2.png?v=1768905807",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_zalmi_chappal_1.png?v=1768905807",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_zalmi_chappal_2.png?v=1768905807"
    ],
    "colors": [
      "Matte Black",
      "Glossy Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Iconic T-Shape Peshawar Zalmi Kheri chappal. High durability, hand-stitched detailing, and premium flexible sole.",
    "stockCount": 20,
    "inStock": true
  },
  {
    "id": "m-kheri-7",
    "title": "Brown Suede Kaptaan Kheri Chappal",
    "category": "men",
    "subcategory": "Kheri",
    "price": 5500,
    "rating": 5.0,
    "reviewsCount": 29,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/40-700x700.jpg?v=1756971939",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/401-700x700.jpg?v=1756971938",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/40-700x700.jpg?v=1756971939",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/401-700x700.jpg?v=1756971938"
    ],
    "colors": [
      "Earthy Brown Suede",
      "Camel Tan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Velvety soft brown suede leather Kaptaan Kheri chappal with iconic pointed toe silhouette and comfortable inner lining.",
    "stockCount": 11,
    "inStock": true
  },
  {
    "id": "m-kheri-8",
    "title": "Royal Brown Zalmi Kaptaan Double-Sole Kheri",
    "category": "men",
    "subcategory": "Kheri",
    "price": 7500,
    "rating": 5.0,
    "reviewsCount": 42,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/BrownZalmiKaptaanChappal.webp?v=1788159231",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/BrownZalmiKaptaanChappal_3.webp?v=1788159231",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/BrownZalmiKaptaanChappal.webp?v=1788159231",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/BrownZalmiKaptaanChappal_3.webp?v=1788159231"
    ],
    "colors": [
      "Chocolate Brown",
      "Mahogany"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Elite luxury Zalmi Kaptaan Kheri in rich chocolate brown leather with signature double sole and golden buckle finish.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-kheri-9",
    "title": "Mustard Round Shape Peshawar Zalmi Kheri",
    "category": "men",
    "subcategory": "Kheri",
    "price": 6500,
    "rating": 4.9,
    "reviewsCount": 21,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/mustardpeshawarizalmichappal_2.jpg?v=1769084725",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/mustardpeshawarizalmichappal_3.jpg?v=1769084725",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/mustardpeshawarizalmichappal_2.jpg?v=1769084725",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/mustardpeshawarizalmichappal_3.jpg?v=1769084725"
    ],
    "colors": [
      "Mustard Yellow",
      "Golden Tan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Eye-catching mustard yellow round-toe Zalmi Kheri in supple calfskin leather with shock-absorbing comfortable footbed.",
    "stockCount": 13,
    "inStock": true
  },
  {
    "id": "m-kheri-10",
    "title": "Handmade Mustard Charsadda Kheri Chappal",
    "category": "men",
    "subcategory": "Kheri",
    "price": 4990,
    "rating": 4.8,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_chappal_09240_2.webp?v=1784035066",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_chappal_09240_1.webp?v=1784035067",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_chappal_09240_2.webp?v=1784035066",
      "https://cdn.shopify.com/s/files/1/0659/8184/1487/files/peshawari_chappal_09240_1.webp?v=1784035067"
    ],
    "colors": [
      "Mustard",
      "Classic Tan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Traditional single-sole Charsadda Kheri chappal. Lightweight, comfortable, and perfect for daily wear and formal occasions.",
    "stockCount": 25,
    "inStock": true
  },
  {
    "id": "m-pesh-1",
    "title": "Signature Double-Sole Traditional Peshawari Chappal",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12519607BLK.jpg?v=1784961928",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8826.jpg?v=1757324908",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12519607BLK.jpg?v=1784961928",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8826.jpg?v=1757324908",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8827.jpg?v=1757324908",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8828.jpg?v=1757324908"
    ],
    "colors": [
      "Mustard Tan",
      "Matte Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Handcrafted Peshawari chappal with calfskin leather and double tire micro-sole.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-pesh-2",
    "title": "Kaptaan Special Pure Leather Chappal",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 6490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0227_82a5e79f-eea5-4da2-b5d6-a2480d0ac151.jpg?v=1757324905",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0228.jpg?v=1757324905",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0227_82a5e79f-eea5-4da2-b5d6-a2480d0ac151.jpg?v=1757324905",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0228.jpg?v=1757324905",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0229_d4c6ab51-e20d-4e54-b873-07b6f42b466f.jpg?v=1757324906",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0230_e89feced-2bd9-4998-b973-a702a97e373e.jpg?v=1757324906"
    ],
    "colors": [
      "Coffee Brown",
      "Jet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Iconic pointed Kaptaan design with high-grade full-grain leather and lightweight sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-pesh-3",
    "title": "Charsadda Cut Artisan Tyre-Sole Chappal",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 5490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12523907BLK.png?v=1768222105",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2523_a686da19-1a8b-405d-9dec-674e9bce749f.jpg?v=1768222105",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12523907BLK.png?v=1768222105",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2523_a686da19-1a8b-405d-9dec-674e9bce749f.jpg?v=1768222105",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2524.jpg?v=1768222105",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2525.jpg?v=1768222105"
    ],
    "colors": [
      "Vintage Tan",
      "Dark Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Authentic Charsadda broad-toe cut with double stitched edge and flexible inner arch.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-pesh-4",
    "title": "Royal Maroon Hand-Stitched Peshawari",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 6990,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8442_03d52eda-04b8-4121-bc9a-ed989202eb82.jpg?v=1757317737",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8443_5c36d947-851d-4cd9-a66e-86d6aa6e6db8.jpg?v=1757317737",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8442_03d52eda-04b8-4121-bc9a-ed989202eb82.jpg?v=1757317737",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8443_5c36d947-851d-4cd9-a66e-86d6aa6e6db8.jpg?v=1757317737",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8444_79be4556-eb12-4277-b8ef-bc1a6788ba40.jpg?v=1757317737",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8445_fb09d1c0-f6dc-49cd-b8eb-9b2f0a6a5687.jpg?v=1757317737"
    ],
    "colors": [
      "Oxblood Maroon",
      "Walnut"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Rich oxblood polished cowhide leather with golden buckle accents and memory padding.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-pesh-5",
    "title": "Matte Black Steel-Buckle Executive Peshawari",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 6290,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M125234_-_BRN.png?v=1769166184",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8674_43da27e7-6632-47cd-8e6c-3828ef91cf32.jpg?v=1769166184",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M125234_-_BRN.png?v=1769166184",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8674_43da27e7-6632-47cd-8e6c-3828ef91cf32.jpg?v=1769166184",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8675_af087971-a7f1-42dd-b232-9f955f898c17.jpg?v=1769166184",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8676_a4939d3e-863c-4218-a4b2-38c6360fa31b.jpg?v=1769166184"
    ],
    "colors": [
      "Jet Black",
      "Graphite"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Minimalist contemporary executive styling with rust-free stainless steel side clasp.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-pesh-6",
    "title": "Norozi Handmade Textured Leather Chappal",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 7490,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5720_4a125cde-ba7c-455f-811a-492d97e90e8c.jpg?v=1789022368",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5721_83a03d4e-5f63-4748-a67b-4c134b6a7176.jpg?v=1789022368",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5720_4a125cde-ba7c-455f-811a-492d97e90e8c.jpg?v=1789022368",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5721_83a03d4e-5f63-4748-a67b-4c134b6a7176.jpg?v=1789022368",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5723_74f72259-51b3-441d-a8d9-3a42adc4e7ff.jpg?v=1789022369",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5724_6a0da0a5-eaf4-4f7d-be20-b1acf38b6123.jpg?v=1789022368"
    ],
    "colors": [
      "Chocolate Brown",
      "Mustard"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Traditional Balochi Norozi cross-stitch embroidery on thick premium harness leather.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-pesh-7",
    "title": "Quetta Cut Handcrafted Broad-Strap Chappal",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 5790,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5761_9816dc9f-24cc-4dc0-a394-d3766f2006eb.jpg?v=1789022228",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5762_2b1e4fed-4cc0-4590-bfa6-6016146d2771.jpg?v=1789022227",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5761_9816dc9f-24cc-4dc0-a394-d3766f2006eb.jpg?v=1789022228",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5762_2b1e4fed-4cc0-4590-bfa6-6016146d2771.jpg?v=1789022227",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5763_4760967d-3d8b-4f7f-aac8-a101c7073405.jpg?v=1789022227",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5764_907e8785-6907-4d83-8893-7070a04abd8f.jpg?v=1789022227"
    ],
    "colors": [
      "Mustard Gold",
      "Tan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Traditional broad-strap Quetta cut crafted for celebratory events and festive Eid wear.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-pesh-8",
    "title": "Zari Embroidered Festive Wedding Peshawari",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 7990,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5772_31fe8beb-ab26-4eb4-81e1-7c4fd4183a1d.jpg?v=1789022194",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5773.jpg?v=1789022193",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5772_31fe8beb-ab26-4eb4-81e1-7c4fd4183a1d.jpg?v=1789022194",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5773.jpg?v=1789022193",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5774.jpg?v=1789022193",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5775_3d33dc83-7f2e-4a5c-8a6c-221911564a70.jpg?v=1789022193"
    ],
    "colors": [
      "Burgundy Gold",
      "Black Gold"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Regal festive footwear with subtle golden zari thread embroidery for grooms and weddings.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-pesh-9",
    "title": "Minimalist Sleek Slim-Sole Peshawari",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 4990,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5715_3096247d-e791-4815-b986-3aa856773165.jpg?v=1789022153",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5716_2feb7594-3b75-465d-be9a-1e4a2680f17b.jpg?v=1789022153",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5715_3096247d-e791-4815-b986-3aa856773165.jpg?v=1789022153",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5716_2feb7594-3b75-465d-be9a-1e4a2680f17b.jpg?v=1789022153",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5717_f0740c1c-aff8-4367-a84f-a79cb975cf4e.jpg?v=1789022154",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5718_cf2a72f0-45d1-4515-97e1-5ce730896424.jpg?v=1789022153"
    ],
    "colors": [
      "Camel Tan",
      "Ash Grey"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Modern slimline sole design for everyday office casuals and effortless shalwar kameez pairing.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-pesh-10",
    "title": "Heavy-Duty Rugged Leather Tyre-Sole Chappal",
    "category": "men",
    "subcategory": "Peshawari",
    "price": 5290,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5710_bf727b28-825d-4ebe-b863-bc56a5ff220c.jpg?v=1789022118",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5711_023c67b3-3256-419a-bb1d-ee1d8412824e.jpg?v=1789022118",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5710_bf727b28-825d-4ebe-b863-bc56a5ff220c.jpg?v=1789022118",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5711_023c67b3-3256-419a-bb1d-ee1d8412824e.jpg?v=1789022118",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5712_17485388-5e2a-40e8-85f4-7e955b544ffa.jpg?v=1789022118",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5713_efb872ca-c7dc-4477-8753-0765ac5e2a12.jpg?v=1789022118"
    ],
    "colors": [
      "Dark Espresso",
      "Coal Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "All-terrain ultra-durable truck-tire rubber bottom built to endure tough daily wear.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-sand-1",
    "title": "Casual Multi-Strap Genuine Leather Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 4290,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M120605.jpg?v=1757324259",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4453_ac121819-f110-4841-b722-48c4a72c6756.jpg?v=1757324259",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M120605.jpg?v=1757324259",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4453_ac121819-f110-4841-b722-48c4a72c6756.jpg?v=1757324259",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4454_d1d80f5d-5c22-4857-b271-25f25a6f901b.jpg?v=1757324259",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4455.jpg?v=1757324259"
    ],
    "colors": [
      "Chestnut Brown",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Comfortable outdoor genuine leather sandals with durable non-slip grip.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-sand-2",
    "title": "Fisherman Cut Breathable Outdoor Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 4790,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6091_44e7b4af-cefe-42b7-a087-dcf50a149ed0.jpg?v=1757318370",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6092_1f5e62bc-6a94-4058-a341-ee8355413891.jpg?v=1757318370",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6091_44e7b4af-cefe-42b7-a087-dcf50a149ed0.jpg?v=1757318370",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6092_1f5e62bc-6a94-4058-a341-ee8355413891.jpg?v=1757318370",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6093.jpg?v=1757318370",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6094_e1e9794e-3d35-4d19-a405-6841e45a2024.jpg?v=1757318370"
    ],
    "colors": [
      "Tan",
      "Dark Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Interlocking leather cage fisherman sandals offering maximum ventilation and toe protection.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-sand-3",
    "title": "Cross-Strap Ergonomic Cushion Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 3990,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12075606BLK.jpg?v=1785914257",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7606_01c07c32-d08a-4701-98ed-be628f768320.jpg?v=1784723634",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M12075606BLK.jpg?v=1785914257",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7606_01c07c32-d08a-4701-98ed-be628f768320.jpg?v=1784723634",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7607_892ad112-397d-480c-ae2b-fd2f2db2d15c.jpg?v=1784723634",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7608_935f2468-4c4b-4c21-acd2-85e6d9dbb56a.jpg?v=1784723635"
    ],
    "colors": [
      "Mocha Brown",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Wide criss-cross straps with contour-molded footbed for fatigue-free walking.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-sand-4",
    "title": "Velcro Utility Sport Trekking Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 3790,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8643_530e4322-2b6e-4db4-8049-bebbf96d3f5c.jpg?v=1783946819",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8644_75d7e86f-0420-4ab1-a8ff-bff45fe3238c.jpg?v=1783946819",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8643_530e4322-2b6e-4db4-8049-bebbf96d3f5c.jpg?v=1783946819",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8644_75d7e86f-0420-4ab1-a8ff-bff45fe3238c.jpg?v=1783946819",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8645_4e50f3ec-bf49-4cba-ba7c-76f5ebbd9bb7.jpg?v=1783946819",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8646_c0682227-175c-4daf-aada-2f43c45b1602.jpg?v=1783946819"
    ],
    "colors": [
      "Olive Khaki",
      "Jet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Triple velcro adjustable straps with rugged shock-absorbing rubber lug outsole.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-sand-5",
    "title": "Italian Glazed Leather Buckle Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 5490,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8544_6fe6bf3b-7dbb-4b0f-a473-b039ecc3d162.jpg?v=1784012830",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8545_60344718-c882-425c-9e1f-1ff1cb1392bb.jpg?v=1784012830",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8544_6fe6bf3b-7dbb-4b0f-a473-b039ecc3d162.jpg?v=1784012830",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8545_60344718-c882-425c-9e1f-1ff1cb1392bb.jpg?v=1784012830",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8546_72d8a4d7-3ad3-43a7-8778-5ca77c63e9cf.jpg?v=1784012830",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8547_c6a61ccb-8dae-4d1f-a611-c90e76a1e697.jpg?v=1784012830"
    ],
    "colors": [
      "Cognac Brown",
      "Navy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Supple Italian glazed leather with polished antique brass buckle closures.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-sand-6",
    "title": "Medicated Insole Dual-Strap Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 4590,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8664_19421d48-3b38-4cb5-86f7-fa8dee856fb4.jpg?v=1783946706",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8665_1493ac5e-e28f-4853-a0f4-2b6dd894252b.jpg?v=1783946706",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8664_19421d48-3b38-4cb5-86f7-fa8dee856fb4.jpg?v=1783946706",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8665_1493ac5e-e28f-4853-a0f4-2b6dd894252b.jpg?v=1783946706",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8666_ca0fb9b5-b192-47f5-b405-dd9ab018a5e0.jpg?v=1783946706",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8667_645d711c-19dd-44e0-9c87-ba97f3b4978d.jpg?v=1783946706"
    ],
    "colors": [
      "Deep Espresso",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Orthopedic medical-grade arch support insole designed for heel spur and plantar relief.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-sand-7",
    "title": "Beach Waterproof Slip-Resistant Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 2990,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8612_a995f2a7-9697-4246-8934-f206dc7cb8de.jpg?v=1783946181",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8613_d8bf8cb0-c268-4be2-a823-35172419da78.jpg?v=1783946181",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8612_a995f2a7-9697-4246-8934-f206dc7cb8de.jpg?v=1783946181",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8613_d8bf8cb0-c268-4be2-a823-35172419da78.jpg?v=1783946181",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8615_9482e696-2cec-4dbd-a3d8-1ae03d5c4c98.jpg?v=1783946181",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8616_54cdb2cd-12d9-4c14-a14b-a67dabc202c1.jpg?v=1783946181"
    ],
    "colors": [
      "Navy Blue",
      "Slate"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Quick-drying waterproof hydro-foam sandals ideal for summer vacations and poolside.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-sand-8",
    "title": "Suede Leather Gladiator Casual Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 4990,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8633_ec3b7d83-928c-489f-a2a0-d86c9e63613f.jpg?v=1784012828",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8634_6f9cf0bd-d374-4400-ab89-2e71240afa30.jpg?v=1784012828",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8633_ec3b7d83-928c-489f-a2a0-d86c9e63613f.jpg?v=1784012828",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8634_6f9cf0bd-d374-4400-ab89-2e71240afa30.jpg?v=1784012828",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8635_ea3b5c2b-bdc3-47fa-8306-3fa06fd09008.jpg?v=1784012828",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8636_531b80cb-985e-405c-95aa-bda0b893a405.jpg?v=1784012828"
    ],
    "colors": [
      "Desert Sand",
      "Charcoal"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Soft brushed cow suede multi-strap sandals for effortless resort and weekend casuals.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-sand-9",
    "title": "Premium Textured Grain Open-Toe Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 4390,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6402_b3575485-504e-4b3b-bb69-71041dfaa23a.jpg?v=1783946093",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6403_a7096c4b-7c56-4a6d-acb7-dbbfe7f7dd97.jpg?v=1783946093",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6402_b3575485-504e-4b3b-bb69-71041dfaa23a.jpg?v=1783946093",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6403_a7096c4b-7c56-4a6d-acb7-dbbfe7f7dd97.jpg?v=1783946093",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6404_8a57d6f3-5abb-4795-9b19-bb1f89ab207d.jpg?v=1783946093",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6405_5e44d97f-1067-4e90-a7fc-3e3e5ae1d6ca.jpg?v=1783946093"
    ],
    "colors": [
      "Burgundy",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Pebbled grain cowhide sandals with padded heel-collar strap and anti-sweat lining.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-sand-10",
    "title": "Air-Cushioned Comfort Walking Sandals",
    "category": "men",
    "subcategory": "Sandals",
    "price": 4690,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6427_3d9a7008-e884-468c-8a25-a46b618ac197.jpg?v=1784012827",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6428_9d829be2-ceed-4cc2-b1e0-cac05262fc2f.jpg?v=1784012827",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6427_3d9a7008-e884-468c-8a25-a46b618ac197.jpg?v=1784012827",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6428_9d829be2-ceed-4cc2-b1e0-cac05262fc2f.jpg?v=1784012827",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6429_a4234395-200c-45b2-8d69-d30b9448a036.jpg?v=1784012827",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6431_28b95290-acb2-45bb-a183-47d01c5d25f5.jpg?v=1784012827"
    ],
    "colors": [
      "Matte Grey",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Built-in heel air-pod cushioning system absorbs ground impact on concrete and tiles.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-slip-1",
    "title": "Comfort Soft Sole Cowhide Leather Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 3490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135506BRN.jpg?v=1778157552",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135506BRN-1.jpg?v=1778157552",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135506BRN.jpg?v=1778157552",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135506BRN-1.jpg?v=1778157552"
    ],
    "colors": [
      "Dark Brown",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Soft padded leather daily slippers with memory cushioning.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-slip-2",
    "title": "Criss-Cross Padded Loungewear Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 3290,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135403.jpg?v=1757325129",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0743_38bb9332-7ce7-4e79-89f6-e62a749d3a50.jpg?v=1757325129",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135403.jpg?v=1757325129",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0743_38bb9332-7ce7-4e79-89f6-e62a749d3a50.jpg?v=1757325129",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0745_266039c4-727a-4bd7-91a4-0520996237b9.jpg?v=1757325129",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0746_8ce8fdeb-bb6f-4bb2-9ef6-e4c127fbaf1b.jpg?v=1757325130"
    ],
    "colors": [
      "Navy Suede",
      "Tan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Quilted wide cross strap slippers tailored for indoor luxury and relaxed evenings.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-slip-3",
    "title": "Medicated Gel-Cushion Indoor Slides",
    "category": "men",
    "subcategory": "Slipper",
    "price": 3690,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M13540306GRN.png?v=1772444192",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0749_c52a335a-493b-43e8-89fc-3a3abcaa7134.jpg?v=1772444192",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M13540306GRN.png?v=1772444192",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0749_c52a335a-493b-43e8-89fc-3a3abcaa7134.jpg?v=1772444192",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0750_0c95dcdc-99fe-4bb7-ade4-7a0a7a4123b4.jpg?v=1772444192",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0751_9268eba8-a4eb-4a1a-9874-d888e6a8c453.jpg?v=1772444192"
    ],
    "colors": [
      "Charcoal",
      "Cream"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Honeycomb silicone gel insole absorbs joint shock while walking on home tile floors.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-slip-4",
    "title": "Minimalist Sleek Leather Mule Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 4190,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135432.jpg?v=1757319188",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1115_19da8297-36a8-4f5b-a8ef-59ceb8b9531b.jpg?v=1757319188",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135432.jpg?v=1757319188",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1115_19da8297-36a8-4f5b-a8ef-59ceb8b9531b.jpg?v=1757319188",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1116_7b9291da-57f3-4ed1-89a9-af3ab3e1008d.jpg?v=1757319188",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1117_61513eca-0c21-49b1-a1ad-0e72fc29cdb8.jpg?v=1757319188"
    ],
    "colors": [
      "Coffee Bean",
      "Walnut"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Closed round-toe slip-on backless mules made from buttery smooth calf leather.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-slip-5",
    "title": "High-Grip Anti-Skid Bathroom & Casual Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 2490,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0930_490c2fc8-6fb3-4080-aebc-dfefd54ddd81.jpg?v=1757319179",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0931_32cfe40a-a356-40ae-bdf0-7898d880f4e4.jpg?v=1757319179",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0930_490c2fc8-6fb3-4080-aebc-dfefd54ddd81.jpg?v=1757319179",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0931_32cfe40a-a356-40ae-bdf0-7898d880f4e4.jpg?v=1757319179",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0932_3d32a6d5-7c6a-4105-ab51-cb46fb1a3423.jpg?v=1757319179",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0934_cbef0f0f-2dd4-432f-98a2-6d048fab4dfc.jpg?v=1757319179"
    ],
    "colors": [
      "Slate Blue",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Water-channeling diamond tread bottom prevents slipping on wet tiles and marble.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-slip-6",
    "title": "Suede Sherpa-Lined Luxury House Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 4490,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135427-BLK.jpg?v=1757318822",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6071_4f3aabb5-dbb0-4b9b-88ba-ca30dcba0112.jpg?v=1757318822",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135427-BLK.jpg?v=1757318822",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6071_4f3aabb5-dbb0-4b9b-88ba-ca30dcba0112.jpg?v=1757318822",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6072_5f42fed3-cb6a-47e5-bb3e-ddc1ba4c0d06.jpg?v=1757318822",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6070.jpg?v=1757318822"
    ],
    "colors": [
      "Camel Tan",
      "Grey"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Cozy brushed suede slippers lined with soft warmth-retaining sherpa fleece.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-slip-7",
    "title": "Embossed Lizard-Grain Executive Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 3890,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135444.jpg?v=1757318817",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2345.jpg?v=1757318817",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135444.jpg?v=1757318817",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2345.jpg?v=1757318817",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2346.jpg?v=1757318817",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2347.jpg?v=1757318817"
    ],
    "colors": [
      "Glossy Black",
      "Mahogany"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Sophisticated embossed exotic leather texture with double-padded footbed.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-slip-8",
    "title": "Memory Foam Dual-Density Daily Slipper",
    "category": "men",
    "subcategory": "Slipper",
    "price": 2990,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135443.jpg?v=1757318344",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6600_8d3f419a-f545-4d52-a933-a7e582538565.jpg?v=1757318344",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135443.jpg?v=1757318344",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6600_8d3f419a-f545-4d52-a933-a7e582538565.jpg?v=1757318344",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6601_fd22e19a-1aa0-4a78-acf5-cd39707d11e3.jpg?v=1757318344",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6602_212079db-4021-4cad-8486-9929703fa6ad.jpg?v=1757318344"
    ],
    "colors": [
      "Olive Green",
      "Earth Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Two-tier high rebound memory foam footbed contours naturally to the plantar arch.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-slip-9",
    "title": "Premium Nubuck Leather Relaxed Slides",
    "category": "men",
    "subcategory": "Slipper",
    "price": 3990,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135448.jpg?v=1757318342",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6533_e08d44e7-ce45-4b57-9bd0-ad0b8f8e3593.jpg?v=1757318343",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135448.jpg?v=1757318342",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6533_e08d44e7-ce45-4b57-9bd0-ad0b8f8e3593.jpg?v=1757318343",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6535_708c9838-13b6-48c8-9cfa-059e985d1ef1.jpg?v=1757318343",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6536_fe36bf9a-741e-421f-a70b-34396492c2ea.jpg?v=1757318343"
    ],
    "colors": [
      "Sand Beige",
      "Off-White"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Velvety nubuck wide-band slides for weekend errands and warm summer days.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-slip-10",
    "title": "Ultra-Lightweight Ergonomic EVA Daily Slides",
    "category": "men",
    "subcategory": "Slipper",
    "price": 2290,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135451.jpg?v=1757318341",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6485.jpg?v=1757318341",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M135451.jpg?v=1757318341",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6485.jpg?v=1757318341",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6486_0b3f413a-369d-472a-85f2-c87319b8436d.jpg?v=1757318341",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6487_3fee0165-eb48-4bb6-a69a-22ec4bb08360.jpg?v=1757318341"
    ],
    "colors": [
      "Triple Black",
      "Navy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Feather-light injected EVA foam slides with deep heel cup and curved toe bar.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-med-1",
    "title": "Orthopedic Medicated Executive Footwear",
    "category": "men",
    "subcategory": "Medicated",
    "price": 4990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0890_af7933d9-dcbc-4ac5-93d8-8b5a12de9442.jpg?v=1785847503",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0891_3d6441db-564b-4065-8485-b41fc69a65e2.jpg?v=1785847502",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0890_af7933d9-dcbc-4ac5-93d8-8b5a12de9442.jpg?v=1785847503",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0891_3d6441db-564b-4065-8485-b41fc69a65e2.jpg?v=1785847502",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0892_898595a8-d534-4484-a98b-f9813448ec41.jpg?v=1785847503",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0893_dab7d679-01e5-43b1-ae5b-5c91b4fb8fe6.jpg?v=1785847502"
    ],
    "colors": [
      "Executive Black",
      "Tan Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Arch support medicated insoles for posture alignment and heel pain relief.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-med-2",
    "title": "Diabetic Comfort Soft-Cushion Walking Loafers",
    "category": "men",
    "subcategory": "Medicated",
    "price": 5490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/07_0c048f05-a66c-4bb3-9596-b42fc6033e30.jpg?v=1785930247",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/09_e9928ab6-1ee5-411e-9677-1f8044cab9ee.jpg?v=1785930248",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/07_0c048f05-a66c-4bb3-9596-b42fc6033e30.jpg?v=1785930247",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/09_e9928ab6-1ee5-411e-9677-1f8044cab9ee.jpg?v=1785930248",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/08_d81c199c-b7cc-4435-8edf-6f3e6481ae15.jpg?v=1785930248",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0895_b31df652-ccc9-42fe-95a3-c27a61bf5b40.jpg?v=1785847465"
    ],
    "colors": [
      "Deep Walnut",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Seamless interior lining and extra wide toe box to prevent diabetic foot ulcerations.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-med-3",
    "title": "Heel-Pain Relief Memory-Foam Slip-on",
    "category": "men",
    "subcategory": "Medicated",
    "price": 4790,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013707BLK_-_3.jpg?v=1787648162",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013707BLK_-_2.jpg?v=1787648162",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013707BLK_-_3.jpg?v=1787648162",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013707BLK_-_2.jpg?v=1787648162",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013707BLK.jpg?v=1787648162",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0885_6b08150f-05f8-4797-bb3b-d35314a661cb.jpg?v=1785847413"
    ],
    "colors": [
      "Charcoal Grey",
      "Navy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Specially contoured heel cradle designed to alleviate calcaneal spur stress.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-med-4",
    "title": "Anatomical Insole Multi-Strap Medicated Sandals",
    "category": "men",
    "subcategory": "Medicated",
    "price": 4690,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0921_83cbaa6b-ebc5-4d9a-835a-df24708e8abd.jpg?v=1785847331",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0922_02a3066c-d3ed-49b8-9ad0-3a559e04a2dc.jpg?v=1785847331",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0921_83cbaa6b-ebc5-4d9a-835a-df24708e8abd.jpg?v=1785847331",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0922_02a3066c-d3ed-49b8-9ad0-3a559e04a2dc.jpg?v=1785847331",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0923_a773217f-a8bf-402b-8a41-b570b6cc7a9c.jpg?v=1785847331",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0924_7147b700-5c02-421a-b5c8-63e96b31242c.jpg?v=1785847331"
    ],
    "colors": [
      "Mocha Brown",
      "Coffee"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Multi-point adjustable straps with cork-latex bio-mechanical footbed.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-med-5",
    "title": "Anti-Pronation Therapeutic Oxford Shoes",
    "category": "men",
    "subcategory": "Medicated",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607NVY_-_1.jpg?v=1787648077",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607NVY.jpg?v=1787648077",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607NVY_-_1.jpg?v=1787648077",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607NVY.jpg?v=1787648077",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607NVY_-_3.jpg?v=1787648077",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0916_858e252c-ecfc-4720-8470-202f1821d7f6.jpg?v=1785847288"
    ],
    "colors": [
      "Polished Black",
      "Cordovan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Rigid heel counter and medial arch wedge to control severe overpronation.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-med-6",
    "title": "Extra-Depth Soft Nappa Leather Orthopedic Shoes",
    "category": "men",
    "subcategory": "Medicated",
    "price": 5690,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607KHK_-_2.jpg?v=1787647993",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607KHK.jpg?v=1787647992",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607KHK_-_2.jpg?v=1787647993",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013607KHK.jpg?v=1787647992",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0910_3f0fa320-1049-4b39-ae1a-2e6cc1bc324b.jpg?v=1785847251",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0911_452543af-51fc-48c3-87b9-f4acf158dc70.jpg?v=1785847251"
    ],
    "colors": [
      "Classic Tan",
      "Matte Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Accommodates custom prescription orthotics with removable dual-density inserts.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-med-7",
    "title": "Shock-Absorbing Air-Gel Clinic Walking Shoes",
    "category": "men",
    "subcategory": "Medicated",
    "price": 5190,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0905_90dc4746-9962-45b3-bee6-54fee665327d.jpg?v=1785847212",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0906_a77b5604-6a88-4008-8b0e-ad4a18c3e1b2.jpg?v=1785847212",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0905_90dc4746-9962-45b3-bee6-54fee665327d.jpg?v=1785847212",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0906_a77b5604-6a88-4008-8b0e-ad4a18c3e1b2.jpg?v=1785847212",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0907_773a11bc-8e8a-40c1-ae48-a162635d9526.jpg?v=1785847211",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0908_ffdfa754-65f4-4b52-881f-ca55ceb0d843.jpg?v=1785847211"
    ],
    "colors": [
      "Espresso",
      "Jet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": true,
    "description": "Dual-phase gel cushion pads in forefoot and rearfoot for maximum shock dispersion.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-med-8",
    "title": "Pressure-Relief Seamless Forefoot Casuals",
    "category": "men",
    "subcategory": "Medicated",
    "price": 4890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0880_217fa59e-7f86-44c6-8303-35d4c91bb902.jpg?v=1785847174",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0881_c4d672da-afc0-40ab-ab59-325bd1627883.jpg?v=1785847174",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0880_217fa59e-7f86-44c6-8303-35d4c91bb902.jpg?v=1785847174",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0881_c4d672da-afc0-40ab-ab59-325bd1627883.jpg?v=1785847174",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0882_b9ed80e1-ae80-442e-9760-6ae0d45ed48f.jpg?v=1785847174",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0883_9ecdcf1f-f9cf-45b7-b19a-1aeae67e07f1.jpg?v=1785847174"
    ],
    "colors": [
      "Deep Navy",
      "Charcoal"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Zero pressure-points on bunions and hammertoes with flexible stretch panels.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-med-9",
    "title": "Bio-Mechanic Spine-Alignment Medicated Slip-on",
    "category": "men",
    "subcategory": "Medicated",
    "price": 5390,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/02_608bc7ca-f9ca-4637-a87d-c095ab39b130.jpg?v=1785930152",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/01_f2448b62-0e51-42f0-a606-c572f3ae5f92.jpg?v=1785930153",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/02_608bc7ca-f9ca-4637-a87d-c095ab39b130.jpg?v=1785930152",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/01_f2448b62-0e51-42f0-a606-c572f3ae5f92.jpg?v=1785930153",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/03_8a38b8e8-69d7-4d66-84cf-79fc7b7f6ac3.jpg?v=1785930153",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0844_4b209b5c-b911-48e6-8161-9e253170770a.jpg?v=1785847125"
    ],
    "colors": [
      "Chestnut",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Engineered foot geometry assists proper spinal posture during long standing hours.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-med-10",
    "title": "Lightweight Bunion-Relief Stretch Leather Shoes",
    "category": "men",
    "subcategory": "Medicated",
    "price": 4990,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013407BRN.jpg?v=1787647929",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0854_e2ee8bb1-6a38-45ca-9bcb-5e22f1a858c2.jpg?v=1785847092",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M19013407BRN.jpg?v=1787647929",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0854_e2ee8bb1-6a38-45ca-9bcb-5e22f1a858c2.jpg?v=1785847092",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0855_4a6ae288-2840-4e63-801e-e34d0fb2045e.jpg?v=1785847092",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0856_75fc6a1e-748b-43b6-9785-6f7debd47e96.jpg?v=1785847092"
    ],
    "colors": [
      "Slate",
      "Dark Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "isNew": false,
    "description": "Side elasticity panels expand naturally to relieve lateral bunion friction.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-wash-1",
    "title": "Waterproof Washable Casual Sneaker-Sandal",
    "category": "men",
    "subcategory": "Washable",
    "price": 3290,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5731_80d5307c-2fe4-43f7-97a4-625882eca4b3.jpg?v=1789022333",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5732_6e43f028-34ef-485a-af2e-372640b0864b.jpg?v=1789022333",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5731_80d5307c-2fe4-43f7-97a4-625882eca4b3.jpg?v=1789022333",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5732_6e43f028-34ef-485a-af2e-372640b0864b.jpg?v=1789022333",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5734_789b3b7d-981d-4e59-b27c-0004231b7adc.jpg?v=1789022333",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5735_048204e4-3ab9-4341-ac8a-fb14e050db17.jpg?v=1789022333"
    ],
    "colors": [
      "Navy Red",
      "All Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Quick-drying washable all-weather casual shoes with flexible canvas.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-wash-2",
    "title": "Breathable Mesh Slip-On Washable Loafers",
    "category": "men",
    "subcategory": "Washable",
    "price": 3490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5737_041b9398-15d7-4926-928d-a2fd975c5a7d.jpg?v=1789022303",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5738_a2252889-4dde-4bc0-9285-023707625886.jpg?v=1789022302",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5737_041b9398-15d7-4926-928d-a2fd975c5a7d.jpg?v=1789022303",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5738_a2252889-4dde-4bc0-9285-023707625886.jpg?v=1789022302",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5739_1bd68409-e7a3-4ec4-b944-ecdf5391a8b9.jpg?v=1789022302",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5740_7f67cb36-ce5f-4829-bb41-935575bd4b12.jpg?v=1789022302"
    ],
    "colors": [
      "Ice Grey",
      "Ocean Blue"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Machine-washable honeycomb knit upper with removable odor-resistant insoles.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-wash-3",
    "title": "Ultra-Flex Washable Knit Sneaker-Sandals",
    "category": "men",
    "subcategory": "Washable",
    "price": 3690,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5756_83200dfa-a0a9-4b43-8903-b831068cf382.jpg?v=1789022267",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5757_019c9634-e380-490c-b4c4-9b4280e4a47c.jpg?v=1789022267",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5756_83200dfa-a0a9-4b43-8903-b831068cf382.jpg?v=1789022267",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5757_019c9634-e380-490c-b4c4-9b4280e4a47c.jpg?v=1789022267",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5758_f4ca8e52-8ce2-412a-adc7-8c4ddab9d62a.jpg?v=1789022267",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5759_bb58ad60-b3f9-4b09-baeb-39b50749cc00.jpg?v=1789022267"
    ],
    "colors": [
      "Charcoal Melange",
      "White"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Hydrophobic knit yarn repels water and dries completely in under 30 minutes.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-wash-4",
    "title": "Water-Resistant Hydro-Grip Boat Shoes",
    "category": "men",
    "subcategory": "Washable",
    "price": 3990,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5099_b71b82f5-51ff-4821-a200-b3d0c95dd26e.jpg?v=1788592457",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5100_d08949ca-ddef-4096-a628-55e00b1a2656.jpg?v=1788592457",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5099_b71b82f5-51ff-4821-a200-b3d0c95dd26e.jpg?v=1788592457",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5100_d08949ca-ddef-4096-a628-55e00b1a2656.jpg?v=1788592457",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5101_0f2506e7-774f-4e48-9c06-a7d3d3c8d431.jpg?v=1788592457",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5102_6a5793fa-eb9b-4c8f-9fa9-e7fe3e64de7d.jpg?v=1788592457"
    ],
    "colors": [
      "Olive",
      "Tan Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Non-marking siped rubber soles provide exceptional traction on slippery surfaces.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-wash-5",
    "title": "Machine-Washable Lightweight Walking Trainers",
    "category": "men",
    "subcategory": "Washable",
    "price": 3790,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4632_55a61923-a266-4afa-8793-0a918aa79fdd.jpg?v=1788592418",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4633_52aa35fa-d1d5-4edf-b5ac-760df48e9a50.jpg?v=1788592418",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4632_55a61923-a266-4afa-8793-0a918aa79fdd.jpg?v=1788592418",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4633_52aa35fa-d1d5-4edf-b5ac-760df48e9a50.jpg?v=1788592418",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4634_11c4fc45-336e-429f-9c7f-ec41b9d65511.jpg?v=1788592418",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4635_a5fa4fa7-1556-4f5b-af9a-861ad570879c.jpg?v=1788592418"
    ],
    "colors": [
      "Storm Grey",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Toss directly into laundry machine without loss of shape or sole adhesion.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-wash-6",
    "title": "Quick-Drying Canvas Deck Shoes",
    "category": "men",
    "subcategory": "Washable",
    "price": 2990,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4590_b0b344f2-f389-4aea-8a57-a75fd280984d.jpg?v=1788592366",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4592_8ba8e886-1629-4371-bd67-7d18fc056af8.jpg?v=1788592366",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4590_b0b344f2-f389-4aea-8a57-a75fd280984d.jpg?v=1788592366",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4592_8ba8e886-1629-4371-bd67-7d18fc056af8.jpg?v=1788592366",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4593_7b261809-6417-40b3-ac17-54d167f7d592.jpg?v=1788592366",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4595_e21dbf00-33f8-4946-9e22-abe329955749.jpg?v=1788592366"
    ],
    "colors": [
      "Navy Stripes",
      "Pure Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Sturdy 12oz washed cotton canvas with rust-resistant brass eyelets.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-wash-7",
    "title": "Anti-Microbial Washable Cloud Clogs",
    "category": "men",
    "subcategory": "Washable",
    "price": 2590,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5140_d38c13e5-f7c3-4b38-b7c1-71bce3397c3d.jpg?v=1788592326",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5141_2e6ee3f6-63f0-484d-9e5e-c730da25ef55.jpg?v=1788592326",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5140_d38c13e5-f7c3-4b38-b7c1-71bce3397c3d.jpg?v=1788592326",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5141_2e6ee3f6-63f0-484d-9e5e-c730da25ef55.jpg?v=1788592326",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5142_0ba80392-b837-4882-b6bf-daa444a3cee9.jpg?v=1788592326",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5143_6ea119d9-6c43-46c3-8c00-d786e3e1e240.jpg?v=1788592326"
    ],
    "colors": [
      "Graphite",
      "Deep Navy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Closed-cell resin foam resists odors, bacteria growth, and mud buildup.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-wash-8",
    "title": "Aqua-Trek Non-Slip Amphibious Footwear",
    "category": "men",
    "subcategory": "Washable",
    "price": 3890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5071_7976e7f5-d00c-4bfd-9419-a17685a82978.jpg?v=1788592269",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5072_0507153c-fd50-4689-92c0-1b4d423665c7.jpg?v=1788592269",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5071_7976e7f5-d00c-4bfd-9419-a17685a82978.jpg?v=1788592269",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5072_0507153c-fd50-4689-92c0-1b4d423665c7.jpg?v=1788592269",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5073_dda05087-5e54-46ea-aacd-0195111619a3.jpg?v=1788592269",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5074_748b56dd-4705-47ee-a7e1-4adaa60acde7.jpg?v=1788592269"
    ],
    "colors": [
      "Teal Blue",
      "Onyx Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Drainage ports in outsole expel water instantly during monsoon and stream treks.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-wash-9",
    "title": "Seamless Mesh Easy-Wash Slip-ons",
    "category": "men",
    "subcategory": "Washable",
    "price": 3190,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5114_3180331a-af0d-46d9-a43e-25efb8181bb3.jpg?v=1788592232",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5115_8d0df8bd-95bd-4fbd-8e57-408df3453895.jpg?v=1788592232",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5114_3180331a-af0d-46d9-a43e-25efb8181bb3.jpg?v=1788592232",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5115_8d0df8bd-95bd-4fbd-8e57-408df3453895.jpg?v=1788592232",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5116_5ba94bc2-b18e-45aa-b5e5-c1e6cbf720e1.jpg?v=1788592232",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5117_82b13d9a-6d9f-4c8b-b212-c66e2bd62b9d.jpg?v=1788592232"
    ],
    "colors": [
      "Khaki",
      "Silver"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Elastic sock collar slips on effortlessly with stain-release treated mesh upper.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-wash-10",
    "title": "Flexible Rubber-Sole All-Weather Washable Mules",
    "category": "men",
    "subcategory": "Washable",
    "price": 3390,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5109_c9e3bc65-d393-486d-a8a6-82f2ef37c983.jpg?v=1788592201",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5110_24acbc87-529d-4d4b-956f-b64f48a91be6.jpg?v=1788592200",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5109_c9e3bc65-d393-486d-a8a6-82f2ef37c983.jpg?v=1788592201",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5110_24acbc87-529d-4d4b-956f-b64f48a91be6.jpg?v=1788592200",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5111_deeba876-b183-4099-b2ef-52d22acd4a0f.jpg?v=1788592201",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5112_82d9ad8b-f009-453a-9901-a1ec7897cf89.jpg?v=1788592200"
    ],
    "colors": [
      "Matte Black",
      "Slate"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Easy slip-off waterproof mules built for home garden, car wash, and rain.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-mocc-1",
    "title": "Classic Leather Driving Moccasins",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 7490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4712_c134b160-3b61-4329-b4c8-16db860dc051.jpg?v=1788589065",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4713_06a73dc3-f671-4778-89a0-2ed008bac5ca.jpg?v=1788589065",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4712_c134b160-3b61-4329-b4c8-16db860dc051.jpg?v=1788589065",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4713_06a73dc3-f671-4778-89a0-2ed008bac5ca.jpg?v=1788589065",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4714_5009b634-cf17-4cba-bbee-545e96599ef0.jpg?v=1788589065",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4715_ed2ae1a8-0bb6-4512-8258-c18c0e7713d4.jpg?v=1788589065"
    ],
    "colors": [
      "Tan",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Flexible pebbled sole driving moccasins made from premium full-grain leather.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-mocc-2",
    "title": "Italian Suede Tie-Front Driving Shoes",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 6990,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4840_cdddc9b7-9078-43e5-b8b6-2de6aa0aba7a.jpg?v=1788589025",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4841_ab89bd36-3cee-4bfd-a07f-fc5927c40544.jpg?v=1788589025",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4840_cdddc9b7-9078-43e5-b8b6-2de6aa0aba7a.jpg?v=1788589025",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4841_ab89bd36-3cee-4bfd-a07f-fc5927c40544.jpg?v=1788589025",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4842_a7eca34f-29bd-4a61-a1a2-5ee27059c19d.jpg?v=1788589025",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4843_4950749d-49da-4f9f-8c22-2f511d170ff5.jpg?v=1788589025"
    ],
    "colors": [
      "Navy Blue",
      "Cigar Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Raw-cut suede lacing with wrapped rubber driver heel for pedals control.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-mocc-3",
    "title": "Horsebit Hardware Glazed Leather Moccasins",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 7990,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09548308NVY.jpg?v=1786530084",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09548308NVY-_2.jpg?v=1786530006",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09548308NVY.jpg?v=1786530084",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09548308NVY-_2.jpg?v=1786530006",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2966_56144548-dbc8-434c-aa0c-32e87e3f4609.jpg?v=1786424198",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2967_946a8ebd-5b37-4076-96b9-86aea426514a.jpg?v=1786424198"
    ],
    "colors": [
      "Burgundy Wine",
      "Polished Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Hand-burnished calfskin leather finished with a gleaming gold horsebit bar.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-mocc-4",
    "title": "Perforated Summer Breeze Leather Driving Shoes",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 6790,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L095387.png?v=1767163010",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0326_05da5266-26e7-4f14-b53a-bace984c0cb7.jpg?v=1767163010",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L095387.png?v=1767163010",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0326_05da5266-26e7-4f14-b53a-bace984c0cb7.jpg?v=1767163010",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0327_291ab061-f7bd-4dd6-9c85-8090bfaf8abb.jpg?v=1767163010",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0328_0d82206a-0176-43b2-a914-c43b09c0d514.jpg?v=1767163010"
    ],
    "colors": [
      "Camel Sand",
      "Sky Grey"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Micro-punched ventilation holes ensure cool airflow in peak summer heat.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-mocc-5",
    "title": "Hand-Stitched Tassel Driving Moccasins",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 7290,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L095387-GRN.png?v=1767163056",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9667.jpg?v=1767163056",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L095387-GRN.png?v=1767163056",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9667.jpg?v=1767163056",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9668.jpg?v=1767163056",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9669.jpg?v=1767163056"
    ],
    "colors": [
      "Rich Cognac",
      "Espresso"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Traditional artisan apron stitching adorned with dual leather tassel charms.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-mocc-6",
    "title": "Soft Nubuck Lightweight Casual Moccasins",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 6490,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09539206MRN.jpg?v=1780732710",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9852.jpg?v=1757326253",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09539206MRN.jpg?v=1780732710",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9852.jpg?v=1757326253",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9853.jpg?v=1757326253",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9854.jpg?v=1757326253"
    ],
    "colors": [
      "Desert Sage",
      "Navy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Velvet-soft nubuck leather with ultra-supple rubber pod distribution.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-mocc-7",
    "title": "Braided Band Full-Grain Leather Moccasins",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 7190,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC09875_copy_2fcab605-ba5a-4556-8a3d-0e1a4979a5f0.jpg?v=1757322420",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC09875_copy.jpg?v=1766989673",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC09875_copy_2fcab605-ba5a-4556-8a3d-0e1a4979a5f0.jpg?v=1757322420",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC09875_copy.jpg?v=1766989673",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC09866_copy.jpg?v=1766989673",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5953_e597bee2-c23c-4b5c-8330-e478a4c40346.jpg?v=1757322419"
    ],
    "colors": [
      "Dark Chocolate",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Interwoven leather saddle band with padded collar and memory arch support.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-mocc-8",
    "title": "Flexible Gum-Sole Comfort Slip-on Moccasins",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 6290,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0482_0a50f177-7142-4f86-be3a-d2d9722aa66c.jpg?v=1757321088",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0483.jpg?v=1757321089",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0482_0a50f177-7142-4f86-be3a-d2d9722aa66c.jpg?v=1757321088",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0483.jpg?v=1757321089",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0484_dbcf64d0-7602-447c-a6a4-b61a3c17608a.jpg?v=1757321089",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0485_053aec4a-b010-4c60-8b5f-b6d305368c29.jpg?v=1757321089"
    ],
    "colors": [
      "Tan Beige",
      "Olive"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Natural crepe gum rubber sole delivers whisper-quiet strides and ground grip.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-mocc-9",
    "title": "Contrast Stitch Artisan Leather Loafer-Moccasin",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 6890,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2078.jpg?v=1757320786",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2079_8ee57240-46c2-4ce3-b46d-527c055b34eb.jpg?v=1757320786",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2078.jpg?v=1757320786",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2079_8ee57240-46c2-4ce3-b46d-527c055b34eb.jpg?v=1757320786",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2080_9ae9a218-dac1-40f0-afbc-4d4caa69245b.jpg?v=1757320786",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2081_a9c7577e-5364-47d5-95f7-1cf78fc9f569.jpg?v=1757320786"
    ],
    "colors": [
      "Mahogany Brown",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Heavy gauge contrast waxed thread hand-stitched along the apron contour.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-mocc-10",
    "title": "Ultra-Soft Deer Leather Driving Slip-on",
    "category": "men",
    "subcategory": "Moccasins",
    "price": 8490,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L095420-PRL.jpg?v=1767095834",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1992.jpg?v=1767095834",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L095420-PRL.jpg?v=1767095834",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1992.jpg?v=1767095834",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1994_99b7387c-dec8-4bd4-b75c-15c8ad6bafb0.jpg?v=1767095834",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1995.jpg?v=1767095834"
    ],
    "colors": [
      "Matte Black",
      "Mocha"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Unparalleled glove-soft deerskin leather that moulds instantly to foot contours.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-snek-1",
    "title": "Urban Street Style Leather Sneakers",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 6490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5119_591a0c83-b718-46d4-acfd-d26f33aebd04.jpg?v=1788592156",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5120_7c3b87c8-de03-44d8-9215-af718704a96a.jpg?v=1788592156",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5119_591a0c83-b718-46d4-acfd-d26f33aebd04.jpg?v=1788592156",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5120_7c3b87c8-de03-44d8-9215-af718704a96a.jpg?v=1788592156",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5121_9d79ac2d-839f-4149-9fa8-04c067a61ad8.jpg?v=1788592156",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5122_2ea4059b-f69e-47e8-b8c9-008e22788081.jpg?v=1788592156"
    ],
    "colors": [
      "White Gold",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Sleek leather low-top sneakers for modern casual wear and street fashion.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-snek-2",
    "title": "Retro Chunky Sole Suede Panel Trainers",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 6990,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5078_7e09bb42-96df-4d72-8daf-2019158c41b8.jpg?v=1788592104",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5079_b0b52bd6-c466-4eea-89b0-77ef2bf2b0a2.jpg?v=1788592104",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5078_7e09bb42-96df-4d72-8daf-2019158c41b8.jpg?v=1788592104",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5079_b0b52bd6-c466-4eea-89b0-77ef2bf2b0a2.jpg?v=1788592104",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5080_485e14f6-4474-4148-9f55-22155bedf4a8.jpg?v=1788592104",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5081_ddb99b8a-3e81-4cdd-b1a0-18c35134bfd2.jpg?v=1788592104"
    ],
    "colors": [
      "Off-White Grey",
      "Emerald"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "90s archival silhouette featuring multi-layered suede and mesh panels.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-snek-3",
    "title": "Minimalist Monochrome Nappa Leather Lows",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 7490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5093_73bb7398-9167-465d-ad90-72e84e321e76.jpg?v=1788592036",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5095_db6699c4-d577-4d59-bee5-ccccaf9bfe6b.jpg?v=1788592036",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5093_73bb7398-9167-465d-ad90-72e84e321e76.jpg?v=1788592036",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5095_db6699c4-d577-4d59-bee5-ccccaf9bfe6b.jpg?v=1788592036",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5096_5a166308-4f0d-43d6-83ef-3c974d991244.jpg?v=1788592036",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5097_73512d77-0d5c-4d35-b06e-67091d8182da.jpg?v=1788592039"
    ],
    "colors": [
      "Triple White",
      "Triple Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Unbranded luxury minimalism with Italian nappa leather and waxed cotton laces.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-snek-4",
    "title": "High-Top Streetwear Skate Sneaker",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 6290,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5089_cf56e161-4963-43cb-9515-8575b5b342d8.jpg?v=1788591995",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5090_2b6b9c7d-e036-404a-8fd5-7253b420debb.jpg?v=1788591995",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5089_cf56e161-4963-43cb-9515-8575b5b342d8.jpg?v=1788591995",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5090_2b6b9c7d-e036-404a-8fd5-7253b420debb.jpg?v=1788591995",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5090C.jpg?v=1788591995",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5091_e1f381bc-aa1b-47f5-9e0c-18805657ee6b.jpg?v=1788591995"
    ],
    "colors": [
      "Panda Black & White",
      "Red"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Padded high ankle collar with cupsole traction for skateboarders and trendsetters.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-snek-5",
    "title": "Suede & Mesh Hybrid Heritage Runner",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5124_33e0cd4f-b8a8-4093-a7aa-be25e0b3b087.jpg?v=1788591931",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5125_4ec4f97f-5bb0-4edc-b662-1b9cdec65704.jpg?v=1788591931",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5124_33e0cd4f-b8a8-4093-a7aa-be25e0b3b087.jpg?v=1788591931",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5125_4ec4f97f-5bb0-4edc-b662-1b9cdec65704.jpg?v=1788591931",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5126_01e55bc5-6c0b-4ae4-808b-ae43b3114367.jpg?v=1788591931",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5127_aa828b36-5a55-4464-b67b-b5ada4018978.jpg?v=1788591931"
    ],
    "colors": [
      "Navy Slate",
      "Gold"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Vintage athletic heritage styling infused with lightweight modern EVA midsole.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-snek-6",
    "title": "Aerodynamic Knit Sock-Fit Sneakers",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 5490,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4662_f1896faf-ba60-4df2-bcce-1a37987df72f.jpg?v=1788591860",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4663_e9fdf545-be3d-48b4-8c16-ae64c0f7623c.jpg?v=1788591860",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4662_f1896faf-ba60-4df2-bcce-1a37987df72f.jpg?v=1788591860",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4663_e9fdf545-be3d-48b4-8c16-ae64c0f7623c.jpg?v=1788591860",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4664_362028a5-b224-48ec-a5fb-71a6d69ec3f0.jpg?v=1788591860",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4666_68c6fa11-1249-40c3-bd47-9f207a262984.jpg?v=1788591860"
    ],
    "colors": [
      "Phantom Black",
      "Crimson"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Seamless 3D engineered knit hugs foot like a glove with dynamic pull tabs.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-snek-7",
    "title": "Vulcanized Canvas Low-Profile Court Sneakers",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 4490,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4622_0627c050-7644-4b93-b5b2-9f854af704e7.jpg?v=1788591824",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4623_fd4883eb-c685-4d1c-a89b-6f1edd6a11c5.jpg?v=1788591824",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4622_0627c050-7644-4b93-b5b2-9f854af704e7.jpg?v=1788591824",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4623_fd4883eb-c685-4d1c-a89b-6f1edd6a11c5.jpg?v=1788591824",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4624_23e5d626-cb1e-4a5b-899f-d49d113c8472.jpg?v=1788591824",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4625_a89cc77b-bafe-4964-be4a-0ba4cededc58.jpg?v=1788591824"
    ],
    "colors": [
      "Black White",
      "Classic Beige"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Timeless vulcanized rubber construction with reinforced double-stitched canvas.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-snek-8",
    "title": "Premium Leather Perforated Tennis Shoes",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 6790,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4657_a4827df1-ec31-4fc7-8ddc-ec40a1142e57.jpg?v=1788591776",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4658_f7071ac2-10d8-40a0-af29-63165e451b4f.jpg?v=1788591776",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4657_a4827df1-ec31-4fc7-8ddc-ec40a1142e57.jpg?v=1788591776",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4658_f7071ac2-10d8-40a0-af29-63165e451b4f.jpg?v=1788591776",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4659_efcd6dbc-43ca-483b-a0bc-41f46d4e9d01.jpg?v=1788591776",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4660_f9bb3a04-e066-41c2-8bec-f514aa93b8c4.jpg?v=1788591776"
    ],
    "colors": [
      "White Green",
      "Ice Blue"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Crisp white calfskin leather with lateral perforations and herringbone tread.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-snek-9",
    "title": "Color-Block Futuristic Chunky Sneakers",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 7290,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4612_5a1d4925-44bd-4b36-a775-216fe81f5fa8.jpg?v=1788591702",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4613_b4b8057e-1843-43f9-8e4e-af79e141e018.jpg?v=1788591702",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4612_5a1d4925-44bd-4b36-a775-216fe81f5fa8.jpg?v=1788591702",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4613_b4b8057e-1843-43f9-8e4e-af79e141e018.jpg?v=1788591702",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4614_6b5e15dc-9bc2-46c1-bbab-8f47fb4b6590.jpg?v=1788591702",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4615_48ee26ee-0b7b-4ddb-8f7a-d62d5303f085.jpg?v=1788591702"
    ],
    "colors": [
      "Cyber Grey",
      "Neon Orange"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Futuristic geometric sculpted midsole with reflective 3M safety accents.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-snek-10",
    "title": "Luxury Embossed Designer High-Top Sneakers",
    "category": "men",
    "subcategory": "Sneakers",
    "price": 8990,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4597_752c9f19-ee11-4c0f-b769-f25f96dbdf4d.jpg?v=1788591624",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4598_f642442f-eeec-4e14-9cca-f41f5441241d.jpg?v=1788591623",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4597_752c9f19-ee11-4c0f-b769-f25f96dbdf4d.jpg?v=1788591624",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4598_f642442f-eeec-4e14-9cca-f41f5441241d.jpg?v=1788591623",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4599_30057dc2-be4c-4e4d-bdcd-b9407a4d9a12.jpg?v=1788591623",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4600_f351053d-f9ff-475d-a54b-ca7d84707e8e.jpg?v=1788591623"
    ],
    "colors": [
      "Midnight Black",
      "Gold"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Croc-embossed leather panels with padded tongue and metallic golden aglets.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-fleet-1",
    "title": "Active Fleet Athletic Trainers",
    "category": "men",
    "subcategory": "Fleet",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3745_3dce2f98-0c1e-4639-a6d6-50116fd12ce3.jpg?v=1787643611",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3746_3f2f2236-2d05-45b0-8329-5025cf8f0d9a.jpg?v=1787643611",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3745_3dce2f98-0c1e-4639-a6d6-50116fd12ce3.jpg?v=1787643611",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3746_3f2f2236-2d05-45b0-8329-5025cf8f0d9a.jpg?v=1787643611",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3747_1cd3aeee-6439-4824-bd83-1fc113920c8e.jpg?v=1787643611",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3748_9bffd76e-5aa6-42ef-8bbd-4e524802a652.jpg?v=1787643611"
    ],
    "colors": [
      "Black White",
      "Blue"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Ultra-lightweight fleet training shoes with responsive rebound cushioned soles.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-fleet-2",
    "title": "Velocity Fleet Lightweight Sprint Shoes",
    "category": "men",
    "subcategory": "Fleet",
    "price": 6490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3813_b1f83449-ed60-4979-a29c-edf0811e8b7c.jpg?v=1787573499",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3814_bfe5c626-5484-4a18-b7b0-e7c7281f0596.jpg?v=1787573499",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3813_b1f83449-ed60-4979-a29c-edf0811e8b7c.jpg?v=1787573499",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3814_bfe5c626-5484-4a18-b7b0-e7c7281f0596.jpg?v=1787573499",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3815_912f3b52-2a1b-4ff3-90f6-8d86df1e8390.jpg?v=1787573499",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3816_2ef222b7-b574-4260-9017-9da2464d4209.jpg?v=1787573499"
    ],
    "colors": [
      "Volt Neon",
      "Jet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Engineered for rapid acceleration with high-energy return kinetic foam.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-fleet-3",
    "title": "Fleet Endurance Cross-Training Footwear",
    "category": "men",
    "subcategory": "Fleet",
    "price": 6290,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3828_5f78cf2b-ffff-4d7b-a776-cef9fdaa2f04.jpg?v=1787573264",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3829_3c123884-600d-42b5-963a-3c207caf28c8.jpg?v=1787573264",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3828_5f78cf2b-ffff-4d7b-a776-cef9fdaa2f04.jpg?v=1787573264",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3829_3c123884-600d-42b5-963a-3c207caf28c8.jpg?v=1787573264",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3831_40f34970-f25e-45b8-b769-4746ef08ee93.jpg?v=1787573264",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3832_f70e4583-f569-4580-92ea-9c2e58e94106.jpg?v=1787573264"
    ],
    "colors": [
      "Charcoal",
      "Laser Red"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Lateral TPU stability wrap keeps foot locked during intense HIIT and gym lifts.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-fleet-4",
    "title": "Speed-Flex Fleet Breathable Mesh Runners",
    "category": "men",
    "subcategory": "Fleet",
    "price": 5490,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3808_17383ad9-1889-4c7e-ab0d-2931aa38c722.jpg?v=1787573188",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3809_0d5651cd-5048-45c6-9a90-30d7a143afbe.jpg?v=1787573188",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3808_17383ad9-1889-4c7e-ab0d-2931aa38c722.jpg?v=1787573188",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3809_0d5651cd-5048-45c6-9a90-30d7a143afbe.jpg?v=1787573188",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3810_8b6ca6a6-36cd-47d0-9c94-3316c99dc9ca.jpg?v=1787573188",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3811_474a143b-db16-4295-aafe-c387df9cee28.jpg?v=1787573188"
    ],
    "colors": [
      "Midnight Navy",
      "Silver"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Zoned mesh upper delivers targeted ventilation where feet heat up fastest.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-fleet-5",
    "title": "Fleet Aero-Glide Shock Absorber Shoes",
    "category": "men",
    "subcategory": "Fleet",
    "price": 6790,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3803_eca90080-dbe6-4df3-9bad-2db95501edf6.jpg?v=1787573145",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3804_e1062a46-17a1-40e7-987d-609ae0be8b20.jpg?v=1787573146",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3803_eca90080-dbe6-4df3-9bad-2db95501edf6.jpg?v=1787573145",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3804_e1062a46-17a1-40e7-987d-609ae0be8b20.jpg?v=1787573146",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3805_1a657354-8633-4560-8071-8ea006877cd3.jpg?v=1787573146",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3806_d005e6a9-6f6d-49fb-b76b-64dce9d722ce.jpg?v=1787573146"
    ],
    "colors": [
      "Triple Black",
      "Steel Grey"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Full-length compression molded foam dissipates joint impact on hard tracks.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-fleet-6",
    "title": "High-Impact Fleet Road Racing Shoes",
    "category": "men",
    "subcategory": "Fleet",
    "price": 7190,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M11051906BLK.png?v=1787917206",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3730_31d56ccd-20d5-45cf-80e7-6e69d946e0f5.jpg?v=1787573104",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/M11051906BLK.png?v=1787917206",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3730_31d56ccd-20d5-45cf-80e7-6e69d946e0f5.jpg?v=1787573104",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3731_b320c980-96b1-4c68-a5f2-1768f27fdcc2.jpg?v=1787573104",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3732_05357f23-e0c1-46e1-b35b-9b892d218f2b.jpg?v=1787573104"
    ],
    "colors": [
      "Sky Blue",
      "Coral Orange"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Beveled heel promotes effortless heel-to-toe transitions during long tempo runs.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-fleet-7",
    "title": "Fleet Trail Grip Rugged Outdoor Trainers",
    "category": "men",
    "subcategory": "Fleet",
    "price": 6590,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3735_4d9c7320-03f9-47d8-955c-d5485a357a6b.jpg?v=1787573051",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3736_e2bafa20-0170-4da1-9188-f28ff348c5f1.jpg?v=1787573051",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3735_4d9c7320-03f9-47d8-955c-d5485a357a6b.jpg?v=1787573051",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3736_e2bafa20-0170-4da1-9188-f28ff348c5f1.jpg?v=1787573051",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3737_db3eb7ee-a9a7-4009-a0d8-8d41c0355242.jpg?v=1787573051",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3738_4218127d-7351-4bf9-93be-8d14e10d650e.jpg?v=1787573051"
    ],
    "colors": [
      "Forest Green",
      "Khaki"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Aggressive multi-directional traction cleats conquer gravel, mud, and dirt trails.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-fleet-8",
    "title": "Dynamic Fleet Air-Chamber Fitness Shoes",
    "category": "men",
    "subcategory": "Fleet",
    "price": 5890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3767_6c3bb8ab-2061-443c-a9c0-55c2674e1eb4.jpg?v=1787572992",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3768_c862aa2b-e7fd-41ad-94ec-c1f0a6f6fdab.jpg?v=1787572992",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3767_6c3bb8ab-2061-443c-a9c0-55c2674e1eb4.jpg?v=1787572992",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3768_c862aa2b-e7fd-41ad-94ec-c1f0a6f6fdab.jpg?v=1787572992",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3769_42b284e1-da21-4666-9402-3d59a935fb45.jpg?v=1787572992",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3770_db1ddc3c-f6c9-4e5b-83a7-b69961284dc5.jpg?v=1787572992"
    ],
    "colors": [
      "Matte Grey",
      "Electric Lime"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Encapsulated air chambers in heel provide bouncy spring-back energy on every rep.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-fleet-9",
    "title": "Fleet Marathon Ultra-Padded Cushion Shoes",
    "category": "men",
    "subcategory": "Fleet",
    "price": 6990,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3740_ec7054aa-3767-46a8-a928-ba59864a0f13.jpg?v=1787572927",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3741_064c2988-2947-48ad-9002-9eea3138b900.jpg?v=1787572927",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3740_ec7054aa-3767-46a8-a928-ba59864a0f13.jpg?v=1787572927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3741_064c2988-2947-48ad-9002-9eea3138b900.jpg?v=1787572927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3742_03c8929c-c8ad-4c1f-8f4e-d50221e86ae8.jpg?v=1787572927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3743_d1d2fa9d-5c7f-4464-be2e-b46d7f643454.jpg?v=1787572927"
    ],
    "colors": [
      "Pure White",
      "Cobalt"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Maximalist 36mm stack height foam shields leg muscles from marathon fatigue.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-fleet-10",
    "title": "Fleet Lightweight Gym & HIIT Training Shoes",
    "category": "men",
    "subcategory": "Fleet",
    "price": 5290,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3787_d63a3a4a-0412-4b98-b27c-d5c301179704.jpg?v=1787572882",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3788_8e4f6f4b-b58e-42e3-9197-793f588a7d23.jpg?v=1787572882",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3787_d63a3a4a-0412-4b98-b27c-d5c301179704.jpg?v=1787572882",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3788_8e4f6f4b-b58e-42e3-9197-793f588a7d23.jpg?v=1787572882",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3789_73b8cec9-b1d1-4f05-90eb-eafd692cec34.jpg?v=1787572882",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3790_02bbac78-bb9c-47dd-8179-4bb201e6712a.jpg?v=1787572882"
    ],
    "colors": [
      "Onyx",
      "Flame Red"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Flat stable heel with flexible forefoot grooves for box jumps and burpees.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-jog-1",
    "title": "Pro Performance Air Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 5490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6768_f364d8de-443f-4d73-bbfa-974fc3839e2b.jpg?v=1788439468",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6769_ca001672-0717-4307-bfa4-71ed40aa382d.jpg?v=1788439468",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6768_f364d8de-443f-4d73-bbfa-974fc3839e2b.jpg?v=1788439468",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6769_ca001672-0717-4307-bfa4-71ed40aa382d.jpg?v=1788439468",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6773.jpg?v=1788439468",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6776_d449a7fb-38b6-4d40-a47f-ad4e9be1b25a.jpg?v=1788439468"
    ],
    "colors": [
      "Crimson Red",
      "All Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "High-cushion air jogging shoes designed for runners and gym enthusiasts.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-jog-2",
    "title": "Cloud-Stride Memory Foam Daily Jogging Shoes",
    "category": "men",
    "subcategory": "Joggers",
    "price": 4990,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6881_7cdbd226-f9cc-4449-a64e-850e89d75dea.jpg?v=1788439430",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6882_49ca36fd-5774-474b-91d8-752dbc5e8419.jpg?v=1788439430",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6881_7cdbd226-f9cc-4449-a64e-850e89d75dea.jpg?v=1788439430",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6882_49ca36fd-5774-474b-91d8-752dbc5e8419.jpg?v=1788439430",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6886_0c6c70f0-c348-4637-bfcf-54d8dbafe899.jpg?v=1788439430",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6889_c10fc119-1c3b-4cb6-89cd-15a4c6356ead.jpg?v=1788439430"
    ],
    "colors": [
      "Slate Grey",
      "Neon"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Ultra plush memory foam footbed absorbs road shock for morning jogging.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-jog-3",
    "title": "Hydro-Flow Breathable Anti-Sweat Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 4790,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6832.jpg?v=1788439397",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6833_0daf4644-afba-4749-a1b1-fc157f6a803d.jpg?v=1788439397",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6832.jpg?v=1788439397",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6833_0daf4644-afba-4749-a1b1-fc157f6a803d.jpg?v=1788439397",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6837_3047d0be-98ca-4a60-85bd-743a2efe62cf.jpg?v=1788439398",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6840_45104bb3-7473-4094-a6f2-22dd269900c5.jpg?v=1788439398"
    ],
    "colors": [
      "Navy Blue",
      "White"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Special sweat-wicking knit membrane keeps feet dry in humid Pakistani summers.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-jog-4",
    "title": "Carbon-Plate Energy Return Marathon Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 7990,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6756_f3596623-1d5e-45ff-b064-3068bff1b566.jpg?v=1788439354",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6757_e127638c-cf57-4c1a-a905-c0aa09290575.jpg?v=1788439354",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6756_f3596623-1d5e-45ff-b064-3068bff1b566.jpg?v=1788439354",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6757_e127638c-cf57-4c1a-a905-c0aa09290575.jpg?v=1788439354",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6761_7c0bba89-6c5e-4837-91ec-83d46b32220e.jpg?v=1788439354",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6764_66c1594c-ece3-460f-ba04-3494cd85b695.jpg?v=1788439354"
    ],
    "colors": [
      "Hyper Violet",
      "Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Embedded carbon fiber propulsion plate snaps forward to maximize stride length.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-jog-5",
    "title": "Ultra-Cushioned High-Arch Long Distance Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6679_b90bbfe5-e84c-482b-924b-73659d7d5772.jpg?v=1788439320",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6680_ca74df3e-aaf7-4e96-ae45-aa17c762c846.jpg?v=1788439320",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6679_b90bbfe5-e84c-482b-924b-73659d7d5772.jpg?v=1788439320",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6680_ca74df3e-aaf7-4e96-ae45-aa17c762c846.jpg?v=1788439320",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6684_d718c9c4-baec-44aa-9a38-b40c1e3baf40.jpg?v=1788439320",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6687_52f06960-401e-401f-a80b-1b0cdf279000.jpg?v=1788439320"
    ],
    "colors": [
      "Glacier White",
      "Royal"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Targeted medial arch support prevents foot rolling on 10K and half-marathons.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-jog-6",
    "title": "All-Terrain Trail Joggers with Deep Tread",
    "category": "men",
    "subcategory": "Joggers",
    "price": 5690,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6718_95a72228-a418-41fa-8b48-28f181c35452.jpg?v=1788439282",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6719_70027aff-513d-4835-b9b4-8c16462734a0.jpg?v=1788439282",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6718_95a72228-a418-41fa-8b48-28f181c35452.jpg?v=1788439282",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6719_70027aff-513d-4835-b9b4-8c16462734a0.jpg?v=1788439282",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6723_8535cf65-71ba-4c47-8cad-764bb9f1f5d8.jpg?v=1788439282",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6728_c2ded8d3-c0f8-4a33-8918-974bea9c7d4a.jpg?v=1788439282"
    ],
    "colors": [
      "Camo Khaki",
      "Dark Olive"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Durable rock plate shield protects feet from sharp stones on rough trails.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-jog-7",
    "title": "Reflective Night-Runner Safety Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 5290,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6691_de250276-f594-4a59-a482-abbc77d55e08.jpg?v=1788439249",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6692_a5cacb36-f26e-46fa-afdc-9ab0826cd230.jpg?v=1788439249",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6691_de250276-f594-4a59-a482-abbc77d55e08.jpg?v=1788439249",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6692_a5cacb36-f26e-46fa-afdc-9ab0826cd230.jpg?v=1788439249",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6696_548b64cf-e29e-4353-b032-b1cd8be6b6ac.jpg?v=1788439250",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6700_9b6fc2b6-2e90-4791-9bf3-499d095b11d5.jpg?v=1788439250"
    ],
    "colors": [
      "Silver Grey",
      "Fluorescent Green"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "360-degree high-luminescence reflective piping shines brightly under headlights.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-jog-8",
    "title": "Dual-Density Sole City Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 4890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6732_7245d3e3-be18-4b24-9c0d-5b6906516e9d.jpg?v=1788439199",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6733_b9e73535-54a6-467a-bcc5-11462e4b76f2.jpg?v=1788439199",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6732_7245d3e3-be18-4b24-9c0d-5b6906516e9d.jpg?v=1788439199",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6733_b9e73535-54a6-467a-bcc5-11462e4b76f2.jpg?v=1788439199",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6737_115b8d5f-46f5-4942-a8d2-2a4bf27f739b.jpg?v=1788439199",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6740_42b832b2-213a-4dd8-8fc9-e811fd044d0d.jpg?v=1788439199"
    ],
    "colors": [
      "Triple Black",
      "Charcoal"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Firm outer rim provides guidance while softer core cradles your foot.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-jog-9",
    "title": "Knit Elastic Collar Slip-On Running Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 4590,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6856_6f59d9c0-0125-42da-ac15-14cb5e7e9645.jpg?v=1788439141",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6857_8fefeb5d-dd53-4a93-9c6a-95b1afcd43ca.jpg?v=1788439141",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6856_6f59d9c0-0125-42da-ac15-14cb5e7e9645.jpg?v=1788439141",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6857_8fefeb5d-dd53-4a93-9c6a-95b1afcd43ca.jpg?v=1788439141",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6861_065756b4-ac24-4d1e-b6b7-51b77bcede97.jpg?v=1788439141",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6864_61c98077-215e-4a6d-8b83-15f389951172.jpg?v=1788439141"
    ],
    "colors": [
      "Heather Charcoal",
      "Red"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Ribbed knit ankle collar slips on easily without untying shoelaces.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-jog-10",
    "title": "Maximum Shock-Absorb Air-Sole Joggers",
    "category": "men",
    "subcategory": "Joggers",
    "price": 5790,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6868_53a64a60-a878-486d-95e6-ffb4dae85f24.jpg?v=1788439105",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6869_d14e9bf0-eaf7-4934-a5d0-4091ee167734.jpg?v=1788439105",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6868_53a64a60-a878-486d-95e6-ffb4dae85f24.jpg?v=1788439105",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6869_d14e9bf0-eaf7-4934-a5d0-4091ee167734.jpg?v=1788439105",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6873_c6075579-a451-460b-93c3-2b4a60403553.jpg?v=1788439105",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6877_3bc575c2-7aa2-490f-b10d-baa3e72d021c.jpg?v=1788439105"
    ],
    "colors": [
      "Titanium Silver",
      "Electric Blue"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Visible 270-degree air heel bag cushions daily walking, running, and fitness.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "m-loaf-1",
    "title": "Italian Suede Penny Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 6990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5134_c8e7ae09-fe56-45a0-955f-de0a26a099d4.jpg?v=1788592529",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5135_7d10d668-9cfe-47bd-9f24-2041f0b322be.jpg?v=1788592529",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5134_c8e7ae09-fe56-45a0-955f-de0a26a099d4.jpg?v=1788592529",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5135_7d10d668-9cfe-47bd-9f24-2041f0b322be.jpg?v=1788592529",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5136_e6b82a4c-fcd0-4c93-8f72-7069de355181.jpg?v=1788592529",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5137_7eedd1d1-293a-4c3b-a7f5-4018e6102410.jpg?v=1788592529"
    ],
    "colors": [
      "Navy Suede",
      "Rich Brown"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Italian suede leather loafers with hand-stitched detailing and padded footbed.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "m-loaf-2",
    "title": "Golden Horsebit Leather Dress Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 7990,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4627_94c2c368-2860-4df4-a47e-1b06c3861bfd.jpg?v=1788592491",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4628_ba5f8c94-645b-456f-a406-21ec6a11004d.jpg?v=1788592492",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4627_94c2c368-2860-4df4-a47e-1b06c3861bfd.jpg?v=1788592491",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4628_ba5f8c94-645b-456f-a406-21ec6a11004d.jpg?v=1788592492",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4629_61932bdd-d84b-4099-a904-c3e9f6499caa.jpg?v=1788592492",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4630_bb4d2ab7-f969-43b2-9127-6744803e93ac.jpg?v=1788592492"
    ],
    "colors": [
      "Polished Black",
      "Burgundy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Premium calfskin formal dress loafers with 24K electroplated golden horsebit.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "m-loaf-3",
    "title": "Double Monk-Strap Formal Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 8490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4674_e45c7cb8-6798-432a-8141-f546aee331cf.jpg?v=1788591572",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4675_8bf599d1-c12f-4f8c-8951-e77644aabd2e.jpg?v=1788591572",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4674_e45c7cb8-6798-432a-8141-f546aee331cf.jpg?v=1788591572",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4675_8bf599d1-c12f-4f8c-8951-e77644aabd2e.jpg?v=1788591572",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4676_5c8e75a6-b341-4a3a-83b0-d16c5a67a323.jpg?v=1788591572",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4677_e4ba8570-c680-400a-bd10-1b7e24af3c5c.jpg?v=1788591572"
    ],
    "colors": [
      "Cognac Tan",
      "Jet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Sophisticated dual strap closures with polished silver buckles for black-tie suits.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "m-loaf-4",
    "title": "Handcrafted Tassel Formal Calfskin Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 7690,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4669_0ef45b49-b12c-47af-8444-5c4bf0c927fe.jpg?v=1788591489",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4670_846c4536-893b-4996-b7c1-2abfa8c664a9.jpg?v=1788591489",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4669_0ef45b49-b12c-47af-8444-5c4bf0c927fe.jpg?v=1788591489",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4670_846c4536-893b-4996-b7c1-2abfa8c664a9.jpg?v=1788591489",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4671_3e8f3e0a-740b-4854-ad83-0c3c5d56d48f.jpg?v=1788591489",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4672_dd6de244-7a36-4739-b484-6e7a4950bd18.jpg?v=1788591489"
    ],
    "colors": [
      "Deep Walnut",
      "Oxblood"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Twin swing tassels over perforated apron vamp for distinguished formal presence.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "m-loaf-5",
    "title": "Weave-Textured Intrecciato Leather Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 8990,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4652_0aaddb2c-bef4-44ac-8fbf-a61f79c2f7e4.jpg?v=1788591435",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4653_bf71c346-6b3b-41a6-839e-067caca7afc0.jpg?v=1788591435",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4652_0aaddb2c-bef4-44ac-8fbf-a61f79c2f7e4.jpg?v=1788591435",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4653_bf71c346-6b3b-41a6-839e-067caca7afc0.jpg?v=1788591435",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4654_a59e339c-0e8f-44e3-a813-f6ed8e8985a9.jpg?v=1788591435",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4655_b198de31-cab6-4629-82be-79e2745a2de1.jpg?v=1788591435"
    ],
    "colors": [
      "Espresso",
      "Dark Navy"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Intricately woven leather apron vamp inspired by Venetian master cobblers.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "m-loaf-6",
    "title": "Casual Suede Slip-On Venetian Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 5990,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4637_2708cb4c-674c-4ee5-825b-c98b82626b58.jpg?v=1788591391",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4638_a20b5573-f92f-4f85-9a5a-4f36a5e6ff3c.jpg?v=1788591391",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4637_2708cb4c-674c-4ee5-825b-c98b82626b58.jpg?v=1788591391",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4638_a20b5573-f92f-4f85-9a5a-4f36a5e6ff3c.jpg?v=1788591391",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4639_8ed190a1-5876-4200-a950-4c25fc178b1f.jpg?v=1788591391",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4640_13b8b454-24e6-46d8-8f79-18a62882c4b7.jpg?v=1788591391"
    ],
    "colors": [
      "Sand Beige",
      "Charcoal"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Clean unadorned vamp with soft unlined construction for warm evening dinners.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "m-loaf-7",
    "title": "Brogue Perforated Wingtip Dress Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 7290,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4647_96f90f20-c92b-478e-b19e-faec7ec014c6.jpg?v=1788591356",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4648_9f33f431-5037-469c-824c-2e911c84b598.jpg?v=1788591356",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4647_96f90f20-c92b-478e-b19e-faec7ec014c6.jpg?v=1788591356",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4648_9f33f431-5037-469c-824c-2e911c84b598.jpg?v=1788591356",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4649_f31d5881-d798-484c-b1f0-6e520b0af15f.jpg?v=1788591356",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4650_e36f1529-c9a7-4746-b4e2-1e8d2acd38ee.jpg?v=1788591356"
    ],
    "colors": [
      "Mahogany",
      "Tan"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": true,
    "description": "Classic brogue decorative punching along toe cap and side quarter lines.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "m-loaf-8",
    "title": "Chunky Lug-Sole Modern Trend Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 7490,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4642_f7c8f52a-f9c5-4841-a692-d0ba2f8aba35.jpg?v=1788591307",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4643_fc8a782c-fcf5-4cc8-8db6-3b9208d8020e.jpg?v=1788591307",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4642_f7c8f52a-f9c5-4841-a692-d0ba2f8aba35.jpg?v=1788591307",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4643_fc8a782c-fcf5-4cc8-8db6-3b9208d8020e.jpg?v=1788591307",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4644_d6e12ff5-8de9-437d-b854-e1b59637ddc1.jpg?v=1788591307",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4645_0fbae27d-0824-4154-9e50-c192c7b49020.jpg?v=1788591307"
    ],
    "colors": [
      "Polished Black",
      "Deep Olive"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Contemporary chunky commando lug sole pairs with modern tailored streetwear.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "m-loaf-9",
    "title": "Velvet Embroidered Evening Tuxedo Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 9490,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4692_1671b135-4c1b-4fae-989d-1a73e39e1293.jpg?v=1788591276",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4693_c3b92f8a-bea0-4946-bc47-be83ec459665.jpg?v=1788591276",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4692_1671b135-4c1b-4fae-989d-1a73e39e1293.jpg?v=1788591276",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4693_c3b92f8a-bea0-4946-bc47-be83ec459665.jpg?v=1788591276",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4694_bbf2b5a0-6bee-4bf0-8919-cdc488532d61.jpg?v=1788591276",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4695_2a9ae56a-c2e7-4b4f-9198-46c9756c8552.jpg?v=1788591276"
    ],
    "colors": [
      "Royal Navy",
      "Velvet Black"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Plush velvet evening slippers hand-embroidered with golden crest insignia.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "m-loaf-10",
    "title": "Feather-Light Unlined Leather Summer Loafers",
    "category": "men",
    "subcategory": "Loafers",
    "price": 6490,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4697_4cb2bb1b-b330-4b1a-8ca5-6c599381e5ab.jpg?v=1788591215",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4698_cb4d03d2-d38c-4e63-96a8-9c47ca8d3da0.jpg?v=1788591215",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4697_4cb2bb1b-b330-4b1a-8ca5-6c599381e5ab.jpg?v=1788591215",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4698_cb4d03d2-d38c-4e63-96a8-9c47ca8d3da0.jpg?v=1788591215",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4699_8cab6ab8-fcdc-49af-94c2-4865e9a6a070.jpg?v=1788591215",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4700_76098866-06cb-4035-b435-f67acc856e46.jpg?v=1788591215"
    ],
    "colors": [
      "Olive Suede",
      "Camel"
    ],
    "sizes": [
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "isNew": false,
    "description": "Super-flexible deconstructed leather loafers that fold effortlessly in luggage.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-pump-1",
    "title": "Classic Suede Pointed Toe Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 5490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7276_ff56599d-bcd7-4a6c-830f-e1a329895e9a.jpg?v=1789022426",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7277_ecdd8eae-5ce9-461b-a6a2-a1897c0ae4a1.jpg?v=1789022426",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7276_ff56599d-bcd7-4a6c-830f-e1a329895e9a.jpg?v=1789022426",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7277_ecdd8eae-5ce9-461b-a6a2-a1897c0ae4a1.jpg?v=1789022426",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7278_c7164c0d-71bc-4c07-9ff3-a0ea8226785e.jpg?v=1789022426",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7279_618a7d4d-0ce7-4b9a-a28b-e80000fe80df.jpg?v=1789022426"
    ],
    "colors": [
      "Maroon Suede",
      "Nude Rose",
      "Jet Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "Pointed pumps with 2.5-inch block heel and cushioned arch support.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-pump-2",
    "title": "Patent Glossy Scarlet Red Stiletto Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 6490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6048_0155ec71-af05-4ee7-a4b7-7ed91620d5db.jpg?v=1789022029",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6049_e8c0e36a-a587-4019-bcc3-5e3f07d2c185.jpg?v=1789022030",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6048_0155ec71-af05-4ee7-a4b7-7ed91620d5db.jpg?v=1789022029",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6049_e8c0e36a-a587-4019-bcc3-5e3f07d2c185.jpg?v=1789022030",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6050_ee137415-f2bb-4d22-91cf-fce185fd5db9.jpg?v=1789022029",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6051_b34a510f-b78a-4e8d-8482-3ac49ba31a8a.jpg?v=1789022029"
    ],
    "colors": [
      "Cherry Red",
      "Patent Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "High-shine patent leather with slender 3.5-inch heel and non-slip sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-pump-3",
    "title": "Nude Neutral Everyday Comfort Office Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 4990,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6043_034097ff-5fce-4fbe-b4e5-a90d7613b91c.jpg?v=1789021988",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6044_98f562c7-fb09-4421-a31d-ceef3d071ce2.jpg?v=1789021988",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6043_034097ff-5fce-4fbe-b4e5-a90d7613b91c.jpg?v=1789021988",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6044_98f562c7-fb09-4421-a31d-ceef3d071ce2.jpg?v=1789021988",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6045_731cabc2-cd92-4929-b567-728b4e0a1fdc.jpg?v=1789021988",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6046_a586c3a3-7cbf-4882-abeb-1274b5061727.jpg?v=1789021988"
    ],
    "colors": [
      "Warm Sand",
      "Blush Beige"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "Versatile skin-tone pointed pumps with shock-absorbing memory foam footbed.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-pump-4",
    "title": "Metallic Gold Shimmer Evening Gala Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 7290,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5846_61bdcb63-7c7f-4b75-94e8-c0b28b2c7c98.jpg?v=1789021932",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5847_8fd93cc6-3d6e-4f77-98b7-14ca05a5cb43.jpg?v=1789021932",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5846_61bdcb63-7c7f-4b75-94e8-c0b28b2c7c98.jpg?v=1789021932",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5847_8fd93cc6-3d6e-4f77-98b7-14ca05a5cb43.jpg?v=1789021932",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5848_942b1788-3d0b-41ba-856d-b52546d7e720.jpg?v=1789021931",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5850_ba868caa-4fe7-4a36-812a-2bcc16cc7f36.jpg?v=1789021932"
    ],
    "colors": [
      "24K Gold",
      "Rose Gold"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Glistening metallic lam\u00e9 upper crafted for weddings, galas, and red carpets.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-pump-5",
    "title": "Sculpted Block-Heel Pastel Lavender Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 5690,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5873_85de5e92-f9ec-425d-a139-1ccfa49f5067.jpg?v=1789021899",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5874_052d359e-76be-49ef-9ca6-d7cf622d6e40.jpg?v=1789021899",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5873_85de5e92-f9ec-425d-a139-1ccfa49f5067.jpg?v=1789021899",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5874_052d359e-76be-49ef-9ca6-d7cf622d6e40.jpg?v=1789021899",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5875_435482e8-97f8-490a-8aaa-22abba57d934.jpg?v=1789021899",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5876_46799f04-000c-4837-8fc9-e4f4a962a9b8.jpg?v=1789021899"
    ],
    "colors": [
      "Lilac",
      "Mint Cream"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Architectural modern block heel offers all-day walking poise and stability.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-pump-6",
    "title": "D\u2019Orsay Cutout Suede Pointed Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 5990,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5868_ec4c0695-4a19-449a-9b76-c9ac9a5b00b9.jpg?v=1789021862",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5869_02601f89-cc07-4a4c-bd85-f222768e9859.jpg?v=1789021862",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5868_ec4c0695-4a19-449a-9b76-c9ac9a5b00b9.jpg?v=1789021862",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5869_02601f89-cc07-4a4c-bd85-f222768e9859.jpg?v=1789021862",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5870_286880a9-1256-4270-9194-b15826da7b13.jpg?v=1789021862",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5871_9f71bf8e-8781-4bbc-bc8f-36b27c1fabda.jpg?v=1789021862"
    ],
    "colors": [
      "Royal Blue",
      "Emerald Green"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Sensual side cutout silhouette elongates legs for evening dinner cocktail dresses.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-pump-7",
    "title": "Bow-Accent Satin Festive Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 6290,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5863_cc6a40cb-deb3-4cbc-87fa-47bb0178de0b.jpg?v=1789021831",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5864_6ec1fa66-3b4c-471c-ace6-ac7ec4b124c0.jpg?v=1789021832",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5863_cc6a40cb-deb3-4cbc-87fa-47bb0178de0b.jpg?v=1789021831",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5864_6ec1fa66-3b4c-471c-ace6-ac7ec4b124c0.jpg?v=1789021832",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5865_e5cdfbe8-7be5-4b2c-95a4-744f14b1f1d3.jpg?v=1789021831",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5866_c7a78aae-2fb0-4c33-a2d3-0e6d3fedd54b.jpg?v=1789021832"
    ],
    "colors": [
      "Pearl White",
      "Champagne"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "Lustrous silk satin topped with a delicate crystal-centered bow ornament.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-pump-8",
    "title": "Snakeskin Textured Leather Kitten-Heel Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 5890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5836_09f69000-1a7b-441f-97da-213d22a1d51b.jpg?v=1789021800",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5837_b9fbc130-01a0-4897-a4b5-99459991d076.jpg?v=1789021800",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5836_09f69000-1a7b-441f-97da-213d22a1d51b.jpg?v=1789021800",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5837_b9fbc130-01a0-4897-a4b5-99459991d076.jpg?v=1789021800",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5838_f6e1cc19-6171-4356-9625-fd773617c370.jpg?v=1789021801",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5839_9917f6c8-86a1-4948-8682-9e2d2fbae06f.jpg?v=1789021801"
    ],
    "colors": [
      "Natural Python",
      "Taupe"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Subtle 2-inch kitten heel with embossed exotic python pattern for effortless chic.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-pump-9",
    "title": "Ankle-Wrap Suede Graceful Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 6190,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5817_b9c37518-e759-45e8-a5c3-26dc7a1f091e.jpg?v=1789021756",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5819_309d4e74-7f0a-446e-a718-2efafc361405.jpg?v=1789021755",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5817_b9c37518-e759-45e8-a5c3-26dc7a1f091e.jpg?v=1789021756",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5819_309d4e74-7f0a-446e-a718-2efafc361405.jpg?v=1789021755",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5820_903e95fd-2b32-495f-a996-1fc85d826609.jpg?v=1789021755",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5821_0bc8496c-7893-4b3c-b933-8c8a90148dd2.jpg?v=1789021755"
    ],
    "colors": [
      "Onyx Black",
      "Crimson"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Delicate suede ribbon straps tie around ankle for graceful support and elegance.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-pump-10",
    "title": "Ombre Gradient Glossy Cocktail Pumps",
    "category": "women",
    "subcategory": "Pumps",
    "price": 6790,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5812_bd9dfbd3-8106-4f89-b455-aa8b582476f4.jpg?v=1789021718",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5813_56ada3e9-5583-4497-90a2-cedc0c2d4025.jpg?v=1789021718",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5812_bd9dfbd3-8106-4f89-b455-aa8b582476f4.jpg?v=1789021718",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5813_56ada3e9-5583-4497-90a2-cedc0c2d4025.jpg?v=1789021718",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5814_d174ba8e-7165-4bb2-a20c-5433953b3cd0.jpg?v=1789021718",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5815_99f84b0a-30b0-4e94-bed9-818568d89009.jpg?v=1789021718"
    ],
    "colors": [
      "Sunset Red-Black",
      "Blue-Navy"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Mesmerizing two-tone gradient patent transition with ultra-slender stiletto heel.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-court-1",
    "title": "Corporate High Heel Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08581111MRN.jpg?v=1787130323",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3559_e4cb6974-1174-4616-9414-bd7821fb6784.jpg?v=1781076569",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08581111MRN.jpg?v=1787130323",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3559_e4cb6974-1174-4616-9414-bd7821fb6784.jpg?v=1781076569",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3560_a83d82d1-8788-42ee-a4cd-9cceae12ce48.jpg?v=1781076569",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3561_084adde8-9908-47a5-a600-f6e83a9f856d.jpg?v=1781076569"
    ],
    "colors": [
      "Glossy Black",
      "Nude Beige"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Formal court shoes tailored for corporate attire, boardroom elegance, and executive dinners.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-court-2",
    "title": "Square-Toe Mod Block-Heel Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 5490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08438606GDN.jpg?v=1782112403",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5072_c2dd1703-ee8a-40d8-94d7-f050f8b72ef4.jpg?v=1768983877",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08438606GDN.jpg?v=1782112403",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5072_c2dd1703-ee8a-40d8-94d7-f050f8b72ef4.jpg?v=1768983877",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5073_366566aa-2bc0-41ae-9f0b-7830e788e937.jpg?v=1768983877",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5074_8a9937a5-9415-432b-a262-052635f0a522.jpg?v=1768983877"
    ],
    "colors": [
      "Espresso",
      "Ivory Cream"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Contemporary squared toe with sturdy geometric 2.25-inch heel for working women.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-court-3",
    "title": "Perforated Leather Work-Day Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 5290,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0203_53022c7d-8dab-4b22-8cb6-7f145ada0891.jpg?v=1762844244",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0204_0f6de19c-43e7-4399-bc32-b8b93be94926.jpg?v=1762844243",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0203_53022c7d-8dab-4b22-8cb6-7f145ada0891.jpg?v=1762844244",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0204_0f6de19c-43e7-4399-bc32-b8b93be94926.jpg?v=1762844243",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0205_7b0aaa1b-97de-4777-a322-a92042f6034c.jpg?v=1762844244",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0206.jpg?v=1762844243"
    ],
    "colors": [
      "Tan Brown",
      "Midnight Navy"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Breathable laser micro-punching prevents perspiration during 9-to-5 desk duty.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-court-4",
    "title": "Patent Gloss Minimalist Slip-on Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 5790,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5824_b22b4d1c-8ba8-49d3-a664-88327957a561.jpg?v=1788870073",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5825_3605c32b-62fc-41fc-9c7e-a0e37d7f6bb4.jpg?v=1788870073",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5824_b22b4d1c-8ba8-49d3-a664-88327957a561.jpg?v=1788870073",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5825_3605c32b-62fc-41fc-9c7e-a0e37d7f6bb4.jpg?v=1788870073",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5826_439f41f4-8ebb-40d7-aa64-169e54b6876c.jpg?v=1788870073",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5827_44fd8ae4-2f34-46f4-b4c3-f491f15f9e64.jpg?v=1788870073"
    ],
    "colors": [
      "Wine Burgundy",
      "Jet Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Seamless mirror-shine patent upper with padded arch pillow for day-long ease.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-court-5",
    "title": "Low Kitten-Heel Padded Formal Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 4890,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08579507MRN.jpg?v=1782112808",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0625_9aef4ac7-4a94-43e6-b9d4-2f67260eb5a4.jpg?v=1779192862",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08579507MRN.jpg?v=1782112808",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0625_9aef4ac7-4a94-43e6-b9d4-2f67260eb5a4.jpg?v=1779192862",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0626.jpg?v=1779192862",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0627_d2fcab5e-b0e2-47e2-9a2e-f9aba70d82a7.jpg?v=1779192862"
    ],
    "colors": [
      "Mocha",
      "Slate Grey"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Modest 1.75-inch heel tailored for professional teachers, doctors, and bankers.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-court-6",
    "title": "Pointed Toe Metallic Buckle Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 6290,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08576506MRN.jpg?v=1782112729",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8129_acd7c911-595e-4c12-8544-8ea8cc49d0d2.jpg?v=1761295122",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08576506MRN.jpg?v=1782112729",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8129_acd7c911-595e-4c12-8544-8ea8cc49d0d2.jpg?v=1761295122",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8130_d02e1894-7d1b-48ab-937e-29427db6124b.jpg?v=1761295122",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8131_40abd5ae-228b-4e9f-9746-52c6898ee1a5.jpg?v=1761295122"
    ],
    "colors": [
      "Champagne Pearl",
      "Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Adorned with brushed gold geometric buckle at the vamp for understated luxury.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-court-7",
    "title": "Suede Flared-Heel Designer Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 6490,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08577306PRL.jpg?v=1767075481",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9282_87e3e6c5-4cb4-4399-a718-2acea6bcca6d.jpg?v=1767075481",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08577306PRL.jpg?v=1767075481",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9282_87e3e6c5-4cb4-4399-a718-2acea6bcca6d.jpg?v=1767075481",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9283_d728f3e1-a57d-4428-b83c-e2d7d8f4cfa9.jpg?v=1767075481",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9285_a21e3f37-3f32-4cd6-bd59-14c17d7977d7.jpg?v=1767075481"
    ],
    "colors": [
      "Forest Green",
      "Ruby Maroon"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Rich velvet-soft suede with flared architectural heel for high fashion impact.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-court-8",
    "title": "Soft Nappa Leather Comfort Arch Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 5690,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08575706BLK.jpg?v=1767074861",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0281_350121e2-aa34-4cad-a4ab-0fb19f5bbd8d.jpg?v=1767074861",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08575706BLK.jpg?v=1767074861",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0281_350121e2-aa34-4cad-a4ab-0fb19f5bbd8d.jpg?v=1767074861",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0282_a389680f-7bb0-45ce-84ec-e8735e8dce5e.jpg?v=1767074861",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0283_e861ffc3-8734-4d96-bd2a-ed1ad58054cf.jpg?v=1767074861"
    ],
    "colors": [
      "Blush Nude",
      "Camel"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Buttery glove-tanned leather moulds to your foot shape after first wear.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-court-9",
    "title": "Two-Tone Cap-Toe Parisian Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 6890,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8362_13ea4c31-d7de-46f2-b03c-9b9cd5904092.jpg?v=1757315717",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8363_dad791cf-95f4-4f0d-b736-c5c90018613e.jpg?v=1757315717",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8362_13ea4c31-d7de-46f2-b03c-9b9cd5904092.jpg?v=1757315717",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8363_dad791cf-95f4-4f0d-b736-c5c90018613e.jpg?v=1757315717",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8364_7556df1d-648d-4f7c-b01a-8628f56a2ec4.jpg?v=1757315717",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8365_73148b7c-d451-40c1-affe-ebab7dd1d148.jpg?v=1757315717"
    ],
    "colors": [
      "Beige-Black",
      "Cream-Navy"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Iconic Parisian chic style with contrasting patent black cap toe and beige body.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-court-10",
    "title": "Asymmetrical Vamp Modern Art Court Shoes",
    "category": "women",
    "subcategory": "Court Shoes",
    "price": 6190,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08586206GDN.jpg?v=1787988867",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3688_1ebb9f63-0ed3-401b-b3b7-cb2f6aa0c440.jpg?v=1787575668",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08586206GDN.jpg?v=1787988867",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3688_1ebb9f63-0ed3-401b-b3b7-cb2f6aa0c440.jpg?v=1787575668",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3689_2d8e748f-c2a1-4c5d-ae5f-1414ff3ef242.jpg?v=1787575668",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3690_17a640a8-aa93-4382-b44e-79bcc1d4a063.jpg?v=1787575668"
    ],
    "colors": [
      "Chalk White",
      "Charcoal"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Avant-garde diagonal cut neckline flatters foot contours with sleek modernism.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-snek-1",
    "title": "Trendy Chunky Sole Pastel Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 4990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7154_93fedf7e-e402-467d-a67e-683bf51a35cb.jpg?v=1788865011",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7155_2947d151-5acf-4810-98f5-2bda2f82cbda.jpg?v=1788865011",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7154_93fedf7e-e402-467d-a67e-683bf51a35cb.jpg?v=1788865011",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7155_2947d151-5acf-4810-98f5-2bda2f82cbda.jpg?v=1788865011",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7156_afa02ec2-f6af-49e6-9b26-c79729422f3a.jpg?v=1788865011",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7157_c6feab20-1769-4a03-83e5-b1d819a0fe1b.jpg?v=1788865011"
    ],
    "colors": [
      "Pastel Multi",
      "White Gold"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Lightweight walking sneakers with shock-absorbing platform sole and pastel accents.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-snek-2",
    "title": "Minimalist Clean White Leather Platform Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 5490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7149_ddd525ce-0883-4e5d-9ab0-092218a5777a.jpg?v=1788864976",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7150_f5ffbae3-2b0b-409e-9113-1597ab77b699.jpg?v=1788864976",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7149_ddd525ce-0883-4e5d-9ab0-092218a5777a.jpg?v=1788864976",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7150_f5ffbae3-2b0b-409e-9113-1597ab77b699.jpg?v=1788864976",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7151_f40a20ba-72b1-4f0a-affb-b8c2c0e31a97.jpg?v=1788864976",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7152_ef5dfd9d-ddac-49e9-bd28-dbad7874c9fa.jpg?v=1788864976"
    ],
    "colors": [
      "White Rose",
      "Triple White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Crisp white calf leather low-tops with 1.5-inch elevated platform sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-snek-3",
    "title": "Glitter & Holographic Statement Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 5290,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7108_b14e7d8f-db05-4f24-b63f-c3b8f6f597c1.jpg?v=1788864934",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7109.jpg?v=1788864934",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7108_b14e7d8f-db05-4f24-b63f-c3b8f6f597c1.jpg?v=1788864934",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7109.jpg?v=1788864934",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7110_f925e9e4-eb7e-44fd-9ae6-b261d54ec2b9.jpg?v=1788864934",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7111_80a17b60-ecda-4d9c-ae1f-ce789abeafa6.jpg?v=1788864934"
    ],
    "colors": [
      "Silver Sparkle",
      "Iridescent"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Catch the light with rainbow holographic overlays and glitter-fused panels.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-snek-4",
    "title": "Breathable Sock-Knit Walking Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 4490,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7103_eaad155f-06ff-4235-9fdf-8d0c9f265200.jpg?v=1788864898",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7104_024046b9-c9d4-4217-b2c0-a1c029886cc2.jpg?v=1788864898",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7103_eaad155f-06ff-4235-9fdf-8d0c9f265200.jpg?v=1788864898",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7104_024046b9-c9d4-4217-b2c0-a1c029886cc2.jpg?v=1788864898",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7105_e76680a6-61ea-4976-852f-849d318aa2b7.jpg?v=1788864898",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7106_f8a0f167-c197-40b2-a55a-83fe9ee0a68e.jpg?v=1788864898"
    ],
    "colors": [
      "Blush Pink",
      "Ash Lilac"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Featherweight stretch knit slips on easily with air-cushioned rebound heel.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-snek-5",
    "title": "Metallic Accents Casual Retro Low Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 4890,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7120_77be3366-8d21-4d58-8dd5-cbf5cee19cb3.jpg?v=1788864853",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7121_5ef525f8-c4b0-4488-af64-a98e953795a3.jpg?v=1788864853",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7120_77be3366-8d21-4d58-8dd5-cbf5cee19cb3.jpg?v=1788864853",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7121_5ef525f8-c4b0-4488-af64-a98e953795a3.jpg?v=1788864853",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7122_462a5b49-6013-45e5-abc3-0d99924759b0.jpg?v=1788864853",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7123_3d192b92-0b90-45d9-ab77-671bef1e39ee.jpg?v=1788864853"
    ],
    "colors": [
      "Champagne Gold",
      "White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Gold metallic leather side stripes and heel tab elevate everyday denim jeans.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-snek-6",
    "title": "High-Top Canvas Pastel Fashion Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 4290,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7137_dec89d89-78f4-4654-af6d-d40249c84a7f.jpg?v=1788864813",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7138_3bb8ac11-8969-4701-af1a-d023a703edc4.jpg?v=1788864813",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7137_dec89d89-78f4-4654-af6d-d40249c84a7f.jpg?v=1788864813",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7138_3bb8ac11-8969-4701-af1a-d023a703edc4.jpg?v=1788864813",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7140_043ecd3b-c009-40ae-bc5c-7e2da534f30a.jpg?v=1788864813",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7141_e8a476ff-4b2b-43c6-8c85-2a8a4511ad37.jpg?v=1788864813"
    ],
    "colors": [
      "Lavender",
      "Buttercup Yellow"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Youthful pastel dyed canvas with cushioned ankle wrap and vulcanized rubber sole.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-snek-7",
    "title": "Leopard Print & Suede Accent Chunky Trainers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 5790,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7143_c9c26b7c-148b-4125-8205-cc60788e7930.jpg?v=1788864548",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7144_388bc49b-db14-4e1d-aafa-6589b8f26624.jpg?v=1788864548",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7143_c9c26b7c-148b-4125-8205-cc60788e7930.jpg?v=1788864548",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7144_388bc49b-db14-4e1d-aafa-6589b8f26624.jpg?v=1788864548",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7145_b086a932-2215-49f6-a245-b9bf75f357f0.jpg?v=1788864547",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7146_5ec1751c-f2e9-44f2-b8f6-dff512c9673a.jpg?v=1788864548"
    ],
    "colors": [
      "Animal Print",
      "Neutral"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Exotic faux-fur leopard panel inserts paired with premium beige cow suede.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-snek-8",
    "title": "Air-Cushioned Athletic Jogging Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 5190,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7131_270ee345-7fc4-47f1-b295-c960ee1e37a3.jpg?v=1788864512",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7132_7d924729-9428-441c-8670-bd6240ca24e8.jpg?v=1788864512",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7131_270ee345-7fc4-47f1-b295-c960ee1e37a3.jpg?v=1788864512",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7132_7d924729-9428-441c-8670-bd6240ca24e8.jpg?v=1788864512",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7133_a4e4f0d8-bf44-4266-92f4-266c51004a01.jpg?v=1788864513",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7135_03c0bfdf-5221-4459-8b26-04443a6636d8.jpg?v=1788864512"
    ],
    "colors": [
      "Aqua Mint",
      "Peach Coral"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Translucent air bubble cushion absorbs running and aerobics exercise impact.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-snek-9",
    "title": "Slip-On Hands-Free Memory Foam Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 4690,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7114_d84a5eea-333e-4683-8bde-1ec3b303e07b.jpg?v=1788864475",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7115_2943a980-1ab8-4826-8d09-378c0f057e58.jpg?v=1788864475",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7114_d84a5eea-333e-4683-8bde-1ec3b303e07b.jpg?v=1788864475",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7115_2943a980-1ab8-4826-8d09-378c0f057e58.jpg?v=1788864475",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7116_bc607251-2407-4702-80e6-b58e940d5e91.jpg?v=1788864475",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7117_cfef5462-b171-427f-9c27-418083c91a79.jpg?v=1788864475"
    ],
    "colors": [
      "Soft Grey",
      "Rose Pearl"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Step in without bending or hands with patented flexible heel spring structure.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-snek-10",
    "title": "Embroidered Floral Designer Canvas Sneakers",
    "category": "women",
    "subcategory": "Sneakers",
    "price": 4790,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7125_86eed4b7-d780-49cb-8d38-bfc015843f7c.jpg?v=1788864401",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7126_fe920782-6da3-4c6b-8a75-d7ca91113c86.jpg?v=1788864401",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7125_86eed4b7-d780-49cb-8d38-bfc015843f7c.jpg?v=1788864401",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7126_fe920782-6da3-4c6b-8a75-d7ca91113c86.jpg?v=1788864401",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7127_151130ab-eef0-416a-b569-c1e2cac8fcac.jpg?v=1788864401",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7128_4c9f2c02-0064-4858-a34d-02f967e7dc16.jpg?v=1788864401"
    ],
    "colors": [
      "White Floral",
      "Denim Blue"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Artistic botanical rose embroidery across lateral canvas panels.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-back-1",
    "title": "Sleek Slingback Back Shoe Heels",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100035.png?v=1767164298",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5312_bb878a9b-bc3f-4d7a-96f6-d87815fca40b.jpg?v=1767164298",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100035.png?v=1767164298",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5312_bb878a9b-bc3f-4d7a-96f6-d87815fca40b.jpg?v=1767164298",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5313_03f96873-203c-4390-896b-f04416bcda71.jpg?v=1767164298",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5314_15417ae8-6813-47b8-8fee-824d8fa8a5b3.jpg?v=1767164298"
    ],
    "colors": [
      "Cream Beige",
      "Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Elegant back-strap slingback heels crafted for evening events and semi-formal wear.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-back-2",
    "title": "Pointed Toe Kitten-Heel Slingback",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 5290,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC01185_copy.jpg?v=1757316625",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC01140_copy.jpg?v=1757316625",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC01185_copy.jpg?v=1757316625",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC01140_copy.jpg?v=1757316625",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC01145_copy.jpg?v=1757316625",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC00694_copy.jpg?v=1757316626"
    ],
    "colors": [
      "Rose Gold",
      "Burgundy"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Petite 2-inch kitten heel with elasticized back strap for slip-free walking.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-back-3",
    "title": "Chunky Block Slingback with Golden Hardware",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 5790,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/02_7_3c16afdb-7ed6-403e-b165-8a94b7472921.jpg?v=1767156116",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2132_9eb0c94c-4ad3-4cc0-97c5-1e6a2b5bbbb3.jpg?v=1767156116",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/02_7_3c16afdb-7ed6-403e-b165-8a94b7472921.jpg?v=1767156116",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2132_9eb0c94c-4ad3-4cc0-97c5-1e6a2b5bbbb3.jpg?v=1767156116",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2134_0921a2e9-854f-4804-8fc2-4139dbb5a9d1.jpg?v=1767156116",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2135.jpg?v=1767156116"
    ],
    "colors": [
      "Tan Leather",
      "Ivory"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Substantial block heel provides rock-solid stability with luxury golden buckle.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-back-4",
    "title": "Clear Vinyl & Crystal Embellished Slingback",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 6490,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09615107WHT.jpg?v=1765877586",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9179_522ffe75-6656-45b6-85d8-3d0bbbf5c306.jpg?v=1765877586",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09615107WHT.jpg?v=1765877586",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9179_522ffe75-6656-45b6-85d8-3d0bbbf5c306.jpg?v=1765877586",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9181_e1d238eb-cab7-453e-a57a-98e1a2fa0597.jpg?v=1765877586",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9182_75c1c865-4bc6-42c0-be90-9eff577a400f.jpg?v=1765877586"
    ],
    "colors": [
      "Clear Crystal",
      "Nude"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Translucent lucite vamp crowned with shimmering crystal brooch ornament.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-back-5",
    "title": "Metallic Mirror-Finish Evening Slingback",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 6190,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/UJS09637-Enhanced-NR.jpg?v=1766988858",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/UJS09624-Enhanced-NR.jpg?v=1766988858",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/UJS09637-Enhanced-NR.jpg?v=1766988858",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/UJS09624-Enhanced-NR.jpg?v=1766988858",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/UJS09606-Enhanced-NR.jpg?v=1764309455",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/UJS09611-Enhanced-NR.jpg?v=1764309455"
    ],
    "colors": [
      "Silver Chrome",
      "Gold"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "High-shine mirror metallic finish captures spotlight reflections at parties.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-back-6",
    "title": "Elastic Ruched Back-Strap Casual Flats",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 4490,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100028_2.jpg?v=1757322832",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100028_1.jpg?v=1757322833",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100028_2.jpg?v=1757322832",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100028_1.jpg?v=1757322833",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2646_009552ea-0ee8-478d-9802-945d0e066cca.jpg?v=1757322833",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2647_a3ca291d-3ff1-4853-840b-7b4c972a2e83.jpg?v=1757322833"
    ],
    "colors": [
      "Mustard",
      "Olive"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Soft scrunchie-style ruched heel band gently hugs ankle without blisters.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-back-7",
    "title": "Pearl-Embellished Velvet Slingback Heels",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 6790,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100030-BLK.jpg?v=1757322828",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2681.jpg?v=1757322828",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L100030-BLK.jpg?v=1757322828",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2681.jpg?v=1757322828",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2683_98f42ed9-305d-46af-b6dd-1be1a5e4c5d3.jpg?v=1757322828",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2684_42bcaa95-46f0-4fc7-b0ec-b5b9ff428f61.jpg?v=1757322828"
    ],
    "colors": [
      "Navy Velvet",
      "Wine Red"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Lush plush velvet decorated with hand-set simulated freshwater pearls.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-back-8",
    "title": "Woven Raffia Summer Slingback Back Shoes",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 4890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9214_80cb3047-eeb1-4757-a957-87d7829571fc.jpg?v=1761303030",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9215_0b93287b-066d-4228-a31d-7845d1c119e8.jpg?v=1761303030",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9214_80cb3047-eeb1-4757-a957-87d7829571fc.jpg?v=1761303030",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9215_0b93287b-066d-4228-a31d-7845d1c119e8.jpg?v=1761303030",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9216_f9e558d2-59ca-4049-af05-f00ee63705ca.jpg?v=1761303030",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9217_8712af3f-6885-46b0-9adf-eb9384acb211.jpg?v=1761303030"
    ],
    "colors": [
      "Natural Sand",
      "Coral"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Breathable hand-woven organic raffia upper with leather piping trim.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-back-9",
    "title": "Studded Edge Rocker Chic Slingbacks",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 5990,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9147_54af9811-d966-4084-a6f2-1f2efd09372e.jpg?v=1761802108",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9148_ba5aaedd-3eb8-4826-a434-63cb22b33a33.jpg?v=1761802108",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9147_54af9811-d966-4084-a6f2-1f2efd09372e.jpg?v=1761802108",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9148_ba5aaedd-3eb8-4826-a434-63cb22b33a33.jpg?v=1761802108",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9149_618f4a87-494c-48cd-941c-dc31907320f1.jpg?v=1761802108",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9151_87e69ce4-f23c-4459-8c23-04b5b3dbce61.jpg?v=1761802108"
    ],
    "colors": [
      "Matte Black",
      "Blood Red"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Pyramid metallic studs along strap contour deliver bold contemporary attitude.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-back-10",
    "title": "Sculptural Geometric Heel Back Shoe",
    "category": "women",
    "subcategory": "Back Shoe",
    "price": 6390,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2658_908b9d39-d586-4cdd-91e9-967d44884a4f.jpg?v=1757322834",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2659.jpg?v=1757322834",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2658_908b9d39-d586-4cdd-91e9-967d44884a4f.jpg?v=1757322834",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2659.jpg?v=1757322834",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2660_ad1df064-2fa1-4f7e-800a-af25fadeab05.jpg?v=1757322834",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2661_7f9b65de-c80c-4975-ba00-d95ff3322063.jpg?v=1757322835"
    ],
    "colors": [
      "Bistre Brown",
      "White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Unique sphere and cylinder combination designer heel turns heads at galas.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-slip-1",
    "title": "Embellished Luxury Slide Slipper",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07652406LBU.jpg?v=1763104469",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5212_b50704d3-12fd-48c7-984b-9b66af6518da.jpg?v=1763104469",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07652406LBU.jpg?v=1763104469",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5212_b50704d3-12fd-48c7-984b-9b66af6518da.jpg?v=1763104469",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5213_b4a94027-5b69-4778-b2f3-e9d5b3006e4a.jpg?v=1763104469",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5214_e63a3474-1d35-48ea-8db3-b78724b122d4.jpg?v=1763104469"
    ],
    "colors": [
      "Champagne Gold",
      "Silver Sparkle"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Soft padded decorative slippers with crystal brooches and cushioned memory insoles.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-slip-2",
    "title": "Fluffy Faux-Fur Padded Bedroom Slides",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3290,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L076531.jpg?v=1757318926",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L076531_3.jpg?v=1757318926",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L076531.jpg?v=1757318926",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L076531_3.jpg?v=1757318926",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L076531_2.jpg?v=1757318926",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L076531_1.jpg?v=1757318926"
    ],
    "colors": [
      "Baby Pink",
      "Cloud White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "High-density ultra-soft faux rabbit fur band with outdoor-ready rubber sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-slip-3",
    "title": "Moroccan Leather Embroidered Babouche Slippers",
    "category": "women",
    "subcategory": "Slipper",
    "price": 4490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0077.jpg?v=1757317217",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0078_cc9d4310-8f5a-479f-9222-8c940e108e62.jpg?v=1757317217",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0077.jpg?v=1757317217",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0078_cc9d4310-8f5a-479f-9222-8c940e108e62.jpg?v=1757317217",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0079.jpg?v=1757317217",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0080.jpg?v=1757317217"
    ],
    "colors": [
      "Ochre Yellow",
      "Teal"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Genuine goat leather with pointed toe and traditional silk arabesque embroidery.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-slip-4",
    "title": "Pearl & Rhinestone Velvet Daily Slippers",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3790,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07664106BLK.jpg?v=1782112312",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7083.jpg?v=1777266497",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07664106BLK.jpg?v=1782112312",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7083.jpg?v=1777266497",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7084_4f6f8193-fd6b-4d23-8c03-89f42bcebd5d.jpg?v=1777266497",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7085_95726b61-36fe-4642-a754-ff6bff57e868.jpg?v=1777266497"
    ],
    "colors": [
      "Royal Navy",
      "Plum"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Densely tufted velvet footbed adorned with glistening rhinestone clusters.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-slip-5",
    "title": "Ergonomic Medicated Soft Sole Women\u2019s Slippers",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3890,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07657506BLK.jpg?v=1780638642",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0540_542acb4b-6d70-40fd-b7c2-7094ddcfde61.jpg?v=1779191927",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07657506BLK.jpg?v=1780638642",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0540_542acb4b-6d70-40fd-b7c2-7094ddcfde61.jpg?v=1779191927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0541_94bf536c-2de6-4407-b383-0b3262d7633f.jpg?v=1779191927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0542_659d2c5d-9e28-4148-b0fe-ec5449082762.jpg?v=1779191927"
    ],
    "colors": [
      "Muted Lilac",
      "Beige"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Anatomical arch support relieves heel pain and plantar fasciitis for homemakers.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-slip-6",
    "title": "Criss-Cross Quilted Vegan Leather Slides",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3490,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9580_35ee1a63-88b2-478a-9ef4-8236af1daf8a.jpg?v=1779191635",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9581_5f1b6f34-6e3f-481c-a464-3e7a18c2acde.jpg?v=1779191635",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9580_35ee1a63-88b2-478a-9ef4-8236af1daf8a.jpg?v=1779191635",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9581_5f1b6f34-6e3f-481c-a464-3e7a18c2acde.jpg?v=1779191635",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9582_b3b5a146-3d7c-4022-a24a-278f54966ee9.jpg?v=1779191635",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9583_a417addf-8b6f-4b16-b996-8e6567de9d8f.jpg?v=1779191635"
    ],
    "colors": [
      "Camel Tan",
      "Jet Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Diamond-padded cross bands offer pillowy cushioning for tired feet.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-slip-7",
    "title": "Metallic Bow Padded Casual Slides",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3690,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07657406TAN.jpg?v=1780638606",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7983_a2b75e9a-4682-43b8-adea-74057972ef8b.jpg?v=1777033184",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07657406TAN.jpg?v=1780638606",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7983_a2b75e9a-4682-43b8-adea-74057972ef8b.jpg?v=1777033184",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7984_f9a8b99c-de92-4768-820b-7be640d930b4.jpg?v=1777033184",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7985_2dd97f57-81e0-49aa-aae0-fdffd5a734bd.jpg?v=1777033184"
    ],
    "colors": [
      "Rose Gold",
      "Pewter"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Charming oversized metallic leather bow tops a contoured suede footbed.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-slip-8",
    "title": "Tassel-Adorned Suede Mules & Slippers",
    "category": "women",
    "subcategory": "Slipper",
    "price": 4290,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07660606LBU.png?v=1770975927",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6334.jpg?v=1770975927",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07660606LBU.png?v=1770975927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6334.jpg?v=1770975927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6335_7c55676a-2fa2-45e8-bb70-d835b650b218.jpg?v=1770975927",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6337_8cc8e68d-1c59-494d-b2a9-328273cb84fd.jpg?v=1770975927"
    ],
    "colors": [
      "Terracotta",
      "Sand"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Bohemian fringed suede tassels dance with every stride around the home.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-slip-9",
    "title": "Memory-Cushion Indoor/Outdoor Comfort Slippers",
    "category": "women",
    "subcategory": "Slipper",
    "price": 2990,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07659606PRL.png?v=1770969015",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5463_68ed6305-6e84-4fd0-a3cb-e089e87dcdc6.jpg?v=1770969015",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07659606PRL.png?v=1770969015",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5463_68ed6305-6e84-4fd0-a3cb-e089e87dcdc6.jpg?v=1770969015",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5464_8b621269-4c24-4ba9-b5d6-9d16e6310d11.jpg?v=1770969015",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5465_7f2d3af1-6c4d-47e0-8513-c67451c9a171.jpg?v=1770969015"
    ],
    "colors": [
      "Dusty Rose",
      "Charcoal"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Multi-layer memory foam with durable traction outsole for indoor and patio wear.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-slip-10",
    "title": "Braided Strap Contoured Footbed Slides",
    "category": "women",
    "subcategory": "Slipper",
    "price": 3590,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07658006BLK.png?v=1770966528",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5571.jpg?v=1770966528",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07658006BLK.png?v=1770966528",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5571.jpg?v=1770966528",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5572_8c8fee3f-0add-4cf0-8a5f-fae4afe871d2.jpg?v=1770966528",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5572c.jpg?v=1770966528"
    ],
    "colors": [
      "Mocha",
      "Cream Ivory"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Artisan hand-braided straps with natural cork-latex contoured footbed.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-brid-1",
    "title": "Royal Bridal Zardosi Crystal Heels",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04038506GDN.jpg?v=1782107023",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3951_9da37a6a-1f15-4031-927c-c02bc4ad3819.jpg?v=1781075445",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04038506GDN.jpg?v=1782107023",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3951_9da37a6a-1f15-4031-927c-c02bc4ad3819.jpg?v=1781075445",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3952_6bb34f96-0cb3-4c4d-b791-4d6e19f3bfda.jpg?v=1781075446",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3954_ca605f57-c00d-434f-986f-705bf22bb46b.jpg?v=1781075445"
    ],
    "colors": [
      "Gold Crystal",
      "Silver Diamond",
      "Rose Gold"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "Handcrafted wedding bridal footwear embroidered with metallic beads and Swarovski crystals.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-brid-2",
    "title": "Handcrafted Kundan & Pearl Traditional Bridal Khussa-Heel",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L05553306BLK.jpg?v=1779540689",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0932_c2dbb65b-f608-4db4-bdc3-689757ed1516.jpg?v=1772000287",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L05553306BLK.jpg?v=1779540689",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0932_c2dbb65b-f608-4db4-bdc3-689757ed1516.jpg?v=1772000287",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0933_7c4a4f72-b0ca-4a8e-897c-ff3af0085548.jpg?v=1772000288",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0934_4652855c-0c9d-4d26-9906-d7891f3c0327.jpg?v=1772000287"
    ],
    "colors": [
      "Deep Maroon",
      "Royal Red"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "Heritage Pakistani wedding footwear studded with real kundan gemstones and tilla work.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-brid-3",
    "title": "Glittering Ankle-Strap Stiletto Bridal Platforms",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8790,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04040506BLK.png?v=1770896778",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5363_c9886cf4-f36f-4c3c-a352-86d0ac6d6373.jpg?v=1770896778",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04040506BLK.png?v=1770896778",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5363_c9886cf4-f36f-4c3c-a352-86d0ac6d6373.jpg?v=1770896778",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5364_560cb6ac-051a-41d0-86ae-14da649ae529.jpg?v=1770896778",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5365_fd1905ec-c326-47ae-96e0-828731b51e37.jpg?v=1770896778"
    ],
    "colors": [
      "Rose Gold Glitter",
      "Champagne"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "1-inch front platform balances 4-inch stiletto for pain-free wedding stage reception.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-brid-4",
    "title": "Intricate Floral Cutout Lace Wedding Stilettos",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8290,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L05556207BLK.jpg?v=1782108007",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0669_182a8373-83a5-4828-a94a-54f645bd08cd.jpg?v=1762841858",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L05556207BLK.jpg?v=1782108007",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0669_182a8373-83a5-4828-a94a-54f645bd08cd.jpg?v=1762841858",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0670_543f4321-4eaa-42a1-afe2-8eb2feeda3a9.jpg?v=1762841858",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0671_831a5de5-8fe5-44b8-9c4c-282a137d3ea3.jpg?v=1762841858"
    ],
    "colors": [
      "Ivory White",
      "Pearl Lace"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "French Chantilly lace mesh overlaid with hand-placed micro crystals.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-brid-5",
    "title": "Crown Jewel Embellished Mirror-Finish Bridal Heels",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 9490,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1673_eefeb0db-9028-4d9f-b985-0500515c757b.jpg?v=1757315022",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1674_edddf2a3-050a-4d9b-92a6-edd37174ddc1.jpg?v=1757315022",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1673_eefeb0db-9028-4d9f-b985-0500515c757b.jpg?v=1757315022",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1674_edddf2a3-050a-4d9b-92a6-edd37174ddc1.jpg?v=1757315022",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1675_ad0d7645-4520-4d89-9de1-bacf3bd42109.jpg?v=1757315022",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1676_eea5670f-705e-42d7-adfd-baaa90960e53.jpg?v=1757315022"
    ],
    "colors": [
      "24K Gold",
      "Silver"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Ornamental royal crown jewel cluster at the toe box with mirror gold stiletto.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-brid-6",
    "title": "Tilla & Gotta Embroidered Velvet Bridal Wedges",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 7990,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L084367.png?v=1767161294",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9231_13e1846e-1d39-4c94-ba20-b12b6632f824.jpg?v=1767161294",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L084367.png?v=1767161294",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9231_13e1846e-1d39-4c94-ba20-b12b6632f824.jpg?v=1767161294",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9232_3b049ab2-fca8-4a06-b965-14abc4facdf5.jpg?v=1767161294",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9233_7f93ca8f-d0ec-4f6d-b81c-19914c9b5069.jpg?v=1767161294"
    ],
    "colors": [
      "Crimson Bridal",
      "Emerald"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Rich maroon bridal velvet encrusted with authentic dabka and gotta patti work.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-brid-7",
    "title": "Crystal Draped Cascading Heel Sandals",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 9290,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04038206BLK.jpg?v=1781164587",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3419_410f93c5-cb48-4862-8c42-5d618ab27316.jpg?v=1757318750",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04038206BLK.jpg?v=1781164587",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3419_410f93c5-cb48-4862-8c42-5d618ab27316.jpg?v=1757318750",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3420_5342cb5d-0bda-4bc6-b614-7028ea1d1d1a.jpg?v=1757318750",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3421_15d3bb5f-28e7-480c-b86c-8ee0a24d8d6e.jpg?v=1757318750"
    ],
    "colors": [
      "Diamond Silver",
      "Blush"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": true,
    "description": "Chandelier crystal fringes drape gracefully around the heel cup and ankle strap.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-brid-8",
    "title": "Royal Maharani Double-Sole Embroidered Bridal Pumps",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8690,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04817806BLK.jpg?v=1780727676",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6974_20f5a88b-ada4-4cc2-b9c6-5fba44825ceb.jpg?v=1757322046",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04817806BLK.jpg?v=1780727676",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6974_20f5a88b-ada4-4cc2-b9c6-5fba44825ceb.jpg?v=1757322046",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6975_3db3a468-0263-4fa5-a5e9-92ddbece2e9e.jpg?v=1757322046",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6976_6d749d3a-21a8-470b-8796-cc186533e067.jpg?v=1757322046"
    ],
    "colors": [
      "Ruby Red",
      "Antique Bronze"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Mughal architectural jaal embroidery crafted with metallic zari thread on silk.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-brid-9",
    "title": "Baroque Filigree Heel Wedding Slippers",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8890,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6054_bf9ef366-0932-47fd-b620-f15401ac9a82.jpg?v=1788870035",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6055_c46f58e3-d3d8-4e39-b8d3-2f9f67b265d6.jpg?v=1788870035",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6054_bf9ef366-0932-47fd-b620-f15401ac9a82.jpg?v=1788870035",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6055_c46f58e3-d3d8-4e39-b8d3-2f9f67b265d6.jpg?v=1788870035",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6056_2587042c-2060-44e7-b76d-49f7641c6d87.jpg?v=1788870035",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6057_a7f4240a-aa29-4db0-99a7-aa9450490bb2.jpg?v=1788870035"
    ],
    "colors": [
      "Imperial Gold",
      "Nude Gold"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Laser-cut golden filigree brass cage encloses heel for breathtaking photoshoots.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-brid-10",
    "title": "Diamond Cluster Peep-Toe Bridal Stilettos",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "price": 8990,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5894_641e9580-343c-4218-b376-757f6e972dcb.jpg?v=1788869990",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5895_12e527a6-db30-47bc-8e9e-97c5613ec269.jpg?v=1788869990",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5894_641e9580-343c-4218-b376-757f6e972dcb.jpg?v=1788869990",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5895_12e527a6-db30-47bc-8e9e-97c5613ec269.jpg?v=1788869990",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5896_97f6e5d9-3b10-41f6-8505-8a949655263e.jpg?v=1788869990",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5897_d440e608-8ae2-473d-a68b-e8cdb3c7bef2.jpg?v=1788869991"
    ],
    "colors": [
      "Starlight Silver",
      "Rose Quartz"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
    "isNew": false,
    "description": "Curved peep-toe opening highlights henna/mehndi design with radiant crystal bursts.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-sand-1",
    "title": "Ankle Strap Party Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 4990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5918_db25baae-4a6a-4925-b500-bc3cac68a866.jpg?v=1789022081",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5919_de459a3b-29e9-44a9-b541-0b4d967be71c.jpg?v=1789022081",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5918_db25baae-4a6a-4925-b500-bc3cac68a866.jpg?v=1789022081",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5919_de459a3b-29e9-44a9-b541-0b4d967be71c.jpg?v=1789022081",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5920.jpg?v=1789022081",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5921_d8f07483-b1d8-4a3a-934c-56785621f212.jpg?v=1789022081"
    ],
    "colors": [
      "Black Satin",
      "Champagne Nude"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Delicate ankle strap block sandals for weddings, soirees, and party wear.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-sand-2",
    "title": "Strappy Lace-Up Gladiator Stiletto Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 5790,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXS004612BGE.jpg?v=1782121710",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9543_be521bb4-195e-4149-9073-d1898387c6c2.jpg?v=1779193959",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXS004612BGE.jpg?v=1782121710",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9543_be521bb4-195e-4149-9073-d1898387c6c2.jpg?v=1779193959",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9545_97160f5d-2139-46e4-b406-2ad4869f2174.jpg?v=1779193959",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9546_7ec63994-749f-4160-9f64-24c32ff50147.jpg?v=1779193959"
    ],
    "colors": [
      "Metallic Gold",
      "Onyx Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Slender leather laces wrap up the calf with gold metallic tipped tassels.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-sand-3",
    "title": "Minimalist Two-Band Mid-Heel Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 4690,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L05037106GDN.jpg?v=1780637858",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2756_a78845c5-7546-4570-82f8-c6308b29e9e7.jpg?v=1775298894",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L05037106GDN.jpg?v=1780637858",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2756_a78845c5-7546-4570-82f8-c6308b29e9e7.jpg?v=1775298894",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2757_8399db88-a9b5-44a0-9b83-1868fd1b7d4c.jpg?v=1775298894",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2759_cc1e678a-3622-4da1-a160-0569df5c99b7.jpg?v=1775298893"
    ],
    "colors": [
      "Tan Leather",
      "White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Clean dual band silhouette with 2-inch cylindrical heel for timeless style.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-sand-4",
    "title": "Criss-Cross Metallic Festive Evening Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 5290,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXS004412MRN.jpg?v=1779541210",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4009_29bc10ae-c4fa-4940-8a8e-f87887676703.jpg?v=1773224225",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXS004412MRN.jpg?v=1779541210",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4009_29bc10ae-c4fa-4940-8a8e-f87887676703.jpg?v=1773224225",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4010_a2206e8e-955d-42ca-b749-cd752a515a5f.jpg?v=1773224225",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4011_be19bdf8-59a3-4b92-9aef-8bcc95414ed3.jpg?v=1773224225"
    ],
    "colors": [
      "Copper Bronze",
      "Silver"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Lustrous metallic leather cross bands hug foot arch with padded footbed.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-sand-5",
    "title": "Beaded Boho Chic Flat Strappy Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 3990,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07919606NVY.png?v=1770977111",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5652_55bd05d5-571a-4033-ab2c-1e27346f2492.jpg?v=1770977111",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07919606NVY.png?v=1770977111",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5652_55bd05d5-571a-4033-ab2c-1e27346f2492.jpg?v=1770977111",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5654_62567e3d-215d-43c1-9a0d-7d343063a898.jpg?v=1770977111",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5655.jpg?v=1770977111"
    ],
    "colors": [
      "Turquoise Coral",
      "Gold"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Hand-sewn wooden beads and tiny tassels bring bohemian vacation charm.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-sand-6",
    "title": "Crystal Encrusted Transparent Heel Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 6190,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXS003212GDN.jpg?v=1782121565",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9381_718ecf40-8716-4e55-bcde-ad0906f26e89.jpg?v=1757315426",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXS003212GDN.jpg?v=1782121565",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9381_718ecf40-8716-4e55-bcde-ad0906f26e89.jpg?v=1757315426",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9382.jpg?v=1757315426",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9383_ae00af6b-635c-4bd1-b3d0-952e442e96e9.jpg?v=1757315426"
    ],
    "colors": [
      "Lucite Clear",
      "Rose Shimmer"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Invisible clear PVC band with sparkling crystal studs and clear glass-look heel.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-sand-7",
    "title": "Wide-Strap Contemporary Mule Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 4790,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5030_ad21c70b-8032-42c7-ad2d-679d5615dcd1.jpg?v=1757316018",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5031_6433dbae-af0c-472d-8c44-601b2301405a.jpg?v=1757316018",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5030_ad21c70b-8032-42c7-ad2d-679d5615dcd1.jpg?v=1757316018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5031_6433dbae-af0c-472d-8c44-601b2301405a.jpg?v=1757316018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5033_a60661e6-ff72-4e72-9c51-33d983474015.jpg?v=1757316018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5034_fcfa0b18-d151-4b7d-bfbd-01cfa97be569.jpg?v=1757316018"
    ],
    "colors": [
      "Mustard Suede",
      "Dark Olive"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Slip-on mule architecture with sculpted wood block heel for daytime brunches.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-sand-8",
    "title": "Padded Tubular Strap Modernist Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 4490,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5243_2944fca5-f8ee-4130-8d2e-740eec06ba17.jpg?v=1757316045",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5244_3e1b33eb-6205-47cf-bcca-2df64e1940c9.jpg?v=1757316045",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5243_2944fca5-f8ee-4130-8d2e-740eec06ba17.jpg?v=1757316045",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5244_3e1b33eb-6205-47cf-bcca-2df64e1940c9.jpg?v=1757316045",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5245_239af1ef-510e-449b-ad8f-44fb5a380ecf.jpg?v=1757316045",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5246_1f445303-33b7-44df-bc49-8cf7f6baf005.jpg?v=1757316045"
    ],
    "colors": [
      "Bubblegum Pink",
      "Off-White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Pillow-soft tubular leather straps prevent any skin chafing in summer heat.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-sand-9",
    "title": "Buckled Ankle Platform Wedge Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 5490,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4974_a7a84eef-5493-4372-a1a5-8ea41db6d376.jpg?v=1757316335",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4975.jpg?v=1757316336",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4974_a7a84eef-5493-4372-a1a5-8ea41db6d376.jpg?v=1757316335",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4975.jpg?v=1757316336",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4976_0b4ea949-1460-4475-a2b3-a8300b0309af.jpg?v=1757316336",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4977_0b6c7d25-1a01-463f-a045-c707949944cd.jpg?v=1757316336"
    ],
    "colors": [
      "Cognac",
      "Black Patent"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Stout ankle strap with chunky metallic buckle and braided jute midsole.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-sand-10",
    "title": "T-Strap Diamante Summer Party Sandals",
    "category": "women",
    "subcategory": "Sandals",
    "price": 5190,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1292_579f7834-1a3e-4bf1-bf9f-28425ae28974.jpg?v=1757316868",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1293_0c9edbe2-c5ed-4fe4-9a27-569b9f1c4889.jpg?v=1757316868",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1292_579f7834-1a3e-4bf1-bf9f-28425ae28974.jpg?v=1757316868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1293_0c9edbe2-c5ed-4fe4-9a27-569b9f1c4889.jpg?v=1757316868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1294_110a995f-3b1f-4b9e-9e22-c568ad7d58cf.jpg?v=1757316868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1295_952e1518-ce56-4515-90a0-575e379fea12.jpg?v=1757316868"
    ],
    "colors": [
      "Champagne",
      "Gunmetal"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Central T-strap shimmering with micro diamantes accents evening gowns.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-flat-1",
    "title": "Traditional Embellished Flat Khussa",
    "category": "women",
    "subcategory": "Flat",
    "price": 3990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00137306BLK.jpg?v=1757671592",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9417_6fdc5c50-6e33-45c9-a77d-cba5b1d051cd.jpg?v=1757671592",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00137306BLK.jpg?v=1757671592",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9417_6fdc5c50-6e33-45c9-a77d-cba5b1d051cd.jpg?v=1757671592",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9418_d7d1cd69-dd43-4007-8db5-222611a1453d.jpg?v=1757671592",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9419_d2130ea2-965e-417f-90b8-2dffdabed332.jpg?v=1757671592"
    ],
    "colors": [
      "Tan Gold",
      "Royal Maroon"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Comfortable flat pure leather khussas with tilla threadwork and double cushioning.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-flat-2",
    "title": "Multani Kashi Kari Printed Leather Khussa",
    "category": "women",
    "subcategory": "Flat",
    "price": 4290,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04229506SLV.png?v=1772531405",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8023_6b8482c7-e50c-4513-b0fd-8f6dcdd94d0c.jpg?v=1772531405",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L04229506SLV.png?v=1772531405",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8023_6b8482c7-e50c-4513-b0fd-8f6dcdd94d0c.jpg?v=1772531405",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8024_2f6009a9-34e0-45e4-9d58-7744af751996.jpg?v=1772531405",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_8025_28b9a5f0-41f8-4f21-acca-99898205ec8c.jpg?v=1772531405"
    ],
    "colors": [
      "Indigo Blue",
      "Mustard"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Hand-painted floral glazed pottery motifs on fine genuine Pakistani leather.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-flat-3",
    "title": "Mirror-Work Festive Raw-Silk Flat Jutti",
    "category": "women",
    "subcategory": "Flat",
    "price": 4490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4766_200e5e45-51ec-4518-a15c-ef18f4a2eaa9.jpg?v=1788590655",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4767_f38ff0d4-19af-42cd-87e4-a392fecf05b2.jpg?v=1788590656",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4766_200e5e45-51ec-4518-a15c-ef18f4a2eaa9.jpg?v=1788590655",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4767_f38ff0d4-19af-42cd-87e4-a392fecf05b2.jpg?v=1788590656",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4768_b7888e25-4478-46d1-97c1-f7f6abf04559.jpg?v=1788590655",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4769_1026a81a-4879-410b-b0b0-ebb52dbf0e79.jpg?v=1788590655"
    ],
    "colors": [
      "Emerald Green",
      "Rani Pink"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Authentic miniature mirrors stitched with golden thread for Eid celebrations.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-flat-4",
    "title": "Pointed-Toe Suede D\u2019Orsay Casual Flats",
    "category": "women",
    "subcategory": "Flat",
    "price": 3890,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4749_37b86c0d-a779-4911-8a62-6def969d82de.jpg?v=1788590626",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4750_7dbb3534-415e-4819-8026-162f1a8e67a5.jpg?v=1788590626",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4749_37b86c0d-a779-4911-8a62-6def969d82de.jpg?v=1788590626",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4750_7dbb3534-415e-4819-8026-162f1a8e67a5.jpg?v=1788590626",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4751_001983b1-998b-4fad-ad5d-32ef54364c4e.jpg?v=1788590626",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4752_17c5b68e-c0d5-45ff-8e42-e1c9a248f1c0.jpg?v=1788590626"
    ],
    "colors": [
      "Nude Beige",
      "Jet Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Side cutout flats crafted in soft suede for everyday office and university wear.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-flat-5",
    "title": "Quilted Leather Ballet Flats with Bow",
    "category": "women",
    "subcategory": "Flat",
    "price": 4190,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4782.jpg?v=1788590586",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4783_50d8fdd2-499e-47e8-bb2b-ebad932f7ea7.jpg?v=1788590587",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4782.jpg?v=1788590586",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4783_50d8fdd2-499e-47e8-bb2b-ebad932f7ea7.jpg?v=1788590587",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4784_691dfcdf-0d40-4496-8639-182cd7764d71.jpg?v=1788590586",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4785_dd8decd7-3299-455e-90d4-fd8e07833f71.jpg?v=1788590586"
    ],
    "colors": [
      "Black Patent",
      "Cream"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Timeless quilted diamond stitching with delicate grosgrain ribbon bow.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-flat-6",
    "title": "Embroidered Velvet Mughal Motifs Flats",
    "category": "women",
    "subcategory": "Flat",
    "price": 4690,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4835_087054e1-e8d9-4f9d-9de8-14e341863181.jpg?v=1788588175",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4836_8dd2a21f-730d-4caa-b138-a122312b8dd8.jpg?v=1788588175",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4835_087054e1-e8d9-4f9d-9de8-14e341863181.jpg?v=1788588175",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4836_8dd2a21f-730d-4caa-b138-a122312b8dd8.jpg?v=1788588175",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4837_30f1eb49-7e67-40fa-9120-2fb3bda15360.jpg?v=1788588175",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4838_a4d69846-e599-427c-a2e2-e73c0bf10e7e.jpg?v=1788588175"
    ],
    "colors": [
      "Crimson",
      "Deep Purple"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Lush jewel-tone velvet embroidered with Mughal peacocks and floral creepers.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-flat-7",
    "title": "Square-Toe Minimalist Soft Leather Loafer Flats",
    "category": "women",
    "subcategory": "Flat",
    "price": 4590,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09433506GDN.jpg?v=1780639093",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7958_b45ba2b0-c4f1-4fd6-a5ac-56f39b3b639e.jpg?v=1777266810",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09433506GDN.jpg?v=1780639093",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7958_b45ba2b0-c4f1-4fd6-a5ac-56f39b3b639e.jpg?v=1777266810",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7959_a52ad3aa-b19e-48f6-898e-24034d59caf6.jpg?v=1777266810",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7960_a41a9ad9-fd4a-4c58-b07d-e1966779fe6d.jpg?v=1777266810"
    ],
    "colors": [
      "Mocha Brown",
      "Bone"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Collapsible heel counter allows wearing as loafers or slip-on slides.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-flat-8",
    "title": "Gilded Thread Tilla Embroidered Daily Flats",
    "category": "women",
    "subcategory": "Flat",
    "price": 3790,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09433306YEL.jpg?v=1782113301",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2299_746a06b9-6d15-4d75-81d0-14ed79d93c25.jpg?v=1764577422",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L09433306YEL.jpg?v=1782113301",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2299_746a06b9-6d15-4d75-81d0-14ed79d93c25.jpg?v=1764577422",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2300_aceaa694-ba15-49df-a038-657e87136e28.jpg?v=1764577422",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2301_b8b822a6-cbc0-4e3f-a308-acc1968579dd.jpg?v=1764577422"
    ],
    "colors": [
      "Antique Gold",
      "Silver"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Resilient tilla embroidery that won\u2019t snag or tarnish with regular wear.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-flat-9",
    "title": "Perforated Breathable Summer Slip-on Flats",
    "category": "women",
    "subcategory": "Flat",
    "price": 3490,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXR003312BGE.jpg?v=1782121478",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1674_d1874d28-b609-4728-81c3-db9338fa7c38.jpg?v=1763723354",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/LXR003312BGE.jpg?v=1782121478",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1674_d1874d28-b609-4728-81c3-db9338fa7c38.jpg?v=1763723354",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1675_501ce53c-b65c-447b-803d-626dba4207fa.jpg?v=1763723354",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1677_2d13630c-5b87-4557-bb47-604f8a3557ee.jpg?v=1763723354"
    ],
    "colors": [
      "Tan",
      "Soft Coral"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Ventilated geometric cutouts with soft padded insole for long summer walks.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-flat-10",
    "title": "Handwoven Jute & Leather Artisanal Flats",
    "category": "women",
    "subcategory": "Flat",
    "price": 3690,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00137506BGE.jpg?v=1758088319",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9449_ce063a74-1b9f-4f62-88f3-a64b0b835d9e.jpg?v=1758088319",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00137506BGE.jpg?v=1758088319",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9449_ce063a74-1b9f-4f62-88f3-a64b0b835d9e.jpg?v=1758088319",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9450.jpg?v=1758088319",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9451.jpg?v=1758088319"
    ],
    "colors": [
      "Natural Ivory",
      "Navy"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Eco-friendly natural jute fibers woven seamlessly with rich brown leather trim.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-wedg-1",
    "title": "Cork Cushion Wedge Sandals",
    "category": "women",
    "subcategory": "Wedge",
    "price": 4990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07440806BLK.jpg?v=1782112269",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0140_1aafc010-6d8a-4308-bb78-c3d12cc95257.jpg?v=1779190879",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07440806BLK.jpg?v=1782112269",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0140_1aafc010-6d8a-4308-bb78-c3d12cc95257.jpg?v=1779190879",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0141.jpg?v=1779190879",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0142_16359317-8f99-4602-8106-9cacf82b3233.jpg?v=1779190879"
    ],
    "colors": [
      "Beige Cork",
      "Mocha Brown"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Lightweight cork wedge heels for day-long stability, poise, and walking comfort.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-wedg-2",
    "title": "Woven Jute Rope Platform High Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 5490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3656_d58f87ba-ccf2-4e93-9678-b5c124fe0dfb.jpg?v=1787575096",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3657_594d371e-3b3a-468c-ad8d-8def7a7d53c8.jpg?v=1787575097",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3656_d58f87ba-ccf2-4e93-9678-b5c124fe0dfb.jpg?v=1787575096",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3657_594d371e-3b3a-468c-ad8d-8def7a7d53c8.jpg?v=1787575097",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3658_be3d55b3-e73b-40b8-bf81-d5fb17cd8e48.jpg?v=1787575096",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3659_c8967627-809a-4477-9623-5f2882fe025b.jpg?v=1787575097"
    ],
    "colors": [
      "Natural Straw",
      "Navy Blue"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Mediterranean espadrille styling with hand-wound natural jute rope sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-wedg-3",
    "title": "Laser-Cut Leather Peep-Toe Comfort Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 5290,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07440206GDN.jpg?v=1787988545",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3626_a3e93373-8391-4707-b4dd-d518b9780938.jpg?v=1787575001",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07440206GDN.jpg?v=1787988545",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3626_a3e93373-8391-4707-b4dd-d518b9780938.jpg?v=1787575001",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3627_6ec294d9-bc41-4c5d-8428-87dd087f9ea0.jpg?v=1787575001",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3628_c20b70eb-df1e-4ffb-a4e6-62edb89d90cb.jpg?v=1787575002"
    ],
    "colors": [
      "Cognac Tan",
      "Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Intricate botanical laser cutouts allow pleasant cooling airflow.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-wedg-4",
    "title": "Metallic Shimmer Evening Low Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 4790,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07439705BGE.jpg?v=1787988517",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3709_06161311-4ffd-40f4-9029-a16d5ae0e390.jpg?v=1787574954",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07439705BGE.jpg?v=1787988517",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3709_06161311-4ffd-40f4-9029-a16d5ae0e390.jpg?v=1787574954",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3710_a82e7276-9b84-4d63-9231-3fad21fb30d9.jpg?v=1787574953",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3711_9258b20c-1789-4b72-a21f-7cf79d7605a4.jpg?v=1787574954"
    ],
    "colors": [
      "Champagne",
      "Pewter"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Gentle 2-inch incline delivers graceful lift without placing stress on feet.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-wedg-5",
    "title": "Printed Bohemian Pattern High Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 5190,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07828906MRN.png?v=1770976644",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9251_416b7620-0002-4f4f-bac8-29dad1e3449b.jpg?v=1770976644",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07828906MRN.png?v=1770976644",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9251_416b7620-0002-4f4f-bac8-29dad1e3449b.jpg?v=1770976644",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9252_d8e1da8a-ec3d-4c14-be00-aedd833eb5ed.jpg?v=1770976644",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_9253_7a2009d3-cc1d-4ede-bf7c-92b08ea328b9.jpg?v=1770976644"
    ],
    "colors": [
      "Multicolor Floral",
      "Coral"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Vibrant artistic print canvas wrapped around sculpted 3.5-inch wedge.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-wedg-6",
    "title": "Velvet Padded Slip-on Comfort Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 4890,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08586206BLK.jpg?v=1787988838",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3719_9d31ab75-c93f-4f19-8901-67a7e3d6fe45.jpg?v=1787575417",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08586206BLK.jpg?v=1787988838",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3719_9d31ab75-c93f-4f19-8901-67a7e3d6fe45.jpg?v=1787575417",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3720_f66e2844-df10-444d-ac87-770919777341.jpg?v=1787575417",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3721_1decc206-b2cf-4bf0-bdf7-4e10ac979f36.jpg?v=1787575417"
    ],
    "colors": [
      "Burgundy",
      "Emerald"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Plush velvet upper with shock-absorbing polyurethane wedge core.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-wedg-7",
    "title": "Arch-Support Medicated Walking Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 5390,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08579106COF.jpg?v=1787988807",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1769_340722bb-7306-4513-92a4-6840608171d2.jpg?v=1787310683",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08579106COF.jpg?v=1787988807",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1769_340722bb-7306-4513-92a4-6840608171d2.jpg?v=1787310683",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1770_546e8ed7-6e71-4bb6-8087-99d1912ef446.jpg?v=1787310683",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1771_9c6af0b0-1fa8-4235-bbac-fc3a1d330c4d.jpg?v=1787310683"
    ],
    "colors": [
      "Nude Pink",
      "Dark Taupe"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Orthopedic contoured footbed aligns foot posture during extended standing.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-wedg-8",
    "title": "Strappy Buckle Cross-Over Summer Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 4690,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08579106BLK-_1.jpg?v=1787988771",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1789_a57044c8-3f86-48e9-96ac-83693b962c91.jpg?v=1787310613",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08579106BLK-_1.jpg?v=1787988771",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1789_a57044c8-3f86-48e9-96ac-83693b962c91.jpg?v=1787310613",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1790_4775393e-4c78-413b-85dd-45e3988c4e17.jpg?v=1787310613",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1791_5aa833a0-59b7-413b-b76d-11a3888d4baf.jpg?v=1787310613"
    ],
    "colors": [
      "Terracotta",
      "Chalk"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Criss-cross wide leather straps with adjustable polished metal ankle buckle.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-wedg-9",
    "title": "Glossy Patent T-Strap Party Wedges",
    "category": "women",
    "subcategory": "Wedge",
    "price": 5590,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08578906MRN.jpg?v=1787988730",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1799_a78edb3f-7541-4abf-a797-0c3a56bbfd33.jpg?v=1787310563",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08578906MRN.jpg?v=1787988730",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1799_a78edb3f-7541-4abf-a797-0c3a56bbfd33.jpg?v=1787310563",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1800_fe0d2830-8d9b-499b-a663-c06a383322f9.jpg?v=1787310563",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1802_12e3953a-c71b-412a-ad92-fa6aaa9fe5c7.jpg?v=1787310564"
    ],
    "colors": [
      "Jet Black",
      "Cherry Red"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "High-shine patent finish catches party lights with sturdy wedge base.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-wedg-10",
    "title": "Clear Lucite Strap Contemporary Wedge Sandals",
    "category": "women",
    "subcategory": "Wedge",
    "price": 5790,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08439606GDN.jpg?v=1787988693",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2177_88b97cfd-6713-4bae-b2e8-d0deb9d9768e.jpg?v=1787310487",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L08439606GDN.jpg?v=1787988693",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2177_88b97cfd-6713-4bae-b2e8-d0deb9d9768e.jpg?v=1787310487",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2178_0cee234f-0608-497a-b4db-6219591d9193.jpg?v=1787310487",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2179_fe7684c3-37c6-47fb-bfc4-0d65d7b29b17.jpg?v=1787310487"
    ],
    "colors": [
      "Clear Gold",
      "Silver"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Modern transparent vamp strap creates barefoot illusion with gilded wedge.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "w-cas-1",
    "title": "Crimson Glamour Stiletto Sandals",
    "category": "women",
    "subcategory": "Casual",
    "price": 6490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07039806MRN.jpg?v=1782216973",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1018_bae7972c-16a1-44d7-8f0d-0acfa491f315.jpg?v=1762842224",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07039806MRN.jpg?v=1782216973",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1018_bae7972c-16a1-44d7-8f0d-0acfa491f315.jpg?v=1762842224",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1020_b69c72d2-dcab-4ed1-9df5-4fcb16a2cb73.jpg?v=1762842224",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_1021_9a6759b8-3a46-42c8-bf3e-c4fe40af9ca5.jpg?v=1762842224"
    ],
    "colors": [
      "Scarlet Red",
      "Midnight Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "High-impact crimson red party stilettos crafted for red carpets and grand celebrations.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "w-cas-2",
    "title": "Everyday Slip-On Canvas Espadrilles",
    "category": "women",
    "subcategory": "Casual",
    "price": 3490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00062406GDN.png?v=1772523078",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4795_ade12ca9-70f9-41a1-a80f-7b3924720822.jpg?v=1772523078",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00062406GDN.png?v=1772523078",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4795_ade12ca9-70f9-41a1-a80f-7b3924720822.jpg?v=1772523078",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4796_f3a36133-ef23-4920-a84d-961f8e7a7444.jpg?v=1772523078",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4797_aa6e0a3b-1a01-4f89-beb3-cbf3e7cf3324.jpg?v=1772523078"
    ],
    "colors": [
      "Striped Navy",
      "Oatmeal"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Casual nautical striped canvas with flexible vulcanized rubber-wrapped jute sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "w-cas-3",
    "title": "Low-Block Heel Mules for Daily Wear",
    "category": "women",
    "subcategory": "Casual",
    "price": 4290,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5994_6dd6d791-aca6-4c70-b9a7-c5de71c20aca.jpg?v=1788869489",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5995_db079740-7703-44de-be78-65d4d8a1279d.jpg?v=1788869489",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5994_6dd6d791-aca6-4c70-b9a7-c5de71c20aca.jpg?v=1788869489",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5995_db079740-7703-44de-be78-65d4d8a1279d.jpg?v=1788869489",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5996_b5f684d5-9f89-448b-a134-6cf22fc6b0bc.jpg?v=1788869489",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5997_2ab7c3fe-28f5-425d-8a51-6027be71bcac.jpg?v=1788869489"
    ],
    "colors": [
      "Camel Brown",
      "Buttercream"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Effortless slip-on 1.5-inch block heel for grocery runs and casual outings.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "w-cas-4",
    "title": "Chunky Sole Fisherman Casual Sandals",
    "category": "women",
    "subcategory": "Casual",
    "price": 4690,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4799.jpg?v=1788588143",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4800_ec7b9c4b-fe2f-4aa7-b18d-e6d8bea6dbca.jpg?v=1788588144",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4799.jpg?v=1788588143",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4800_ec7b9c4b-fe2f-4aa7-b18d-e6d8bea6dbca.jpg?v=1788588144",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4801_94ba661a-3773-4874-a995-2de8f0335030.jpg?v=1788588143",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4802_38ba5d6c-dbce-4bc1-bd3a-98004e150725.jpg?v=1788588143"
    ],
    "colors": [
      "Chalk White",
      "Charcoal"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Modern street-style caged sandals with lightweight chunky lug outsole.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "w-cas-5",
    "title": "Soft Microfiber Penny Loafers for College/Work",
    "category": "women",
    "subcategory": "Casual",
    "price": 4190,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07038706PNK.jpg?v=1781173821",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5071_7d485d86-4ec1-4d06-9491-a226650619b0.jpg?v=1757318433",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L07038706PNK.jpg?v=1781173821",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5071_7d485d86-4ec1-4d06-9491-a226650619b0.jpg?v=1757318433",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5072_c276ef60-9d1c-4842-894d-0e2d27904ae7.jpg?v=1757318433",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5073.jpg?v=1757318433"
    ],
    "colors": [
      "Dusty Olive",
      "Black"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Supple vegan microfiber upper cleans easily with a damp cloth.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "w-cas-6",
    "title": "Elastic Criss-Cross Comfort Walking Casuals",
    "category": "women",
    "subcategory": "Casual",
    "price": 3790,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00059406BLU.png?v=1771240129",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0617_6b2205d8-8d4c-43d4-a6ad-c9d08c55bb32.jpg?v=1771240129",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00059406BLU.png?v=1771240129",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0617_6b2205d8-8d4c-43d4-a6ad-c9d08c55bb32.jpg?v=1771240129",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0618_b314c4a0-a8ea-458f-ab05-bc62b9dbf532.jpg?v=1771240129",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0619_896eb13a-281e-431c-9c42-987eb8ad158e.jpg?v=1771240129"
    ],
    "colors": [
      "Navy Blue",
      "Silver"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Stretchy interwoven elastic bands gently expand to accommodate swollen feet.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "w-cas-7",
    "title": "Studded Casual Flat Slides",
    "category": "women",
    "subcategory": "Casual",
    "price": 3990,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00057106PNK.png?v=1771240057",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7763_bb7a0d49-0ad6-4337-ac6a-1cd9d19f7fb2.jpg?v=1771240057",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00057106PNK.png?v=1771240057",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7763_bb7a0d49-0ad6-4337-ac6a-1cd9d19f7fb2.jpg?v=1771240057",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7764_c4da57e2-dd4c-4aea-8c58-5bb807911bd2.jpg?v=1771240057",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7765.jpg?v=1771240057"
    ],
    "colors": [
      "Matte Black",
      "Nude Pink"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": true,
    "description": "Double strap slides accented with flat brass pyramid studs.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "w-cas-8",
    "title": "Slip-Resistant Flexible Driving Casuals",
    "category": "women",
    "subcategory": "Casual",
    "price": 4490,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00066206NVY.jpg?v=1780480190",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0726_b4b29645-9c95-4976-b460-6e957f1492d2.jpg?v=1779512723",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00066206NVY.jpg?v=1780480190",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0726_b4b29645-9c95-4976-b460-6e957f1492d2.jpg?v=1779512723",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0727_4441afdd-2eee-4b87-a7c1-d8131e899217.jpg?v=1779512723",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0728_4afc92d6-6a92-4296-b796-b6efe3b616c4.jpg?v=1779512723"
    ],
    "colors": [
      "Warm Caramel",
      "Wine"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Moccasin construction wraps foot in seamless leather with pebble sole.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "w-cas-9",
    "title": "Pastel Buckled Clogs with Pine Footbed",
    "category": "women",
    "subcategory": "Casual",
    "price": 4890,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00066406SLV.jpg?v=1780637180",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0297_e86a70f5-daba-4423-a640-40c9f900de79.jpg?v=1779183525",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00066406SLV.jpg?v=1780637180",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0297_e86a70f5-daba-4423-a640-40c9f900de79.jpg?v=1779183525",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0298_6da39b0a-fdb8-4f92-99ea-30bb68df1668.jpg?v=1779183525",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_0299_c9026186-b4cb-4cb3-8ef9-72723df6de78.jpg?v=1779183525"
    ],
    "colors": [
      "Sky Blue",
      "Pale Lilac"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Scandinavian inspired light wood footbed with adjustable pastel strap.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "w-cas-10",
    "title": "Two-Tone Pointed Slingback Daily Casuals",
    "category": "women",
    "subcategory": "Casual",
    "price": 4590,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00072306WHT.jpg?v=1787986622",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3667_ec84ec04-f4a6-4ecf-a9b7-b7803541778a.jpg?v=1787573753",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/L00072306WHT.jpg?v=1787986622",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3667_ec84ec04-f4a6-4ecf-a9b7-b7803541778a.jpg?v=1787573753",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3669_424fb507-c9e4-4def-a87d-ca45a583bb81.jpg?v=1787573753",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3670_0b4561a6-04ef-4a4f-9932-f6eb2e529a24.jpg?v=1787573753"
    ],
    "colors": [
      "Cream & Tan",
      "Black & White"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40"
    ],
    "isNew": false,
    "description": "Chic contrasting cap-toe styling complements lawn suits and western denim.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "k-boy-1",
    "title": "Boys Genuine Leather Mini Peshawari",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3490,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6037_857be61c-d08e-4172-ba05-1cee66d63e43.jpg?v=1788868531",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6038_526943ff-2ed3-4d62-99c2-a77fa1a45878.jpg?v=1788868531",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6037_857be61c-d08e-4172-ba05-1cee66d63e43.jpg?v=1788868531",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6038_526943ff-2ed3-4d62-99c2-a77fa1a45878.jpg?v=1788868531",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6040_d711e7b4-5ed9-4239-8f65-070205372ef1.jpg?v=1788868531",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6041_c2832074-e6b3-45b8-813f-e853daf99358.jpg?v=1788868531"
    ],
    "colors": [
      "Tan",
      "Classic Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": true,
    "description": "Boys traditional peshawari chappal crafted with soft calfskin for Eid and celebrations.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "k-boy-2",
    "title": "Boys Sporty High-Top Sneaker Joggers",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3690,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5688_f86f5269-4513-46d3-a069-67fb2875b241.jpg?v=1788868495",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5689_c0cde374-88db-4398-9102-f6b51eb0d6c3.jpg?v=1788868495",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5688_f86f5269-4513-46d3-a069-67fb2875b241.jpg?v=1788868495",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5689_c0cde374-88db-4398-9102-f6b51eb0d6c3.jpg?v=1788868495",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5690_9391a614-2ddf-4efc-be02-90ff62cdc01a.jpg?v=1788868495",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5691_aa791a6f-ed8c-4872-9ead-75ad8240fdb1.jpg?v=1788868495"
    ],
    "colors": [
      "Fire Red",
      "Navy Blue"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": true,
    "description": "High-energy lightweight runners with sporty ankle support and flexible rubber sole.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "k-boy-3",
    "title": "Boys Premium Formal Chelsea Boots & Loafers",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3790,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5699.jpg?v=1788868451",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5700_63fb8f08-b782-40e6-9e2b-1926705fcabd.jpg?v=1788868451",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5699.jpg?v=1788868451",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5700_63fb8f08-b782-40e6-9e2b-1926705fcabd.jpg?v=1788868451",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5701_e0f9cff3-7b0a-45b0-93ff-d9319734709f.jpg?v=1788868451",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5702_2b05419c-dc2d-46db-81a8-507257b3a5f7.jpg?v=1788868451"
    ],
    "colors": [
      "Deep Brown",
      "Classic Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": true,
    "description": "Gentlemen styled boys boots and loafers with decorative stitching for festive occasions.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "k-boy-4",
    "title": "Boys Casual Dual-Velcro Summer Sandals",
    "category": "kids",
    "subcategory": "Boys",
    "price": 2990,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5704_9eea5f19-a82f-429f-8a8f-8d61e5d4e9fa.jpg?v=1788868227",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5705_172a7241-1fc6-4bb8-af11-3d8fe77591c6.jpg?v=1788868228",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5704_9eea5f19-a82f-429f-8a8f-8d61e5d4e9fa.jpg?v=1788868227",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5705_172a7241-1fc6-4bb8-af11-3d8fe77591c6.jpg?v=1788868228",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5706_ad584951-66c8-4579-a392-1c6030482778.jpg?v=1788868227",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5708_38a69438-ff67-42ea-9448-7d23f8ca3436.jpg?v=1788868228"
    ],
    "colors": [
      "Royal Blue",
      "Lime"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "description": "Easy on-and-off velcro fasteners allow little boys to dress themselves independently.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "k-boy-5",
    "title": "Boys Slip-On Canvas Skate Shoes",
    "category": "kids",
    "subcategory": "Boys",
    "price": 2790,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5694_4162c892-c115-4639-8fed-f271091b59d0.jpg?v=1788868137",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5695_49afdafe-2db9-45db-9291-10dcc2125987.jpg?v=1788868137",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5694_4162c892-c115-4639-8fed-f271091b59d0.jpg?v=1788868137",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5695_49afdafe-2db9-45db-9291-10dcc2125987.jpg?v=1788868137",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5696_e7da9f0c-91d1-4c7d-8962-28b13e562e27.jpg?v=1788868137",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5697_1f74b27f-e97a-48e3-bd9d-aa4430c96c09.jpg?v=1788868137"
    ],
    "colors": [
      "Camo Green",
      "Charcoal"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "description": "Durable double-stitched canvas with elastic side gores for school and playground.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "k-boy-6",
    "title": "Boys Light-Up LED Sole Flash Trainers",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3890,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5677_28e55013-6f4a-4f05-91eb-b9023c055ec8.jpg?v=1788868075",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5678_3821b363-aef1-422a-8c3a-188ce9d704ea.jpg?v=1788868076",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5677_28e55013-6f4a-4f05-91eb-b9023c055ec8.jpg?v=1788868075",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5678_3821b363-aef1-422a-8c3a-188ce9d704ea.jpg?v=1788868076",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5679_677cdcce-f5ef-44fc-8533-3e828ce9adf0.jpg?v=1788868075",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5680_e0d327b6-d329-4cbe-80f8-4bf2d6cfa40b.jpg?v=1788868075"
    ],
    "colors": [
      "Electric Blue",
      "Orange"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "description": "Impact-activated bright LED lights pulse inside transparent rubber sole.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "k-boy-7",
    "title": "Boys Traditional Tilla Embroidered Kurta Shoes",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3290,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5682_ba857d9f-657d-450b-9efb-ac4047db4482.jpg?v=1788868019",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5683_b6ef3e47-33a1-4dd8-9a75-d979369ec2b4.jpg?v=1788868018",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5682_ba857d9f-657d-450b-9efb-ac4047db4482.jpg?v=1788868019",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5683_b6ef3e47-33a1-4dd8-9a75-d979369ec2b4.jpg?v=1788868018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5684_79e7c6b7-7436-4073-a0c1-14cecd5670b4.jpg?v=1788868018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5685_7423510e-4c4a-45d2-adf7-d98ae69565c4.jpg?v=1788868018"
    ],
    "colors": [
      "Gold Maroon",
      "Cream"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": true,
    "description": "Rich golden tilla thread embroidery pairs impeccably with boys kurta pajama.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "k-boy-8",
    "title": "Boys Waterproof Anti-Slip Rain Boots",
    "category": "kids",
    "subcategory": "Boys",
    "price": 2990,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6026_c6b1485b-8f0f-4f11-bf0c-de71aa223d1c.jpg?v=1788867965",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6027_e7741a4d-1b06-45a0-af43-c8d8c0a8711f.jpg?v=1788867965",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6026_c6b1485b-8f0f-4f11-bf0c-de71aa223d1c.jpg?v=1788867965",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6027_e7741a4d-1b06-45a0-af43-c8d8c0a8711f.jpg?v=1788867965",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6028_52bb895b-b138-4f44-b369-260193c04efc.jpg?v=1788867965",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6029_33701d9d-33e6-4fe8-bac6-3fde802223af.jpg?v=1788867965"
    ],
    "colors": [
      "Bright Yellow",
      "Navy"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "description": "100% waterproof molded rubber boots with deep traction tread for puddle jumping.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "k-boy-9",
    "title": "Boys Active Breathable Running Shoes",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3390,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5635_5ff2c209-cf40-45e3-8202-ea1fae6ae203.jpg?v=1788867446",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5636_dc82c72c-48e9-45b4-a324-a39be4fc1137.jpg?v=1788867446",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5635_5ff2c209-cf40-45e3-8202-ea1fae6ae203.jpg?v=1788867446",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5636_dc82c72c-48e9-45b4-a324-a39be4fc1137.jpg?v=1788867446",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5638_9dd5d310-b923-49ff-b61a-a53cd12f1a86.jpg?v=1788867446",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5639_0e68af01-fb83-4e20-b131-1ea4c0cafc46.jpg?v=1788867446"
    ],
    "colors": [
      "Black Red",
      "Steel Grey"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "description": "Air mesh upper lets hot air escape during intense cricket and football matches.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "k-boy-10",
    "title": "Boys Classic Brown Boat Shoes for Parties",
    "category": "kids",
    "subcategory": "Boys",
    "price": 3590,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5493_8671d736-810b-4b1d-b178-2c80af1731b1.jpg?v=1788593916",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5494_8e48cb46-51cb-47ee-8d58-da888702c919.jpg?v=1788593916",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5493_8671d736-810b-4b1d-b178-2c80af1731b1.jpg?v=1788593916",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5494_8e48cb46-51cb-47ee-8d58-da888702c919.jpg?v=1788593916",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5495_b76d6677-87a7-4634-a067-dac7a25dd83e.jpg?v=1788593916",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5496_223fc9ab-cc27-4856-b2bd-9e27d55f32f4.jpg?v=1788593916"
    ],
    "colors": [
      "Caramel",
      "Espresso"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "isNew": false,
    "description": "Genuine leather boat shoes with non-slip siped rubber sole for family weddings.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "k-girl-1",
    "title": "Girls Sparkly Bow Princess Ballerina",
    "category": "kids",
    "subcategory": "Girls",
    "price": 2990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5745_74729e3d-fa2d-45e2-9771-46389bdb79a7.jpg?v=1788869360",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5746_c704a602-46c7-4fc5-8e09-9aca5394fab6.jpg?v=1788869360",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5745_74729e3d-fa2d-45e2-9771-46389bdb79a7.jpg?v=1788869360",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5746_c704a602-46c7-4fc5-8e09-9aca5394fab6.jpg?v=1788869360",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5747_ed926638-7eb4-4727-9b8e-2f927b6a0814.jpg?v=1788869360",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5748_12caedda-4f94-48ba-b5f0-9e00ae8aef88.jpg?v=1788869360"
    ],
    "colors": [
      "Ruby Red",
      "Shimmer Pink"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Girls festive glitter ballerina shoes with comfortable padding and satin ribbon bow.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "k-girl-2",
    "title": "Girls Floral Pastel Party Flats",
    "category": "kids",
    "subcategory": "Girls",
    "price": 3290,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5780_34e6e832-fa3f-4c7f-bb2f-839134a716f8.jpg?v=1788869313",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5781_64cd5a12-729f-440c-a9b7-b124730f62d3.jpg?v=1788869313",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5780_34e6e832-fa3f-4c7f-bb2f-839134a716f8.jpg?v=1788869313",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5781_64cd5a12-729f-440c-a9b7-b124730f62d3.jpg?v=1788869313",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5782_b100d969-7249-4912-89a0-1a4d2a8a5abe.jpg?v=1788869313",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5785_e32a0506-b6fc-451d-9b99-666b34a83b9c.jpg?v=1788869313"
    ],
    "colors": [
      "Rose Gold",
      "Ivory Pearl"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Charming floral party flats with soft inner lining for young girls.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "k-girl-3",
    "title": "Infant Soft-Sole Toddler Booties",
    "category": "kids",
    "subcategory": "Girls",
    "price": 2490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6031_12f0f148-2250-4c87-9cb2-2078ba3e6907.jpg?v=1788868584",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6032_4cd47d3e-17f8-4f96-b23b-e9ccb5067259.jpg?v=1788868584",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6031_12f0f148-2250-4c87-9cb2-2078ba3e6907.jpg?v=1788868584",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6032_4cd47d3e-17f8-4f96-b23b-e9ccb5067259.jpg?v=1788868584",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6033_142d5a42-d5cb-406d-9cab-baedeb70270d.jpg?v=1788868584",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_6035_c6fed21c-bed5-4f88-8996-e66091d5d0b3.jpg?v=1788868584"
    ],
    "colors": [
      "Cream",
      "Baby Pink"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Gentle anti-slip bottom booties designed for infant first steps and maximum comfort.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "k-girl-4",
    "title": "Girls Metallic Glitter Party Sandals",
    "category": "kids",
    "subcategory": "Girls",
    "price": 3190,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5215_9f25c1cf-74aa-497a-8eb2-e5512940dda5.jpg?v=1788593231",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5216_ad63897f-472b-418e-bb20-307ac8690249.jpg?v=1788593231",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5215_9f25c1cf-74aa-497a-8eb2-e5512940dda5.jpg?v=1788593231",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5216_ad63897f-472b-418e-bb20-307ac8690249.jpg?v=1788593231",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5218_d33ccdff-1ab0-47d6-8630-d261e80fc4df.jpg?v=1788593231",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5219_1c8d4f34-dc4d-4fb5-85b0-2122eb8a9f72.jpg?v=1788593231"
    ],
    "colors": [
      "Sparkle Gold",
      "Silver Shimmer"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Party wear sandals with sparkling glitter finish and soft ankle support for weddings.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "k-girl-5",
    "title": "Girls Ankle-Strap Flower Embellished Shoes",
    "category": "kids",
    "subcategory": "Girls",
    "price": 3390,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4878_335553bf-039f-40d7-a2a3-e39b13c05335.jpg?v=1788593195",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4879_8fa77dee-7a0a-4e75-b853-a1dd07385d95.jpg?v=1788593196",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4878_335553bf-039f-40d7-a2a3-e39b13c05335.jpg?v=1788593195",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4879_8fa77dee-7a0a-4e75-b853-a1dd07385d95.jpg?v=1788593196",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4880_4ec5676b-05fc-4d8e-9a1d-04124c3b225c.jpg?v=1788593195",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_4882_a5726de0-9409-4d09-9be7-e153cacdca24.jpg?v=1788593196"
    ],
    "colors": [
      "Lavender",
      "White"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Dainty chiffon 3D flowers with pearl centers attached to secure ankle strap.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "k-girl-6",
    "title": "Girls Light-Up Pastel Rainbow Sneakers",
    "category": "kids",
    "subcategory": "Girls",
    "price": 3690,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5262_d6f1e1cd-92e2-4153-8e2c-79e047a1fee0.jpg?v=1788593163",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5263_9b84576f-c94a-4c9e-af34-5563ac833f76.jpg?v=1788593163",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5262_d6f1e1cd-92e2-4153-8e2c-79e047a1fee0.jpg?v=1788593163",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5263_9b84576f-c94a-4c9e-af34-5563ac833f76.jpg?v=1788593163",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5264_54fa3a97-65be-4787-9771-727dfbdf152e.jpg?v=1788593162",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5265_6f8236e7-edfd-4082-934c-d30fda62de6b.jpg?v=1788593163"
    ],
    "colors": [
      "Unicorn Multi",
      "Pink"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Magical rainbow gradient upper with blinking multi-color LED sole lights.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "k-girl-7",
    "title": "Girls Traditional Hand-Embroidered Mini Khussas",
    "category": "kids",
    "subcategory": "Girls",
    "price": 2890,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5227_bb5a2638-1124-4f6b-a5d1-71248e1ceef8.jpg?v=1788593132",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5228_19379b21-fcb1-4784-b584-5a471c09d174.jpg?v=1788593131",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5227_bb5a2638-1124-4f6b-a5d1-71248e1ceef8.jpg?v=1788593132",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5228_19379b21-fcb1-4784-b584-5a471c09d174.jpg?v=1788593131",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5229_01c44bf4-b105-4ea5-9f09-7cf0a73cd228.jpg?v=1788593132",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5230_63ac2038-478a-4380-a94f-08d4dfd1b8f0.jpg?v=1788593131"
    ],
    "colors": [
      "Rani Pink",
      "Gold"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Authentic mini leather khussa with gentle padded insole for little feet on Eid.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "k-girl-8",
    "title": "Girls Velvet Ribbon Formal Mary Jane Shoes",
    "category": "kids",
    "subcategory": "Girls",
    "price": 3490,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5315_57cb1ba9-4b83-48e2-acfe-3b6a2dc94668.jpg?v=1788593068",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5316_2952c7a4-598b-485e-9635-8c7cb8be99dc.jpg?v=1788593068",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5315_57cb1ba9-4b83-48e2-acfe-3b6a2dc94668.jpg?v=1788593068",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5316_2952c7a4-598b-485e-9635-8c7cb8be99dc.jpg?v=1788593068",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5317_c50b256a-0059-4012-a904-ea758acaacca.jpg?v=1788593068",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5318_59cf3d2f-983b-4355-9a18-40c45fcd5eaf.jpg?v=1788593069"
    ],
    "colors": [
      "Glossy Black",
      "Burgundy"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Glossy patent finish with velvet ribbon tie for birthday parties and school plays.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "k-girl-9",
    "title": "Girls Breathable Slip-On Mesh Joggers",
    "category": "kids",
    "subcategory": "Girls",
    "price": 2990,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5509_49b2bae2-6606-4f25-bf73-feb358add401.jpg?v=1788593034",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5510_5bad7977-2b2d-478b-b70b-c0726d6fe985.jpg?v=1788593034",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5509_49b2bae2-6606-4f25-bf73-feb358add401.jpg?v=1788593034",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5510_5bad7977-2b2d-478b-b70b-c0726d6fe985.jpg?v=1788593034",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5511_5d45bfc5-4739-4e7c-bd4e-76cee25a3e39.jpg?v=1788593034",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5512_350e5557-bc5f-45d2-844e-fedd3115fbbe.jpg?v=1788593034"
    ],
    "colors": [
      "Peach Coral",
      "Mint"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Ultra-lightweight foam sole with breathable knit mesh for active playdates.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "k-girl-10",
    "title": "Girls Beaded Summer Strappy Sandals",
    "category": "kids",
    "subcategory": "Girls",
    "price": 2790,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5604_7e0dbd9e-65d8-4c9b-99cc-6cee0e99aa3b.jpg?v=1788592999",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5605_5231d3b8-8698-49f1-bc08-3110318b0e55.jpg?v=1788592999",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5604_7e0dbd9e-65d8-4c9b-99cc-6cee0e99aa3b.jpg?v=1788592999",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5605_5231d3b8-8698-49f1-bc08-3110318b0e55.jpg?v=1788592999",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5606_e6d939f1-52bb-4264-96cc-00527803d78d.jpg?v=1788592999",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5607_47f8d64b-0a5f-4828-a498-73c8efdbb925.jpg?v=1788592999"
    ],
    "colors": [
      "White Pearl",
      "Rose"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Iridescent pearl beads hand-strung on soft straps with cushioned footbed.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "k-sch-1",
    "title": "Smart Leather School Uniform Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 3990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600926BLK.jpg?v=1785242785",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/26_98d295b9-d8cc-4725-9aec-8098b1dd7e48.jpg?v=1784898789",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600926BLK.jpg?v=1785242785",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/26_98d295b9-d8cc-4725-9aec-8098b1dd7e48.jpg?v=1784898789",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/24_9f6f8373-f9ee-4dbb-a1ee-5387fd80b5ed.jpg?v=1784898789",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/25_4e77fa36-48fc-450e-ac23-190b4f1ed6fd.jpg?v=1784898788"
    ],
    "colors": [
      "School Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": true,
    "description": "Durable scuff-resistant black leather school shoes with high-traction rubber sole.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "k-sch-2",
    "title": "Kids All-Terrain White Sport Trainers",
    "category": "kids",
    "subcategory": "School",
    "price": 3390,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600626BLK.jpg?v=1785243220",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/12_c31a8d8d-c1c6-4e5b-a1ca-1fdb7a15ae57.jpg?v=1784898241",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600626BLK.jpg?v=1785243220",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/12_c31a8d8d-c1c6-4e5b-a1ca-1fdb7a15ae57.jpg?v=1784898241",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/13_10b93770-d7e8-450a-9539-ef29940c9360.jpg?v=1784898240",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/14_9350e631-21b9-4f53-a536-bec63ad94b2d.jpg?v=1784898240"
    ],
    "colors": [
      "Pure White",
      "White Grey"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": true,
    "description": "Breathable active training sneakers designed for school sports and physical training.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "k-sch-3",
    "title": "Boys Formal Oxford Lace-Up School Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 3790,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600826BLK.jpg?v=1785243287",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/19_f22d6334-c3df-4671-96f3-44ff348dd60e.jpg?v=1784898683",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600826BLK.jpg?v=1785243287",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/19_f22d6334-c3df-4671-96f3-44ff348dd60e.jpg?v=1784898683",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/21_021fc52a-9b03-422b-974e-d18f175c5b20.jpg?v=1784898683",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/17_760055c6-b723-457f-ae32-deeb94ce3397.jpg?v=1784898682"
    ],
    "colors": [
      "Glossy Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": true,
    "description": "Regulation uniform oxford shoes with reinforced heel counter and blind eyelets.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "k-sch-4",
    "title": "Girls Classic Single-Strap Mary Jane School Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 3490,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600726BLK.jpg?v=1785243348",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/59_32300848-1537-4bb6-90d3-3852546e712b.jpg?v=1784898424",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600726BLK.jpg?v=1785243348",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/59_32300848-1537-4bb6-90d3-3852546e712b.jpg?v=1784898424",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/58_3c94ccf3-6b8c-46ce-b55d-2b5318970839.jpg?v=1784898424",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/43_2449ebdb-0122-4a30-af6e-b1c877a18a9d.jpg?v=1784898424"
    ],
    "colors": [
      "Matte Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": false,
    "description": "Hook-and-loop velcro strap allows quick adjustment with scuff-resistant toe.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "k-sch-5",
    "title": "Heavy-Duty Scuff-Resistant Double-Velcro School Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 3690,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/03_ff16ec1d-482f-46ad-909f-dea723017806.jpg?v=1785580283",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/11_75e6f111-7bd3-4feb-95f1-4fe417879ecb.jpg?v=1785580283",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/03_ff16ec1d-482f-46ad-909f-dea723017806.jpg?v=1785580283",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/11_75e6f111-7bd3-4feb-95f1-4fe417879ecb.jpg?v=1785580283",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/01_c445d790-3bfc-4b1e-947c-217005f403a1.jpg?v=1785580283",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/02_b07c1c41-78b4-499b-b6b1-27b45e3c7d12.jpg?v=1785580283"
    ],
    "colors": [
      "Deep Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": false,
    "description": "Dual velcro straps withstand rough playground games and morning assembly runs.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "k-sch-6",
    "title": "Ultra-Cushion Orthopedic Insole School Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 4190,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/56_080de958-3cd3-4fa2-a206-9179b3c83573.jpg?v=1784898607",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/54_9dba67be-f661-4820-a4b4-6b13c0944ef7.jpg?v=1784898609",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/56_080de958-3cd3-4fa2-a206-9179b3c83573.jpg?v=1784898607",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/54_9dba67be-f661-4820-a4b4-6b13c0944ef7.jpg?v=1784898609",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/55_fd8fa25e-4b7a-4b59-a898-3209737717ca.jpg?v=1784898608",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/57_03cb85d6-cacd-418a-8f3c-c1e19df4b05a.jpg?v=1784898608"
    ],
    "colors": [
      "Navy",
      "Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": false,
    "description": "Podiatrist approved arch cushion supports growing bones during 8-hour school days.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "k-sch-7",
    "title": "Breathable Mesh P.T. Sports Joggers for School",
    "category": "kids",
    "subcategory": "School",
    "price": 3190,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/11_9dbaea15-b0b2-4ecb-83dd-07f3fd79b6fe.jpg?v=1784898144",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/8_cc992f62-27ab-48c7-9ead-3ca3fbbc4b43.jpg?v=1784898143",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/11_9dbaea15-b0b2-4ecb-83dd-07f3fd79b6fe.jpg?v=1784898144",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/8_cc992f62-27ab-48c7-9ead-3ca3fbbc4b43.jpg?v=1784898143",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/9_12a03dc2-dff6-450a-923a-738131e9d465.jpg?v=1784898143",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/10_9badf288-ffe6-49f2-a78e-3957bcd4c644.jpg?v=1784898142"
    ],
    "colors": [
      "All White"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": true,
    "description": "All-white regulation sports shoes with non-marking soles for school gymnasium.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "k-sch-8",
    "title": "Waterproof Rainy-Season Leather School Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 3890,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600426BLK.jpg?v=1785243416",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/4_a0b2c978-5d99-43bb-9733-e069794aa10d.jpg?v=1784898032",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KB5600426BLK.jpg?v=1785243416",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/4_a0b2c978-5d99-43bb-9733-e069794aa10d.jpg?v=1784898032",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/02_5c4e11f9-62f0-453d-b7dd-35593b722046.jpg?v=1784898032",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/3_426465ac-69c2-458a-9854-e2579b98f6c7.jpg?v=1784898032"
    ],
    "colors": [
      "Black Carbon"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": false,
    "description": "Hydrophobic sealed seams keep white socks bone-dry during monsoon walks to school.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "k-sch-9",
    "title": "Slip-On Elastic School Uniform Loafers",
    "category": "kids",
    "subcategory": "School",
    "price": 3590,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KG5600326BLK.jpg?v=1785242850",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/35_87e7eebb-8749-4c19-958b-ad620bb6b2e7.jpg?v=1784898940",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KG5600326BLK.jpg?v=1785242850",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/35_87e7eebb-8749-4c19-958b-ad620bb6b2e7.jpg?v=1784898940",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/33_d026c765-cb31-4c56-af25-fe4f76e25792.jpg?v=1784898940",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/34_794c7dac-b939-4e87-8282-eac87260b465.jpg?v=1784898940"
    ],
    "colors": [
      "Jet Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": false,
    "description": "No-lace elastic stretch design ensures rapid morning departure without untied laces.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "k-sch-10",
    "title": "Reinforced Rubber Toe-Cap Daily School Shoes",
    "category": "kids",
    "subcategory": "School",
    "price": 3690,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KG5600426BLK.jpg?v=1785242942",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/38_ccab17d6-036e-4caa-81fa-b342f7bb18db.jpg?v=1784899011",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/KG5600426BLK.jpg?v=1785242942",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/38_ccab17d6-036e-4caa-81fa-b342f7bb18db.jpg?v=1784899011",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/39_1077230c-960e-4e27-8151-9496d4d9e597.jpg?v=1784899011",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/40_2196f521-6b8c-452d-8ac1-bb8b1d22e195.jpg?v=1784899011"
    ],
    "colors": [
      "Solid Black"
    ],
    "sizes": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "isNew": false,
    "description": "Molded rubber bumper cap guards against accidental football toe-scuffs.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "k-wash-1",
    "title": "Kids Washable Waterproof Sandals",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2290,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3417_19ae5553-1967-468d-87df-95fe49833e08.jpg?v=1787640065",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3418_aaeef5cd-ca9d-4eeb-9ac2-d8e55705b661.jpg?v=1787640065",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3417_19ae5553-1967-468d-87df-95fe49833e08.jpg?v=1787640065",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3418_aaeef5cd-ca9d-4eeb-9ac2-d8e55705b661.jpg?v=1787640065",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3419_81bafd4b-49ba-4b6a-812e-bbf886d6835d.jpg?v=1787640065",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3420_ed5fc0c3-cc56-44eb-8ead-9c8de5b8772a.jpg?v=1787640065"
    ],
    "colors": [
      "Bright Blue",
      "Sunny Yellow"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Easy clean washable water sandals with flexible grip and quick buckle strap.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "k-wash-2",
    "title": "Quick-Dry Breathable Mesh Kids Slip-ons",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2490,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3412_b1231e88-32de-4bfe-b04d-24f08a9fcc52.jpg?v=1787640018",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3413_f43d75ae-93a8-4016-a8bb-4230305fc76e.jpg?v=1787640018",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3412_b1231e88-32de-4bfe-b04d-24f08a9fcc52.jpg?v=1787640018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3413_f43d75ae-93a8-4016-a8bb-4230305fc76e.jpg?v=1787640018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3414_a668a833-da7d-4166-9172-394fe38bac4a.jpg?v=1787640018",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3415_1f1f8e38-5ea8-447d-bce1-b2895888ec97.jpg?v=1787640018"
    ],
    "colors": [
      "Coral Aqua",
      "Navy"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Dunk in soapy water, rinse and dry in 20 minutes with zero odor retention.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "k-wash-3",
    "title": "Washable EVA Lightweight Garden Clogs",
    "category": "kids",
    "subcategory": "Washable",
    "price": 1990,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3396_d7f4b9ce-22ae-43b1-8157-1effa6959185.jpg?v=1787639981",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3397_620f5034-159c-4b2c-9706-77e211fb1cff.jpg?v=1787639981",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3396_d7f4b9ce-22ae-43b1-8157-1effa6959185.jpg?v=1787639981",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3397_620f5034-159c-4b2c-9706-77e211fb1cff.jpg?v=1787639981",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3398_f63e4729-c428-4ab4-b773-2ac86c580f93.jpg?v=1787639981",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3399_f82a8013-f56e-4cf5-919e-597da85b04fa.jpg?v=1787639981"
    ],
    "colors": [
      "Lime Green",
      "Pink"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Pivoting heel strap secures foot in motion; rinse with hose to clean mud.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "k-wash-4",
    "title": "Anti-Slip Washable Beach & Pool Aqua Shoes",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2190,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3406_81bf88e3-8446-4986-9825-6e9ca673208f.jpg?v=1787639940",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3407_891534c6-816a-43ca-a25f-eaadc551be2f.jpg?v=1787639940",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3406_81bf88e3-8446-4986-9825-6e9ca673208f.jpg?v=1787639940",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3407_891534c6-816a-43ca-a25f-eaadc551be2f.jpg?v=1787639940",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3408_6f274982-cada-4171-89bb-38b22b7c3ffc.jpg?v=1787639940",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_3409_b8721e5c-d5f5-4d90-8ae4-ed50d27e5d19.jpg?v=1787639940"
    ],
    "colors": [
      "Ocean Blue",
      "Flamingo"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Flexible neoprene upper protects tender soles from hot sand and pool tiles.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "k-wash-5",
    "title": "Machine-Washable Knit Play Sneaker",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2790,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2813_5ed85b7e-3c4b-40a1-ba36-75344f4b4e55.jpg?v=1787227543",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2814_eda8cbcd-7ea6-47c7-bd09-ad6f423728b1.jpg?v=1787227543",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2813_5ed85b7e-3c4b-40a1-ba36-75344f4b4e55.jpg?v=1787227543",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2814_eda8cbcd-7ea6-47c7-bd09-ad6f423728b1.jpg?v=1787227543",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2815_14be68ee-8f8f-438a-9264-79283a034379.jpg?v=1787227543",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2816_31ae2214-e032-4a26-a2d7-12406460834b.jpg?v=1787227543"
    ],
    "colors": [
      "Heather Grey",
      "Neon Red"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Safe for household washing machine cycles with colorfast knitted fibers.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "k-wash-6",
    "title": "Mud-Proof Easy-Clean All-Weather Slip-On",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2390,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2828_cd611cec-672b-4cd3-9ba0-47a2f8c4bccb.jpg?v=1787227498",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2829_a1e17c21-aab2-4024-aadd-f2cde6332260.jpg?v=1787227498",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2828_cd611cec-672b-4cd3-9ba0-47a2f8c4bccb.jpg?v=1787227498",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2829_a1e17c21-aab2-4024-aadd-f2cde6332260.jpg?v=1787227498",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2830_33fd8557-b172-4875-9698-272b44bdb21a.jpg?v=1787227498",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_2831_da0a8966-b61d-4417-b74c-ba31611ba545.jpg?v=1787227497"
    ],
    "colors": [
      "Forest Green",
      "Black"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Wipe off wet soil and lawn grass with a single paper towel swipe.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "k-wash-7",
    "title": "Odor-Resistant Washable Foam Slides",
    "category": "kids",
    "subcategory": "Washable",
    "price": 1890,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5622_a37c88f1-0972-4ae1-9049-7094b4f37dd3.jpg?v=1788592970",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5623_a066d8c4-ab8a-40a9-8051-9527a37695ba.jpg?v=1788592970",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5622_a37c88f1-0972-4ae1-9049-7094b4f37dd3.jpg?v=1788592970",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5623_a066d8c4-ab8a-40a9-8051-9527a37695ba.jpg?v=1788592970",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5624_94ad049f-b901-4b7e-8fd3-2f24b486bb9a.jpg?v=1788592970",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5625_d77488e0-2510-4f98-a0dd-ee64c3cb3850.jpg?v=1788592970"
    ],
    "colors": [
      "Sky Blue",
      "Yellow"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": true,
    "description": "Molded antibacterial EVA foam resists foot odor and sweat accumulation.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "k-wash-8",
    "title": "Flexible Rubber Washable Rainy Slip-ons",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2590,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5604_fb06dd80-30d6-4bf4-a2ee-2d183de56b89.jpg?v=1788592936",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5605_fa94dec7-31a8-437c-b556-6dd23b736228.jpg?v=1788592936",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5604_fb06dd80-30d6-4bf4-a2ee-2d183de56b89.jpg?v=1788592936",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5605_fa94dec7-31a8-437c-b556-6dd23b736228.jpg?v=1788592936",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5606_397e76be-8e44-4851-a3f1-ba0232866937.jpg?v=1788592937",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5607_daca31e1-b1e3-4f5a-9247-597378385afd.jpg?v=1788592936"
    ],
    "colors": [
      "Lavender",
      "Mint"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Seamless waterproof rubber exterior shields socks from street puddles.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "k-wash-9",
    "title": "Stretch-Fit Washable Water-Resistant Trainers",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2890,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5622_eb484fc1-e1d9-4923-b38e-c504fce84175.jpg?v=1788592899",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5623_e0eda62c-e975-45d5-86fd-dccab5eb009e.jpg?v=1788592899",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5622_eb484fc1-e1d9-4923-b38e-c504fce84175.jpg?v=1788592899",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5623_e0eda62c-e975-45d5-86fd-dccab5eb009e.jpg?v=1788592899",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5624_3b440860-04b3-4c23-b5bf-f37b3b1f9086.jpg?v=1788592899",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5625_5532c684-8037-4584-914c-cadc390ee382.jpg?v=1788592899"
    ],
    "colors": [
      "Royal Blue",
      "Orange"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Elastic sock collar with quick-drain ventilation holes for water park fun.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "k-wash-10",
    "title": "Quick-Drying Canvas Toddler Play Shoes",
    "category": "kids",
    "subcategory": "Washable",
    "price": 2290,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5561_b220db65-95ac-4f03-ae02-574e539bf04e.jpg?v=1788592868",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5562_c7a6e25c-d17e-4ce3-b419-1c0c12569898.jpg?v=1788592868",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5561_b220db65-95ac-4f03-ae02-574e539bf04e.jpg?v=1788592868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5562_c7a6e25c-d17e-4ce3-b419-1c0c12569898.jpg?v=1788592868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5563_abf801ec-aafe-487d-b324-119ff2f74b19.jpg?v=1788592868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_5564_6004e927-e99a-4601-9f25-cc1b8dacaee3.jpg?v=1788592868"
    ],
    "colors": [
      "Denim Navy",
      "Red"
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ],
    "isNew": false,
    "description": "Pre-shrunk cotton canvas retains shape after repetitive home washes.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "a-bag-1",
    "title": "Monogram Luxury Structured Handbag",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 7990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7526_e33c8cdf-ea17-48a4-86a3-287ec9247cb1.jpg?v=1789045288",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7527_d3e8072e-0fde-4004-92c9-e7d9dab73ba0.jpg?v=1789045288",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7526_e33c8cdf-ea17-48a4-86a3-287ec9247cb1.jpg?v=1789045288",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7527_d3e8072e-0fde-4004-92c9-e7d9dab73ba0.jpg?v=1789045288",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7528.jpg?v=1789045289"
    ],
    "colors": [
      "Camel Tan",
      "Rich Taupe"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": true,
    "description": "Spacious structured handbag with metallic hardware and detachable silk shoulder strap.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "a-bag-2",
    "title": "Designer Leather Tote Shoulder Bag",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 6990,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7522_8e223e8c-2694-417a-b7c8-56cf6e75c290.jpg?v=1789045130",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7523_6f6284ec-29dc-4eb6-affa-8398643a72e5.jpg?v=1789045131",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7522_8e223e8c-2694-417a-b7c8-56cf6e75c290.jpg?v=1789045130",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7523_6f6284ec-29dc-4eb6-affa-8398643a72e5.jpg?v=1789045131",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7524_e235e0c7-5684-4c27-8831-be66971d182d.jpg?v=1789045129"
    ],
    "colors": [
      "Midnight Black",
      "Burgundy Wine"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": true,
    "description": "Premium leather tote bag for work and casual travel with dedicated compartments.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "a-bag-3",
    "title": "Elegant Metallic Party Crossbody Bag",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 5490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7530_4537937a-7172-4cef-b85a-13038c7c405f.jpg?v=1789044868",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7531_d4f9bc70-9820-4d95-b27a-3b20ea08cc9b.jpg?v=1789044868",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7530_4537937a-7172-4cef-b85a-13038c7c405f.jpg?v=1789044868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7531_d4f9bc70-9820-4d95-b27a-3b20ea08cc9b.jpg?v=1789044868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7532_a4001425-522b-4d1b-92d1-6560968db577.jpg?v=1789044868",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7533_8ab286d3-8d7b-4e37-881d-8d3678aaefec.jpg?v=1789044868"
    ],
    "colors": [
      "Champagne Gold",
      "Silver Sheen"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": true,
    "description": "Compact evening party bag with chain strap and crystal lock clasp.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "a-bag-4",
    "title": "Royal Golden Couture Bridal Clutch",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 5990,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7488_aa23bb1a-9b7a-4b4f-9e9b-6d2fa26d3ed6.jpg?v=1789044747",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7489_07fcbb68-b0da-49fe-89cc-ffa9b6719d2e.jpg?v=1789044747",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7488_aa23bb1a-9b7a-4b4f-9e9b-6d2fa26d3ed6.jpg?v=1789044747",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7489_07fcbb68-b0da-49fe-89cc-ffa9b6719d2e.jpg?v=1789044747",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7490_def6b81a-ca6f-4ba8-989f-810712cd79ab.jpg?v=1789044747"
    ],
    "colors": [
      "24K Gold",
      "Antique Bronze"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": false,
    "description": "Haute couture bridal clutch embellished with intricate golden filigree and pearl accents.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "a-bag-5",
    "title": "Quilted Gold Chain Shoulder Flap Bag",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 6490,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7484_2d58910e-8505-45bf-b120-965d32de90e9.jpg?v=1789044708",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7485_df55afd1-0c96-4d3a-a516-93db46d0dea2.jpg?v=1789044708",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7484_2d58910e-8505-45bf-b120-965d32de90e9.jpg?v=1789044708",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7485_df55afd1-0c96-4d3a-a516-93db46d0dea2.jpg?v=1789044708",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7486_14bc49e2-325f-4edb-a50b-e742e9f1ebc9.jpg?v=1789044709"
    ],
    "colors": [
      "Cream White",
      "Emerald Green"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": false,
    "description": "Iconic diamond-quilted leather finish with heavy gold curb chain strap.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "a-bag-6",
    "title": "Parisian Minimalist Half-Moon Satchel",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 4990,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7534_2ab61394-dcde-45fd-8fe6-7b42770d17f6.jpg?v=1789044646",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7536_f625a840-e99e-40ec-a35a-b09cfe2f6035.jpg?v=1789044646",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7534_2ab61394-dcde-45fd-8fe6-7b42770d17f6.jpg?v=1789044646",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7536_f625a840-e99e-40ec-a35a-b09cfe2f6035.jpg?v=1789044646",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7537_8c170634-77b6-42af-8d89-79cf6ff3d037.jpg?v=1789044648"
    ],
    "colors": [
      "Blush Pink",
      "Onyx Black"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": false,
    "description": "Clean silhouette half-moon curve satchel purse designed for effortless everyday chic.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "a-bag-7",
    "title": "Luxury Saffiano Leather Envelope Clutch",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 4490,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7506_265840fc-2467-4d92-bb7d-68a0e0505428.jpg?v=1789044602",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7507_5b353366-a969-4aeb-9c7c-c9d534994eb4.jpg?v=1789044602",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7506_265840fc-2467-4d92-bb7d-68a0e0505428.jpg?v=1789044602",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7507_5b353366-a969-4aeb-9c7c-c9d534994eb4.jpg?v=1789044602",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7508_07ce9bcd-a38b-4eaa-b966-ea74a6ff34a7.jpg?v=1789044603"
    ],
    "colors": [
      "Maroon Gold",
      "Navy Blue"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": true,
    "description": "Saffiano textured envelope clutch with gold magnetic buckle and wristlet strap.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "a-bag-8",
    "title": "Chic Compact Leather Cardholder & Wallet",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 2490,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7501_9156c64f-65b6-4a9e-9e65-a2874b890e62.jpg?v=1789044560",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7502_15d988a1-059a-4697-9faf-67b8435d268b.jpg?v=1789044560",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7501_9156c64f-65b6-4a9e-9e65-a2874b890e62.jpg?v=1789044560",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7502_15d988a1-059a-4697-9faf-67b8435d268b.jpg?v=1789044560",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7504_f6ba7c31-d98d-472a-9f9d-bcbb521b28c6.jpg?v=1789044560"
    ],
    "colors": [
      "Dusty Rose",
      "Jet Black",
      "Caramel"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": false,
    "description": "Slim grained leather bifold cardholder with zippered coin pouch.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "a-bag-9",
    "title": "Croc-Embossed Structured Satchel Bag",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 7490,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7497_3c9fdcc6-1bb2-4d82-a1f3-afacc263a74d.jpg?v=1789040194",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7498_d47e9278-01c1-45e5-af6c-a3f7d0253edd.jpg?v=1789040194",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7497_3c9fdcc6-1bb2-4d82-a1f3-afacc263a74d.jpg?v=1789040194",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7498_d47e9278-01c1-45e5-af6c-a3f7d0253edd.jpg?v=1789040194",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7499_b77f7628-4188-4265-a495-66d1bb4426cc.jpg?v=1789040196"
    ],
    "colors": [
      "Espresso Brown",
      "Forest Green"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": false,
    "description": "Exotic glossy crocodile embossing with structured top handle and padlock charm.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "a-bag-10",
    "title": "Crystal Embellished Minaudi\u00e8re Evening Box Clutch",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "price": 6890,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7518_829960ca-d95d-408b-b07c-86f3a92c1b0e.jpg?v=1789040148",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7519_95d091c4-3788-4dd6-8c77-3b0d53541f4b.jpg?v=1789040148",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7518_829960ca-d95d-408b-b07c-86f3a92c1b0e.jpg?v=1789040148",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7519_95d091c4-3788-4dd6-8c77-3b0d53541f4b.jpg?v=1789040148",
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/DSC_7520_2eb00fd4-7384-42e5-83c4-f347354841da.jpg?v=1789040149"
    ],
    "colors": [
      "Diamond Silver",
      "Rose Gold"
    ],
    "sizes": [
      "One Size"
    ],
    "isNew": false,
    "description": "Hard-shell metal box clutch enveloped in pave-set faceted crystals for galas.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "a-frag-1",
    "title": "Royal Rose Eau De Parfum (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 4990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0021-MLT.jpg?v=1779705388",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0021-MLT.jpg?v=1779705388",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0021-MLT.jpg?v=1779705388"
    ],
    "colors": [
      "Standard"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": true,
    "description": "Exquisite French floral fragrance with notes of damask rose, amber, and vanilla.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "a-frag-2",
    "title": "Oud Royale Imperial Concentrated Attar (50ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 6990,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0022-MLT.jpg?v=1779705273",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0022-MLT.jpg?v=1779705273",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0022-MLT.jpg?v=1779705273"
    ],
    "colors": [
      "Gold Bottle"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": true,
    "description": "Precious aged Cambodian agarwood with royal saffron and velvety musk.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "a-frag-3",
    "title": "Velvet Jasmine & Bergamot Luxury Mist (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 4490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0023-MLT.jpg?v=1779705081",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0023-MLT.jpg?v=1779705081",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FBM0023-MLT.jpg?v=1779705081"
    ],
    "colors": [
      "Frosted Glass"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": true,
    "description": "Sparkling Italian bergamot infused with intoxicating night-blooming white jasmine.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "a-frag-4",
    "title": "Amber Gold Executive Eau De Parfum (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 5490,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0054-MLT.jpg?v=1779703964",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0054-MLT.jpg?v=1779703964",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0054-MLT.jpg?v=1779703964"
    ],
    "colors": [
      "Amber Flacon"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": false,
    "description": "Commanding blend of warm golden amber, cedarwood, and rich cinnamon spice.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "a-frag-5",
    "title": "Mystic Sandalwood Oriental Fragrance (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 5890,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/PRF_jpg_a27024e0-0663-4a4e-a605-4b7bf0acb44d.jpg?v=1779769953",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/PRF_jpg_a27024e0-0663-4a4e-a605-4b7bf0acb44d.jpg?v=1779769953",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/PRF_jpg_a27024e0-0663-4a4e-a605-4b7bf0acb44d.jpg?v=1779769953"
    ],
    "colors": [
      "Wood Cap"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": false,
    "description": "Creamy Mysore sandalwood harmonized with green cardamom and vanilla bean.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "a-frag-6",
    "title": "Parisian Blossom Fresh Floral Parfum (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 4790,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0052-MLT.jpg?v=1779703416",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0052-MLT.jpg?v=1779703416",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0052-MLT.jpg?v=1779703416"
    ],
    "colors": [
      "Blush Glass"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": false,
    "description": "Crisp pink peony, white lilies, and juicy nectarine create an uplifting aura.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "a-frag-7",
    "title": "Midnight Black Intense Woody Cologne (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 5290,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0051-MLT.jpg?v=1779703270",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0051-MLT.jpg?v=1779703270",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0051-MLT.jpg?v=1779703270"
    ],
    "colors": [
      "Onyx Flacon"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": true,
    "description": "Smoky birch wood, Tuscan leather, and dark patchouli for evening charisma.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "a-frag-8",
    "title": "Cashmere Suede & Vanilla Sweet Musk (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 4690,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0050-MLT.jpg?v=1779703028",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0050-MLT.jpg?v=1779703028",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0050-MLT.jpg?v=1779703028"
    ],
    "colors": [
      "Nude Bottle"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": false,
    "description": "Gentle veil of white musk, cashmere woods, and warm Tahitian vanilla bean.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "a-frag-9",
    "title": "Aqua Marine Citrus Cool Breeze (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 4290,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0049-MLT.jpg?v=1779702876",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0049-MLT.jpg?v=1779702876",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0049-MLT.jpg?v=1779702876"
    ],
    "colors": [
      "Ocean Azure"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": false,
    "description": "Invigorating Mediterranean sea salt, Sicilian lemon, and crisp driftwood.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "a-frag-10",
    "title": "Golden Saffron & Tobacco Leaf Niche Parfum (100ml)",
    "category": "accessories",
    "subcategory": "Fragrance",
    "price": 7490,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0048-MLT.jpg?v=1779702686",
    "secondaryImage": "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0048-MLT.jpg?v=1779702686",
    "gallery": [
      "https://cdn.shopify.com/s/files/1/0576/0860/1780/files/FPR0048-MLT.jpg?v=1779702686"
    ],
    "colors": [
      "Black Gold"
    ],
    "sizes": [
      "100ml"
    ],
    "isNew": false,
    "description": "Rare Persian saffron blended with sweetened Cuban tobacco leaf and tonka bean.",
    "stockCount": 21,
    "inStock": true
  },
  {
    "id": "a-skin-1",
    "title": "Radiant 24K Gold Botanical Facial Elixir (30ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 3990,
    "rating": 4.7,
    "reviewsCount": 18,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Standard"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": true,
    "description": "Hydrating botanical serum infused with 24K gold flakes and hyaluronic acid.",
    "stockCount": 12,
    "inStock": true
  },
  {
    "id": "a-skin-2",
    "title": "Hydrating Rosewater Facial Glow Toner & Mist (150ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 2190,
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Glass Spray"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": true,
    "description": "100% pure steam-distilled Damascus rosewater restores natural skin pH balance.",
    "stockCount": 17,
    "inStock": true
  },
  {
    "id": "a-skin-3",
    "title": "Collagen Plumping Hydration Day & Night Cream (50g)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 3490,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "UV Amber Dropper"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": true,
    "description": "Potent 15% L-Ascorbic acid with Ferulic acid fades dark spots and sun pigmentation.",
    "stockCount": 22,
    "inStock": true
  },
  {
    "id": "a-skin-4",
    "title": "Vitamin C 15% Brightening Anti-Dark Spot Serum (30ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 2990,
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Frosted Dropper"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": false,
    "description": "10% high-grade Niacinamide with Zinc PCA balances excess oil and refines skin texture.",
    "stockCount": 27,
    "inStock": true
  },
  {
    "id": "a-skin-5",
    "title": "Gentle Amino Acid Foaming Face Cleanser (150ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 3790,
    "rating": 4.7,
    "reviewsCount": 25,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Gold Dropper"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": false,
    "description": "Cold-pressed virgin Moroccan argan oil packed with vitamin E for hair, face, and nails.",
    "stockCount": 14,
    "inStock": true
  },
  {
    "id": "a-skin-6",
    "title": "Moroccan Organic Argan Nourishing Face Oil (50ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 3890,
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Opal Jar"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": false,
    "description": "Marine collagen and multi-ceramide complex firms skin barrier while you sleep.",
    "stockCount": 19,
    "inStock": true
  },
  {
    "id": "a-skin-7",
    "title": "Hydra-Barrier Ceramide Repair Daily Lotion (100ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 2490,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Green Tube"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": true,
    "description": "Instant cooling relief for sun-exposed, sensitive, and redness-prone facial skin.",
    "stockCount": 24,
    "inStock": true
  },
  {
    "id": "a-skin-8",
    "title": "Purifying Clarifying Botanical Treatment Kit",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 2790,
    "rating": 4.8,
    "reviewsCount": 19,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Clear Bottle"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": false,
    "description": "Glycolic and salicylic acid gently clear dead skin cells and prevent blackheads.",
    "stockCount": 29,
    "inStock": true
  },
  {
    "id": "a-skin-9",
    "title": "Niacinamide Pore-Clarifying Glow Essence (60ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 1490,
    "rating": 4.7,
    "reviewsCount": 32,
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Rose Gold Tin"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": false,
    "description": "Unrefined Ghanaian shea butter with sweet almond oil eliminates chapped lips.",
    "stockCount": 16,
    "inStock": true
  },
  {
    "id": "a-skin-10",
    "title": "Sun-Defend SPF 60+ Matte Invisible Gel Sunscreen (50ml)",
    "category": "accessories",
    "subcategory": "Skin Care",
    "price": 2990,
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=800",
    "secondaryImage": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    "gallery": [
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800"
    ],
    "colors": [
      "Matte Pump"
    ],
    "sizes": [
      "50ml"
    ],
    "isNew": false,
    "description": "Broad spectrum UVA/UVB protection with zero white cast and ultra-matte velvet finish.",
    "stockCount": 21,
    "inStock": true
  }
];

export const HERO_SLIDES = [
  {
    "id": 1,
    "tag": "HAUTE COUTURE LUXURY EDIT 2026",
    "title": "ROYAL DESIGNER HEELS",
    "subtitlePart2": "& LUXURY HANDBAGS",
    "description": "Exquisite Italian high-gloss stilettos and quilted leather shoulder bag. Handcrafted perfection for your unforgettable presence.",
    "image": "/hero_transparent_womens.png",
    "badge": "Women's Collection",
    "productTitle": "Royal Gloss Heels & Quilted Bag",
    "price": "Rs. 8,990",
    "category": "women",
    "subcategory": "Fancy Bridal",
    "ctaPrimary": "Shop Ladies Collection",
    "ctaSecondary": "Explore All Shoes"
  },
  {
    "id": 2,
    "tag": "MASTER ARTISAN HERITAGE",
    "title": "HANDCRAFTED PESHAWARI",
    "subtitlePart2": "& BESPOKE LEATHER",
    "description": "100% full-grain calfskin leather Peshawari chappal and formal brogue dress shoes. Time-honored Pakistani artisan luxury.",
    "image": "/hero_transparent_mens.png",
    "badge": "Men's Collection",
    "productTitle": "Artisan Peshawari & Oxfords",
    "price": "Rs. 5,990",
    "category": "men",
    "subcategory": "Peshawari",
    "ctaPrimary": "Shop Men's Heritage",
    "ctaSecondary": "View Formal Loafers"
  },
  {
    "id": 3,
    "tag": "SIGNATURE ACCESSORIES COLLECTION",
    "title": "LUXURY DESIGNER HANDBAGS",
    "subtitlePart2": "& CHIC TOTES",
    "description": "Curated collection of quilted crossbody bags, top-handle satchels, and premium tan leather totes.",
    "image": "/hero_transparent_bags.png",
    "badge": "Luxury Handbags",
    "productTitle": "Designer Leather Totes & Bags",
    "price": "Rs. 7,490",
    "category": "accessories",
    "subcategory": "Ladies Bags",
    "ctaPrimary": "Shop Luxury Bags",
    "ctaSecondary": "View Accessories"
  },
  {
    "id": 4,
    "tag": "LITTLE FEET SUPREME COMFORT",
    "title": "KIDS DESIGNER SNEAKERS",
    "subtitlePart2": "& COMFY SCHOOL SHOES",
    "description": "Colorful high-top trainers, pastel velcro sneakers, and leather school shoes with orthopedic arch support for little feet.",
    "image": "/hero_transparent_kids.png",
    "badge": "Kids Collection",
    "productTitle": "Junior Active & School Shoes",
    "price": "Rs. 3,290",
    "category": "kids",
    "subcategory": null,
    "ctaPrimary": "Shop Kids Collection",
    "ctaSecondary": "Explore School Shoes"
  },
  {
    "id": 5,
    "tag": "AIR VELOCITY HIGH PERFORMANCE",
    "title": "PRO SPRINT AIR JOGGERS",
    "subtitlePart2": "& ATHLETIC SNEAKERS",
    "description": "Dynamic responsive air cushion soles with breathable engineered mesh uppers for marathon training, running, and modern athletic street style.",
    "image": "/hero_transparent_joggers.png",
    "badge": "Athletic & Sports",
    "productTitle": "Pro Air Athletic Joggers",
    "price": "Rs. 5,490",
    "category": "men",
    "subcategory": "Joggers",
    "ctaPrimary": "Shop Air Joggers",
    "ctaSecondary": "View All Athletic"
  }
];

export const PROMO_CODES = {
  'STYLISH10': 0.10,
  'WELCOME': 0.05,
};
