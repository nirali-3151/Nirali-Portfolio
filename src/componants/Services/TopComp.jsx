import React from 'react'
import "./index.css"
import Image from '@componants/ImageComp/Image'
import { SERVICES_IMAGES_CONST } from '@constants/images'
import Skills from '@layouts/Home/Skills/Skills'

const TopComp = () => {
    return (
        <div>
            <div className='services-top-image-wrapper'>
                <Image
                    image={SERVICES_IMAGES_CONST.webDevelopment}
                    height={"250px"}
                />
                <div class="overlay-text">Web Development</div>
            </div>

        </div>
    )
}

export default TopComp
