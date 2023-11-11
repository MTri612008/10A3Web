import React, { useState }  from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
import { ReviewMem } from './ReviewMem';
import './HomePageStyle.css'
const HomePage = () => {
    const [action,setAction] = useState("")
    return (
        <div className='containall'>
          
            <div className="top-menu">
                <ul className='top-me-item-cointaner'>
                    <li className='top-me-item Text-item'>Tài Khoản MXH của chủ web</li>
                    <li className='top-me-item MXH'><a className='facebook' href="https://www.facebook.com/profile.php?id=100040272857568"></a></li>
                    <li className='top-me-item MXH'><a className='Github' href="https://github.com/Mtri612008"></a></li>
                    <li className='top-me-item MXH'><a className='Discord' href="https://discord.com/channels/@me/1119268359318552639"></a></li>
                </ul>
            </div>
            <div className='top-cointainer'>
            <div className='TopBox'>
            <h1 className='IntroText'>Welcome To 10A3</h1>
            <h2 className="IntroText sologan">Sologan: trên con đường thành công không có bước chân kẻ lười biến</h2>
            </div>
            
           <div className="Homepic" onClick={()=>{setAction("Fullsc")}} >
               
           </div>
           <div className="paragContain">
               <h1 className='TextIntro'>Giới thiệu lớp</h1>
               <span className='parag'>Hiii chúng mình là 10A3,các thành viên của 10A3 điều rất thân thiện và cá tính
thành viên của lớp chúng mình đều rất đoàn kết với nhau và nỗ lực,phấn đấu
học tập để có thể đạt được kết quả tốt.Nhưng các thành viên của tổ 2(6 thằng ngồi bàn cuối) lại có tiền sử
về các bệnh tâm thần như:tâm thần phân liệt(PTSD),rối loạn lưỡng cực(OCD),Động kinh...,6 thằng điên này
còn là cái gai,một mắt xích yếu trong một tập thể mạnh.Các thành viên tiêu biểu của tổ 2 có tiền sử về
các bệnh tâm thần gồm:Thành(a.k.a: con khỉ nhút nhát),Trí(a.k.a: ma xương),Mẫn(a.k.a: sói cô đơn),Nhựt(a.k.a: con chó bên Nhật),
Hảo(a.k.a:giọng cười quyến rũ),Khoa(a.k.a:con heo biết quay).Tóm lại các thành viên của lớp chúng mình rất thân thiện và đoàn kết
(trừ 6 thằng điên ở tổ 2),ngoài ra lớp chúng mình còn có cô chủ nhiệm rất dễ thương và quan tâm tới học sinh nữa</span>
           </div>
          
        </div>
            <div className='bottom-cointainer'>
                <div className='phoneparagContain'> 
                <h2 className='TextIntro'>Giới thiệu lớp</h2>
                <span className='parag'>Hiii chúng mình là 10A3,các thành viên của 10A3 điều rất thân thiện và cá tính
thành viên của lớp chúng mình đều rất đoàn kết với nhau và nỗ lực,phấn đấu
học tập để có thể đạt được kết quả tốt.Nhưng các thành viên của tổ 2(6 thằng ngồi bàn cuối) lại có tiền sử
về các bệnh tâm thần như:tâm thần phân liệt(PTSD),rối loạn lưỡng cực(OCD),Động kinh...,6 thằng điên này
còn là cái gai,một mắt xích yếu trong một tập thể mạnh.Các thành viên tiêu biểu của tổ 2 có tiền sử về
các bệnh tâm thần gồm:Thành(a.k.a: con khỉ nhút nhát),Trí(a.k.a: ma xương),Mẫn(a.k.a: sói cô đơn),Nhựt(a.k.a: con chó bên Nhật),
Hảo(a.k.a:giọng cười quyến rũ),Khoa(a.k.a:con heo biết quay).Tóm lại các thành viên của lớp chúng mình rất thân thiện và đoàn kết
(trừ 6 thằng điên ở tổ 2),ngoài ra lớp chúng mình còn có cô chủ nhiệm rất dễ thương và quan tâm tới học sinh nữa</span>
                </div>
            </div>
            <ReviewMem top="1400px"></ReviewMem>
            <div className='fbcmt'>
            <FacebookProvider FacebookProvider appId="660285872919937" >
          <Comments href="https://mtri612008.github.io" />
          
        </FacebookProvider>
            </div>
           
            <div className={action==="Fullsc"?"FullScPic":"noFsc"} onClick={()=>{setAction("")}}></div>
        </div>
        
    );
}

export default HomePage;
