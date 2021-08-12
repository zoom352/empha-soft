import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getUsersThunk} from "../../Redux/users-reducer"
import Users from './Users'
    
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk();
    }

    render() {
        return <div>
            <Users users={this.props.users}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    users: state.UsersPage.users
})

let WithUrlDataContainerComponent = withRouter(UsersContainer)



export default connect(mapStateToProps, {getUsersThunk})(WithUrlDataContainerComponent);