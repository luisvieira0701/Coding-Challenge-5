//Task 1 Create an inventory Array of Product Objects
const inventory = [
    {name: 'watch', price: 30, quantity: 45},
    {name: 'necklace', price: 40, quantity: 50},
    {name: 'ring', price: 25, quantity: 70},
    {name: 'bracelet', price: 35, quantity: 55}
]

//Task 2 Create an Orders array of Order Objects
let orders= [] //This array will contain customernames, items (name, and quantity), status



//Task 3 Create a Function to place an Order
function placeOrder(customerName, itemsOrdered, OrderStatus)  {
    itemsOrdered.forEach(item => {
        if (itemsOrdered.quantity < inventory.quantity) {
                return console.log('ERROR: Item has insufficient stock for order')
        } else {
            let product = inventory.find((product => product.name = item.name))
                return product.quantity -= item.Quantity
        }})
     orders.push({
        customer:customerName,
        jewelryProducts: itemsOrdered,
        OrderStatus: status
        
        });
        console.log (`${customerName} orders:`, itemsOrdered, OrderStatus )
}

// Testing the Function with orders
placeOrder('Michael Myers', [
    {name: 'watch', quantity: 15},
    {name: 'necklace', quantity: 30},
], OrderStatus = 'pending') 

placeOrder('Freddy Krueger', [
    {name: 'watch', quantity: 30},
    {name: 'ring', quantity: 30}
], OrderStatus = 'pending')