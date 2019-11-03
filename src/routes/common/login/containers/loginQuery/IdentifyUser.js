import { Mixpanel } from "components/mixpanel";

// Mixpanel identification
const IdentifyUser = authUser => {
  // Destructure login info
  let { providerData, metadata, uid } = authUser,
    { displayName, email, providerId } = providerData[0],
    { creationTime, lastSignInTime } = metadata;

  // Identify user in Mixpanel
  Mixpanel.identify(uid);

  // Set user profile in Mixpanel
  //? Reason: mixpanel does not accept formated syntax without quotations
  // prettier-ignore
  Mixpanel.people.set({
   "name": displayName,
   "$email": email,
   "$provider_ID": providerId,
   "$creation_time":creationTime,
   "$last_sign_in_time": lastSignInTime
 });
};

export default IdentifyUser;
