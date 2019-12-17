import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const StyledHamburguer = styled.div`
  @media (${({ theme }) => theme.media.desktop}) {
    display: none;
  }

  position: fixed;
  right: 0;

  /*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 * Modifications to code - Obed Parlapiano - @obedparla
 */
  .hamburger {
    display: flex;
    padding: 15px 15px;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:hover {
    opacity: 0.7;
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: ${({ theme }) => theme.textColor};
  }

  .hamburger-box {
    width: 25px;
    height: 20px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 25px;
    height: 2px;
    background-color: ${({ theme }) => theme.textColor};
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -9px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  /*
   * Collapse
   */
  .hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse .hamburger-inner::after {
    top: -18px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
export const MobileHamburguer = props => (
  <StyledHamburguer>
    <button
      className={`hamburger hamburger--collapse ${
        props.menuOpen ? 'is-active' : ''
      }`}
      type='button'
      onClick={props.setMenuOpen}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner' />
      </span>
    </button>
  </StyledHamburguer>
);

MobileHamburguer.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
