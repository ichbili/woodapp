import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchProduct} from '../actions';

class SearchBox extends Component {
    state = {
        value: ''
    };
    handleChange = event => {
        event.preventDefault();
        this.setState({ value: event.target.value});
        this.props.searchProduct(event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchProduct(this.state.value);
    }
    render() {
        return (
            <div className="sidebar__searchbox">
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    className="form__input"
                    placeholder="Rechercher..."
                    onChange={this.handleChange}
                />
                  </form>
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    searchProduct
  }
  
export default connect(null, mapDispatchToProps)(SearchBox)

