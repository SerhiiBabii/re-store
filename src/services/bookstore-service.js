export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "123",
      author: "Some Name1",
      price: 120,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "234",
      author: "Some Name2",
      price: 80,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    },
    {
      id: 3,
      title: "345",
      author: "Some Name3",
      price: 20,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
      id: 4,
      title: "456",
      author: "Some Name4",
      price: 68,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          resolve(this.data);
        } else {
          reject(new Error("Somethis bad happen!"));
        }
      }, 1000);
    });
  }
}
