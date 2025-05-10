import dynamic from 'next/dynamic';
const GroupedBarChart = dynamic(() => import('@/components/graph.js'), { ssr: false });

function Graph() {
    return (
      <div className="bar-chart">
        <GroupedBarChart />
      </div>
    );
  }



const Revenue = () => {
  return (
    <div className='revenue'>
        <div className='flex-box'>
           <div><h2 className='blue-sm-text'>Revenue Overview</h2></div>
           <div className="blue-outline">For every month</div>
        </div>
        <Graph/>
    </div>
  )
}


export default Revenue