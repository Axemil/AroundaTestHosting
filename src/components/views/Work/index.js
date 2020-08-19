import style from './style.scss';
import SortSection from '@sections/SortSection';
import InnovationSection from '@sections/InnovationSection';
import StartSection from '@sections/StartSection';
import WorkSection from '@sections/WorkSection';
import SliderSection from '@simple/SliderSection';
import WorkHero from './WorkHero';
import LetsTalk from '@sections/LetsTalk';
import categoryContent from '@/data/CategoryContent';
import data from '@/data/Works';
import Footer from '@sections/Footer';
import Head from 'next/head';



export default class Work extends React.Component {
	state = {
		sortList: [
			{
				id: 1,
				value: 'industry'
			},
			{
				id: 2,
				value: 'project type'
			},
		],
		selectedItem: 'project type',
		showDropdown: false,
		categories: {
			'project type': ['All projects', 'Platforms', 'Corporate websites', 'Web applications', 'Mobile applications', 'Landing pages', 'Brand identity'],
			'industry': ['Food delivery', 'Fintech', 'Health', 'SaaS']
		},
		selectedCategory: null,
		worksData: [],
	}

	componentDidMount() {
		this.setState({
			worksData: [...data]
		})
	}

	handleFind = (id) => {

		const { showDropdown } = this.state;

		const answer = this.state.sortList.find(item => item.id === id);

		this.setState({
			selectedItem: answer.value,
			showDropdown: !showDropdown,
			worksData: [...data]
		})
	}

	handlerToggle = () => {

		const { showDropdown } = this.state;

		this.setState({
			showDropdown: !showDropdown
		})
	}

	handleSelectCategory = (e) => {
		const { worksData, selectedCategory } = this.state;
		const value = e.target.value.toLowerCase();

		if (value === 'all projects') {
			this.setState({
				worksData: [...data]
			})
		} else {
			const filteredData = data.reduce((prev, el) => {
				if (el.type.includes(value)) {
					prev.push(el)
				}
				return prev
			}, []);


			this.setState({
				worksData: [...filteredData]
			})
		}
	}

	render() {
		const { sortList, selectedItem, showDropdown, categories, selectedCategory, worksData } = this.state;
		return (
			<>
				<WorkHero />
				<SortSection
					sortList={sortList}
					selectedItem={selectedItem}
					showDropdown={showDropdown}
					categories={categories}
					selectedCategory={selectedCategory}
					categoryContent={categoryContent}
					handleFind={this.handleFind}
					handlerToggle={this.handlerToggle}
					handleSelectCategory={this.handleSelectCategory}
					handleFilter={this.handleFilter}
				/>
				<section className={style.wrapWorkSection}>
					<WorkSection worksData={worksData} title={"Recent work"} />
				</section>
				<SliderSection darkBackground />
				<LetsTalk />
				<Footer />
				<h1 className={'h1-seo'}>
					We make successful digital experiences
				</h1>
				<Head>
					<title>
						Our works — Web & Mobile Apps, Marketing websites, Landing pages, Two-sided platforms we`ve made | Arounda
					</title>
					<meta name="description" content="Arounda helps clients to meet their business needs and conquer new markets through Discovery & Strategy, UI/UX design, Branding, Web design, App development." />
					<link rel="canonical" href="https://arounda.agency/works" />
				</Head>
			</>
		);
	}
}
