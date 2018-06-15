import React, { Component } from 'react';

class SearchField extends Component {
  constructor(props){
      super(props);
      this.fieldTextChange = this.fieldTextChange.bind(this);
  }

  fieldTextChange(e){
      this.props.onFilterTextChange(e.target.value);
  }

  render(){
      const filterText = this.props.filterText;
      return(
          <div className="searchField">
            <input
                type="text"
                value={filterText}
                name="name"
                onChange={this.fieldTextChange} />
            <input type="submit" name="submit" />
          </div>
      )
  }
}

export default SearchField
