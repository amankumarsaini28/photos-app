export const PostCreator = ({ name, image }) => {
  return  (
    <div className="post-creator">
      <img src={image} width="25" height="25"  className="post-creator-dp"/>
      <h3 className="post-creator-name">{name}</h3>
    </div>
  )
}