import React from 'react'

export interface HomeBGProps {
    
}
 
const HomeBG: React.SFC<HomeBGProps> = () => {
    return (
        <div className="homeBG">
            <style jsx>{`
            .homeBG {
                width: 100%;
                display: flex;
                padding: 32px;
                margin: 0 0 2rem 0;
            }

            .homeCard {
                border-radius: 16px;
            }
            `}</style>
            <div 
            className="homeCard"
            style={{width: '100%', height: 'calc(75vh + 2rem)', background: 'lightgray'}}>

            </div>
        </div>
    );
}
 
export default HomeBG;