import QuickForm from 'uniforms-unstyled/QuickForm';
import React from 'react';
import { mount } from 'enzyme';

import createSchema from './_createSchema';

test('<QuickForm> - renders', () => {
  const element = <QuickForm schema={createSchema()} />;
  const wrapper = mount(element);

  expect(wrapper).toHaveLength(1);
});
