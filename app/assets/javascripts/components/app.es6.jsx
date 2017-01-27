class App extends React.Component {

  render() {
    return (
      <div className="container-flex">
        <Top />
        <div className="rows main-body">
          <div className="col-sm-6 col-md-6">
            <Result />
          </div>
        </div>
        <footer>
        </footer>
      </div>
    )
  }

}
