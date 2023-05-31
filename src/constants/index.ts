import { upload, signUp, view } from '../asset'
import { ImageType } from '../types'

const backgrounImage =
  'https://img.freepik.com/free-vector/hand-drawn-japanese-wave-pattern-design_23-2149478677.jpg?w=826&t=st=1684840098~exp=1684840698~hmac=c84131e4a8432fd97d4822d0ae2bb6ae26b0d6be6d1a5b9ff158f22637a76204'

const images: ImageType[] = [
  {
    img: signUp,
    name: 'signUp',
  },
  {
    img: upload,
    name: 'upload',
  },
  {
    img: view,
    name: 'view',
  },
]

enum LOGINFO {
  SIGN_UP = 'Бүртгүүлэх',
  SIGN_IN = 'Нэвтрэх',
  ALREADY_SIGNED = 'Бүргэлтэй хэрэглэгч',
  CREATE_USER = 'Шинээр бүртгүүлэх',
}

export { images, backgrounImage, LOGINFO }
