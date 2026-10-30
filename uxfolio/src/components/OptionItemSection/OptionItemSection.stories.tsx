import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionItemSection } from "./OptionItemSection";
const meta = {
  title: "Input/Option item / Section",
  component: OptionItemSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionItemSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
