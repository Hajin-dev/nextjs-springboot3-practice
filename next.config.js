/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    sassOptions:{
        includePaths: [path.join(__dirname, 'styles')],
    },
    // async rewrites(){
    //     return[
    //         {
    //             destination:'https://localhost:8080/info/:path*',
    //             source:'/info/:path*'
    //         }
    //     ]
    // }
}

module.exports = nextConfig
