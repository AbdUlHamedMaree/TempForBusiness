import React, { FC } from 'react';


interface IconLinkProps {
    Text?: string;
}

interface IconLinkState {
    
}

const IconLink:FC<IconLinkProps> = (props) => {
    return (
        <div className='IconLink'>
            <div className='IconLinkContent'>
                    <div className='ILText'>{props.Text}</div>
                    {props.children}
                </div>
        </div>
    )
}
export default IconLink