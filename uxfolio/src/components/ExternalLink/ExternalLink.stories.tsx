import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExternalLink } from "./ExternalLink";
const meta = {
  title: "Visual asset/External link",
  component: ExternalLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExternalLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
