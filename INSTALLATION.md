# 🛍️ Discourse Shop Plugin - Installation Guide

## 📋 Prerequisites

- Discourse v2.7.0 or higher
- Admin access to your Discourse instance
- Basic knowledge of Discourse plugin installation

## 🚀 Installation Steps

### Method 1: Manual Installation (Recommended for Development)

1. **Copy Plugin Files**
   ```bash
   # Navigate to your Discourse plugins directory
   cd /var/discourse/containers/app/plugins
   
   # Create the plugin directory
   mkdir discourse-shop-plugin
   
   # Copy all plugin files to this directory
   ```

2. **Set Proper Permissions**
   ```bash
   chown -R discourse:discourse discourse-shop-plugin
   chmod -R 755 discourse-shop-plugin
   ```

3. **Restart Discourse**
   ```bash
   cd /var/discourse
   ./launcher rebuild app
   ```

### Method 2: Git Installation (Recommended for Production)

1. **Clone from Repository**
   ```bash
   cd /var/discourse/containers/app/plugins
   git clone https://github.com/your-username/discourse-shop-plugin.git
   ```

2. **Restart Discourse**
   ```bash
   cd /var/discourse
   ./launcher rebuild app
   ```

## ⚙️ Configuration

1. **Enable the Plugin**
   - Go to Admin → Plugins
   - Find "discourse-shop-plugin"
   - Click "Enable" if not already enabled

2. **Configure Settings**
   - Go to Admin → Settings
   - Search for "shop_plugin"
   - Enable "shop plugin enabled"

## 🧪 Testing

1. **Verify Installation**
   - Visit your forum's `/shop` page
   - You should see the shop interface with sample products

2. **Check Console**
   - Open browser developer tools
   - Look for "🛍️ Shop Plugin loaded successfully!" in console

3. **Test Features**
   - Try searching for products
   - Filter by categories
   - Add items to cart
   - View product details

## 🔧 Troubleshooting

### Common Issues

**1. 404 Error on /shop**
- Check if plugin is enabled in Admin → Plugins
- Verify Discourse was restarted after installation
- Check server logs for errors

**2. Blank Page**
- Check browser console for JavaScript errors
- Verify all plugin files are present
- Check file permissions

**3. Styling Issues**
- Verify `shop-plugin.scss` is loaded
- Check for CSS conflicts with theme
- Clear browser cache

### Debug Steps

1. **Check Plugin Status**
   ```bash
   # SSH into your Discourse server
   cd /var/discourse
   ./launcher enter app
   rails c
   
   # In Rails console:
   Discourse.plugins.map(&:name)
   # Should include "discourse-shop-plugin"
   ```

2. **Check Routes**
   - Visit `/rails/info/routes` on your forum
   - Search for "shop" to verify route is registered

3. **Check Logs**
   ```bash
   # View Discourse logs
   tail -f /var/discourse/shared/standalone/log/rails/production.log
   
   # Look for shop-related messages
   ```

## 📁 File Verification Checklist

Ensure all these files exist in your plugin directory:

- [ ] `plugin.rb`
- [ ] `lib/shop_plugin_module/engine.rb`
- [ ] `config/routes.rb`
- [ ] `config/settings.yml`
- [ ] `app/controllers/shop_plugin_module/shop_controller.rb`
- [ ] `assets/javascripts/discourse/shop-route-map.js`
- [ ] `assets/javascripts/discourse/routes/shop.js`
- [ ] `assets/javascripts/discourse/controllers/shop.js`
- [ ] `assets/javascripts/discourse/templates/shop.hbs`
- [ ] `assets/javascripts/discourse/initializers/shop-plugin.js`
- [ ] `assets/stylesheets/shop-plugin.scss`

## 🎯 Success Indicators

When properly installed, you should see:

1. ✅ Plugin listed in Admin → Plugins
2. ✅ `/shop` page loads without errors
3. ✅ Console message: "🛍️ Shop Plugin loaded successfully!"
4. ✅ Products display in grid layout
5. ✅ Search and filtering work
6. ✅ Shopping cart functionality works
7. ✅ Product modals open correctly

## 🆘 Getting Help

If you encounter issues:

1. Check this troubleshooting guide
2. Review Discourse logs for errors
3. Verify all files are present and have correct permissions
4. Test in a development environment first
5. Create an issue on the plugin repository

## 🔄 Updating

To update the plugin:

1. **Git Method**:
   ```bash
   cd /var/discourse/containers/app/plugins/discourse-shop-plugin
   git pull origin main
   cd /var/discourse
   ./launcher rebuild app
   ```

2. **Manual Method**:
   - Replace plugin files with new versions
   - Restart Discourse

---

**Need Help?** Create an issue on the plugin repository with:
- Discourse version
- Plugin version
- Error messages
- Steps to reproduce the issue
