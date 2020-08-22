
import TitleH from '@simple/TitleH';
import Description from '@simple/Description';
import ButtonSecondary from '@simple/ButtonSecondary';
import Heading from '@simple/Heading';

import s from './style.scss';




const PageNotFound = () => (
	<section className={s.pageNotFound}>
		<div className={s.content}>
			<div className={s.titleWrapper}>
				<TitleH size="h3">
                    Accept our appologies!
                </TitleH>
			</div>
			<Description light text={'The page you were looking for doesn’t exist. You may have misstyped the address or the page may have moved.'} />
			<div className={s.linkWrapper}>
				<ButtonSecondary href="/">
                    Go to Home page
                </ButtonSecondary>
			</div>
		</div>
		<div className={s.logo}>
			<div className={s.logoWrapper}>
                <Heading className={s.logoText}>404</Heading>
			</div>
		</div>
	</section>
);

export default PageNotFound;

