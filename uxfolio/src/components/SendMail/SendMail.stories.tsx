import type { Meta, StoryObj } from "@storybook/react-vite";
import { SendMail } from "./SendMail";
const meta = {
  title: "Visual asset/Send mail",
  component: SendMail,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SendMail>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
