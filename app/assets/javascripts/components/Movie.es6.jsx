class Movie extends React.Component {
  render() {
    // debugger
    let { Title, Year, Poster} = this.props.data
    return (
      <article className="movie">
        <li>
          <img src={ Poster } alt="" />
          <h2>{Title} ({Year})</h2>
        </li>
      </article>
    )
  }
}
