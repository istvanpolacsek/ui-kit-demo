import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "./LinkButton";
const meta = {
  title: "Button/Link button",
  component: LinkButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LinkButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { size: "Large", mode: "Light" } };
