import React, {useEffect} from 'react';
import Card from "../common/Card";
import {CARD_DICTIONARY} from "../../constants/other-constants";

import './styles.less';
// import './index.scss';

export default function HomePage(props) {
    const {users, getUserList} = props;

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <main className="page--home">
            <div className="product-card">
                {users.map(user => (
                    <Card
                        title="Doctor"
                        dictionary={CARD_DICTIONARY}
                        values={user}
                    />))}
            </div>
        </main>
    );
}
