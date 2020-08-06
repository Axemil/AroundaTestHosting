

import style from './style.scss';
import Search from '@/assets/svg/search.svg';
import SubscribeButton from '@simple/SubscribeButton'

const SearchTags = props => {
  const [tags, setTags] = React.useState([
    {
      id: 1,
      name: 'All topics'
    },
    {
      id: 2,
      name: 'Animation'
    },
    {
      id: 3,
      name: 'Branding'
    },
    {
      id: 4,
      name: 'Case study'
    },
    {
      id: 5,
      name: 'Development'
    },
    {
      id: 6,
      name: 'Illustration'
    },
    {
      id: 7,
      name: 'Tools'
    }
  ]);
  const [isMobileList, setIsMobileList] = React.useState(false);
  const [textMobileEl, setTextMobileEl] = React.useState('All topics');

  return (
    <div className={style.SearchTags}>
      <div className={style.content}>
        <div className={style.mobileList}>
          <p onClick={() => setIsMobileList(!isMobileList)}>{textMobileEl}</p>
          {isMobileList ? (
            <ul>
              {tags.map(tag => (
                <li
                  key={tag.id}
                  onClick={() => {
                    setIsMobileList(false);
                    setTextMobileEl(tag.name);
                  }}
                >
                  {tag.name}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <ul className={style.list}>
          {tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
        <SubscribeButton className={style.indexPageSubscribeButton} text="Subscribe" />
        {/*}
        <div className={style.searchIcon} onClick={() => props.setSearch(true)}>
          <Search />
        </div>
          {*/}
      </div>
    </div>
  );
};
export default SearchTags;
