import Logo from './Logo';

function Education() {
  return (
    <>
    <div className="row">
      <div className="col-2" >
        <Logo name="acca2" width="30" height="30"/>
      </div>
      <div className="col-10" >
        <div class="card-body">
          <h5 class="card-title">PhD Computer Graphics/Vision, 2016</h5>
          <h6 class="card-subtitle mb-2 text-muted">Rennes 1 Univeristy, France</h6>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-2" >
        <Logo name="acca2" width="30" height="30"/>
      </div>
      <div className="col-10" >
        <div class="card-body">
          <h5 class="card-title">Engineering Degree in Electronic, 2013</h5>
          <h6 class="card-subtitle mb-2 text-muted">ENSEIRB-MATMECA, INP Bordeaux, France</h6>
        </div>
      </div>
    </div>
    </>
  )
}

function Interests() {

  return (
    <>
    <div style={{height: "1px"}}/>
      <div style={{padding: "1px"}}>
        <div className="row">
          <div className="col-5" >
            <div class="card-body">
              <h2 class="card-title">Interests</h2>
                <p class="card-text lead">
                  <ul>
                  <li>Deep ML and Generative AI</li>
                  <li>Computer Graphics and Vision</li>
                  <li>Parallel computing</li>
                  <li>Empowering Creatives</li>
                  </ul>
                </p>
            </div>
          </div>
          <div className="col-7" >
            <div class="card-body">
              <h2 class="card-title">Eductation</h2>
                <Education />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Interests;
