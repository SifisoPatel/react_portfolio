import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a very ambitious front-end developer looking for a role in a established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
                <p>I'm quietly confident, naturally curious, and always working on improving my skills one design problem at a time.</p>
                <p>If I need to define myself in one sentence that would be a family person, sports fanatic, and tech-obsessed</p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About