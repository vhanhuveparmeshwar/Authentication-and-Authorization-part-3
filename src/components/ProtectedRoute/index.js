import Cookies from 'js-cookie'

import {Route, Redirect} from 'react-router-dom'

const ProtectedRout = props => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(props)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRout
