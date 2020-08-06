
import Works from '@simple/Works';
import ButtonSecondary from "@simple/ButtonSecondary";

import s from './style.scss';



const WorkSection = ({worksData}) => {    
    return (
        <div className={s.workSection}>
            <Works worksData={worksData}/>
			<div className={s.buttonWrapper}>
				<ButtonSecondary icon="plus">More works</ButtonSecondary>
			</div>
        </div>
    )
};
export default WorkSection;