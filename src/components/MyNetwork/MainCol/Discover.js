import React from "react";

import './Discover.scss'

import img1 from '../../../assets/images/1.png'
import img2 from '../../../assets/images/2.png'
import img3 from '../../../assets/images/3.png'
import img4 from '../../../assets/images/4.png'
import img5 from '../../../assets/images/5.png'
import img6 from '../../../assets/images/6.png'
import img7 from '../../../assets/images/7.png'
import img8 from '../../../assets/images/8.png'

import bgimg1 from '../../../assets/images/b1.jpg'
import bgimg2 from '../../../assets/images/b2.jpg'
import bgimg3 from '../../../assets/images/b3.jpg'

import Card from './Card'

export const Discover = () => {
  return (
    <div className="discover mt-5 bg-white">
        <div className="header d-flex">
          <span>More suggestions for you</span>
        </div>
        <ul className="body">
            <Card img={img1}
                bgimg={bgimg1}
                fullname="Ian Galleher"
                title="Full Stack Developer" 
                mutual="12" />
            <Card img={img2}
                bgimg={bgimg2}
                fullname="Isaac Nam"
                title="CEO founder"
                mutual="31" />
            <Card img={img3}
                bgimg={bgimg3}
                fullname="David Antonio"
                title="Full-Stack Software Engineer"
                mutual="9" />
            <Card img={img6}
                bgimg={bgimg2}
                fullname="Isaac Nam"
                title="CEO founder"
                mutual="31" />
            <Card img={img7}
                bgimg={bgimg3}
                fullname="David Antonio"
                title="Full-Stack Software Engineer"
                mutual="9" />
            <Card img={img8}
                bgimg={bgimg1}
                fullname="David Antonio"
                title="Full-Stack Software Engineer"
                mutual="9" />
            <Card img={img4}
                bgimg={bgimg1}
                fullname="David Antonio"
                title="Full-Stack Software Engineer"
                mutual="9" />
            <Card img={img5}
                bgimg={bgimg1}
                fullname="Ian Galleher"
                title="Full Stack Developer" 
                mutual="12" />
        </ul>
    </div>
    
  );
};