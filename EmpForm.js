import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const EmpForm = () => {

let navigate = useNavigate();

const [formErrors, setFormErrors] = useState({});

const validate = () => {
  const errors = {};
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!employeeDetails.email) {
    errors.email = "Email is required";
  }
  if (employeeDetails.email && !emailRegex.test(employeeDetails.email)) {
      errors.email = "Invalid email";
  }
  if (!employeeDetails.name) {
      errors.name = "Name is required";
  }
  if (!employeeDetails.department) {
      errors.department = "Department name is required";
  }

  return errors;
};

const validateOnChange = (name, value) => {
    const errors = {};
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name == "email" && !value) {
      errors.email = "Email is required";
    }
    if (name == "email" && value && !emailRegex.test(value)) {
      errors.email = "Invalid email";
    }  
    if (name == "name" && !value) {
      errors.name = "Name is required";
    }
    if (name == "department" && !value) {
        errors.department = "Department name is required";
    }
    return errors;
  };

  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    department: "",
  });

  const resetEmployeeDetails = () => {
    let _resetEmployee = {
        name: "",
        email: "",
        department: "",
    };
    setEmployeeDetails(_resetEmployee);
  };

  const handleChangeInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    const _currentData = { ...employeeDetails, [key]: value };
    setEmployeeDetails(_currentData);
    const _errors = validateOnChange(e.target.name, e.target.value);

    if (Object.keys(_errors).length != 0) {
      let finalErrors = {
        ...formErrors,
        [key]: _errors[key],
      };
      setFormErrors(finalErrors);
    } else {
      let finalErrors = {
        ...formErrors,
        [key]: _errors[key],
      };
      setFormErrors(finalErrors);
    }
    };

    var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': '*/*',
        },
    };

    const submitdata = () => {
        const _errors = validate();
        setFormErrors(_errors);
    
        let _requestData = {
          ...employeeDetails,
        };
        
        {
          Object.keys(_errors).length == 0
            ? axios
               .post(
               "http://192.168.1.17/apis/api/EmpReg/postEmp" ,_requestData, config)
                .then((res) => {
                         console.log(res.data)
                         if (res.status === 200) {
                         alert("Successfully registred");
                         } setFormErrors({});
                       //  console.log("/leadMngTable",{dataMng:res.data})
                         })
                .catch((err) =>{ alert("Something went wrong")
                setFormErrors({});
              })
            : alert("Please Fill All Details");
        }
      };

return(
<section>
<ul>
<div id='depForm'>
<h3  className="col-10 phone-col-12">Employee Registration Page</h3>

<p className="col-10 phone-col-12">Name</p>
<input className="input textsingle item" type="text" name='name' value={employeeDetails.name} onChange={handleChangeInput} id='tit1' error="!employeeDetails.name"/>
<p style={{ marginTop: "1px", color: "red" }}>{formErrors.name}</p>

<p className="col-10 phone-col-12">Mail Id</p>
<input className="input textsingle item" type="text" name='email' value={employeeDetails.email} onChange={handleChangeInput} id='tit1' error="!employeeDetails.email"/>
<p style={{ marginTop: "1px", color: "red" }}>{formErrors.email}</p>

<p className="col-10 phone-col-12">Department</p>
<select className="input textsingle item" type="text" name='department' value={employeeDetails.department} onChange={handleChangeInput} id='tit1' error="!employeeDetails.department">
<option value="" size={10}>Select</option>
<option value="Accounts">Accounts</option>
<option value="Technical">Technical</option>
<option value="Nontechnical">Nontechnical</option>
<p style={{ marginTop: "1px", color: "red" }}>{formErrors.department}</p>
</select>

<div>
<button type="submit" value="Submit" onClick={submitdata} className="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span className="phone-hide, date">Submit</span>
</button>
</div>
</div>
</ul>
</section>
)
}
export default EmpForm;
