import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageBoxTight } from "./ImageBoxTight";
const meta = {
  title: "Module/Image box / Tight",
  component: ImageBoxTight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    aspectRatio: {
      control: "select",
      options: [
        "1:1",
        "3:2",
        "4:3",
        "5:4",
        "16:9",
        "21:9",
        "2:3",
        "3:4",
        "4:5",
        "9:16",
      ],
    },
  },
} satisfies Meta<typeof ImageBoxTight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", mode: "Light", snaps: false, aspectRatio: "1:1" },
};
