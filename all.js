$(document).ready(function () {
    $('#removeModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
        var title = app.shopmodal.title + '刪除';
        var modal = $(this)
        modal.find('.modal-title').text('確認' + title) // 寫入資料
    })
});


var datacarts = [
                    { 
                        "id": "1", 
                        "title": "金牌西裝", 
                        "img_url":"https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350",
                        "size": ["SM", "M", "L", "XL"], 
                        "price": 520, "price": 520, 
                    }, 
                    {
                        "id": "2",
                        "title": "金牌女裝",
                        "img_url":"https://images.unsplash.com/photo-1481399124169-87493351c8a1?w=1349",
                        "size": ["SM", "M", "L", "XL"],
                        "price": 520, "price": 520,
                    }, 
                    {
                        "id": "3",
                        "title": "特工眼鏡",
                        "img_url": "https://images.unsplash.com/photo-1486250944723-86bca2b15b06?w=1351",
                        "size": ["SM", "M", "L", "XL"],
                        "price": 520, "price": 520,
                    },  
                    {
                        "id": "4",
                        "title": "特工西裝",
                        "img_url": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=1350",
                        "size": ["SM", "M", "L", "XL"],
                        "price": 520, "price": 520,
                    },   
                    {
                        "id": "5",
                        "title": "變聲領帶",
                        "img_url": "https://images.unsplash.com/photo-1485373650022-3ed53f62b8f3?w=634",
                        "size": ["SM", "M", "L", "XL"],
                        "price": 520, "price": 520,
                    }, 
                ];

                


var app = new Vue({
    el: '.app',
    data: {
        datacarts :[
                        {
                            "id": "1",
                            "title": "金牌西裝",
                            "img_url": "https://images.unsplash.com/photo-1494281258937-45f28753affd?w=1350",
                            "size": ["SM", "M", "L", "XL"],
                            "body":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                            "price": 520, "price": 520,
                        },
                        {
                            "id": "2",
                            "title": "金牌女裝",
                            "img_url": "https://images.unsplash.com/photo-1481399124169-87493351c8a1?w=1349",
                            "size": ["SM", "M", "L", "XL"],
                            "body": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                            "price": 520, "price": 520,
                        },
                        {
                            "id": "3",
                            "title": "特工眼鏡",
                            "img_url": "https://images.unsplash.com/photo-1486250944723-86bca2b15b06?w=1351",
                            "size": ["SM", "M", "L", "XL"],
                            "body": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                            "price": 520, "price": 520,
                        },
                        {
                            "id": "4",
                            "title": "特工西裝",
                            "img_url": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=1350",
                            "size": ["SM", "M", "L", "XL"],
                            "body": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                            "price": 520, "price": 520,
                        },
                        {
                            "id": "5",
                            "title": "變聲領帶",
                            "img_url": "https://images.unsplash.com/photo-1485373650022-3ed53f62b8f3?w=634",
                            "size": ["SM", "M", "L", "XL"],
                            "body": "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                            "price": 520, "price": 520,
                        },
                    ],
        shopcarts: [
                        {
                            id: '',
                            title: '金牌西裝',
                            num: '1',
                            size:'',
                            price: '520'
                        },
                        {
                            id: '',
                            title: '金牌女裝',
                            num: '1',
                            size:'',
                            price: '480'
                        },

                    ],
        newTodo: '',
        shopmodal:''
    },
    methods: {
        addCart: function () {
            this.shopcarts.push({ 
                title: shopTitle, 
                num: shopNum, 
                price: shopPrice 
            })
            localStorage.setItem('cartStorage', JSON.stringify(this.shopcarts));
        },
        removeCart: function () {
            this.shopcarts.splice(this.shopcarts.indexOf(this.shopmodal), 1);
            localStorage.setItem('cartStorage', JSON.stringify(this.shopcarts));
        },
        checkCart: function (){
            var retrievedObject = localStorage.getItem('cartStorage');
            console.log('retrievedObject: ', JSON.parse(retrievedObject));
        }
    },
    computed: {
        shopcartsCount: function () {
            return this.shopcarts.length
        }
    }
})