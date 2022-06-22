export interface videoBookmark {
  id: string;
  url: string;
  title: string;
  author: string;
  addedDate: Date;
  uploadDate: string;
  duration: string;
  type: string;
  html?: string;
}

export interface photoBookmark {
  id: string;
  url: string;
  title: string;
  author: string;
  addedDate: Date;
  uploadDate: string;
  dimension: number;
  type: string;
  html?: string;
}

export interface stateType {
  bookmarks: (photoBookmark | videoBookmark)[];
  idBookmarkToShow: string | null;
}

export interface action {
  type: string;
  payload: photoBookmark | videoBookmark | string;
}

export interface inputPropsType {
  type: string;
  defaultValue: string | number;
}
