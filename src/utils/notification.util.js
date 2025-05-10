import { toast } from "react-toastify";

const baseConf = {
  closeButton: false,
  style: {
    width: '100%',
    justifyContent: 'center'
  },
}

const thankYou = (sender) => {
  toast(`Cảm ơn ${sender} nhiều nha 🥳🥳🥳`, {
    ...baseConf,
    style: {
      ...baseConf.style,
      color: '#000',
      border: "1px solid rgb(67 97 53 / 30%)"
    }
  });
}

const hmm = () => {
  toast("Hmm 😣 !", {
    ...baseConf,
    style: {
      ...baseConf.style,
      color: 'rgb(194 145 0)'
    }
  })
}

const error = () => {
  toast("Có lỗi rồi. Bạn thử lại sau nha. 🥲", {
    ...baseConf,
    style: {
      ...baseConf.style,
      color: "red"
    }
  })
}

const noti = {
  thankYou,
  hmm,
  error
}

export default noti;
