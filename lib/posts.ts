import fs from 'fs'
import path from 'path'
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), 'posts')

interface Post {
    id: string,
    title: string,
    date: string
}
export async function getSortedPostsData() {
    const res = await fetch('https://localhost:8000/api/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    return await res.json()

    // const fileNames = fs.readdirSync(postsDirectory)
    // const allPostsData = fileNames.map(fileName => {
    //     const id = fileName.replace(/\.md$/, '')
    //
    //     const fullPath = path.join(postsDirectory, fileName)
    //     const fileContents = fs.readFileSync(fullPath, 'utf8')
    //
    //     const matterResult = matter(fileContents)
    //
    //     return {
    //         id,
    //         ...matterResult.data
    //     }
    // });

    // return allPostsData.sort((a:Post, b:Post) => {
    //     if (a.date < b.date) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
}