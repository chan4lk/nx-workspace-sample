
import { CardComponent } from './card.component';
const note = `
  ## Usage

  ~~~html 
  
  <my-account-workspace-car id="5"></my-account-workspace-card> 

  ~~~
`;

export default {
  title: 'CardComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: CardComponent,
  props: {
  }
})

primary.story = {
  parameters: {
    notes: { markdown: note },
  }
};
