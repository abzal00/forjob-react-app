import * as axios from "axios"
import { setUsersAC } from "../redux/users-reducer"

const instanse  = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true

})


export const userAPI = {
    getUsers(currentPage = 1, pageSize=5){
        
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>  response.data)
        
    }
}