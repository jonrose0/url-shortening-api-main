import LinkShortener from './LinkShortener'
import heroImg from './images/illustration-working.svg'
import brandRecognitionImg from './images/icon-brand-recognition.svg'
import detailedRecordsImg from './images/icon-detailed-records.svg'
import fullyCustomizableImg from './images/icon-fully-customizable.svg'

function Home() {
  return (
    <main>
      <section className='hero container'>
        <div className="hero__img-wrapper">
          <img className='hero__img' src={heroImg} alt="" />
        </div>
        <div className='hero__content'>
          <h1 className='hero__heading'>More than just shorter links</h1>
          <p className='hero__body'>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
          <a className='btn' href="/">Get Started</a>
        </div>
      </section>
      <LinkShortener />
      <section className='statistics'>
        <div className="container">
          <h2 className='statistics__heading'>Advanced Statistics</h2>
          <p className='statistics__body'>Track how your links are performing across the web with our 
    advanced statistics dashboard.</p>
          <div className='cards'>
            <div className='card'>
              <div className='card__img-wrapper'>
                <img src={brandRecognitionImg} alt="" />
              </div>
              <h3>Brand Recognition</h3>
              <p className='card__body'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className='card'>
              <div className='card__img-wrapper'>
                <img src={detailedRecordsImg} alt="" />
              </div>
              <h3>Detailed Records</h3>
              <p className='card__body'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className='card'>
              <div className='card__img-wrapper'>
                <img src={fullyCustomizableImg} alt="" />
              </div>
              <h3>Fully Customizable</h3>
              <p className='card__body'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
            <div className='cards__line'></div>
          </div>
        </div>
      </section>
      <section className='cta'>
        <h2>Boost your links today</h2>
        <a className='btn btn--lg' href="/">Get Started</a>
      </section>
    </main>
  )
}

export default Home