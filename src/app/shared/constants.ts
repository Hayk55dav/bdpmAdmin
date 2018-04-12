export const Constants = {
    //getWithParam: (param) => `test{$param}`,
    // apiBase: "http://85.143.213.234:81/",
    apiBase: 'https://requestbdpm.arsensench.com',
    apiBaseLocal: '',
    admin: {
        adminLogin: '/admin/login',
    },
    partnersAdmin: {
        getPartners: '/admin/getPartners',
        putAddPartner: '/addPartner',
        postEditPartner: '/editPartner',
        SaveOrUpdatePartnerLogo: '/savePartnerLogo'
    },
}


// export const ConstantsFake = {
//     apiBaseFake: "http://localhost:4200/",

//     adminFake: {
//         driverLoginFake: "administrator/login",
//     },
//     driverFake: {
//         getActiveDriversFake: "assets/fake-data/active-drivers.json",
//         getAllDriversFake: "administrator/getAllDrivers"
//     },
//     jobFake: {
//         getAllActiveJobsFake: "assets/fake-data/all-active-jobs.json"
//     }
// }