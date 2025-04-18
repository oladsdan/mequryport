import React, { useState } from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import { photos } from './data/photo';
import PortPhotos from './portPhotos';
import PortPhotosViewer from './portPhotosViewer';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
    
    const [photosList, setPhotosList] = useState(photos);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewerOpen, setViewerOpen] = useState(false);

    console.log(photosList);



    const openViewer = (index) => {
        setCurrentIndex(index);
        setViewerOpen(true);    
        document.body.style.overflow = "hidden"; // Disable scrolling
        // document.body.classList.add('hide');
    }
    
    const closeViewer = () => {
        setViewerOpen(false);
        document.body.style.overflow = "";
    };

    const handleNavigate = (index) => {
        setCurrentIndex(index);
    };
    




    return(
        <div className="container">
            <GlobalStyles/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Portfolio</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
            <Masonry
                className={"row my-gallery-class"} elementType={"div"}>
               {photosList.map((photo, index) => (
                    <PortPhotos 
                        key={index} 
                        photo={photo} 
                        onClick= {() => openViewer(index)}
                        />
               ))}
            </Masonry>
            
            <PortPhotosViewer
                photos={photosList}
                currentIndex={currentIndex}
                isOpen={viewerOpen}
                onClose={closeViewer}
                onNavigate={handleNavigate}
            />


        </div>
    );
}

export default Gallery;