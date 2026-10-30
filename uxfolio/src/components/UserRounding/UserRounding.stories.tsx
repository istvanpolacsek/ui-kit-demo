import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserRounding } from "./UserRounding";
const meta = {
  title: "Visual asset/User rounding",
  component: UserRounding,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof UserRounding>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Radius - no", mode: "Light" } };
