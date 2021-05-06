import React from 'react';
import {SidebarLeft} from '../components/SidebarLeft';
import {Main} from '../components/Main';
import {SidebarRight} from '../components/SidebarRight';



export default function Homepage () {
    return (
        <div className="homepage">
            <SidebarLeft />
            <Main />
            <SidebarRight />
        </div>
    )
}
