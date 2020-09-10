import Head from 'next/head';

export default ({ h1, title, description, link }) => (
    <>
        <h1 className={'h1-seo'}>
            { h1 }
        </h1>
        <Head>
            <title>
                { title }
            </title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta
                property="twitter:image"
                content="https://arounda.agency/assets/images/socialBg.jpg"
            />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta
                property="og:image"
                content="https://arounda.agency/assets/images/socialBg.jpg"
            />
            <meta property="og:url" content={link} />
            <link rel="canonical" href={link} />

        </Head>
    </>);