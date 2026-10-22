import type { Meta, StoryObj } from "@storybook/react-vite";
import { IllustrationFeatureCTA } from "./IllustrationFeatureCTA";
const meta = {
  title: "Visual asset/Illustration / Feature CTA",
  component: IllustrationFeatureCTA,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IllustrationFeatureCTA>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Inspiration", mode: "Light" } };
