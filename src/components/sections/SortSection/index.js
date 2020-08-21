import s from './style.scss';

const SortSection = (
	{ sortList, selectedItem, showDropdown, categories, selectedCategory,
		handlerToggle, handleFind, handleSelectCategory }
) => {
	return (	
		<section className={s.sortSection}>
			<div className={s.sortWrapper}>
				<div className={s.sort}>
					<span>Sort by</span>
					<button className={s.btn} onClick={handlerToggle}>
						{selectedItem}
						<span className={s.arrow}>
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
								<path d="M21 19L14.3335 13L8 19" stroke="#141515" strokeWidth="2" />
							</svg>
						</span>
					</button>
					<div className={`${s.list} ${showDropdown ? s.show : ''}`} >
						<ul>
							{
								sortList.map(el => {
									return (
										<li onClick={() => handleFind(el.id)} id={el.id} key={el.id}>{el.value}</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
			<div className={s.categories} >
				<ul>
					{
						categories[selectedItem].map((category, i) => {
							return (
								<li key={i} className={selectedCategory === category.toLowerCase() ? s.active : null}>
									<label htmlFor={category}>{category}</label>
									<input
										type="radio"
										id={category}
										value={category}
										name={'category'}
										onChange={handleSelectCategory} />
								</li>
							)
						})
					}
				</ul>
			</div>
			{showDropdown ? <div className={s.sortBackground} onClick={handlerToggle}></div> : null}
		</section>
	)
};

export default SortSection;
