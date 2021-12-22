
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

    const handleSubmitUser = (e) => {
        e.preventDefault();
        setUsers((prevState) => [...prevState, userData]);

        setUserData(initialValues)
    }
    console.log('users', users);

  return (
    <div className="wrapper">
     <div className="wrapper-content">
         <div className="table-data">
             <table>
                 <th>#</th>
                 <th>USERNAME</th>
                 <th>FIRST NAME</th>
                 <th>LAST NAME</th>
                 <th>EMAIL</th>
                 <th>TYPE</th>

                 <tbody>

                 </tbody>
             </table>
         </div>
         <div className="wrapper-inputsWithButtons">
             <form onSubmit={handleSubmitUser}>
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

                     <button type='submit'>Create</button>
                     <button type='reset'>Clean</button>

                 </div>
             </form>
         </div>
     </div>
    </div>
  );
}

export default App;
