import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import * as concertoActions from '../../actions/concertoAction';

class ConcertoPage extends React.Component {

  constructor(props, context) {
    super();

    this.state = {
      concerto: { solo: ''}
    };

    this.onSoloChange = this.onSoloChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onSoloChange(event) {
    const concerto = this.state.concerto;
    concerto.solo = event.target.value;
    this.setState({concerto: concerto});
  }

  onClickSave() {
      this.props.dispatch(concertoActions.createConcert(this.state.concerto));
  }

  render() {
    return (
      <div className="container">
        <h1>Concertos</h1>
        <h2> add concerto </h2>
        <input
          type="text"
          onChange={this.onSoloChange}
          value={this.state.concerto.solo} />
        <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    concertos: state.concertoReducer
  };
}
/*
function mapDispatchToPrpos() {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToPrpos)(ConcertoPage);
*/

export default connect(mapStateToProps)(ConcertoPage);
