import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (<div className={styles.title}> Количество задач, которые нужно выполнить: {count} </div>) 

export default Footer;