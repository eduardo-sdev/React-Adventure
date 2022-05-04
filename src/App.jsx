import { Text } from './comp/Text'
import { Comment } from './comp/Comment'

export const App = () => {
  return (
    <>
      <h1>
        <Text />
        <Comment 
          title="foobar"
          comment="ffoobarfoob foobar aroobar"
          author="foo"
        />
        <Comment 
          title="foobar"
          comment="ff ooba rfoob foobar aroobar"
          author="developer"
        />
        <Comment 
          title="foobar"
          comment="ffoi obarfoob foobar aroob r"
          author="bar"
        />
      </h1>
    </>
  )
}

