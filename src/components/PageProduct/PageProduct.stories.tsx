import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageProduct } from "./PageProduct";
const meta = {
  title: "Sections/Page Product",
  component: PageProduct,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PageProduct>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
