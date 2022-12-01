import React from 'react';

import ButtonVerde from '../components/subComponents/buttonVerde.js';
import '../App.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Planos ()  {
      return(
        <div>
          <Menu/>
          <div className='painelSecundario'>
            <ul>
              <li><h3>Ambiente digital gamificado para organização e otimização de times de<br/> 
              desenvolvimento de </h3></li>
              <li><ButtonVerde name={"ENTRE GRATUITAMENTE"}/></li>
            </ul>
          </div>
          <Rodape/>
        </div>
      );
}

export default Planos;

// function Planos() {
//   return (
//     <div>
//       <Menu/>
//       <div className='painelSecundario'>
//         <ul>
//           <li><h3>Ambiente digital gamificado para organização e otimização de times de<br/> 
//           desenvolvimento de </h3></li>
//           <li><ButtonVerde name={"ENTRE GRATUITAMENTE"}/></li>
//         </ul>
//       </div>
//       <Rodape/>
//     </div>
//   );
// }

// export default Planos;