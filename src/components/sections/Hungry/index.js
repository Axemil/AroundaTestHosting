
import style from "./style.scss"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { connect } from "react-redux"
import showMessage from "../../../store/actions/showMessage"
import showMessage2 from "../../../store/actions/showMessage2"
import { FormMessage1, FormMessage2 } from "@sections/FormMessage"

const MAILCHIMP_URL =
  "https://agency.us3.list-manage.com/subscribe/post?u=a21e974ea6ac7b0b696b05da5&amp;id=5bbf94c0d1"

let CustomForm = ({ status, subscribe, showMessage, showMessage2, blue }) => {
  let email

  return (
    <>
      <div className={style.ctaContainer}>
        <h2 className={style.title}>Hungry for more?</h2>
        <p className={style.description}>
          Sign up to our newsletter to get weekly updates on the newest design
          stories, case studies and tips
        </p>
      </div>
      <div className={style.form}>
        <label className={style.email}>
          <p>Your email</p>
          <input
            ref={(node) => (email = node)}
            type="email"
            placeholder="What's Your email ?"
          />
        </label>
        <button
          onClick={() => {
            subscribe({
              EMAIL: email.value
            })

            blue ? showMessage() : showMessage2()
          }}
          type="submit"
          className={style.submit}
        >
          {status === "sending" ? `${status}...` : "subscribe"}
        </button>
      </div>
    </>
  )
}

CustomForm = connect(null, { showMessage, showMessage2 })(CustomForm)

let Hungry = ({ blue }) => {
  return (
    <div className={blue ? `${style.Hungry} ${style.HungryBlue}` : style.Hungry}>
      <div className={style.wrap}>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ status, message, subscribe }) => {
            return (
              <>
                {blue
                  ? message && <FormMessage1 text={message} />
                  : message && <FormMessage2 text={message} />}
                <CustomForm blue={blue} status={status} subscribe={subscribe} />
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default Hungry
