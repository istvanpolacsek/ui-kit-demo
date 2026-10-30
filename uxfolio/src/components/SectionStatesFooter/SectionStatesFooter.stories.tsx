import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionStatesFooter } from "./SectionStatesFooter";
const meta = {
  title: "Section/_Section states / Footer",
  component: SectionStatesFooter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    toolbarThumbnailType: {
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
} satisfies Meta<typeof SectionStatesFooter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "Default",
    flipHorizontally: false,
    addMedia: false,
    addSocialLink: false,
    addText: false,
    addNavigation: false,
    toolbarThumbnailType: "Hero",
    mode: "Light",
  },
};
