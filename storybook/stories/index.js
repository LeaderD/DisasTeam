import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Login from '../../comps/Login';
import Register from '../../comps/Register';
import Help from '../../comps/Help';
import Kits from '../../comps/Kits';

import HomeKit from '../../comps/HomeKit';

storiesOf('Users', module)
.add('Login', () => <Login />)
.add('Register', ()=><Register />)
.add('Kits', ()=><Kits/>)
.add('HomeKit', () => <HomeKit />)
.add('Help', ()=><Help/>)
