
const UserList = ({ users, userType, onDetailsClick }) => {
    return (
      <div>
        <h2>{userType === "admin" ? "Admin User List" : "Employee User List"}</h2>
        <table>
          <thead>
            <tr>
              <th className="table-nav">First Name</th>
              <th className="table-nav">Last Name</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <button className="btn-click" onClick={() => onDetailsClick(user)}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserList;
  