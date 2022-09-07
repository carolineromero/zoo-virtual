import React from 'react'
import imgBird from '../assets/homeImage.jpg'
import {Link} from "react-router-dom"

function HeaderHome(){
    return(
        <div className='imgHeaderContainer'>
            <img src={imgBird} alt="imagen cabecera" className='img-header' />
            
            </div>
    )
}

export default HeaderHome;