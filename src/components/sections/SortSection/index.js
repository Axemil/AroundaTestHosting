import style from './style.scss';



export default class SortSection extends React.Component {

    render() {
    
        const {sortList, selectedItem, showDropdown, categories, selectedCategory, categoryContent, handlerToggle, handleFind, handleSelectCategory, handleFilter} = this.props;

        return (
            <section className={style.section}>
                <section className={style.sortSection}>
                            <div className={style.sortWrapper}>
                                <div className={style.sort}>
                                    <span>Sort by</span>
                                    <button className={style.btn} onClick={handlerToggle}>
                                        {selectedItem}
                                        <span className={style.arrow}>
                                            <svg height="9" viewBox="0 0 13 9" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" /></svg>
                                        </span>
                                    </button>
                                    <div className={`${style.list} ${showDropdown ? style.show : ''}`} >
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
                            <div className={style.categories} >
                                    <ul>
                                        {
                                            categories[selectedItem].map((el, i) => {
                                                return (
                                                    <li key={i}>
                                                        <label htmlFor={el}>{el}</label>   
                                                        <input  
                                                            type="radio" 
                                                            id={el} 
                                                            value={el} 
                                                            name={'category'}
                                                            onChange={handleSelectCategory}/>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                            </div>
                </section>
                {
                    selectedItem === 'project type' ?
                    categoryContent.map((el,i) => {
                        return selectedCategory === el.title && (
                            <section className={style.categorySection} key={i}>
                                <div className={style.content}>
                                        <h3 className={style.title}>{el.title}</h3>
                                        <p className={style.text}>{el.desc}</p>
                                    </div>
                                    {/* <div className={style.image}>
                                        <img src="assets/images/img-3.png" alt="image"/>
                                    </div> */}
                            </section>
                        )
                    })
                    : null
                }
            </section>
        )
    }
}
