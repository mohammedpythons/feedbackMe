import PropTypes from 'prop-types'
import Card from './shared/Card'
import { Link, } from 'react-router-dom'

const About = props => {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>This is a React App to leave feedback for a product or service </p>
                <p>Version: 1.0.0</p>

                <p className='btn-goBack'>
                    <Link to="/">go back</Link>
                </p>
            </div>
        </Card>
    )
}

About.propTypes = {

}

export default About
