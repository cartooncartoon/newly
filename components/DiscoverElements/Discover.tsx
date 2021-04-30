import React from 'react'
import Link from 'next/link'
import { ThemeContext } from '@/pages/_app'


export interface DiscoverProps {
 theme: { foreground: string; background: string; };
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

const MenuItem = ({children}: any) => {
    const theme = React.useContext(ThemeContext);
    return (
        <li className="menuItem">
            <style jsx>{`
            .menuItem {
                font-weight: 500;
                border: 1px solid ${theme.outline};
                cursor: pointer;
                display: flex;
                font-size: 14px;
                justify-content: center;
                align-items: center;
                min-width: 100px;
                border-radius: 40px;
                padding: 12px;
                margin-right: 1rem;
                transition: transform 350ms ease, -webkit-transform 350ms ease;
            }

            .menuItem:hover {
                transform: scale(0.94);
                font-weight: 500;
            }
            `}</style>
            {children}
        </li>
    )
}
 
const Discover: React.SFC<DiscoverProps> = () => {
    const theme = React.useContext(ThemeContext);
    return (  
        <div>
        <ul style={{listStyle: 'none', margin: '0 0 .5rem 0', zIndex: 99,
         paddingTop: '1rem', paddingBottom: '1rem', background: theme.background,
        paddingLeft: 32,
        display: 'flex', position: 'sticky', top: 82}}>
            <MenuItem>⭐ All</MenuItem>
            <MenuItem>🎵 Music</MenuItem>
            <MenuItem>🎮 Games</MenuItem>
            <MenuItem>🎨 Art</MenuItem>
            <MenuItem>🎞️ Film</MenuItem>
            <MenuItem>🤖 Tech</MenuItem>
            <MenuItem>📈 Stock</MenuItem>
            <MenuItem>🏠 Homes</MenuItem>
            <MenuItem>🏞️ Land</MenuItem>
            <MenuItem>⚙️ Filter & Sort</MenuItem>
        </ul>
        <div className="discover">
            <style jsx>{`
            .discover {
                display: grid;
                margin: auto;
                padding: 0 32px 32px 32px;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
            }
            
            @media (max-width: 1140px) {
                .discover {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    padding: 32px;
                }
            }

            @media (max-width: 900px) {
                .discover {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1rem;
                    padding: 32px;
                }
            }
            
            `}</style>
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
            <DiscoverItemCard />
        </div>
        </div>
    );
}
 
export default Discover;


export interface DiscoverItemCardProps {
    
}
 
const DiscoverItemCard: React.SFC<DiscoverItemCardProps> = () => {
    return (
        <div style={{maxWidth: 500, margin: 'auto'}}>
            <style jsx>{
                `
                .discoverCard {
                    height: 440px;
                    transition: transform 350ms ease, -webkit-transform 350ms ease;
                    background-size: cover;
                    box-shadow: 0 24px 17px 0 rgb(0 0 0 / 5%), 0 4.5px 6px 0 rgb(0 0 0 / 20%);
                    background-image: url('https://lh3.googleusercontent.com/a934b6sp0SYKdmEUXgqVOrLQMnG_cC2egk4ZRoc1iYCTQwLm2c0iyvxBeywAimIYi4Ac-fYws0R39DzPIMX8gXBFDeKWggtDl6dtLg');
                    cursor: pointer;
                    border-radius: 16px;
                    margin-bottom: 1rem;
                }

                .discoverCard:hover {
                    transform: scale(1.02);
                }

                p {
                    margin: 0 0 .5rem 0;
                }
                .label {
                    box-sizing: border-box;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    color: rgb(12, 80, 255);
                    -webkit-text-fill-color: transparent;
                    background: linear-gradient(to right, rgb(12, 80, 255) 0%, rgb(12, 80, 255) 24%, rgb(91, 157, 255) 55.73%, rgb(255, 116, 241) 75%, rgb(255, 116, 241) 100%) text;
                    display: flex;
                    align-items: center;
                    max-width: 80px;
                }

                .avi {
                    width: 24px;
                    height: 24px;
                    background: url("https://pbs.twimg.com/profile_images/1324883237651554305/y-LP-Mi8_200x200.jpg");
                    border-radius: 100%;
                    margin: 0px 6px; 
                    background-size: cover;
                }
                `
            }</style>
        <Link href="/petal/hello">
        <div className="discoverCard">
        </div>
        </Link>
        <div style={{paddingLeft: 16, paddingRight: 16}}>
        <p style={{fontSize: 16, fontWeight: 500, marginBottom: '.25rem'}}>A Star is Born.</p>
        <p style={{fontSize: 14, marginTop: '.5rem'}}>Unique NFT collection of hand-illustrated Zombie Stars. There will only be 333 Zombies in this collection.
        </p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <p style={{fontSize: 14, display: 'flex', alignItems: 'center'}}>By <div className="avi"/> seah
            <VerifiedIcon />
        </p>
        </div>
        </div>
        </div>
    );
}
 