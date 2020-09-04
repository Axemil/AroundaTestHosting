import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { composeDate } from "@/functions/lib"
import TitleH from "@simple/TitleH";
import UnderlinedLink from "@simple/UnderlinedLink";

import s from './style.scss';

const mapStateToProps = ({ posts }) => ({ posts });

const BlogSection = ({posts}) => {
	return (
		<section className={s.blogSection}>
			<div className={s.container}>
				<div className={s.titleWrapper}>
					<TitleH size="h1">Blog and News</TitleH>
				</div>
				<div className={s.posts}>
					<ul className={s.listForDesktop}>
						{posts.slice(0, 3).map(post => {
							return (
								<li key={post.id} className={s.post}>
									<div className={s.date}>
										<span>{composeDate(post.date, {short: true})}</span>
									</div>
									<UnderlinedLink growingHover native target="_blank" href={`/blog/${post.slug}/`} className={`${s.title}`}>
										{post.title}
									</UnderlinedLink>
									<div className={s.image}>
										<LazyLoadImage
											src={post.imageUrl}
											alt={post.title}
											threshold={100}
										/>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};
export default connect(mapStateToProps)(BlogSection);