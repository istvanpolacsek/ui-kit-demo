import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgramItems } from "./ProgramItems";
const meta = {
  title: "  ↳ Navigation/Program Items",
  component: ProgramItems,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProgramItems>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };
