import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoBox } from "./LogoBox";
const meta = {
  title: "Module/Logo box",
  component: LogoBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { moveLeft: true, moveRight: true, mode: "Light" },
};
