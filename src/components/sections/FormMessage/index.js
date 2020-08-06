import { connect } from "react-redux"
import hideMessage from "../../../store/actions/hideMessage"
import hideMessage2 from "../../../store/actions/hideMessage2"
import s from "./style.scss"
import classNames from "classnames"
import { editMailchimpResponse } from "../../../functions/lib"

const mapStateToProps = (state, ownProps) => ({
  messageIsVisible: state.message
})
const mapStateToProps2 = (state, ownProps) => ({
  messageIsVisible: state.message2
})

const mapDispatchToProps = (dispatch) => ({
  hideMessage: () => dispatch(hideMessage())
})
const mapDispatchToProps2 = (dispatch) => ({
  hideMessage: () => dispatch(hideMessage2())
})

let Message = ({ text, hideMessage, messageIsVisible }) => {
  const timerId = React.useRef(null)

  React.useEffect(() => {
    timerId.current = setTimeout(hideMessage, 3000)
  }, [])

  text = editMailchimpResponse(text)

  return messageIsVisible ? (
    <div className={classNames(s.message, s.messageGray)}>
      <div
        className={s.close}
        onClick={() => {
          clearTimeout(timerId.current)
          hideMessage()
        }}
      ></div>
      {text}
    </div>
  ) : null
}
const FormMessage1 = connect(mapStateToProps, mapDispatchToProps)(Message)
const FormMessage2 = connect(mapStateToProps2, mapDispatchToProps2)(Message)

export { FormMessage1, FormMessage2 }
