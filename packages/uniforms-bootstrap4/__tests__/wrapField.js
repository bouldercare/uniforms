import React from 'react';
import wrapField from 'uniforms-bootstrap4/wrapField';
import { mount } from 'enzyme';

test('<wrapField> - renders wrapper with correct class', () => {
  const element = wrapField({ wrapClassName: 'container' }, <div />);
  const wrapper = mount(element);

  expect(wrapper.find('.container')).toHaveLength(1);
});

test('<wrapField> - renders help block', () => {
  const element = wrapField({ help: 'Hint' }, <div />);
  const wrapper = mount(element);

  expect(wrapper.find('.form-text').text()).toBe('Hint');
});

test('<wrapField> - renders help block with specified class', () => {
  const element = wrapField(
    { help: 'Hint', helpClassName: 'text-hint' },
    <div />
  );
  const wrapper = mount(element);

  expect(wrapper.find('.form-text.text-hint')).toHaveLength(1);
});

test('<wrapField> - renders error block', () => {
  const error = new Error();
  const element = wrapField(
    { error, showInlineError: true, errorMessage: 'Error' },
    <div />
  );
  const wrapper = mount(element);

  expect(wrapper.find('.text-danger').text()).toBe('Error');
});

test('<wrapField> - renders error block (showInlineError=false)', () => {
  const error = new Error();
  const element = wrapField(
    { error, showInlineError: false, errorMessage: 'Error' },
    <div />
  );
  const wrapper = mount(element);

  expect(wrapper.find('.text-danger')).toHaveLength(0);
});

test('<wrapField> - label has custom class (String)', () => {
  const element = wrapField(
    {
      label: 'A field label',
      labelClassName: 'custom-label-class'
    },
    <div />
  );
  const wrapper = mount(element);

  expect(wrapper.find('label.custom-label-class')).toHaveLength(1);
});

test('<wrapField> - label has custom class (Array[String])', () => {
  const element = wrapField(
    {
      label: 'A field label',
      labelClassName: ['custom-1', 'custom-2']
    },
    <div />
  );
  const wrapper = mount(element);

  expect(wrapper.find('label.custom-1.custom-2')).toHaveLength(1);
});
