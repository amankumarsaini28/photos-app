import { PostPhoto } from './PostPhoto';
import { PostCreator } from './PostCreator';

export const Post = ({ post }) => {
  const { creator, media, hash } = post;
  
  return (
    <div className="post">
      <PostCreator name={creator.name} image={creator.profileImageUrl}/>
      {
        media.map((mediaItem, index) => {
          switch (mediaItem.type) {
            case 'image':
                return <PostPhoto key={`${hash}-${mediaItem.type}-${index}`} imageUrl={mediaItem.imageUrl}/>
              break;
          
            default:
                return null;
              break;
          }
        })
      }
    </div>
  )
}