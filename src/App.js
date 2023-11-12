import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import { Categories } from "./components/Categories";
import ShowFullITem from "./components/ShowFullITem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Ноутбук серый",
          img: "noyt1.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "lowprice",
          price: "6500",
        },
        {
          id: 2,
          title: "Ноутбук белый",
          img: "noyt2.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "beatifull",
          price: "8900",
        },
        {
          id: 3,
          title: "Ноутбук игровой",
          img: "noyt3.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "gamming",
          price: "11900",
        },
        {
          id: 4,
          title: "Ноутбук синий",
          img: "noyt4.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "lowprice",
          price: "7400",
        },
        {
          id: 5,
          title: "Ноутбук серый",
          img: "noyt1.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "lowprice",
          price: "6500",
        },
        {
          id: 6,
          title: "Ноутбук белый",
          img: "noyt2.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "beatifull",
          price: "8900",
        },
        {
          id: 7,
          title: "Ноутбук игровой",
          img: "noyt3.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "gamming",
          price: "11900",
        },
        {
          id: 8,
          title: "Ноутбук синий",
          img: "noyt4.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "lowprice",
          price: "7400",
        },
        {
          id: 9,
          title: "Ноутбук синий",
          img: "noyt4.jpg",
          desc: "Шикарный ноут и бла бла бла",
          category: "lowprice",
          price: "7400",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete ={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        
        {this.state.showFullItem && <ShowFullITem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}


chooseCategory(category) {
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !==id)})
}

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
      
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
