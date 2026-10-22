import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderModal } from "./HeaderModal";
const meta = {
  title: "Panel/Header / Modal",
  component: HeaderModal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    tabBarType: {
      control: "select",
      options: ["Simple", "Side icon", "Top icon"],
    },
    number: { control: "select", options: [2, 3, 4, 5] },
    selected: { control: "select", options: [1, 2, 3, 4, 5] },
    tabBarMode: { control: "select", options: ["Dark", "Light"] },
    tabRowMode: { control: "select", options: ["Dark", "Light"] },
  },
} satisfies Meta<typeof HeaderModal>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "Simple",
    mode: "Light",
    tabBarType: "Simple",
    number: 3,
    selected: 1,
    tabBarMode: "Light",
    tabRowMode: "Light",
  },
};
