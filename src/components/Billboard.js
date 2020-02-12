import React from 'react';
import './Billboard.css';
import billboard from './billboard.jpg'

function Billboard(){
  return(
    <div className='totalBillboard'>
<button className='playBtn'> ▶︎ Play </button>
<button className='infoBtn'> ⓘ More Info</button>
    </div>
  );
}

export default Billboard;
