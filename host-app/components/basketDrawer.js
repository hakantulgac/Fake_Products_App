import React from 'react';
import { Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { close } from '../redux/features/drawerOpenSlice';
import dynamic from 'next/dynamic'

const Basket = dynamic(() => import("basketRemote/basket"), { ssr: false })

const BasketDrawer = ({ basketActions }) => {

    const dispatch = useDispatch();
    const { drawerOpen } = useSelector(state => state.drawerOpen);

    return (
        <Drawer className='basket-drawer' title="Basket" open={drawerOpen} onClose={() => dispatch(close())}>
            <Basket basketActions={basketActions} />
        </Drawer>
    );
};
export default BasketDrawer;