import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h1>Hola {this.props.name}</h1>
  }
}
