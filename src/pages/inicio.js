import '../App.css';
import ButtonVerde from '../components/subComponents/buttonVerde.js';
import React from 'react';

import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

// const Inicio = () => {
//   return class extends React.Component {
//     render(){
//       return(
//         <div>
//           <Menu/>
//           <div className='painelInicial'>
//             <ul>
//               <li>
//                 <h3>Ambiente digital gamificado para organização e otimização de times de <br/> 
//                     desenvolvimento de software
//                 </h3>
//               </li>
//               <li><ButtonVerde name={"ENTRE GRATUITAMENTE"}/></li>
//             </ul>
//           </div>
//           <Rodape/>
//         </div>
//       )
//     }
//   }
// }

function Inicio() {
  return (
    <div>
      <Menu />
      <div className='painelInicial'>
        <ul>
          <li><h3>Ambiente digital gamificado para organização e otimização de times de<br/> 
          desenvolvimento de software</h3></li>
          <li><ButtonVerde name={"ENTRE GRATUITAMENTE"}/></li>
        </ul>
      </div>
      <Rodape/>
    </div>
  );
}

export default Inicio;