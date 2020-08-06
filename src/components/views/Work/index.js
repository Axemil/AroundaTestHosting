import style from './style.scss';
import SortSection from '@sections/SortSection';
import InnovationSection from '@sections/InnovationSection';
import StartSection from '@sections/StartSection';
import WorkSection from '@sections/WorkSection';
import SliderSection from '@sections/SliderSection';
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
				<section className={style.wrapInnovationSection}>
					<InnovationSection btn='' />
				</section>
				<SliderSection />
				<section className={style.wrapStartSection}>
					<StartSection />
				</section>
				<Footer />
				<Head>
					<title>Works. Latest cases from Arounda</title>
					<meta name="description" content="Beautifull and clean Arounda works." />
				</Head>
			</>
		);
	}
}
