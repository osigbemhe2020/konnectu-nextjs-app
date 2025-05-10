
import { ProgressBar } from 'react-bootstrap';

function MyProgress(props) {
  return (
    <div>
       <ProgressBar 
       now= {props.percent} 
       style= {{ height: '15px', backgroundColor: '#eee' }}  
       variant= {props.color}
       label= {`${props.percent}%`} 
       />
    </div>
  );
}

export default MyProgress 