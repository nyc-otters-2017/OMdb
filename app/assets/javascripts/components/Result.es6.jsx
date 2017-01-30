class Result extends React.Component {

  render() {
    return (
      <div className="results">
        <h1>Mad Movies</h1>
        <ul>
          {
            this.props.movies.map((movie, i) => {
              return (<Movie data={movie} key={i} />)
            })
          }
        </ul>
      </div>
    )
  }
}
