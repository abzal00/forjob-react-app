import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { userAPI } from "../../api/api";
import { getUsersThunkC, setCurrentPageAC, setUsersAC } from "../../redux/users-reducer";

import Users from "./Users";


class UsersContainer extends React.Component  {

    // componentDidMount(){
    //     // 
    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(data=> {
    //     //     getUsersThunkC(data)
            
    //     // })
    //     getUsersThunkC()
        
    // }
    componentDidMount(){
    //    userAPI.getUsers().then(data=> {
    //     debugger
    //     this.props.setUsersAC(data.items)
        
    //    })
    this.props.getUsersThunkC(this.props.currentPage, this.props.pageSize)
        
    }
    onCurrentPage =(currentPage )=> {

        this.props.setCurrentPageAC(currentPage)
        userAPI.getUsers(currentPage, this.props.pageSize).then(data=> {
            this.props.setUsersAC(data.items)
        })
        
    }
  
    render() {
        
        return <Users users={this.props.users} usersCount = {this.props.totalUsersCount} pageSize = {this.props.pageSize}
        currentPage={this.props.currentPage} onCurrentPage={this.onCurrentPage}/>
        
    }
}

const mapStateToProps = (state) => {
    return ({
     users: state.users.users,
     currentPage: state.users.currentPage,
     pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount

    })
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsersAC: (users)=>{dispatch(setUsersAC(users))}
//     }
// }



export default compose(connect(mapStateToProps, {getUsersThunkC, setUsersAC, setCurrentPageAC }))(UsersContainer)