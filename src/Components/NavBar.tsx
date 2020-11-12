import React, { FC } from 'react';


interface NavBarProps {

}

interface NavBarState {

}

const NavBar: FC<NavBarProps> = (props) => {
    return (
        <div className='NavBar'>
            <div className='NavBarContent'>
                <div>تواصل معنا</div>
                <div>الأرشيف</div>
                <div>العضوية</div>
                <div>التدريب الذكي</div>
                <div>الخطة التدريبية</div>
                <div>الرئيسية</div>
            </div>
        </div>
    )
}
export default NavBar