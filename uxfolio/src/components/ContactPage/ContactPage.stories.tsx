import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactPage } from "./ContactPage";
const meta = {
  title: "Visual asset/Contact page",
  component: ContactPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ContactPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
