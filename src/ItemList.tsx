import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Heading,
} from '@chakra-ui/react';
import TabsContent from './Tabs';
import Footer from './Footer';

function ItemList() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <AccordionIcon />
            <Heading
              as="h2"
              fontSize="25px"
              letterSpacing="3px"
              fontWeight="300"
            >
              What needs to be done?
            </Heading>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Divider />
          <TabsContent />
          <Footer />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ItemList;
