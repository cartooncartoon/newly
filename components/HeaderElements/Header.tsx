import React from 'react'
import Link from 'next/link'
import Modal from './Modal';
import { ThemeContext } from '@/pages/_app';

export interface HeaderProps {
    setTheme: any;
}


const themes = {
    light: {
      foreground: "#000000",
      background: "white",
      outline: "lightgray",
    },
    dark: {
      foreground: "#ffffff",
      background: "rgb(18, 18, 18)",
      outline: "rgba(255, 255, 255, 0.1)",
    }
  };

function UserIcon() {
    return (
      <svg
        style={{margin: '0 .5rem 0 0'}}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        fill="lightgray"
        height="18"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-60.844 0-116.142-24.177-156.812-63.419C121.212 351.287 184.487 305 256 305s134.788 46.287 156.813 113.582C372.142 457.823 316.844 482 256 482zm-75-282c0-41.355 33.645-75 75-75s75 33.645 75 75-33.645 75-75 75-75-33.645-75-75zm254.34 193.354c-22.07-51.635-65.404-90.869-117.777-108.35C343.863 265.904 361 234.918 361 200c0-57.897-47.103-105-105-105s-105 47.103-105 105c0 34.918 17.137 65.904 43.438 85.004-52.374 17.481-95.708 56.715-117.778 108.35C47.414 355.259 30 307.628 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 51.628-17.414 99.259-46.66 137.354z"></path>
      </svg>
    );
  }

function SearchIcon() {
    const theme = React.useContext(ThemeContext);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          fill={theme.foreground}
          fillRule="evenodd"
          d="M11.421 12.6a6.667 6.667 0 111.178-1.178l4.49 4.49a.833.833 0 01-1.178 1.178l-4.49-4.49zm.912-5.266a5 5 0 11-10 0 5 5 0 0110 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

const Button = ({children, onClick}: any) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div 
        onClick={onClick}
        className="btn">
            <style jsx>{`
            .btn {
                border-color: transparent;
                display: flex;
                flex-flow: row nowrap;
                height: 40px;
                padding-left: 22px;
                padding-top: 22px;
                padding-bottom: 22px;
                padding-right: 22px;
                margin: 0 0 0 1rem;
                min-width: auto;
                border: 1px solid ${theme.outline};
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                border-radius: 90px;
                font-size: 14px;
                font-weight: 500;
                font-family: inherit;
                transition: all 0.12s ease-in-out 0s;
                transform-origin: center center;
                user-select: none;
                cursor: pointer;
            }

            .btn:hover {
                transform: scale(0.94);
            }
            `}</style>
            {children}
        </div>
    )
}
 
const Header: React.SFC<HeaderProps> = ({setTheme}) => {
    const [login, setLogin] = React.useState(false);
    const theme = React.useContext(ThemeContext);

    return (
        <div style={{height: 82, position: 'sticky',
        background: theme.background, zIndex: 999, justifyContent: 'space-between',
        color: theme.foreground,
        paddingLeft: 32, paddingRight: 32, display: 'flex', alignItems: 'center',
        top: 0, borderBottomColor: theme.outline, borderBottomWidth: 1, borderBottomStyle: 'solid'}}>
            <style jsx>{`
            .logo {
                width: 48px;
                cursor: pointer;
                overflow: hidden;
                background: url('https://firebasestorage.googleapis.com/v0/b/pela-34923.appspot.com/o/P.png?alt=media&token=86f6d1ec-38f5-46f5-9073-51677b8bb5d0');
                margin: 0 .5rem 0 0;
                height: 48px;
                background-size: cover;
                border-radius: 100%;
                transition: all 0.12s ease-in-out 0s;
                transform-origin: center center;
            }

            .logo:hover {
                transform: scale(0.94);
            }

            p { 
                margin: 0 1rem 0 1rem;
                font-weight: 700;
                color: gray;
            }

            .searchbar {
                max-width: 100%;
                width: 18vw;
                min-width: 0%;
                font-size: 14px;
                border-radius: 24px;
                border: 1px solid ${theme.outline};
                display: flex;
                align-items: center;
                height: 48px;
                margin: 0 1rem 0 1rem;
                padding-right: 24px;
                padding-left: 24px;
            }

            input { 
                background: none;
                color: ${theme.foreground};
                width: 100%;
                outline: none;
                border: none;
            }

            input::placeholder {
                font-size: 14px;
                color: ${theme.foreground}
            }
            `}</style>
            {login && <Modal setLogin={setLogin} />}
            <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{display: 'flex'}}>
            <Link href="/">
            <div className="logo">
                <img 
                width="100%"
                height="100%"
                src="https://firebasestorage.googleapis.com/v0/b/pela-34923.appspot.com/o/P%20(3).png?alt=media&token=2313599a-c7ed-486c-9dbe-11dd7783a1de" />
            </div>
            </Link>
            <div className="searchbar">
                <input placeholder="Search"></input>
                <SearchIcon />
            </div>
            </div>
            <div style={{display: 'flex'}}>
            </div>
            </div>
            <div style={{display: 'flex'}}>
            <Button>💫 Discover</Button>
            <Button>✨ Create</Button>
            <Button onClick={() => theme.background === 'white' ? setTheme(themes.dark) : setTheme(themes.light)}>⚙️</Button>
            </div>
        </div>
    );
}
 
export default Header;