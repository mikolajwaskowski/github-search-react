import { RepositoryItem } from '../../models/Repository';
import { SearchResult, SearchResultType } from '../../models/SearchResult';
import { UserItem } from '../../models/User';
import RepoListItem from './RepoListItem';
import UserListItem from './UserListItem';

function ListItem(props: { item: SearchResult }) {
  switch (props.item.type) {
    case SearchResultType.REPOSITORY:
      return (
        <RepoListItem item={props.item.data as RepositoryItem}></RepoListItem>
      );

    case SearchResultType.USER:
      return <UserListItem item={props.item.data as UserItem}></UserListItem>;
    default:
      return <></>;
  }
}

export default ListItem;
