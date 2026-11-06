import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
  ],
  addons: ["@storybook/addon-docs"],
  features: { sidebarOnboardingChecklist: false },
  core: { disableWhatsNewNotifications: true },
  framework: "@storybook/react-vite",
};

export default config;
