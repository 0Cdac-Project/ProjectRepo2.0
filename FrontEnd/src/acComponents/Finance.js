import axios from "axios";
import { useEffect, useState } from "react";

function Finance() {

    const bUrl = "http://localhost:8080/api/v1/bed/totalCharge";
    const dUrl = "http://localhost:8080/api/v1/doctor/totalSalary"; 
    const mUrl = "http://localhost:8080/api/v1/management/totalSalary";

    const [doctorSalary, setDoctorSalary] = useState(0);
    const [managementSalary, setManagementSalary] = useState(0);
    const [bedCharge, setBedCharge] = useState(0);
    
    const getDSal = ()=>{
        axios.get(dUrl)
        .then((response)=>{
            setDoctorSalary(response.data);
        })
    }
    const getMSal = ()=>{
        axios.get(mUrl)
        .then((response)=>{
            setManagementSalary(response.data);
        })
    }
    const getBCharge = ()=>{
        axios.get(bUrl)
        .then((response)=>{
            setBedCharge(response.data);
        })
    }
    const getData = ()=>{
        getDSal();
        getMSal();
        getBCharge();
    }
    useEffect(()=>{
        getData();
    },[]);
    return ( 
    <>
        <div className="page-header">
        <h1>Im Finance</h1>
        </div>
        <div class="card">
            <div class="card-body">
                Total Doctor's salary : {doctorSalary} 
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                Total Management's salary : {managementSalary}
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                Total bed's charge : {bedCharge}
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                Total Hospitals's Expenses : {doctorSalary+managementSalary}
            </div>
        </div>
    </>
     );
}

export default Finance;
