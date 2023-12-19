import { PostPhoto } from './PostPhoto';
import { PostCreator } from './PostCreator';
import { PostCaption } from './PostCaption';
import { PostSocialInteractions } from './PostSocialInteractions';

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

            case 'text':
                return <PostCaption key={`${hash}-${mediaItem.type}-${index}`} text={mediaItem.text} />;

            default:
                return null;
          }
        })
      }
      <PostSocialInteractions />
    </div>
  )
}