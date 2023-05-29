import React from 'react';
import PropTypes from 'prop-types';
import css from '../Section/sections.module.css';
export const Section = ({ title, children }) => {
  return (
    <>
      <p className={css.title}>{title}</p>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
