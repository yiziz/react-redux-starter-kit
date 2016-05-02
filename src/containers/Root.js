import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

export class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routerKey: React.PropTypes.number,
    routes: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  }

  render () {
    const { store, history, routes } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <h1>hi..</h1>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default Root
