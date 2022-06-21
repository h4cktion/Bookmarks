export interface videoBookmark {
  url: string;
  title: string;
  author: string;
  addedDate: string;
  publicationDate: string;
  videoTime: string;
}

export interface photoBookmark {
  url: string;
  title: string;
  author: string;
  addedDate: string;
  publicationDate: string;
  dimension: string;
}

export interface stateType {
  bookmarks: (photoBookmark | videoBookmark)[];
}

export interface action {
  type: string;
  payload: photoBookmark | videoBookmark;
}

export interface inputPropsType {
  type: string;
  defaultValue: string | number;
}
