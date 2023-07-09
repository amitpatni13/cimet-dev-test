'use client'

import Header from '@/components/header';
import Product from '@/components/product';
import { APIData, PlanListData } from '@/models/product.model';
import React, { Component } from 'react';

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

  async updateState() {
    const results = await this.getPlanList();
    this.setState({
      data: results?.data?.electricity || [],
      total: results?.data?.electricity?.length || 0
    });
  }
  getPlanList() {
    return fetch('http://localhost:5000')
      .then(response => response.json())
      .then((data: APIData) => {
        console.log('Data: ', data);
        return data;
      }).catch((err) => {
        console.log('Error: ', err);
        return null;
      });
  }
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
type HomeProps = {};
type HomeState = {
  data: PlanListData[],
  total: number
};
