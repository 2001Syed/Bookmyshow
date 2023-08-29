import React from 'react'
import Movies from './Movies'
import Courasel from './Courasel'

import "./Home.css"
import Stream from './Stream'
import Premier from './Premier'
function Home() {
  return (
    <div>
        <div className="courasel">
          <Courasel></Courasel>
        </div>
        <div className="shows">
                <Movies img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE2LjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg"
                    name="King Of Kotha"
                    para="Action/Drama/Crime"></Movies>
                <Movies
                    img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OS42SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367150-xaabdbsawm-portrait.jpg"
                    name="Ramachandra Boss and Co"
                    para="Action/Comedy/Thriller"></Movies>
                <Movies
                    img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg"
                    name="RDX"
                    para="Action/Drama/Family"></Movies>
                <Movies img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMTguNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg"
                    name="Jailer"
                    para="Action/Drama/Thriller"></Movies>
                <Movies
                    img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTM2LjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg"
                    name="Dream Girl 2"
                    para="Comedy/Drama/Romantic"></Movies>
            </div>
            <div>
              <Stream></Stream>
            </div>
            <div className='premier-div'>
              <div className="premier">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" width={"100%" } />
              </div>
              <div className="premier-heading">
                <h1 >Premieres </h1>
                <p>Brand new release every friday</p>
              </div>
            <Premier></Premier>
            </div>
      {/* <div>
        <AllPlaces></AllPlaces>
      </div>
      <div>
        <OtherCities></OtherCities>
      </div> */}

    </div>
  )
}

export default Home
