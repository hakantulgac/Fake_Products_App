import React from 'react';
import { DeleteFilled, DollarOutlined, ShoppingFilled, StarOutlined, StockOutlined } from '@ant-design/icons';
import { Button, List, Space } from 'antd';


const ProductsList = ({ data, basketActions }) => {
    const {addItem, removeItemById, basket, dispatch} = basketActions

    return (
        <List
            className='products-list'
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                    actions={[
                        <IconText icon={StarOutlined} text={item.rating.rate} />,
                        <IconText icon={StockOutlined} text={item.rating.count} />,
                        <IconText icon={DollarOutlined} text={item.price} />,
                    ]}
                    extra={
                        <img
                            className='product-img'
                            alt="logo"
                            src={item.image}
                        />
                    }
                >
                    <List.Item.Meta
                        title={item.title}
                        description={item.description}
                    />
                    {basket.includes(item) ?
                        <Button
                            onClick={() => dispatch(removeItemById(item.id))}
                            danger
                            icon={<DeleteFilled/>}
                        /> :
                        <Button
                            onClick={() => dispatch(addItem(item))}
                            primary
                            icon={<ShoppingFilled />}
                        />
                    }

                </List.Item>
            )}
        />
    )
}
export default ProductsList;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);