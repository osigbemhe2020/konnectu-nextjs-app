import { CiGrid42 } from "react-icons/ci";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";

const Pad = {
   paddingTop: "10px",
    paddingRight: "17px" ,
    paddingBottom: "0px" ,
    paddingLeft: "14px" 
   
}

const Box = (props) =>{
    const Icon = props.icon;
    return(
        <>
        <div className='cont' style={Pad}>
            <p><Icon /> {props.text}</p>
        </div>
        </>
    )
}



 const Radio = (props) => {
  return (
    <div className='radio-cont'>
         <input type="radio" value="clients" className='radio'/><label>{props.text}</label>
    </div>
  )
}


const Menubar = () => {
  return (
    <>
      <div className= "menu-bar">
        <img src="/konnectu.png" alt='konnectu'  className='pic'/>
        <div className='v-flex'>
             <div className='Top'>
                <Box text="DashBoard" icon={CiGrid42} />
                <Box text="Analytic & Report" icon={ LuChartNoAxesCombined } />
                <div className='acc-cont'>
                  <Box text="Account Manage.." icon= { BsPeople } />
                  <Radio text='Clients'/>
                  <Radio text='Artisans'/>
                  <Radio text='Professionals'/>
                </div>
                <Box text="Message" icon= { TiMessages } />
                <Box text="Job Oversight" icon={CiGrid42}  />
            </div>
            <div className='bottom'>
                <Box text="Settings" icon= { IoSettingsOutline }  />
                <Box text="Logout" icon={CiGrid42} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Menubar