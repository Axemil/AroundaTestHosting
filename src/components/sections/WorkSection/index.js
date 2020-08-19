
import Works from '@simple/Works';
import ButtonSecondary from "@simple/ButtonSecondary";

import s from './style.scss';



const WorkSection = ({worksData}) => {    
    return (
        <div className={s.workSection}>
            <Works worksData={worksData}/>
        </div>
    )
};
export default WorkSection;