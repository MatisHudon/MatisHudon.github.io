import { Tooltip } from 'react-tooltip'
import python from '../assets/python.png';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';

import nvidia from '../assets/nvidia.png';
import opengl from '../assets/opengl.png';
import metal from '../assets/metal.png';

import js from '../assets/js.png';
import react from '../assets/react.png';
import html from '../assets/html.png';

import linux from '../assets/linux.png';
import apple from '../assets/apple.png';
import bash from '../assets/bash.png';
import vim from '../assets/vim.png';
import nvim from '../assets/neovim.png';

function Skills() {
  return (
    <div class="container-fluid">
    <div className="row">
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={python} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={c} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={cpp} className="img-fluid"/>
      </div>

      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={nvidia} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={opengl} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={metal} className="img-fluid"/>
      </div>

      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={js} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={react} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={html} className="img-fluid"/>
      </div>


      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={linux} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={apple} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={bash} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={nvim} className="img-fluid"/>
      </div>
      <div class="col-lg-1 col-md-2 col-sm-3 col-3">
        <img src={vim} className="img-fluid"/>
      </div>
    </div>
      {/*
    <Tooltip anchorSelect=".python">
        <p>Pytorch</p>
        <p>Tensorflow</p>
    </Tooltip>
    */}
    </div>
  )
}
export default Skills;
