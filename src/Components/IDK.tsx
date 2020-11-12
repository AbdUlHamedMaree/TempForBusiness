import React, {FC} from 'react';


interface IDKProps {
    Title: string;
    URL: string;
}

interface IDKState {

}

const IDK:FC<IDKProps> = (props) => {

    const IDKOnClick = (URL: string) => {
        alert(URL)
    }

    return (
        <div className='IDK' onClick={() => IDKOnClick(props.URL)}>
            <div className='IDKElCon'>
                <div className='IDKIcon'>
                    {props.children}
                </div>
                <div className='Title'>
                    {props.Title}
                </div>
            </div>
        </div>
    )
}
export default IDK
