import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Order} from '../slices/order';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import Ing from './Ing';

function Delivery() {
  const orders = useSelector((state: RootState) => state.order.deliveries);
  const renderItem = useCallback(({item}: {item: Order}) => {
    return <Ing item={item} />;
  }, []);

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item => item.orderId}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Delivery;
