import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesProductDetailPage } from "./ExamplesProductDetailPage";
const meta = {
  title: "Examples/Examples/Product Detail Page",
  component: ExamplesProductDetailPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesProductDetailPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
