import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

class CharacterCardComponent extends React.Component {
  goToDetail = () => {
    const { history, data } = this.props;
    history.push(`characters/${data.id}`);
  }

  render() {
    const { data } = this.props;
    return (
      <div style={{ padding: '20px' }}>
        <Card
          hoverable
          bordered={false}
          cover={<img alt="example" src={data.image} />}
          bodyStyle={{ backgroundColor: 'rgb(51, 51, 51)' }}
          style={{ minWidth: '250px', border: '3px solid black' }}
          onClick={this.goToDetail}
        >
          <div className="info">
            <div className="name">{data.name}</div>
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
                {data.origin.name}
              </div>
            </div>
            <div className="item">
              <div>Last Location</div>
              <div className="value">
                {data.location.name}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

CharacterCardComponent.propTypes = {
  data: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
};

export default CharacterCardComponent;
