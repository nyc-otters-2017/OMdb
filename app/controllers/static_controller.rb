class StaticController < ApplicationController

  def index
  end

  def show
    uri = URI("http://www.omdbapi.com/?i=" + params[:id] + "&y=&plot=short&r=json")
    response = Net::HTTP.get(uri)
    @movie_json= JSON.parse(response)
    # render json:  JSON.parse(@response)
  end

end
