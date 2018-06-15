import React, { Component } from 'react';
import axios from 'axios';
import Member from './Member';
import SearchField from './SearchField';
import '../css/congress.css';

const GoogleImages = require('google-images');
const client = new GoogleImages(process.env.REACT_APP_SE_ID, process.env.REACT_APP_WHO_CONGRESS_SEARCH_API);


class Congress extends Component {
    constructor(props) {
      super(props)
      this.getName = this.getName.bind(this);
      this.state = {
        members: [],
        filteredMembers: [],
        filterText: ''
      }

      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
      this.filterMembers(filterText);
    }

    filterMembers(filterText) {
        const members = [...this.state.members];
        const filteredMembers = members.filter(member => (`${member.first_name} ${member.last_name}`).includes(filterText));
        this.setState({ filteredMembers });
    }

    getName(e, key){
      const member = this.state.members.filter((m) => m.id == key)[0];
      e.currentTarget.classList.toggle('active');
    }

    componentDidMount() {
        let members;
        const config = {
          headers: {'X-API-Key': process.env.REACT_APP_API_KEY}
        };
        axios.all([
          axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', config),
          axios.get('https://api.propublica.org/congress/v1/115/house/members.json', config)
        ])
        .then(axios.spread((senateRes, houseRes) => {
          // members = senateRes.data.results[0].members;
          // console.log({senateRes, houseRes});
          members = [...senateRes.data.results[0].members, ...houseRes.data.results[0].members];

          this.setState({
            members: members,
            filteredMembers: members
          })
        }))
        .catch(error => console.log(error));
      }

  render() {
    return (
        <div className="congress">
        <SearchField
          filterText={this.state.filterText}
          onFilterTextChange={this.handleTextChange} />
          {this.state.filteredMembers.map((member) => {
            // const member = this.state.filteredMembers[m];
            return (<Member 
              member={member} 
              key={member.id} 
              onClick={this.getName} />
            )
        })}
        </div>
    )
  }
}

export default Congress
