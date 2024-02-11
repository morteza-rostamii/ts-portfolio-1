import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
} from '@chakra-ui/react'
import React from 'react'
import { HiBars2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function TopMenu({navs, smoothScroll}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const placement = 'top';

  const handLinkClick = (event:any, sectionId:string) => {
    smoothScroll(event, sectionId);
    onClose();
  }

  return (
    <div
    className='grid place-items-center'
    >
      <IconButton 
      aria-label=''
      colorScheme='green' 
      onClick={onOpen}
      isRound={true}
      icon={<HiBars2 size={24}/> }
      variant={'outline'}
      />
      <Drawer 
      placement={placement} 
      onClose={onClose} 
      isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
          display={'grid'}
          placeContent={'center'}
          >
            <nav
            className='
            flex flex-col gap-8 p-8
            '
            >
              {
                navs?.length
                ?(
                  navs.map((el:any) => (
                    <a
                    href={el.href}
                    //target='_blank'
                    key={el.id}
                    >
                      <Button
                      as={Link}
                      to={el.href}
                      variant={'outline'}
                      borderRadius={'9999px'}
                      width={'100%'}
                      onClick={(e:any) => handLinkClick(e, el.href)}
                      >
                        {el.name}
                      </Button>
                    </a>
                  ))
                ): ''
              }
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default TopMenu