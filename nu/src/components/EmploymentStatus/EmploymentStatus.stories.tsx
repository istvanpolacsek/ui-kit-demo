import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmploymentStatus } from "./EmploymentStatus";
const meta = {
  title: "  ↳ Form/Employment Status",
  component: EmploymentStatus,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EmploymentStatus>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };
