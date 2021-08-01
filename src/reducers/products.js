var initialState = [
    {
        id : 1,
        name : 'Iphone 12 Pro Max',
        image : 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg',
        description: 'Made by Apple',
        price : 500,
        inventory : 10,
        rating  : 5
    },
    {
        id : 2,
        name : 'Samsung S21 Ultra',
        image : 'https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-200x200.jpg',
        description: 'Made by Samsung',
        price : 400,
        inventory : 15,
        rating  : 4
    },
    {
        id : 3,
        name : 'Vsmart Aris Pro',
        image : 'https://cdn.tgdd.vn/comment/46038787/2ZDT98.jpg',
        description: 'Made by VinGroup',
        price : 450,
        inventory : 5,
        rating  : 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;