import type { Meta, StoryObj } from "@storybook/react-vite";
import { DialogBody } from "./DialogBody";
const meta = {
  title: "Dialog/Dialog Body",
  component: DialogBody,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DialogBody>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    dismissible: true,
    body: "Body text",
    heading: "Text Heading",
    type: "Card",
  },
};
