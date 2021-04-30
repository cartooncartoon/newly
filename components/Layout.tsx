import Head from 'next/head';
import React from 'react'
import Header from './HeaderElements/Header'


export interface LayoutProps {
    setTheme: any;
}
 
const Layout: React.SFC<LayoutProps> = ({children, setTheme}) => {
    return (
        <div>
            <Head>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </Head>
            <Header setTheme={setTheme}/>
            {children}
        </div>
    );
}
 
export default Layout;