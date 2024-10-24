import React, { useEffect, useState } from "react";
import useAuth0Client from "../hooks/useAuth0Client";
import "./home.scss";
import Profile from "../components/Profile";
import { PostingItemType } from "../types";
import { createPosting, deletePosting, getPosts } from "../api";
import Post from "../components/Post";
import WritePost from "../components/WritePost";

const Home = () => {
  const auth0Client = useAuth0Client();
  const [postList, setPostList] = useState<PostingItemType[]>([]);

  const getPostList = async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const posts = await getPosts(token);
      setPostList(posts);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, [auth0Client]);

  const deletePostById = async (id: number) => {
    try {
      const token = await auth0Client.getTokenSilently();
      await deletePosting(token, id);

      await getPostList();
    } catch (e) {
      alert(e);
    }
  };

  const writePost = async (message: string) => {
    try {
      const token = await auth0Client.getTokenSilently();

      await createPosting(token, { message });

      await getPostList();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="posting--page-home">
      <div className="posting--page-home-left">
        <Profile />
      </div>
      <div className="posting--page-home-center">
        <WritePost writePost={writePost} />
        {postList &&
          postList.map((item) => (
            <Post key={item.id} {...item} deletePostById={deletePostById} />
          ))}
      </div>
      <div className="posting--page-home-right"></div>
    </div>
  );
};

export default Home;
