import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = (props) => {
  // console.log(props)
  return (
    <h2>Users With ID : { props.match.params.id } , Nama : { props.match.params.nama }</h2>
  )
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to = "/">Home</Link>
              </li>
              <li>
                <Link to = "/about">About</Link>
              </li>
              <li>
                <Link to = "/users/1/andi">Users 1</Link>
                <Link to = "/users/2/budi">Users 2</Link>
                <Link to = "/users/3/anto">Users 3</Link>
                <Link to = "/users/4/safi">Users 4</Link>
                <Link to = "/users/5/riki">Users 5</Link>
              </li>
            </ul>
          </nav>

          <Route path = '/' exact component = { Index } />
          <Route path = '/about' component = { About } />
          <Route path = '/users/:id/:nama' component = { Users} />
        </div>
      </Router>
    )
  }
}

export default App;
