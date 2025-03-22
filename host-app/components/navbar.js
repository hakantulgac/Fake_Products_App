import React from 'react';
import { ShoppingFilled } from '@ant-design/icons';
import { Menu, Badge } from 'antd';
import { useDispatch } from 'react-redux'
import { open } from '../redux/features/drawerOpenSlice'

const Navbar = ({countForBadge}) => {

  const dispatch = useDispatch();

  const items = [
    {
      label: 'Products',
      key: 'products',
    },
    {
      label: 'Colections',
      key: 'app',
      disabled: true,
    },
    {
      label: 'Accessories',
      key: 'accessories',
      disabled: true,
    },
    {
      key: 'alipay',
      icon: <Badge count={countForBadge} size='small'><ShoppingFilled /></Badge>,
      onClick: () => dispatch(open())
    },
  ];

  return <Menu className='navbar' mode="horizontal" items={items}/>
};
export default Navbar;