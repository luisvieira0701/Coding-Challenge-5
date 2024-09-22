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
function placeOrder(customerName, itemsOrdered,)  {
    itemsOrdered.forEach(item => {
        let product = inventory.find(product => product.name === item.name);
        if (!product || product.quantity < item.quantity) {
            return `ERROR: Insufficient stock for ${item.name}`
        } else {
            return product.quantity -= item.quantity
        }})
        
    orders.push({
        customerName,
        items: itemsOrdered,
        status: 'pending'
        });

}

// Testing the Function with orders
placeOrder('Michael Myers', [
    {name: 'watch', quantity: 30},
    {name: 'necklace', quantity: 30}
]);

placeOrder('Freddy Krueger', [
    {name: 'watch', quantity: 30},
    {name: 'ring', quantity: 30}
])

placeOrder('Edison Cheng', [
    {name: 'ring', quantity: 1},
    {name: 'watch', quantity: 1}
])

//Task 4 Create Function to calculate total for an order
function calculateOrderTotal(order) {
    return order.items.reduce((totalOrder, item) => {
        let product = inventory.find(product => product.name === item.name);
            return totalOrder + (item.quantity * product.price)
    }, 0);
}
 
//Testing Function with Michael Myer's Order
let MichaelOrder = orders[0]
let EdisonOrder = orders[2]
console.log(`Michael's total order is: $${calculateOrderTotal(MichaelOrder)}`)
console.log(`Edison Cheng's total order is: $${calculateOrderTotal(EdisonOrder)}`)

//Task 5- Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    let order = orders.find(order => order.customerName === customerName)
        if (order.status = 'pending') {
            return order.status = 'completed'
        }
}

// Testing Function with One Michael Myer's Order
let OrderCompletedTest = completeOrder('Michael Myers')
let EdisonOrderComplete = completeOrder(`Edison Cheng`)
console.log(`Michael Myers's order is ${OrderCompletedTest}`)
console.log(`Edison Cheng's order is ${EdisonOrderComplete}`)

//Task 6- Create a Function to check Pending Orders
function checkPendingOrders () {
    orders.forEach(order => 
       { if (order.status === 'pending') {
        console.log(order)
       }
    })};

//Details for pending orders
console.log('Details from pending orders:')
console.log(checkPendingOrders())

