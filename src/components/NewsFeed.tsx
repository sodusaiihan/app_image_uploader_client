import React from 'react'
import { Post } from '../types'
import { Card, Image } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'

type NewsFeedProps = {
  allPost: Post[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

const NewsFeed: React.FunctionComponent<NewsFeedProps> = ({
  allPost,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full max-h-[calc(100vh - 100px)] mt-2">
      <div className="col-span-1">asas</div>
      <div className="col-span-1 h-64">
        {allPost.map((post) => (
          <Card
            className="w-full my-4"
            cover={<Image alt={post.title} src={post.imageurl} />}
            actions={[
              <EditOutlined
                key="edit"
                style={{ color: 'blue' }}
                onClick={() => onEdit(post.postid)}
              />,
              <DeleteOutlined
                style={{ color: 'red' }}
                key="delete"
                onClick={() => onDelete(post.postid)}
              />,
            ]}
          >
            <Meta
              avatar={
                <span className="w-8 h-8 bg-blue-600 rounded-full shadow-lg flex justify-center items-center text-white">
                  S
                </span>
              }
              title={post.title}
              description={post.description}
            />
          </Card>
        ))}
      </div>
      <div className="col-span-2">ssa</div>
    </div>
  )
}

export default NewsFeed
