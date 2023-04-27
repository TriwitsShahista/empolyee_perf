import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const SideBar = () => {

    return(
    <>
    <div class="sidenav">
    <a href="empForm">Registration</a>
    <a href="empReg">Employee Performance Form</a>
    <a href="empPrfTable">Employee Performance</a>
    <a href="empTable">Reports</a>
    </div>
    </>
    )
}
export default SideBar;