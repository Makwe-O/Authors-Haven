import React from 'react';
import { shallow, mount } from 'enzyme';
import ForgotPasswordForm from './ForgotPasswordForm';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

describe('Render ForgotPasswordForm ', () => {
  const wrapper = shallow(<ForgotPasswordForm />);

  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ForgotPasswordForm', () => {
  const props = {
    isEmailSent: true
  };
  const store = {
    getState: () => {
      return {
        sendEmailReducer: {
          isEmailSent: false
        }
      };
    },
    subscribe: () => {
      return store.getState();
    },
    dispatch: () => {}
  };
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <ForgotPasswordForm {...props} />
      </MemoryRouter>
    </Provider>
  );
  it('should render component successfully', () => {
    expect(wrapper).toBeTruthy();
  });
});