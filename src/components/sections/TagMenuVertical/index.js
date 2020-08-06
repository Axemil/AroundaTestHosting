import Select, { components } from "react-select"
import s from "./style.scss"
import { useMediaQuery } from "react-responsive"
import SubscribeButton from "@simple/SubscribeButton"
import ArrowDown from "../../../assets/svg/select-arrow.svg"
import ArrowUp from "../../../assets/svg/select-arrow-up.svg"

const IndicatorSeparator = () => null

const DropdownIndicator = (props) => {
	return (
		<components.DropdownIndicator {...props}>
			{props.selectProps.menuIsOpen ? ArrowUp() : ArrowDown()}
		</components.DropdownIndicator>
	)
}

/* Calculate width of the text in pixels */
const textWidth = (text) => {
	const span = document.createElement("span")
	document.body.appendChild(span)
	span.style.fontSize = "16px"
	span.style.fontWeight = "400"
	span.innerText = text.toUpperCase()
	const width = span.offsetWidth + 44
	span.remove()
	return width
}

const customStyles = {
	container: (prov, state) => {
		const label = state.getValue()[0].label

		return {
			...prov,
			// marginBottom: 10,
			maxWidth: 300,
			width: textWidth(label)
		}
	},

	control: (prov, state) => {
		return {
			...prov,
			borderColor: "white",
			borderRadius: 0,
			boxShadow: "none"
		}
	},

	singleValue: (prov, state) => {
		return {
			...prov,
			textTransform: "uppercase"
		}
	},

	menu: (prov, state) => {
		const longestOption = state.options.reduce((acc, val) =>
			val.label.length > acc.label.length ? val : acc
		).label

		return {
			...prov,
			width: textWidth(longestOption),
			maxWidth: "300px",
			margin: 0,
			borderRadius: 0,
			borderColor: "white",
			outlineColor: "white",
			boxShadow: "none",
			textTransform: "uppercase",
			boxShadow: "0 10px 10px rgba(0,0,0,.4)"
		}
	}
}

const TagMenuVertical = ({ options, onChange }) => {
	const isMobile = useMediaQuery({
		query: "(max-width: 767px)"
	})

	return isMobile ? (
		<div className={s.wrapper}>
			<Select
				// className={s.tags}
				styles={customStyles}
				options={options}
				onChange={({ value }) => onChange(value)}
				// onChange={({ value }) => onChange(value)}
				components={{ IndicatorSeparator, DropdownIndicator }}
				defaultValue={options[0]}
			// menuIsOpen
			/>
			<SubscribeButton className={s.subscribe} text="Subscribe" />
		</div>
	) : null
}

export default TagMenuVertical
