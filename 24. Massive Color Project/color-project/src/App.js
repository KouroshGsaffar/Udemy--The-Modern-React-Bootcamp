import React, { Component } from 'react'

import './App.css';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom'
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import PaletteList from './PaletteList';


class App extends Component {
  findPallete(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList palettes={seedColors} />} />
        <Route exact path='/palette/:id' render={(routeProps) => <Palette
          palette={generatePalette(this.findPallete(routeProps.match.params.id))} />} />
        {/* <div>
            <Palette palette={generatePalette(seedColors[4])} />
          </div>  */}
      </Switch>
    );
  }
}

export default App;
