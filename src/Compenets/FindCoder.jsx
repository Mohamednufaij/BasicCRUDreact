import React from 'react'
import Style from "./findcoder.module.css"
import LogoBlock from './LogoBlock'
import MenuBlock from './MenuBlock'
import BtnBlock from './BtnBlock'
function FindCoder() {
  return (
    
    <section id={Style.nav}>
        <article>
            <div className={Style.Logo}>
                <LogoBlock/>
            </div>
            <div className={Style.Menu}>
                <MenuBlock/>
            </div>
            <div className={Style.Btn}>
                <BtnBlock/>
            </div>
        </article>
    </section>
    
  )
}

export default FindCoder
