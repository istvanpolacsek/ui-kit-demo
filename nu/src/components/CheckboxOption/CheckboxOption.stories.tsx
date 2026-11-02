import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxOption } from "./CheckboxOption";
const meta = {
  title: "  ↳ Controls/Checkbox Option",
  component: CheckboxOption,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CheckboxOption>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
