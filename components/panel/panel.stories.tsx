import { Meta, Story } from '@storybook/react';
import { Panel as Component, PanelProps } from './panel.component';

export default {
  title: 'Components / Collapsable Panel',
  component: Component,
  args: {
    title: 'Solicită ajutor de la profesioniști',
    collapsable: true,
  } as PanelProps,
} as Meta;

export const Panel: Story<PanelProps> = (args) => (
  <>
    <Component {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam soluta
      tenetur unde. Architecto dolore eveniet excepturi voluptatem! Ab beatae
      debitis inventore modi, officiis porro quam quibusdam similique totam
      veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
      nam soluta tenetur unde. Architecto dolore eveniet excepturi voluptatem!
      Ab beatae debitis inventore modi, officiis porro quam quibusdam similique
      totam veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Hic nam soluta tenetur unde. Architecto dolore eveniet excepturi
      voluptatem! Ab beatae debitis inventore modi, officiis porro quam
      quibusdam similique totam veritatis. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Hic nam soluta tenetur unde. Architecto
      dolore eveniet excepturi voluptatem! Ab beatae debitis inventore modi,
      officiis porro quam quibusdam similique totam veritatis. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit. Hic nam soluta tenetur unde.
      Architecto dolore eveniet excepturi voluptatem! Ab beatae debitis
      inventore modi, officiis porro quam quibusdam similique totam veritatis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam soluta
      tenetur unde. Architecto dolore eveniet excepturi voluptatem! Ab beatae
      debitis inventore modi, officiis porro quam quibusdam similique totam
      veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
      nam soluta tenetur unde. Architecto dolore eveniet excepturi voluptatem!
      Ab beatae debitis inventore modi, officiis porro quam quibusdam similique
      totam veritatis.
    </Component>

    <Component {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam soluta
      tenetur unde. Architecto dolore eveniet excepturi voluptatem! Ab beatae
      debitis inventore modi, officiis porro quam quibusdam similique totam
      veritatis.
    </Component>

    <Component {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam soluta
      tenetur unde. Architecto dolore eveniet excepturi voluptatem! Ab beatae
      debitis inventore modi, officiis porro quam quibusdam similique totam
      veritatis.
    </Component>

    <Component {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nam soluta
      tenetur unde. Architecto dolore eveniet excepturi voluptatem! Ab beatae
      debitis inventore modi, officiis porro quam quibusdam similique totam
      veritatis.
    </Component>
  </>
);
