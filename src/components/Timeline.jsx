import { Post } from './Post';

const posts = [
  {
    hash: "ho812bn8o1237",
    creator: {
      name: "Tim Peters",
      profileImageUrl: "https://amankumarsaini28.github.io/stock-images/profile/1.jpg"
    },
    media: [
      {
        type: "image",
        imageUrl: "https://amankumarsaini28.github.io/stock-images/pets/1.jpg"
      }
    ]
  },
  {
    hash: "ho812bn8oasd33",
    creator: {
      name: "Matt Jason",
      profileImageUrl: "https://amankumarsaini28.github.io/stock-images/profile/2.jpg"
    },
    media: [
      {
        type: "image",
        imageUrl: "https://amankumarsaini28.github.io/stock-images/pets/2.jpg"
      }
    ]
  },
  {
    hash: "8o9a7h6d8asd67",
    creator: {
      name: "Blah Singh",
      profileImageUrl: "https://amankumarsaini28.github.io/stock-images/profile/3.jpg"
    },
    media: [
      {
        type: "image",
        imageUrl: "https://amankumarsaini28.github.io/stock-images/pets/3.jpg"
      }
    ]
  }
]

export const Timeline = () => {
  return (
    <div className="timeline">
      <h2>Hello User!</h2>
      {posts.map(post => {
        return <Post key={post.hash} post={post}/>
      })}
    </div>
  )
}