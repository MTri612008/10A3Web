import React from 'react'
import { Link } from 'react-router-dom'
import './ReviewMem.css'
export const ReviewMem = ({color,top}) => {
  return (
    <div className='RvmemBox' style={{position:"absolute",top:top,backgroundColor:color}}>
        <h1 className='mem-review'>Giới thiệu thành viên</h1>
        <div className='memlistbox'>
        <ul className='mem-cointainer'>
            <li className='mems'><Link className='memRe' to="/10A3Web/HuuThanh">Hữu Thành</Link></li>
            <li className='mems'><Link className='memRe' to="/10A3Web/MinhNhat">Minh Nhựt</Link></li>
            <li className='mems'><Link className='memRe' to="/10A3Web/MinhMan">Minh Mẫn</Link></li>
            <li className='mems'><Link className='memRe' to="/10A3Web/PhuHao">Phú Hảo</Link></li>
        </ul>
        </div>
       
    </div>
  )
}
