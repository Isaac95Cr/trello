import React from 'react';  
import { connect } from 'react-redux';
import { withRouter,Redirect } from 'react-router-dom'

export default function(ComposedComponent) {  
  class Authentication extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        redirect : false
      }
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.setState({redirect: true});
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
         this.setState({redirect: true});
      }
    }

    render() {
      if(this.state.redirect){
        return <Redirect to='/'/>;
      }
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}