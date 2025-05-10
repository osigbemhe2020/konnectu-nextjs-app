import user from '@/lib/user';
import { FaStar } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import MyProgress from '@/components/progress';



const TableRow = (props) => {
  const user = props.account;
  const text = user.status === "on" ? "Activate" : "Deactivate"
  const textt = user.control === "on" ? "Activate" : "Deactivate"

  return (
    <tr>
      <td>{user.id}</td>
      <td><img src='/me2.jpg' alt="me" className='extra-sm-pic'/>{user.name}</td>
      <td><MdAccountCircle className="small-ico"/>{user.pro}</td>
      <td style={{ textAlign: 'center' }}> <button style={{backgroundColor: user.status === "on" ? "green" : "red"}}>{text}</button></td>
      <td style={{ textAlign: 'center' }}> <button style={{backgroundColor: user.control === "on" ? "green" : "red"}}>{textt}</button></td>
    </tr>
  );
};


const Table = () => {
  const users = user.user
  return (
    <>
      <table className='big-table'>
        <tr>
          <th>User ID</th>
          <th>Name of user</th>
          <th>User status</th>
          <th>Status</th>
          <th>Admin control</th>
        </tr>
        <TableRow account={users[0]}/>
        <TableRow account={users[1]}/>
        <TableRow account={users[2]}/>
        <TableRow account={users[3]}/>
         
      </table>
    </>
  )
}


const Account = () => {
  return (
    <div className='cover'>
      <div className='acct-cont'>
          <div className='flex-box'>
            <h1 className='blue-sm-text'> Account Management</h1>
            <a>View more</a>
          </div>
          <Table/>
      </div>
      <div className='bars'>
         <div className='flex-box'>
            <div>
              <h1 className='blue-sm-text'> Popular Task Specialist</h1><br/>
              <div className='flex-box' style={{width:"280px"}}>
                <div>
                  <p>Tasks completed in due date</p>
                  <MyProgress color="success" percent="80" />
                </div>
                <div>
                  <p>Uncompleted Tasks</p>
                  <MyProgress color="danger" percent={20} />
                </div>
              </div>
            </div>
            <div className='ratings' style={{marginTop:"10px"}}>
              <div className='image-array'>
                  <img src='/me2.jpg' className='small-pic' alt='men'/>
                  <img src='/me2.jpg' className='small-pic' alt='me'/>
                  <img src='/me2.jpg' className='small-pic' alt='me'/>
                  <p style={{float:"right"}}>+100</p>
                </div>
                <div>
                  <p>most rated</p>
                  <p><FaStar className='star'/><FaStar className='star' /><FaStar className='star' />
                  <FaStar className='star'/></p>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Account