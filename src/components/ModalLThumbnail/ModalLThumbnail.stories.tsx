import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalLThumbnail } from "./ModalLThumbnail";
const meta = {
  title: "Overlay/Modal / L / Thumbnail",
  component: ModalLThumbnail,
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
} satisfies Meta<typeof ModalLThumbnail>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "Designer layout",
    tabBarType: "Simple",
    number: 3,
    selected: 1,
    mode: "Dark",
  },
};
