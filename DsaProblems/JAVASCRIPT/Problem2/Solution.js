// ## Problem

// A retail company receives sales records from multiple stores.

// Each record contains:

// - Customer name
// - Store name
// - Purchase amount

// Your task is to generate a store-wise sales report.

// ## Rules

// ## Input Format

// The first line contains an integer `n`.

// The next `n` lines contain:

// ```text
// customerName storeName amount
// ```

// ## Sample Input

// ```text
// 8
// John Mumbai 5000
// john mumbai 7500
// Alice Delhi 8000
// BOB Mumbai 6000
// alice DELHI 7000
// Bob mumbai 6000
// David Delhi 9000
// Mike Pune abc
// ```

const fs = require("fs");

function getInput() {
  const input = fs.readFileSync(0, "utf-8").trim().split("\n");

  const n = parseInt(input[0]);

  const entries = input.slice(1, n + 1).map((line) => {
    const [name, store, amount] = line.trim().split(/\s+/);

    return {
      name,
      store,
      amount: Number(amount),
    };
  });

  return { entries };
}

function StoreSalesReport(entries) {
  const stores = new Map();

  for (const entry of entries) {
    const { name, store, amount } = entry;
    // 1. Customer names and stores names are case-insensitive.
    // 2. The purchase amount must be a valid number between `1` and `100000`.
    // 3. Invalid records must be ignored.
    if (
      entry.amount <= 0 ||
      entry.amount >= 100000 ||
      Number.isNaN(entry.amount)
    ) {
      continue;
    }

    // 4. If the same customer appears multiple times in the same stores, keep only their highest purchase amount.
    const storeKey = store.toLowerCase();

    if (!stores.has(storeKey)) {
      stores.set(storeKey, []);
    }

    // 5. Each store should appear only once.
    const storeData = stores.get(storeKey);

    const existingStore = storeData.find(
      (storeName) => storeName.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingStore) {
      if (amount > existingStore.amount) {
        existingStore.amount = amount;
      }
    } else {
      storeData.push({
        name,
        amount,
      });
    }
  }

  // 6. Stores should be sorted alphabetically.

  const sortedStore = [...stores.keys()].sort();

  // 7. Customers inside each store should be sorted by purchase amount in descending order.
  // 8. If two customers have the same purchase amount, preserve their original input order.
  // 9. Store names should be displayed with:
  //    - first letter uppercase
  //    - remaining letters lowercase.
  // 10. Stores with no valid entries should be skipped.
  const output = [];

  console.log(sortedStore);

  for (const storeKey of sortedStore) {
    const placeStore =
      storeKey.charAt(0).toUpperCase() + storeKey.slice(1).toLowerCase();

    output.push(placeStore);

    const storeOwners = stores.get(storeKey);

    storeOwners.sort((a, b) => b.amount - a.amount);

    for (const storeOwner of storeOwners) {
      output.push(`${storeOwner.name} ${storeOwner.amount}`);
    }
  }
  console.log(output.join("\n"));
}

const { entries } = getInput();
console.log(entries);

StoreSalesReport(entries);

// ## Expected Output

// ```text
// Delhi
// David 9000
// Alice 8000
// Mumbai
// John 7500
// Bob 6000
// ```
