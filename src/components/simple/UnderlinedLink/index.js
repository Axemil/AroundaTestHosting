
import s from './style.scss';
import Link from 'next/link';

const UndelinedLink = (initialProps) => {
    const {href, passHref, native = false, target, rel, onClick, ...props} = initialProps;
    const dynamicProps = {
        onClick,
        ...(native && target ? {target, href, rel} : {})
    }
    
    const DisabledBody = () => (
        <span className={`${s.linkDisabled} ${s.link}`}>
            {props.children}
        </span>
    )

    if(props.disabled) {
        return <DisabledBody />;
    }
    
    if(native) {
        return (
        <a target="_blank" title={props.children} {...dynamicProps} className={`${props.className} ${s.link} stopCursor ${props.growingHover && s.linkGrowingHover}`}>
            <span>
                {props.children}
            </span>
        </a>)

    }

    return (
        <Link href={href} passHref={passHref}>
            <a target="_blank" title={props.children} {...dynamicProps} className={`${props.className} ${s.link} stopCursor ${props.growingHover && s.linkGrowingHover}`}>
                <span>
                 {props.children}
                </span>
            </a>

        </Link>
    );
};
export default UndelinedLink;
