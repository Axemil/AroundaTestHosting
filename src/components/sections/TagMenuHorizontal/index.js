import { useState, useRef } from "react";
import { useRouter } from 'next/router'
import s from "./style.scss"
import TagLink from "@sections/TagLink"
import SubscribeButton from "@simple/SubscribeButton"

const TagMenuHorizontal = ({ options }) => {
  let [open, setOpen] = useState(false);
  let [text, setText] = useState('')
  const router = useRouter()
  let textInput = useRef();
  const handleClick = () =>{
    textInput.current.focus(); 
    setOpen(true);
    if(text != '') router.push(`?search=${text}`)
  }
  const handleClose = () =>{
    setOpen(false);
    setText('');
    router.push(`/blog/`)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text != '') {
      router.push(`?search=${text}`)
    }
  }
  const handleInput = e => {
    setText(e.target.value)
  } 
  return <div className={s.tagsWrapper}>
        <h1 className={s.h1Header}>Blog & news</h1>
        <div className={s.tagDiv}>
        <ul className={s.tags}>
          {options.map((option, i) => (
            <li key={i}>
              <TagLink className={s.tag} to={option.value}>
                {option.label}
              </TagLink>
            </li>
          ))}
        </ul>
        {/* <SubscribeButton className={s.subscribe} text="Subscribe" /> */}
        <div className={s.searcherBlock}>
          <div className={s.searcher}>
            <div className={s.searcherinput}>
              <div className={open ? s.searcherBtnActive : s.searcherBtn} onClick={handleClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0008 0.999878C5.02981 0.999878 1 5.02969 1 10.0007C1 14.9717 5.02981 19.0015 10.0008 19.0015C12.1247 19.0015 14.0768 18.2659 15.6161 17.0356L21.2896 22.709L22.7039 21.2947L17.031 15.6218C18.2642 14.0816 19.0017 12.1273 19.0017 10.0007C19.0017 5.02969 14.9718 0.999878 10.0008 0.999878ZM3.00018 10.0007C3.00018 6.13436 6.13448 3.00006 10.0008 3.00006C13.8672 3.00006 17.0015 6.13436 17.0015 10.0007C17.0015 13.8671 13.8672 17.0014 10.0008 17.0014C6.13448 17.0014 3.00018 13.8671 3.00018 10.0007Z"/>
                </svg>
              </div>
              <input ref={textInput} onChange={handleInput} onKeyDown={handleKeyDown} className={open && s.searcherinputActive} type="text" placeholder="Search by keywords..." value={text}/>
            </div>
            <div className={open ? s.searcherCloseActive : s.searcherClose} onClick={handleClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.57422" y="2" width="24" height="3" transform="rotate(45 2.57422 2)" fill="#A4A9B6"/>
                <rect x="0.453125" y="19.0166" width="24" height="3" transform="rotate(-45 0.453125 19.0166)" fill="#A4A9B6"/>
              </svg>
            </div>
          </div>
        </div>
        </div>
      </div>
}

export default TagMenuHorizontal
