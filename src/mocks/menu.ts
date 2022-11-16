import { customAlphabet } from "nanoid";

import soupImage from "assets/images/menu/soup.png"
import saladImage from "assets/images/menu/salad.png"
import burgerImage from "assets/images/menu/burger.png"

import { TMenu } from "features/menu/types";

const nanoid = customAlphabet("1234567890", 9);

const nanoidStartWith = (start: number) => {
  return Number(start + nanoid());
};

export const MOCK_MENU: TMenu = [
  {
    title: "Солянка",
    description:
      "280г, куриное филе, бекон, ветчина, маринованные огурцы, лук, каперсы, маслины, лимон, сметана",
    src: soupImage,
    category: "soups",
    price: 6.7,
    count: 1,
    id: nanoidStartWith(3),
  },
  {
    title: "Том Кха с курицей",
    description:
      "250г, куриное филе, кокосовое молоко, бульон, тайский красный карри, лук, капуста, цуккини, сладкий перец, перец чили, кинза, имбирно-чесночная паста, сливки",
    src: soupImage,
    category: "soups",
    price: 7.1,
    count: 1,
    id: nanoidStartWith(3),
  },
  {
    title: "Борщ с ребром",
    description:
      "305г, свиное ребрышко, свекла, картофель, паста томатная, бульон, морковь, лук, чеснок, сметана, укроп",
    src: soupImage,
    category: "soups",
    price: 7.1,
    count: 1,
    id: nanoidStartWith(3),
  },
  {
    title: "Бульон с чесночным хлебом",
    description: "372г, бульон куриный, курица, яйцо, чесночный хлеб, укроп",
    src: soupImage,
    category: "soups",
    price: 5.4,
    count: 1,
    id: nanoidStartWith(3),
  },
  {
    title: "Холодник с картофельными дольками",
    description:
      "415г, свекла, огурец, яйцо, кефир, зеленый лук, картофельные дольки, укроп",
    src: soupImage,
    category: "soups",
    price: 6.2,
    count: 1,
    id: nanoidStartWith(3),
  },
  {
    title: "Салат Цезарь с курицей",
    description:
      "230г, куриное филе, микс салатов, томат черри, сыр Пармезан, соус Цезарь, крутоны",
    src: saladImage,
    category: "salads",
    price: 11.7,
    count: 1,
    id: nanoidStartWith(2),
  },
  {
    title: "Салат с индейкой и соусом из вяленых томатов",
    description:
      "240г, индейка Хойсин, микс салатов, томаты вяленые, сыр Пармезан, крутоны, соус Песто красный",
    src: saladImage,
    category: "salads",
    price: 13.4,
    count: 1,
    id: nanoidStartWith(2),
  },
  {
    title: "Салат Цезарь с копченым лососем",
    description:
      "220г, лосось копченый, микс салатов, сыр пармезан, томат черри, соус Цезарь, крутоны",
    src: saladImage,
    category: "salads",
    price: 13.4,
    count: 1,
    id: nanoidStartWith(2),
  },
  {
    title: "Овощной салат с  грушей и сыром Дор Блю",
    description:
      "260г, микс салатов, свекла, авокадо, сыр дор блю, печеный батат (батат, апельсиновый сок, розмарин, черный перец), печеная груша, медовая заправка, миндаль",
    src: saladImage,
    category: "salads",
    price: 12.7,
    count: 1,
    id: nanoidStartWith(2),
  },
  {
    title: "Греческий салат с рулетиками из цукини и сливочного крема",
    description:
      "270г, микс салатов, томат черри, сладкий перец, огурцы, маслины, красный лук, цукини, сливочный крем, заправка Греческая",
    src: saladImage,
    category: "salads",
    price: 9.9,
    count: 1,
    id: nanoidStartWith(2),
  },
  {
    title: "Немецкий салат с трюфельным соусом и рулькой",
    description:
      "165/70г, рулька, картофель отварной, огурец маринованный, опята маринованные, перец консервированный, майонез, маслины, сыр Пармезан, трюфельнаая паста, луковые чипсы, зелень",
    src: saladImage,
    category: "salads",
    price: 9.7,
    count: 1,
    id: nanoidStartWith(2),
  },
  {
    title: "Сэндвич с курицей и хрустящим беконом",
    description:
      "210г, пшеничный сандвичный хлеб, филе куриное, томат, бекон, микс салатов, огурец консервированный, соус Бургер, майонез",
    src: burgerImage,
    category: "burgers",
    price: 4.3,
    count: 1,
    id: nanoidStartWith(1),
  },
  {
    title: "Сэндвич со свининой и соусом BBQ",
    description:
      "240г, пшеничный бутерброд, свинина, бекон, сыр моцарелла, карамелизированный лук, помидор, салат Айсберг, соус майонез с барбекю",
    src: burgerImage,
    category: "burgers",
    price: 4.9,
    count: 1,
    id: nanoidStartWith(1),
  },
  {
    title: "Сэндвич с курицей, луковыми кольцами и ореховым соусом",
    description:
      "195г, сэндвич с пшеницей, хлеб, куриное филе, бекон, луковые кольца, томат, салат Айсберг, ореховый соус, луковые кольца",
    src: burgerImage,
    category: "burgers",
    price: 4.3,
    count: 1,
    id: nanoidStartWith(1),
  },
  {
    title: "Бургер  чеддер и бекон",
    description:
      "295г, котлета из говядины, булочка бриошь, томат, сыр Чеддер, бекон, лук маринованный, салат руккола, майонез",
    src: burgerImage,
    category: "burgers",
    price: 13.7,
    count: 1,
    id: nanoidStartWith(1),
  },
  {
    title: "Бургер Double BBQ",
    description:
      "440г, 2 котлеты из говядины, булочка, бекон, сыр Чеддар, томат, карамелизированный лук, майонез, соус барбекью, луковые чипсы, руккола",
    src: burgerImage,
    category: "burgers",
    price: 18.9,
    count: 1,
    id: nanoidStartWith(1),
  },
  {
    title: "Бургер Чикен Терияки",
    description:
      "300г, котлета куриная, булочка, сыр Чеддар, томат, лук красный, майонез, соус Терияки, руккола",
    src: burgerImage,
    category: "burgers",
    price: 11.9,
    count: 1,
    id: nanoidStartWith(1),
  },
];
