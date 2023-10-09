import React, { useState } from 'react'
import "./Member.css"


const Member = ({MemName,nickname,memimg,facelink,instalink,spotlink,steamlink,cannang,chieucao,chieudai,chisoxl,persontit}) => {

    const [action,setAction] = useState("TinhCach")
    if(action=="ThanhTuu"){
        persontit = "Thành Tựu"
    }else if(action == "TinhCach"){
        persontit = "Tính Cách"
    }else if(action == "DiemManh"){
        persontit = "Điểm mạnh"
    }else if(action == "DiemYeu"){
        persontit = "Điểm yếu"
    }

    return (
        <div>
            <div className="memPic" style= {{backgroundImage: `url(${memimg})`}}>
                <div className='meminf-cointainer'>
                    <h1 className="memname">{MemName}</h1>
                    <h4 className="nickname">({nickname})</h4>

                    <div className="memSocialacc">
                    <ul className='Socialacc-cointainer'>
                        <li className="SocialaccList"><a className='SocialAcc phaybut' href={facelink}> </a></li>
                        <li className="SocialaccList"><a className='SocialAcc intagam' href={spotlink}> </a></li>
                        <li className="SocialaccList"><a className='SocialAcc sobotifi' href={instalink}> </a></li>
                        <li className="SocialaccList"><a className='SocialAcc soteam' href={steamlink}> </a></li>
                    </ul>
                    <ul className="appName-container">
                        <li className='AppNameList'>facebook</li>
                        <li className='AppNameList'>instagram</li>
                        <li className='AppNameList'>..Spotify</li>
                        <li className='AppNameList'>. . Steam</li>
                        </ul>                    
                </div>
                </div>
            </div> <br />

            <div className="memPhysical-box">
                    <ul className="memPhysContainer">
                        <li className="memPhysList">
                            <div className="memHeight-box">
                                <h2 className="memHeight">Chiều cao</h2>
                                <h3 className="memHeightVal">{chieucao}</h3>
                            </div>
                        </li>
                        <li className="memPhysList">
                        <div className="memHeight-box">
                                <h2 className="memHeight">Cân nặng</h2>
                                <h3 className="memHeightVal">{cannang}</h3>
                            </div>
                        </li>
                        <li className="memPhysList">
                        <div className="memHeight-box">
                                <h2 className="memHeight">Chỉ số xàm l</h2>
                                <h3 className="memHeightVal">{chisoxl}</h3>
                            </div>
                        </li>
                        <li className="memPhysList">
                        <div className="memHeight-box">
                                <h2 className="memHeight">Chiều dài</h2>
                                <h3 className="memHeightVal">{chieudai}</h3>
                            </div>
                        </li>
                    </ul>
               </div>

               <div className="memIntro-box">
                   <h1 className='GioiThieuTit'>Giới thiệu</h1>
                   <h4 className="introparag">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eveniet
                    velit doloribus tempora fugit, perferendis nemo odio sunt praesentium?
                    Ullam eligendi, iusto exercitationem unde minus 
                    fugit voluptatum atque et optio.</h4>
                    <div className="memAvt" style= {{backgroundImage: `url(${memimg})`}}>
                        <div className="tvin4box">
                        <h3 className='tenTv'>{MemName}</h3>
                        <h4 className="Tvnickname">({nickname})</h4>
                        </div>
                    
                    </div>
                    <div className="mem-character-box">
                            <ul className='memDetailMenu'>
                                <li className="memDetailLi tinhcach"><button className='submit'  onClick={()=>{setAction("TinhCach")}}>Tính cách</button></li>
                                <li className="memDetailLi thanhtuu"><button className='submit' onClick={()=>{setAction("ThanhTuu")}}>Thành tựu</button></li>
                                <li className="memDetailLi diemmanh"><button className='submit'  onClick={()=>{setAction("DiemManh")}}>Điểm mạnh</button></li>
                                <li className="memDetailLi diemyeu"><button className='submit'  onClick={()=>{setAction("DiemYeu")}}>Điểm yếu</button></li>
                            </ul>
                        </div>
                        <div className="parag-box">
                            <h3 className='randomname'>{persontit}</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta distinctio amet corporis, nostrum quisquam ea velit enim maxime magni. Debitis assumenda rem ipsum mollitia at, fugiat nemo laborum dolore?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequuntur cumque amet, blanditiis, quos doloremque architecto veniam accusamus quia dolores maxime sed labore praesentium! Laudantium aliquam totam tempora ipsa eligendi!
                        </div>
               </div>

        </div>
    );
}

export default Member;
