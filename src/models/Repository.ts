import { SearchResponse } from './SearchResponse';
import { UserItem } from './User';

export interface SearchRepositoryResponse extends SearchResponse {
  items: RepositoryItem[];
}

export interface RepositoryItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: UserItem;
  private: false;
  description: string;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
  forks: number;
  open_issues: number;
  watchers: number;
  license: {
    key: string;
    name: string;
    url: string;
    spdx_id: string;
    node_id: string;
    html_url: string;
  };
  // removed several unused props from original API model
}
