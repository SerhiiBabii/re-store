export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Learning React: Functional Web Development with React and Redux",
      author: "Alex Banks, Eve Porcello",
      price: 49.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title:
        "MongoDB: The Definitive Guide: Powerful and Scalable Data Storage",
      author: "Kristina Chodorow",
      price: 49.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51c%2BBWRdqmL._SX379_BO1,204,203,200_.jpg"
    },
    {
      id: 3,
      title: "React Native Cookbook: Bringing the Web to Native Platforms",
      author: "Jonathan Lebensold",
      price: 33.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51j3Rdi8ciL._SX379_BO1,204,203,200_.jpg"
    },
    {
      id: 4,
      title:
        "Learning React Native: Building Native Mobile Apps with JavaScript",
      author: "Bonnie Eisenman",
      price: 50.99,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/518ctEpEw1L._SX379_BO1,204,203,200_.jpg"
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.75) { // this line for testing errors, next line for working project
        if (true) {
          resolve(this.data);
        } else {
          reject(new Error("Somethis bad happen!"));
        }
      }, 1000);
    });
  }
}
