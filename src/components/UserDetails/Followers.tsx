import ItemFooterValue from '../Footer/Value';
import ItemFooterWrapper from '../Footer/Wrapper';
import FollowersIcon from './FollowersIcon';

function Followers(props: { value: number }) {
  return (
    <ItemFooterWrapper>
      <FollowersIcon />
      <ItemFooterValue>{props.value} Followers </ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Followers;
