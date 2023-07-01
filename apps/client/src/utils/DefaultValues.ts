import createUniqueId from "./createUid";

const getDefaultBusiness = () => {
  return {
    address: "",
    email: "",
    name: "",
    phone: "",
    website: "",
    coverImage: "",
    logo: "",
    id: createUniqueId(),
    ownerId: "",
  };
};

export { getDefaultBusiness };
