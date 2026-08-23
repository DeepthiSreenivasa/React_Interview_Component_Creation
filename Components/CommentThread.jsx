import Comment from './Comment'

const CommentThread = () => {
  const comments = [
    {
      id: 1,
      text: 'This is a great post!',
    },
    {
      id: 2,
      text: 'I completely agree.',
    },
    {
      id: 3,
      text: 'Very interesting.',
    },
  ]

  return (
    <>
      <h1>This is comment Thread comp</h1>
      {comments.map((item) => (
        <Comment key={item.id} comment={item}></Comment>
      ))}
    </>
  )
}

export default CommentThread
