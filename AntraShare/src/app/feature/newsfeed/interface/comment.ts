import { Content } from "./content";

export interface Comment {
    publisherName: string;
    publishedTime?: Date;
    content?: Content;
}