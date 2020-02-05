require 'sinatra/base'
require_relative './lib/thermostat_save'



class Bowling  < Sinatra::base

  enable :sessions

  get '/' do
    @saved_state = SaveState.show
    erb :index    
  end

  post '/take_info' do
    SaveState.add(temperature: params[:temperature],powerswitch: params[:powerswitch],city: params[:city])
  end

  run! if app_file == $0
end