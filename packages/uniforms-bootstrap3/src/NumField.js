import React, { Component } from 'react';
import classnames from 'classnames';
import connectField from 'uniforms/connectField';

import wrapField from './wrapField';

const noneIfNaN = x => (isNaN(x) ? undefined : x);
const parse = (decimal, x) => noneIfNaN((decimal ? parseFloat : parseInt)(x));

const Num_ = props =>
  wrapField(
    props,
    <input
      className={classnames(props.inputClassName, 'form-control', {
        'form-control-danger': props.error
      })}
      disabled={props.disabled}
      id={props.id}
      max={props.max}
      min={props.min}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      ref={props.inputRef}
      step={props.step || (props.decimal ? 0.01 : 1)}
      type="number"
      value={props.value}
    />
  );

let Num;
// istanbul ignore next
if (parseInt(React.version, 10) < 16) {
  Num = class Num extends Component {
    state = { value: '' + this.props.value };

    componentWillReceiveProps({ decimal, value }) {
      if (
        parse(decimal, value) !==
        parse(decimal, this.state.value.replace(/[.,]+$/, ''))
      ) {
        this.setState({
          value: value === undefined || value === '' ? '' : '' + value
        });
      }
    }

    onChange = event => {
      const value = event.target.value.replace(/[^\d.,-]/g, '');

      this.setState({ value });
      this.props.onChange(parse(this.props.decimal, value));
    };

    render() {
      return Num_({
        ...this.props,
        onChange: this.onChange,
        value: this.state.value
      });
    }
  };
} else {
  Num = props =>
    Num_({
      ...props,
      onChange(event) {
        props.onChange(parse(props.decimal, event.target.value));
      }
    });
}

export default connectField(Num);
