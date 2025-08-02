# frozen_string_literal: true

ShopPluginModule::Engine.routes.draw do
  get "/" => "shop#index"
end
