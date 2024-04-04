import { useState, useRef, useEffect } from 'react';
import './Experience.css'

function Experience({date, company, url, title, sub, hover_callback}) {
  const [isHovered, setIsHovered] = useState(false)

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

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    if (isIntersecting) {
      hover_callback(company)
    }
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <>
    <div ref={ref} style={{height: "10px"}}/>
      <div className={isHovered?"border":null} style={{padding: "10px"}}>
        <div className="row" 
          onMouseOver={()=>set_hover()} 
          onMouseOut={()=>set_unhover()} 
          onClick={()=>goto()}
        >
          <div className="col-2 px-3" >
            {date}
          </div>
          <div className="col-10" >
            <div class="card-body">
              <h5 class="card-title">{company}</h5>
                <p class="card-text lead">{title}</p>
                <p>{sub}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience;
