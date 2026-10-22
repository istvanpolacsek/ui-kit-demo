import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderSidebar } from "./HeaderSidebar";
const meta = {
  title: "Panel/Header / Sidebar",
  component: HeaderSidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    tabBarType: {
      control: "select",
      options: ["Simple", "Side icon", "Top icon"],
    },
    number: { control: "select", options: [2, 3, 4, 5] },
    selected: { control: "select", options: [1, 2, 3, 4, 5] },
    mode: { control: "select", options: ["Dark", "Light"] },
  },
} satisfies Meta<typeof HeaderSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasBack: false,
    type: "Simple",
    tabBarType: "Simple",
    number: 3,
    selected: 1,
    mode: "Dark",
  },
};
export const Selected: Story = { args: { ...Default.args, selected: true } };
