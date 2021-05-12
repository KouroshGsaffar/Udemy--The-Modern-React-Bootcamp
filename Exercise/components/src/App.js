import CommentDetail from './CommentDetail'

function App() {
  return (
    <div className="ui container comments">
    <CommentDetail name='Sam' comment='Nice post!' date='Today 6:00 PM' />
    <CommentDetail name='George' comment='Awwwww!' date='Yesterday 2:00 PM' />
    </div>
  );
}

export default App;
