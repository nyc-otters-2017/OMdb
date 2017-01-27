class App extends React.Component {
  constructor() {
      super()
      this.state = {
        movies: []
      }
  }

  componentDidMount() {
    $.ajax({
      url: "http://www.omdbapi.com/?s=mad+max&y=&r=json&plot=short"
    }).done(function(response) {
      this.setState({ movies: response.Search})
      debugger
    }.bind(this))
  }
  render() {
    return (
      <div className="container-flex">
        <Top />
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
