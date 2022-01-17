import { useState } from 'react';
import ListItem from '../../components/ListItem';
import SearchResultNumber from '../../components/SearchResultNumber';
import { RepositoryItem } from '../../models/Repository';
import { SearchResult, SearchResultType } from '../../models/SearchResult';
import { UserItem } from '../../models/User';

export default function HomePage() {
  const [searchResults, setSearchResults] = useState<number>(0);
  const [items, setItems] = useState<SearchResult[]>([
    { type: SearchResultType.REPOSITORY, data: { id: 123 } as RepositoryItem },
    { type: SearchResultType.USER, data: { id: 123 } as UserItem },
  ]);

  const list = items.map((item, index) => {
    return <ListItem item={item} key={index}></ListItem>;
  });

  return (
    <main>
      <SearchResultNumber value={searchResults} />
      {list}
    </main>
  );
}
