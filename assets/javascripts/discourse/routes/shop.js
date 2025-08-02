import Route from "@ember/routing/route";

export default class ShopRoute extends Route {
  model() {
    // 商品数据 - 在实际应用中这些数据会从API获取
    return {
      shop_info: {
        name: "🛍️ Premium Shop",
        tagline: "Discover Amazing Products",
        status: "open",
        time: new Date().toLocaleString(),
        ember_version: "v5.12.0",
        plugin_version: "0.0.1"
      },
      products: [
        {
          id: 1,
          name: "Premium Wireless Headphones",
          price: 299.99,
          currency: "USD",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
          description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
          category: "Electronics",
          rating: 4.8,
          reviews_count: 1247,
          in_stock: true,
          discount_percentage: 15,
          original_price: 349.99,
          tags: ["wireless", "noise-cancelling", "premium"]
        },
        {
          id: 2,
          name: "Organic Coffee Beans",
          price: 24.99,
          currency: "USD",
          image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
          description: "Premium organic coffee beans sourced from sustainable farms.",
          category: "Food & Beverage",
          rating: 4.6,
          reviews_count: 892,
          in_stock: true,
          discount_percentage: 0,
          original_price: 24.99,
          tags: ["organic", "fair-trade", "premium"]
        },
        {
          id: 3,
          name: "Smart Fitness Watch",
          price: 199.99,
          currency: "USD",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
          description: "Advanced fitness tracking with heart rate monitoring and GPS.",
          category: "Electronics",
          rating: 4.7,
          reviews_count: 2156,
          in_stock: true,
          discount_percentage: 20,
          original_price: 249.99,
          tags: ["fitness", "smart", "waterproof"]
        },
        {
          id: 4,
          name: "Handcrafted Leather Wallet",
          price: 89.99,
          currency: "USD",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
          description: "Genuine leather wallet with RFID protection and multiple card slots.",
          category: "Accessories",
          rating: 4.9,
          reviews_count: 567,
          in_stock: true,
          discount_percentage: 10,
          original_price: 99.99,
          tags: ["leather", "handcrafted", "rfid-protection"]
        },
        {
          id: 5,
          name: "Eco-Friendly Water Bottle",
          price: 34.99,
          currency: "USD",
          image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
          description: "Sustainable stainless steel water bottle that keeps drinks cold for 24 hours.",
          category: "Lifestyle",
          rating: 4.5,
          reviews_count: 1089,
          in_stock: false,
          discount_percentage: 0,
          original_price: 34.99,
          tags: ["eco-friendly", "stainless-steel", "insulated"]
        },
        {
          id: 6,
          name: "Wireless Charging Pad",
          price: 49.99,
          currency: "USD",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
          description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
          category: "Electronics",
          rating: 4.4,
          reviews_count: 743,
          in_stock: true,
          discount_percentage: 25,
          original_price: 66.99,
          tags: ["wireless", "fast-charging", "qi-compatible"]
        }
      ],
      categories: ["All", "Electronics", "Food & Beverage", "Accessories", "Lifestyle"]
    };
  }
}
