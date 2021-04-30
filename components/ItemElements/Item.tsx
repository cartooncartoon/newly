import { ThemeContext } from '@/pages/_app';
import Head from 'next/head';
import { callbackify } from 'node:util';
import React from 'react'


export interface ItemProps {
    
}

function VerifiedIcon() {
    const theme = React.useContext(ThemeContext);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8pt"
        height="8pt"
        style={{marginLeft: 6}}
        viewBox="0 0 512 512"
        fill="lightgray"
      >
        <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm129.75 201.75L247.082 340.414c-4.16 4.16-9.621 6.254-15.082 6.254s-10.922-2.094-15.082-6.254l-69.332-69.332c-8.344-8.34-8.344-21.824 0-30.164 8.34-8.344 21.82-8.344 30.164 0l54.25 54.25 123.586-123.582c8.34-8.344 21.82-8.344 30.164 0 8.34 8.34 8.34 21.82 0 30.164zm0 0"></path>
      </svg>
    );
  }

const MenuItem = ({children, active, onClick}: any) => {
    const theme = React.useContext(ThemeContext);
    return (
        <li 
        onClick={onClick}
        className={active === true ? "menuItem active" : "menuItem"}>
            <style jsx>{`
            .menuItem {
                font-weight: 600;
                color: ${theme.outline};
                cursor: pointer;
                display: flex;
                font-size: 16px;
                justify-content: center;
                align-items: center;
                padding: 12px;
                margin-right: 2rem;
                transition: transform 350ms ease, -webkit-transform 350ms ease;
            }

            .menuItem:hover {
                transform: scale(0.94);
                color: ${theme.foreground};
                font-weight: 600;
            }

            .active  {
                color: ${theme.foreground};
                box-shadow: 0 -4px 0 ${theme.foreground} inset;
            }

            `}</style>
            {children}
        </li>
    )
}


const MenuuItem = ({children, active, onClick}: any) => {
    const theme = React.useContext(ThemeContext);
    return (
        <li 
        onClick={onClick}
        className={active === true ? "menuItem active" : "menuItem"}>
            <style jsx>{`
            .menuItem {
                font-weight: 500;
                cursor: pointer;
                display: flex;
                justify-content: center;
                font-size: 16px;
                align-items: center;
                max-width: 90px;
                margin-right: 1.75rem;
                margin-bottom: 1rem;
                transition: transform 350ms ease, -webkit-transform 350ms ease;
            }

            .menuItem:hover {
                transform: scale(0.94);
                font-weight: 500;
            }

            .menuItem .active {
                color: ${theme.foreground};
            } 
            `}</style>
            {children}
        </li>
    )
}

const Item: React.SFC<ItemProps> = () => {
    return (
        <div>
            <ItemDesc />
        </div>
    );
}


const ItemDescType = ({ itemDescType }: any) => {
    switch (itemDescType) {
        case 'Story':
            return <Story />
            break;
        case 'Discuss':
            return <Discuss />
            break;
        case 'Updates':
            return <Updates />
            break;
        default:
            break;
    }
}


