import { LazyLoadImage } from 'react-lazy-load-image-component';

import TitleH from "@simple/TitleH";

import s from './style.scss';

const BlogSection = props => {
	const postsDesktop = [
		{
			id: 0,
			date: 'July 1 , 2020',
			category: 'UI Design',
			title: '7 free icon sets you can get on Dribbble',
			link: 'https://dribbble.com/stories/2019/07/01/7-free-icon-sets-to-download-on-dribbble',
			image: 'https://cdn.dribbble.com/users/509287/screenshots/4247409/airport-set_of_icons.png'
		},
		{
			id: 1,
			date: 'Feb 15 , 2020',
			category: 'UI Design',
			title: 'What defines good UI Design?',
			link: 'https://dribbble.com/stories/2019/02/15/what-defines-good-ui-design',
			image: 'https://cdn.dribbble.com/uploads/809/original/c7e054ce5aeb64f774b3160185b783fb.png?1550088246'
		},
	];

	return (
		<section className={s.blogSection}>
			<div className={s.container}>
				<div className={s.titleWrapper}>
					<TitleH size="h2">Blog and News</TitleH>
				</div>
				<div className={s.posts}>
					<ul className={s.listForDesktop}>
						{postsDesktop.map(post => {
							return (
								<li key={post.id} className={s.post}>
									<div className={s.date}>
										<span>{post.date}</span>
										<span className={s.dash}>/</span>
										<span>{post.category}</span>
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
