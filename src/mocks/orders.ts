import { TOrders } from "features/orders/types";

export const MOCK_ORDERS: TOrders = [
  {
    cart: [
      {
        category: "soups",
        count: 1,
        description:
          "250г, куриное филе, кокосовое молоко, бульон, тайский красный карри, лук, капуста, цуккини, сладкий перец, перец чили, кинза, имбирно-чесночная паста, сливки",
        id: 3542531705,
        price: 7.1,
        src: "/static/media/soup2.fcefad07.jpeg",
        title: "Том Кха с курицей",
        total: 7.1,
      },
    ],
    total: 7.1,
    orderId: "000102",
    status: "closed",
    date: new Date(2021, 4, 25, 18, 25, 30),
  },
  {
    cart: [
      {
        category: "soups",
        count: 1,
        description:
          "250г, куриное филе, кокосовое молоко, бульон, тайский красный карри, лук, капуста, цуккини, сладкий перец, перец чили, кинза, имбирно-чесночная паста, сливки",
        id: 3542531705,
        price: 7.1,
        src: "/static/media/soup2.fcefad07.jpeg",
        title: "Том Кха с курицей",
        total: 7.1,
      },
      {
        category: "salads",
        count: 1,
        description:
          "240г, индейка Хойсин, микс салатов, томаты вяленые, сыр Пармезан, крутоны, соус Песто красный",
        id: 2111689246,
        price: 13.4,
        src: "/static/media/salad2.62db8b97.jpeg",
        title: "Салат с индейкой и соусом из вяленых томатов",
        total: 13.4,
      },
    ],
    total: 20.5,
    orderId: "000139",
    status: "closed",
    date: new Date(2021, 7, 14, 12, 45, 30),
  },
  {
    cart: [
      {
        category: "soups",
        count: 2,
        description:
          "280г, куриное филе, бекон, ветчина, маринованные огурцы, лук, каперсы, маслины, лимон, сметана",
        id: 3468597045,
        price: 6.7,
        src: "/static/media/soup1.4b6df3a1.jpeg",
        title: "Солянка",
        total: 13.4,
      },
      {
        category: "salads",
        count: 1,
        description:
          "240г, индейка Хойсин, микс салатов, томаты вяленые, сыр Пармезан, крутоны, соус Песто красный",
        id: 2111689246,
        price: 13.4,
        src: "/static/media/salad2.62db8b97.jpeg",
        title: "Салат с индейкой и соусом из вяленых томатов",
        total: 13.4,
      },
      {
        category: "burgers",
        count: 3,
        description:
          "195г, сэндвич с пшеницей, хлеб, куриное филе, бекон, луковые кольца, томат, салат Айсберг, ореховый соус, луковые кольца",
        id: 131122201,
        price: 12.9,
        src: "/static/media/burger3.e55a5350.jpeg",
        title: "Сэндвич с курицей, луковыми кольцами и ореховым соусом",
        total: 12.9,
      },
    ],
    total: 39.7,
    orderId: "000864",
    status: "closed",
    date: new Date(2021, 3, 5, 10, 18, 40),
  },
];
