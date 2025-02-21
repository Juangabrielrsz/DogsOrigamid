import React from 'react'

const UserPost = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <div>
        <input type='text' placeholder='username' value={username} onChange={({target}) => setUsername(target.value)}>
        </input>

        <input type='text' placeholder='password' value={password} onChange={({target}) => setPassword(target.value)}>
        </input>

        <input type='text' placeholder='email' value={email} onChange={({target}) => setEmail(target.value)}>
        </input>
    </div>
  )
}

export default UserPost