import { useState } from 'react';
import RepoListItem from '../../components/RepoListItem';
import SearchResultNumber from '../../components/SearchResultNumber';
import UserListItem from '../../components/UserListItem';
import { RepositoryItem } from '../../models/Repository';
import { SearchResult, SearchResultType } from '../../models/SearchResult';
import { UserItem } from '../../models/User';

export default function HomePage() {
  const [searchResults, setSearchResults] = useState<number>(0);
  const [items, setItems] = useState<SearchResult[]>([
    { type: SearchResultType.REPOSITORY, data: { id: 123 } as RepositoryItem },
    { type: SearchResultType.USER, data: { id: 123 } as UserItem },
  ]);

  const list = items.map((item) => {
    switch (item.type) {
      case SearchResultType.REPOSITORY:
        return (
          <RepoListItem
            item={item.data as RepositoryItem}
            key={'r' + item.data.id}
          ></RepoListItem>
        );
      case SearchResultType.USER:
        return (
          <UserListItem
            item={item.data as UserItem}
            key={'u' + item.data.id}
          ></UserListItem>
        );
      default:
        return <></>;
    }
  });

  return (
    <main>
      <SearchResultNumber value={searchResults} />
      {list}
    </main>
  );
}
