export default class App extends Component {
    render() {
        return (
          <div className="app">
              <TopBar />
              <h1 className="headline white-text">I am the main Application</h1>
              <Card subject="friends" action="meet" mashehoo="blue" />
              <Vacation available={true} />
          </div>
        )
    }
}
