import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "shop-plugin",

  initialize() {
    console.log("🛍️ Shop Plugin loaded successfully!");

    withPluginApi("1.0.0", (api) => {
      // Plugin initialization for Ember v5.12.0
      console.log("🛍️ Shop Plugin API initialized");
      
      // 可以在这里添加更多的插件初始化逻辑
      // 例如：添加导航菜单项、注册自定义组件等
    });
  }
};
