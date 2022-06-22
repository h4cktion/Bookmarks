export interface videoBookmark {
  url: string;
  title: string;
  author: string;
  addedDate: Date;
  uploadDate: string;
  duration: string;
  type: string;
}

export interface photoBookmark {
  url: string;
  title: string;
  author: string;
  addedDate: Date;
  uploadDate: string;
  dimension: number;
  type: string;
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
