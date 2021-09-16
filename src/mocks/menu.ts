import soup1 from "assets/images/menu/soups/soup1.jpeg";
import soup2 from "assets/images/menu/soups/soup2.jpeg";
import soup3 from "assets/images/menu/soups/soup3.jpeg";
import soup4 from "assets/images/menu/soups/soup4.jpeg";
import soup5 from "assets/images/menu/soups/soup5.jpeg";
import salad1 from "assets/images/menu/salads/salad1.jpeg";
import salad2 from "assets/images/menu/salads/salad2.jpeg";
import salad3 from "assets/images/menu/salads/salad3.jpeg";
import salad4 from "assets/images/menu/salads/salad4.jpeg";
import salad5 from "assets/images/menu/salads/salad5.jpeg";
import salad6 from "assets/images/menu/salads/salad6.jpeg";
import burger1 from "assets/images/menu/burgers/burger1.jpeg";
import burger2 from "assets/images/menu/burgers/burger2.jpeg";
import burger3 from "assets/images/menu/burgers/burger3.jpeg";
import burger4 from "assets/images/menu/burgers/burger4.jpeg";
import burger5 from "assets/images/menu/burgers/burger5.jpeg";
import burger6 from "assets/images/menu/burgers/burger6.jpeg";
import { TMenu } from "features/home/types";

export const MOCK_MENU: TMenu = [
  {
    title: "Солянка",
    description:
      "280г, куриное филе, бекон, ветчина, маринованные огурцы, лук, каперсы, маслины, лимон, сметана",
    src: soup1,
    category: "soups",
    price: 6.7,
    count: 1,
    id: "soup1",
  },
  {
    title: "Том Кха с курицей",
    description:
      "250г, куриное филе, кокосовое молоко, бульон, тайский красный карри, лук, капуста, цуккини, сладкий перец, перец чили, кинза, имбирно-чесночная паста, сливки",
    src: soup2,
    category: "soups",
    price: 7.1,
    count: 1,
    id: "soup2",
  },
  {
    title: "Борщ с ребром",
    description:
      "305г, свиное ребрышко, свекла, картофель, паста томатная, бульон, морковь, лук, чеснок, сметана, укроп",
    src: soup3,
    category: "soups",
    price: 7.1,
    count: 1,
    id: "soup3",
  },
  {
    title: "Бульон с чесночным хлебом",
    description: "372г, бульон куриный, курица, яйцо, чесночный хлеб, укроп",
    src: soup4,
    category: "soups",
    price: 5.4,
    count: 1,
    id: "soup4",
  },
  {
    title: "Холодник с картофельными дольками",
    description:
      "415г, свекла, огурец, яйцо, кефир, зеленый лук, картофельные дольки, укроп",
    src: soup5,
    category: "soups",
    price: 6.2,
    count: 1,
    id: "soup5",
  },
  {
    title: "Салат Цезарь с курицей",
    description:
      "230г, куриное филе, микс салатов, томат черри, сыр Пармезан, соус Цезарь, крутоны",
    src: salad1,
    category: "salads",
    price: 11.7,
    count: 1,
    id: "salad1",
  },
  {
    title: "Салат с индейкой и соусом из вяленых томатов",
    description:
      "240г, индейка Хойсин, микс салатов, томаты вяленые, сыр Пармезан, крутоны, соус Песто красный",
    src: salad2,
    category: "salads",
    price: 13.4,
    count: 1,
    id: "salad2",
  },
  {
    title: "Салат Цезарь с копченым лососем",
    description:
      "220г, лосось копченый, микс салатов, сыр пармезан, томат черри, соус Цезарь, крутоны",
    src: salad3,
    category: "salads",
    price: 13.4,
    count: 1,
    id: "salad3",
  },
  {
    title: "Овощной салат с  грушей и сыром Дор Блю",
    description:
      "260г, микс салатов, свекла, авокадо, сыр дор блю, печеный батат (батат, апельсиновый сок, розмарин, черный перец), печеная груша, медовая заправка, миндаль",
    src: salad4,
    category: "salads",
    price: 12.7,
    count: 1,
    id: "salad4",
  },
  {
    title: "Греческий салат с рулетиками из цукини и сливочного крема",
    description:
      "270г, микс салатов, томат черри, сладкий перец, огурцы, маслины, красный лук, цукини, сливочный крем, заправка Греческаяй",
    src: salad5,
    category: "salads",
    price: 9.9,
    count: 1,
    id: "salad5",
  },
  {
    title: "Немецкий салат с трюфельным соусом и рулькой",
    description:
      "165/70г, рулька, картофель отварной, огурец маринованный, опята маринованные, перец консервированный, майонез, маслины, сыр Пармезан, трюфельнаая паста, луковые чипсы, зелень",
    src: salad6,
    category: "salads",
    price: 9.7,
    count: 1,
    id: "salad6",
  },
  {
    title: "Сэндвич с курицей и хрустящим беконом",
    description:
      "210г, пшеничный сандвичный хлеб, филе куриное, томат, бекон, микс салатов, огурец консервированный, соус Бургер, майонез",
    src: burger1,
    category: "burgers",
    price: 4.3,
    count: 1,
    id: "burger1",
  },
  {
    title: "Сэндвич со свининой и соусом BBQ",
    description:
      "240г, пшеничный бутерброд, свинина, бекон, сыр моцарелла, карамелизированный лук, помидор, салат Айсберг, соус майонез с барбекю",
    src: burger2,
    category: "burgers",
    price: 4.9,
    count: 1,
    id: "burger2",
  },
  {
    title: "Сэндвич с курицей, луковыми кольцами и ореховым соусом",
    description:
      "195г, сэндвич с пшеницей, хлеб, куриное филе, бекон, луковые кольца, томат, салат Айсберг, ореховый соус, луковые кольца",
    src: burger3,
    category: "burgers",
    price: 4.3,
    count: 1,
    id: "burger3",
  },
  {
    title: "Бургер  чеддер и бекон",
    description:
      "295г, котлета из говядины, булочка бриошь, томат, сыр Чеддер, бекон, лук маринованный, салат руккола, майонез",
    src: burger4,
    category: "burgers",
    price: 13.7,
    count: 1,
    id: "burger4",
  },
  {
    title: "Бургер Double BBQ",
    description:
      "440г, 2 котлеты из говядины, булочка, бекон, сыр Чеддар, томат, карамелизированный лук, майонез, соус барбекью, луковые чипсы, руккола",
    src: burger5,
    category: "burgers",
    price: 18.9,
    count: 1,
    id: "burger5",
  },
  {
    title: "Бургер Чикен Терияки",
    description:
      "300г, котлета куриная, булочка, сыр Чеддар, томат, лук красный, майонез, соус Терияки, руккола",
    src: burger6,
    category: "burgers",
    price: 11.9,
    count: 1,
    id: "burger6",
  },
];
