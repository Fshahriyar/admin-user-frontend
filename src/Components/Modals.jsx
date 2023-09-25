import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modals = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [userType, setUserType] = useState(""); 
  const navigation = useNavigate();

  useEffect(() => {
    fetch('https://60f2479f6d44f300177885e6.mockapi.io/users/' + id)
      .then((res) => res.json())
      .then((res) => {
        setFirstName(res.first_name); 
        setLastName(res.last_name); 
        setDivision(res.division);
        setDistrict(res.district);
        setUserType(res.user_type); 
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      first_name: firstName, 
      last_name: lastName, 
      division,
      district,
      user_type: userType, 
    };

    fetch('https://60f2479f6d44f300177885e6.mockapi.io/users/' + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => {
        alert('Record updated');
        navigation('/details');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setUserType(e.target.value); 
  };

  return (
    <div>
      <div className="overlay">
        <div className="modal-content">
          <h2>Update User List</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="First name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              <input type="text" placeholder="Last name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br />
              <input type="text" placeholder="Division" name="division" value={division} onChange={(e) => setDivision(e.target.value)}/>
              <input type="text" placeholder="District" name="district" value={district} onChange={(e) => setDistrict(e.target.value)}/>
            </div>
            <select name="userType" onChange={handleChange} value={userType}>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
            <button className="btn-sub" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modals;