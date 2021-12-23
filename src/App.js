
import './App.css';
import {useState} from "react";

const initialValues = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    type: ''
}

function App() {
    const [userData, setUserData] = useState(initialValues);
    const [users, setUsers] = useState([]);
    const [editableUserData, setEditableUserData] = useState({
        isEdit: false,
        userIndex: null
    })

    const handleRemoveClick = (index) => {
        setUsers(users.filter((user, userIndex) => userIndex !== index))
    }

    const isFilledFields = userData.userName && userData.firstName && userData.lastName && userData.type && userData.email

    const handleSubmitUser = (e) => {
        e.preventDefault();

        if (isFilledFields) {
            if (editableUserData.isEdit) {
                const editData = users;
                editData.splice(editableUserData.userIndex, 1, userData);

                setUsers(editData);
                setEditableUserData({
                    isEdit: false,
                    userIndex: null
                })
            }else {
                setUsers((prevState) => [...prevState, userData]);
            }


            setUserData(initialValues)
        }

    }
        const handleEditClick = (data, index) => {
            setUserData(data);
            setEditableUserData({
                isEdit: true,
                userIndex: index
            })
        }
    console.log('users', users);

  return (
    <div className="wrapper">
     <div className="wrapper-content">

         <div className="table-data">
        <div className="buttonCreate"><button>Create</button></div>
             <table>
                 <th>#</th>
                 <th>USERNAME</th>
                 <th>FIRST NAME</th>
                 <th>LAST NAME</th>
                 <th>EMAIL</th>
                 <th>TYPE</th>
                 <th>ACTIONS</th>

                 <tbody>
                 {users.map((user, index) => (
                     <tr>
                         <td>{index + 1}</td>
                         <td>{user.userName}</td>
                         <td>{user.firstName}</td>
                         <td>{user.lastName}</td>
                         <td>{user.email}</td>
                         <td>{user.type}</td>

                         <td>
                             <div>
                                 <button className="edit-action" onClick={() => handleEditClick(user, index)}>edit</button>
                                 <button className="remove-action" onClick={() => handleRemoveClick(index)}>remove</button>
                             </div>
                         </td>
                     </tr>
                 ))}

                 </tbody>
             </table>
         </div>
         <div className="wrapper-inputsWithButtons">
             <form onSubmit={handleSubmitUser}>
                 <strong>Create new user</strong>
                 <span>Username*</span>
                 <input placeholder='' onChange={(e) => setUserData((prevState) =>({
                     ...prevState,
                     userName: e.target.value
                 }))}
                 value={userData.userName}
                 />
                 <span>First name*</span>
                 <input placeholder='' onChange={(e) => setUserData((prevState) => ({
                     ...prevState,
                     firstName: e.target.value
                 }))}
                 value={userData.firstName}
                 />
                 <span>Last name*</span>
                 <input placeholder='' onChange={(e) => setUserData((prevState) =>({
                     ...prevState,
                     lastName: e.target.value
                 }))}
                  value={userData.lastName}
                 />
                 <span>Email*</span>
                 <input placeholder='' onChange={(e) => setUserData((prevState) => ({
                     ...prevState,
                     email: e.target.value
                 }))}
                 value={userData.email}
                 />
                 <span>Type*</span>
                 <input placeholder='' onChange={(e) => setUserData((prevState) => ({
                     ...prevState,
                     type: e.target.value
                 }))}
                 value={userData.type}
                 />

                 <div className="buttons-wrapper">

                     <button disabled={!isFilledFields} type='submit'>{editableUserData.isEdit ? 'Edit' : 'Create'}</button>
                     <button type='reset'>Clean</button>

                 </div>
             </form>
         </div>
     </div>
    </div>
  );
}

export default App;
