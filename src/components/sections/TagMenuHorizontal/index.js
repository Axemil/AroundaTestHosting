
import s from "./style.scss"
import TagLink from "@sections/TagLink"
import SubscribeButton from "@simple/SubscribeButton"

const TagMenuHorizontal = ({ options }) => {
  return <div className={s.tagsWrapper}>
        <ul className={s.tags}>
          {options.map((option, i) => (
            <li key={i}>
              <TagLink className={s.tag} to={option.value}>
                {option.label}
              </TagLink>
            </li>
          ))}
        </ul>
        <SubscribeButton className={s.subscribe} text="Subscribe" />
      </div>
}

export default TagMenuHorizontal
