import ProviderDashboard from "@/views/dashboard/provider/ProviderDashboard.vue";
import ProviderLayout from "@/views/dashboard/provider/ProviderLayout.vue";

const routes = [
    {
        path: "/provider",
        name: "ProviderDashboard",
        component: ProviderDashboard,
              children: [
                    {
                        path: "",
                        name: "ProviderLayout",
                        component: ProviderLayout
                    }
                ]
    }
];

export default routes;