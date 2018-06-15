import React, { Component } from 'react';
import '../css/member.css';

class Member extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const key = this.props.member.id;
    return(
      <div className="tile" onClick={(e) => this.props.onClick(e, key)} key={key}>
        <h4 className="member-name">
          {this.props.member.short_title} {this.props.member.first_name} {this.props.member.last_name}
        </h4>
        <div className="tile__info">
        <p>Office: {this.props.member.office}</p>
        </div>
      </div>
    )
  }
  
}

export default Member
