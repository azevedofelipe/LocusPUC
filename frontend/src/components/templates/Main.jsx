import './Main.css'
import { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main className='pt-5 pt-md-0 main container-fluid'>
        <div className='content'>
          {this.props.children}
        </div>
      </main>
    )
  }
}
