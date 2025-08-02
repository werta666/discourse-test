# frozen_string_literal: true

module ::ShopPluginModule
  class Engine < ::Rails::Engine
    engine_name PLUGIN_NAME
    isolate_namespace ShopPluginModule
    config.autoload_paths << File.join(config.root, "lib")
  end
end
