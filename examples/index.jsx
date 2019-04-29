/**
 * @file entry of this example.
 * @author liaoxuezhi@baidu.com
 */
import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

export function bootstrap(mountTo, initalState) {
    render(
        <App />,
        mountTo
    );
}
