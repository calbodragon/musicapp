import React from 'react';
import imagen from '../img/L-Arc-en-Ciel.jpg'


const Body =()=>{
    return(
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-md-offset-4'>
                    <img src='#' width='300' alt=''/>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img id='img-album' src={imagen} width='300'/>
                <audio id='player' controls=''></audio>         
            </div>
                <div className='col-md-6'>
                    <button className='btn btn-dark' id='shuffle'><ion-icon name="arrow-dropright-circle"></ion-icon></button>
                </div>
        </div>  
    </div>
    )

}
export default Body;