import image1 from '../assets/products-1.jpg'
import image2 from '../assets/products-2.jpg'
import image3 from '../assets/products-3.jpg'


const products = [
  {
    id: 0,
    header: 'Филе бедра цыпленка',
    text: 'Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.',
    image: image1,
    price: 100,
    netto: 700,
    characteristics: [
      { name: 'Масса', value: '0.7 кг (595-805г)' },
      { name: 'Срок годности', value: '5 суток' },
      { name: 'Порода', value: 'КРС' },
      { name: 'Место происхождения', value: 'Калуга' }
    ],
    properties: [
      { name: 'Энергетическая ценность', value: '135 ккал' },
      { name: 'Пищевая ценность', value: 'белки-138г, жиры - 8,7г, углеводы - 5г' },
    ]
  },
  {
    id: 1,
    header: 'Филе бедра гуся',
    text: 'Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
    image: image2,
    price: 200,
    netto: 700,
    characteristics: [
      { name: 'Масса', value: '0.6 кг (595-605г)' },
      { name: 'Срок годности', value: '5 суток' },
      { name: 'Порода', value: 'птица' },
      { name: 'Место происхождения', value: 'Москва' }
    ],
    properties: [
      { name: 'Энергетическая ценность', value: '125 ккал' },
      { name: 'Пищевая ценность', value: 'белки-118г, жиры - 8г, углеводы - 2г' },
    ]
  },
  {
    id: 2,
    header: 'Мякоть бедра говяжья',
    text: 'Мякоть бедра говяжья - это тонко нарезанный продукт, который понравится всем. Отличный вкус и аромат не оставят никого равнодушным.',
    image: image3,
    price: 300,
    netto: 700,
    characteristics: [
      { name: 'Масса', value: '0.4 кг ' },
      { name: 'Срок годности', value: '5 суток' },
      { name: 'Порода', value: 'КРС' },
      { name: 'Место происхождения', value: 'Тверь' }
    ],
    properties: [
      { name: 'Энергетическая ценность', value: '130 ккал' },
      { name: 'Пищевая ценность', value: 'белки-18г, жиры - 7г, углеводы - 5г' },
    ]
  },
  {
    id: 3,
    header: 'Грудка цыпленка на кости',
    text: 'Ням-ням-ням',
    image: image3,
    price: 400,
    netto: 700,
    characteristics: [
      { name: 'Масса', value: '0.3 кг ' },
      { name: 'Срок годности', value: '5 суток' },
      { name: 'Порода', value: 'птица' },
      { name: 'Место происхождения', value: 'Калуга' }
    ],
    properties: [
      { name: 'Энергетическая ценность', value: '155 ккал' },
      { name: 'Пищевая ценность', value: 'белки-18г, жиры - 7г, углеводы - 15г' },
    ]
  }
];

export default products;