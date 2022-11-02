Rails.application.routes.draw do

  # API routes
  resources :greetings

  # Defines the root path route ("/")
  root "root#index"
end
