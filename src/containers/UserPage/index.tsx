import { useEffect, useState } from 'react';
import { UserDetails } from '../../models/User';
import UserDetailsComponent from '../../components/UserDetails';
import Skeleton from '../../components/Skeleton';
import UserDetailsWrapper from '../../components/UserDetails/Wrapper';

export default function UserPage() {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setUser({ id: 123 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <main>
        <UserDetailsWrapper>
          <Skeleton type="circle" />
          <Skeleton />
        </UserDetailsWrapper>
      </main>
    );
  }

  return (
    <main>
      {user && <UserDetailsComponent user={user}></UserDetailsComponent>}
    </main>
  );
}
