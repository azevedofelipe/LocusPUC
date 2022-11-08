import { Component } from 'react'
import Main from '../templates/Main'

export default class Alert extends Component {

  render() {
    return (
      <Main>
        <div className='alerts'>
          <div className={`alert alert-${this.props.result ? 'success' : 'danger'}`}>
            <h4 className="alert-heading">
              {this.props.result ? 'Sucesso!' : 'Erro!'}
            </h4>
            <p className={`text-${this.props.result ? 'success' : 'danger'}`}> {this.props.result ? this.props.resultSuccess : this.props.resultError} </p>
            <hr />
            <p className={`mb-0 text-${this.props.result ? 'success' : 'danger'}`}> {this.props.result ? this.props.message : this.props.error} </p>
          </div>
        </div>
      </Main>
    )
  }
}