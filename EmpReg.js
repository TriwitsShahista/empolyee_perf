import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const EmpReg = () => {

const [data, setData] = useState([]);
let navigate = useNavigate();

var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': '*/*',
    },
  };

  const [formErrors, setFormErrors] = useState({});

const validate = () => {
const errors = {};
if (!employeeLogin.name) {
      errors.name = "Name is required";
}
if (!employeeLogin.department) {
      errors.department = "Department name is required";
}
if (!employeeLogin.department) {
    errors.department = "Department name is required";
}
if (!employeeLogin.hr_supr) {
  errors.hr_supr = "Name is required";
}
if (!employeeLogin.emp_status) {
  errors.emp_status = "This field required";
}
if (!employeeLogin.attendance) {
  errors.attendance = "This field required";
}
if (!employeeLogin.job_knw_skill) {
  errors.job_knw_skill = "This field required";
}
if (!employeeLogin.qua_work) {
  errors.qua_work = "This field required";
}
if (!employeeLogin.invt_movt) {
  errors.invt_movt = "This field required";
}
if (!employeeLogin.team_work) {
  errors.team_work = "This field required";
}
if (!employeeLogin.gen_condt) {
  errors.gen_condt = "This field required";
}
if (!employeeLogin.discipline) {
  errors.discipline = "This field required";
}
if (!employeeLogin.tot_score) {
  errors.tot_score = "This field required";
}
if (!employeeLogin.emp_comm) {
  errors.emp_comm = "This field required";
}
if (!employeeLogin.comm_prf) {
  errors.comm_prf = "This field required";
}

  return errors;
};

  const [employeeLogin, setEmployeeLogin] = useState({
    department: "",
    name: "",
    hr_supr: "",
    emp_number: "",
    emp_post: "",
    date_hired: "",
    emp_status: "",
    attendance: "",
    job_knw_skill: "",
    qua_work: "",
    invt_movt: "",
    team_work: "",
    gen_condt: "",
    discipline: "",
    tot_score: "",
    emp_comm: "",
    comm_prf: "",	
    });

  const resetEmployeeDetails = () => {
    let _resetEmployee = {
    department: "",
    name: "",
    hr_supr: "",
    emp_number: "",
    emp_post: "",
    date_hired: "",
    emp_status: "",
    attendance: "",
    job_knw_skill: "",
    qua_work: "",
    invt_movt: "",
    team_work: "",
    gen_condt: "",
    discipline: "",
    tot_score: "",
    emp_comm: "",
    comm_prf: "",	
    };
    setEmployeeLogin(_resetEmployee);
  };

  const handleChangeInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    const _currentData = { ...employeeLogin, [key]: value };
    setEmployeeLogin(_currentData);
    axios
            .post(`http://192.168.1.9/apis/api/EmpReg/fetchEmp`, _currentData,config)
            .then((res) => {
               console.log('response',res.data)
               setData(res.data)
            })
   // console.log(_currentData);
  };

  const handleChangeInput1 = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    const _currentData = { ...employeeLogin, [key]: value };
    setEmployeeLogin(_currentData);
    console.log(_currentData)
  };

  const submitdata = () => {

    let _requestData = {
      ...employeeLogin,
    };
    
    {
       axios
           .post(
           "http://192.168.1.9/apis/api/EmpReg/postEmpRev" ,_requestData, config)
            .then((res) => {
                     console.log(res.data)
                     if (res.status === 200) {
                     alert("Successfully registred");
                     } 
                    // navigate("/empReg")
                     })
            .catch((err) =>{ alert("Something went wrong")
          })
    }
  };
  

return(
<section>  
<ul>    
<div className="section-heading">
<h3 className="label" id='tit'>Staff Performance Review</h3>
</div>

{/* <div id='date_bord'>
<p class="col-10 phone-col-9, date" id='d'>Date and Time of Review</p>
<button class="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span class="phone-hide, date">Date</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button> 
</div> */}

<div id='dep'>
<p className="col-10 phone-col-12">Department</p>
<select type="text" name='department' value={employeeLogin.department} id='tit1' onChange={handleChangeInput} className="select">
<option value="" size={10}>Select</option><br />
        <option value='Accounts'>Accounts</option>
        <option value='Technical'>Technical</option>
        <option value='Nontechnical'>Nontechnical</option>
