import { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main className='content container-fluid'>
        <div className='mt-3 p-3'>
          {this.props.children}
        </div>
      </main>
    )
  }
}