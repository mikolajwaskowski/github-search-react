import ItemFooterValue from '../ItemFooterValue';
import ItemFooterWrapper from '../ItemFooterWrapper';

function Issues(props: { value: number }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{props.value} issues need help</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Issues;
