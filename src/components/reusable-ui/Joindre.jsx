import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

export default function Joindre({className}) {
  return (
    <div className={className}>
        <div className='footer-left-icon'>
            <LuMapPin className='left-icon'/> <p> coloma 2 commune de ratoma</p>
        </div>
        <div className='footer-left-icon'>
            <BsTelephone className='left-icon'/> <p> +216 50496811</p>
        </div>
        <div className='footer-left-icon'>
            <MdOutlineMail className='left-icon'/><p> mamadou.bahelhadj@etudiant-fst.utm.tn</p>
        </div>
    </div>
  )
}
