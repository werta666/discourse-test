# frozen_string_literal: true

# name: discourse-shop-plugin
# about: A Shop-themed plugin that adds a custom /shop page with product showcase
# meta_topic_id: TODO
# version: 0.0.1
# authors: Panda_CC
# url: TODO
# required_version: 2.7.0

enabled_site_setting :shop_plugin_enabled

# Register assets for Ember v5.12.0
register_asset "stylesheets/shop-plugin.scss"

module ::ShopPluginModule
  PLUGIN_NAME = "discourse-shop-plugin"
end

Rails.logger.info "🛍️ Loading ShopPluginModule"
require_relative "lib/shop_plugin_module/engine"
Rails.logger.info "🛍️ Engine loaded successfully"

after_initialize do
  # 挂载 Engine 到 /shop 路径
  Rails.logger.info "🛍️ Mounting Shop Engine"
  Discourse::Application.routes.append do
    mount ::ShopPluginModule::Engine, at: "/shop"
  end
  Rails.logger.info "🛍️ Shop Engine mounted successfully"
end
