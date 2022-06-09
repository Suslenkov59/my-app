import React from "react";
import s from './Sidebar.module.css';

const Sidebar = (props) => {

     /*let sidebarElements =
         props.sidebar.map(p => <Sidebar sidebar={p.sidebar}/>)*/

    return <header className={s.sidebar}>
        <div className={s.sidebar}>
            {/*{sidebarElements}*/}
        </div>
            </header>
}

export default Sidebar