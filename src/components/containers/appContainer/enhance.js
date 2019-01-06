import { compose, withState, withHandlers } from 'recompose'

export default compose(
  withState('robots', 'setRobots', []),
  withState('searchfield', 'setSearchfield', ''),
  withHandlers({
    onSearchChange: ({ setSearchfield }) => e => {
      setSearchfield({ searchfield: e.target.value })
    },
    filteredRobots: ({ searchfield, robots }) => () => {
      robots.filter(user =>
        user.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      )
    },
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }
  })
)
