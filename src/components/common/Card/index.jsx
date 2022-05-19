import * as React from 'react';

import PropTypes from 'prop-types';

import './styles.less';

const Card = props => {
    const { values, dictionary, title } = props;

    const renderFields = () =>
        dictionary.map((field, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index} className="card__row">
                <p>{field.fieldName}</p>
                <p>{values[field.value]}</p>
            </span>
        ));

    return (
        <div className="card">
            <h1>{title}</h1>
            <hr />
            {renderFields()}
        </div>
    );
};

Card.defaultProps = {
    values: {
        id: '',
        first_name: '',
        last_name: ''
    }
};

Card.propTypes = {
    values: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string
    }),
    dictionary: PropTypes.arrayOf(
        PropTypes.shape({
            fieldName: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired
};

export default Card;
