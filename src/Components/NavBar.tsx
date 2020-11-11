import React, { Component } from 'react'

interface NavBarProps{
    
}

interface NavBarState{

}

export default class NavBar extends Component<NavBarProps,NavBarState> {
    render() {
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
}
