import s from './style.scss';


export default ({onClick, children, href, disable}) => (
    <Link href={href} >
        <a className={`${s.listItem} ${disable ? s.listItemDisabled : 'stopCursor'}`} onClick={onClick}>
            {children}
        </a>
    </Link>
)