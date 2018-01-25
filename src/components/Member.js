import React, { Component } from 'react';

const Member = ({member}) =>
  <div className="tile" key={member.id}>
    <h4>{member.short_title} {member.first_name} {member.last_name}</h4>
    <p>Office: {member.office}</p>
  </div>

export default Member
