import ItemFooterValue from '../../ItemFooterValue';
import ItemFooterWrapper from '../../ItemFooterWrapper';
import StarIcon from '../../StarIcon';

function Stars(props: { value: number }) {
  return (
    <ItemFooterWrapper>
      <StarIcon />
      <ItemFooterValue>{props.value.toLocaleString()}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Stars;
