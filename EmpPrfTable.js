import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useLocation} from 'react-router-dom';

function EmpPrfTable(){
  const navigate = useNavigate();

  var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': '*/*',
    },
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
  rev_date: "",
  rev_todate: "",
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
  rev_date: "",
  rev_todate: "",
  };
  setEmployeeLogin(_resetEmployee);
};

  const [data,setData] = useState([])
  const initializeEvent = () => {
  axios.get("http://192.168.1.9/apis/api/EmpReg/getEmpData",config)
  .then((res) => {
  console.log(res);
  setData(res.data)
  })
  };
   useEffect(() => initializeEvent(), []);

  const fetchDateRng = () => {
   
    let _requestData = {
      ...employeeLogin,
    };

   console.log(_requestData)
    {
       axios
            .post(`http://192.168.1.9/apis/api/EmpReg/fetchDateRng`, _requestData,config)
            .then((res) => {
               console.log('response',res.data)
               setData(res.data)
               if (res.data != "Failed") {
                 localStorage.setItem(
                  "user_info",
                   JSON.stringify(res.data)
                 );
               }
               if (res.data == "Failed") {
                alert("Invalid Credantials")
               }
               resetEmployeeDetails();
            })
            .catch((e) => {
               if (e.res.data.message == "Incorrect Password") {
              {
                 alert("Account Not Found");
               }
              }
            })
    }
  };

  
  const handleChangeInput1 = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    const _currentData = { ...employeeLogin, [key]: value };
    setEmployeeLogin(_currentData);
    console.log(_currentData)
  };


return (
<>
<div className="tab">
<div className="scrollmenu" id='depTable'>
<div className="nameDsg">
<p className="col-10 phone-col-12">Search by name</p>
<input type="search" name="name" value={employeeLogin.name} id='titTable' placeholder="Search"/>
</div>
<div id="dateDsg">
<p className="col-10 phone-col-12">From</p>
<input className="input textsingle item" type="date" name='rev_date' value={employeeLogin.rev_date} onChange={handleChangeInput1} id='titTable' />
</div>
<div id="dateDsg1">
<p className="col-10 phone-col-12">To</p>
<input className="input textsingle item" type="date" name='rev_todate' value={employeeLogin.rev_todate} onChange={handleChangeInput1} id='titTable' />
</div>
<div id="btnDsg">
<button type="submit" value="Submit" className="btnForm" data-input="datetime" id='font' onClick={fetchDateRng}>Search by date</button>
</div>
  <table>
  <ul>
  <thead>
      <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Name</th>
          <th>HR/Supervisor</th>
          <th>Emp_Num</th>
          <th>Post</th> 
          <th>Date_Hired</th>
          <th>Emp_status</th>
          <th>Attendance</th>
          <th>Job Knowledge and Skills</th>
          <th>Quality of work</th>
          <th>Initiative and Motivation</th>
          <th>Teamwork</th>
          <th>General Conduct</th>
          <th>Discipline</th>
          <th>Rating</th>
          <th>Appraisal Period</th>
          <th>Comments</th>
          <th>Rev_date</th>
          <th>Rev_time</th>
       </tr>
  </thead>
  <tbody>
      {
          data.map(data => (
                  <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.department}</td>
                      <td>{data.name}</td>
                      <td>{data.hr_supr}</td>
                      <td>{data.emp_number}</td>
                      <td>{data.emp_post}</td>
                      <td>{data.date_hired}</td>
                      <td>{data.emp_status}</td>
                      <td>{data.attendance}</td>
                      <td>{data.job_knw_skill}</td>
                      <td>{data.qua_work}</td>
                      <td>{data.invt_movt}</td>
                      <td>{data.team_work}</td>
                      <td>{data.gen_condt}</td>
                      <td>{data.discipline}</td>
                      <td>{data.tot_score}</td>
                      <td>{data.emp_comm}</td>
                      <td>{data.comm_prf}</td>
                      <td>{data.rev_date}</td>
                      <td>{data.rev_time}</td>
                  </tr>))
      }
  </tbody>
  </ul>
  </table>
  </div>
  </div>
  </>
);
}
export default EmpPrfTable;