import { SearchResponse } from './SearchResponse';

export interface SearchUserResponse extends SearchResponse {
  items: UserItem[];
}

export interface UserItem {
  id: number;
  login: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  site_admin: true;
  score: number;
}
