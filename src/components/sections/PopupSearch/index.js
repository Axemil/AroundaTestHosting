import style from './style.scss';

const PopupSearch = props => {
  const classesPopup = [style.PopupSearch, props.search ? style.active : ''].join(' ');

  return (
    <div className={classesPopup}>
      <input type='text' placeholder='Type to search' />
      <div className={style.close} onClick={() => props.setSearch(false)}>
        <div></div>
      </div>
    </div>
  );
};
export default PopupSearch;
