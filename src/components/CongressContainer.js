import React, { Component } from 'react';
import axios from 'axios';

class CongressContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        congress: []
      }
    }

    componentDidMount() {
        var config = {
          headers: {'X-API-Key': 'qUyohoRl3kQ9BhvjxNcuJ4gd6Xaz6R8GmvEdtxjU'}
        };
        axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', config)
      .then(response => {
        console.log(response)
        this.setState({ideas: response.data})
      })
      .catch(error => console.log(error))
    }

  render() {
    return (
      <div>
        Ideas
      </div>
    )
  }
}

export default CongressContainer
