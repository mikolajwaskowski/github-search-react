import ItemFooterValue from '../../Footer/Value';
import ItemFooterWrapper from '../../Footer/Wrapper';
import LanguageDot from './LanguageDot';

function Language(props: { value: string }) {
  return (
    <ItemFooterWrapper>
      <LanguageDot language={props.value} />
      <ItemFooterValue>{props.value}</ItemFooterValue>
    </ItemFooterWrapper>
  );
}

export default Language;
