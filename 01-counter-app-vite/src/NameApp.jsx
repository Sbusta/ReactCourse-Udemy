import PropTypes from 'prop-types';

export const NameApp = ({title, subTitle, name, job}) => {
    return (
        <>
            <h1>{name}</h1>
            <p>{job}</p>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
        </>
    )
  }

NameApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

NameApp.defaultProps = {
    
    subTitle: 2516,
    name: 'Sebastián Bustamante',
    job: 'Software Developer',
}