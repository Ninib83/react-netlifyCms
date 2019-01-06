import React, { Component } from 'react'
import SearchBox from '../../ui/searchBox'
import CardList from '../../ui/cardList'
import Scroll from '../../ui/scroll'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot =>
      robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    )

    return !robots.length ? (
      <h1>is Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default AppContainer

// import React from 'react'
// import SearchBox from '../../ui/searchBox'
// import CardList from '../../ui/cardList'
// import Scroll from '../../ui/scroll'
// import enhance from './enhance'

// export const AppContainer = enhance(({ filteredRobots, onSearchChange }) => (
//   <div className="tc">
//     {console.log('filtred', filteredRobots)}
//     <h1 className="f1">RoboFriends</h1>
//     <SearchBox searchChange={onSearchChange} />
//     <Scroll><CardList robots={filteredRobots} /></Scroll>
//   </div>
// ))
