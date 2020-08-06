
import Works from '@simple/Works';
import ButtonSecondary from "@simple/ButtonSecondary";

import s from './style.scss';



const WorksSection = ({worksData, title}) => {    
    return (
        <div className={s.worksSection}>
            <Works worksData={worksData}/>
			<div className={s.buttonWrapper}>
				<ButtonSecondary icon="plus">More works</ButtonSecondary>
			</div>
        </div>
    )
};
export default WorksSection;