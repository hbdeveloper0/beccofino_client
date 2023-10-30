import React from 'react'
import './Content4.css'

const sliderMianTxt = [
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life. Ethan Morency This is true authentic Italian restaurant. The owner comes around and introduces himself. The flavor in the food is amazing and flavorful. This is not American restaurant don’t expect American result . It’s small and cozy I enjoyed my time. Hint get lobster it will have you coming back for more and desert is amazing !',
    'Had our date night here. Food was amazing, everything we ate was very flavorful. Very intimate ambience. Felt like we were back in Italy. We had the grilled mixed meats, 2 different pastas, desserts and the wine. We will definitely make this our anniversary stop.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Went for Friday night dinner with friends. Great atmosphere - the owners expertly suggested a wine for our meal, took time to chat about the menu, and welcomed us into the restaurant similar to the way a lifelong friend would welcome you into their home. I highly recommend the mixed meat or the cacio e pepe, the latter of which is prepared in a wheel of cheese table-side. The food, atmosphere, and service handily made this the best meal I have had since moving to Tampa. I will be returning for many date nights and birthdays in the future.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life. ',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.  Ethan Morency This is true authentic Italian restaurant. The owner comes around and introduces himself. The flavor in the food is amazing and flavorful. This is not American restaurant don’t expect American result . ',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.  Ethan Morency This is true authentic Italian restaurant. The owner comes around and introduces himself. ',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. You will be taken care of if you choose this as your dinner spot. Will not disappoint. Homemade pasta and the greatest steak I’ve ever had in my entire life.',
    'Best Italian in Florida. You will not find a better meal with better people. Prime date spot. ',

]

const sliderNameTxt = ['Danielle Hewitt', 'M Estrada', 'Chase', 'Fritz Eichelberger', 'Lara Stack', 'TD A', 'Valeriia Turchaninova', 'Aida Penunuri', 'Michele Burns', 'Maria Gabriela Morillo Infante', 'Brooke Palemine', 'Tarrish Rajbansie', 'Jinny Gunn', 'Mitch', 'Maczura', 'Ethan Morency']

const Content4 = () => {
    return (
        <div className='container-fluid c4-main-bg'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-lg-12'>
                        <p className='customer-txt'>Customers reviews</p> 
                        <p className='what-txt'>What people say?</p>      
                        <div id="carousel2ExampleControls" className="carousel slide"  data-ride="carousel">
                            <div className='container-fluid'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-8 m-auto'>
                                            <div className="carousel-inner  slider-bg-set">
                                                {sliderMianTxt.map((txt, index) => (
                                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                        <p className='slider-main-txt'>{txt}</p>
                                                        <p className='slider-name-txt'>{sliderNameTxt[index]}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <a class="carousel-control-prev" href="#carousel2ExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel2ExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Content4