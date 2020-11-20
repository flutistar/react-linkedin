import React, {useState, useEffect} from "react";
import './LeftCol.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends  } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook  } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek  } from '@fortawesome/free-solid-svg-icons'
import { faBuilding  } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper  } from '@fortawesome/free-solid-svg-icons'
import { faHashtag  } from '@fortawesome/free-solid-svg-icons'
import { faUsers  } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp  } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons'

import { SnippetHeader } from '../Snippets'
import { Item } from '../MyNetwork/LeftCol/Item'
import { Advertise } from '../MyNetwork/LeftCol/Advertise'

export const LeftCol = (props) => {
    const [toggleCommun, setToggleCommun] = useState(1);
    const [scrollY, setScrollY] = useState(window.pageYOffset)
    useEffect(() => {
        const handlePosition = () => {
            setScrollY(window.pageYOffset)
            if(scrollY < 60){
                setToggleCommun(1)
            }
        }
        window.addEventListener('scroll', handlePosition)
        return () => {
            window.removeEventListener('scroll', handlePosition)
        };
    })
    const toggleCommunity = () => {
        setToggleCommun(!toggleCommun)
    }
    const ToggleIcon = () => {
        if(!toggleCommun){
            return (
                <span>
                    Show more &nbsp;&nbsp;
                    <FontAwesomeIcon icon={ faChevronDown } />
                </span>                
            );
        }
        return (
            <span>
                Show less &nbsp;&nbsp;
                <FontAwesomeIcon icon={ faChevronUp } />
            </span>            
        );
    }

    return (
        <div className={`left-col bg-white ${scrollY>60?'sticky':''}`}>
            <SnippetHeader headerLabel="Manage my network" />
            <div className="my-community">
                <Item label="Connections" icon={faUserFriends} num="1287" />
                <div className={toggleCommun ? 'expanded' : 'collapsed'}>
                    <Item label="Teammates" icon={faUserFriends} num="" />
                    <Item label="Contacts" icon={faAddressBook} num="" />
                    <Item label="People I Fllow" icon={faUserPlus} num="3" />
                    <Item label="Groups" icon={faUsers} num="2" />
                    <Item label="Events" icon={faCalendarWeek} num="" />
                    <Item label="Pages" icon={faBuilding} num="60" />
                    <Item label="Newsletters" icon={faNewspaper} num="" />
                    <Item label="Hashtags" icon={faHashtag} num="8" />
                </div>
                <a className={`collapse-btn ${scrollY>60?'':'hide'}`} onClick={toggleCommunity}>
                    <ToggleIcon />
                </a>
            </div>
            <Advertise />
        </div>
    );
};