
import style from "./style.scss"
import Link from 'next/link'

const StartSection = (props) => {
	return (
		<>
			<div className={style.title}>
				Got a project?
				<br />
				<Link href={"/contact/"}>
					<a className="stopCursor" title="Let's start.">
						Let's start.
					</a>
				</Link>
			</div>
		</>
	)
}
export default StartSection
