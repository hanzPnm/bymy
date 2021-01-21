import UserService from '../service/userService';
import { LOGIN } from '../types';
import history from '../history';

export const login = (cred) => (dispatch) => {
    UserService.login(cred).then(
    (res) => {
        dispatch({
            type: LOGIN,
            payload: res.data
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