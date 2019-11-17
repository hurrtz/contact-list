import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';
import styles from './styles';

const List = ({ items, onChange }) => {
  const [selected, setSelected] = useState(undefined);

  const onSelect = id => {
    const newSelectedValue = selected === id ? undefined : id;

    setSelected(newSelectedValue);
    onChange(newSelectedValue);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <Item
            id={item.id}
            title={item.name}
            selected={selected === item.id}
            onSelect={onSelect}
            style={index === 0 ? styles.firstItem : styles.subsequentItems}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </View>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

List.defaultProps = {
  onChange: () => {},
};

export default List;
