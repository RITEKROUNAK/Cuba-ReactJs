import { Film, Image,File } from "react-feather"

export const errorPages = [
    
            { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, title: 'Error 400', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, title: 'Error 401', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, title: 'Error 403', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, title: 'Error 404', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, title: 'Error 500', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, title: 'Error 503', type: 'link' }
]
export const authPages = [
            { path: `${process.env.PUBLIC_URL}/pages/auth/login`, type: 'link', title: 'Login Simple' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg1`, type: 'link', title: 'Login with Bg Img 1' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg2`, type: 'link', title: 'Login with Bg Img 2' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithValidation`, type: 'link', title: 'Login With Validation' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/signup`, type: 'link', title: 'Register Simple' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg1`, type: 'link', title: 'Register With Bg Image 1' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg2`, type: 'link', title: 'Register With Bg Image 2' },
        
]
export const usefullPages = [
            { path: `${process.env.PUBLIC_URL}/pages/auth/unlockUser`, type: 'link', title: 'Unlock User' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/forgetPwd`, type: 'link', title: 'Forget Password' },
            { path: `${process.env.PUBLIC_URL}/pages/auth/resetPwd`, type: 'link', title: 'Reset Password' },
            { path: `${process.env.PUBLIC_URL}/pages/maintenance`, type: 'link', title: 'Maintenance' }
]

export const comingsoonPages = [
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, title: 'Coming-soon',icon:File, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`, title: 'Coming-video',icon:Film, type: 'link' },
            { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`, title: 'Coming-image',icon:Image, type: 'link' },
]