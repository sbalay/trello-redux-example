import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium';

import { apiSetup } from '../../../config/api';
import logo from '../../../assets/logo.svg';
import { actionCreators as authActions } from '../../../redux/auth/actions';
import { propTypes as authPropTypes } from '../../../redux/auth/reducer';

import styles, { BaseStyles } from './styles';

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
    if (this.props.loading) {
      this.props.dispatch(authActions.init());
    }
  }

  render() {
    return (
      <StyleRoot style={styles.base}>
        {BaseStyles}
        <div style={styles.header}>
          <img src={logo} style={styles.logo} alt="logo" />
          <h2>
            Welcome to React {this.props.currentUser ? this.props.currentUser.email : 'Guest'}
          </h2>
        </div>
        <Link to="/dummy">
          <button>Show dummy route</button>
        </Link>
      </StyleRoot>
    );
  }
}

App.propTypes = {
  loading: authPropTypes.loading,
  currentUser: authPropTypes.currentUser
};

const mapStateToProps = store => ({
  loading: store.auth.loading,
  currentUser: store.auth.currentUser
});

export default connect(mapStateToProps)(App);
