import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Spin } from 'antd';

import CharacterCardContainer from '../containers/CharacterCardContainer';

class CharacterListComponent extends React.Component {
  componentDidMount() {
    this.props.loadList();
  }

  render() {
    const { loading, list } = this.props;
    return (
      loading
        ? <Spin tip="Loading..." size="large" />
        : (
          <React.Fragment>
            <Row type="flex" justify="space-between" align="middle">
              {
                list.map(item => (
                  <Col xl={6} lg={8} md={12} key={item.id}>
                    <CharacterCardContainer data={item} />
                  </Col>
                ))
              }
            </Row>
          </React.Fragment>
        )
    );
  }
}

CharacterListComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  error: PropTypes.any,
  loadList: PropTypes.func.isRequired,
};

export default CharacterListComponent;
