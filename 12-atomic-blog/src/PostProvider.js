import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

// We created our own provider from taking all logic into App component.
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 1) CREATE CONTEXT
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  // Add new post
  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  // Clear all posts
  function handleClearPosts() {
    setPosts([]);
  }

  //! When we click fakeDarkmode app is re-rendered, so context re-rendered and
  // value object recreated, so it trigger childs too. Let's fix it
  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchedPosts, searchQuery]);

  return (
    // Wrap whole JSX into PostContext.Provider
    <PostContext.Provider
      // Then pass all props as a Provider value
      value={value}
    >
      {children}
    </PostContext.Provider>
  );
}

// For fix always repeating useContext(PostContext) create our own hook
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
