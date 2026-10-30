import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactData } from "./ContactData";
const meta = {
  title: "  ↳ Form/Contact Data",
  component: ContactData,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ContactData>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed" } };
