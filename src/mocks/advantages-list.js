import image1 from '../assets/advantage-1.svg'
import image2 from '../assets/advantage-2.svg'
import image3 from '../assets/advantage-3.svg'
import image4 from '../assets/advantage-4.svg'

const advantages = [
  {
    id: 0,
    header: 'Еда намного вкуснее',
    text: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
    image: image1,
    feature: 'farm',
  },
  {
    id: 1,
    header: 'Просроченные продукты',
    text: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
    image: image2,
    feature: 'shop',
  },
  {
    id: 3,
    header: 'Натуральные продукты',
    text: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
    image: image3,
    feature: 'farm',
  },
  {
    id: 4,
    header: 'Некачественное мясо',
    text: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    image: image4,
    feature: 'shop',
  },

];

export default advantages;