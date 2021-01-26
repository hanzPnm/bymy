import UserService from '../service/userService';
import { LOGIN, LOGOUT } from '../types';
import history from '../history';

export const login = (cred) => (dispatch) => {
    UserService.login(cred).then(
    (res) => {
        dispatch({
            type: LOGIN,
            payload: getUserFromToken(res.data.accessToken)
        });
        history.push('/');
        return Promise.resolve();
    },
    (error) => {
        console.log(error);      
        return Promise.reject();
    }
);
}
export const logout = () => (dispatch) => {
        dispatch({
            type: LOGOUT
        });
        //history.push('/');
}

const getUserFromToken = token => {
    if (token) {
      try {
            return {
                userName : JSON.parse(atob(token.split('.')[1])).sub,
                role : JSON.parse(atob(token.split('.')[1])).ROLES_CLAIM_NAME,
                token: token
            };
      } catch (error) {
        // ignore
      }
    }
  
    return null;
  };