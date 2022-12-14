import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <>
      <div className='whole'>
        <div className='home'>
          <h1 className='celebrate'>
            Celebrating 20 years of real connections on Meetup
          </h1>

          <p className='years'>
            Whatever you’re looking to do this year, Meetup can help. For 20 years, people have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.
          </p>
        </div>

        <div>
          <img className='computer' src='https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080 2x' alt='computer' />
        </div>
      </div>

      <div className='url'>
        <div className="images" id="splash-page-url">
          <Link to='/events'><img className='photo-1' src='https://secure.meetupstatic.com/next/images/indexPage/category1.webp?w=1920' alt='Make new friends' /></Link>
          <div className='new'>
            <div id="splash-page-url">
              <Link className='friends' to='/events'>Make new friends</Link>
            </div>
            <div className='arrow-div'>
              <img className='arrow' src='https://secure.meetupstatic.com/next/images/shared/right-arrow.svg?w=32' alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
