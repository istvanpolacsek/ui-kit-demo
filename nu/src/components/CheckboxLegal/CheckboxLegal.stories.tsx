import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxLegal } from "./CheckboxLegal";
const meta = {
  title: "  ↳ Controls/Checkbox Legal",
  component: CheckboxLegal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CheckboxLegal>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
