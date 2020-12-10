import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count, onClickFooter}) => (<div className={styles.title}>
 Количество задач, которые нужно выполнить: {count} 
 </div>) 

Footer.defaultProps = {
	count: 3
};

export default Footer;