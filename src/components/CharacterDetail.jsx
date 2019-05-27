import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

class CharacterDetailComponent extends React.Component {
  componentDidMount() {
    const { loadDetail, match } = this.props;
    loadDetail(match.params.id);
  }

  render() {
    const { loading, data } = this.props;
    return (
      <div style={{ padding: '0px 80px' }}>
        <h1 className="detail-heading">{data.name}</h1>
        <Card
          hoverable
          bordered={false}
          cover={<img alt="Loading" src={data.image} />}
          bodyStyle={{ backgroundColor: 'rgb(51, 51, 51)' }}
          style={{ minWidth: '250px', border: '3px solid black' }}
          loading={loading}
        >
          <div className="info">
            <div className="item">
              <div>Status</div>
              <div className="value">
                {data.status}
              </div>
            </div>
            <div className="item">
              <div>Speices</div>
              <div className="value">
                {data.species}
              </div>
            </div>
            <div className="item">
              <div>Gender</div>
              <div className="value">
                {data.gender}
              </div>
            </div>
            <div className="item">
              <div>Origin</div>
              <div className="value">
                {data.origin ? data.origin.name : ''}
              </div>
            </div>
            <div className="item">
              <div>Last Location</div>
              <div className="value">
                {data.location ? data.location.name : ''}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

CharacterDetailComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  error: PropTypes.any,
  loadDetail: PropTypes.func.isRequired,
  match: PropTypes.any,
};

export default CharacterDetailComponent;
