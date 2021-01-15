

const app = new Vue({

    el: "#root",
    data: {
        navbar: [
            {
                name: "HOME",
                class: 'active'
            },
            {
                name: "ABOUT",
                class: ''
            },
            {
                name: "PROJECTS",
                class: ''
            },
            {
                name: "SERVICES",
                class: ''
            },
            {
                name: "BLOG",
                class: ''
            },
            {
                name: "CONTACT",
                class: ''
            }
        ],
        projects: [
            {
                img: "img/DRY-1-790x592.jpg",
                title: "Purinky Products",
                span: "uncategorized"
            },
            {
                img: "img/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg",
                title: "Purinky Products",
                span: "uncategorized"
            },
            {
                img: "img/z1el4c4p-790x592.jpg",
                title: "Purinky Products",
                span: "uncategorized"
            }
        ],
        date: new Date().getFullYear()
    },
    methods: {
        toggleActiveClass(index) {
            this.navbar.forEach(element => {
                element.class = '';
            });

            this.navbar[index].class = "active";
        }
    }

});