import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';

import Container from '../../components/Container';
import { RepositoryContainer, Owner } from './styles';

import api from '../../services/api';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    user: {},
    repositories: [],
  };

  async componentDidMount() {
    const { match } = this.props;

    const [user, repositories] = await Promise.all([
      api.get(`/${match.params.repository}`),
      api.get(`/${match.params.repository}/repos`),
    ]);

    this.setState({
      user: user.data,
      repositories: repositories.data,
    });
  }

  render() {
    const { user, repositories } = this.state;

    return (
      <Container>
        <Link to="/">
          <FaArrowLeft color="#FFF" size={19} />
        </Link>
        <Owner>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
          <quote>{user.bio}</quote>
        </Owner>
        {repositories.map(repo => (
          <RepositoryContainer key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </RepositoryContainer>
        ))}
      </Container>
    );
  }
}
