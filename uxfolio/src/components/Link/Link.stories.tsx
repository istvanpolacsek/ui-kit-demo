import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";
const meta = {
  title: "Visual asset/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
