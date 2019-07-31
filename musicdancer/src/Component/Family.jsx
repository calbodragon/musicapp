import React from 'react';
import Header from './Header';

const Family=({children})=>{
    return(
       <div className='Main w-100'>
             <Header/>
           <div className='Main_container container-fluid'>
               {children};
           </div>

       </div>
    )
}
export default Family;