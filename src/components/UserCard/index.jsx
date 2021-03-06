import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Button } from 'antd';

import Card from '../common/Card';

import { LOADING_STATUSES, CARD_DICTIONARY } from '../../constants/index';

import './styles.less';

export default class ProductCard extends React.Component {
    static propTypes = {
        getProduct: PropTypes.func.isRequired,
        deleteProduct: PropTypes.func.isRequired,
        loadingProductDelete: PropTypes.string.isRequired,
        match: ReactRouterPropTypes.match.isRequired,
        history: ReactRouterPropTypes.history.isRequired,
        product: PropTypes.shape({
            id: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        }),
        form: PropTypes.shape({
            validateFields: PropTypes.func.isRequired,
            getFieldDecorator: PropTypes.func.isRequired
        }).isRequired
    };

    static defaultProps = {
        product: {}
    };

    componentDidMount() {
        const { getProduct, match } = this.props;
        getProduct(match.params.number);
    }

    componentDidUpdate() {
        const { loadingProductDelete } = this.props;

        if (loadingProductDelete === LOADING_STATUSES.VALID) {
            this.props.history.push('/');
        }
    }

    handleOnClick = () => {
        const { deleteProduct, product } = this.props;

        deleteProduct(product.id);
    };

    render() {
        const { product, match } = this.props;
        return (
            <div className="product-card">
                <Card
                    title="Doctor"
                    dictionary={CARD_DICTIONARY}
                    values={user}
                />
                <hr />
                <div className="buttons-block">
                    <Button type="primary">
                        <Link to={`/profile/user/${match.params.number}/`}>More</Link>
                    </Button>
                    <Button onClick={this.handleOnClick}>Delete</Button>
                    <Button>
                        <Link to="/">Cancel</Link>
                    </Button>
                </div>
            </div>
        );
    }
}
