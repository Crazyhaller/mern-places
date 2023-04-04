import UsersList from '../components/UsersList'

function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Gareth Bale',
      image:
        'https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      places: 4,
    },
  ]

  return <UsersList items={USERS} />
}

export default Users
