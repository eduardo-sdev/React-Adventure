import './Comment.css'

export function Comment({ title, comment, author }) {

  const upperCase = text => text.toUpperCase()

  let Hr = <hr />

  return (
    <>
      <section className='comment'>
        <p className='title'>{upperCase(title)}</p>
        <p className='text'>{comment}</p>
        <p className='author'>{author}</p>
        {Hr}
      </section>
    </>
  )
}


