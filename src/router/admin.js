import AdminDashboard from "@/views/dashboard/admin/AdminDashboard.vue";
import AdminLayout from "@/views/dashboard/admin/AdminLayout.vue";
const routes = [
    {
        path: "/admin",
        name: "AdminLayout",
        component: AdminLayout,

        children: [
            {
                path: "",
                name: "AdminDashboard",
                component: AdminDashboard
            }
        ]
    }
];

export default routes;