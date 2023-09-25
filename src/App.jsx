import { useState } from "react";
import UserList from "./Components/UserList"; 
import UserDetails from "./Components/UserDetails";




const App = () => {

 
  const [activeTab,setActiveTab] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleTabChange = (index) =>{
    setActiveTab(index);
  }

  const handleDetailsClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackToUserList = () => {
    setSelectedUser(null);
  };



  // modals

  const [modal,setModal] = useState(false);
   const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    userType:'',
    division:'',
    district:'',
   })
 
   const handleBtnModal = () =>{
    setModal(!modal)
   }

  const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  
  const handleBtn = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      setUsers([...users, { ...formData, id: Date.now() }]);
      setFormData({
        firstName: "",
        lastName: "",
        userType: "admin",
        division: "",
        district: "",
      });
      setModal(false);
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(formData);
    setFormData({ name: ''}); 
  };

  return (
    <div>
     <div className="box">
         <button  onClick={handleBtnModal} className="modal">Add User</button>
       <div className="tabs">
        <div className={activeTab === 1 ? "tab active-tab" : "tab"} onClick={()=>handleTabChange(1)}>
          Admin
        </div>
        <div className={activeTab === 2 ? "tab active-tab" : "tab"}  onClick={()=>handleTabChange(2)}>
          Employee
        </div>
       </div>

    {/* contents */}
      
      <div className="contents">
        <div>
        <div className={activeTab === 1 ? "show-content" : "content"}>
        <p className="data-details"></p>
        </div>

        <div className={activeTab === 2 ? "show-content" : "content"}>
        
        </div>
        </div>
        <div >
        
          {selectedUser ? (
          <UserDetails user={selectedUser} onBack={handleBackToUserList} />
        ) : (
          <UserList
            users={users}
            userType={activeTab === 1 ? "admin" : "employee"}
            onDetailsClick={handleDetailsClick}
          />
        )}

        </div>
      </div>

     </div>


             

    {/* modals */}
           {modal && (
               <div>
               <div className="overlay">
                   <div className="modal-content">
                     <h2>Hello</h2>
                    <form onSubmit={handleSubmit}>
                       <div>
                       <input type="text" placeholder="First name" name="firstName" onChange={handleChange} value={formData.firstName} />
                        <input type="text" placeholder="Last name" name="lastName" onChange={handleChange} value={formData.lastName}/><br />
                        <input type="text" placeholder="Division"  name="division" onChange={handleChange} value={formData.division}/>
                        <input type="text" placeholder="District"  name="district" onChange={handleChange} value={formData.district}/>
                       </div>
                        <select name="userType" onChange={handleChange} value={formData.userType}>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                        <button onClick={handleBtn} className="btn-sub" type="submit">Add</button>
                    </form>
                     <button onClick={handleBtnModal} className="close-modal ">Close</button>
                   </div>
               </div>
              </div>
           )}

           

    </div>
  );
};

export default App;