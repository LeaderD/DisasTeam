import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Login from '../../comps/Login';
import Register from '../../comps/Register';
import Help from '../../comps/Help';


storiesOf('Users', module)
.add('Login', () => <Login />)
.add('Register', ()=><Register />)
.add('Help', ()=><Help/>)