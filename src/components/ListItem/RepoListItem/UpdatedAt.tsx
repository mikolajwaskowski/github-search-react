import ItemFooterValue from '../../Footer/Value';
import ItemFooterWrapper from '../../Footer/Wrapper';
import { timeAgo } from './time-ago';

function UpdatedAt(props: { value: string }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{timeAgo(props.value)}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default UpdatedAt;
