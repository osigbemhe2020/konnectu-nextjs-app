
import Revenue from '@/components/revenue.js'
import Performance from '@/components/performance.js'
import Job from '@/components/job.js'
import Account from '@/components/account.js'

const Body = () => {
  return (
    <div className='body-cont'>
        <h1 className="blue-text">Overview</h1>
        <div className='wrapper'>
          <Revenue />
          <Performance />
          <Job />
          <Account />
        </div>
    </div>
  )
}           

export default Body