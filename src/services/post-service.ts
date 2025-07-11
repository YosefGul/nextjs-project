import { Post } from "@/types/post.types";
import { fetchClient } from "@/utils/fetch-client";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetchClient<Post[], Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response;
};
