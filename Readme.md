# react-luggage

React components for Luggage.js

### Usage

```js
import { Luggage, withCollection } from 'react-luggage'

class App extends React.Component {
  render() {
    const credentials = {
      API_KEY: 'someapikey'
    }

    return (
      <Luggage
        collection='recipes'
        creadentials={credentials}
        redirectUrl='/app'
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
