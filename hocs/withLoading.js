import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import Loading from '../components/Loading';

export const withLoading = Component => {
  const WithLoading = ({ data }) =>
    data
      ? <Component data={data} />
      : <Loading />

  WithLoading.propTypes = {
    data: PropTypes.bool
  }

  return WithLoading;
};