/* eslint-disable */
import Api from "@/services/api";

export default {
    StudentRegister(Credentials) {
        return Api().post("StudentDataRegister", Credentials);
    },

    studentLogin(Credentials) {
        return Api().post("studentLogin", Credentials);
    },
    staffLogin(Credentials) {
        return Api().post("staffLogin", Credentials);
    },
    changePassword(Credentials) {
        return Api().post("changePassword", Credentials);
    },
    getData(token) {
        return Api().get("getData", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
};