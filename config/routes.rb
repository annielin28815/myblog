Rails.application.routes.draw do
  root "pages#index"
  resources :blogs
  resources :pages
  resources :projects
end
