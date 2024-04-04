import { useState } from 'react';
import Logo from './Logo';

function Linklist() {
  const [isHovered, setIsHovered] = useState(false)

  function goto (url){
     window.open(url);
  }

  return (
    <>
    <div style={{display: "table-row"}}>
      <div 
          onMouseOver={()=> setIsHovered("acca")}
          onMouseOut={()=>setIsHovered(false)}
          onClick={()=>goto("https://scholar.google.fr/citations?user=w5NptBcAAAAJ&hl=en")}
          style={{display: "table-cell"}}
      >
        <Logo id="acca" name="acca2" width={isHovered === "acca" ? 35: 30} height={isHovered === "acca" ? 35: 30}  />
        &nbsp;
      </div>

      <div 
          onMouseOver={()=> setIsHovered("li")}
          onMouseOut={()=>setIsHovered(false)}
          onClick={()=>goto("https://fr.linkedin.com/in/matis-hudon-49a764116?trk=public_post_feed-actor-name")}
          style={{display: "table-cell"}}
      >
        <Logo name="linkedin2" width={isHovered === "li" ? 35: 30} height={isHovered === "li" ? 35: 30}/>
        &nbsp;
      </div>

      <div 
          onMouseOver={()=> setIsHovered("mail")}
          onMouseOut={()=>setIsHovered(false)}
          onClick={()=>goto("mailto:matishudon@tutamail.com")}
          style={{display: "table-cell"}}
      >
        <Logo name="mail2" width={isHovered === "mail" ? 35: 30} height={isHovered === "mail" ? 35: 30} />
        &nbsp;
      </div>
    </div>
    </>
  )
}

export default Linklist;
