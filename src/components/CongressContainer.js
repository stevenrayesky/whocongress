import React, { Component } from 'react';
import axios from 'axios';
import Member from './Member';
import SearchField from './SearchField';

class CongressContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        members: [],
        filterText: ''
      }

      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    componentDidMount() {
        var config = {
          headers: {'X-API-Key': process.env.REACT_APP_API_KEY}
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
        <SearchField
          filterText={this.state.filterText}
          onFilterTextChange={this.handleTextChange} />
        {this.state.members.map((member) => {
            return (<Member member={member} key={member.id} />)
        })};
        </div>
    )
  }
}

export default CongressContainer
