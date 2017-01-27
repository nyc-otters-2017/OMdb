class Top extends React.Component {

  render() {
    return (
      <header id="top-nav">
        <div className="rows">
          <div className="col-sm-4 col-md-4">
            <h1 id="logo" className="center-block">OMdb</h1>
          </div>
          <div className="col-sm-8 col-md-8">
            <form id="search-form">
                <input id="search" className="form-control search-input" type="text" name="query" />
                <input type="submit" className="btn btn-default submit-input" value="Submit" />
            </form>
          </div>
        </div>
      </header>
    )
  }
}
