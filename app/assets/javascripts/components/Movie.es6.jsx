class Movie extends React.Component {
  render() {
    let { Title, Year, Poster} = this.props.data
    let routeToMovie= "/static/"+ this.props.data.imdbID
    // debugger
    return (
      <article className="movie">
        <li>
          <img src={ Poster } alt="" />
          <a href={routeToMovie}><h2>{Title} ({Year})</h2></a>
        </li>
      </article>
    )
  }
}
