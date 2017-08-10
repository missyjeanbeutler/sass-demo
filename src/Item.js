import React, { Component } from 'react';

class Item extends Component {
 constructor(props) {
   super(props)
   this.state ={
     decor: 'not_checked_input'
   }
 }
  handleCheck(e) {
    this.setState({
        decor: e ? 'checked_input' : 'not_checked_input'
    })
  }
  render() {
    return (
        <div className={this.state.decor}>
            <input type='checkbox' onChange={(e) => this.handleCheck(e.target.checked)}/>
            {this.props.item} 
        </div> 
    )
  }
}

export default Item