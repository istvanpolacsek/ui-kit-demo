import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormBox } from "./FormBox";
const meta = {
  title: "Module/Form box",
  component: FormBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasText: false,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
  },
};
