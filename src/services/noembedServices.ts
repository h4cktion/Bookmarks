import { PHOTO, VIDEO } from "../constants";
import { getFormatedDate } from "../helpers/dateHelpers";
import { photoBookmark, videoBookmark } from "../types";

export const fetchPhotoAndVideoInfo = async (
  url: string
): Promise<videoBookmark | photoBookmark | null> => {
  const response = await fetch(`https://noembed.com/embed?url=${url}`);
  const result = await response.json();
  if (result.error) return null;
  switch (result.type) {
    case VIDEO:
      return {
        url,
        author: result.author_name,
        duration: result.duration,
        type: result.type,
        title: result.title,
        uploadDate: getFormatedDate(new Date(result.upload_date)),
        addedDate: new Date(),
      };
    case PHOTO:
      return {
        url,
        author: result.author_name,
        dimension: result.width * result.height,
        type: result.type,
        title: result.title,
        uploadDate: getFormatedDate(new Date(result.upload_date)),
        addedDate: new Date(),
      };
    default:
      return null;
  }
};
