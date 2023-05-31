export type ImageType = {
  img: string
  name: string
}

export type ImageUploadType = {
  title: string
  description: string
  imageurl: string
  postid?: string
}

export type Post = {
  userid: string
  postid: string
  title: string
  description: string
  imageurl: string
}
