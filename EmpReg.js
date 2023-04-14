import React, {useState, useEffect} from 'react';
import axios from "axios";

const EmpReg = () => {

const [data, setData] = useState([]);

var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': '*/*',
    },
  };

  const [employeeLogin, setEmployeeLogin] = useState({
    department: "",
    });

  const resetEmployeeDetails = () => {
    let _resetEmployee = {
        department: "",
    };
    setEmployeeLogin(_resetEmployee);
  };

  const handleChangeInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    const _currentData = { ...employeeLogin, [key]: value };
    setEmployeeLogin(_currentData);
    axios
            .post(`http://192.168.0.115/apis/api/EmpReg/fetchEmp`, _currentData,config)
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
   // console.log(_currentData);
  };


return(
<section>  
<ul>    
<div class="section-heading">
<p class="label" id='tit'>Title Page</p>
</div>

<div id='date_bord'>
<p class="col-10 phone-col-9, date" id='d'>Date and Time of Review</p>
<button class="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span class="phone-hide, date">Date</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div>

<div id='dep'>
<p class="col-10 phone-col-12">Department</p>
<select type="text" name='department' value={employeeLogin.department} id='tit1' onChange={handleChangeInput}>
<option value="" size={10}>Select</option><br />
        <option value='Accounts'>Accounts</option>
        <option value='Technical'>Technical</option>
        <option value='Nontechnical'>Nontechnical</option>
</select>
{/* <input type="text" name="department" value={employeeLogin.department} onChange={handleChangeInput}/>
<input type="submit" value="Login" onClick={login} />  */}
</div>

<div id='dep'>
<p class="col-10 phone-col-12">Name of Employee</p>
<select name="name" id='tit1'>
<option>Select</option>
{data.map(data => (
    <option value={data.department} key={data.id}>{data.name}</option>
  ))
  }
</select>
</div>

<div id='dep'>
<p class="col-10 phone-col-12">HR Manager / Supervisor</p>
<input class="input textsingle item" type="text" id='tit1' name="hr" value={employeeLogin.hr} onChange={handleChangeInput}/>
</div>

<h3 class="item category row" data-item-id="4df42f6a-5d9a-4161-93fc-02f57768527b" id='h3'>General Information</h3>

<div id='dep'>
<p class="col-10 phone-col-12">Employee Number</p>
<input class="input textsingle item" type="text" id='tit1'/>
</div>

<div id='dep'>
<p class="col-10 phone-col-12">Post</p>
<input class="input textsingle item" type="text" id='tit1'/>
</div>

<div id='date_bord'>
<p class="col-10 phone-col-9, date" id='d1'>Date Hired</p>
<button class="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span class="phone-hide, date">Date</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div>

<div id='dep'>
<p class="col-10 phone-col-12">Employment Status</p>
<input class="input textsingle item" type="text" id='tit1'/>
</div>

<h3 class="item category row" data-item-id="ee8f6944-4d87-41a9-88e1-f678f071dc58" id='h3'>Reference</h3>
<div id='dep'>
<p>REFERENCE: Rating Guidelines</p>
<p>[This is an example of how you can use iAuditor to include reference images in your templates to assist with assessment]</p>
<div class="col-12"><img  src="https://public-library.safetyculture.io/media/0283e450-d661-11e8-9e3e-6b1e48cd53ef" ></img></div>
</div>

<h3 class="item category row" data-item-id="f7b739e7-bea8-4423-ae60-64a4a73ec8c5" id='h3'>Performance Assessment</h3> 

<div id='dep'>
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
</div>

<div id='dep'>
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
</div>

<div id='dep'>
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
</div>

<div id='dep'>
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
</div>

<div id='dep'>
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
</div>

<div id='dep'>
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
</div>

<div id='dep'>
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
</div>

<h3 class="item category row" data-item-id="ee8f6944-4d87-41a9-88e1-f678f071dc58" id='h3'>Completion</h3>
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
</div>

<div id='dep'>
<p>Reference Guide</p>
<div class="col-12"><img  src="https://public-library.safetyculture.io/media/24acdb40-d661-11e8-9e3e-6b1e48cd53ef" ></img></div>
</div>

<div id='dep'>
<p class="col-10 phone-col-12">Special task taken up or commendation obtained by the employee during the appraisal period</p>
<input class="input textsingle item" type="text" id='tit1'/>
</div>

<div id='dep'>
<p class="col-10 phone-col-12">Overall comments on performance</p>
<input class="input textsingle item" type="text" id='tit1'/>
</div>

<h3 id='h3'>Sign-off</h3>

<div id='date_bord'>
<p class="col-10 phone-col-9, date" id='ds'>Full Name and Signature of Employee</p>
<button class="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span class="phone-hide, date">Sign</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div>

<div id='date_bord'>
<p class="col-10 phone-col-9, date" id='ds1'>Full Name and Signature of Supervisor / HR Manager</p>
<button class="template-preview-input add-button rhs-select col-2 phone-col-3, date, box" data-input="datetime" id='font'>
<span class="phone-hide, date">Sign</span>
<span class="phone-show fa fa-calendar fa-lg"></span>
</button>
</div>

</ul>
</section>

)
}
export default EmpReg;