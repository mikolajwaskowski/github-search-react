import ItemFooterValue from '../../Footer/Value';
import ItemFooterWrapper from '../../Footer/Wrapper';

function License(props: { value: string }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{props.value}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default License;
