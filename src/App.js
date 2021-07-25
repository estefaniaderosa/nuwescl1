import React from 'react'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile/Profile'

const App = () => {
    return (
        <div>
            <Sidebar>
                <Profile />
            </Sidebar>
        </div>
    )
}

export default App
