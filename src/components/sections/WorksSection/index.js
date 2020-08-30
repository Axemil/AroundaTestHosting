
import Works from '@simple/Works';
import ButtonSecondary from "@simple/ButtonSecondary";

import s from './style.scss';



const WorkSection = ({worksData, tight}) => {    
    return (
        <div className={`${s.workSection} ${tight && s.workSectionTight}`}>
            <Works tight worksData={worksData}/>
        </div>
    )
};
export default WorkSection;