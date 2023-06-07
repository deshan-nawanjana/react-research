import { useEffect, useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
    // user data list
    const [data, setData] = useState([])
    // currunt page
    const [page, setPage] = useState(1)
    // total pages
    const [total, setTotal] = useState(0)
    // method to load
    const loadData = () => {
        // fetch user data
        fetch('https://reqres.in/api/users?page=' + page)
            // parse response json
            .then(resp => resp.json())
            // set user list
            .then(data => {
                setTotal(data.total_pages)
                setData(data.data)
            })
    }
    // load users on effect of page
    useEffect(loadData, [page])
    // get users dom
    const UsersList = () => (
        data.map(item => (
            <ProfileCard
                key={item.id}
                name={item.first_name + ' ' + item.last_name}
                email={item.email}
                image={item.avatar}
            />
        ))
    )
    // get pagination dom
    const Pagination = () => (
        Array.from(".".repeat(total)).map((_item, index) => (
            <input
                key={index}
                type="button"
                data-active={index + 1 === page}
                value={index + 1}
                onClick={() => setPage(index + 1)}
            />
        ))
    )
    // return app dom
    return (
        <div className="app">
            <div className="users-list">
                <UsersList />
            </div>
            <div className="pagination">
                <Pagination />
            </div>
        </div>
    )
}

export default App
