import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioOption } from "./RadioOption";
const meta = {
  title: "  ↳ Controls/Radio Option",
  component: RadioOption,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioOption>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
