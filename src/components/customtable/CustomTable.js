import React from "react";
import './CustomTable.css';
import CustomButton from "../custombutton/CustomButton";

const CustomTable = ({users, handleEditClick, handleRemoveClick}) => {
    return (

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
                        <div className='colorButtons'>
                            <div>
                                <CustomButton
                                lable='edit'
                                classNames='edit-action'
                                handleClick={handleEditClick}
                                data={({index, user})}
                                type='button'

                            />
                            </div>
                            <div className='buttonRemoveRed'>
                                <CustomButton
                                lable='remove'
                                classNames='remove-action'
                                handleClick={handleRemoveClick}
                                data={({index})}
                                type='button'

                            />
                            </div>

                        </div>
                    </td>
                </tr>
            ))}


            </tbody>


        </table>
    )
}

export default CustomTable