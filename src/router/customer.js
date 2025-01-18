import CustomerDashboard from "@/views/dashboard/customer/dashboard/CustomerDashboard.vue";
import CustomerLayout
 from "@/views/dashboard/customer/CustomerLayout.vue";
import PostJob from "@/views/dashboard/customer/dashboard/PostJob.vue";
import Skills from "@/views/dashboard/customer/dashboard/Skills.vue";
import Supervision from "@/views/dashboard/customer/dashboard/Supervision.vue";
import Form from "@/components/Form.vue";
import Popup from "@/views/dashboard/customer/dashboard/Popup.vue";
import { getCurrentScope } from "vue";
import CustomerJobs from "@/views/dashboard/customer/dashboard/CustomerJobs.vue";
import JobDetails from "@/views/dashboard/customer/dashboard/JobDetails.vue";
import Orders from "@/views/dashboard/customer/dashboard/Orders.vue";
import RequestDetails from "@/views/dashboard/customer/dashboard/RequestDetails.vue";
import Services from "@/views/dashboard/customer/dashboard/Services.vue";
import MyOffers from "@/views/dashboard/customer/dashboard/MyOffers.vue";
import OfferDetails from "@/views/dashboard/customer/dashboard/OfferDetails.vue";
import Wallet from "@/views/dashboard/customer/dashboard/Wallet.vue";
import Tickets from "@/views/dashboard/customer/dashboard/Tickets.vue";
import Reports from "@/views/dashboard/customer/dashboard/Reports.vue";
import ChangePassword from "@/views/dashboard/customer/dashboard/ChangePassword.vue";
import Profile from "@/views/dashboard/customer/dashboard/Profile.vue";
const routes = [
    {
        path: "/customer",
        name: "CustomerLayout",
        component: CustomerLayout,

              children: [
                    {
                        path: "",
                        name: "CustomerDashboard",
                        component: CustomerDashboard
                    },
                    {
                        path: "post-job",
                        name: "PostJob",
                        component: PostJob,
                    },
                    {
                        path: "add-skills",
                        name: "AddSkills",
                        component: Skills,
                    },
                    {
                        path: "supervision",
                        name: "Supervision",
                        component: Supervision,
                    },
                    {
                        path: "form",
                        name: "Form",
                        component: Form,
                    },
                    {
                        path: "popup",
                        name: "Popup",
                        component: Popup,
                    },
                    {
                        path: "my-jobs",
                        name: "MyJobs",
                        component: CustomerJobs,
                    },
                    {
                        path: "job-details",
                        name: "JobDetails",
                        component: JobDetails,
                    },
                    {
                        path: "orders",
                        name: "Orders",
                        component: Orders,
                    },
                    {
                        path: "request-details",
                        name: "RequestDetails",
                        component: RequestDetails,
                    },
                    {
                        path: "services",
                        name: "Services",
                        component: Services,
                    },
                    {
                        path: "myoffers",
                        name: "MyOffers",
                        component: MyOffers,
                    },
                    {
                        path: "offer-details",
                        name: "OfferDetails",
                        component: OfferDetails,
                    },
                    {
                        path: "wallet",
                        name: "Wallet",
                        component: Wallet,
                    },
                    {
                        path: "tickets",
                        name: "Tickets",
                        component: Tickets,
                    },
                    {
                        path: "reports",
                        name: "Reports",
                        component: Reports,
                    },
                    {
                        path: "change-password",
                        name: "ChangePassword",
                        component: ChangePassword,
                    },
                    {
                        path: "profile",
                        name: "Profile",
                        component: Profile,
                    },

                ]
    }
];

export default routes;