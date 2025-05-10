import { CiLocationOn } from "react-icons/ci";
import Dropdown from './test';


 const Details = () => {
  return (
    <div className='details'>
        <h6 className='name' style={{marginBottom:"6px"}}><img src='/me2.jpg' alt="me" className='extra-sm-pic'/>Mark Zukurbeg</h6>
        <h2>Install Security Cameras for TechHub</h2>
        <h5>Budget : N4000</h5>
        <p>
        A growing tech company needs a technician to install 6 CCTV cameras in their office space. 
        The job requires running cables through walls and configuring the security system.
        </p>
        <a>view more...</a>
        <p><CiLocationOn />Lagos Nigeria </p>
    </div>
  )
}


const Job = () => {
  return (
    <div className='job-cont'>
       <h2 className='blue-sm-text'>Job Oversight</h2>
       <div className='input-box'>
            <input type="text"  placeholder="Search for Jobs"/>
            <button>Filter</button>
            <Dropdown title="Date" item="date" listclass="left-list"/>
            <Dropdown title="Jobs" item="jobs" listclass="right-list"/>
       </div>
       <Details/>
       <Details/>
    </div>
  )
}

export default Job