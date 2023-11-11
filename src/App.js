import logo from './logo.svg';
import './App.css';
import HomePage from './Comp/HomePage';
import { ReviewMem } from './Comp/ReviewMem';
import {Routes,Route} from 'react-router-dom';
import Member from './Comp/Member';
import huuthanh from './Comp/Res/huuthanh.jpg'
import minhnhut from './Comp/Res/minhnhut.jpg'
import minhman from "./Comp/Res/minhman.jpg"
import phuhao from "./Comp/Res/phuhao.jpg";
import { FacebookProvider, Comments } from 'react-facebook';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/10A3Web' element={<HomePage></HomePage>}></Route>
        <Route path='/10A3Web/PhuHao' element={<Member MemName=" Phú Hảo" nickname="Con của ông vua trong Trạng Quỳnh" memimg={phuhao} facelink="https://www.facebook.com/" chieucao="1m95" cannang="20kg" chieudai="30cm" chisoxl="100xl" />}></Route>
        <Route path='/10A3Web/MinhMan' element={<Member MemName=" Minh Mẫn" nickname="Đại ca trường mẫu giáo" memimg={minhman} facelink="https://www.facebook.com/" chieucao="3m" cannang="99,99,99kg" chieudai="10km" chisoxl="0xl" />}></Route>
        <Route path='/10A3Web/HuuThanh' element={<Member MemName="Lê Hữu Thành" nickname="Cháu thầy Quốc" memimg={huuthanh} chieucao="1m2" cannang="1,2gram" chieudai="1mm" chisoxl="99999999xl" facelink="https://www.facebook.com/profile.php?id=100076238896447"></Member>}></Route>
        <Route path='/10A3Web/MinhNhat' element={<Member MemName="Ngu Minh Nhựt" nickname="bộ trưởng bộ hài cốt" memimg={minhnhut} chieucao="1m83" cannang="100kg" chieudai="2cm" chisoxl="200xl" facelink="https://www.facebook.com/profile.php?id=100079284352331" />}></Route>
        <Route path='/' element={<HomePage></HomePage>}></Route>

       
      </Routes>
    
     
      
    </div>
  );
}

export default App;
