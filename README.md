# 🛍️ Discourse Shop Plugin

A modern e-commerce shop plugin that adds a beautiful product showcase to your Discourse forum.

## ✨ Features

- **Modern Product Showcase**: Beautiful grid and list view layouts
- **Advanced Filtering**: Search by name, filter by category, sort by price/rating
- **Shopping Cart**: Full cart functionality with add/remove/quantity controls
- **Product Details**: Modal windows with detailed product information
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Beautiful UI**: Modern design with smooth animations and transitions

## 🚀 Installation

1. Copy this plugin to your Discourse `plugins` directory
2. Restart your Discourse server
3. Enable the plugin in Admin → Plugins → "discourse-shop-plugin"
4. Visit `/shop` to see your new shop!

## 🎯 Usage

Once installed, users can access the shop by visiting `/shop` on your forum. The shop includes:

- **Product Grid/List Views**: Toggle between different viewing modes
- **Category Filtering**: Filter products by Electronics, Food & Beverage, Accessories, etc.
- **Search Functionality**: Search products by name, description, or tags
- **Shopping Cart**: Add products to cart and manage quantities
- **Product Details**: Click "View Details" for more information about any product

## 🛠️ Technical Details

- **Framework**: Rails Engine + Ember v5.12.0
- **Components**: Modern Glimmer Components
- **Styling**: Responsive SCSS with modern CSS features
- **Route**: Mounted at `/shop` path
- **Compatibility**: Discourse v2.7.0+

## 📁 File Structure

```
discourse-shop-plugin/
├── plugin.rb                                    # Main configuration
├── lib/shop_plugin_module/engine.rb            # Rails Engine
├── config/routes.rb                            # Route configuration
├── config/settings.yml                         # Plugin settings
├── app/controllers/shop_plugin_module/shop_controller.rb  # Controller
├── assets/javascripts/discourse/
│   ├── shop-route-map.js                       # Route mapping
│   ├── routes/shop.js                          # Route handler
│   ├── controllers/shop.js                     # Controller logic
│   ├── templates/shop.hbs                      # Template
│   ├── initializers/shop-plugin.js             # Initializer
│   └── helpers/shop-helpers.js                 # Helper functions
└── assets/stylesheets/shop-plugin.scss         # Styles
```

## 🎨 Customization

You can customize the shop by:

1. **Adding Products**: Modify the product data in `routes/shop.js`
2. **Styling**: Edit `assets/stylesheets/shop-plugin.scss`
3. **Layout**: Modify the template in `templates/shop.hbs`
4. **Functionality**: Add new features in `controllers/shop.js`

## 🔧 Development

This plugin was built following Discourse plugin best practices:

- Uses Rails Engine architecture for proper isolation
- Implements modern Ember v5.12.0 patterns
- Follows Discourse coding standards
- Includes comprehensive error handling

## 📝 License

This plugin is released under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

**Created by**: Panda_CC
**Version**: 0.0.1
**Discourse Version**: 2.7.0+