</select>
{/* <input type="text" name="department" value={employeeLogin.department} onChange={handleChangeInput}/>
<input type="submit" value="Login" onClick={login} />  */}
</div>

<div id='dep'>
<p className="col-10 phone-col-12">Name of Employee</p>
<select name="name" id='tit1' value={employeeLogin.name} onChange={handleChangeInput1}>
<option>Select</option>
{data.map(data => (
    <option value={data.name} key={data.id}>{data.name}</option>
  ))
  }
</select>
</div>

<div id='dep'>
<p className="col-10 phone-col-12">HR Manager / Supervisor</p>
<input className="input textsingle item" type="text" id='tit1' name="hr_supr" value={employeeLogin.hr_supr} onChange={handleChangeInput1}/>
</div>

<h3 className="item category row" data-item-id="4df42f6a-5d9a-4161-93fc-02f57768527b" id='h3'>General Information</h3>

<div id='dep'>
<p className="col-10 phone-col-12">Employee Number</p>
<input className="input textsingle item" type="text" name="emp_number" value={employeeLogin.emp_number} onChange={handleChangeInput1} id='tit1'/>
</div>

<div id='dep'>
<p className="col-10 phone-col-12">Post</p>
<input className="input textsingle item" type="text" name="emp_post" value={employeeLogin.emp_post} onChange={handleChangeInput1} id='tit1'/>
</div>

<div id='date_bord'>
<p className="col-10 phone-col-9, date" id='d1'>Date Hired</p>
<input type='date' name="date_hired" value={employeeLogin.date_hired} onChange={handleChangeInput1} class="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'/>
<span className="phone-hide, date"></span>
<span className="phone-show fa fa-calendar fa-lg"></span>
</div>

<div id='dep'>
<p className="col-10 phone-col-12">Employment Status</p>
<input className="input textsingle item" type="text" name="emp_status" value={employeeLogin.emp_status} onChange={handleChangeInput1} id='tit1'/>
</div>

<h3 className="item category row" data-item-id="ee8f6944-4d87-41a9-88e1-f678f071dc58" id='h3'>Reference</h3>
<div id='dep'>
<p>REFERENCE: Rating Guidelines</p>
<p>[This is an example of how you can use iAuditor to include reference images in your templates to assist with assessment]</p>
<div className="col-12"><img  src="https://public-library.safetyculture.io/media/0283e450-d661-11e8-9e3e-6b1e48cd53ef" ></img></div>
</div>

<h3 className="item category row" data-item-id="f7b739e7-bea8-4423-ae60-64a4a73ec8c5" id='h3'>Performance Assessment</h3> 

{/* <div id='dep'>
<p class="col-10 phone-col-12">Attendance</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}


<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">Attendance</p>

  <input type="radio" className=" btns" name="attendance" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="option1">5</label>

  <input type="radio" className=" btns" name="attendance" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="option2">4</label>

  <input type="radio" className=" btns" name="attendance" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="option3">3</label>

  <input type="radio" className=" btns" name="attendance" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="option4">2</label>

  <input type="radio" className=" btns" name="attendance" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="option5">1</label>
</div>



{/* <div id='dep'>
<p class="col-10 phone-col-12">Job Knowledge and Skills</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">Job Knowledge and Skills</p>

<input type="radio" className=" btns" name="job_knw_skill" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="job_knw_skill" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="4">4</label>

  <input type="radio" className=" btns" name="job_knw_skill" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="job_knw_skill" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="job_knw_skill" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
</div>

{/* <div id='dep'>
<p class="col-10 phone-col-12">Quality of Work</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">Quality of Work</p>

<input type="radio" className=" btns" name="qua_work" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="qua_work" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="4">4</label>

  <input type="radio" className=" btns" name="qua_work" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="qua_work" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="qua_work" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
</div>

{/* <div id='dep'>
<p class="col-10 phone-col-12">Initiative and Motivation</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">Initiative and Motivation</p>

<input type="radio" className=" btns" name="invt_movt" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="invt_movt" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="4">4</label>

  <input type="radio" className=" btns" name="invt_movt" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="invt_movt" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="invt_movt" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
</div>

{/* <div id='dep'>
<p class="col-10 phone-col-12">Teamwork</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">Teamwork</p>

<input type="radio" className=" btns" name="team_work" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="team_work" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="4">4</label>

  <input type="radio" className=" btns" name="team_work" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="team_work" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="team_work" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
</div>

{/* <div id='dep'>
<p class="col-10 phone-col-12">General Conduct</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">General Conduct</p>

<input type="radio" className=" btns" name="gen_condt" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="gen_condt" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">4</label>

  <input type="radio" className=" btns" name="gen_condt" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="gen_condt" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="gen_condt" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
</div>

{/* <div id='dep'>
<p class="col-10 phone-col-12">Discipline</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<div id='dep' onChange={handleChangeInput1}>
<p className="col-10 phone-col-12">Discipline</p>

  <input type="radio" className=" btns" name="discipline" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="discipline" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="4">4</label>

  <input type="radio" className=" btns" name="discipline" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="discipline" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="discipline" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
</div>

{/* <h3 class="item category row" data-item-id="ee8f6944-4d87-41a9-88e1-f678f071dc58" id='h3'>Completion</h3>
<div id='dep'>
<p>• Look at the total score above and select the relevant overall performance rating.</p>
<button class="btns" data-input="datetime" id='five'>
<span>5</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='four'>
<span class="phone-hide, date">4</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='thr'>
<span class="phone-hide, date">3</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='two'>
<span class="phone-hide, date">2</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
<button class="btns" data-input="datetime" id='one'>
<span class="phone-hide, date">1</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div> */}

