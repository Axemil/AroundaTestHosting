import style from './style.scss';
import SortSection from '@sections/SortSection';
import WorksSection from '@sections/WorksSection';
import SliderSection from '@simple/SliderSection';
import WorkHero from './WorkHero';
import LetsTalk from '@sections/LetsTalk';
import categoryContent from '@/data/CategoryContent';
import data from '@/data/Works';
import MetaData from '@simple/MetaData';

const categoriesList = {
	'project type': ['All project type', 'Platforms', 'Corporate websites', 'Web applications', 'Mobile applications', 'Landing pages', 'Brand identity'],
	'industry': ['Food delivery', 'Fintech', 'Health', 'SaaS']
};

const sort = [
	{
		id: 1,
		value: 'industry'
	},
	{
		id: 2,
		value: 'project type'
	},
];


const Works = () => {
	const [sortList, setSortList] = React.useState(sort)
	const [selectedItem, setSelectedItem] = React.useState('project type');
	const [showDropdown, setShowDropdown] = React.useState(false);
	const [categories, setCategories] = React.useState(categoriesList);
	const [selectedCategory, setSelectedCategory] = React.useState('all projects');
	const [worksData, setWorksData] = React.useState(data);

	const handleFind = (id) => {

		const answer = sortList.find(item => item.id === id);

		setSelectedItem(answer.value);
		setShowDropdown(!showDropdown);
		setWorksData(data)
	}

	const handlerToggle = () => {
		setShowDropdown(!showDropdown);
	}

	const handleSelectCategory = (e) => {
		const value = e.target.value.toLowerCase();

		setSelectedCategory(value)

		if (value === 'all projects') {
			setWorksData(data)
		} else {
			const filteredData = data.reduce((arr, el) => {
				if (el.type.includes(value)) {
					arr.push(el)
				}
				return arr
			}, []);

			setWorksData(filteredData)
		}
	}

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
				handleFind={handleFind}
				handlerToggle={handlerToggle}
				handleSelectCategory={handleSelectCategory}
			/>
			<WorksSection worksData={worksData} />
			<SliderSection darkBackground />
			<LetsTalk />

			<MetaData h1="We make successful digital experiences"
					title="Our works — Web & Mobile Apps, Marketing websites, Landing pages, Two-sided platforms we`ve made | Arounda"
					description="Arounda helps clients to meet their business needs and conquer new markets through Discovery & Strategy, UI/UX design, Branding, Web design, App development."
					link="https://arounda.agency/works" />
			</>
		);
	}

export default Works;
