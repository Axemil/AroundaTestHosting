
import s from "./style.scss"
import TagLink from "@sections/TagLink"
import SubscribeButton from "@simple/SubscribeButton"

const TagMenuHorizontal = ({ options }) => {
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0008 0.999878C5.02981 0.999878 1 5.02969 1 10.0007C1 14.9717 5.02981 19.0015 10.0008 19.0015C12.1247 19.0015 14.0768 18.2659 15.6161 17.0356L21.2896 22.709L22.7039 21.2947L17.031 15.6218C18.2642 14.0816 19.0017 12.1273 19.0017 10.0007C19.0017 5.02969 14.9718 0.999878 10.0008 0.999878ZM3.00018 10.0007C3.00018 6.13436 6.13448 3.00006 10.0008 3.00006C13.8672 3.00006 17.0015 6.13436 17.0015 10.0007C17.0015 13.8671 13.8672 17.0014 10.0008 17.0014C6.13448 17.0014 3.00018 13.8671 3.00018 10.0007Z" fill="#A4A9B6"/>
        </svg>

        </div>
      </div>
}

export default TagMenuHorizontal
