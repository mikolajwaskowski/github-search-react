import ItemFooterValue from '../../ItemFooterValue';
import ItemFooterWrapper from '../../ItemFooterWrapper';
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
