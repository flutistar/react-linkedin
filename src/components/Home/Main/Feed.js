import React, {useState, useEffect} from "react";
import './Feed.scss'
import { UserState } from '../Left/UserState'

import { Post } from '../Main/Post'
import postImg1 from '../../../assets/images/p-img1.jpg'
import poster1 from '../../../assets/images/8.png'
import postImg2 from '../../../assets/images/p-img2.jpg'
import poster2 from '../../../assets/images/4.png'
import postImg3 from '../../../assets/images/p-img3.jpg'
import poster3 from '../../../assets/images/5.png'

export const Feed = () => {
    
    const postData = [
        {
            fullName: 'Ryan Camp',
            title: 'Software Developer',
            avatar: poster1,
            postImg: postImg1,
            summary: 'Vision-driven Web Developer with career-long record of delivering solutions-oriented,  \
            innovative, and strategic usercentered front-end design for leading organizations \
            A dynamic, motivated, multilingual Front End Developer & Architect with the educational \
            background and proven work ethic to guide and support graphic design, strategic marketing, \
            requirements gathering, quality assurance, accessibility, user interface standards, \
            full stack web development, and more to create impactful applications across multiple industries. \
            Innovative thought leader who is known for delivering excellent technical recommendations in fast-paced \
            environments, with the skillset to analyze complex information, manage key projects, facilitate cross-team \
            coordination, and lead diverse individuals. Exceptionally dedicated professional with keen interpersonal, \
            communication, and organizational skills, as well as visual design framework, creative content development, \
            and project management expertise.'
        },
        {
            fullName: 'Barent Langwell',
            title: 'Full Stack Software Engineer | Web Developer',
            avatar: poster2,
            postImg: postImg2,
            summary: '• Led front-end development freelancer for LexisNexis. \
            • Directed the visual design process from exploring concepts to developing the final look and feel \
            of the design, build and configured applications.  • Primary point of contact for Frontend/User \
            Interface on the Technical Development Team, collaborating closely with backend .net developers.'
        },
        {
            fullName: 'Mark Fitzpatrick',
            title: 'Full Stack Software Engineer | Web Developer',
            avatar: poster3,
            postImg: postImg3,
            summary: '• Led front-end development freelancer for LexisNexis. \
            • Directed the visual design process from exploring concepts to developing the final look and feel \
            of the design, build and configured applications.  • Primary point of contact for Frontend/User \
            Interface on the Technical Development Team, collaborating closely with backend .net developers.'
        }
    ]
    return (
        <div className="home feed">
            <Post data={postData[0]} />
            <Post data={postData[1]} />
            <Post data={postData[2]} />
        </div>
    );
};