
import s from './style.scss';
import Link from 'next/link';

const UndelinedLink = (initialProps) => {
    const {href, passHref, native = false, target, onClick, ...props} = initialProps;
    const dynamicProps = {
        onClick,
        ...(native && target ? {target, href} : {})
    }
    const LinkBody = React.forwardRef((p, ref) => (
        <a ref={ref} {...dynamicProps} className={`${props.className} ${s.link} stopCursor ${props.growingHover && s.linkGrowingHover}`}>
            <span>
                {props.children}
            </span>
        </a>
    ))
    
    const DisabledBody = () => (
        <span className={`${s.linkDisabled} ${s.link}`}>
            {props.children}
        </span>
    )

    if(props.disabled) {
        return <DisabledBody />;
    }
    
    if(native) {
        return <LinkBody />;
    }

    return (
        <Link href={href} passHref={passHref}>
            <LinkBody />
        </Link>
    );
};
export default UndelinedLink;
