import { SERVICES_CONST } from '@constants/index'
import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
import "./Services.css"

const Services = () => {
  return (
    <div className='container'>
      <div className='services-main-wrapper'>
        <div className='text-center mb-3'>
          <div className='section-title'>
            My Quality Services
          </div>
        </div>
        <div>
          {SERVICES_CONST?.map((service, index) => {
            return (
              <div key={index} className='services-main-wrapper-inner'>
                <div className='first'>
                  <div className='service-title'>
                    {service.name}
                  </div>
                  <div className='second text1'>
                    {service.desc}
                  </div>
                </div>
                <div className='third'>
                  <GoArrowDownRight size={18} />
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Services
