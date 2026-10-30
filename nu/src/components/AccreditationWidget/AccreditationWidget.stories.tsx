import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccreditationWidget } from "./AccreditationWidget";
const meta = {
  title: "  ↳ Widgets/Accreditation Widget",
  component: AccreditationWidget,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AccreditationWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
