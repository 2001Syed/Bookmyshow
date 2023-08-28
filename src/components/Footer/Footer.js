import React from 'react'

import "./Footer.css"

function Footer() {
  return (
    <div className='footers-container'>
      <footer style={{backgroundColor:"rgb(51,51,56)"}} className='footer-container'>
        <div>
            <div className="flex ffooter">
                <div className="footer1" style={{color: "white"}}>
                    <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" style={{paddingRight: "2px"}}/>
                    <p style={{fontWeight: "600" , padding:"0px 15px"}}>List your Show</p>
                    <p>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
                </div>
                <div className="footer2">
                    <button>Contact today!</button>
                </div>
            </div>
        </div>
        <div className="flex csupport">
            <div>
                24/7 CUSTOMER CARE
            </div>
            <div>
                RESEND BOOKING CONFIRMATION
            </div>
            <div>
                SUBSCRIBE TO THE  NEWSLETTER
            </div>
        </div>
        <div className="footerContent">
                <div className="flist l1">
                    <p>MOVIES NOW SHOWING IN HYDERABAD</p>
                    <ul className="flex list-content">
                        <li>Gandeevadhari Arjuna</li>
                        <li>Jailer</li>
                        <li>Dream Girl 2</li>
                        <li>Bedrulanka 2012</li>
                        <li>King Of Kotha</li>
                        <li>Gadar 2: The Katha Continues</li>
                        <li>Boys Hostel</li>
                        <li>Gran Turismo</li>
                        <li>OMG 2</li>
                        <li>Rocky Aur Rani Ki Prem Kahani</li>
                    </ul>
                </div>
                <div className="flist l2">
                    <p>UPCOMING & NOWSHOWING COMEDY MOVIES</p>
                    <ul className="flex list-content">
                        <li>Khushi</li>
                        <li>Gudumba Shankar</li>
                        <li>Bedrulanka 2012</li>
                        <li>Dream Girl 2</li>
                        <li>OMG 2</li>
                        <li>Boys Hostel</li>
                        <li>Rocky Aur Rani Ki Prem Kahani</li>
                        <li>Barbie</li>
                        <li>Asteriod City</li>
                        <li>Em Chesthunnav?</li>
                    </ul>
                </div>
                <div className="flist l3">
                    <p>UPCOMING & NOWSHOWING TELUGU MOVIES</p>
                    <ul className="flex list-content">
                        <li>Jailer</li>
                        <li>Khushi</li>
                        <li>Gudamba Shankar</li>
                        <li>Bedrulanka 2012</li>
                        <li>Manmadhudu</li>
                        <li>Gandeevadhari Arjuna</li>
                        <li>Boys Hostel</li>
                        <li>King Of Kotha</li>
                        <li>Em Chesthunnav?</li>
                        <li>Daksha</li>
                    </ul>
                </div>
                <div className="flist ln">
                    <p>TOP CINEMAS IN HYDERABAD</p>
                    <ul className="flex list-content">
                        <li>Asian Mukund Cinema: Medchal</li>
                        <li>Cinepolis: DSL Virtue Mall Uppal, Hyderabad</li>
                        <li>INOX: Sattva Necklace Mall, Kavadiguda</li>
                        <li>INOX: GVK One, Banjara Hills</li>
                        <li>Asian Jyothi: RC Puram</li>
                        <li>Lakshmi Kala Mandir: Alwal</li>
                        <li>Asian Cineplanet Multiplex: Kompally</li>
                        <li>Asian CineSquare Multiplex: Uppal</li>
                        <li>Asian Mukta A2 Konark: Dilsukhnagar</li>
                        <li>Ganesh 70MM: Shamshabad</li>
                    </ul>
                </div>
            </div>
            <div className="bmslogo">
                <div className="hrline">
                    
                </div>
                <div>
                    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" style={{width: "130px"}}/>
                </div>
                <div className="hrline">
                    
                </div>
            </div>
            <div className="allIcons">
                <i className="fa-brands fa-facebook-f icons" ></i>
                <i className="fa-brands fa-twitter icons"></i>
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-youtube icons"></i>
                <i className="fa-brands fa-pinterest-p icons"></i>
                <i className="fa-brands fa-linkedin-in icons"></i>
            </div>
            <div className="copyright">
                <p>Copyright 2023 @ Bigtree Entertainment Pvt. Ltd. All Rights 
                    Reserved.
                </p>
                <p>
                    The content and images used on this site are copyright protected copyrights vests with the respective owners. The usage of content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
                </p>
                <p>
                    Unauthorized use is prohibited and punishable by law.
                </p>
            </div>
      </footer>
    </div>
  )
}

export default Footer