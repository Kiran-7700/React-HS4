import React, { useState } from 'react';
import {nanoid} from "nanoid";
import "./Students.css";
import Data from "./StudentInfo"
import { Link } from 'react-router-dom';

function Students() {
    let [changePage, SetChangePage] = useState(true);
    let [data, SetData] = useState(Data);
    let [addFormData, setAddFormData] = useState({
        Name: "",
        age: "",
        course: "",
        Batch: "",
        condition:"Edit"

    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }


    const handleAddFormSubmit=(event)=>{
        // event.preventDefault()

        const newContact={
            id:nanoid(),
            Name:addFormData.Name,
            age:addFormData.age,
            course:addFormData.course,
            Batch:addFormData.Batch,
            condition:addFormData.condition
        }

        const newContacts=[...data,newContact];
        SetData(newContacts)

    }

    const toggleFunction=()=>{
        SetChangePage(!changePage)
    }
    const AddStudent = () => {
        SetChangePage(false);
    }
    //
    // let {Name,age,course,Batch}=addFormData;
    //updating data
      

    return (
        <div>
            <div className='infoTable'>
                {changePage ?
                    <div>
                        <div className='heading'>
                            <h1>Students Details</h1>
                            <button onClick={AddStudent}>Add New Student</button>
                        </div>
                        <table>
                            <thead>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Course</th>
                                <th>Batch</th>
                                <th>Change</th>
                            </thead>
                            <tbody>
                                {
                                    data.map((contact,i) => (
                                        <tr key={i}>
                                            <td>{contact.Name}</td>
                                            <td>{contact.age}</td>
                                            <td>{contact.course}</td>
                                            <td>{contact.Batch}</td>
                                            <td><Link >
                                                {contact.condition}</Link></td>
                                        </tr>)
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    // <AddData func={toggleFunction} />
                    <div>
                        <div className='inputTags'>
                            <div class="text-field">
                                <input type="text" required name='Name'
                                    onChange={handleAddFormChange} />
                                <label>Name</label>
                            </div>
                            <div class="text-field">
                                <input type="number" required name='age'
                                    onChange={handleAddFormChange} />
                                <label>Age</label>
                            </div>
                            <div class="text-field">
                                <input type="text" required name='course'
                                    onChange={handleAddFormChange} />
                                <label>Course</label>
                            </div>
                            <div class="text-field">
                                <input type="text" required name='Batch'
                                    onChange={handleAddFormChange} />
                                <label>Batch</label>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button onClick={toggleFunction}>Cancel</button>
                            <button onClick={()=>{handleAddFormSubmit();
                                toggleFunction()}}>Submit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Students;