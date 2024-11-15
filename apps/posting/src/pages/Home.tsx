import React, { Suspense, useEffect, useState } from "react";
import { useAuth0Client } from "@federation/shared";
import Profile from "../components/Profile";
import { PostingItemType } from "../types";
import { createPosting, deletePosting, getPosts } from "../api";
import Post from "../components/Post";
import WritePost from "../components/WritePost";
import "./home.scss";

const RecommendConnectionsContainer = React.lazy(
  () => import("fragment_recommend_connections/container")
);
const RecommendJobsContainer = React.lazy(
  () => import("job/fragment_recommend_jobs")
);

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
      <div className="posting--page-home-right">
        <Suspense fallback={<div>loading</div>}>
          <RecommendConnectionsContainer />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <RecommendJobsContainer />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
