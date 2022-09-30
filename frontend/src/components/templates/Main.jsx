import './Main.css'
import { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main className='mt-5 mt-md-0 main container-fluid'>
        <div className='content'>
          {this.props.children}
        </div>
      </main>
    )
  }
}
