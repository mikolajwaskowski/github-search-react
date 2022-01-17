import { RepositoryItem } from '../../../models/Repository';
import Description from '../Description';
import Footer from '../Footer';
import Name from './Name';
import TextContent from '../TextContent';
import UpdatedAt from './UpdatedAt';
import Wrapper from '../Wrapper';
import Icon from './Icon';
import Issues from './Issues';
import Language from './Language';
import License from './License';
import Stars from './Stars';

function RepoListItem(props: { item: RepositoryItem }) {
  return (
    <Wrapper>
      <Icon />
      <TextContent>
        <Name url={'url'} name={'name'} />
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
