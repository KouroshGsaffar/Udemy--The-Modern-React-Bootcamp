import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScrip framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'React is a favorite JS library among engineers'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  },
]


function App() {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label='Select a Color' />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
