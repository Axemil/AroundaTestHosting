import Select, { components } from 'react-select';

import Textarea from 'react-textarea-autosize';
import ButtonSecondary from '@simple/ButtonSecondary';
import axios from 'axios';
import utmcookie from '@/functions/utmcookie';
import ThankYou from "./ThankYou";

import style from './style.scss';

const budgets = [
	{ value: '5000', label: '$5,000 and under', name: 'budget' },
	{ value: '10000', label: '$5,000 - 10,000', name: 'budget' },
	{ value: '50000', label: '$10,000 - 50,000', name: 'budget' },
	{ value: '100000', label: '$50,000 - 100,000', name: 'budget' },
	{ value: '200000', label: '$100,000+', name: 'budget' }
];

const projects = [
	{ value: 'Platform', label: 'Platform', name: 'project' },
	{ value: 'Mobile App', label: 'Mobile App', name: 'project' },
	{ value: 'Web App', label: 'Web App', name: 'project' },
	{ value: 'Corporate website', label: 'Corporate website', name: 'project' },
	{ value: 'Landing page', label: 'Landing page', name: 'project' },
];

const DropdownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<svg width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M1 1L6.55541 6L11.8333 1" stroke="#141515" strokeWidth="2" /></svg>
		</components.DropdownIndicator>
	);
};

const customStyles = {
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? '#111212' : '#9FA4A6',
	}),
	container: (provided, state) => ({
		...provided,
		borderBottom: '2px solid',
		borderColor: state.hasValue ? 'var(--primary)' : 'var(--gray400)'
	})
}

export default class ContactForm extends React.Component {
	state = {
		name: '',
		email: '',
		budget: '',
		project: '',
		idea: '',
		include: {
			'services': [
				{
					name: 'Strategy & Discovery',
					value: 'Strategy & Discovery'
				},
				{
					name: 'UX/UI Design',
					value: 'UX/UI Design'
				},
				{
					name: 'App development',
					value: 'App Development'
				},
				{
					name: 'Branding',
					value: 'Branding'
				},
				{
					name: 'Web design',
					value: 'Web design'
				}
			]
		},
		includeList: [],
		disable: false,
		emptyValue: false,
		successSend: false
	};


	handleInput = e => {
		const label = e.target.parentElement.querySelector('label');

		if (e.target.value) {
			e.target.classList.add(style.active);
			label.classList.add(style.active);
		} else {
			e.target.classList.remove(style.active);
			label.classList.remove(style.active);
		}

		this.setState({
			[e.target.name]: e.target.value
		});

		if (e.target.matches(`.${style.textarea}`) && e.target.value) {
			e.target.parentElement.classList.add(style.filled);
		}
	};

	handleChange = (option, value, hasValue) => {
		this.setState({
			[option.name]: option.value
		});
	};

	clearValues = () => {
		this.select.state.value = '';
		this.setState({
			disable: false,
			name: '',
			email: '',
			budget: '',
			project: '',
			idea: '',
			includeList: []
		})
	}

	handleChoose = e => {
		const parent = e.target.parentElement;
		if (!parent.classList.contains(style.active)) {
			this.setState({
				includeList: [...this.state.includeList, e.target.value]
			});

			parent.classList.add(style.active);
		} else {
			this.setState({
				includeList: this.state.includeList.filter(item => e.target.value !== item)
			});
			parent.classList.remove(style.active);
		}
	};
	
	toggleModal = (pld = !this.state.successSend) => {
		this.setState({
			successSend: pld,
		})
	}
	
	toggleDisable = (pld = !this.state.disable) => {
		this.setState({
			disable: pld,
		})
	}

	handlerSubmit = e => {
		const { name, email, budget, project, idea, includeList } = this.state;
		if (name && email && budget && project && idea && includeList.length > 0) {

			this.setState({
				disable: true,
				emptyValue: false
			})
			this.sendToAmo(this.state).finally((data) => {
				this.clearValues();
				this.setState({
					successSend: true,
					disable: false
				})
			});

		} else {
			this.setState({
				emptyValue: true
			})
		}
	}

	sendToAmo = data => {
		const { name, email, budget, project, idea, includeList } = data;
		const comment = 'Budget: ' + budget + ' Project: ' + project + ' Idea: ' + idea + ' Services: ' + includeList.join(', ');

		const dataForStand = {
			budget,
			project,
			idea,
			name,
			email,
			comment,
			source: 'order',
			include_list: includeList,
			...utmcookie.getUtmData()
		};

		return axios({
			method: 'post',
			url: '/contact/add/',
			data: dataForStand,
		}).then(response => {
			console.log(response);
		});
	}

	render() {
		const { name, email, project, include, budget, disable, emptyValue, successSend } = this.state;
		return (
			<>
				<form className={style.grid} onSubmit={(e) => e.preventDefault()}>
					<div className={style.inputWrapper}>
						<input className={style.input} value={name} type='text' placeholder='Your name' onChange={this.handleInput} name='name' required />
						<label>Your name</label>
					</div>
					<div className={style.inputWrapper}>
						<input onChange={this.handleInput} value={email} className={style.input} type='email' placeholder='Your email' name='email' required />
						<label>Your email</label>
					</div>
					<div className={style.selectWrapper}>
						<Select
							styles={customStyles}
							className='select'
							classNamePrefix='select'
							options={budgets}
							onChange={this.handleChange}
							components={{ DropdownIndicator }}
							placeholder={'Project budget'}
							name='budget'
							id="budget"
							instanceId="budget"
							inputId="budget"
							isSearchable={false}
							ref={c => (this.select = c)}
						/>
						<label className={`${budget ? style.active : ''}`}>Project budget</label>
					</div>
					<div className={style.selectWrapper}>
						<Select
							styles={customStyles}
							className='select'
							classNamePrefix='select'
							options={projects}
							onChange={this.handleChange}
							components={{ DropdownIndicator }}
							placeholder={`Project's type`}
							name='project'
							id="project"
							instanceId="project"
							inputId="project"
							isSearchable={false}
							ref={c => (this.select = c)}
						/>
						<label className={`${project ? style.active : ''}`}>Project’s type</label>
					</div>
					<div className={style.textareaWrapper}>
						<Textarea
							className={style.textarea}
							style={{ height: '41px' }}
							placeholder={'Tell us more about your idea'}
							name='idea'
							onChange={this.handleInput}
						/>
						<label>Your message</label>
					</div>
					<div className={style.includeWrapper}>
						<label>What to include?</label>
						<ul className={style.list}>
							{include['services'].map((el, i) => {
								return (
									<li key={i} className={`${style.item}`}>
										<label htmlFor={el.name}>{el.name}</label>
										<input id={el.name} name={el.value} type="checkbox" value={el.value} onChange={this.handleChoose} />
									</li>
								);
							})}
						</ul>
					</div>
					{
						emptyValue ?
							<div className={style.emptyValue}>
								You must fill in all required fields
                            </div> : null
					}
					<div className={style.btnWrapper}>
						<div className={`${disable ? style.disable : ''}`} onClick={this.handlerSubmit}>
							<ButtonSecondary>Send a request</ButtonSecondary>
						</div>
					</div>
				</form>
				<ThankYou shown={successSend} btnLink="/" onClose={() => {this.toggleModal(false);this.toggleDisable(false)}} />
			</>
		);
	}
}
