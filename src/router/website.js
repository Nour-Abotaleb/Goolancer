import Home from "@/views/website/home/Home.vue";
import Login from "@/views/website/Login.vue";
import Register from "@/views/website/Register.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }
];

export default routes;