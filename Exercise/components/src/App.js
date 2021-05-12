import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
       <div>
         <h4> Warning</h4>
         Are you going to continue?
       </div>
      </ApprovalCard>
      <ApprovalCard>
       <CommentDetail name='Sam' comment='Nice post!' date='Today 6:00 PM' avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail name='George' comment='Awwwww!' date='Yesterday 2:00 PM' avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
}

export default App;
