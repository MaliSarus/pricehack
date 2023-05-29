import type { Meta, StoryObj } from '@storybook/vue3';
import ProductCard from './ui.vue';
import './ProductCard.stories.scss';
type StoryProps = typeof ProductCard;

const meta = {
  title: 'UI/Карточка товара',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    product: {
      id: '1',
      images: [
        'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043',
        'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043'
      ],
      name: 'фотоАппарат',
      rate: 4.3,
      feedbackCount: 12,
      price: 130000,
      oldPrice: 200000,
      isNew: false,
      isSale: false
    }
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ProductCard },
    setup: () => {
      return {
        args
      };
    },
    template: /* HTML */ ` <div class="card-wrapper">
      <ProductCard v-bind="args" />
    </div>`
  })
};

export const Default: Story = {
  ...Template
};
