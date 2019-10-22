import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Header from './Header'
import Login from './Login'
import Search from './Search'


const App = () => {
  return (
    <div className='center w85'>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/new/1' />} />
          <Route path='/create' component={CreateLink} />
          <Route path='/login' component={Login} />
          <Route path='/search' component={Search} />
          <Route path='/top' component={LinkList} />
          <Route path='/new/:page' component={LinkList} />
        </Switch>

      </div>
    </div>
  )
}

export default App