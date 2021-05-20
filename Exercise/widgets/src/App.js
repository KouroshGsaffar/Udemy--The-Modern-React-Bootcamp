import Accordion from "./components/Accordion";

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
      <Accordion items={items} />
    </div>
  );
}

export default App;
