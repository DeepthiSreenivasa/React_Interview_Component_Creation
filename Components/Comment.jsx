import { useState } from 'react'

const Comment = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [replies, setReplies] = useState([])

  const replyToComment = (id) => {
    console.log(`Comment with ${id} clicked`)
    setIsReplying(true)
  }

  const submitReply = (id) => {
    if (!replyText.trim()) {
      return
    }

    console.log(replyText)
    setReplies([...replies, { text: replyText, id: Date.now() }])
    setReplyText('')
    setIsReplying(false)
  }

  return (
    <>
      <div style={{ marginLeft: '20px' }}>
        <div>{comment.text}</div>
        <button onClick={() => replyToComment(comment.id)}>Reply</button>
        {isReplying && (
          <>
            <input
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={() => submitReply(comment.id)}>Submit</button>
          </>
        )}
        {replies.map((item) => (
          //  return <div key={reply.id}>{reply.text}</div>
          <Comment key={item.id} comment={item}></Comment>
        ))}
      </div>
    </>
  )
}

export default Comment
