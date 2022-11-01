Rails.application.routes.draw do
  get 'root/index'

  # Defines the root path route ("/")
  root "root#index"
end
