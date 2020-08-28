import { LazyLoadImage } from 'react-lazy-load-image-component';

import TitleH from "@simple/TitleH";

import s from './style.scss';

const BlogSection = props => {
	const postsDesktop = [
		{
			id: 0,
			date: 'July 1',
			category: 'UI Design',
			title: 'Things to Consider When Starting a Food delivery Business',
			link: 'https://dribbble.com/stories/2019/07/01/7-free-icon-sets-to-download-on-dribbble',
			image: 'https://cdn.dribbble.com/users/509287/screenshots/4247409/airport-set_of_icons.png'
		},
		{
			id: 1,
			date: 'February 17',
			category: 'UI Design',
			title: 'How an Online food Ordering System Can Drive New Sales and Improve Profits',
			link: 'https://dribbble.com/stories/2019/02/15/what-defines-good-ui-design',
			image: 'https://cdn.dribbble.com/uploads/809/original/c7e054ce5aeb64f774b3160185b783fb.png?1550088246'
		},
		{
			id: 2,
			date: 'July 17',
			category: 'UI Design',
			title: 'The Future Insights: Key Benefits of Online Meal Delivery services',
			link: 'https://dribbble.com/stories/2019/02/15/what-defines-good-ui-design',
			image: 'https://cdn.dribbble.com/uploads/809/original/c7e054ce5aeb64f774b3160185b783fb.png?1550088246'
		},
	];

	return (
		<section className={s.blogSection}>
			<div className={s.container}>
				<div className={s.titleWrapper}>
					<TitleH size="h1">Blog and News</TitleH>
				</div>
				<div className={s.posts}>
					<ul className={s.listForDesktop}>
						{postsDesktop.map(post => {
							return (
								<li key={post.id} className={s.post}>
									<div className={s.date}>
										<span>{post.date}</span>
									</div>
									<a href={post.link} target="_blank" className={`${s.title} stopCursor`}>
										<span>{post.title}</span>
									</a>
									<div className={s.image}>
										<LazyLoadImage
											src={post.image}
											alt={post.title1}
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
export default BlogSection;
