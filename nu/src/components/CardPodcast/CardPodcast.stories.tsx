import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPodcast } from "./CardPodcast";
const meta = {
  title: "  ↳ Cards/Card Podcast",
  component: CardPodcast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardPodcast>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Web" } };
