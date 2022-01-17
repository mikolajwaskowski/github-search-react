import ItemFooterValue from '../../ItemFooterValue';
import ItemFooterWrapper from '../../ItemFooterWrapper';

function Location(props: { value: string }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{props.value}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Location;
