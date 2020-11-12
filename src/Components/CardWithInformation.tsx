import React,{FC} from 'react';


interface CardWithInformationProps {
    Title: string;
}

interface CardWithInformationState {

}

const CardWithInformation: FC<CardWithInformationProps> = (props) => {
    return (
        <div className='CardWithInformation'>
            <div className='CardWithInformationContent'>
                <div className='CWITitle'>{props.Title}</div>
                <div className='CWIChildren'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default CardWithInformation