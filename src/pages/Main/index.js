import React, { Component } from 'react';

import { FaGithub } from 'react-icons/fa';

import { SideBar, Content, SubmitButton, Form } from './styles';
import Container from '../../components/Container';

import Cart from '../../components/Cart';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositories: [],
    repoName: '',
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({
      repoName: e.target.value,
    });
  };

  handleForm = async e => {
    e.preventDefault();

    const { repoName, repositories } = this.state;

    try {
      const response = await api.get(`/${repoName}`);

      this.setState({
        repoName: '',
        repositories: [...repositories, response.data],
      });
    } catch (err) {
      this.setState({
        repoName: '',
      });
    }
  };

  render() {
    const { repoName, repositories } = this.state;

    return (
      <Container>
        <SideBar>
          <h1>
            <FaGithub size={30} color="#000" />
            Add Repository
          </h1>
          <Form onSubmit={this.handleForm}>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={repoName}
            />
            <SubmitButton>+</SubmitButton>
          </Form>
        </SideBar>
        <Content>
          {repositories.map(repo => (
            <Cart key={repo.id} repo={repo} />
          ))}
        </Content>
      </Container>
    );
  }
}
