import React from "react";

import './Invitation.scss'

import img1 from '../../../assets/images/1.png'
import img2 from '../../../assets/images/2.png'
import img3 from '../../../assets/images/9.png'

import InvitationItem from './InvitationItem'

export const Invitation = () => {
  return (
    <div className="invitation bg-white">
        <div className="invitation-header d-flex">
          <span>Invitations</span>
          <a >See all 22</a>
        </div>
        <InvitationItem img={img1} 
            fullname="Ian Galleher"
            title="Full Stack Developer" 
            mutual="Avinash S and 12" />
        <InvitationItem img={img2}
            fullname="Isaac Nam"
            title="CEO founder"
            mutual="Joshua Thomasson and 31" />
        <InvitationItem img={img3}
            fullname="David Antonio"
            title="Full-Stack Software Engineer"
            mutual="Kellen Presta and 9" />
        <div className="invitation-footer">
          <a>
            Show more
          </a>
        </div>
    </div>
  );
};
