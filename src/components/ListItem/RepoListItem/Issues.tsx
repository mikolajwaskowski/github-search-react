import ItemFooterValue from '../../Footer/Value';
import ItemFooterWrapper from '../../Footer/Wrapper';

function Issues(props: { value: number }) {
  return (
    <ItemFooterWrapper>
      <ItemFooterValue>{props.value} issues need help</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Issues;
