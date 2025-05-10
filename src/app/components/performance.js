import { FaStar } from "react-icons/fa6";
import { IoMdPulse } from "react-icons/io";
import MyProgress from '@/components/progess.js';

const Cbr = () =>{
  return(
    <div style={{height:"14px"}}></div>
  )
}

const SmallTable = (props) => {
  return (
    <table className='sm-table'>
      <tr>
        <th>User name</th>
        <th>issues</th>
        <th>Time</th>
      </tr>
      <tr>
        <td><img src='/me2.jpg' alt="me" className='extra-sm-pic'/><span>James Markus</span></td>
        <td>My task specia..</td>
        <td>Jan 14 2025</td>
      </tr>
      <tr>
        <td><img src='/me2.jpg' alt="me" className='extra-sm-pic'/><span>Ngozie Peter</span></td>
        <td>My task specia..</td>
        <td>Jan 14 2025</td>
      </tr>
    </table>
  )
}



const Performance = () => {
  return (
    <div className='perform'>
        <div><h2 className='blue-sm-text'>Performance</h2></div><Cbr/>
        <div className='pe-bodys'>
            <div className='pe-grids'>
               <div className='innerA'>
                    <div className='grey-box'>
                        <p style={{fontWeight:"500"}}>Total User</p><Cbr/>
                        <p className='odd-f'><span className='big'>2k</span>users <IoMdPulse className='pulse' /></p><Cbr/>
                        <p>Monthly Subscribers</p>
                        <MyProgress color="dark" percent="60" />
                        <p className='small'>20subs</p>
                    </div>
                    <Cbr/>
                    <div className='sub-grid'>
                        <div className='orange-box'>
                             <h4>65%</h4>
                        </div>
                        <div className='ratings'>
                            <div className='image-array'>
                                <img src='/me2.jpg' className='small-pic' alt='men'/>
                                <img src='/me2.jpg' className='small-pic' alt='me'/>
                                <img src='/me2.jpg' className='small-pic' alt='me'/>
                            </div>
                            <div>
                                <p>+1k people rated</p>
                                <p><FaStar className='star'/><FaStar className='star' /><FaStar className='star' />
                                <FaStar className='star'/></p>
                            </div>
                       </div>
                    </div>
              </div>
              <div className='innerB'>
                    <div className='grey-box'>
                        <p>Total Resolved Disputes</p>
                        <Cbr/>
                        <p><span className='big'>25%</span>disputes <IoMdPulse className='pulse' /></p>
                    </div>
                    <div className='other-box'>
                        <p>Total Unresolved Disputes</p>
                        <Cbr/>
                        <p><span className='big'>75%</span>disputes <IoMdPulse className='pulse' style={{color:"red"}} /></p> 
                        <Cbr/>
                        <SmallTable/>
                        <a href="#">View more queries </a>
                    </div>
               </div>
            </div>            
        </div>
    </div>
    
  )
}

export default Performance