# react-luggage

React components for Luggage.js

### Usage

```js
import { Luggage, withCollection } from 'react-luggage'

class App extends React.Component {
  render() {
    return (
      <Luggage
        collection='recipes'
        redirectUrl='/app'
        dropboxAppKey='9sdf78dfthkwt'
      >
        <RecipesCollection />
      </Luggage>
    )
  }
}

class Recipes extends React.Component {
  static propTypes = {
    recipes: React.PropTypes.array
  }

  static defaultProps = {
    recipes: []
  }

  render() {
    const { recipes } = this.props

    return (
      <div className='recipes'>
        { recipes.map(recipe => <div>{recipe.title}</div>) }
      </div>
    )
  }
}

const RecipesCollection = withCollection(Recipes)
```

You can explicetely map collection to props

You can filter collection before puting it into props
