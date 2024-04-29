import { useState, useRef } from 'react';
import Linklist from './Linklist';
import { Chrono } from "react-chrono";
import Experience from './Experience';
import CompLogo from './CompLogo';
import useScreenSize from './UseScreenSize';
import Interests from './Interests';
import Publication from './Publication';
import Skills from './Skills';

import './Hero.css';

import dynEnvMap from '../assets/dynEnvMap.png'
import autoPal from '../assets/autoPal.png'
import celAnim from '../assets/celAnim.png'
import deepNormals from '../assets/deepNormals.png'
import flashes from '../assets/flahes.png'
import lightComp from '../assets/lightComp.png'
import shapeAndRef from '../assets/shapeAndRef.png'
import dsb from '../assets/dsb.png'

function Hero() {

  const [isHovered, setIsHovered] = useState(false)

  const hover_callback = (value) => {
    setIsHovered(value);
  }
  console.log(isHovered);
  const screenSize = useScreenSize();

  const pubRef = useRef(null); 
  const aRef = useRef(null); 
  const expRef = useRef(null); 
  const patRef = useRef(null); 
  const skillRef = useRef(null); 

  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3" >
            <div className="sticky-lg-top sticky-md-top">
              <div className="row">
                <div style={{height: "125px"}}/>
                  <h1 className="display-5"> Matis Hudon</h1>
                  <h2>
                    <p><small class="text-muted">Research Scientist</small></p>
                  </h2>
                  <Linklist/>
                <div style={{height: "30px"}}/>
              </div>
              <div className="row">
                <button className="btn btn-lg border-0 btn-block text-start" onClick={() => {aRef.current.scrollIntoView({behavior: 'smooth'})}}> About </button>
                <button className="btn btn-lg border-0 btn-block text-start" onClick={() => {skillRef.current.scrollIntoView({behavior: 'smooth'})}}> Skills </button>
                <button className="btn btn-lg border-0 btn-block text-start" onClick={() => {expRef.current.scrollIntoView({behavior: 'smooth'})}}> Experience </button>
                <button className="btn btn-lg border-0 btn-block text-start" onClick={() => {pubRef.current.scrollIntoView({behavior: 'smooth'})}}> Publications </button>
                <button className="btn btn-lg border-0 btn-block text-start" onClick={() => {patRef.current.scrollIntoView({behavior: 'smooth'})}}> Patents </button>
              </div>
              {/*(screenSize.width > 992) &&
                <div className="row">
                  <div style={{height: "30px"}}/>
                  <CompLogo id={isHovered}/>
                </div>
              */}
            </div>
          </div>
          <div className="col-sm-12 col-lg-9">
            <div style={{height: "60px"}}/>
            <h2 className="display-5" ref={aRef}> About </h2>
            <div style={{height: "10px"}}/>
            <p> Researcher with over 10 years of expertise in academia and entrepreneurship, specializing in computer vision, computer graphics, and imaging technologies. Led impactful projects in sensor technology and AI applications. Co-founder of Tyndall FX, focusing on R&D in emerging fields like NERF, 3D Gaussian splatting and vision transformers. Dedicated to pushing boundaries and achieving ambitious goals in technology and research. Skilled developer with a strong proficiency in various programming languages and frameworks.</p>
            <br/>
            <Interests/>
            <br/>
            <h1 className="display-5" ref={skillRef}> Skills </h1>
            <Skills/>
            <br/>
            <h1 className="display-5" ref={expRef}> Experience </h1>
            <Experience 
              date="2023-Today"
              company="Tyndall FX"
              url="https://tyndall-fx.com/"
              title="Founder and R&D Head"
              sub=<p> As a founder at Tyndall FX, a dynamic startup environment presented me with novel challenges, fostering the development of new software engineering proficiencies. I’m deeply involved in development efforts, but my role extends beyond that, I lead a team of skilled individuals, driving them toward ambitious objectives. Within Tyndall, I've cultivated extensive expertise in emerging fields like NERF and 3D Gaussian splatting, refining these techniques for enhanced quality, runtime efficiency, and training duration through the reimagining and optimization of GPU kernels (CUDA and Metal). Additionally, I've engaged in frontend and backend development for our application, leading to the acquisition of proficiency in frontend technologies such as JavaScript and React, as well as backend tools like SQL, asynchronous Python, and S3 storage management.</p>
              hover_callback={hover_callback}
            />
            <Experience 
              date="2019-2023"
              company="7 Sensing Software"
              url="https://7sensingsoftware.com/"
              title="Principal Scientist, Technical Lead, Staff Engineer"
              sub=<p>Joined 7ss in late 2019 as the inaugural member of the Paris vision team. Over three years, I played a pivotal role in the company's success and eventual exit. My contributions ranged from orchestrating technical interviews to recruit top-tier talent, to spearheading and overseeing major R&D initiatives. Leveraging my expertise in AI, Vision, and Graphics, I showcased the potential of our partner's (AMS OSRAM) future sensors. Notable projects I led from conception to realization include:             
              <ul>
                <br/>
                <li><strong>Light Sense</strong> A real-time AI-powered tool for accurately estimating local lighting, ensuring consistent rendering of virtual objects (AR/VR) and their shadows</li>
                <br/>
                <li><strong>Ultra depth</strong> Utilizing AI to produce high-resolution depth maps from rgb and low-resolution Lidar sensors</li>
                <br/>
                <li><strong>Local Auto White Balance</strong> An AI solution for achieving pixel-perfect white balance in challenging scenarios</li>
                <br/>
                <li><strong>Perfect Group Picture</strong> A precursor to Google's 'Best Take', developed before its official release</li>
              </ul>
              </p>
              hover_callback={hover_callback}
            />
            <Experience 
              date="2016-2019"
              company="Trinity College Dublin V-Sense"
              url="https://v-sense.scss.tcd.ie/"
              title="Post-Doctoral Research Fellow"
              sub=<p> I worked as a research Fellow with Professor Aljosa Smolic in the VSENSE team. My research interests included computer vision, acquisition, photorealistic and non-photorealistic rendering, data science, deep neural networks, and free viewpoint video technologies. During my PostDoc, I mostly focused on the making of tools (AI and non-AI) to empower 2D animators. Please take a look at the publications section for more details.</p>
              hover_callback={hover_callback}
            />
            <Experience 
              date="2013-2016"
              company="Technicolor and Inria"
              url="https://www.technicolor.com/fr"
              title="PhD Student"
              sub=<p> I completed my Ph.D. at Technicolor and Inria/Irisa (University of Rennes 1), where I gained valuable experience working alongside talented research teams. During my Ph.D., I developed an electronic system to synchronize flashes with a professional camera (Sony F65). This system allowed me to reconstruct the geometry and albedo of live scenes, enabling post-effects like relighting. My work mainly involved using C++ and CUDA programming languages.</p>
              hover_callback={hover_callback}
            />
            <h1 className="display-5" ref={pubRef}> Publications </h1>
            <Publication
              title="Deep Normal Estimation for Automatic Shading of Hand-Drawn Characters"
              authors="M Hudon, R Pagés, M Grogan, A Smolić"
              github="https://github.com/V-Sense/DeepNormals"
              video="https://youtu.be/1tZ-y0PzV8g"
              pdf="https://openaccess.thecvf.com/content_ECCVW_2018/papers/11131/Hudon_Deep_Normal_Estimation_for_Automatic_Shading_of_Hand-Drawn_Characters_ECCVW_2018_paper.pdf"
              cite="@inproceedings{hudon2018deep,
                      title={Deep Normal Estimation for Automatic Shading of Hand-Drawn Characters},
                      author={Hudon, Matis and Grogan, Mair{\'e}ad and Pag{\'e}s, Rafael and Smoli{\'c}, Aljo{\v{s}}a},
                      booktitle={European Conference on Computer Vision},
                      pages={246--262},
                      year={2018},
                      organization={Springer}
                    }"
              img={deepNormals}
            />

            <Publication
              title="2DToonShade: A stroke based toon shading system"
              authors="M Hudon, R Pagés, M Grogan, J Ondřej, A Smolić"
              pdf="https://www.sciencedirect.com/science/article/pii/S2590148619300032"
              video="https://www.youtube.com/watch?v=gmxfUw3BvDo&amp;feature=emb_title"
              cite="@article{hudon20192dtoonshade,
                    title={2DToonShade: A stroke based toon shading system},
                    author={Hudon, Matis and Grogan, Mair{\'e}ad and Pag{\'e}s, Rafael and Ond{\v{r}}ej, Jan and Smoli{\'c}, Aljo{\v{s}}a},
                    journal={Computers \& Graphics: X},
                    volume={1},
                    pages={100003},
                    year={2019},
                    publisher={Elsevier}
                    }"
              img={celAnim}
            />

            <Publication
              title="Deepstereobrush: Interactive Depth Map Creation"
              authors="Sebastian Knorr, Matis Hudon, Julian Cabrera, Thomas Sikora, Aljosa Smolic"
              pdf="http://elvera.nue.tu-berlin.de/files/1546Knorr2018.pdf"
              cite="@inproceedings{knorr2018deepstereobrush,
                    title={Deepstereobrush: Interactive depth map creation},
                    author={Knorr, Sebastian and Hudon, Matis and Cabrera, Julian and Sikora, Thomas and Smolic, Aljosa},
                    booktitle={2018 International Conference on 3D Immersion (IC3D)},
                    pages={1--8},
                    year={2018},
                    organization={IEEE}
                  }"
              img={dsb}
            />

            <Publication
              title="Dynamic Environment Mapping for Augmented Reality Applications on Mobile Devices"
              authors="R Monroy, M Hudon, A Smolić"
              github="https://github.com/rmonroy84/VSENSE_TANGO_AR"
              video="https://www.youtube.com/watch?v=Tl-LN8iygAo"
              pdf="https://arxiv.org/pdf/1809.08134"
              cite="@inproceedings {v.20181249,
                    booktitle = {Vision, Modeling and Visualization},
                    editor = {Beck, Fabian and Dachsbacher, Carsten and Sadlo, Filip},
                    title = {{Dynamic Environment Mapping for Augmented Reality Applications on Mobile Devices}},
                    author = {Monroy, Rafael and Hudon, Matis and Smolic, Aljosa},
                    year = {2018},
                    publisher = {The Eurographics Association},
                    ISBN = {978-3-03868-072-7},
                    DOI = {10.2312/vmv.20181249}
                    }"
              img={dynEnvMap}
            />

            <Publication
              title="Automatic Palette Extraction for Image Editing"
              authors="M Grogan, M Hudon, Daniel McCormack, A Smolić"
              pdf="https://v-sense.scss.tcd.ie/wp-content/uploads/2018/09/IMVIP18_palette.pdf"
              img={autoPal}
            />

            <Publication
              title="2D Shading for Cel Animation"
              authors="M Hudon, R Pagés, M Grogan, J Ondřej, A Smolić"
              pdf="https://www.researchgate.net/profile/Matis-Hudon/publication/325788674_2D_Shading_for_Cel_Animation/links/5b48b0d70f7e9b4637d5b704/2D-Shading-for-Cel-Animation.pdf"
              video="https://www.youtube.com/watch?v=4pFufShSt0c"
              cite="@inproceedings{hudon2018deep,
                      title={Deep Normal Estimation for Automatic Shading of Hand-Drawn Characters},
                      author={Hudon, Matis and Grogan, Mair{\'e}ad and Pag{\'e}s, Rafael and Smoli{\'c}, Aljo{\v{s}}a},
                      booktitle={European Conference on Computer Vision},
                      pages={246--262},
                      year={2018},
                      organization={Springer}
                    }"
              img={celAnim}
            />


            <Publication
              title="Automatic Light Compositing using Rendered Images"
              authors="M Hudon, R Cozot, K Bouatouch"
              pdf="http://cozot.free.fr/pdfs/dmiaf_2016.pdf"
              cite="@inproceedings{hudon2016automatic,
                    title={Automatic light compositing using rendered images},
                    author={Hudon, Matis and Cozot, R{\'e}mi and Bouatouch, Kadi},
                    booktitle={Digital Media Industry \& Academic Forum (DMIAF)},
                    pages={176--179},
                    year={2016},
                    organization={IEEE}
                  }"
              img={lightComp}
            />

            <Publication
              title="Shape and Reflectance from RGB-D Images using Time Sequential Illumination"
              authors="M Hudon, A Gruson, P Kerbiriou, R Cozot, K Bouatouch"
              pdf="https://data.adrien-gruson.com/research/2016_RGBD-Sequential_Hudon.pdf"
              cite="@inproceedings{hudon2016shape,
                    title={Shape and reflectance from rgb-d images using time sequential illumination},
                    author={Hudon, Matis and Gruson, Adrien and Kerbiriou, Paul and Cozot, Remi and Bouatouch, Kadi},
                    booktitle={Intenational Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Applications (VISIGRAPP)},
                    volume={64},
                    pages={65--66},
                    year={2016}
                  }"
              img={shapeAndRef}
            />

            <Publication
              title="High speed sequential illumination with electronic rolling shutter cameras"
              authors="M Hudon, P Kerbiriou, A Schubert, K Bouatouch"
              pdf="https://openaccess.thecvf.com/content_cvpr_workshops_2015/W10/papers/Hudon_High_Speed_Sequential_2015_CVPR_paper.pdf"
              cite="@inproceedings{hudon2015high,
                    title={High speed sequential illumination with electronic rolling shutter cameras},
                    author={Hudon, Matis and Kerbiriou, Paul and Schubert, Arno and Bouatouch, Kadi},
                    booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition Workshops},
                    pages={66--73},
                    year={2015}
                  }"
              img={flashes}
            />
            <Publication
              title="Active illumination for high speed image acquisition and recovery of shape and albedo 
