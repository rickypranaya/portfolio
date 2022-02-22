import Head from 'next/head'

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title:
    'Ricky Pranaya | Fullstack developer - Web developer - Mobile developer',
  keywords:
    'Fullstack developer portfolio, Web developer portfolio, Mobile developer portfolio',
  description: "Ricky Pranaya's portfolio",
}
