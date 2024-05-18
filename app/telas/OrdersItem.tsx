import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeInRight } from 'react-native-reanimated';

interface OrderItemProps {
  id: string;
  image: any;
  title: string;
  date: string;
}

const OrderItem: React.FC<OrderItemProps> = ({ id, image, title, date }) => {
  return (
    <Animated.View entering={FadeInRight.delay(200).duration(1000).springify().damping(3)} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default OrderItem;
