import { userAPI } from "../api/api"

const USERS = 'USERS'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE' 

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 16
}



const userReducer = (state = initialState, action ) => {

    switch(action.type){
        case USERS: {
        return {...state, users: action.users }
        }
        case TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.totalUsersCount    }
        }
        case CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage    }
        }
        default:
            return state

}
}

export const setUsersAC =(users)=> ({ type: USERS, users})
export const setCurrentPageAC = (currentPage)=> ( {  type: CURRENT_PAGE, currentPage  })

const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT,  totalUsersCount})


export const getUsersThunkC = (currentPage, pageSize) => async (dispatch)=> {
    const data = await userAPI.getUsers(currentPage, pageSize)
      
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    
    
}

export default userReducer