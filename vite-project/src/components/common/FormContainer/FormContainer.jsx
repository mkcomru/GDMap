import PropTypes from 'prop-types';
import styles from './FormContainer.module.css';

function FormContainer({ children, title, description }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </div>
    );
}

FormContainer.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node
};

export default FormContainer;