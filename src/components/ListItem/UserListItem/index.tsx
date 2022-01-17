import { UserItem } from '../../../models/User';
import Description from '../Description';
import Footer from '../Footer';
import TextContent from '../TextContent';
import Wrapper from '../Wrapper';
import Avatar from './Avatar';
import Label from './Label';
import Location from './Location';
import Name from './Name';

function UserListItem(props: { item?: UserItem }) {
  return (
    <Wrapper>
      <Avatar
        url={'url'}
        src={'https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff'}
      />
      <TextContent>
        <Name url={'url'} name={'Michał Muskała'} />
        <Description>{'ddasda'}</Description>
        <Label>{'ddasda'}</Label>
        <Footer>
          <Location value={'San Francisco'} />
        </Footer>
      </TextContent>
    </Wrapper>
  );
}

export default UserListItem;
