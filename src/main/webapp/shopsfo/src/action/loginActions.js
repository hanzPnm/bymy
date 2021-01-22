import UserService from '../service/userService';
import { LOGIN } from '../types';
import history from '../history';

export const login = (cred) => (dispatch) => {
    UserService.login(cred).then(
    (res) => {
        console.log(getUserFromToken(res.data.accessToken));
        dispatch({
            type: LOGIN,
            payload: res.data
        });
        //history.push('/');
        return Promise.resolve();
    },
    (error) => {
        console.log(error);      
        return Promise.reject();
    }
);
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