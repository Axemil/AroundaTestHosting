
import s from "./style.scss"
import { useMediaQuery } from "react-responsive"
import TagLink from "@sections/TagLink"
import SubscribeButton from "@simple/SubscribeButton"

const TagMenuHorizontal = ({ options }) => {
  const isNotMobile = useMediaQuery({
    query: "(min-width: 768px)"
  })

  return isNotMobile ? (
    <div className={s.tagsWrapper}>
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
  ) : null
}

export default TagMenuHorizontal
