import faker from 'faker'

function App() {
  return (
    <div className="ui container comments">
      <div className='comment'>
        <a href='/' className='avatar'>
        <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00 PM</span>
          </div>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
