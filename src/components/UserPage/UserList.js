import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import fetchUsers from "../../redux/middleware";
import User from "./User";

function UserList(props) {
    useEffect(() => {
        props.fetchUsers();
    });

    return (
        <div>
            <h2>List of Users: </h2>
            { props.users.map(user => <User key={user.id} {...user} />) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
