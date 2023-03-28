export interface Newsfeed {
  _id: number;
  publishedTime: Date;
  publisherName: string;
  content: object;
  comment: object[];
  likedIdList: object[];
}
