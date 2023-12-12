import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCards from '../UserCards/UserCards';
import Test from '../Test/Test';

const CardTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3001/usermanager/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  return (
    <>
      <div className='buttonContainer' style={{ margin: '10px' }}>
        <Test />
      </div>

      <div className='flex-container'>
        {users.map(user => (
          <UserCards key={user.id} user={user} />
        ))}
      </div>
    </>

  );
};

export default CardTable;
