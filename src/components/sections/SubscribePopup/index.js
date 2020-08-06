

import s from "./style.scss"
import { connect } from "react-redux"
import closePopup from "../../../store/actions/closePopup"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { editMailchimpResponse } from "../../../functions/lib"
import TempErrorMessage from "@sections/TempErrorMessage"
import showErrorMessage from "../../../store/actions/showErrorMessage"

const MAILCHIMP_URL =
  "https://agency.us3.list-manage.com/subscribe/post?u=a21e974ea6ac7b0b696b05da5&amp;id=5bbf94c0d1"

const mapStateToProps = ({ popup }) => ({ isOpen: popup })

// const TempErrorMessage = ({ children, className }) => {
//   const [isVisible, setIsVisible] = useState(true)

//   useEffect(() => {
//     setTimeout(() => setIsVisible(false), 4000)
//   }, [children])

//   return isVisible && <p className={className}>{children}</p>
// }

const CustomForm = ({
  subscribe,
  status,
  message,
  showErrorMessage,
  closePopup
}) => {
  let email
  message = editMailchimpResponse(message)

  if (status === "success") {
    setTimeout(closePopup, 3000)
  }

  if (status === "error") {
    showErrorMessage()
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={s.form}>
      {status !== "success" ? (
        <>
          <h1 className={s.title}>Hungry for more?</h1>
          <p className={s.text}>
            Sign up to our newsletter to get weely updates on the newest design
            stories case studies and tips
          </p>
          <TempErrorMessage time={3000}>{message}</TempErrorMessage>

          {/* <TempErrorMessage className={s.error}>{message}</TempErrorMessage> */}
          {/* {showErrorMessage && <p className={s.className}>{"error"}</p>} */}
          <input
            className={s.email}
            type="email"
            name="EMAIL"
            placeholder="Enter your email address"
            ref={(node) => (email = node)}
          />
          <input
            onClick={() => {
              console.log(status)
              subscribe({
                EMAIL: email.value
              })
            }}
            className={s.button}
            type="submit"
            value={status === "sending" ? `${status}...` : "Subscribe"}
          />
        </>
      ) : (
        <h1 className={s.title}>{message}</h1>
      )}
    </form>
  )
}

const SubscribePopup = ({ isOpen, closePopup, showErrorMessage }) => {
  return isOpen ? (
    <div className={s.container}>
      <div className={s.close} onClick={closePopup}></div>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <CustomForm
            closePopup={closePopup}
            status={status}
            message={message}
            subscribe={subscribe}
            showErrorMessage={showErrorMessage}
          />
        )}
      />
    </div>
  ) : null
}

export default connect(mapStateToProps, { closePopup, showErrorMessage })(
  SubscribePopup
)
