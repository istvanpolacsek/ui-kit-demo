import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroSidebar } from "./HeroSidebar";
const meta = {
  title: "Section/Hero / Sidebar",
  component: HeroSidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    side: {
      control: "select",
      options: ["Left image", "Normal", "Right image"],
    },
    type: {
      control: "select",
      options: [
        "General",
        "Column",
        "Gallery",
        "Subtitle",
        "Logo",
        "Process",
        "Divider line",
        "Portfolio",
        "Navigation",
        "Hero",
        "Footer",
        "Case study nav",
        "Horizontal",
        "Horizontal open",
        "Horizontal closed",
        "Sidebar hero",
      ],
    },
    mode: { control: "select", options: ["Light", "Dark"] },
  },
} satisfies Meta<typeof HeroSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    navAlignment: "Bottom",
    hasBackground: "False",
    side: "Normal",
    flipHorizontally: false,
    addMedia: false,
    addSocialLink: false,
    addText: false,
    addNavigation: false,
    type: "Navigation",
    mode: "Light",
  },
};
