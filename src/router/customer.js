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

                ]
    }
];

export default routes;