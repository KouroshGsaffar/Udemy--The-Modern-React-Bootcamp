import React, { Component } from 'react'
import './App.css';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom'
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';


class App extends Component {
  findPallete(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path='/palette/:id' render={(routeProps) => <Palette
          palette={generatePalette(this.findPallete(routeProps.match.params.id))} />} />
        <Route exact path='/palette/:paletteId/:colorId' render={() => <SingleColorPalette />} />
      </Switch>
    );
  }
}

export default App;
