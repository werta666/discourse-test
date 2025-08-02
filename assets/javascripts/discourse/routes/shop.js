import Route from "@ember/routing/route";

export default class ShopRoute extends Route {
  model() {
    return {
      title: "🛍️ 商品小橱窗",
      status: "营业中",
      time: new Date().toLocaleString(),
      ember_version: "v5.12.0",
      plugin_version: "0.0.1",
      products: [
        {
          id: 1,
          name: "精美手工艺品",
          price: "¥299",
          image: "🎨",
          description: "手工制作的精美艺术品，独一无二的设计",
          category: "艺术品"
        },
        {
          id: 2,
          name: "优质茶叶礼盒",
          price: "¥188",
          image: "🍵",
          description: "精选高山茶叶，香气浓郁，口感醇厚",
          category: "食品"
        },
        {
          id: 3,
          name: "时尚背包",
          price: "¥399",
          image: "🎒",
          description: "时尚实用的多功能背包，适合日常出行",
          category: "配饰"
        },
        {
          id: 4,
          name: "智能手表",
          price: "¥899",
          image: "⌚",
          description: "多功能智能手表，健康监测，运动追踪",
          category: "电子产品"
        },
        {
          id: 5,
          name: "香薰蜡烛",
          price: "¥89",
          image: "🕯️",
          description: "天然植物蜡制作，多种香型可选",
          category: "家居"
        },
        {
          id: 6,
          name: "护肤套装",
          price: "¥599",
          image: "🧴",
          description: "天然成分护肤套装，温和滋润",
          category: "美妆"
        }
      ]
    };
  }
}
