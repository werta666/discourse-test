# frozen_string_literal: true

module ::ShopPluginModule
  class Engine < ::Rails::Engine
    engine_name "discourse-shop-plugin"
    isolate_namespace ShopPluginModule
  end
end
