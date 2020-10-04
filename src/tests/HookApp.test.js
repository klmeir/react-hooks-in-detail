import React from 'react';
import { shallow } from 'enzyme';

import { HookApp } from '../HookApp';

describe('Prubas en <HookApp />', () => {
    
    test('debe mostrarse correctamente', () => {

       const wrapper = shallow( <HookApp /> );
       expect( wrapper ).toMatchSnapshot();

    });
        
});
