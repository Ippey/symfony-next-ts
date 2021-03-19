import Head from "next/head"
import Layout, {siteTitle} from "../components/layout"
import utilStyls from '../styles/utils.module.css'
import {getSortedPostsData} from "../lib/posts"

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyls.headingMd}>
                <p>[Your self Introduction]</p>
                <p>
                    Sample
                    <a href="https://nextjs.org/learn">our Next.js Tutorial</a>
                </p>
            </section>
            <section className={`${utilStyls.headingMd} ${utilStyls.padding1px}`}>
                <h2 className={utilStyls.headingLg}>Blog</h2>
                <ul className={utilStyls.listItem}>
                    {allPostsData.map(({id, title, date}) => (
                        <li className={utilStyls.listItem} key={id}>
                            {title}
                            <br/>
                            {id}
                            <br/>
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData()
    console.log(allPostsData)
    return {
        props: {
            allPostsData
        }
    }
}