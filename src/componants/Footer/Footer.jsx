import React from 'react'
import "./Footer.css"
import { navigationBar } from '@constants/index'

const Footer = () => {
  return (
    <div className='footer-main-wrapper'>
      <div className='container'>
        <div className='footer-main-wrapper-inner'>
          {
            navigationBar.map((item) => {
              return (
                <>
                    <div className='footer-main-wrapper-inner-dropdown'>
                      <div className='footer-main-wrapper-inner-dropdown-main'>
                        <div className='footer-main-wrapper-inner-dropdown-main-title'>
                          {item.mainMenu}
                        </div>
                      </div>
                    </div>

                </>
              )
            })

          }
        </div>
      </div>
    </div>
  )
}

export default Footer
