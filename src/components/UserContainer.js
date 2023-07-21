import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/User/usersAction";
import Navbar from "./navbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const UserContainer = ({ userData, fetchUsers }) => {
  const [filterUser, setFilterUser] = useState('');

  const handleChange = (event) => {
    setFilterUser(event.target.value);
  };

  const filteredUsers = userData.users.filter(user =>
    user.login.toLowerCase().includes(filterUser.toLowerCase())
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div style={{ color: "white" }}>
      <Navbar />
      <h2>Github User List</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '75%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Enter github username"
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiInputLabel-root": { color: 'white', borderColor: "#d3d3d3" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "#d3d3d3", borderRadius: '10px' },
            },
            input: { color: 'white' }

          }} />

      </Box>
      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <p key={user.id}>{user.login}</p>)
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
