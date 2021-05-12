import CommentDetail from './CommentDetail'
import faker from 'faker'

function App() {
  return (
    <div className="ui container comments">
    <CommentDetail name='Sam' comment='Nice post!' date='Today 6:00 PM' avatar={faker.image.avatar()}/>
    <CommentDetail name='George' comment='Awwwww!' date='Yesterday 2:00 PM' avatar={faker.image.avatar()} />
    </div>
  );
}

export default App;
