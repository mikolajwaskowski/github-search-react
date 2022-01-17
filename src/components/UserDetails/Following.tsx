import ItemFooterValue from '../Footer/Value';
import ItemFooterWrapper from '../Footer/Wrapper';

function Following(props: { value: number }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{props.value} Following</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Following;
