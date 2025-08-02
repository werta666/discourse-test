# frozen_string_literal: true

module ::ShopPluginModule
  class ShopController < ::ApplicationController
    requires_plugin ShopPluginModule::PLUGIN_NAME

    def index
      Rails.logger.info "🛍️ Shop Controller accessed!"

      # Bootstrap the Ember app for /shop route
      render "default/empty"
    rescue => e
      Rails.logger.error "🛍️ Shop Error: #{e.message}"
      render plain: "Error: #{e.message}", status: 500
    end
  end
end
