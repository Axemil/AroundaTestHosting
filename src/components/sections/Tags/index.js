

import { connect } from "react-redux"
import s from "./style.scss"
import TagLink from "@sections/TagLink"
import Link from 'next/link'
import { reactSelectOptionsFromTags } from "../../../store/selectors"
import { useRouter } from 'next/router'
import TagMenuVertical from "@sections/TagMenuVertical"
import TagMenuHorizontal from "@sections/TagMenuHorizontal"

let Tags = ({ tagNames, isMobile }) => {
  const router = useRouter()
  const handleTagChange = (path) => {
    router.push(path)
  }

  const options = reactSelectOptionsFromTags(tagNames)

  return isMobile ? <TagMenuVertical options={options} onChange={(value) => handleTagChange(value)} /> : <TagMenuHorizontal options={options} />
}

const mapStateToProps = ({ tagNames }) => ({ tagNames })
Tags = connect(mapStateToProps)(Tags)

export default Tags
