let order = [
  { itemName: "Hot Cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL".padStart(8));

let total = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const lineTotal = (quantity * unitPricePence) / 100;

  total += lineTotal;

  console.log(
    `${quantity}`.padEnd(8) +
      itemName.padEnd(20) +
      lineTotal.toFixed(2).padStart(8)
  );
});

console.log(`\nTotal: ${total.toFixed(2)}`);
