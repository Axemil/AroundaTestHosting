

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
            placeholder="Your email address"
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
      <a href="/" className={s.logo}>
        <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4648 17.8678C30.4648 13.3775 34.1667 9.73741 38.7331 9.73741C40.9245 9.72644 43.0286 10.5812 44.5731 12.1099C46.1176 13.6386 46.9731 15.7131 46.9477 17.8678C46.9801 20.0245 46.1268 22.103 44.5807 23.6332C43.0347 25.1634 40.9266 26.016 38.7331 25.9982C34.1667 25.9982 30.4648 22.3581 30.4648 17.8678ZM38.5557 22.5932C41.3391 22.6584 43.497 20.8192 43.5823 18.107V18.1039C43.655 15.2923 41.6551 12.9343 38.9158 12.866C37.5893 12.7892 36.289 13.2518 35.3194 14.1453C34.3498 15.0387 33.7962 16.2847 33.7881 17.5913C33.7183 18.8834 34.1875 20.1476 35.0874 21.0917C35.9873 22.0358 37.2399 22.5781 38.5557 22.5932Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8764 12.1636V10.1628H18.3265V25.5599H14.9017V23.5281C14.3437 24.0994 13.7053 24.589 13.006 24.982C11.959 25.6166 10.7601 25.9681 9.5306 26.001H9.35683H9.09776C8.33558 26.0045 7.57688 25.8999 6.84508 25.6904L6.79137 25.6748L6.61444 25.6189C5.67724 25.3258 4.80698 24.8563 4.05213 24.2364C3.36173 23.6807 2.76743 23.0186 2.29232 22.276C1.8208 21.5478 1.47193 20.7494 1.25918 19.9118C1.08719 19.2435 1.00017 18.5569 1.00011 17.8676C0.984759 14.883 2.62614 12.1279 5.28115 10.6816C6.06368 10.2478 6.92028 9.95823 7.80871 9.82728C10.4128 9.40555 13.0602 10.2807 14.8764 12.1636ZM13.2559 21.4376C14.2208 20.5081 14.7606 19.2331 14.7515 17.9049H14.7484C14.7737 15.0404 12.4925 12.9216 9.58269 12.9434C6.67285 12.9651 4.52759 15.0746 4.52759 17.8955C4.51426 19.2237 5.05061 20.5002 6.01347 21.4317C6.97632 22.3633 8.28293 22.8699 9.63324 22.8353C10.9835 22.8715 12.2909 22.3671 13.2559 21.4376Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M114.802 12.1667V10.166H118.259V25.5755H114.837V23.5437C114.279 24.115 113.641 24.6046 112.941 24.9976C111.886 25.6304 110.679 25.9767 109.444 26.0011H109.286H109.027C108.265 26.0046 107.506 25.8999 106.774 25.6904L106.72 25.6749L106.543 25.619C105.606 25.3259 104.736 24.8563 103.981 24.2365C103.29 23.681 102.694 23.0189 102.218 22.2761C101.747 21.5478 101.398 20.7495 101.185 19.9119C101.013 19.2436 100.926 18.557 100.926 17.8676C100.912 14.8842 102.553 12.1305 105.207 10.6848C105.989 10.251 106.846 9.96141 107.734 9.83046C110.339 9.40872 112.986 10.2838 114.802 12.1667ZM109.564 22.8097C112.337 22.8097 114.605 20.6346 114.674 17.9079C114.696 15.0559 112.418 12.934 109.508 12.9557C106.598 12.9775 104.453 15.087 104.453 17.9079C104.522 20.6346 106.79 22.8097 109.564 22.8097Z" fill="white"/>
          <path d="M59.7131 11.2316C59.7131 13.7574 59.732 16.2832 59.6815 18.8059C59.6499 20.2661 59.1854 21.5864 57.7226 22.3414C54.8791 23.814 52.0356 22.3134 51.944 19.2719C51.8713 16.5628 51.9187 10.166 51.9187 10.166H48.3707V18.8991C48.3398 19.6293 48.4057 20.3603 48.5666 21.0738C49.115 23.9783 51.7273 26.0612 54.7306 25.9887C56.5863 25.9924 58.3783 25.3232 59.7636 24.1091C59.7636 24.5907 59.7636 25.0909 59.7636 25.5786H63.1537C63.1537 20.3738 63.1537 15.2373 63.1537 10.1691H59.7131V11.2316Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M96.0521 12.1667V2.97381L99.518 1.6814V25.5754H96.0964V23.5436C95.5384 24.1149 94.9 24.6046 94.2007 24.9976C93.1404 25.6347 91.9266 25.9821 90.6842 26.0042H90.5263H90.2672C89.505 26.0076 88.7463 25.903 88.0145 25.6935L87.9608 25.678L87.7839 25.622C86.8467 25.329 85.9764 24.8594 85.2216 24.2395C84.53 23.6841 83.9347 23.022 83.4586 22.2792C82.9901 21.5493 82.6444 20.75 82.4349 19.9118C82.263 19.2436 82.1759 18.5569 82.1759 17.8676C82.1617 14.8842 83.8029 12.1305 86.4569 10.6848C87.2394 10.2509 88.096 9.96136 88.9845 9.83041C91.5886 9.40868 94.2359 10.2838 96.0521 12.1667ZM90.8174 22.8065C93.5912 22.8065 95.8588 20.6314 95.9278 17.9048L95.9246 17.9079C95.9499 15.0559 93.672 12.9309 90.7621 12.9526C87.8523 12.9744 85.707 15.0838 85.707 17.9048C85.776 20.6314 88.0437 22.8065 90.8174 22.8065Z" fill="white"/>
          <path d="M69.4937 24.7282C69.4937 22.2024 69.4747 19.6766 69.5252 17.1539C69.5568 15.6937 70.0213 14.3734 71.4841 13.6184C74.3276 12.1458 77.1711 13.6464 77.2627 16.6879C77.3354 19.397 77.2848 22.1061 77.288 24.8121V25.7938H80.8424V17.0576C80.8732 16.3274 80.8074 15.5964 80.6465 14.8829C80.0979 11.9772 77.4838 9.8939 74.4793 9.96798C72.623 9.96846 70.8321 10.6421 69.4494 11.86C69.4494 11.3784 69.4494 10.8783 69.4494 10.3905H66.0625C66.0625 15.5953 66.0625 20.7318 66.0625 25.8H69.5L69.4937 24.7282Z" fill="white"/>
          <path d="M24.8229 11.8033V10.166H21.4297V25.5786H24.9051V17.1904C24.9335 15.7302 25.4011 14.4129 26.8639 13.6549C27.5906 13.279 29.025 13.0957 29.7074 13.0864V9.75903C28.093 9.9734 26.0204 10.6911 24.8229 11.8033Z" fill="white"/>
        </svg>
      </a>
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
