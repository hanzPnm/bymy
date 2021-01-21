import axios from 'axios';

class UserService{

    login(credential) {
        return axios.post(`/auth/authenticate`,  credential, {});        
    }
}
export default new UserService();