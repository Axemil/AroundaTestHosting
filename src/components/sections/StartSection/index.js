
import style from "./style.scss"
import Link from 'next/link'

const StartSection = (props) => {
	return (
		<>
			<div className={style.title}>
				<h4>Got a project? Let’s talk</h4>
				<a className={style.mail} href="mailto: ">info@arounda.agency</a>
				<button className={style.contactBtn}>Contact us</button>
				{/* <Link href={"/contact/"}>
					<a className="stopCursor" title="Let's start.">
						Let's start.
					</a>
				</Link> */}
			</div>
		</>
	)
}
export default StartSection
