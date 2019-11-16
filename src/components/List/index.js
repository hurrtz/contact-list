import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';

const List = ({ items }) => {
  const [selected, setSelected] = useState('');

  const onSelect = id => {
    if (selected === id) {
      setSelected('');
    } else {
      setSelected(id);
    }
  };

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.name}
            selected={selected === item.id}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </View>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
