import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
         
            <h4>It's YOUTUBE || Search here !!</h4>
                <input                
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />               
            </div>
        );        
    }

}

export default SearchBar;