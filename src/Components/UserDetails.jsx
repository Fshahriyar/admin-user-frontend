import { Link } from "react-router-dom";

const UserDetails = ({ user, onBack }) => {
    return (
      <div>
        <h2>User Details</h2>
        <div>
          <strong>First Name:</strong> {user.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {user.lastName}
        </div>
        <div>
          <strong>User Type:</strong> {user.userType}
        </div>
        <div>
          <strong>Division:</strong> {user.division}
        </div>
        <div>
          <strong>District:</strong> {user.district}
        </div>
       <div className="btn-details">
       <button className="btn-back" onClick={onBack}>Back</button>
        <button className="details-link"><Link className="style-details" to="/details">Details</Link></button>
       </div>
      </div>
    );
  };
  
  export default UserDetails;
  