import TitleH from '@simple/TitleH';
import Description from '@simple/Description';
import Link from 'next/link';
import CloseIcon from "@svg/close.svg";
import Button from "@simple/Button";

import style from './style.scss';

export const ThankYouModal = ({shown, onClose, btnLink}) => shown ? <div className={style.success}>
							<div className={style.successInner}>
								<CloseIcon className={`${style.successClose} stopCursor`} onClick={onClose} />
								<TitleH size={'h3'}>
									Thank you!
								</TitleH>
								<div className={style.descWrapper}>
									<Description light text={'We will contact you as soon as possible.'} />
								</div>
								<div className={style.successLinkWrapper}>
									<Button href={btnLink} size="sm">Okay!</Button>
								</div>
							</div>
                        </div> : null
                        
export default ThankYouModal