import React from 'react'

import "./Eventslider.css"

function Eventslider() {

    var button = document.getElementById('esright');
    const rightstep = ()=>{
        var container = document.getElementById('eventimg');
        sideScroll(container,'esright', 25, 100 ,10);
    }

    const leftstep = ()=>{
        var container = document.getElementById('eventimg');
        sideScroll(container,'esleft', 25 , 100 ,10);     
    }

    function sideScroll(element,direction,speed,distance,step){
        let scrollAmount = 0;
        var slideTimer  = setInterval(() => {
           direction == 'esleft' ? element.scrollLeft -= step : element.scrollLeft += step;
           scrollAmount += step;
           if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
           }
        }, speed);
    }
  return (
    <div className='eventslidermain-div'>
        {/* <div>
            <button onclick={leftstep} id="esleft" className='eventsliderbtn esleft'>&#10094;</button>
        </div> */}
      <div className="Eventimg" id='eventimg'>
            <div className='slider'>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png" alt="" />
            </div>

            <div className='slider'>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png" alt="" />
            </div>
            <div className="slider">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png" alt="" />
            </div>
            <div className="slider">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png" alt="" />
            </div>
            <div className="slider">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png" alt="" />
            </div>
            <div className="slider">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/upskill-collection-202211140440.png" alt="" />
            </div>
            <div className="slider">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png" alt="" />
            </div>
            <div className="slider">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png" alt="" />
            </div>
        </div>
        {/* <div>
            <button onclick={rightstep} id="esright" className='eventsliderbtn esright'>&#10095;</button>
        </div> */}
    </div>
  )
}

export default Eventslider
