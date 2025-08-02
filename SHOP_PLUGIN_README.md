# 🛍️ Discourse 商品小橱窗插件

一个现代化的 Discourse 插件，为论坛添加了一个功能完整的商品展示页面，访问路径为 `/shop`。

## ✨ 功能特性

### 🎯 核心功能
- **商品展示**: 精美的商品卡片布局，支持图片、价格、描述等信息
- **分类筛选**: 按商品分类进行筛选浏览
- **购物车**: 完整的购物车功能，支持添加、删除、数量调整
- **商品详情**: 弹窗式商品详情查看
- **响应式设计**: 完美适配桌面端和移动端

### 🎨 界面特色
- **现代化设计**: 使用渐变色彩和阴影效果
- **流畅动画**: 悬停效果和页面切换动画
- **直观交互**: 清晰的按钮和状态反馈
- **购物车侧边栏**: 滑动式购物车界面

## 🚀 技术架构

### 后端架构
- **Rails Engine**: 模块化的后端架构
- **命名空间隔离**: 避免与 Discourse 核心冲突
- **RESTful 路由**: 标准的 Rails 路由设计

### 前端架构
- **Ember v5.12.0**: 现代化的前端框架
- **Glimmer Components**: 响应式组件系统
- **ES6+ 语法**: 现代 JavaScript 特性
- **SCSS 样式**: 模块化的样式管理

## 📁 文件结构

```
discourse-shop-plugin/
├── plugin.rb                                          # 插件主配置
├── lib/shop_plugin_module/engine.rb                   # Rails Engine
├── config/
│   ├── routes.rb                                       # 路由配置
│   └── settings.yml                                    # 插件设置
├── app/controllers/shop_plugin_module/
│   └── shop_controller.rb                             # 后端控制器
├── assets/
│   ├── javascripts/discourse/
│   │   ├── shop-route-map.js                          # 路由映射
│   │   ├── routes/shop.js                             # 路由处理器
│   │   ├── controllers/shop.js                        # 前端控制器
│   │   ├── templates/shop.hbs                         # 页面模板
│   │   └── initializers/shop-plugin.js                # 初始化器
│   └── stylesheets/shop-plugin.scss                   # 样式文件
└── SHOP_PLUGIN_README.md                              # 说明文档
```

## 🛠️ 安装部署

### 1. 环境要求
- **Discourse**: v2.7.0+
- **Ember**: v5.12.0
- **Ruby**: 2.7+
- **Rails**: 6.1+

### 2. 安装步骤

1. **重启 Discourse 服务器**
2. **在管理员面板启用插件**
3. **访问 `/shop` 测试功能**

### 3. 配置选项

在管理员面板的插件设置中可以配置：

- `shop_plugin_enabled`: 启用/禁用插件
- `shop_plugin_max_products`: 最大商品展示数量
- `shop_plugin_show_categories`: 是否显示分类筛选

## 🎮 使用说明

### 访问商品页面
- 直接访问: `https://your-forum.com/shop`
- 或通过页面底部的导航链接

### 商品浏览
1. **分类筛选**: 点击分类按钮筛选商品
2. **查看详情**: 点击 "查看详情" 按钮查看商品详细信息
3. **添加到购物车**: 点击 "加入购物车" 按钮

### 购物车操作
1. **查看购物车**: 点击右上角购物车按钮
2. **调整数量**: 使用 +/- 按钮调整商品数量
3. **删除商品**: 点击删除按钮移除商品
4. **结算**: 点击结算按钮完成购买

## 🔧 开发说明

### 添加新商品
在 `assets/javascripts/discourse/routes/shop.js` 文件中的 `products` 数组中添加新商品：

```javascript
{
  id: 7,
  name: "新商品名称",
  price: "¥199",
  image: "🎁",
  description: "商品描述",
  category: "商品分类"
}
```

### 自定义样式
修改 `assets/stylesheets/shop-plugin.scss` 文件来自定义样式。

### 扩展功能
- 在控制器中添加新的 `@action` 方法
- 在模板中添加新的界面元素
- 在路由中添加新的数据处理逻辑

## 🎯 与 Panda 插件的区别

本商品小橱窗插件基于 panda.md 中的技术架构，但进行了以下创新：

### 🔄 技术改进
- **路径变更**: 从 `/panda` 改为 `/shop`
- **主题转换**: 从熊猫主题改为商品展示主题
- **功能扩展**: 添加了购物车、分类筛选等电商功能

### 🎨 界面升级
- **商品卡片**: 专业的商品展示布局
- **购物车系统**: 完整的购物车交互体验
- **分类筛选**: 智能的商品分类系统
- **详情弹窗**: 优雅的商品详情展示

### 📊 数据结构
- **商品模型**: 包含价格、分类、描述等电商属性
- **购物车状态**: 响应式的购物车状态管理
- **分类系统**: 灵活的商品分类架构

## 🐛 故障排除

### 常见问题

1. **404 错误**
   - 检查 Rails Engine 是否正确挂载到 `/shop`
   - 确认路由映射文件存在

2. **页面空白**
   - 检查浏览器控制台错误
   - 确认模板文件语法正确

3. **样式不生效**
   - 确认 SCSS 文件已在 plugin.rb 中注册
   - 检查样式文件路径

### 调试技巧

1. **查看控制台日志**:
   - 应该看到 "🛍️ Shop Plugin loaded successfully!"
   - 应该看到 "🛍️ Shop Controller accessed!"

2. **浏览器控制台**:
   - 查看是否有 JavaScript 错误
   - 确认插件初始化消息

## 📝 更新日志

### v0.0.1 (当前版本)
- ✅ 基础商品展示功能
- ✅ 分类筛选系统
- ✅ 购物车功能
- ✅ 商品详情弹窗
- ✅ 响应式设计
- ✅ 现代化 UI 设计

## 👨‍💻 作者

**Panda_CC** - 专业的 Discourse 插件开发者

---

🎉 感谢使用 Discourse 商品小橱窗插件！这是一个基于 panda.md 技术架构但完全重新设计的电商主题插件。
