# react-short-utils

`react-short-utils` is a collection of utilities designed to simplify and enhance React development. It includes useful functions like API fetching, unique ID generation, date formatting, and key filtering for data. This library helps streamline common tasks in React projects.

## Installation

You can install `react-short-utils` via npm or yarn:

npm install react-short-utils


### Key Sections:
- **Installation**: Explains how to install the package using npm or yarn.
- **Features & Usage**: A combined section detailing the available utilities and how to use each one:
  - **useApi**: A custom hook for making API requests.
  - **EachUtils**: A utility for iterating over objects and arrays.
  - **formatDate**: A utility for formatting dates.
  - **filterByKey**: A utility to filter objects by a key.
  - **generateUniqueId**: A function to generate unique IDs.
- **License & Contributing**: Basic info on contributing or using the package.


Example

```bash
import filterByKey from "react-short-utils";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Joe" }
];

const filteredData = filterByKey(data, "name", "Jane");
console.log(filteredData);   [{ id: 2, name: "Jane" }]
```