<h3 className="item category row" data-item-id="ee8f6944-4d87-41a9-88e1-f678f071dc58" id='h3'>Completion</h3>
<div id='dep' onChange={handleChangeInput1}>
<p>• Look at the total score above and select the relevant overall performance rating.</p>

  <input type="radio" className=" btns" name="tot_score" value='5' id="five" data-input="datetime" autoComplete="off"  />
  <label className="phone-hide, date" htmlFor="5">5</label>

  <input type="radio" className=" btns" name="tot_score" value='4' id="four" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="4">4</label>

  <input type="radio" className=" btns" name="tot_score" value='3' id="thr" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="3">3</label>

  <input type="radio" className=" btns" name="tot_score" value='2' id="two" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="2">2</label>

  <input type="radio" className=" btns" name="tot_score" value='1' id="one" data-input="datetime" autoComplete="off" />
  <label className="phone-hide, date" htmlFor="1">1</label>
  </div>

<div id='dep'>
<p>Reference Guide</p>
<div className="col-12"><img  src="https://public-library.safetyculture.io/media/24acdb40-d661-11e8-9e3e-6b1e48cd53ef" ></img></div>
</div>

<div id='dep'>
<p className="col-10 phone-col-12">Special task taken up or commendation obtained by the employee during the appraisal period</p>
<input className="input textsingle item" type="text" name='emp_comm' value={employeeLogin.emp_comm} onChange={handleChangeInput1} id='tit1'/>
</div>

<div id='dep'>
<p className="col-10 phone-col-12">Overall comments on performance</p>
<input className="input textsingle item" type="text" name='comm_prf' value={employeeLogin.comm_prf} onChange={handleChangeInput1} id='tit1'/>
</div>

<div id='date_bord'>
<p className="col-10 phone-col-9, date" id='d'>Submit your information</p>
<button className="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" onClick={submitdata} data-input="datetime" id='font'>
<span className="phone-hide, date">Submit</span>
<span className="phone-show fa fa-calendar fa-lg"></span>
</button> 
</div>

<h3 id='h3'>Sign-off</h3>

<div id='date_bord'>
<p className="col-10 phone-col-9, date" id='ds'>Full Name and Signature of Employee</p>
<button className="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span className="phone-hide, date">Sign</span>
<span className="phone-show fa fa-calendar fa-lg"></span>
</button>
</div>

<div id='date_bord'>
<p className="col-10 phone-col-9, date" id='ds1'>Full Name and Signature of Supervisor / HR Manager</p>
<button className="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span className="phone-hide, date">Sign</span>
<span className="phone-show fa fa-calendar fa-lg"></span>
</button>
</div>

</ul>
</section>

)
}
export default EmpReg;