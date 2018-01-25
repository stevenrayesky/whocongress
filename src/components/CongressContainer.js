import React, { Component } from 'react';
import axios from 'axios';
import Member from './Member';

class CongressContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        members: []
      }
    }

    componentDidMount() {
        var config = {
          headers: {'X-API-Key': 'qUyohoRl3kQ9BhvjxNcuJ4gd6Xaz6R8GmvEdtxjU'}
        };
        axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', config)
      .then(response => {
        console.log(response)
        this.setState({members: response.data.results[0].members})
      })
      .catch(error => console.log(error))
    }

  render() {
    return (
        <div>
        {this.state.members.map((member) => {
            return (<Member member={member} key={member.id} />)
        })};
        </div>
    )
  }
}

export default CongressContainer
