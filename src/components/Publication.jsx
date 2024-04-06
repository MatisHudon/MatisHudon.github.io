import { useState, useRef, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useScreenSize from './UseScreenSize';
import './Experience.css'

function Experience({title, authors, pdf, cite, video, img, github, link}) {
  const [isHovered, setIsHovered] = useState(false)
  const [showCopied, setShowCopied] = useState(false);
  const screenSize = useScreenSize();

  function ToggleCopied(){
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  }

  function set_hover () {
    hover_callback(company);
    setIsHovered(true);
  }

  function set_unhover () {
    hover_callback(false);
    setIsHovered(false);
  }

  function goto (){
     window.open(url);
  }

  return (
    <>
        <div className="row">
        {img &&
          <div className="col-3">
          {(screenSize.width > 990) && <img  src={img}/>}
          </div>}
        <div className={(img && (screenSize.width > 990)) ? "col-9": "col-12"}>
          <div class="card-body">
            <h5 class="card-title strong" >{title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{authors}</h6>
            {pdf && 
              <>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href={pdf} target="_blank" rel="noopener">pdf</a>
              &nbsp;
              </>
            }
            {video && 
              <>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href={video} target="_blank" rel="noopener">video</a>
              &nbsp;
              </>
            }
            {github && 
              <>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href={github} target="_blank" rel="noopener">github</a>
              &nbsp;
              </>
            }
            {link && 
              <>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href={link} target="_blank" rel="noopener">link</a>
              &nbsp;
              </>
            }
            {cite && 
              <>
              <CopyToClipboard text={cite} onCopy={ToggleCopied}>
                <button class="btn btn-outline-primary my-1 mr-1 btn-sm" href={cite} target="_blank" rel="noopener">cite</button>
              </CopyToClipboard>
                &nbsp;
              {showCopied && <small className="text-muted">Copied!</small>}
              </>
            }
          </div>
        </div>
      </div>
      <br/>
    </>
  )
}

export default Experience;
