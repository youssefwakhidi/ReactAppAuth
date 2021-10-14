import axios from "axios";

const USER_API_REST_URL="http://localhost:8080/ReactApp/Users";


class UserService{
    getUsers(){
        return axios.get(USER_API_REST_URL);
    }
    addUser(User)
    {
         //let data = JSON.stringify(User);
        return axios.post(USER_API_REST_URL,User,{
            withCredentials: true,
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
          },{
            auth: {
              username: "admin",
              password: "89efdc2a-86e0-4718-93c9-de807eb4dad2"
          }});
    }

}
export default new UserService()