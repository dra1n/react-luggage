# react-luggage
[![build status](https://img.shields.io/travis/luggagejs/react-luggage/master.svg?style=flat-square)](https://travis-ci.org/luggagejs/react-luggage)

React components for Luggage.js

### Usage

```js
import { Luggage, withCollection } from 'react-luggage'

class App extends React.Component {
  render() {
    return (
      <Luggage
        apiKey='someapikey'
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

const RecipesCollection = withCollection('recipes')(Recipes)
```
