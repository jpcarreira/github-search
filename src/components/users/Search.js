import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    // TODO: search for a given user an refresh UI
  };

  onChange = e => {
    this.setState({ text: e.target.value });
    // below version is scallable to have more inputs in the same form
    // this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            name='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
