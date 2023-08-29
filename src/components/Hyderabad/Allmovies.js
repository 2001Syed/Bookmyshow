import React from 'react'
import Movieslist from './Movieslist'

function Allmovies() {

    let moviesImage = [
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDYuNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
          movieName: "Jailer",
          moviesLang: "Tamil, Hindi, Telugu, Kannada..."
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDQuMksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
          movieName: "Gadar 2: The Katha Continues",
          moviesLang: "Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTAzLjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
          movieName: "King of Kotha",
          moviesLang: "Malayalam, Tamil, Telugu..."
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTIzLjZLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
          movieName: "Dream Girl 2",
          moviesLang: "Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjAuN0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-hadftxleau-portrait.jpg",
          movieName: "Gandeevadhari Arjuna",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDYuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
          movieName: "OMG 2",
          moviesLang: "Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3LjNLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
          movieName: "Blue Beetle",
          moviesLang: "English, Hindi, Telugu, Tamil"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS42LzEwICA0NC42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354849-twjhuhesqf-portrait.jpg",
          movieName: "Bhola Shankar",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxNS45SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-qnqdtlfpwu-portrait.jpg",
          movieName: "Ghoomer",
          moviesLang: "Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICA1SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00316803-zdnxtjyfqs-portrait.jpg",
          movieName: "Mr Pregnant",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTI4LjZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-trnjveudsm-portrait.jpg",
          movieName: "Rocky Aur Rani Kii Prem Kahaani",
          moviesLang: "Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTMuMksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341419-rnlrkdhuqm-portrait.jpg",
          movieName: "Bedurulanka 2012",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICA3NzQgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367113-bpbnekdgvc-portrait.jpg",
          movieName: "DD Returns (Telugu)",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICAzSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355694-akabcnvusy-portrait.jpg",
          movieName: "Pizza 3 The Mummy (Telugu)",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NS40SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367143-nmbtdlbyrc-portrait.jpg",
          movieName: "Boys Hostel",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTUuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358718-amxjaktewk-portrait.jpg",
          movieName: "Gran Turismo",
          moviesLang: "English, Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxLjdLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00366421-xvnkxxdcdl-portrait.jpg",
          movieName: "Prem Kumar",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMS4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367107-qmkdrfkfee-portrait.jpg",
          movieName: "Jilebi",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxNTEuOUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-rruvehxwpe-portrait.jpg",
          movieName: "Oppenheimer",
          moviesLang: "English, Hindi"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC44LzEwICA4LjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353537-gajtjtktnh-portrait.jpg",
          movieName: "1920: Horrors of the Heart",
          moviesLang: "Hindi, Telugu, Tamil"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA0LjhLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00027172-nrapmrvjgz-portrait.jpg",
          movieName: "Raghuvaran B.Tech",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA3Ny41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363274-jtlgdrhktg-portrait.jpg",
          movieName: "Baby (2023)",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICA4LjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00366861-ksnvmsdmcl-portrait.jpg",
          movieName: "Yogi(2007)",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAxMTQuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00360172-ncsbpawyxm-portrait.jpg",
          movieName: "BRO",
          moviesLang: "Telugu"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICA0NC42SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-pzdcejeceq-portrait.jpg",
          movieName: "Barbie",
          moviesLang: "English"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-uzzgjdlpvr-portrait.jpg",
          movieName: "Meg 2: The Trench",
          moviesLang: "English, Telugu, Hindi, Tamil"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxMTkuNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-gdlsqkwwld-portrait.jpg",
          movieName: "Mission Impossible: Dead Reckoning - Part 1",
          moviesLang: "English, Hindi, Telugu, Tamil"
        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICAzLjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363638-walgrhqyaf-portrait.jpg",
          movieName: "Talk To Me(2023)",
          moviesLang: "English"
        },
    
      ]
  return (
    <div>
      <div className='movies scss'>
      {
        moviesImage.map( (x) => {
          return (
            <Movieslist mImg = {x.imgLink} mName = {x.movieName} mLang = {x.moviesLang}></Movieslist>
          )

        })
      }
      </div>
    </div>
  )
}

export default Allmovies
