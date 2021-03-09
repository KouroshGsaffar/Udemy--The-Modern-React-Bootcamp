import './App.css';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom'
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";


function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Pallete List Goes here!</h1>} />
      <Route exact path='/palette/:id' render={() => <h1>Pallete individual</h1>} />
      {/* <div>
          <Palette palette={generatePalette(seedColors[4])} />
        </div>  */}
    </Switch>
  );
}

export default App;
