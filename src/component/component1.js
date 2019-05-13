import React from 'react';
import './component.css';
import { connect } from 'react-redux';
 class Component1 extends React.Component {
   componentDidMount() {
     console.log('Display state', this.props.display)
   }
     render() {
        return(
            <div className="box">
              <h3>{this.props.display}</h3>
            </div>
        );
     }
 }

 const mapStateToProps = state => ({
    display: state
  });


export default connect(mapStateToProps)(Component1);