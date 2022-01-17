import Wrapper from './Wrapper';
import { RepositoryItem } from '../../models/Repository';
import Icon from './Icon';
import TextContent from './TextContent';
import Name from './Name';
import Description from './Description';
import Footer from './Footer';
import Stars from './Stars';
import Language from './Language';
import License from './License';
import UpdatedAt from './UpdatedAt';
import Issues from './Issues';

function RepoListItem(props: { item: RepositoryItem }) {
  return (
    <Wrapper>
      <Icon />
      <TextContent>
        <Name href={'url'} target="_blank">
          {'name'}
        </Name>
        <Description>{'description'}</Description>
        <Footer>
          <Stars value={123} />
          <Language value={'Java'} />
          {'MIT' && <License value={'MIT'} />}
          <UpdatedAt value={'2021-11-01'} />
          {7 && <Issues value={7} />}
        </Footer>
      </TextContent>
    </Wrapper>
  );
}

export default RepoListItem;
