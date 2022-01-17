import ItemFooterValue from '../../Footer/Value';
import ItemFooterWrapper from '../../Footer/Wrapper';

function Location(props: { value: string }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{props.value}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Location;
