import { PHOTO, VIDEO } from "../constants";
import { formatDuration, getFormatedDate } from "../helpers/dateHelpers";
import { photoBookmark, videoBookmark } from "../types";

export const fetchPhotoAndVideoInfo = async (
  url: string
): Promise<videoBookmark | photoBookmark | null> => {
  const response = await fetch(`https://noembed.com/embed?url=${url}`);
  const result = await response.json();
  if (result.error) return null;

  const id = `id_${new Date().getTime().toString()}`; // normalement j'utilise UUID
  switch (result.type) {
    case VIDEO:
      return {
        id,
        url,
        author: result.author_name,
        duration: formatDuration(result.duration),
        type: result.type,
        title: result.title,
        uploadDate: getFormatedDate(new Date(result.upload_date)),
        addedDate: new Date().getTime(),
        html: result.html,
      };
    case PHOTO:
      return {
        id,
        url,
        author: result.author_name,
        dimension: result.width * result.height,
        type: result.type,
        title: result.title,
        uploadDate: getFormatedDate(new Date(result.upload_date)),
        addedDate: new Date().getTime(),
        html: result.html,
      };
    default:
      return null;
  }
};
