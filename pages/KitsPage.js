import React from 'react';
import {View} from 'react-native';

import Kits from '../comps/Kits';

//not sure how we'd icorporate the NavBar here, do we just import it into this page?
function KitsPage(){
   return (
    <View>
        <Kits/>
    </View>
   )
};

export default KitsPage;