import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddPageOrSocialButton } from "./AddPageOrSocialButton";
const meta = {
  title: "Button/Add page or social button",
  component: AddPageOrSocialButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddPageOrSocialButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
