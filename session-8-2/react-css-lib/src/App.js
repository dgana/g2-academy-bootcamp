import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { format } from 'date-fns'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          name: 'Matt',
          src: 'https://picsum.photos/100/100',
          created_at: new Date(2021, 0, 12),
          comment: `You're Fabulous`,
          children: []
        },
        {
          name: 'Jono',
          src: 'https://picsum.photos/100/100',
          created_at: new Date(2021, 0, 13),
          comment: 'Thank you',
          children: [
            {
              name: 'Budi',
              src: 'https://picsum.photos/100/100',
              created_at: new Date(2021, 0, 16),
              comment: 'Okay',
              children: [
                {
                  name: 'Silvi',
                  src: 'https://picsum.photos/100/100',
                  created_at: new Date(2021, 0, 22),
                  comment: 'Test',
                  children: []
                }
              ]
            },
            {
              name: 'Tono',
              src: 'https://picsum.photos/100/100',
              created_at: new Date(2021, 0, 16),
              comment: 'Yes',
              children: []
            }
          ]
        },
        {
          name: 'Steven',
          src: 'https://picsum.photos/100/100',
          created_at: new Date(2021, 0, 25),
          comment: `Hello world`,
          children: []
        }
      ]
    }
  }

  render() {
    const { data } = this.state
    return (
      <>
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>

          {data.map(({ name, src, created_at, comment, children }, i) => (
            <Comment key={i}>
              <Comment.Avatar src={src} />
              <Comment.Content>
                <Comment.Author as="a">{name}</Comment.Author>
                <Comment.Metadata>
                  <div>{format(created_at, 'dd/MM/yyyy')}</div>
                </Comment.Metadata>
                <Comment.Text>{comment}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              {children.length > 0 &&
                children.map((x, idx) => (
                  <Comment.Group key={idx}>
                    <Comment>
                      <Comment.Avatar src={x.src} />
                      <Comment.Content>
                        <Comment.Author as="a">{x.name}</Comment.Author>
                        <Comment.Metadata>
                          <div>{format(x.created_at, 'dd/MM/yyyy')}</div>
                        </Comment.Metadata>
                        <Comment.Text>{x.comment}</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                ))}
            </Comment>
          ))}

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </>
    )
  }
}

export default App
