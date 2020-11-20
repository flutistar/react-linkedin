
import React, {useState} from "react";
import './MsgContainer.scss'

import { Header, Search, MsgContactItem } from '../Messaging/Left'
import { MsgMainbox } from '../Messaging/Thread'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import avatar from '../../assets/images/avatar.png'

export const MsgContainer = (props) => {
  let items=[
    {
      img: img1,
      fullname: "Ian Galleher",
      last_time: "Oct 19",
      last_message: "You: I will have a look into it and will be back to you soon."
    },
    {
      img: img2,
      fullname: "Josh Ziteli",
      last_time: "Oct 17",
      last_message: "Josh: Hi there! Nice to meet you."
    },
    {
      img: img3,
      fullname: "Drew Ross",
      last_time: "Oct 14",
      last_message: "You: Hello?"
    },
    {
      img: img4,
      fullname: "Nathan Stuatr",
      last_time: "Oct 12",
      last_message: "Nathan: Cool!"
    },
  ]
  // let messages=
  let imgs = [img1, img2, img3, img4]
  const [messages, setMessages] = useState(
    [
      [
        {
          user: "you",
          text: "Hello Nice to meet you. How is the day?"
        },
        {
          user: "you",
          text: "Nice to meet you too"},
        {
          user: "other",
          text: "and you?"
        }
      ],[
        {
          user: "other",
          text: "Hi"
        }
      ],[
        {
          user: "other",
          text: "Hi man! How is the day?"
        }
      ],[
        {
          user: "other",
          text: "Hello, I am a web dev"
        }
      ]
    ]
  )
  const [activeItem, changeItem] = useState(0)
  const [currentMsg, changeMsg] = useState(messages[0])
  const [otherImg, setOtherImg] = useState(imgs[0])
  const [otherName, setOtherName] = useState(items[0].fullname)
  function selectItem (index) {
    changeItem(index)
    changeMsg(messages[index])
    setOtherImg(imgs[index])
    setOtherName(items[index].fullname)
  }
  function newMsgSubmit(data){
    let buf = messages
    buf[data.index].push({
      user: "you",
      text: data.text
    })
    setMessages(buf)
  }
  const ListItems = () => {
      return (
        items.map((item, index) => (
            <MsgContactItem
              key={index}
              counter={index}
              activeItem={activeItem}
              img={item.img}
              fullname={item.fullname}
              last_time={item.last_time}
              message={item.last_message}
              clicked={selectItem}
              />
        ))
      )
  }

  return (
    <div className="msg-container container" >
      <div className="row bg-white">
          <div className="conversation-list col-md-5 p-0">
              <Header />
              <Search />
              <ListItems/>
          </div>
          <div className="col-md-7 p-0">
              <MsgMainbox 
              msg={currentMsg}
              otherImg={otherImg}
              avatar={avatar}
              otherName={otherName}
              submitted={newMsgSubmit}
              activeIndex={activeItem}
              />
          </div>
      </div>
        
    </div>
  );
};