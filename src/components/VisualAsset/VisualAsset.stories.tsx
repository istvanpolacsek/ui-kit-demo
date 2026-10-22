import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisualAsset } from "./VisualAsset";
import { visualAssetNameOptions } from "./VisualAsset.options";
const meta = {
  title: "Visual asset/Visual asset",
  component: VisualAsset,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof VisualAsset>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { name: "Chevron right", size: 24 } };

const names = visualAssetNameOptions;
export const AllIcons: Story = {
  args: Default.args,
  parameters: { layout: "padded" },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
      }}
    >
      {names.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
          }}
        >
          <VisualAsset {...args} name={name as typeof args.name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
