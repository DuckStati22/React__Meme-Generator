import React from 'react';

function Meme() {

  const [meme, setMeme] = React.useState(
    {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
    }
  )

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main className="main">
      <div className="form" action="">
        <input 
          className="form__input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
        <input
          className="form__input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          />
        <button onClick={getMemeImage} className="form__btn">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className='meme-img'/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      
    </main>
  )
}

export default Meme