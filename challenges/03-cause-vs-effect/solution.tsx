// Cause vs Effect
import { useEffect, useState } from 'react';

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira',
      },
    },
  };
}

export function UserProfile() {
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    function loadUser() {
      setIsFetchingUser(true);

      const fetchUserResponse = fetchUser();

      setUserData(fetchUserResponse.data.user);

      setIsFetchingUser(false);
    }

    loadUser();
  });

  if (isFetchingUser) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  );
}
