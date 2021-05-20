import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
