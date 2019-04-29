import * as React from 'react';
import {
    FormItem,
    FormControlProps
} from './Item';
import * as cx from 'classnames';
import ColorPicker from '../../components/ColorPicker';


export interface ColorProps extends FormControlProps {
    placeholder?: string;
    inputFormat?: string;
    timeFormat?: string;
    format?: string;
    timeConstrainst?: object;
    closeOnSelect?:boolean;
};

export interface ColorControlState {
    open: boolean;
};

export default class ColorControl extends React.PureComponent<ColorProps, ColorControlState> {
    static defaultProps:Partial<ColorProps> = {
        format: 'hex',
        clearable: true
    };
    state:ColorControlState = {
        open: false
    };
    
    render() {
        const {
            className,
            classPrefix: ns,
            ...rest
        } = this.props;

        return (
            <div className={cx(`${ns}ColorControl`, className)}>
                <ColorPicker
                    classPrefix={ns}
                    {...rest}
                />
            </div>
        );
    }
}

@FormItem({
    type: 'color',
})
export class ColorControlRenderer extends ColorControl {};

