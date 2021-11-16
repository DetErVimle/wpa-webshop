import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Samsung Galaxy A8",
        image:
          "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",
        price: 340,
      },

      {
        id: 2,
        name: "Asus Rog Phone",
        image:
          "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",
        price: 500,
      },

      {
        id: 3,
        name: "Cat Phone",
        image:
          "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",
        price: 600,
      },

      {
        id: 4,
        name: "Trainer Socks Black",
        image:
          "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",
        price: 700,
      },
    ],

    productShoes: [
      {
        id: 1,
        name: "Samsung Galaxy A8",
        image:
          "https://img01.ztat.net/article/spp-media-p1/33fa22c18de743c4bd7a7e062e90e902/1906c2100d874597825e440884aa2c4d.jpg?imwidth=1800&filter=packshot",
        price: 340,
      },

      {
        id: 2,
        name: "Asus Rog Phone",
        image:
          "https://img01.ztat.net/article/spp-media-p1/33fa22c18de743c4bd7a7e062e90e902/1906c2100d874597825e440884aa2c4d.jpg?imwidth=1800&filter=packshot",
        price: 500,
      },

      {
        id: 3,
        name: "Cat Phone",
        image:
          "https://img01.ztat.net/article/spp-media-p1/33fa22c18de743c4bd7a7e062e90e902/1906c2100d874597825e440884aa2c4d.jpg?imwidth=1800&filter=packshot",
        price: 600,
      },

      {
        id: 4,
        name: "Trainer Socks Black",
        image:
          "https://img01.ztat.net/article/spp-media-p1/33fa22c18de743c4bd7a7e062e90e902/1906c2100d874597825e440884aa2c4d.jpg?imwidth=1800&filter=packshot",
        price: 700,
      },
    ],

    productShirts: [
      {
        id: 1,
        name: "Samsung Galaxy A8",
        image:
          "https://img01.ztat.net/article/spp-media-p1/1d0e127a3b8f4c8891bca56551cce9b2/0760391d459a407f8f37652e6b277fbc.jpg?imwidth=1800&filter=packshot",
        price: 340,
      },

      {
        id: 2,
        name: "Asus Rog Phone",
        image:
          "https://img01.ztat.net/article/spp-media-p1/1d0e127a3b8f4c8891bca56551cce9b2/0760391d459a407f8f37652e6b277fbc.jpg?imwidth=1800&filter=packshot",
        price: 500,
      },

      {
        id: 3,
        name: "Cat Phone",
        image:
          "https://img01.ztat.net/article/spp-media-p1/1d0e127a3b8f4c8891bca56551cce9b2/0760391d459a407f8f37652e6b277fbc.jpg?imwidth=1800&filter=packshot",
        price: 600,
      },

      {
        id: 4,
        name: "Trainer Socks Black",
        image:
          "https://img01.ztat.net/article/spp-media-p1/1d0e127a3b8f4c8891bca56551cce9b2/0760391d459a407f8f37652e6b277fbc.jpg?imwidth=1800&filter=packshot",
        price: 700,
      },
    ],

    productJeans: [
      {
        id: 1,
        name: "Samsung Galaxy A8",
        image:
          "https://img01.ztat.net/article/spp-media-p1/08dcdb0ccd6846d3b5706ee96ffbadb0/b7b715ffb8324d12a8679358c7efb8a5.jpg?imwidth=1800",
        price: 340,
      },

      {
        id: 2,
        name: "Asus Rog Phone",
        image:
          "https://img01.ztat.net/article/spp-media-p1/08dcdb0ccd6846d3b5706ee96ffbadb0/b7b715ffb8324d12a8679358c7efb8a5.jpg?imwidth=1800",
        price: 500,
      },

      {
        id: 3,
        name: "Cat Phone",
        image:
          "https://img01.ztat.net/article/spp-media-p1/08dcdb0ccd6846d3b5706ee96ffbadb0/b7b715ffb8324d12a8679358c7efb8a5.jpg?imwidth=1800",
        price: 600,
      },

      {
        id: 4,
        name: "Trainer Socks Black",
        image:
          "https://img01.ztat.net/article/spp-media-p1/08dcdb0ccd6846d3b5706ee96ffbadb0/b7b715ffb8324d12a8679358c7efb8a5.jpg?imwidth=1800",
        price: 700,
      },
    ],

    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    productShoes: (state) => state.productShoes,
    productShirts: (state) => state.productShirts,
    productJeans: (state) => state.productJeans,
    StoreCart: (state) => state.StoreCart,
  },

  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  },
  modules: {},
});