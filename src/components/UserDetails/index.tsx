import { UserDetails } from '../../models/User';
import Avatar from '../Avatar';
import Footer from '../Footer';
import H1 from '../H1';
import Followers from './Followers';
import Following from './Following';
import Nick from './Nick';
import Stars from './Stars';
import Wrapper from './Wrapper';

function UserDetailsComponent(props: { user: UserDetails }) {
  return (
    <Wrapper>
      <Avatar
        url={'#'}
        src={'https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff'}
        size={'xl'}
      />
      <H1>{'Michał Maliszewski'}</H1>
      <Nick>{'dedsad'}</Nick>
      <Footer>
        <Followers value={123} />
        <Following value={123} />
        <Stars value={123} />
      </Footer>
    </Wrapper>
  );
}

export default UserDetailsComponent;
