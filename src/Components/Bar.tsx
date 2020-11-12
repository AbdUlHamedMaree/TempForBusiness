import React, { FC } from 'react';


interface BarProps {

}

interface BarState {

}

const Bar: FC<BarProps> = (props) => {
    return (
        <div className='Bar'>
            {props.children}
        </div>
    )
}

export default Bar;