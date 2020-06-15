import React from 'react'
import Aux from '../../HOC/aux';
import './Layout.css'
import Toolbar from '../../UI/Navigation/Toolbar/Toolbar'
const Layout = (props) =>{
    return (
        <Aux>
            <div className = 'Content'>
                <Toolbar/>
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
        
    );
}

export default Layout;