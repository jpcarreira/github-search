import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'jpcarreira',
    avatar_url: 'https://avatars3.githubusercontent.com/u/2743577?v=4',
    html_url: 'https://github.com/jpcarreira'
  };

  render() {
    const { login, avatar_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-image'
          style={{ width: '60px' }}
        />

        <h3>{login}</h3>

        <div>
          <a href={html_url}>More</a>
        </div>
      </div>
    );
  }
}

export default UserItem;
