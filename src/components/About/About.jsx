import React from 'react'
import { Helmet } from 'react-helmet';

export default function About() {
  return (
<>
<Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<h1 className='text-primary my-5 text-center'>About Us</h1>
<p className='text-muted w-50 my-5 m-auto text-center'><span className='text-info'>Discription </span>: Get the daily or weekly trending items. The daily trending list tracks items over the period of a day while items have a 24 hour half life. The weekly list tracks items over a 7 day period, with a 7 day half life.
</p>
<p className='text-muted w-50 my-5 m-auto text-center'><span className='text-info'>Movies </span>: Get the daily or weekly trending Movie. The daily trending list tracks movie over the period of a day while movie have a 24 hour half life. The weekly list tracks movie over a 7 day period, with a 7 day half life.
</p>
</>
  )
}
