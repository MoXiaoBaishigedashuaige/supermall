import axios from 'axios'


export function request(config) {

   
        const instancel = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout: 5000
        })

        instancel.interceptors.response.use(
          res => {
            return res.data
        },err => {
            console.log(err);
        })


        //发送真正的网络请求
        return instancel(config)
    }

    

