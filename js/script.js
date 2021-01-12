

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