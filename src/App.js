import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  handleOnClick = event => {
    this.props.increaseCount();
  };

  render() {
	  console.log(this.props.store)
	  console.log(this.props.store.getState())
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
		<ul>
			{this.props.boops.map(boop => {
				return <li>{boop}</li>
			})}
		</ul>
        <p>{this.props.boops.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boops: state.boops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
