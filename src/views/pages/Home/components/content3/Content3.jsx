import React from 'react'
import './Content3.css'
import leftImg from '../../../../../assets/images/homePage/content3/20210331_183644-Medium.jpg'
import rightImg from '../../../../../assets/images/homePage/content3/20200314_184920-Large.jpg'
import knifeImg from '../../../../../assets/images/homePage/content3/Capture-removebg-preview.png'

const Content3 = () => {
    // useEffect(() => {
    //     // Function to move the image to the bottom when scrolling down
    //     function moveImageToBottom() {
    //       const img = document.querySelector('.knifeImg');
    
    //       if (img) {
    //         const windowScrollY = window.scrollY;
    //         const windowHeight = window.innerHeight;
    //         const imageHeight = img.clientHeight;
    
    //         // Calculate the position to move the image to the bottom
    //         const bottomPosition = windowScrollY + windowHeight - imageHeight;
    
    //         if (windowScrollY >= bottomPosition) {
    //           img.style.transform = `translateY(${bottomPosition}px)`;
    //         } else {
    //           img.style.transform = 'none'; // Reset position
    //         }
    //       }
    //     }
    
    //     window.addEventListener('scroll', moveImageToBottom);
    
    //     return () => {
    //       window.removeEventListener('scroll', moveImageToBottom);
    //     };
    //   }, []);
    return (
        <div className='container-fluid bg-margin-set'>
            <div className='container'>
                <div className='row'>
                    <h2 className='c3-h2-txt'>Menu Items</h2>
                </div>
                <div className='row knifeImg'>
                    <img src={knifeImg} alt='knifeImg' className='img-fluid m-auto'/>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4 left-row-set'>
                        <h4 className='dinner-txt'>Dinner</h4>
                        <p className='all-txt'>All of our menu items are made from scratch.. to order! Reservation is Suggested…</p>
                        <p className='all-txt'> Wednesday: <br/>
                            6:00 PM – 9:00 PM
                        </p>
                        <p className='all-txt'> Thursday: <br/>
                            6:00 PM – 9:00 PM
                        </p>
                        <p className='all-txt'> Fri to Sat: <br/>
                            6:00 PM – 10:30 PM
                        </p>
                        <img src={leftImg} alt='leftImg' className='img-fluid'/>
                    </div>

                    <div className='col-lg-2 middle-border'></div>
                    <div className='col-lg-4 right-row-set'>
                        <img src={rightImg} alt='rightImg' className='img-fluid'/>
                        <h4 className='dinner-txt pt-5'>Charcutherie</h4>
                        <p className='all-txt'>Norcino is the cold-cut master from the cities of Arezzo n Siena in Tuscany, come and taste the real deal!</p>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Content3