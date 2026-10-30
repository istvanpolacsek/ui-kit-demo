import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageBoxRegular } from "./ImageBoxRegular";
const meta = {
  title: "Module/Image box / Regular",
  component: ImageBoxRegular,
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
} satisfies Meta<typeof ImageBoxRegular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasCaption: true,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
    snaps: false,
    aspectRatio: "1:1",
  },
};
