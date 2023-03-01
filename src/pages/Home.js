import React from 'react'
import './CSS/home.css'
import homeimg from './Homeimg.png'
export default function Home() {
  return (
    <div className="container home_cont">
      <div className="row">
        <div className="inffobox">
        <h3>Tervetuloa <span>EetuOy</span> sivuille</h3>
        <p>Tämä sivusto on tehty omaksi ilokseni ja hiodakseni omia koodaus taitoja.</p>
        </div>
        <div className="image_section"> {/**Kuva <a href="https://pixabay.com/fi/users/elf-moondance-19728901/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6631394">Moondance</a> <a href="https://pixabay.com/fi//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6631394">Pixabaystä</a> */}
           <img className="home_Image" src={homeimg} />
        </div>
      </div>
    </div>
  )
}
