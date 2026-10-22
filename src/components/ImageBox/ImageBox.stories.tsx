import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageBox } from "./ImageBox";
const meta = {
  title: "Module/Image box",
  component: ImageBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    imageBoxRegularState: {
      control: "select",
      options: ["Default", "Hover", "Active", "Passive"],
    },
    imageBoxRegularMode: { control: "select", options: ["Dark", "Light"] },
    imageBoxRegular2State: {
      control: "select",
      options: ["Default", "Hover", "Active", "Passive"],
    },
    imageBoxRegular2Mode: { control: "select", options: ["Dark", "Light"] },
  },
} satisfies Meta<typeof ImageBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "Flexible",
    imageBoxRegularHasCaption: true,
    imageBoxRegularMoveLeft: true,
    imageBoxRegularMoveRight: true,
    imageBoxRegularState: "Default",
    imageBoxRegularMode: "Light",
    imageBoxRegular2HasCaption: true,
    imageBoxRegular2MoveLeft: true,
    imageBoxRegular2MoveRight: true,
    imageBoxRegular2State: "Default",
    imageBoxRegular2Mode: "Light",
  },
};
