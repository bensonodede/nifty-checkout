import mixpanel from "mixpanel-browser";

// Initialize mixpanel
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

// Check if app is running in production
let env_check = process.env.NODE_ENV === "production";

// Define mixpanel actions
let actions = {
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    }
  }
};

// Export mixpanel actions
export let Mixpanel = actions;
