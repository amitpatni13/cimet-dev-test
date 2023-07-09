'use client'

import Header from '@/components/header';
import Product from '@/components/product';
import { HomeProps, HomeState } from '@/models/home.model';
import { APIData } from '@/models/product.model';
import React, { Component } from 'react';

/**
 * Home Component Class from where everything is controlled
 */
export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      data: [],
      total: 0
    };
  }

  componentDidMount() {
    this.updateState();
  }

  /**
   * To update the state of the component after data received from API
   */
  async updateState() {
    const results = await this.getPlanList();
    this.setState({
      data: results?.data?.electricity || [],
      total: results?.data?.electricity?.length || 0
    });
  }

  /**
   * To get the data from the backend server
   * @returns API data response object
   */
  getPlanList() {
    return fetch('http://localhost:5000')
      .then(response => response.json())
      .then((data: APIData) => {
        return data;
      }).catch((err) => {
        return null;
      });
  }

  /**
   * To render the component UI
   * @returns JSX to render component
   */
  render() {
    const { total, data } = this.state;
    return (
      <>
        <Header total={total} />
        <Product data={data} />
      </>
    )
  }
}
