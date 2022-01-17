import { UserItem } from './User';
import { RepositoryItem } from './Repository';

export enum SearchResultType {
  REPOSITORY = 'REPOSITORY',
  USER = 'USER',
}

export interface SearchResult {
  type: SearchResultType;
  data: UserItem | RepositoryItem;
}
