import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID WLL5TVVTRz_0UpJDS8nPCdu6uVDxhmiTBJlWtAXcs3Y',
    }
})