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
            <meta name="description" content={description} />
            <link rel="canonical" href={link} />
        </Head>
    </>);