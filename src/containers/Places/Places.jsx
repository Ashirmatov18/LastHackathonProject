import React from 'react'
import { Link } from 'react-router-dom'
import './Places.css'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


const Places = () => {
  return (
    <>
      <h1 className='h1'>УСЛУГИ</h1>
      <div className='places'>
        <Zoom left>
          <div className="place china">
            <Link className='link' to='/china'>
              <div className='logo-china'>
              </div>
            </Link>
          </div>  
        </Zoom>
        <Zoom top>
          <div className="place coffee">
            <Link className='link' to='/coffee'>
              <div className='logo-coffee'>
              </div>
            </Link>
          </div>
        </Zoom>
      </div>
      {/* <div className='back-slogan'> */}
        {/* <div className='slogan' > */}
          {/* <div className='slogan-desc1'> */}
          {/* <Slide left>
            <h1>АССАЛАМ АЛЕЙКУМ</h1>
          </Slide> */}
          {/* </div> */}
          {/* <div className='slogan-desc2'> */}
            {/* <Slide right>
              <h1>Любая деталь важна, <br/> из деталей состоит целое</h1>
            </Slide> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Places