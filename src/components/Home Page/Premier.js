import React from 'react'
import "./Premier.css"

function Premier() {
    const everyfriday = [
        {
    
            imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00355405-uvzapgqrqj-portrait.jpg",
            name: "NO Hard Fellings",
            language: "English"
        },
        {
    
            imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00367166-eqdqhsgkda-portrait.jpg",
            name: "Sun Moon",
            language: "English"
        },
        {
    
            imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00367165-lygnshgqpj-portrait.jpg",
            name: "Drive My Car",
            language: "Japanese"
        },
        {
    
            imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366591-adclasnztt-portrait.jpg",
            name: "One Fine Morning",
            language: "French"
        },
        {
    
            imglink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359297-nuzbxteqct-portrait.jpg",
            name: "Pui Pui Molcar: S1",
            language: "Japanese"
        },
    
    ]
  return (
    <div className='pre-cantaint'>
            {/* <div className="premiere">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" />
            </div> */}

            {
                everyfriday.map((x)=>{

                    return(

                        <div className='preimg'>
                            <img src={x.imglink} alt="" />
                            <h3 className='preh3'>{x.name}</h3>
                            <p className='prep'>{x.language}</p>
                        </div>
                    )
                }
                )
             }
        </div>

  )
}

export default Premier
