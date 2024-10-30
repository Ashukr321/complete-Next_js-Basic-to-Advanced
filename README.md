
![Logo](https://i.pinimg.com/originals/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.png)
# Complete Next Js Basic To Advanced 🚀 🔥

## Quick Reference 



## Important Key Features of Next js 
1. what is next js 
2. libaraies or framework
3. Routing 
4. Api Routes 
5. Rendering
6. Data Fetching 
7. Styling 
8. Server Side Rendering
9. Static Site Generation


## Project Setup 🧑‍💻
### 1.Test Editor 
### 2.Node js 
### 3.Installation

    npx create-next-app@latest
  
### 4. install dependencies
    npm install 
### 5. start server 
    npm run dev 

### 6. open browser 
    http://localhost:3000/

### 7. folder structure
1.package.json
    * this contains  project dependencies 
  
      {
      "name": "myapp1",
      "version": "0.1.0",
      "private": true,
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
      },
      "dependencies": {
        "myapp1": "file:",
        "next": "15.0.2",
        "react": "19.0.0-rc-02c0e824-20241028",
        "react-dom": "19.0.0-rc-02c0e824-20241028"
      },
      "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "eslint": "^8",
        "eslint-config-next": "15.0.2",
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "typescript": "^5"
      }
    }
  dev -> for the devlopment purpose 
  build -> for the build purpose production 
#  
2.next.config.ts 
* this file is used for the configuration of the next js
#
3..next folder 
* this will generate  when we run the project either in production or development mode
* From this folder our next js application will be served


#
4.Node modules folder 
* this folder store all the dependencies of the project 
* this will created when we run npm install commands
#
5. public folder  
* this will hold all the static files that serve 
#
6. src folder 
* in this folder we have another folder that is app folder 
* src > app this is newly introduced in the app router 
# 
7. src > app 
* inside the app folder we have 4 files 
 > 1. favicon.ico
 > 2. global.css -> global styles for app 
 > 3. layout.tsx -> shared across diff. pages
 > 4. page.tsx ->unique ui that show on visiting   this is children props in the layout.tsx to form a complete ui
 
 

  


## Authors

- [@Ashutosh kumar](https://github.com/Ashukr321)



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://modern-portfolio-phi-rouge.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/)
[![instagram](https://img.shields.io/badge/instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ashukr321/)


## Acknowledgements

 * Ashutosh kumar  for creating and maintaining this repository.

