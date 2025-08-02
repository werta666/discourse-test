# frozen_string_literal: true

module ::ShopPluginModule
  class ShopController < ::ApplicationController
    requires_plugin "discourse-shop-plugin"

    def index
      Rails.logger.info "🛍️ Shop Controller accessed!"
      render plain: "🛍️ Shop Plugin Working!"
    rescue => e
      Rails.logger.error "🛍️ Shop Error: #{e.message}"
      render plain: "Error: #{e.message}", status: 500
    end
  end
end
