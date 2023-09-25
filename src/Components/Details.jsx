import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Details = () => {

   const[details,setDetails] = useState([]);
   const [selectedItems, setSelectedItems] = useState([]);

    useEffect(()=>{
        fetch(' https://60f2479f6d44f300177885e6.mockapi.io/users')
        .then(res=>res.json())
        .then(data=>{
            const slicedData = data.slice(1,6);
            setDetails(slicedData);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    const handleCheckboxChange = (parentName) => {
        if (selectedItems.includes(parentName)) {
          setSelectedItems(selectedItems.filter((item) => item !== parentName));
        } else {
          setSelectedItems([...selectedItems, parentName]);
        }
      };
    

    return (
        <div className="container">
            <div className="card">
            <div className="card-title">
            <h2>Employee Listing</h2>
            </div>
            <div className="card-body">
                
            <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Select</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>User Name</td>
                        <td>Division</td>
                        <td>District</td>
                        <td>Edit</td>
                    </tr>
                </thead>
                <tbody>
                {
                details.map(detail=>(
                    <tr key={detail.id}>
                    <td>
                      <input type="checkbox" onChange={() => handleCheckboxChange(detail.first_name)} />
                    </td>
                    <td>{detail.first_name}</td>
                    <td>{detail.last_name}</td>
                    <td>{detail.user_type}</td>
                    <td>{detail.division}</td>
                    <td>{detail.district}</td>
                    <td><Link className="update" to={`/modals/${detail.id}`}>Update</Link></td>
                    </tr>
                ))
             }
             
                </tbody>
            </table>
            </div>        
            </div>
            </div>
           
         {/* checkbox */}
    
         <div className="check-body">
        <h3>Selected Parent Names</h3>
        <ul>
          {selectedItems.map((selectedItem, index) => (
            <li key={index}>Name: {selectedItem}</li>
          ))}
        </ul>
      </div>

        </div>
    );
};

export default Details;