import ItemFooterValue from '../../ItemFooterValue';
import ItemFooterWrapper from '../../ItemFooterWrapper';
import { timeAgo } from './time-ago';

function UpdatedAt(props: { value: string }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{timeAgo(props.value)}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default UpdatedAt;
