import React from 'react'
import './Partner.css'
import abb from '../../../Assets/companies/abb-1.svg'
import controltech from '../../../Assets/companies/control-techniques.svg'
import danfoss from '../../../Assets/companies/danfoss-3.svg'
import emerson from '../../../Assets/companies/emerson-electric.svg'
import fanuc from '../../../Assets/companies/fanuc-1.svg'
import fuji from '../../../Assets/companies/fuji-electric-2.svg'
import honeywell from '../../../Assets/companies/honeywell-logo.svg'
import nidec from '../../../Assets/companies/nidec-company-logo.svg'
import omron from '../../../Assets/companies/omron.svg'
import panasonic from '../../../Assets/companies/panasonic.svg'
import parker from '../../../Assets/companies/parker-hannifin.svg'
import schneider from '../../../Assets/companies/schneider-electric-2007-1.png'
import siemens from '../../../Assets/companies/siemens-logo-svgrepo-com.svg'
import yaskawa from '../../../Assets/companies/yaskawa.svg'
function Partner() {
  return (
    <div className="Partner">
      <div className="container-partner">
        <div className='title-container-partner'>
          <span className='title-partner'>Merek yang Kami Repair</span>
        </div>
        <img src={abb} alt="" />
        <img src={controltech} alt="" />
        <img src={danfoss} alt="" />
        <img src={emerson} alt="" />
        <img src={fanuc} alt="" />
        <img src={fuji} alt="" />
        <img src={honeywell} alt="" />
        <img src={nidec} alt="" />
        <img src={omron} alt="" />
        <img src={panasonic} alt="" />
        <img src={parker} alt="" />
        <img src={schneider} alt=""/>
        <img src={siemens} alt="" />
        <img src={yaskawa} alt="" />
      </div>
    </div>
  )
}

export default Partner