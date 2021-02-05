# Alibaba Shop

An e-commerce website made with React.js, Redux, Node.js, Express.js, MongoDB, Cloudinary, and The PayPal API.

## Summary

  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setup

A step by step series of examples that tell you how to get a development env running.

#### Clone

```sh
$ git clone https://github.com/aahmad4/Alibaba-Shop
```

#### Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install the required packages.

```sh
$ npm install
$ cd client
$ npm install
```

or

```sh
$ yarn install
$ cd client
$ yarn install
```

#### Usage

Using concurrently, this will run the back-end server and client-side application at the same time. By default, the back-end will run on port 5000 and the React app will be visible in your browser at port 3000. 

```
$ npm run dev
```

#### Implementation

In the root directory create a file named `.env` with the following enviornment variables. For the MongoDB URI, PayPal Client ID, and Cloudinary App Information, simple register an account at the appropriate services and create your credentials there. Once completed, paste the value into this file next to the correct variables. 

```env
NODE_ENV = development
PORT = 5000
MONGO_URI = 
JWT_SECRET = somethingrandom123
PAYPAL_CLIENT_ID = 
CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 
```

## Built With

* [React.js](https://reactjs.org/) - Front-end web library
* [Redux](https://redux.js.org/) - Global app state management
* [Node.js](https://nodejs.org/) - JavaScript runtime engine
* [Express.js](https://expressjs.com/) - Back-end web framework
* [MongoDB](https://www.mongodb.com/) - Database
* [Cloudinary](https://cloudinary.com/) - Cloud-based image hosting
* [PayPal Developer API](https://developer.paypal.com/) - Online payments system
* [Heroku](https://www.heroku.com/) - Cloud application platform

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
