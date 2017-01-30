class App extends React.Component {
  constructor() {
      super()
      this.state = {
        movies: [],
        movie: []
      }
      this.postMovie = this.postMovie.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: "http://www.omdbapi.com/?s=mad+max&y=&r=json&plot=short"
    }).done(function(response) {
      this.setState({ movies: response.Search})
    }.bind(this))
  }

  postMovie(movieContent) {
      var url = "http://www.omdbapi.com/?t=" + movieContent + "&y=&plot=short&r=json"
      $.ajax({
        url: url,
      }).success((response) => {
        this.setState({ movie: response })
        console.log(this.state.movie)
      })
  }

  render() {
    return (
      <div className="container-flex">
        <Top
          onPostMovie={this.postMovie}
        />
        <div className="rows main-body">
          <div className="col-sm-6 col-md-6">
            <Result
              movies={this.state.movies}
            />
          </div>
        </div>
        <footer>
        </footer>
      </div>
    )
  }

}
