import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './Friendlist/FriendList';
import user from 'components/data/user.json';
import data from 'components/data/data.json';
import friends from 'components/data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
    </div>
  );
};
