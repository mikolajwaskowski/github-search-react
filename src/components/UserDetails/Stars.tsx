import ItemFooterValue from '../Footer/Value';
import ItemFooterWrapper from '../Footer/Wrapper';
import StarIcon from '../StarIcon';

function Stars(props: { value: number }) {
  return (
    <ItemFooterWrapper>
      <StarIcon />
      <ItemFooterValue>{props.value.toLocaleString()}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Stars;
