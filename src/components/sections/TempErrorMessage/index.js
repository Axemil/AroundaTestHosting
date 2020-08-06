
import s from "./style.scss"
import { connect } from "react-redux"
import hideErrorMessage from "../../../store/actions/hideErrorMessage"

// console.log(hideErrorMessage)
const mapStateToProps = (state, ownProps) => {
  return {
    show: state.errorMessage
  }
}

const TempErrorMessage = ({ show, hideErrorMessage, children, time }) => {
  if (show) setTimeout(hideErrorMessage, time || 2000)
  return show ? (
    <p className={s.errorMessage}>{children}</p>
  ) : (
    <p className={s.errorMessage}>&nbsp;</p>
  )
}

export default connect(mapStateToProps, { hideErrorMessage })(TempErrorMessage)
