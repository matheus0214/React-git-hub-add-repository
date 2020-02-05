import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CartContainer } from './styles';

export default class Cart extends Component {
  static propTypes = {
    repo: PropTypes.shape({}).isRequired,
  };

  state = {
    repo: {},
  };

  componentDidMount() {
    const { repo } = this.props;

    this.setState({
      repo,
    });
  }

  render() {
    const { repo } = this.state;
    const { name, login, bio, avatar_url } = repo;

    return (
      <CartContainer>
        <img src={avatar_url} alt="avatar_url" />
        <h2>{name || login}</h2>
        <p>{bio}</p>
        <Link to={`/repository/${login}`}>Detalhes</Link>
      </CartContainer>
    );
  }
}
