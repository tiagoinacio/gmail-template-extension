import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import './Compose.css';

const composeApp = ({ Compose }) => {
    Compose.registerComposeViewHandler((composeView) => {
        const button = {
            title: 'Chrome Extension Gmail Snippets',
            iconUrl: 'https://image.flaticon.com/icons/svg/1001/1001371.svg',
            iconClass: 'button',
            hasDropdown: true,
            onClick(event) {
                ReactDOM.render(<App composeView={ composeView } />, event.dropdown.el);

                event.dropdown.once('destroy', () => (
                    ReactDOM.unmountComponentAtNode(event.dropdown.el)
                ));
            },
        };

        composeView.addButton(button);
    });
};

export default composeApp;
