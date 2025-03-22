import dynamic from 'next/dynamic'
import { useGetProductsQuery } from '../redux/services/productsApi'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, resetBasket, removeItemById } from '../redux/features/basketSlice'
import Navbar from '../components/navbar'
import BasketDrawer from '../components/basketDrawer'

const Products = dynamic(() => import("productsRemote/products"), { ssr: false })

export default function Home() {

  const dispatch = useDispatch();
  const { basket } = useSelector(state => state.basket);
  const { data, error, isLoading } = useGetProductsQuery();

  const basketActions = {
    addItem, resetBasket, removeItemById, basket, dispatch
  }

  if(error){
    console.log(error);
    return <h3 style={{color: "red"}}>Something went wrong</h3>
  } 

  return (
    <center>
      <Navbar countForBadge={basket.length}/>
      <BasketDrawer basketActions={basketActions}/>
      {isLoading ? <p>Loading...</p> : 
        <Products data={data} basketActions={basketActions} />
      }
    </center>
  )
}