import React from 'react'

const PortPhotos = ({photo, onClick}) => {
  return (
    <div className="col-lg-4 image-element-class de_modal de_modal"
                    data-aos="fade-up"
                    data-aos-once="true"
                    onClick={onClick}>
        <div className="card-image-1">  
            <img src={photo?.src} alt={photo?.alt}/>
        </div>
    </div>
  )
}

export default PortPhotos