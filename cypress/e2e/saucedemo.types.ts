export type SauceDemoCredentials = {
    username: string;
    lockedOutUser: string;
    problemUser: string;
    password: string;
};

export type SauceDemoProducts = {
    fleeceJacket: string;
    boltTShirt: string;
    backpack: string;
    bikeLight: string;
    onesie: string;
    testAllTheThings: string;
};

export type CheckoutProfile = {
    firstName: string;
    lastName: string;
    postalCode: string;
};

export type SauceDemoTestData = {
    baseUrl: string;
    credentials: SauceDemoCredentials;
    products: SauceDemoProducts;
    checkoutProfiles: CheckoutProfile[];
};
