
import './App.css';
import {useState} from "react";
import CustomInput from "../custominput/Custominput";
import CustomButton from "../custombutton/CustomButton";
import CustomTable from "../customtable/CustomTable";


const initialValues = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    password: '',
    repeat_password: ''
}

function App() {
    const [userData, setUserData] = useState(initialValues);
    const [users, setUsers] = useState([]);
    const [editableUserData, setEditableUserData] = useState({
        isEdit: false,
        userIndex: null
    })

    console.log('userData', userData);

    const handleRemoveClick = ({index}) => {
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
        const handleEditClick = ({user, index}) => {
            setUserData(user);
            setEditableUserData({
                isEdit: true,
                userIndex: index
            })
        }
    const handleInputChange = (e, userName) => setUserData((prevState) =>({
      ...prevState,
      [userName]: e.target.value
    }))

  return (
    <div className="wrapper">
     <div className="wrapper-content">

         <div className="table-data">
        <div className="buttonCreate"><button>Create</button></div>
            <CustomTable
                users={users}
                handleEditClick={handleEditClick}
                handleRemoveClick={handleRemoveClick}

            />
         </div>
         <div className="wrapper-inputsWithButtons">


             <form onSubmit={handleSubmitUser}>
                 <strong>Create new user</strong>
                 <span>Username*</span>

                 <CustomInput
                 placeholder=''
                 handleChange={handleInputChange}
                 value={userData.userName}
                 fieldName='userName'

             />

                 <span>First name*</span>
                 <CustomInput
                     placeholder=''
                     handleChange={handleInputChange}
                     value={userData.firstName}
                     fieldName='firstName'
                     />

                 <span>Last name*</span>
                 <CustomInput
                     placeholder=''
                     handleChange={handleInputChange}
                     value={userData.lastName}
                     fieldName='lastName'
                     />

                 <span>Email*</span>
                 <CustomInput
                     placeholder=''
                     handleChange={handleInputChange}
                     value={userData.email}
                     fieldName='email'
                     />

                 <span>Type*</span>
                 <CustomInput
                     placeholder=''
                     handleChange={handleInputChange}
                     value={userData.type}
                     fieldName='type'
                     />
                 <span>Password*</span>
                 <CustomInput
                     placeholder=''
                     handleChange={handleInputChange}
                     value={userData.password}
                     fieldName='password'
                 />
                 <span>Repeat password*</span>
                 <CustomInput
                     placeholder=''
                     handleChange={handleInputChange}
                     value={userData.repeat_password}
                     fieldName='repeat_password'
                 />


                 <div className="buttons-wrapper">

                     <CustomButton
                         lable={editableUserData.isEdit ? 'Edit' : 'Create'}
                         classNames=''
                         handleClick={() => {}}
                         data={null}
                         type='submit'

                     />




                 </div>
             </form>
         </div>
     </div>
    </div>
  );
}

export default App;
