import { Comment } from "./comment";
import { Content } from "./content";
import { LikeList } from "./likeList";

export interface Story {
  publisherName: string;
  publishedTime?: Date;
  content?: Content;
  comment?: Comment[];
  likeList?: LikeList[];
  _id?: string;
}
