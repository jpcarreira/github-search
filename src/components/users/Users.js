import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 'id',
        login: 'jpcarreira',
        avatar_url: 'https://avatars3.githubusercontent.com/u/2743577?v=4',
        html_url: 'https://github.com/jpcarreira'
      },
      {
        id: 'id2',
        login: 'FeltesPT',
        avatar_url: 'https://avatars2.githubusercontent.com/u/5504319?v=4',
        html_url: 'https://github.com/FeltesPT'
      },
      {
        id: 'id3',
        login: 'MrAlek',
        avatar_url: 'https://avatars3.githubusercontent.com/u/1496135?v=4',
        html_url: 'https://github.com/MrAlek'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
