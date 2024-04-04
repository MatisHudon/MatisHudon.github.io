import TyndallFx from '../assets/TyndallFx.png'
import Sevenss from '../assets/Sevenss.jpg'
import Trinity from '../assets/Trinity.jpg'
import Inria from '../assets/Inria.png'
import Technicolor from '../assets/Technicolor.png'
import { CSSTransition } from 'react-transition-group';

import '../index.css';

function CompLogo({id}) {

  let timeout = 800;

  return (
    <>
      <CSSTransition in={id === "Tyndall FX"} timeout={timeout} classNames="my-node" unmountOnExit style={{position:"absolute"}}>
        <img className="v-center" src={TyndallFx}/>
      </CSSTransition> 
      <CSSTransition in={id === "7 Sensing Software"} timeout={timeout} classNames="my-node" unmountOnExit style={{position:"absolute"}}>
        <img src={Sevenss}/>
      </CSSTransition> 
      <CSSTransition in={id === "Trinity College Dublin V-Sense"} timeout={timeout} classNames="my-node" unmountOnExit style={{position:"absolute"}}>
        <img src={Trinity}/>
      </CSSTransition> 
      <CSSTransition in={id === "Technicolor and Inria"} timeout={timeout} classNames="my-node" unmountOnExit style={{position:"absolute"}}>
        <div className="row">
          <img src={Technicolor} alt="logo Technicolor" />
          <img src={Inria} alt="logo Inria" />
        </div>
      </CSSTransition> 
    </>
  )
}

export default CompLogo;
