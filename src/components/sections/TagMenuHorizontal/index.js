
import s from "./style.scss"
import TagLink from "@sections/TagLink"
import SubscribeButton from "@simple/SubscribeButton"

import {
	BrowserView,
	MobileView,
} from "react-device-detect";

const TagMenuHorizontal = ({ options }) => {
  return <BrowserView renderWithFragment>
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
  </BrowserView>
}

export default TagMenuHorizontal