"
              authors="PhD Thesis"
              pdf="https://theses.hal.science/tel-01453365/"
            />

            <h1 className="display-5" ref={patRef}> Patents </h1>
              <Publication
                title="Illumination adapting method and picture recording arrangement"
                authors="Raoul Mallart, Josselin MANCEAU, Enrico CORTESE, Guillaume CORTES, Matis Hudon"
                link="https://patents.google.com/patent/WO2023232373A1/en"
              />

              <Publication
                title="Picture recording arrangement, light source and method for operating a picture recording arrangement"
                authors="Alessandro PIOTTO, Andrea DI-CHELE, Vladimir Gründling, Davide SOLIDA, Kian Boon Kelvin QUAH, Johannes Haase, Matis Hudon"
                link="https://patents.google.com/patent/WO2023232592A1/en"
              />

              <Publication
                title="3d reconstruction method and picture recording arrangement"
                authors="Enrico CORTESE, Josselin MANCEAU, Matis Hudon, Guillaume CORTES"
                link="https://patents.google.com/patent/WO2023232417A1/en"
              />

              <Publication
                title="Method and device for capturing frames of a scene under different illumination configurations"
                authors="Olivier Bureller, Matis Hudon, Paul Kerbiriou, Arno Schubert"
                link="https://patents.google.com/patent/EP2938065A1/en"
              />

              <Publication
                title="Image processing methods and systems for training a machine learning model to predict illumination conditions for different positions relative to a scene"
                authors="Matis Hudon, Guillaume CORTES, Toon Van Den Zegel"
                link="https://patents.google.com/patent/WO2023131544A1/en"
              />

              <Publication
                title="Image processing method and system for correcting colors of an input image representing a scene illuminated by multiple illuminants"
                authors="Matis Hudon, Elnaz Soleimani"
                link="https://patents.google.com/patent/WO2023066724A1/en"
              />

              <Publication
                title="Method and apparatus for acquiring a set of images illuminated by a flash"
                authors="Paul Kerbiriou, Matis HUDON, Olivier Bureller"
                link="https://patents.google.com/patent/US9769397B2/en"
              />

              <Publication
                title="Reflectance parameter estimation in real scenes using an rgb-d sequence"
                authors="Philippe Robert, Salma JIDDI, Matis HUDON"
                link="https://patents.google.com/patent/US20170084075A1/en"
              />

              <Publication
                title="Method and apparatus for estimating reflectance parameter and position of light source in scene"
                authors="ロバート，フィリップ, Robert Philippe, ジッディ，サルマ, Jiddi Salma, ハドン，マチス, Hudon Matis"
                link="https://patents.google.com/patent/JP2017102896A/en"
              />

              <Publication
                title="Method, apparatus and system for determining normal and reflectance parameters using sequential illumination"
                authors="Matis Hudon, Philippe Robert, Paul Kerbiriou"
                link="https://patents.google.com/patent/EP3151190A1/en"
              />

          </div>
        </div>
      </div>
  )
}

export default Hero;
