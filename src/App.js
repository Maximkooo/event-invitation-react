import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => setUsers(json.data))
      .catch(err => {
        console.warn(err)
        alert('Data reception error')
      })
      .finally(() => setIsLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    }
    else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSendInvites = () => {
    setSuccess(!success)
  }

  return (
    <div className="App">
      {success ?
        <Success
          count={invites.length}
          onClickSendInvites={onClickSendInvites}
        />
        :
        <Users
          items={users}
          isLoading={isLoading}
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      }
    </div>
  );
}

export default App;