const ItemDesc = () => {
    const theme = React.useContext(ThemeContext);
    const [itemDescType, setItemDescType] = React.useState('Story');
    
    
    let active = true;

    return (
        <div style={{ display: 'flex', height: '100%', width: '100%'}}>
            <style jsx>{`
                .buttonsWrapper {
                    display: inline-block;
                    margin-bottom: 1rem;
                    width: 100%;
                    padding: 3px;
                    border-radius: 80px;
                    background-image: linear-gradient(
                63deg
                , #edb8ff, #6148ff);
                    box-shadow: 0 24px 17px 0 rgb(74 58 255 / 5%), 0 4.5px 6px 0 rgb(0 0 0 / 20%);
                    -webkit-transition: -webkit-transform 350ms ease;
                    transition: -webkit-transform 350ms ease;
                    transition: transform 350ms ease;
                    transition: transform 350ms ease, -webkit-transform 350ms ease;
                    cursor: pointer;
                }

                .btn {
                    display: block;
                    width: 100%;
                    align-self: stretch;
                    padding: 26px 72px;
                    border-radius: 80px;
                    background: white;
                    -webkit-transition-property: none;
                    transition-property: none;
                    font-size: 22px;
                    line-height: 24px;
                    font-weight: 600;
                    text-align: center;
                    cursor: pointer;
                    border-bottom-width: 0px;
                    border-left-width: 0px;
                    border-right-width: 0px;
                    border-top-width: 0px;
                    text-decoration: none;
                    appearance: none;
                    align-items: center;
                }

                .progressWrapper {
                    width: 100%;
                    height: 6px;
                    border-radius: 3px;
                    display: inline-block;
                    background-color: lightgray;
                    overflow: hidden;
                    position: relative;
                }

                .progressBar {
                    background-color: #0049ff;
                    height: 6px;
                    width: 67%;
                }

                h1 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin: 0 0 .5rem 0;
                }

                p { 
                    margin: 0 0 .75rem 0;
                }

                ul { 
                    padding: 0;
                    display: flex;
                }

                img { 
                    margin: 0 0 1rem 0;
                    width: 100%;
                }

                .avi {
                    width: 24px;
                    height: 24px;
                    background: url("https://pbs.twimg.com/profile_images/1324883237651554305/y-LP-Mi8_200x200.jpg");
                    border-radius: 100%;
                    margin: 0px 6px 0px 0px; 
                    background-size: cover;
                }
            `}</style>
        <div style={{height: '100%', width: '100%'}}>
            <div style={{display: 'flex'}}>
            <div style={{width: 800, height: 'calc(100vh - 82px)', 
                boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
                background: 'lightgray', flexShrink: 0, overflow: 'hidden'}}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rae6NzMWTRo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
                <div style={{padding: 24}}>
                <h1 style={{fontWeight: 500}}>Enten - Smart Headphones to Measure Focus & Work</h1>
                <ul>
                <MenuuItem> <div className="avi"></div><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>seah <VerifiedIcon /></div></MenuuItem>
                <MenuuItem>🤖 Tech</MenuuItem>
                <MenuuItem>🚀 Raise</MenuuItem>
                </ul>
                <div>
                <p style={{fontSize: 18, lineHeight: 1.5}}>Enten by Neurable uses EEG brainwave sensors to measure your focus so you work smarter, not longer</p>
                <p style={{fontSize: 18, lineHeight: 1.5}}>I've raised 97,344 from my 🎯 100,000 goal. I'm already at 67% percent at the goal. Join the other 😃 48 supporters in helping me complete it. You can do this by 🥰 supporting and/or 🙌 sharing! </p>
                <p style={{fontSize: 18, lineHeight: 1.5}}>Pela works hard to verify and assist those with their own petals to help raise and accomplish their mission. So, be rest assured that we look through each submission for authenticity.</p>
                </div>
                </div>
            </div>
           {/*
            <ul style={{listStyle: 'none', margin: '0 0 2rem 0', zIndex: 99, display: 'flex', position: 'sticky', top: 82,
            paddingTop: '1rem',
            borderBottomColor: theme.outline, borderBottomWidth: 1, borderBottomStyle: 'solid', background: theme.background,
        }}>
            <MenuItem active={itemDescType === "Story" ? active : null} onClick={() => setItemDescType('Story')}>📖 STORY</MenuItem>
            <MenuItem active={itemDescType === "Discuss" ? active : null} onClick={() => setItemDescType('Discuss')}>💭 DISCUSS</MenuItem>
            <MenuItem active={itemDescType === "Updates" ? active : null} onClick={() => setItemDescType('Updates')}>📰 UPDATES</MenuItem>
            </ul>
            <div>
                <ItemDescType itemDescType={itemDescType} />
            </div>
            */}
        </div>
        </div>
    )
}
 
export default Item;


const Story = () => {
    const theme = React.useContext(ThemeContext);
    return (
            <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
            <h2 style={{color: theme.foreground}}>Enten by Neurable uses brainwave sensors to measure your focus and work.</h2>
            <p style={{color: theme.foreground}}>
            The average individual spends only 2 hours and 53 minutes of their standard workday actively getting tasks done.  

With the day devoured by distractions, physical interruptions, and all those mind wanderings about everything going on in the world — it’s no wonder we feel overwhelmed.

Add that to the fact that every time you lose your focus — it takes an average 11 minutes to regain it. (Yikes).

Whether a buzz from your phone or a child bursting into a room with a question, your brain has to start the attention train all over again.

It’s no wonder we all have:  

Unfinished work
Work-related stress
Increased late-night work sessions
Poor mental health
 

Enten by Neurable shows you how and when you work best, empowering you to minimize distractions, maximize focus, do more deep work, and win back time so you can focus on what matters most to you.


            </p>
            <img width="100%" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1618995623/fhisptbxbmprbxfba4bb.jpg" />
                <img width="100%" src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1619490178/qxnd32iswzsgb0dajn3c.png" />
            </article>
    )
}


const Discuss = () => {
    return (
        <div>
            <style jsx>{
                `
                .input {
                    display: block;
                    width: 100%;
                    box-shadow: none;
                    background: #fff;
                    font-weight: 400;
                    height: 86px;
                    resize: none;
                    letter-spacing: 0;
                    border: 1px solid #ddd;
                    color: #333;
                    -webkit-transition: all .1s ease-in-out;
                    transition: all .1s ease-in-out;
                    padding: 8px 10px;
                    font-size: 16px;
                    border-radius: 4px;
                }
                `
            }</style>
            <textarea placeholder="Post a question or comment." className="input"/>
        </div>
    )
}


const Updates = () => {
    return (
        <div>
            <a className="twitter-timeline" href="https://twitter.com/ifoundseah?ref_src=twsrc%5Etfw">Tweets by ifoundseah</a> 
        </div>
    )
}